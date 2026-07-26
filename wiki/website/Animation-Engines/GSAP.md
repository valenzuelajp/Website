---
tags:
  - "#animation"
  - "#scroll"
aliases:
  - GreenSock
  - ScrollTrigger
  - ScrollSmoother
---

# GSAP (GreenSock Animation Platform)

> **Professional-grade JavaScript animation.** The industry standard for complex timeline sequencing, scroll-driven storytelling, and SVG effects. Now 100% free.

**Homepage:** https://gsap.com
**GitHub:** https://github.com/greensock/GreenSock-JS
**License:** Standard GSAP — **now 100% free** (as of April 2025, after Webflow acquisition). Previously required Club GSAP for ScrollTrigger/SplitText/MorphSVG.
**Version:** v3.x (stable, mature)

---

## Overview

GSAP is the most powerful animation engine on the web. It handles complex, multi-step timeline sequences, scroll-linked animations via ScrollTrigger, SVG morphing, text splitting, and physics-based motion. It is framework-agnostic — works with React, Vue, vanilla JS, Webflow, and any environment.

It powers the majority of **Awwwards-winning** and award-winning websites.

---

## Bundle Size

| Module | Size (gzip) |
|---|---|
| GSAP Core | ~23 KB |
| ScrollTrigger | +10 KB |
| ScrollSmoother | +5 KB |
| SplitText | +3 KB |
| MorphSVG | +5 KB |
| Draggable | +6 KB |
| **Typical full setup** | **~35-48 KB** |

---

## Key Features

### ScrollTrigger
The gold standard for scroll-driven animations.

```js
gsap.to(".box", {
  x: 500,
  scrollTrigger: {
    trigger: ".box",
    scrub: 1,          // tie progress to scrollbar
    pin: true,         // lock section while scrolling
    start: "top center",
    end: "+=2000",
    markers: true      // visual debug guides
  }
})
```

**Capabilities GSAP has that others don't:**
- **Pinning** — lock a section in place while scroll continues beneath
- **Scrub** — animation ties exactly to scroll position (forward AND reverse)
- **MatchMedia** — responsive animations per breakpoint
- **Timeline sequencing** — nest, label, seek, reverse, timeScale

### ScrollSmoother
GSAP's own smooth scroll engine (alternative to [[Lenis]]). Leverages native scroll mechanics. Adds parallax and trailing effects via data attributes.

```html
<div data-speed="0.8"></div>  <!-- parallax speed -->
```

### SplitText
Animate text character-by-character or word-by-word. Now free.

### MorphSVG
Morph between any two SVG shapes. Now free.

### Draggable
Full drag, snap, flick, throw interactions.

### Observer
Low-level scroll/wheel/gesture detection.

---

## Key Strengths

- **Unmatched control** over complex sequences
- **Pinning + scrubbing** — not replicable in Motion.dev or Anime.js
- **SVG morphing** — DrawSVG, MorphSVG are unique
- **SplitText** — best-in-class text animation
- **Framework-agnostic** — same skills transfer to Webflow, vanilla, any framework
- **Huge ecosystem** — decades of examples, forums, CodePens
- **Visual debugging** — ScrollTrigger markers
- **Now 100% free** — no paywall

---

## Key Weaknesses

- **Larger bundle** — 35-48KB typical setup vs Motion.dev's 2.6-18KB
- **No React-native API** — no `motion.div` declarative style; requires `useRef` + `useEffect`
- **Learning curve** — steeper than Motion.dev
- **No hardware-accelerated ScrollTimeline** — GSAP manages scroll in JS
- **Imperative API** — less idiomatic in React than Motion.dev

---

## When to Use

| Scenario | Verdict |
|---|---|
| Complex scrollytelling with pinning | ✅ **Best in class** |
| SVG morphing / text splitting | ✅ **Best in class** |
| Framework-agnostic animation | ✅ Great |
| React app with simple scroll reveals | ⚠️ [[Motion.dev]] is lighter/better DX |
| Product UI animations | ⚠️ Overkill |

---

## Installation

```bash
npm install gsap
```

```js
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
```

---

## Related

- [[Motion.dev]] — lighter alternative for React
- [[Anime.js]] — lighter alternative for vanilla JS
- [[Lenis]] — often paired with GSAP (GSAP handles animations, Lenis handles smooth scroll)
- [[Animation-Engine-Comparison]]
