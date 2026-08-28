---
name: inspect-and-measure-in-partmode
category: design
description: Verify a PartMode model with History, Bodies, Inspector, saved measurements, and exact geometry health. Use when someone asks whether a part is valid, wants dimensions or clearances checked, needs a rebuild problem located, or wants evidence stronger than a screenshot.
---

# inspect-and-measure-in-partmode

Turn a visual model review into an exact, repeatable inspection tied to the
settled document state.

## Boundaries

- Start from the design requirements, not from whatever values are easiest to see.
- Treat screenshots, shaded triangles, tree rows, and mesh counts as supporting
  context rather than exact completion evidence.
- Do not report mass as complete when any included body lacks material density.
- Preserve the model; use read-only inspection unless a repair is separately approved.

## Procedure

1. Write an inspection checklist containing target dimensions, body count,
   topology expectations, clearances, units, and required unchanged features.
2. Wait for the document and kernel to settle. Review **History** for failed or
   suppressed features and **Bodies** for exact solids and visibility state.
3. Select each critical feature, body, face, edge, or occurrence and read
   **Inspector**. Record stable names or identifiers and the values relevant to
   the checklist.
4. Create or evaluate saved measurements for dimensions that must be repeated,
   including bounding boxes or minimum clearances when supported by the current
   selection and release.
5. Choose **Mass & health** when volume, surface area, B-rep validity, or center
   of volume is required. Use `$assign-material-and-check-mass-in-partmode` for
   density-driven results.
6. Compare every result with its tolerance. Investigate a mismatch through the
   driving sketch, parameter, or feature rather than editing a downstream value
   blindly.
7. Save the inspection checklist with the project name, units, settled state,
   measured values, pass or fail result, and any limitation.

## Done

- Every requirement has a measured value or an explicit unsupported status
- History has no ignored rebuild failure affecting the inspected result
- Bodies and Inspector confirm the expected exact entities and validity
- Repeated measurements are named and tied to the intended references
- The report distinguishes exact evidence from screenshots and visual observations
