"use client"

import About from "@/components/home/about";
import Education from "@/components/home/education";
import { Hero } from "@/components/home/hero";
import { Header } from "@/components/home/navbar";
import { Skills } from "@/components/home/skills";

import { useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <Header  isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}/>

        <main className="w-full flex-1">
          <Hero />
          <About/>
          <Education />
          <Skills />
        </main>
    </div>
  );
}
