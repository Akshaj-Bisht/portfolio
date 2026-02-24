import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-16 md:px-10">
      <p className="font-mono text-sm text-muted-foreground">
        akshaj@portfolio:~$ links --social
      </p>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Contact</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Open to freelance, collaboration, and full-time opportunities.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="outline" size="lg">
          <a
            href="https://github.com/Akshaj-Bisht"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </Button>

        <Button asChild variant="outline" size="lg">
          <a
            href="https://www.linkedin.com/in/akshaj-bisht"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
        </Button>

        <Button asChild size="lg">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaj.bisht12@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email
          </a>
        </Button>
      </div>
    </section>
  );
}
