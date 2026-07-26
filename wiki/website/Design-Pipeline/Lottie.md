---
tags:
  - "#design"
  - "#animation"
aliases:
  - Lottie
  - dotLottie
  - LottieFiles
---

# Lottie / dotLottie — Lightweight Animation Format

> **A lightweight, scalable vector animation format for the web.** Export from After Effects, Jitter, or Figma. Play via the dotLottie web player with GPU-accelerated rendering.

**Homepage:** https://lottiefiles.com
**Web Player:** https://lottiefiles.com/web-player
**GitHub:** https://github.com/LottieFiles/dotlottie-web
**License:** MIT
**Format:** Lottie JSON or `.lottie` (ZIP-compressed)

---

## Overview

Lottie is a vector animation format that started as a way to export After Effects animations as lightweight JSON files. The newer **dotLottie** format wraps Lottie JSON in ZIP compression, bundles multiple animations and assets in one file, and supports theming and state machines.

For web development, Lottie is the standard for lightweight, scalable, high-quality icon and illustration animations.

---

## File Size Comparison

| Format | Size (typical) |
|---|---|
| Lottie JSON | 10-50 KB |
| dotLottie (ZIP) | 80% smaller than Lottie JSON |
| MP4 video | 500 KB - 2 MB |
| GIF | 1-5 MB |

---

## Key Features

### dotLottie Web Player
```html
<!-- Web component — easiest way -->
<script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.7.1/dist/dotlottie-wc.js" type="module"></script>
<dotlottie-wc
  src="animation.lottie"
  speed="1"
  style="width: 300px; height: 300px"
  mode="forward"
  loop
  autoplay
></dotlottie-wc>
```

### Programmatic Control
```js
import { DotLottie } from "@lottiefiles/dotlottie-web"

const animation = new DotLottie({
  canvas: document.getElementById("canvas"),
  src: "animation.lottie",
  autoplay: true,
  loop: true
})

// Control methods
animation.play()
animation.pause()
animation.setSpeed(2)
animation.setFrame(30)
```

### WebGL & WebGPU Rendering (2026)
dotLottie now renders on the GPU — hardware-accelerated, smoother frames, less CPU usage.

### Multi-Animation Files
A single `.lottie` file can contain multiple animations, themes, and assets.

### Framework Support
- **React:** `@lottiefiles/dotlottie-react`
- **Vue:** `@lottiefiles/dotlottie-vue`
- **Svelte:** `@lottiefiles/dotlottie-svelte`
- **Vanilla JS:** `@lottiefiles/dotlottie-web`

### State Machines
dotLottie now supports state machines for interactive animations.

---

## How Lottie Gets Created

### 1. After Effects + LottieFiles Plugin
The original pipeline. Export AE compositions as Lottie JSON.

### 2. Jitter AI
[[Jitter-AI]] exports animations directly to Lottie/dotLottie format. Best option for web-focused motion design.

### 3. Figma (Coming Soon)
Figma Motion will support Lottie export in the future.

### 4. LottieFiles Marketplace
Thousands of free and paid animations ready to download.

---

## Key Strengths

- **Tiny file sizes** — 5-30KB typical for an animation
- **Scalable** — vector, looks crisp at any resolution
- **GPU-accelerated** — WebGL/WebGPU rendering
- **Framework-agnostic** — web component + vanilla + React + Vue + Svelte
- **dotLottie format** — multi-animation, theming, state machines, compression
- **Huge marketplace** — thousands of free animations

---

## Key Weaknesses

- **Not interactive** — pure playback, no state machines (see [[Rive-Engine]])
- **Quality depends on exporter** — bad exports = bad animations
- **Complex animations can bloat** — some effects don't export well
- **No timeline control at runtime** — play/pause/seek only

---

## When to Use

| Scenario | Verdict |
|---|---|
| Icon animations, logos, illustrations | ✅ **Perfect** |
| Loading animations, spinners | ✅ Perfect |
| Micro-interactions (like, heart, star) | ✅ Perfect |
| Hero section decorative animation | ✅ Great |
| Interactive graphics | ❌ Use [[Rive-Engine]] |
| Full-screen 3D background | ❌ Use [[Vanta.js]] |

---

## How It Fits the Cinematic Pipeline

```
Jitter / After Effects → Export .lottie → dotLottie web player → website
  (design animation)        (5-30KB)         (React/Vanilla,       (runs at 120fps,
                                              GPU-rendered)         scalable)
```

For a cinematic portfolio: Lottie is ideal for logo animations, scroll-triggered icon animations, loading states, and small decorative elements that need to look polished at any screen size.

---

## Installation

```bash
npm install @lottiefiles/dotlottie-web
# or
npm install @lottiefiles/dotlottie-react
```

---

## Related

- [[Jitter-AI]] — create and export Lottie animations in the browser
- [[Rive-Engine]] — alternative for interactive graphics
- [[Figma-Motion]] — can now animate, Lottie export coming soon
