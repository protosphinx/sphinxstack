---
name: inspect-responsive-breakpoints
category: design
description: Inspect responsive layout behavior across content-driven viewport changes, zoom, and input modes. Use when a page clips, overlaps, jumps, or becomes hard to use at particular widths.
---

# inspect-responsive-breakpoints

Find where the content stops working rather than assuming a standard device width is the right breakpoint.

## Procedure

1. Define the affected page, content variants, interaction, and supported browser range.
2. Resize continuously from narrow to wide and record the first visual or interaction failure.
3. Test long text, localization, empty and dense data, validation, and authenticated states.
4. Check portrait, landscape, zoom, text scaling, browser chrome, and virtual keyboard.
5. Inspect layout constraints, intrinsic sizes, wrapping, overflow, container queries, and media rules.
6. Choose the smallest content-driven rule that repairs the failure without creating a nearby one.
7. Test keyboard, touch, focus, and reading order around the changed layout.
8. Save a breakpoint report with screenshots and verified widths.

## Guardrails

- Do not hide necessary content solely to make a narrow layout fit.
- Avoid device-name breakpoints when the actual constraint is content.
- Preserve DOM and reading order unless an accessible alternative is proven.

## Done

- A responsive breakpoint report records failure and repaired widths
- Content, zoom, orientation, keyboard, and touch states are tested
- Screenshots and computed layout evidence verify the fix
