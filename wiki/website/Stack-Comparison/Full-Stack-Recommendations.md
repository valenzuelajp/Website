---
tags:
  - "#comparison"
aliases:
  - Stack Recommendations
  - Recommended Stack
---

# Full Stack Recommendations

> Recommended stacks for building a cinematic portfolio website, based on all research.

---

## Overall Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    DESIGN PIPELINE                       │
│  Figma Motion ──MCP──▶ AI Agent ──▶ Motion.dev/GSAP    │
│  Jitter AI ────Lottie──▶ dotLottie Player                │
│  Rive Editor ──.riv──▶ Rive React Runtime                │
└─────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND                              │
│  Next.js + Tailwind CSS + shadcn/ui + 21st.dev          │
│  Lenis (smooth scroll)                                  │
│  Motion.dev / GSAP (scroll + UI animations)             │
│  React Bits (drop-in animated components)               │
│  dotLottie (lightweight Lottie animations)              │
│  Rive (interactive graphics)                            │
│  Vanta.js (hero 3D background, optional)                │
└─────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────────────────────────────────────┐
│                    AI LAYER                              │
│  UI UX Pro Max (design intelligence skill)              │
│  Anthropic Frontend Design (design quality plugin)      │
│  Figma MCP (animation context export)                   │
│  Rive MCP (state machine generation)                    │
└─────────────────────────────────────────────────────────┘
```

---

## Options Ranked

### Option 1: Lightweight & Fast (Recommended Start)
**Bundle impact:** ~20-35KB

| Layer | Tool | Why |
|---|---|---|
| Framework | Next.js | Industry standard, React, great DX |
| Styling | Tailwind CSS | Default for shadcn, fast to build with |
| UI Base | shadcn/ui | Primitives you own |
| Components | [[React-Bits]] | Pre-built text reveals, backgrounds, UI |
| Smooth scroll | [[Lenis]] | 4KB, best in class |
| Scroll + UI animations | [[Motion.dev]] | Hardware-accelerated, React-native |
| Interactive graphics | — | Skip for v1, add later |
| AI design | [[UI-UX-Pro-Max]] | Design system generation |

**Good for**: A portfolio that looks polished and animated without overcomplicating the stack. Ships fast.

---

### Option 2: Maximum Cinematic Power (Awwwards-grade)
**Bundle impact:** ~45-65KB

| Layer | Tool | Why |
|---|---|---|
| Framework | Next.js | Industry standard |
| Styling | Tailwind CSS | Universal |
| UI Base | shadcn/ui + [[21st.dev]] | Primitives + 10K community components |
| Components | [[React-Bits]] | Text effects, backgrounds |
| Smooth scroll | [[Lenis]] | Buttery feel |
| Scroll + UI anims | [[Motion.dev]] | UI animations, simple scroll |
| Complex scroll | [[GSAP]] ScrollTrigger | Pinning, scrub, timelines |
| Interactive graphics | [[Rive-Engine]] | State-machine hero, data-driven elements |
| Micro-animations | [[Lottie]] | Icons, illustrations, loading |
| AI design | [[UI-UX-Pro-Max]] + [[Anthropic-Frontend-Design]] | Design intelligence |

**Good for**: A portfolio that competes with Awwwards winners. Full cinematic scrollytelling with interactive and animated elements.

---

### Option 3: GSAP-Centric (Non-React)
**Bundle impact:** ~35-50KB

| Layer | Tool | Why |
|---|---|---|
| Framework | Vanilla HTML/CSS/JS | No framework overhead |
| Styling | Tailwind CSS (CDN) | Utility CSS |
| Smooth scroll | [[Lenis]] | Pairs well with GSAP |
| All animations | [[GSAP]] + ScrollTrigger | Pinning, scrub, timelines, text, SVG |
| Micro-animations | [[Lottie]] | Icons, illustrations |
| AI design | [[UI-UX-Pro-Max]] | Works with any agent |

**Good for**: Maximum animation control without React. GSAP's full power without framework abstraction. Heavier bundle but unmatched capability.

---

## Decision: Which One?

| Your Priority | Choose |
|---|---|
| Ship fast, look great | Option 1 |
| Win awards, wow everyone | Option 2 |
| Maximum animation control | Option 3 |
| Don't want React | Option 3 |

**For a personal portfolio**, Option 1 or 2 with Next.js is the recommended path. You get React's ecosystem (shadcn, 21st.dev, React Bits), hardware-accelerated scroll animations from Motion.dev, and the option to add GSAP or Rive later for specific sections that need them.

---

## Key Pairings

### Lenis + Motion.dev
```jsx
<ReactLenis root>
  <motion.div whileInView={{ opacity: 1 }}>
    {/* hardware-accelerated scroll reveal */}
  </motion.div>
</ReactLenis>
```

### Lenis + GSAP
```js
const lenis = new Lenis()
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    pin: true,
    scrub: 1
  },
  x: 500
})
```

### Motion.dev + React Bits
```jsx
<motion.div whileInView={{ opacity: 1 }}>
  <BlurText text="Welcome" />
  <TiltCard>
    <CardContent />
  </TiltCard>
</motion.div>
```

---

## Tools We're NOT Using (And Why)

| Tool | Reason |
|---|---|
| [[Stitches]] | **Archived/deprecated.** Tailwind is the modern choice. |
| Manus.im | AI website builder (Meta). Can't hand-code custom cinematic animations. Good for rapid prototyping, not for this project. |

---

## Related

- [[Animation-Engine-Comparison]] — detailed comparison of animation libraries
- [[plan]] — project plan with implementation phases
- [[DOCUMENTATION-RULE]] — document decisions before implementing
