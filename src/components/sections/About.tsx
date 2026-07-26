"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />

      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-amber-400">
            <span className="text-base" role="img" aria-label="sparkles">✦</span> About
          </span>
        </motion.div>

        <BlurText
          text="About Me"
          className="text-3xl md:text-5xl font-bold text-white mb-8 font-display"
          delay={30}
          animateBy="words"
          direction="top"
          threshold={0.1}
        />

        <ScrollReveal>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            I am Jhon Paul Valenzuela, a passionate student and aspiring developer based in Bacoor, Cavite.
            My journey in technology is fueled by a deep curiosity for solving complex problems through
            elegant code and modern design. I enjoy turning complex challenges into simple, beautiful,
            and intuitive user experiences.
          </p>
        </ScrollReveal>

        <div className="mt-8">
          <ScrollReveal>
            <div className="relative p-6 rounded-xl border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-purple-500/5">
              <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
                My professional goal is to become a versatile full-stack developer capable of building robust
                web applications. I aspire to contribute to innovative projects that solve real-world problems
                and make a positive impact on users&apos; lives. Ultimately, I hope to work alongside talented
                teams where I can continuously learn, grow, and take on exciting new challenges in the tech industry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
