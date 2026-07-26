---
tags:
  - "#rule"
  - "#meta"
  - "#important"
aliases:
  - Rule
  - Documentation Rule
---

# Documentation Rule

> [!CAUTION]
> **This rule is mandatory.** Every change must be documented before and after execution. No exceptions.

---

## Core Directive

**Before writing any code or making any project change, document it here first.**

This wiki is the single source of truth for all research, decisions, and implementation plans. If you're about to do something and it's not documented, stop and write it down first.

---

## Required Workflow

### Phase 1: Research
1. Search for existing notes on the topic
2. If the topic has no note, create one
3. Document findings exhaustively: features, bundle size, licensing, pros/cons, code examples
4. Link to related notes using `[[double brackets]]`
5. Add appropriate `#tags`

### Phase 2: Decide
1. Open relevant comparison notes
2. Document the decision rationale in [[Changelog]]
3. Link decision back to research notes

### Phase 3: Implement
1. Create a task in [[plan]] describing what will be done
2. Implement the change
3. Update [[Changelog]] with:
   - What was done
   - Why
   - Files changed
   - Any rollback steps
4. Update relevant notes with new information

### Phase 4: Review
1. Verify the change works
2. Update [[plan]] with status
3. Add any learnings back into research notes

---

## Think Deeper Checklist

Before implementing anything, run through this:

- [ ] **Mobile** — Does this work on mobile? Touch devices?
- [ ] **Performance** — Bundle size impact? FPS? Will it jank?
- [ ] **Accessibility** — Keyboard nav? Screen readers? Reduced motion?
- [ ] **Fallback** — If this fails/hydrates late, what does the user see?
- [ ] **Edge cases** — What breaks? Empty states? Rapid interactions?
- [ ] **Bundle size** — Is this tree-shakeable? What's the actual cost?
- [ ] **Maintenance** — Is this library actively maintained? Will it break in 6 months?
- [ ] **Alternatives** — Have you verified this is the best tool for THIS specific need?

---

## Tag Taxonomy

| Tag | Use For |
|---|---|
| `#home` | Index pages |
| `#rule` | Governance / meta notes |
| `#animation` | Animation engines (Motion, GSAP, Anime.js) |
| `#scroll` | Scrolling libraries (Lenis) |
| `#ui` | UI component systems (shadcn, 21st.dev, React Bits) |
| `#design` | Design tools (Figma Motion, Jitter, Rive) |
| `#ai` | AI tools, plugins, skills |
| `#comparison` | Decision guides, comparison tables |
| `#reference` | Glossary, definitions |
| `#changelog` | Change tracking |

---

## Related

- [[Home]]
- [[Changelog]]
- [[plan]]
