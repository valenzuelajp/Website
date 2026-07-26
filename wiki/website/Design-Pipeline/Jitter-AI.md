---
tags:
  - "#design"
aliases:
  - Jitter
  - Jitter AI
  - jitter.video
---

# Jitter AI — Motion Design Tool

> **Web-based collaborative motion design tool.** AI superagents, shaders, morphing, and Lottie export. No install needed.

**Homepage:** https://jitter.video
**Changelog:** https://jitter.video/changelog/
**Pricing:** Free + Pro + Ultra tiers
**Export:** MP4, GIF, WebM, Lottie, ProRes, CSS easing code

---

## Overview

Jitter is a browser-based motion design tool — like a simplified After Effects for the web. It's built for designers who need to create animated assets (social media, product demos, web animations) without complex software.

For web development, Jitter's key value is **Lottie export** — create animations visually, export them as lightweight Lottie JSON or dotLottie files, and play them on the web with the [[Lottie]] player.

---

## Key Features

### AI Superagents (New — July 2026)
Describe what you want: "create a card flip animation" — the AI generates fully editable animations.

### Effects & Shaders Panel
20+ one-click effects: distortion, 3D flips, dithering, fluted glass, displacement, background blur.

### Animation Tools
- Pen tool + shape morphing
- Text animation (by line/word/letter)
- Motion paths with Bezier controls
- Gradients on fills/strokes/text
- Blend modes
- Audio and video support

### Infinite Canvas
Multiple artboards in one file (Figma-like), with components, folders, and real-time collaboration.

### Lottie Export
Export animations as Lottie JSON or dotLottie — lightweight vector animation format for the web.

### CSS Easing Export
Copy any easing curve as CSS code for handoff to developers.

### Batch Export
Export hundreds of variations (different sizes, languages) in one click.

### Image to Video (AI)
Turn static images into video clips with AI-generated motion.

---

## Key Strengths

- **No install** — works in the browser
- **AI superagents** — generate animations from text
- **Lottie export** — lightweight for web
- **400+ templates** — quick starting points
- **CSS easing export** — dev-friendly handoff
- **Collaborative** — real-time team editing
- **Batch export** — scale production

---

## Key Weaknesses

- **Web-based only** — no desktop app (requires internet)
- **Not for interactive animations** — no state machines (see [[Rive-Engine]])
- **Subscription pricing** — free tier has limitations
- **Less powerful than After Effects** for complex VFX

---

## How It Fits the Cinematic Pipeline

```
Design in Jitter → Export as Lottie/dotLottie → Play via dotLottie web player
  (AI agents,       (lightweight, scalable,       (React or vanilla,
   shaders,          GPU-rendered)                 5-30KB per animation)
   morphing)
```

Best for: icon animations, illustration reveals, micro-interactions, hero section decorative elements.

---

## Related

- [[Figma-Motion]] — native animation in Figma (complementary)
- [[Rive-Engine]] — interactive state-machine graphics (different use case)
- [[Lottie]] — file format that Jitter exports to
