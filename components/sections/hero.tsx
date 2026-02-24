"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

function getAge(dateOfBirth: Date) {
  const today = new Date();
  let years = today.getFullYear() - dateOfBirth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > dateOfBirth.getMonth() ||
    (today.getMonth() === dateOfBirth.getMonth() &&
      today.getDate() >= dateOfBirth.getDate());

  if (!hasHadBirthdayThisYear) {
    years -= 1;
  }

  return years;
}

export default function Hero() {
  const age = getAge(new Date("2005-09-12"));

  return (
    <section className="mx-auto flex min-h-[68vh] w-full max-w-4xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="font-mono text-xs text-muted-foreground sm:text-sm"
      >
        akshaj@portfolio:~$ whoami
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl"
      >
        Akshaj Bisht
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="mt-2 text-base text-muted-foreground sm:text-lg md:text-xl"
      >
        Full Stack Developer, backend-leaning
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="mt-5 max-w-[62ch] text-pretty text-[0.98rem] leading-7 text-foreground/90 sm:text-base sm:leading-8 md:text-lg"
      >
        B.Sc. Computer Science student at the University of Delhi, based in
        Faridabad, Haryana. I build production-ready web apps with Next.js,
        TypeScript, and PostgreSQL, and I especially enjoy backend architecture,
        API design, and scalable systems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.23, duration: 0.35 }}
        className="mt-3 font-mono text-xs text-muted-foreground sm:text-sm"
      >
        3rd-year B.Sc. CS student · {age} years old
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.35 }}
        className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"
      >
        <Button asChild size="lg">
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link
            href="https://github.com/Akshaj-Bisht"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="size-4" aria-hidden="true" />
            GitHub
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
