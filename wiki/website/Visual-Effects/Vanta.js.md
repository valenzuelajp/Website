---
tags:
  - "#animation"
  - "#design"
aliases:
  - Vanta
  - Vanta.js
  - vantajs
---

# Vanta.js — 3D Animated Backgrounds

> **One-line 3D WebGL backgrounds for any website.** Waves, birds, globe, net, stars, and more. Mouse/touch interactive.

**Homepage:** https://www.vantajs.com
**GitHub:** https://github.com/tengbao/vanta
**License:** MIT
**Version:** 0.5.24 (stable, last npm publish 2022)
**Bundle:** ~120KB gzipped (mostly three.js)

---

## Overview

Vanta.js adds an animated 3D background to any HTML element with one line of JavaScript. It uses three.js or p5.js to render WebGL effects. Great for hero sections that need an immediate "wow" factor with minimal code.

---

## Available Effects

| Effect | Renders With | Best For |
|---|---|---|
| **WAVES** | three.js | Subtle wave motion, abstract |
| **BIRDS** | three.js | Flocking bird silhouettes |
| **CLOUDS** | three.js | Atmospheric cloud layers |
| **FOG** | three.js | Misty, ambient fog |
| **DOTS** | three.js | Connected dot network (tech vibe) |
| **GLOBE** | three.js | Rotating globe (global brands) |
| **NET** | three.js | Wireframe net (cyber/modern) |
| **RINGS** | three.js | Orbiting ring system |
| **STARS** | three.js | Starfield/twinkle |
| **TOPOLOGY** | three.js | Organic mesh |
| **TRUNK** | p5.js | Tree-like organic growth |

---

## Basic Usage

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
<script>
  VANTA.WAVES("#my-hero", {
    color: 0x000000,
    waveHeight: 20,
    shininess: 50,
    waveSpeed: 1.5,
    mouseControls: true,
    touchControls: true
  })
</script>
```

In React:
```jsx
const effect = VANTA.WAVES({
  el: this.vantaRef.current,
  THREE: THREE // pass custom THREE
})
// Clean up: effect.destroy()
```

---

## Key Strengths

- **One-line setup** — instant 3D background
- **Interacts with mouse/touch** — feels alive
- **No pixelation** — canvas renders at full resolution
- **Smaller than background videos** — ~120KB vs MB for video
- **60fps** on modern laptops/desktops

---

## Key Weaknesses

- **Last updated 2022** — no active development
- **120KB bundle** (three.js) — significant for just a background
- **Slow on older computers** — WebGL is GPU-intensive
- **Mobile issues** — not all effects work on mobile (must set CSS fallback)
- **Limited effects** — 11 predefined, no custom animation
- **Don't use more than 1-2 per page** — performance impact
- **No scroll integration** — just a background, not scroll-aware

---

## When to Use

| Scenario | Verdict |
|---|---|
| Hero section needs immediate impact | ✅ Good |
| Tech/product brand landing page | ✅ Good |
| Performance-critical site | ❌ Too heavy |
| Mobile-first | ⚠️ Needs fallback |
| Interactive graphics | ❌ Use [[Rive-Engine]] |

---

## Lightweight Alternative

If you just want a subtle animated background without three.js weight, consider:
- CSS gradients with `@keyframes` animations (0KB)
- [[React-Bits]] Aurora or Particles components (tree-shakeable)
- [[Rive-Engine]] interactive backgrounds (state-driven, GPU-accelerated)

---

## Related

- [[React-Bits]] — has `Aurora` and `Particles` backgrounds (lighter)
- [[Rive-Engine]] — interactive GPU-accelerated graphics
- [[Lottie]] — lightweight animated vectors
