---
tags:
  - "#design"
aliases:
  - Figma Motion
  - Figma animation
---

# Figma Motion

> **Native timeline animation inside Figma.** Launched June 24, 2026 at Config 2026. A new "Motion" mode alongside Design, Draw, and Dev.

**Homepage:** https://www.figma.com/motion/
**Blog:** https://www.figma.com/blog/introducing-figma-motion/
**Status:** Open beta (all plans, rolling out gradually)
**Format:** Part of Figma (no separate purchase for beta)

---

## Overview

Figma Motion brings a full animation timeline directly onto the canvas. For the first time, motion lives in the same file as your components, variables, and design system. No switching tools, no plugins needed — it's a native part of Figma.

This is a **massive shift** for design-to-code workflows. Animations designed in Figma can now flow directly into code via MCP, preserving easing, timing, and keyframes.

---

## Key Features

### Timeline
- Full keyframe timeline (position, scale, rotation, opacity)
- Auto-keyframing — records changes as you edit
- Bezier and spring easing curves
- Time-based comments (point to any moment in the animation)

### Animation Styles
Presets for quick motion: Fade, Rotate, Scale, Resize, Move. Stack or sequence them.

### Animated Components
Components now carry motion. Design an animation once on a component, and it travels across every screen and file. This is the foundation of a design system's motion language.

### Motion Variables
Create easing variables, define modes (e.g., "fast" / "slow" / "expressive"), apply across animations. Switch the mode at the page level and every animation updates.

### Figma Agent for Motion
Describe what you want in natural language: "fade in from bottom with a bounce" — the agent builds real keyframes on the timeline, grounded in your components and tokens.

### 3D Transforms (Coming)
Rotate frames, vectors, and text on the z-axis with native controls.

### Shader Animation
Any property a shader exposes can be keyframed on the timeline.

---

## Dev Handoff — The Key Feature

### Dev Mode Motion Tab
Switch to Dev Mode and open the Motion tab. The full timeline is visible and inspectable. Developers can:

1. See every timing value, easing curve, and keyframe
2. **Copy animation code** directly into:
   - CSS
   - JSON
   - React / Motion.dev code

### MCP Export
Figma's MCP server brings your design decisions into AI coding tools. **Send animation context to your agent** — easing, timing, keyframes — so the implementation matches the design exactly.

---

## Key Strengths

- **Native to Figma** — no switching tools, no plugins
- **Animated components** — motion becomes part of your design system
- **MCP export** — animation context flows directly into code via AI
- **Dev Mode** — developers inspect the full timeline
- **Figma agent** — generate animations from prompts
- **Variables** — consistent motion tokens across the design system

---

## Key Weaknesses

- **Open beta** — features still rolling out
- **Lottie export not yet available** ("coming soon")
- **Paid plan needed** for agent + high-res export
- **Figma-only** — if you don't use Figma, not relevant

---

## How It Fits the Cinematic Pipeline

```
Design in Figma Motion           → MCP export → AI coding agent
  (timeline, easing, keyframes)     (animation context) → (Motion.dev / GSAP code)
```

The MCP bridge is the key: Figma Motion doesn't just export a video — it exports the actual animation values your agent needs to write precise code.

---

## Related

- [[Jitter-AI]] — alternative motion design tool (web-based, Lottie export)
- [[Rive-Engine]] — interactive state-machine graphics (different category)
- [[Motion.dev]] — animation engine that Figma Motion can export to
