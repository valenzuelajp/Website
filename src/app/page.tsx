"use client";

import { useLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const lenis = useLenis();

  return (
    <>
      <ScrollAnimations lenis={lenis ?? null} />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Certifications />
      <Contact />
    </>
  );
}
