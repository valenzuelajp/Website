"use client";

import { motion } from "motion/react";
import ScrollReveal from "@/components/ScrollReveal";
import BlurText from "@/components/BlurText";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-amber-400">About</span>
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
            <div data-tilt data-tilt-amount="4" className="card-spotlight relative p-6 rounded-xl">
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
