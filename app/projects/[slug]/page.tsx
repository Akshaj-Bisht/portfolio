import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 md:px-10">
      <p className="font-mono text-sm text-muted-foreground">
        akshaj@portfolio:~$ cat projects/{project.slug}.md
      </p>

      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        {project.summary}
      </p>

      {project.stack.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Button asChild size="lg">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" aria-hidden="true" />
              Live Project
            </a>
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button asChild variant="outline" size="lg">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <SiGithub className="size-4" aria-hidden="true" />
              GitHub Repo
            </a>
          </Button>
        ) : null}
        <Button asChild variant="ghost" size="lg">
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
      {project.content ? (
        <article className="mt-8 space-y-4 text-foreground/90 leading-8 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-semibold [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:text-base [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-card [&_pre]:p-4">
          <MDXRemote source={project.content} />
        </article>
      ) : null}
    </main>
  );
}
