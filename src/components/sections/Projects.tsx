"use client";

import { motion } from "motion/react";
import BlurText from "@/components/BlurText";

const featuredProjects = [
  {
    title: "AConnect",
    subtitle: "Alumni Engagement & Career Platform",
    description:
      "A full-stack platform designed to strengthen alumni networks, surface career opportunities, and simplify community engagement.",
    impact: "Centralized career support and networking in one experience for students and alumni.",
    stack: ["CodeIgniter", "PHP", "MySQL", "Figma"],
    link: "https://sdcaconnect.online",
  },
  {
    title: "Carbon Monoxide Monitor",
    subtitle: "IoT Research Prototype",
    description:
      "An embedded monitoring system that tracks air quality in real time and reports changes through a connected mobile app.",
    impact: "Bridged hardware sensing, real-time data flow, and a cross-platform interface for environmental monitoring.",
    stack: ["Arduino", "ESP32", "C#", "Maui.net"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,195,107,0.06),transparent_30%),linear-gradient(180deg,rgba(8,6,4,0.9)_0%,rgba(8,6,4,0.76)_100%)] pointer-events-none" />

      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-amber-400">Projects</span>
        </motion.div>

        <BlurText
          text="Featured Projects"
          className="text-3xl md:text-5xl font-bold text-white mb-12 font-display"
          delay={30}
          animateBy="words"
          direction="top"
          threshold={0.1}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-amber-500/20 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white font-display">{project.title}</h3>
                    <p className="text-sm text-amber-400/80">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-300"
                    >
                      Visit ↗
                    </a>
                  )}
                </div>

                <p className="text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                <p className="text-sm text-zinc-300 mb-5">{project.impact}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
