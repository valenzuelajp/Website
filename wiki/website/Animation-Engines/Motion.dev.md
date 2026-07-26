---
tags:
  - "#animation"
  - "#scroll"
aliases:
  - Motion
  - Framer Motion
  - motion.dev
---

# Motion.dev

> **Formerly Framer Motion.** A production-grade animation library for React, JavaScript, and Vue. Hardware-accelerated, tiny footprint.

**Homepage:** https://motion.dev
**GitHub:** https://github.com/motiondivision/motion
**License:** MIT
**Version:** v12.x (actively maintained, weekly releases)

---

## Overview

Motion (formerly Framer Motion) is a complete animation library that runs animations natively in the browser using the Web Animations API and `ScrollTimeline` for **120fps performance**. When it needs capabilities those APIs can't provide (spring physics, interruptible keyframes, gesture tracking), it seamlessly falls back to JavaScript.

Trusted by **Framer** and **Figma** across hundreds of thousands of sites.

---

## Bundle Size

| Package | Size (gzip) |
|---|---|
| `animate` (mini) | 2.6 KB |
| `animate` (full) | 18 KB |
| React API | +15 KB |
| Scroll trigger | +0.5 KB |
| Scroll-linked | +2.5 KB |

Up to **90% smaller** than equivalent GSAP setups.

---

## Key Features

### Scroll Animations

Two types:
1. **Scroll-triggered** — fires when element enters viewport (`whileInView` prop)
2. **Scroll-linked** — values tied directly to scroll position (`useScroll` hook + `useTransform`)

Uses browser's native `ScrollTimeline` for hardware acceleration — the only library that does this. Falls back to JS when needed.

```jsx
// Scroll-triggered — fade in when visible
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>

// Scroll-linked — parallax
function Parallax() {
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  return <motion.div style={{ y }} />
}
```

### Gestures
- `whileHover` — hover animations
- `whileTap` / `whileFocus` — press/focus
- `drag` — drag with physics, constraints, snap-to-origin

### Layout Animation
- `layout` prop — animates between layout changes automatically
- `AnimatePresence` — animate elements entering/exiting the DOM
- `layoutId` — shared element transitions (morphing between routes)

### Variants
Named animation states that propagate through the component tree for orchestration:

```jsx
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
```

### Motion UI (New — July 2026)
Pre-built animated sections and components, performance-graded with MotionScore. Drop-in via shadcn tokens or AI.

### Motion AI Kit
MCP tools for agents: `/motion` skill, 400+ example sources, performance audits, CSS spring generation.

---

## Key Strengths

- **Only library with native ScrollTimeline support** — hardware-accelerated scroll animations
- Tiny bundle (2.6KB mini, 18KB full)
- Spring physics by default for natural motion
- First-class React API (declarative, prop-driven)
- `layout` prop is genuinely magical
- Exit animations via `AnimatePresence`
- Motion UI = ready-made animated sections
- MCP for AI agents

---

## Key Weaknesses

- React-focused (vanilla JS and Vue APIs exist but less mature)
- Complex timeline sequencing is harder than GSAP
- No built-in SVG morphing (needs GSAP for that)
- No pinning like ScrollTrigger

---

## When to Use

| Scenario | Verdict |
|---|---|
| React/Next.js scroll-heavy site | ✅ **Perfect** |
| Simple-to-medium scrollytelling | ✅ Great |
| Complex timeline sequences with pinning | ⚠️ Consider [[GSAP]] |
| SVG morphing or text splitting | ⚠️ Consider [[GSAP]] |
| Product UI with exit animations | ✅ **Perfect** |

---

## Installation

```bash
npm install motion
```

```jsx
import { motion } from "motion/react"
```

---

## Related

- [[GSAP]] — alternative for complex timeline/pinning
- [[Anime.js]] — alternative for framework-agnostic
- [[Lenis]] — pairs with Motion for smooth scroll
- [[React-Bits]] — pre-built animated React components
- [[Animation-Engine-Comparison]]
