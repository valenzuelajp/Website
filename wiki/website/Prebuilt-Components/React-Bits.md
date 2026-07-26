---
tags:
  - "#ui"
  - "#animation"
aliases:
  - React Bits
  - react-bits
---

# React Bits — Animated UI Components

> **140+ pre-built animated React components.** The fastest-growing animation library on GitHub (44K+ stars). Drop-in text effects, backgrounds, and UI components.

**Homepage:** https://reactbits.dev
**GitHub:** https://github.com/DavidHDev/react-bits
**License:** MIT + Commons Clause (free for personal & commercial)
**Bundle:** ~12.4KB gzipped (tree-shakeable)

---

## Overview

React Bits is a collection of pre-built animated React components. Unlike [[Motion.dev]] or [[GSAP]] which are animation *engines* you build from, React Bits gives you ready-to-use components — `BlurText`, `TiltCard`, `Aurora` background, `MagneticButton`. Install one, pass props, done.

Each component ships in **4 variants**: JS-CSS, JS-TW, TS-CSS, TS-TW.

---

## Component Categories

### Text Effects
`BlurText`, `SplitText`, `Typewriter`, `GlitchText`, `DecryptedText`, `WavyText`, `FadeText`, `RotatingText`

### Backgrounds
`Aurora`, `Particles`, `GridPattern`, `Hyperspeed`, `FloatingParticles`

### UI Components
`MagneticButton`, `TiltCard`, `GradientCard`, `ScrollReveal`, `Carousel`, `Cursor`, `Flashlight`, `RollingGallery`

### Animations
`FadeIn`, `SlideIn`, `ZoomIn`, `FlipIn`, `BounceIn`, `StaggerContainer`

---

## Key Strengths

- **Zero-config** — install, import, use. No provider setup, no context.
- **4 variants per component** — JS/TS + CSS/Tailwind, pick your stack
- **Tree-shakeable** — only imported components affect bundle
- **Copy-paste or CLI** — `npx shadcn@latest add @react-bits/BlurText-TS-TW`
- **Free tools** — Background Studio, Shape Magic, Texture Lab
- **44K+ GitHub stars** — huge community, weekly updates

---

## Key Weaknesses

- **React 18+ only** — no support for older React or other frameworks
- **Not a full animation engine** — can't build custom timeline sequences (use [[Motion.dev]] or [[GSAP]] for that)
- **Vue/Svelte ports exist** (vue-bits.dev, sveltebits.xyz) but are separate projects
- **Commons Clause license** — some restrictions vs pure MIT

---

## When to Use

| Scenario | Verdict |
|---|---|
| Need a polished text reveal effect quickly | ✅ **Perfect** |
| Animated background (Aurora, Particles) | ✅ Great |
| Magnetic buttons, tilt cards | ✅ Great |
| Full custom scrollytelling | ❌ Use [[Motion.dev]] or [[GSAP]] |
| Complete animation control | ❌ Use an animation engine |

---

## Installation

```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

Or copy-paste from https://reactbits.dev

---

## Related

- [[Motion.dev]] — animation engine (complementary: use both)
- [[GSAP]] — animation engine (complementary)
- [[21st.dev]] — non-animated component registry
- [[shadcn-ui]] — base UI primitives
