---
tags:
  - "#ai"
aliases:
  - Frontend Design Plugin
  - Claude Frontend Design
  - Anthropic Design
---

# Anthropic Frontend Design Plugin

> **Official Claude Code plugin for distinctive, production-grade UI.** Makes your AI agent's output look designed, not generated. Avoids "AI slop."

**Homepage:** https://claude.com/plugins/frontend-design
**GitHub:** https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
**Install:** `/plugin install frontend-design@claude-plugins-official`
**License:** Part of Claude Code (free with Claude subscription)
**Status:** Official Anthropic plugin, actively maintained

---

## Overview

Left to its defaults, an AI coding agent tends toward a recognizable "AI slop" aesthetic — purple gradients, generic card layouts, weak typography. The Frontend Design plugin corrects that at the source, before you have to.

It steers Claude toward:
- **Typography with intent** — sensible type scales, weights, and line lengths
- **Real layout hierarchy** — clear primary/secondary structure, deliberate spacing
- **Restraint with effects** — considered use of shadows, gradients, motion
- **A distinctive default** — output reads as a designed product, not a template

---

## How It Works

### Installation (One Command)
```text
/plugin install frontend-design@claude-plugins-official
```

Then verify with `/plugin`. The plugin activates **automatically** whenever you ask Claude to build or restyle UI. No special commands needed.

### What It Changes
| Aspect | Without Plugin | With Plugin |
|---|---|---|
| Typography | Default browser styling | Intentional type scale, weights, line lengths |
| Layout | Cramped, undifferentiated blocks | Clear hierarchy, deliberate spacing |
| Effects | Shadows, gradients piled on | Restrained, purposeful use |
| Overall vibe | Template-like | Designed product |

### Pair with theme-factory
Install the `theme-factory` skill alongside for coherent color and type themes:
```text
/plugin install theme-factory@official
```

---

## Key Strengths

- **One command install** — zero configuration
- **Works automatically** — no special prompting needed
- **Raises the baseline** — every UI output is more considered
- **Official Anthropic plugin** — maintained, updated
- **Complements UI UX Pro Max** — Frontend Design handles aesthetic direction, UI UX Pro Max handles design system generation

---

## Key Weaknesses

- **Claude-only** — only works with Claude Code, not other AI agents
- **Raises the floor, not the ceiling** — you still need to give specific direction for great results
- **Subtle effect** — it makes UI "less bad" rather than "instantly amazing"

---

## How to Get the Best Results

1. Install the plugin
2. Give specific creative direction (brand, mood, references, examples)
3. Pair with [[UI-UX-Pro-Max]] for design system generation
4. Iterate — tell Claude what to adjust

---

## Related

- [[UI-UX-Pro-Max]] — complementary AI design skill (works with any agent, including OpenCode)
- [[DOCUMENTATION-RULE]] — document decisions before implementing
