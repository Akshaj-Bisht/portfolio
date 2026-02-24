import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiAppwrite,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGo,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
};

type LearningTechnology = {
  name: string;
  icon?: IconType;
  iconSrc?: string;
};

const technologies: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Express", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Appwrite", icon: SiAppwrite },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "Linux", icon: SiLinux },
];

const learningNow: LearningTechnology[] = [
  { name: "TanStack Start", iconSrc: "/tanstack-icons/tanstack-white.svg" },
  { name: "Golang", icon: SiGo },
];

export default function Technologies() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-8 md:px-10">
      <p className="font-mono text-sm text-muted-foreground">
        akshaj@portfolio:~$ cat tech-stack
      </p>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Tech Stack</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Tools I use to design, build, and ship reliable products.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-lg border border-border bg-card/80 px-4 py-3"
          >
            <Icon className="size-4 text-foreground" aria-hidden="true" />
            <span className="text-sm text-foreground/90">{name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Learning Right Now
        </h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {learningNow.map(({ name, icon: Icon, iconSrc }) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-md border border-border/80 bg-card/70 px-3 py-2"
            >
              {iconSrc ? (
                <Image
                  src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="size-4"
                />
              ) : Icon ? (
                <Icon className="size-4 text-primary" aria-hidden="true" />
              ) : null}
              <span className="text-sm text-foreground/90">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
