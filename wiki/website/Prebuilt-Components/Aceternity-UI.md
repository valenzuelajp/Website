---
tags:
  - "#ui"
  - "#design"
aliases:
  - Aceternity
  - Aceternity Labs
  - Aceternity UI
---

# Aceternity UI — Tailwind + Motion Components

> **200+ production-ready React/Next.js components with micro-interactions.** Built with Tailwind CSS and Framer Motion. shadcn-compatible.

**Homepage:** https://ui.aceternity.com
**CLI:** `npx aceternity-ui init`
**License:** MIT (free components) + All-Access Pass (premium)
**Bundle:** Components vary (individual imports, tree-shakeable)

---

## Overview

Aceternity UI is a collection of beautifully designed React components that use [[Motion.dev]] (Framer Motion) for animations and Tailwind CSS for styling. Like [[shadcn-ui]], components are copied into your project as source code — you own them.

The library focuses on **micro-interactions and animated UI** — these are not your standard buttons and cards. Hero sections with animated gradients, bento grids with hover effects, logo clouds with subtle motion, and shader-based backgrounds.

---

## Component Categories

| Category | Count | Examples |
|---|---|---|
| **Hero Sections** | 21+ | Full-screen animated heroes with spotlight effects |
| **Feature Sections** | 18+ | Bento grids, card layouts with hover animations |
| **Backgrounds** | 11+ | Animated gradients, grid patterns, shader effects |
| **Bento Grids** | 6+ | Modern layout grids with micro-interactions |
| **Logo Clouds** | 6+ | Animated logo rows with hover effects |
| **Shaders** | 3+ | Reusable WebGL shader backgrounds |
| **Free Components** | 30+ | Individual animated components |

Plus premium blocks: Pricing, Testimonials, CTAs, Navbars, Footers, FAQs, Blog, Login/Signup, Stats, Sidebars, Contact, Team, Cards.

---

## How It Fits with shadcn

Aceternity UI is **compatible with shadcn/ui** — it uses the same conventions, registry format, and CLI pattern:

```bash
# Initialize
npx aceternity-ui init

# Add a component
npx aceternity-ui add spotlight

# Or via shadcn CLI (v3+)
npx shadcn@latest add @aceternity/spotlight
```

It also has **MCP support** through the shadcn MCP server — AI agents can browse, search, and install components.

---

## Key Strengths

- **Micro-interactions** — components feel alive (hover animations, scroll reveals, gradient shifts)
- **shadcn-compatible** — same DX, same conventions, works alongside
- **Copy-paste** — own the code, no dependency
- **MCP support** — AI agents can install components
- **Free tier** — 30+ components free, premium for the rest
- **Uses [[Motion.dev]]** — hardware-accelerated animations

---

## Key Weaknesses

- **Premium pricing** — best components are All-Access Pass ($)
- **[[Motion.dev]] dependency** — adds bundle size if you're not already using it
- **Not as mature as shadcn** — smaller ecosystem, fewer community contributions
- **CLI last updated 2024** — but the component library is actively maintained via shadcn CLI

---

## For a Cinematic Portfolio

Aceternity UI's **Spotlight** hero, **Animated Gradient** backgrounds, and **Bento Grid** components are directly relevant for a cinematic portfolio. These give polished, animated sections without building from scratch.

```bash
npx shadcn@latest add @aceternity/spotlight
npx shadcn@latest add @aceternity/animated-gradient
npx shadcn@latest add @aceternity/bento-grid
```

---

## Related

- [[shadcn-ui]] — base UI primitives (complementary)
- [[21st.dev]] — alternative component registry
- [[React-Bits]] — animated components (similar category)
- [[Motion.dev]] — animation engine used by Aceternity
