---
name: check-touch-target-sizes
category: design
description: Check interactive target size, spacing, overlap, and reachability across touch and pointer contexts. Use when controls may be difficult to activate accurately on small screens or for users with limited dexterity.
---

# check-touch-target-sizes

Measure the active hit area, not only the visible glyph.

## When to use

- Use for navigation, icon buttons, lists, maps, charts, dismiss controls, and dense toolbars.
- Do not solve a small target by creating overlapping or misleading hit areas.

## Procedure

1. Inventory interactive elements in representative tasks, states, viewports, orientation, and zoom.
2. Measure rendered active width, height, spacing, and overlap using actual browser or device geometry.
3. Check controls near screen edges, scrolling regions, gestures, safe areas, and virtual keyboards.
4. Test adjacent destructive and safe actions for accidental activation risk.
5. Enlarge hit areas through padding or layout while preserving visual grouping and semantics.
6. Provide an equivalent control when a map point, chart mark, or inline link cannot meet the target requirement alone.
7. Test with touch, stylus, mouse, keyboard, zoom, and representative motor-access settings.
8. Record exceptions with context, alternative, risk, and owner.

## Done

- A target-size report lists measured controls, active geometry, spacing, exceptions, alternatives, and severity
- Device and input tests verify critical controls are reachable, distinct, and usable without accidental neighboring activation
