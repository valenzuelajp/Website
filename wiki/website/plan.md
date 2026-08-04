---
tags:
  - "#meta"
  - "#plan"
aliases:
  - Project Plan
  - Vision
---

# Project Plan — Cinematic Portfolio Website

> **Status:** Phase 1: Foundation — Complete 🎉 (built + building)

---

## Vision

A cinematic personal portfolio website — heavily animated, scroll-driven, and visually immersive. Every scroll reveals something new. The site should feel like an experience, not a page.

---

## Research Completed

| Topic | Status | Note |
|---|---|---|
| Smooth scrolling | ✅ | [[Lenis]] |
| Scroll/UI animation engines | ✅ | [[Motion.dev]], [[GSAP]], [[Anime.js]] |
| Prebuilt animated components | ✅ | [[React-Bits]], [[21st.dev]] |
| UI foundation | ✅ | [[shadcn-ui]] |
| Design-to-code pipeline | ✅ | [[Figma-Motion]], [[Jitter-AI]], [[Rive-Engine]], [[Lottie]] |
| Visual effects | ✅ | [[Vanta.js]] |
| AI design tools | ✅ | [[Anthropic-Frontend-Design]], [[UI-UX-Pro-Max]] |

---

## Decisions Made

| Decision | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router, TypeScript) | Best DX for React + best deploy to Vercel |
| **Animation engine** | Both — Motion.dev + GSAP | Motion (2.6KB) for UI/scroll, GSAP (23KB) for complex pinning/scrub |
| **Smooth scroll** | Lenis | 4KB, works with all engines, inertia scroll feel |
| **UI foundation** | shadcn/ui | Free, Tailwind-native, copy-paste model |
| **Prebuilt components** | React Bits + Aceternity UI (30 free) | Text reveals, bento grids, spotlight hero |
| **Design** | Figma (free tier) | Native timeline, MCP export support |
| **AI in editor** | Continue.dev + GitHub Copilot free tier | Both free, no API costs |
| **AI agent** | OpenCode CLI (DeepSeek V4 Flash Free) | Built-in, no-cost |
| **Hosting** | Vercel (Hobby) | Free, auto-deploy from GitHub |
| **Image gen** | Glif / ZSky AI | Free AI image generation |
| **Forms** | Tally | Free contact form builder |
| **Analytics** | Vercel Analytics + Sentry (free tier) | Traffic + error tracking at $0 |

See [[Full-Stack-Recommendations]] and [[Free-Vibe-Coding-Stack]] for details.

---

## Implementation Phases

### Progress Tracker
- [x] Document the wiki maintenance rule
- [x] Add a dedicated progress tracker note
- [x] Build the initial cinematic portfolio scaffold
- [ ] Refine the site narrative and content hierarchy
- [ ] Add stronger cinematic motion moments
- [ ] Prepare deployment and polish

### Phase 1: Foundation
- [x] Create wiki vault (25+ notes across 9 categories)
- [x] Research all animation engines, UI libraries, design pipelines
- [x] Define full free tool ecosystem
- [x] Document final decisions in plan.md
- [x] Scaffold Next.js 16 (App Router, TypeScript, Tailwind v4)
- [x] Install shadcn/ui (init + button, utils)
- [x] Install animation stack: Lenis + Motion.dev + GSAP + @gsap/react
- [x] Install React Bits (SplitText, BlurText, ScrollReveal, TiltedCard)
- [x] Set up Lenis smooth scroll provider
- [x] Wire up Motion.dev scroll reveals
- [x] Wire up GSAP ScrollTrigger + Lenis sync
- [x] Build Hero section (full-screen, dark cinematic, scroll reveal, profile photo)
- [x] Build About section (Bio with scroll reveals)
- [x] Build Experience section (Timeline cards with scroll reveals)
- [x] Build Tech Stack section (Icon grid with staggered reveals)
- [x] Build Certifications section (TiltedCard with overlay)
- [x] Build Contact section (Social links + GitHub chart)
- [ ] Create AGENTS.md
- [ ] First git commit + deploy to Vercel

### Phase 2: Design
- [ ] Design system (colors, typography, spacing, motion tokens)
- [ ] Section layouts in Figma
- [ ] Animate key moments in Figma Motion or Jitter
- [ ] Export Lottie assets if needed
- [ ] Design Rive interactive components if needed

### Phase 3: Build
- [ ] Hero section (full-screen, Vanta background or Rive interactive)
- [ ] About section (scroll reveals, text animations)
- [ ] Featured Projects section (card-based showcase with stack, outcomes, and links)
- [ ] Skills section (animated cards, progress bars)
- [ ] Contact section (form + animated background)

### Phase 4: Polish
- [ ] Mobile responsiveness
- [ ] Performance audit
- [ ] Accessibility review
- [ ] Reduced motion support
- [ ] SEO

### Phase 5: Deploy
- [ ] Deploy to hosting
- [ ] Custom domain
- [ ] Analytics

---

## Related

- [[Home]]
- [[DOCUMENTATION-RULE]]
- [[Changelog]]
- [[Full-Stack-Recommendations]]
