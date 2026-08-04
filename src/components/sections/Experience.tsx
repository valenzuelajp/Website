"use client";

import { motion } from "motion/react";
import BlurText from "@/components/BlurText";

const experiences = [
  {
    title: "Internship Trainee",
    company: "My Own EVA",
    type: "Internship",
    period: "Aug 2024 - Nov 2024 · 4 mos",
    location: "California, United States · Remote",
    bullets: [
      "Completed a remote internship as a Trainee in Web Design and Development.",
      "Used Figma and Canva to create website wireframes and layouts.",
      "Developed and edited websites using GoDaddy and WordPress for various clients.",
      "Managed multiple projects including wireframing for client brands.",
      "Acquired skills in aligning design concepts with client brand identities.",
    ],
    tags: ["Web Design", "Web Development", "Figma", "WordPress", "Canva"],
  },
  {
    title: "Immersion",
    company: "Creotech Philippines Inc.",
    type: "Internship",
    period: "Sep 2020 - Oct 2020 · 2 mos",
    location: "Dasmariñas, Cavite · On-site",
    bullets: [
      "Studied and documented company production processes.",
      "Assisted in the manufacturing of Printed Circuit Boards (PCBs).",
    ],
    tags: ["Manufacturing", "PCB Assembly", "Documentation"],
  },
];

const projects = [
  {
    title: "AConnect: Alumni Engagement & Career Platform",
    link: "https://sdcaconnect.online",
    description: "A Web App for Enhancing Alumni Engagement and Career Opportunities",
    bullets: [
      "Developed a web application to address high youth unemployment by centralizing job searching and professional networking.",
      "Engineered a full-stack system using CodeIgniter and PHP for the backend, with MySQL database.",
      "Designed the user interface with Figma.",
      "Integrated job posting board, networking module, and chat support system.",
    ],
    tags: ["CodeIgniter", "PHP", "MySQL", "Figma", "Web Design"],
  },
  {
    title: "IoE Based Carbon Monoxide Monitoring System",
    description: "Arduino & ESP32 Integration — Undergraduate Research",
    bullets: [
      "Designed an IoE-based system to monitor and report real-time carbon monoxide levels.",
      "Integrated Arduino and MQ gas sensor with ESP32 Dev Board.",
      "Developed a mobile application using C# and Maui.net framework.",
      "Adhered to Agile methodology for development.",
    ],
    tags: ["Arduino", "ESP32", "C#", "Maui.net", "IoT", "Agile"],
  },
];

function TimelineCard({ item, index }: { item: typeof experiences[0] | typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative pl-8 pb-12 border-l border-white/10 last:pb-0">
        <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-amber-500/50 border-2 border-amber-400 group-hover:bg-amber-400 transition-colors" />
        <div data-tilt data-tilt-amount="4" className="card-spotlight rounded-xl p-6 transition-all duration-500">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-white font-display">{item.title}</h3>
              {"company" in item && (
                <p className="text-amber-400/80 text-sm">{item.company}</p>
              )}
            </div>
            {"period" in item && (
              <span className="text-xs text-zinc-500 shrink-0">{item.period}</span>
            )}
          </div>
          {"location" in item && (
            <p className="text-zinc-500 text-xs mb-3">{item.location}</p>
          )}
          {"description" in item && (
            <p className="text-zinc-400 text-sm mb-3">{item.description}</p>
          )}
          <ul className="space-y-2 mb-4">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300/80 border border-amber-500/20">
                {tag}
              </span>
            ))}
          </div>
          {"link" in item && item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              data-magnetic-strength="8"
              className="inline-flex items-center gap-1 mt-4 text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              Visit site →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-amber-400">Experience</span>
        </motion.div>

        <BlurText
          text="Experience & Projects"
          className="text-3xl md:text-5xl font-bold text-white mb-16 font-display"
          delay={30}
          animateBy="words"
          direction="top"
          threshold={0.1}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-8">Professional Experience</h3>
            {experiences.map((exp, i) => (
              <TimelineCard key={i} item={exp} index={i} />
            ))}
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-8">Projects</h3>
            {projects.map((proj, i) => (
              <TimelineCard key={i} item={proj} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
