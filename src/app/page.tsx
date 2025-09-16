"use client"

import About from "@/components/home/about";
import Education from "@/components/home/education";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { Skills } from "@/components/home/skills";


export default function Home() {
  return (
    <main className="w-full flex-1">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
