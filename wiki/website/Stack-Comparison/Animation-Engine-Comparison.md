---
tags:
  - "#comparison"
  - "#animation"
aliases:
  - Animation Comparison
---

# Animation Engine Comparison

> Side-by-side comparison of [[Motion.dev]], [[GSAP]], [[Anime.js]], and [[React-Bits]] for a cinematic portfolio website.

---

## At a Glance

| Criteria | [[Motion.dev]] | [[GSAP]] | [[Anime.js v4]] | [[React-Bits]] |
|---|---|---|---|---|
| **Type** | Animation engine | Animation engine | Animation engine | Pre-built components |
| **Bundle (min gzip)** | 2.6-18KB | 23-48KB | 0.5-24.5KB | ~12.4KB |
| **React-native API** | ✅ First-class | ⚠️ Manual (refs) | ❌ Vanilla JS | ✅ Components |
| **Scroll engine** | `useScroll`, `whileInView` | ScrollTrigger | Scroll Observer | Some scroll components |
| **Pinning** | ❌ | ✅ ScrollTrigger | ❌ | ❌ |
| **Scrub (tie to scroll)** | ✅ | ✅ (best) | ❌ | ❌ |
| **Timeline sequencing** | ⚠️ Variants | ✅ Best in class | ✅ Good | ❌ |
| **SVG morphing** | ❌ | ✅ MorphSVG | ✅ Built-in | ❌ |
| **Text splitting** | ❌ | ✅ SplitText | ❌ | ✅ SplitText component |
| **Spring physics** | ✅ Default | ✅ Plugin | ✅ Module | ❌ |
| **Gestures** | ✅ Hover/tap/drag | ✅ Observer/Draggable | ✅ Draggable | Some components |
| **Layout animation** | ✅ `layout` prop | ❌ | ✅ `createLayout()` | ❌ |
| **Hardware-accelerated scroll** | ✅ ScrollTimeline | ❌ JS-based | ❌ JS-based | ❌ |
| **License** | MIT | Now free | MIT | MIT+Commons |
| **React 18+ required** | ✅ | ❌ | ❌ | ✅ |
| **Learning curve** | Low-Medium | High | Low-Medium | Very Low |

---

## Key Differences

### Scroll Capabilities

| Feature | Motion.dev | GSAP |
|---|---|---|
| **Scroll-triggered** | `whileInView` prop | ScrollTrigger events |
| **Scroll-linked** | `useScroll` + `useTransform` | ScrollTrigger with scrub |
| **Pinning** | ❌ Not available | ✅ **Unique to GSAP** |
| **Scrub** | ✅ `useScroll` → map to value | ✅ **Tighter control** |
| **Hardware acceleration** | ✅ Native `ScrollTimeline` | ❌ JS-based |

**Verdict**: GSAP wins for complex scrollytelling with pinning. Motion.dev wins for hardware-accelerated scroll animations in React.

### React Experience

| Feature | Motion.dev | GSAP |
|---|---|---|
| **Syntax** | `motion.div` + props | `useRef` + `useEffect` + `gsap.to()` |
| **State-driven** | ✅ Natural | ⚠️ Manual |
| **Exit animations** | ✅ `AnimatePresence` | ❌ Manual |
| **Layout animations** | ✅ `layout` prop | ❌ |

**Verdict**: Motion.dev is far more idiomatic in React. GSAP requires manual lifecycle management.

### Bundle Size

| Library | Min | With scroll | Full setup |
|---|---|---|---|
| Motion.dev | 2.6KB | +0.5 to 2.5KB | 18KB |
| GSAP | 23KB | +10KB (ScrollTrigger) | 35-48KB |
| Anime.js | 0.5KB (WAAPI) | +4.3KB (Scroll) | 24.5KB |
| React Bits | 12.4KB | N/A | 12.4KB |

---

## Decision Matrix for Cinematic Portfolio

### If You Need:
| Feature | Choose |
|---|---|
| Smooth scroll + scroll reveals | [[Lenis]] + [[Motion.dev]] |
| Scroll-driven story with pinning | [[Lenis]] + [[GSAP]] ScrollTrigger |
| Hardware-accelerated scroll perf | [[Motion.dev]] |
| Complex timeline sequences | [[GSAP]] |
| SVG morphing / text splitting | [[GSAP]] (SplitText, MorphSVG) |
| Quick polished text reveals | [[React-Bits]] (BlurText, SplitText) |
| Interactive state-driven graphics | [[Rive-Engine]] |
| Lightweight icon animations | [[Lottie]] |

### Recommended Combinations

1. **Lightweight React approach** (12-22KB total):
   - [[Lenis]] (~4KB) + [[Motion.dev]] (~18KB full)

2. **Full scrollytelling power** (38-52KB total):
   - [[Lenis]] (~4KB) + [[GSAP]] + ScrollTrigger (~33KB)

3. **Best of both** (40-58KB total):
   - [[Lenis]] (~4KB) + [[Motion.dev]] (~18KB) for UI + [[GSAP]] ScrollTrigger (~23KB) for complex scroll scenes
   - **This is the most common production setup for award-winning sites**

4. **With pre-built polish**:
   - Any of the above + [[React-Bits]] (~12.4KB) for text reveals/backgrounds
   - [[Rive-Engine]] for interactive hero graphics
   - [[Lottie]] for micro-animations

---

## Related

- [[Full-Stack-Recommendations]] — how all tools fit together
- [[Lenis]] — smooth scroll foundation for all options
