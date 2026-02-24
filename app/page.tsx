import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";

export default function Home() {
  return (
    <main className="space-y-12 md:space-y-14">
      <Hero />
      <Technologies />
      <Projects selectedOnly showAllProjectsButton />
      <Contact />
    </main>
  );
}
