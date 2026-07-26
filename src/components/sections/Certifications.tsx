"use client";

import { motion } from "motion/react";
import TiltedCard from "@/components/TiltedCard";
import BlurText from "@/components/BlurText";

const certs = [
  { name: "Python Essentials 1", image: "/phyton.png", badge: "https://www.credly.com/" },
  { name: "Cybersecurity Essentials", image: "/esssential.png", badge: "https://www.credly.com/" },
  { name: "Introduction to Cybersecurity", image: "/intro-cyber.png", badge: "https://www.credly.com/" },
  { name: "IT Specialist - HTML and CSS", image: "/html-css.png", badge: "https://www.credly.com/" },
  { name: "Operating Systems Basics", image: "/osb.png", badge: "https://www.credly.com/" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />

      <div className="container-cinematic section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-purple-400">Certifications</span>
        </motion.div>

        <BlurText
          text="Certifications"
          className="text-3xl md:text-5xl font-bold text-white mb-12"
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltedCard
                imageSrc={cert.image}
                altText={cert.name}
                captionText={cert.name}
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.02}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="flex flex-col items-center justify-center h-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-white text-sm font-medium text-center">{cert.name}</p>
                    <a
                      href={cert.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-3 py-1 text-xs rounded-full bg-purple-500/80 text-white hover:bg-purple-400 transition-colors"
                    >
                      View Badge →
                    </a>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
