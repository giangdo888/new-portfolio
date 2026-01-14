import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { StarrySky } from "@/components/background/StarrySky";

export default function Home() {
  return (
    <main className="relative">
      {/* Starry Sky Background - covers entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarrySky />
      </div>
      
      {/* Content with relative z-index */}
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
