import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects } from "@/lib/projects";

type ProjectsProps = {
  limit?: number;
  title?: string;
  description?: string;
  terminalCommand?: string;
  showAllProjectsButton?: boolean;
  selectedOnly?: boolean;
  compactCards?: boolean;
};

export default function Projects({
  limit,
  title = "Selected Projects",
  description,
  terminalCommand = "akshaj@portfolio:~$ ls projects",
  showAllProjectsButton = false,
  selectedOnly = false,
  compactCards = false,
}: ProjectsProps) {
  const allProjects = selectedOnly
    ? getProjects().filter((project) => project.selectedProject)
    : getProjects();
  const projects =
    typeof limit === "number" ? allProjects.slice(0, limit) : allProjects;
  const useCompactCards = selectedOnly || compactCards;

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-6 md:px-10"
    >
      {terminalCommand ? (
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          {terminalCommand}
        </p>
      ) : null}
      {title ? (
        <div className="mt-4 flex flex-wrap items-start justify-between gap-3 sm:items-center">
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {showAllProjectsButton ? (
            <Button asChild variant="outline" size="sm">
              <Link href="/projects">All Projects</Link>
            </Button>
          ) : null}
        </div>
      ) : null}
      {description ? (
        <p className="mt-3 max-w-[62ch] text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}

      <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="relative overflow-hidden border-border/80 bg-card/80 backdrop-blur-sm transition-colors hover:border-border"
          >
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Open ${project.title}`}
              className="absolute inset-0 z-0 rounded-xl"
            />
            <div className="relative z-10 pointer-events-none">
              {useCompactCards ? (
                <div className="flex flex-col gap-4 p-4 sm:flex-row">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={240}
                      height={140}
                      className="h-24 w-full rounded-lg border border-border/70 object-cover sm:h-28 sm:w-44"
                    />
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                      {project.summary}
                    </p>
                    {project.stack.length > 0 ? (
                      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground sm:px-2.5 sm:text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs sm:mt-5 sm:gap-4 sm:text-sm">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="pointer-events-auto text-primary hover:underline"
                      >
                        open --project {project.slug}
                      </Link>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink
                            className="size-3.5"
                            aria-hidden="true"
                          />
                          live
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                        >
                          <SiGithub className="size-3.5" aria-hidden="true" />
                          github
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {project.image ? (
                    <div className="px-4 pt-4">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={1200}
                        height={630}
                        className="w-full rounded-lg border border-border/70 object-cover"
                      />
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {project.stack.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
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
                    <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs sm:gap-4 sm:text-sm">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="pointer-events-auto text-primary hover:underline"
                      >
                        open --project {project.slug}
                      </Link>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink
                            className="size-3.5"
                            aria-hidden="true"
                          />
                          live
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                        >
                          <SiGithub className="size-3.5" aria-hidden="true" />
                          github
                        </a>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                      {project.summary}
                    </p>
                  </CardContent>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
