---
name: design-a-responsive-layout
category: design
description: Design a resilient layout across content sizes, viewports, input modes, and zoom. Use when an interface must preserve hierarchy, reading, controls, and tasks beyond a few fixed mockup widths.
---

# design-a-responsive-layout

## Procedure

1. Define critical tasks, content priorities, supported environments, and accessibility constraints.
2. Use real short, long, missing, translated, and user-generated content.
3. Establish intrinsic regions, readable measures, spacing, and minimum control sizes.
4. Choose breakpoints where the content and task need them, not from device labels.
5. Define reflow, wrapping, stacking, overflow, cropping, and sticky behavior.
6. Preserve reading and focus order across visual rearrangement.
7. Test 320 CSS pixels, wide screens, text resizing, 400% zoom, landscape, and keyboard navigation.
8. Exercise loading, error, empty, dense data, media, and dynamic insertion states.
9. Check performance, layout shift, safe areas, and reduced motion.
10. Record implementation constraints and visual regression cases.

## Guardrails

- Do not hide required content merely to fit a small screen.
- Avoid horizontal scrolling except for content that genuinely requires two dimensions.
- Visual order must not contradict semantic or focus order.

## Done

- A responsive layout report and specification cover real content, reflow, states, and order
- Viewport, zoom, keyboard, and regression tests pass
- Overflow and performance failures are recorded and owned
