---
name: design-for-keyboard-navigation
category: web
description: Design predictable keyboard operation, focus, and recovery across an interface. Use when custom controls, overlays, dynamic content, shortcuts, or complex widgets must work without pointer input.
---

# design-for-keyboard-navigation

## Procedure

1. Inventory interactive elements, widgets, routes, overlays, dynamic updates, and task order.
2. Prefer native elements and documented widget patterns.
3. Define sequential focus order from semantic structure, not positive tabindex values.
4. Specify keys, focus entry, internal movement, activation, cancellation, and exit per widget.
5. Keep focus visible, unobscured, and stable after updates.
6. Return or move focus to the most logical element after close, deletion, route change, or error.
7. Provide skip paths and avoid keyboard traps.
8. Make shortcuts discoverable, conflict-aware, and disableable where required.
9. Test every journey with keyboard alone at zoom and across supported browsers and screen readers.

## Guardrails

- Do not make hover or drag the only path.
- Never remove focus outlines without an equivalent visible indicator.
- Avoid custom interaction that contradicts established semantics.

## Done

- A keyboard navigation report maps order, keys, entry, exit, and dynamic focus
- Test evidence verifies critical journeys pass keyboard-only and visible-focus checks
- Traps, shortcut conflicts, and assistive-technology checks are resolved
