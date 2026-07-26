---
tags:
  - "#ai"
aliases:
  - UI UX Pro Max
  - uipromax
  - design intelligence skill
---

# UI UX Pro Max — AI Design Intelligence

> **110K-star AI skill that injects design intelligence into any coding agent.** 84 styles, 192 color palettes, 74 font pairings, 161 reasoning rules, 22 tech stacks. Works with OpenCode.

**Homepage:** https://www.uupm.cc
**GitHub:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
**License:** MIT (open source free version, premium version available)
**Version:** v2.11.0 (July 2026)
**Stars:** 110K+

---

## Overview

UI UX Pro Max is not a library — it's an **AI skill** that provides design intelligence to your coding agent. When you ask your agent to build UI, the skill automatically generates a complete design system (style, colors, typography, layout rules) before writing any code.

It prevents your AI from making bad default choices (generic cards, bad colors, poor spacing) by embedding 161 industry-specific reasoning rules that the agent consults during generation.

---

## What's Included

### Design Intelligence Database

| Category | Count | Examples |
|---|---|---|
| UI Styles | 84 | Glassmorphism, Claymorphism, Brutalism, Neumorphism, Bento Grid, Aurora UI, AI-Native UI |
| Color Palettes | 192 | Industry-specific (SaaS, E-commerce, Healthcare, Fintech, Gaming) |
| Font Pairings | 74 | Curated combinations with Google Fonts imports |
| UX Guidelines | 98 | Best practices, anti-patterns, accessibility rules |
| Chart Types | 25 | Recommendations with library suggestions |
| Product Types | 192 | Each with tailored reasoning rules |
| Tech Stacks | 22 | React, Next.js, Astro, Vue, Angular, Svelte, Tailwind, shadcn/ui, Three.js, etc. |

### Design System Generator (v2.0)
The flagship feature: an AI-powered reasoning engine that analyzes your project requirements and generates a complete, tailored design system in seconds.

### Pre-Delivery Checks
Validates generated UI against common anti-patterns before delivering the code.

---

## Installation for OpenCode

```bash
# Install CLI globally
npm install -g ui-ux-pro-max-cli

# Install for OpenCode
uipro init --ai opencode
```

For other agents:
```bash
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity
```

### Manual Install (Claude Code Plugin)
```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

---

## How It Works

1. **You ask** — "Build a landing page for my portfolio"
2. **Design System Generated** — AI analyzes requirements and generates: style direction, color palette, typography scale, spacing system, component patterns
3. **Smart Recommendations** — BM25 search engine finds best-matching styles/colors/fonts for your product type
4. **Code Generation** — Implements UI with proper design tokens
5. **Pre-Delivery Checks** — Validates against anti-patterns

---

## Key Strengths

- **110K stars** — massive community, actively maintained
- **Works with 18+ AI agents** — OpenCode, Claude, Cursor, Windsurf, Copilot, etc.
- **Design system generation** — not just rules, full design tokens
- **Open source** — free MIT version
- **Comprehensive** — covers styles, colors, typography, UX, charts, animation
- **Prevents AI slop** — stops bad defaults before they happen

---

## Key Weaknesses

- **Free version has limitations** — premium version unlocks more
- **Adds overhead** — agent spends time consulting rules before generating
- **Can be opinionated** — some rules may not fit your taste
- **Still needs human oversight** — generated design systems need refinement

---

## How It Fits the Cinematic Pipeline

```
UI UX Pro Max ──→ Generates design system ──→ Agent builds UI with proper tokens
  (style, colors,     (in seconds,               (no slop, no bad defaults,
   fonts, UX rules)    project-specific)           consistent design)
```

For a cinematic portfolio: it will recommend the right style direction (dark, immersive, typography-heavy), appropriate color palette, font pairings, and animation guidelines — all before your agent writes a single line of code.

---

## Related

- [[Anthropic-Frontend-Design]] — Claude-specific design plugin (complementary)
- [[DOCUMENTATION-RULE]] — document decisions before implementing
- [[Full-Stack-Recommendations]] — how all tools fit together
