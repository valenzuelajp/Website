"use client";

import { useLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import FloatingElements from "@/components/FloatingElements";
import ScrollAnimations from "@/components/ScrollAnimations";
import SiteInteractions from "@/components/SiteInteractions";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const lenis = useLenis();

  return (
    <>
      <ScrollAnimations lenis={lenis ?? null} />
      <SiteInteractions />
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
    </>
  );
}
