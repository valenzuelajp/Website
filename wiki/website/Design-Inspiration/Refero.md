---
tags:
  - "#design"
  - "#reference"
aliases:
  - Refero
  - Refero Styles
  - refero.design
---

# Refero — UI/UX Design Research Library

> **Curated library of real product screens, flows, and patterns.** Searchable by aesthetic direction, page type, UX pattern, or company. Built for both humans and AI agents.

**Homepage:** https://refero.design
**Styles Library:** https://styles.refero.design
**MCP Docs:** https://doc.refero.design
**Pricing:** Free to browse, Pro for MCP access

---

## Overview

Refero is a structured design research library. It's not a component library you install — it's a **reference library** for seeing how real products solve design problems. Instead of guessing what a checkout flow should look like, you search Refero and find 50 real examples from shipped apps.

The key differentiator: **Refero is built for AI agents** via MCP. Your coding agent can research real product interfaces before writing code, grounding its output in proven patterns rather than generic AI defaults.

---

## Two Products

### Refero Core (refero.design)
Searchable library of real product screens:
- **Page Types** — landing, dashboard, onboarding, settings, checkout
- **UX Patterns** — testimonials, filtering, billing, dark mode, shopping
- **UI Elements** — dialogs, cards, tables, tabs, navigation, illustration
- **Search by brand** — find screens from specific companies
- **Search by image** — upload a screenshot to find similar designs

### Refero Styles (styles.refero.design)
A **design context system** specifically for AI agents. Each style entry includes:
- Screenshots of real interfaces
- **Extracted colors, typography, spacing, and component notes**
- A ready-to-use `DESIGN.md` you can copy into your agent context
- Searchable by mood, brand, color, typography, or URL

This turns a screenshot from "visual inspiration" into **usable design context** for an AI coding agent.

---

## MCP for AI Agents

Refero's MCP connects your agent to the library so it can **research before it builds**:

```text
// Your agent queries Refero before writing code
"Find onboarding flows from top fintech apps"
"Show me dark mode settings patterns"
"Get checkout flow examples from e-commerce apps"
```

The agent studies real patterns, extracts design decisions, and applies them to the code it generates. This prevents "AI slop" — the output is grounded in what real products actually look like.

---

## Key Strengths

- **Real products** — not templates, not mockups. Shipped interfaces.
- **AI-native** — MCP for agents, DESIGN.md extraction
- **Structured** — tagged, searchable, filterable
- **Styles library** — color/type/spacing extracted for direct agent use
- **Image search** — find similar designs visually

---

## Key Weaknesses

- **Subscription needed** for full access / MCP
- **Coverage varies** — strong on mobile/web apps, thinner on specific niches
- **Inspiration tool** — doesn't provide code, only references

---

## How It Fits the Cinematic Pipeline

```
Refero MCP → Agent researches real designs → Agent builds with proven patterns
  (fintech flows,    (extracts color/type/   (output looks like a real
   dark mode,         spacing/DESIGN.md)       product, not AI slop)
   onboarding)
```

For a cinematic portfolio: use Refero to research portfolio sites, creative agency sites, and award-winning personal brands. Extract their design decisions into your DESIGN.md.

---

## Related

- [[Mobbin]] — alternative design reference library (larger library, mobile-focused)
- [[Godly]] — web design inspiration showcase (curated, not structured)
- [[UI-UX-Pro-Max]] — design intelligence skill (generates design systems)
- [[Anthropic-Frontend-Design]] — Claude plugin for design quality
