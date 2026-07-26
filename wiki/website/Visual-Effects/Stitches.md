---
tags:
  - "#ui"
  - "#reference"
aliases:
  - Stitches
  - stitchesjs
  - CSS-in-JS
---

# Stitches — CSS-in-JS (DEPRECATED)

> **Status: ARCHIVED (April 2026).** Do not use for new projects.

**Homepage:** https://stitches.dev
**GitHub:** https://github.com/stitchesjs/stitches (archived, read-only)
**Last Release:** v1.2.8 (April 2022)
**License:** MIT

---

## Why It's Here (And Why Not to Use It)

Stitches was a CSS-in-JS library with near-zero runtime, SSR support, multi-variant theming, and a good developer experience. It powered many production sites.

However, the **ecosystem has moved on**:
1. **Repository archived** April 2026 — no longer maintained
2. **Last release 2022** — hasn't seen updates in 4+ years
3. **Tailwind CSS** is now the standard styling approach (and what [[shadcn-ui]] uses)
4. **Modern alternatives**: Panda CSS, Vanilla Extract, Linaria, or just Tailwind

---

## Modern Alternatives

| Tool | Approach | Why Choose It |
|---|---|---|
| **Tailwind CSS** | Utility-first CSS | Default in shadcn, massive ecosystem, works with everything |
| **Panda CSS** | CSS-in-JS with build-time extraction | If you want typed CSS-in-JS without runtime cost |
| **Vanilla Extract** | Zero-runtime CSS-in-JS | Type-safe, framework-agnostic, CSS at build time |
| **Linaria** | Zero-runtime CSS-in-JS | Similar to Vanilla Extract, mature |

---

## Recommendation

**Use Tailwind CSS** for this project. It's what [[shadcn-ui]], [[21st.dev]], and [[React-Bits]] all use. No reason to add a different styling system.

---

## Related

- [[shadcn-ui]] — uses Tailwind CSS by default
- [[21st.dev]] — Tailwind CSS components
