---
tags:
  - "#ui"
aliases:
  - shadcn
  - shadcn/ui
  - shadcn react
---

# shadcn/ui

> **The foundational UI component system for React.** Not an npm package — components are copied into your repo as source code you own. Builds on Radix UI, Base UI, and React Aria.

**Homepage:** https://ui.shadcn.com
**GitHub:** https://github.com/shadcn-ui/ui
**License:** MIT
**Version:** CLI v4+ (actively maintained, monthly releases)

---

## Overview

shadcn/ui is not a traditional component library. You don't `npm install` it. Instead, you `npx shadcn@latest add <component>`, and the full source code is copied into your project. You own it, edit it, and never need to upgrade a package version.

This philosophy makes it the perfect foundation for any React project — you get accessible, well-designed primitives that you can customize completely.

---

## How It Works

```bash
# Initialize shadcn in your project
npx shadcn@latest init

# Add components individually
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Each component is copied to `components/ui/` in your project as editable source.

---

## Three Base Libraries (As of July 2026)

| Base | Status | Description |
|---|---|---|
| **Base UI** | **Default** | Lightweight, unstyled headless components |
| **Radix UI** | Supported | Mature, battle-tested accessibility primitives |
| **React Aria** | New (July 2026) | Adobe's accessible React components |

Choose during init: `npx shadcn@latest init --base aria`

---

## Available Components

### Core UI
`Button`, `Card`, `Dialog`, `Dropdown Menu`, `Popover`, `Tooltip`, `Sheet`, `Sidebar`, `Tabs`, `Accordion`, `Alert`, `Badge`, `Breadcrumb`, `Calendar`, `Checkbox`, `Collapsible`, `Command`, `Context Menu`, `Date Picker`, `Form`, `Hover Card`, `Input`, `Input OTP`, `Label`, `Menubar`, `Navigation Menu`, `Pagination`, `Progress`, `Radio Group`, `Scroll Area`, `Select`, `Separator`, `Slider`, `Switch`, `Table`, `Textarea`, `Toast`, `Toggle`, `Toggle Group`

### Chat Components (New — June 2026)
`MessageScroller`, `Message`, `Bubble`, `Attachment`, `Marker` — purpose-built for AI chat interfaces.

### New Utilities
- `@shadcn/react` — unstyled, headless React primitives
- `@shadcn/helpers` — helpers for AI SDK integration
- `shadcn/typeset` — a single CSS file for styling HTML/rendered markdown

---

## Themes (8 Available)

| Theme | Vibe |
|---|---|
| **Vega** | Default, neutral |
| **Nova** | Modern, clean |
| **Maia** | Warm, earthy |
| **Lyra** | Elegant, refined |
| **Mira** | Bold, vibrant |
| **Luma** | Bright, airy |
| **Rhea** | Dark, powerful |
| **Sera** | Minimal, serene |

---

## MCP Support

shadcn has its own MCP server, letting AI agents install components, read docs, and inspect compositions automatically.

```bash
pnpm dlx shadcn@latest docs card  # Pull component docs into AI context
```

The `shadcn/skills` package auto-does this for AI agents.

---

## Relationship with 21st.dev

- **shadcn/ui** = base primitives (button, card, dialog)
- **21st.dev** = community registry of 10K+ components built ON shadcn conventions

They are complementary. shadcn gives you the building blocks; 21st.dev gives you pre-built compositions.

---

## Key Strengths

- **You own the code** — no lock-in, no upgrade burden
- **Accessible by default** — Radix/Base UI/Aria handle a11y
- **Tailwind CSS** — easy to style and customize
- **Tree-shakeable** — only components you add are in your codebase
- **MCP + AI-ready** — agents can install and compose components
- **Massive ecosystem** — components, blocks, themes, community

---

## Installation

```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog
```

---

## Related

- [[21st.dev]] — component registry built on shadcn conventions
- [[React-Bits]] — animated components for React
