"use client";

import { motion } from "motion/react";
import BlurText from "@/components/BlurText";

const certs = [
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/phyton.png",
    badge: "https://www.credly.com/",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    image: "/esssential.png",
    badge: "https://www.credly.com/",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: "/intro-cyber.png",
    badge: "https://www.credly.com/",
  },
  {
    name: "IT Specialist - HTML and CSS",
    issuer: "Pearson",
    image: "/html-css.png",
    badge: "https://www.credly.com/",
  },
  {
    name: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    image: "/osb.png",
    badge: "https://www.credly.com/",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,195,107,0.08),transparent_28%),linear-gradient(180deg,rgba(8,6,4,0.88)_0%,rgba(8,6,4,0.8)_100%)] pointer-events-none" />

      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-amber-400">Certifications</span>
        </motion.div>

        <BlurText
          text="Certifications"
          className="text-3xl md:text-5xl font-bold text-white mb-12 font-display"
          delay={30}
          animateBy="words"
          direction="top"
          threshold={0.1}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              className="h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-4 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-amber-500/20 hover:bg-white/[0.05] will-change-transform">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,195,107,0.08),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                <div className="relative overflow-hidden rounded-xl border border-white/6 bg-black/20">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    loading="lazy"
                    decoding="async"
                    className="h-[300px] w-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>

                <div className="relative mt-4 space-y-1">
                  <p className="text-xs tracking-[0.24em] uppercase text-amber-400/70">{cert.issuer}</p>
                  <h3 className="text-base font-semibold text-white font-display">{cert.name}</h3>
                  <a
                    href={cert.badge}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-300 transition-colors hover:text-amber-200"
                  >
                    View Badge →
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
