import Projects from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10">
      <header className="mb-10">
        <p className="font-mono text-sm text-muted-foreground">
          akshaj@portfolio:~$ cd projects
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          All Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          Detailed case studies, tech stack, and links for each project.
        </p>
      </header>

      <Projects title="" terminalCommand="" compactCards />
    </main>
  );
}
