---
tags:
  - "#scroll"
  - "#animation"
aliases:
  - Lenis
  - lenis.dev
---

# Lenis — Smooth Scroll Engine

> **The industry standard for smooth scrolling.** Under 4KB. Zero dependencies. Used by Netflix Careers, GTA VI site, Google Cloud, Rockstar Games.

**Homepage:** https://lenis.dev
**GitHub:** https://github.com/darkroomengineering/lenis
**License:** MIT
**Version:** v1.3.25 (June 2026)
**Size:** < 4KB gzipped

---

## Overview

Lenis ("smooth" in Latin) is a lightweight, robust, performant smooth scroll library. It wraps the browser's native scroll but applies easing/momentum, making every scroll feel buttery smooth. Critically, it **does not break native scroll behavior** — `position: sticky`, anchor links, keyboard navigation, and accessibility all continue working.

It is the foundation that powers many other libraries (Locomotive Scroll v5 is built on Lenis).

---

## Key Features

### One-Line Setup
```js
import Lenis from "lenis"

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
```

### Framework Adapters
- `lenis/react` — React hook and component
- `lenis/vue` — Vue integration
- `lenis/framer` — Framer plugin (no-code)

### Scroll Snapping
`lenis/snap` plugin — section snapping without fighting smooth scroll.

### Horizontal Scroll
Support for horizontal scrolling — same API.

### Nested Scroll
Multiple scrollable elements with `allowNestedScroll` or `data-lenis-prevent` attribute.

### ScrollTo
```js
lenis.scrollTo("#section-2", {
  offset: -100,
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})
```

### Scroll Direction Tracking
Real-time direction detection — perfect for hiding/showing headers.

---

## Key Strengths

- **Tiny** — under 4KB, zero dependencies
- **Accessible** — native scrollbar, keyboard nav, ARIA support
- **No layout shifts** — doesn't hijack `transform` like older smooth scroll libs
- **Works with CSS `position: sticky`** — many smooth scroll libraries break this
- **Used by major brands** — battle-tested in production
- **Framework-agnostic** — vanilla JS, React, Vue, Framer
- **MIT license** — free for anything

---

## Key Weaknesses

- **Smooth scroll only** — no animations built in (pairs with [[Motion.dev]], [[GSAP]], or [[Anime.js]])
- **60fps cap on Safari** (WebKit bug)
- **30fps on low power mode**
- **Doesn't work over iframes** (iframes don't forward wheel events)

---

## How Lenis Fits in a Cinematic Site

```
Lenis → Smooth scroll feel
GSAP/Motion.dev → What happens DURING that scroll (animations, reveals, pinning, parallax)
```

They don't compete — they complement each other perfectly.

---

## Integration with Animation Libraries

### Lenis + GSAP
```js
const lenis = new Lenis()
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
```

### Lenis + Motion.dev
```jsx
import { ReactLenis } from "lenis/react"

function App() {
  return (
    <ReactLenis root>
      <YourContent />
    </ReactLenis>
  )
}
```

---

## Installation

```bash
npm install lenis
```

```js
import Lenis from "lenis"
// or
import { ReactLenis } from "lenis/react"
```

---

## Related

- [[Motion.dev]] — pairs with Lenis for scroll animations
- [[GSAP]] — pairs with Lenis for scrollytelling
- [[Animation-Engine-Comparison]]
