---
tags:
  - "#design"
  - "#animation"
aliases:
  - Rive
  - Rive Engine
  - Rive MCP
---

# Rive Engine — Interactive Graphics

> **An end-to-end pipeline for interactive graphics.** Game-engine-like animation with state machines, data binding, and 120fps rendering. Used by Spotify Wrapped, Duolingo, Disney.

**Homepage:** https://rive.app
**GitHub:** https://github.com/rive-app/rive
**License:** MIT (runtimes are open source)
**Version:** Editor 0.8.x, Runtimes actively maintained
**Funding:** $24M total, 40-50 employees

---

## Overview

Rive is not a traditional animation tool. It's a **real-time interactive graphics engine** — more like a game engine than After Effects. Designers build graphics with state machines that respond to user input, data, and logic. What you see in the editor is exactly what ships in production.

The State Machine bridges the gap between design and development — designers define interactive behaviors (hover, click, drag, layered animations) visually, and developers ship them directly via open-source runtimes.

---

## Key Features

### State Machine
The core of Rive's power. Define interactive behaviors visually:
- States = animation clips
- Transitions = rules for moving between states
- Conditions = logic (e.g., "if hovered, play hover animation")
- Multiple layers for concurrent functionality

```jsx
// Example in React: responding to hover
<Rive
  src="button.riv"
  stateMachines="buttonSM"
  onMouseEnter={() => rive.play("hover")}
  onMouseLeave={() => rive.play("idle")}
/>
```

### Data Binding
Bind animation properties to runtime data. Drive a progress ring, a health bar, or a chart directly from data — no code needed for the animation logic.

### Luau Scripting
Extend Rive functionality with Luau scripts in the editor.

### MCP Integration (Out of Early Access — June 2026)
AI tools can create and manipulate Rive files:
- Create layouts, shapes, paths, artboards
- Edit linear animations, state machines, states, transitions, conditions
- Manage Luau scripts and WGSL shaders
- Build component instances, lists, and asset-based elements

```text
Prompt: "Create a State Machine about birds with 20 states and 2 layers"
→ AI builds it directly in the Rive editor
```

### Runtimes (All Open Source)
| Platform | Package |
|---|---|
| Web | `@rive-app/canvas` |
| React | `@rive-app/react-canvas` |
| React Native | `@rive-app/react-native` |
| Flutter | `rive` |
| iOS/macOS | `rive-ios` |
| Android | `rive-android` |
| Unity | Rive Unity package |
| Unreal | Rive Unreal plugin |
| Webflow | Rive Webflow plugin |
| Framer | Rive Framer plugin |
| C++ | `rive-cpp` |

---

## Key Strengths

- **Uniquely interactive** — state machines enable behaviors no other tool can
- **GPU-accelerated** — 120fps vector rendering
- **Tiny file sizes** — up to 90% smaller than Lottie/CSS alternatives
- **4x faster production** than AE + Lottie workflows (per teams)
- **Used by massive brands** — Spotify Wrapped, Duolingo, Disney, ESPN, LinkedIn, Google
- **MCP for AI** — agents build state machines and animations directly
- **End-to-end** — what you see in the editor ships in production

---

## Key Weaknesses

- **Steepest learning curve** — state machines are a new paradigm
- **Requires Rive editor** — can't create .riv files without it
- **More complex** for simple animations than Lottie
- **Proprietary editor** — editor is not open source (runtimes are)
- **Overkill** for simple icon animations (use [[Lottie]])

---

## When to Use

| Scenario | Verdict |
|---|---|
| Interactive character / mascot | ✅ **Best in class** |
| Data-driven graphics (progress, charts) | ✅ Best in class |
| Complex hover/click/tap interactions | ✅ Best in class |
| Simple icon animation | ❌ Use [[Lottie]] |
| Background visual effect | ❌ Use CSS or [[Vanta.js]] |

---

## How It Fits the Cinematic Pipeline

```
Rive Editor → Export .riv → Rive React Runtime → Interactive graphic on website
  (state machines,    (tiny file,       (120fps, data-bound,
   data binding,        GPU-rendered)    responds to user input)
   MCP for AI)
```

For a cinematic portfolio: Rive is best for interactive hero graphics, animated logos, data-driven elements, or anything that needs to respond to user input with state-based animation.

---

## Installation

```bash
npm install @rive-app/react-canvas
```

```jsx
import { useRive } from "@rive-app/react-canvas"

function InteractiveButton() {
  const { RiveComponent } = useRive({
    src: "button.riv",
    stateMachines: "buttonSM",
    autoplay: true
  })
  return <RiveComponent />
}
```

---

## Related

- [[Lottie]] — simpler, lighter alternative for non-interactive animations
- [[Figma-Motion]] — design tool integration (different category)
- [[Jitter-AI]] — motion design tool (different category)
