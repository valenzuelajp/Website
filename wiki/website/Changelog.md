---
tags:
  - "#meta"
  - "#changelog"
aliases:
  - Changes
  - Log
---

# Changelog

Track every change to this wiki and project. Newest entries go at the **top**.

> [!IMPORTANT]
> Before adding an entry, read [[DOCUMENTATION-RULE]].

---

## 2026-08-04 — UI Cleanup, Motion Smoothing, and Certification Fixes
- **What:** Removed emoji glyphs from the website UI, made the hero location more visible, softened the section transitions, reduced the heavier scroll-reveal effects, and replaced the certification cards with cleaner text-first layouts.
- **Why:** The site needed cleaner presentation, smoother scrolling, better performance, and clearer certification imagery/content.
- **Result:** The portfolio now reads more consistently, scrolls more seamlessly, and the certification section uses the correct badge images with better framing and metadata.

---

## 2026-08-04 — Renaissance Painting Background Implemented
- **What:** Replaced the hero background with an interactive Renaissance painting treatment based on Raphael's The School of Athens.
- **Why:** The user wanted a real painting from that era with a stronger 3D spatial feeling and cursor interaction.
- **Result:** The hero now uses a classical fresco image with cursor-reactive lighting and layered atmospheric overlays.

---

## 2026-08-04 — Planned: Featured Projects Showcase
- **What:** Add a dedicated featured projects section to the portfolio to complement the existing experience timeline.
- **Why:** The current site highlights experience and milestones, but the wiki roadmap calls for a more explicit project showcase with stack, outcomes, and external links.
- **Scope:** Introduce a new section between Experience and Tech Stack, using the existing cinematic card design language.
- **Status:** Planned for implementation.

---

## 2026-07-26 — Cinematic Portfolio Built — Phase 1 Complete
- **What:** Built full cinematic single-page portfolio with Next.js 16 + Lenis + Motion.dev + GSAP + React Bits
- **Sections:** Hero (profile photo, name, social links), About, Experience (timeline with tabs), Tech Stack, Certifications (tilt cards), Contact (GitHub chart)
- **Animations:** Lenis smooth scroll, Motion.dev scroll reveals, GSAP ScrollTrigger + Lenis sync, React Bits SplitText/BlurText/ScrollReveal/TiltedCard
- **Theme:** Dark cinematic with purple accent (#643cf0 matching original brand)
- **Files created:** 10+ components across src/components/sections/, LenisProvider, ScrollAnimations, Navbar
- **Status:** Builds successfully. Ready for dev preview and Vercel deploy.

---

## 2026-07-26 — Final Decisions Documented + Free Tool Stack
- **What:** Updated plan.md with final stack decisions, created Free-Vibe-Coding-Stack.md reference
- **Decisions finalized:**
  - Next.js 15 + Tailwind v4 + shadcn/ui (framework + UI)
  - Lenis + Motion.dev + GSAP (animation stack)
  - React Bits + Aceternity UI (pre-built components)
  - Vercel + GitHub + Continue.dev + OpenCode (free toolchain)
- **New file:** [[Reference/Free-Vibe-Coding-Stack]]
- **Status:** Phase 1 documentation complete, ready to scaffold

---

## 2026-07-26 — Initial Research Wiki Created
- **What:** Created full research wiki for cinematic portfolio website
- **Tool:** OpenCode (DeepSeek V4 Flash Free)
- **Risk:** None (read-only documentation)
- **Notes:** All research compiled from web searches across animation libraries, design tools, AI plugins, and UI systems. Covers Motion.dev, GSAP, Anime.js, Lenis, React Bits, 21st.dev, shadcn/ui, Figma Motion, Jitter, Rive, Lottie, Vanta.js, Stitches, Anthropic Frontend Design, and UI UX Pro Max.

---

## 2026-07-26 — Directory Structure Created
- **What:** Created wiki folder structure with category directories
- **Directories:** Animation-Engines, Smooth-Scroll, Prebuilt-Components, Design-Pipeline, Visual-Effects, AI-Tools, Stack-Comparison, Reference
- **Notes:** Follows same pattern as `~/wiki/` vault.

---

<!-- Add new entries above this line -->
