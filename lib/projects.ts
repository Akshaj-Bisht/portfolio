import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  index: number;
  title: string;
  summary: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
  content: string;
  selectedProject: boolean;
};

type ProjectFrontmatter = {
  index?: number | string;
  order?: number | string;
  title?: string;
  summary?: string;
  stack?: string[];
  href?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  selectedProject?: boolean | string | number;
};

function parseProjectIndex(
  value: ProjectFrontmatter["index"],
  fallback = 9999,
) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number.parseInt(value.trim(), 10);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
}

function parseSelectedProject(value: ProjectFrontmatter["selectedProject"]) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value === 1;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return ["true", "ture", "1", "yes", "y"].includes(normalized);
  }

  return false;
}

function readProject(fileName: string): Project {
  const filePath = path.join(projectsDir, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ProjectFrontmatter;
  const slug = fileName.replace(/\.md$/, "");

  return {
    slug,
    index: parseProjectIndex(frontmatter.index ?? frontmatter.order),
    title: frontmatter.title ?? slug,
    summary: frontmatter.summary ?? "",
    stack: frontmatter.stack ?? [],
    liveUrl: frontmatter.liveUrl ?? frontmatter.href ?? "",
    githubUrl: frontmatter.githubUrl ?? "",
    image: frontmatter.image ?? "",
    imageAlt: frontmatter.imageAlt ?? `${frontmatter.title ?? slug} preview`,
    content: content.trim(),
    selectedProject: parseSelectedProject(frontmatter.selectedProject),
  };
}

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".md"))
    .map(readProject)
    .sort((a, b) => {
      if (a.index !== b.index) {
        return a.index - b.index;
      }

      return a.title.localeCompare(b.title);
    });
}

export function getProjectBySlug(slug: string): Project | null {
  if (!fs.existsSync(projectsDir)) {
    return null;
  }

  const filePath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readProject(`${slug}.md`);
}
