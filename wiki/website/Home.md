---
tags:
  - "#home"
  - "#index"
aliases:
  - Home
  - Index
  - Start
---

# Cinematic Portfolio — Research Wiki

> **Owner:** Jhon Paul A. Valenzuela
> **Project:** `/var/mnt/hdd/GitHub/Website`
> **Rule:** [[DOCUMENTATION-RULE]] — Read before making ANY changes.

---

## Purpose

This wiki documents all research for building a **cinematic personal portfolio website** — a heavily animated, scroll-driven brand experience. Every tool, library, and workflow we've investigated is documented here.

---

## Quick Navigation

### 🎬 Animation Engines
| Note | Description |
|---|---|
| [[Motion.dev]] | React/JS animation library (prev Framer Motion). Hardware-accelerated scroll. 2.6-18KB. |
| [[GSAP]] | Full animation engine with ScrollTrigger. Pinning, scrub, complex timelines. 23KB+. |
| [[Anime.js]] | Modular JS animation v4. SVG morphing, scroll observer, springs. 24.5KB. |

### 🌊 Smooth Scrolling
| Note | Description |
|---|---|
| [[Lenis]] | Industry standard smooth scroll. 4KB. Used by Netflix, GTA VI, Google. |

### 🧩 Prebuilt Components
| Note | Description |
|---|---|
| [[shadcn-ui]] | UI foundation — copied as source, not installed. 3 base libs, 8 themes. |
| [[21st.dev]] | 10K+ community components, AI-prompt installable. Built on shadcn. |
| [[React-Bits]] | 140+ animated React components. 12.4KB. Text/UI/Backgrounds. |
| [[Aceternity-UI]] | 200+ Tailwind + Motion components with micro-interactions. shadcn-compatible. |

### 📖 Design Inspiration
| Note | Description |
|---|---|
| [[Godly]] | Curated gallery of the best web designs. Filter by Motion, Next.js, 3D. Free. |
| [[Refero]] | Structured library of real product screens + DESIGN.md export for AI agents. |
| [[Mobbin]] | 621K+ screenshots from shipped apps. MCP for agents. $12/mo. |
| [[10x-Designers]] | Portfolio-focused design community and gallery. Free. |

### 🎨 Design Pipeline
| Note | Description |
|---|---|
| [[Figma-Motion]] | Native timeline animation in Figma (launched June 2026). MCP export to code. |
| [[Jitter-AI]] | Web motion design tool. AI superagents, shaders, Lottie export. |
| [[Rive-Engine]] | Interactive state-machine graphics. 120fps. Spotify Wrapped-grade. |
| [[Lottie]] | Lightweight vector animation format. WebGL/WebGPU. 5-30KB. |

### ✨ Visual Effects
| Note | Description |
|---|---|
| [[Vanta.js]] | One-line 3D WebGL backgrounds. Waves, birds, globe, etc. ~120KB. |
| [[Stitches]] | CSS-in-JS. **Deprecated/archived.** Not for new projects. |

### 🤖 AI Tools
| Note | Description |
|---|---|
| [[Anthropic-Frontend-Design]] | Claude Code plugin for distinctive, non-generic UI output. |
| [[UI-UX-Pro-Max]] | AI skill: 84 styles, 192 palettes, 74 fonts, 22 stacks. OpenCode-ready. |

### ⚖️ Decision Guides
| Note | Description |
|---|---|
| [[Animation-Engine-Comparison]] | Side-by-side: Motion.dev vs GSAP vs Anime.js vs React Bits |
| [[Full-Stack-Recommendations]] | Recommended stacks for cinematic portfolio + rationale |

### 📚 Reference
| Note | Description |
|---|---|
| [[Glossary]] | Terms, acronyms, and definitions |
| [[Changelog]] | Track all changes to this wiki |
| [[plan]] | Project plan and vision |

---

## Graph Index — Key Connections

- [[Lenis]] + [[Motion.dev]] = Smooth scroll + hardware-accelerated scroll animations
- [[GSAP]] + [[Lenis]] = Smooth scroll + complex scrollytelling (pinning, scrub)
- [[shadcn-ui]] + [[21st.dev]] = UI primitives + community components, all Tailwind
- [[Figma-Motion]] → [[Motion.dev]] = Design animations in Figma, export via MCP to Motion code
- [[Jitter-AI]] → [[Lottie]] = Design in Jitter, export as lightweight Lottie for web
- [[Rive-Engine]] → React = State-machine-driven interactive graphics
- [[UI-UX-Pro-Max]] + [[Anthropic-Frontend-Design]] = AI design intelligence layer
- [[Godly]] + [[Refero]] = Inspiration (Godly) + structured design context (Refero)
- [[Aceternity-UI]] + [[React-Bits]] = Pre-built animated components (Aceternity has hero/bento, React Bits has text/backgrounds)
- [[Refero]] MCP + [[Mobbin]] MCP = AI agents research real product designs before coding

---

## Status

- [x] Research phase complete
- [ ] Stack decision
- [ ] Project scaffold
- [ ] Design in Figma Motion
- [ ] Implementation
- [ ] Deployment
