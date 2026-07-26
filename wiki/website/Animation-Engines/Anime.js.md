---
tags:
  - "#animation"
aliases:
  - animejs
  - Anime.js v4
---

# Anime.js v4

> **A fast, modular JavaScript animation engine.** Complete rewrite in 2025. Framework-agnostic, tree-shakeable, powerful standalone.

**Homepage:** https://animejs.com
**GitHub:** https://github.com/juliangarnier/anime
**License:** MIT
**Version:** v4.5.0 (June 2026)
**Stars:** 67K+
**Downloads:** ~950K/week

---

## Overview

Anime.js v4 is a complete rewrite (released April 2025) — modular ESM-first architecture, scroll observer built-in, WAAPI-powered lightweight variant, and new features like layout animations and CSS variable support.

It's a general-purpose animation engine that works with any framework. Not React-specific like Motion.dev, not timeline-focused like GSAP — it sits in the middle.

---

## Bundle Size (Tree-Shakeable Modules)

| Module | Size (gzip) |
|---|---|
| Timer | 5.60 KB |
| Animation | +5.20 KB |
| Timeline | +0.55 KB |
| Animatable | +0.40 KB |
| Draggable | +6.41 KB |
| Scroll | +4.30 KB |
| Scope | +0.22 KB |
| SVG | 0.35 KB |
| Stagger | +0.48 KB |
| Spring | 0.52 KB |
| WAAPI | 3.50 KB |
| **Total (all modules)** | **~24.50 KB** |

---

## Key Features

### Animation
```js
import { animate } from "animejs"

animate(".box", {
  x: 300,
  rotate: "1turn",
  duration: 2000,
  ease: "inOut(3)"
})
```

### Scroll Observer
Built-in — no plugin needed:
```js
import { scroll } from "animejs"

scroll(observer => {
  // triggered when elements enter/leave viewport
})
```

### SVG Toolset
- Morph shapes between any paths
- Motion path following
- Line drawing

### Timelines
```js
import { timeline } from "animejs"

const tl = timeline()
tl.add(".box1", { x: 100 })
  .add(".box2", { x: 200 }, 500) // offset 500ms
```

### Springs
```js
animate(".box", {
  x: 300,
  spring: { stiffness: 200, damping: 10 }
})
```

### Layout Animations (v4.3+)
`createLayout()` — animate between two layout states.

### WAAPI Variant
3.5KB lightweight version powered by Web Animations API (limited features, better perf).

---

## Key Strengths

- **True modularity** — import only what you need
- **Framework-agnostic** — works anywhere
- **SVG tools** — morphing, motion paths
- **Built-in scroll observer** (no plugin needed)
- **Spring physics** built in
- **MIT license** (no restrictions)
- **Active development** (v4.x, frequent releases)
- **Lighter than GSAP** at equivalent functionality

---

## Key Weaknesses

- **No React-native API** — no `motion.div` declarative style
- **No ScrollTrigger pinning** — can't pin sections like GSAP
- **Smaller community/ecosystem** than GSAP
- **No text splitting** utility (needs separate library)
- **Newer** — less battle-tested than GSAP

---

## When to Use

| Scenario | Verdict |
|---|---|
| Vanilla JS project needing animations | ✅ **Great choice** |
| SVG morphing / motion paths | ✅ Good |
| Scroll-based reveals | ✅ Good |
| React project | ⚠️ [[Motion.dev]] has better DX |
| Complex timeline with pinning | ❌ Use [[GSAP]] |

---

## Installation

```bash
npm install animejs
```

```js
import { animate, stagger, scroll } from "animejs"
```

---

## Related

- [[Motion.dev]] — React-native animation with scroll support
- [[GSAP]] — more powerful for complex timelines/pinning
- [[Animation-Engine-Comparison]]
