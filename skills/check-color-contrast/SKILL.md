---
name: check-color-contrast
category: design
description: Check color contrast across text, controls, focus, states, gradients, images, and themes. Use when an interface needs measurable accessible color relationships and verified repairs.
---

# check-color-contrast

Measure the actual rendered foreground and background in every meaningful state.

## Procedure

1. Inventory text sizes, icons, controls, borders, focus indicators, charts, links, and themes.
2. Capture computed colors over the real background, including transparency, gradients, and images.
3. Measure the applicable contrast requirement for each element and state.
4. Check hover, focus, active, disabled, selected, error, visited, and high-contrast modes.
5. Repair tokens or components at the narrowest shared source.
6. Preserve hierarchy and brand intent without relying on color alone.
7. Re-measure rendered results in representative browsers and displays.
8. Record failures, changes, exceptions, and evidence in a contrast report.

## Guardrails

- Do not sample only a design-file color when rendering blends or overlays it.
- Disabled controls still need understandable boundaries and state.
- Contrast alone does not make information accessible.

## Done

- A contrast audit report lists element, state, values, result, and repair
- All changed combinations are re-measured and verified
- Color-independent cues and focus visibility are tested
