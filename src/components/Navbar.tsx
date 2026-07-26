"use client";

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const lenis = useLenis();

  const scrollTo = (href: string) => {
    lenis?.scrollTo(href, { duration: 1.5, offset: -80 });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50 border-b border-white/5"
    >
      <button onClick={() => scrollTo("#hero")} className="text-lg font-semibold tracking-tight text-white">
        JP
      </button>
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            size="sm"
            onClick={() => scrollTo(link.href)}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {link.label}
          </Button>
        ))}
      </div>
    </motion.nav>
  );
}
