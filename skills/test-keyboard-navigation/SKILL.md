---
name: test-keyboard-navigation
category: web
description: Test a web journey using keyboard-only navigation for reachability, order, focus, activation, escape, and recovery. Use when checking interactive accessibility without a pointer.
---

# test-keyboard-navigation

Follow realistic tasks, not a tab-count checklist.

## When to use

- Use for navigation, forms, dialogs, menus, tables, editors, media, checkout, and account flows.
- Do not remove focus outlines or add positive tabindex to repair visual order.

## Procedure

1. Define browser, viewport, user state, route, task, expected controls, and accessibility baseline.
2. Start at the address bar and use Tab, Shift+Tab, Enter, Space, arrows, Escape, and documented shortcuts.
3. Verify skip links, logical order, visible focus, no traps, and no offscreen or inert focus.
4. Test custom controls against expected keyboard patterns.
5. Open and close overlays, confirm focus entry, containment where required, return, and background protection.
6. Complete validation and error recovery without a pointer.
7. Repeat at zoom, responsive layouts, and with representative assistive technology.
8. Record steps, affected control, expected behavior, actual behavior, and severity.

## Done

- A keyboard test report records journeys, keys, focus order, visibility, traps, control behavior, and recovery
- Retest verifies fixes across browsers, zoom, responsive layouts, and relevant assistive technology
