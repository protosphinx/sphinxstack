---
name: build-a-responsive-navigation
category: web
description: Build responsive site navigation with semantic structure, reliable focus behavior, clear current state, and usable small-screen interaction. Use when one information architecture must work across pointer, keyboard, touch, zoom, and assistive technology.
---

# build-a-responsive-navigation

Keep the information architecture stable even when its presentation changes.

## When to use

- Use for headers, primary menus, account navigation, nested sections, and mobile drawers.
- Avoid separate desktop and mobile structures that expose different links or states.

## Procedure

1. Define destinations, hierarchy, labels, current-location rules, authentication variants, and the smallest supported viewport.
2. Use a navigation landmark, real links for destinations, and buttons only for disclosure or actions.
3. Implement desktop layout without hover-only access. Give expandable items explicit state and predictable keyboard behavior.
4. Transform the same logical items for small screens. If using a drawer or dialog, manage initial focus, background interaction, Escape, close controls, and focus return.
5. Preserve visible focus, logical DOM order, adequate targets, readable labels, and the current-page indicator.
6. Handle long translations, text zoom, safe areas, reduced motion, slow fonts, and content wrapping without clipping.
7. Prevent scroll locking, history, or route changes from leaving the menu or focus in a stale state.
8. Test anonymous and authenticated variants with keyboard, touch, screen reader, zoom, landscape, narrow screens, and JavaScript or network failure.

## Failure plan

- If enhanced disclosure fails, keep core destinations reachable through progressive fallback.
- If a breakpoint hides content from one modality, restore the shared semantic structure before polishing animation.

## Done

- A navigation implementation preserves destinations, hierarchy, current state, and semantics at every supported size
- Interaction tests verify pointer, touch, keyboard, focus, Escape, route changes, zoom, and assistive technology
- A responsive evidence report records tested states, viewports, translations, failures, and fixes
