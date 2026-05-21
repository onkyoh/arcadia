# Arcadia — GSAP Animation Guidelines

These rules apply to every page in the Arcadia project. Follow them exactly when adding animations to a new page or section.

---

## Stack

- **Library:** GSAP + ScrollTrigger (npm package `gsap`)
- **Import:**
  ```js
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  ```
- **Responsive:** `gsap.matchMedia()` with two breakpoints (see below)

---

## Global Values

| Property | Mobile (`≤767px`) | Desktop (`≥768px`) |
|---|---|---|
| **Section elements** (`y`) | `25px` | `40px` |
| **Stagger items** (`y`) | `20px` | `35px` |
| Duration (single element) | `0.8s` | `0.8s` |
| Duration (stagger item) | `0.75s` | `0.75s` |
| Ease | `power2.out` | `power2.out` |
| Stagger delay | `0.08–0.12s` | `0.08–0.12s` |
| ScrollTrigger start | `"top 65%"` | `"top 65%"` |
| ScrollTrigger `once` | `true` | `true` |

---

## Rules

### Rule 1 — Always animate these in every section (in order)
1. `.cs-heading` — eyebrow/topper text, if present. Animate **before** `.cs-title`.
2. `.cs-title` — the section `<h2>`, always animate.
3. `.cs-text` — standalone body paragraphs (not inside `.cs-item`). Stagger if multiple.
4. `.cs-h3` — standalone sub-headings (not inside `.cs-item`). Stagger if multiple.
5. `.cs-button-solid` — standalone CTA button (not inside `.cs-item`). Animate after title/text.
6. `.cs-picture` — section-level images (not inside `.cs-item`). Always animate.

### Rule 2 — Stagger these item types
Always stagger individually — never animate their parent container:
- `.cs-item` — service cards, carousel slides, etc.
- `.cs-li` — process steps, list items
- `.cs-faq-item` — FAQ accordion rows
- Use stagger `0.1s` for cards, `0.08s` for smaller items like FAQ rows

### Rule 3 — Never animate containers
These are layout wrappers — do not target them directly:
- `.cs-content`
- `.cs-card-group`
- `.cs-ul`
- `.cs-wrapper`
- `.cs-faq-group`
- `.cs-faq`

### Rule 3b — Mixed content blocks use DOM-order stagger
When a `.cs-content` block interleaves different element types (e.g. `.cs-h3` → `.cs-text` → `.cs-h3` → `.cs-text` → `.cs-button-solid`), target `.cs-content > *` with a stagger instead of selecting each type separately. This preserves the linear top-to-bottom cascade and prevents later elements from appearing before earlier ones.

### Rule 4 — Images inside cards are not animated separately
When a `.cs-picture` is nested inside a `.cs-item`, it is revealed as part of the card stagger. Only animate `.cs-picture` elements that are **siblings of `.cs-content`** (i.e. section-level images).

### Rule 5 — Hero is a special case (on-load, no ScrollTrigger)
The hero section is already in view on page load, so it uses a `gsap.timeline()` instead of ScrollTrigger:
- Sequence: `.cs-heading` → `.cs-title` → `.cs-button-group`
- Overlap: `-=0.55` (each element starts 0.55s before the previous finishes)
- Delay: `0.15s` mobile, `0.25s` desktop

---

## Selector Cheatsheet for This Project

| Section | Elements to animate |
|---|---|
| `#hero-2344` | `.cs-heading`, `.cs-title`, `.cs-button-group` (timeline, on-load) |
| `#services-2355` | `.cs-title`, `.cs-item` (stagger) |
| `#typical` | `.cs-title`, `.cs-text` (stagger), `.cs-button-solid`, `.cs-picture` |
| `#models` | `.cs-title`, `.cs-content > *` (stagger all children in DOM order), `.cs-picture` |
| `#carousel` | `.cs-title`, `.cs-item` (stagger) |
| `#process` | `.cs-title`, `.cs-li` (stagger), `.cs-picture` |
| `#sbs-2358` | `.cs-title`, `.cs-picture` (each separately), `.cs-h3` |
| `#faq-2294` | `.cs-title`, `.cs-faq-picture`, `.cs-faq-item` (stagger) |
| `#cta-2353` | `.cs-title`, `.cs-button-solid`, `.cs-picture` |

---

## `reveal()` Helper

Use this helper for all scroll-triggered animations:

```js
function reveal(targets, options = {}) {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return;
  gsap.from(els, {
    opacity: 0,
    y: options.y,
    duration: options.duration ?? 0.8,
    ease: "power2.out",
    stagger: options.stagger ?? 0,
    scrollTrigger: {
      trigger: els[0],
      start: "top 65%",
      once: true,
    },
  });
}
```

- `targets` — CSS selector string or array of selectors
- `options.y` — translateY in px (use `Y.el` or `Y.item` from the breakpoint constants)
- `options.stagger` — stagger delay in seconds (omit for single elements)
- `options.duration` — override default `0.8s` (use `0.75` for stagger items)

---

## Breakpoint Constants

```js
// Inside mm.add("(max-width: 767px)", () => { ... })
const Y = { el: 25, item: 20 };

// Inside mm.add("(min-width: 768px)", () => { ... })
const Y = { el: 40, item: 35 };
```

Always use `Y.el` for single section-level elements and `Y.item` for staggered collection items.
