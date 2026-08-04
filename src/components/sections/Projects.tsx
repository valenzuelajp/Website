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
              data-tilt
              data-tilt-amount="4"
              className="card-spotlight group relative overflow-hidden rounded-xl p-7 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">{project.title}</h3>
                    <p className="text-xs text-amber-500/80 uppercase tracking-widest font-mono">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnetic
                      data-magnetic-strength="8"
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
