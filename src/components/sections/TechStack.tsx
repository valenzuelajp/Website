"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import BlurText from "@/components/BlurText";

const techs = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

function TechCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300 group"
    >
      <img src={tech.icon} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm text-zinc-400 group-hover:text-amber-300 transition-colors">{tech.name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-32">
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
            <span className="text-base" role="img" aria-label="tools">⚒️</span> Tech Stack
          </span>
        </motion.div>

        <BlurText
          text="Tech Stack"
          className="text-3xl md:text-5xl font-bold text-white mb-12 font-display"
          delay={30}
          animateBy="words"
          direction="top"
          threshold={0.1}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {techs.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
