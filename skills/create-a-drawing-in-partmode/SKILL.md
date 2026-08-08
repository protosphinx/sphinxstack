---
name: create-a-drawing-in-partmode
category: design
description: Generate and verify an exact projected PartMode drawing from a settled part, assembly, or configuration. Use when someone asks for a drawing sheet, SVG, DXF, or PDF output, standard views, dimensions, notes, or a reviewable manufacturing document.
---

# create-a-drawing-in-partmode

Produce a drawing tied to the exact active model state while keeping engineering
release responsibility explicit.

## Boundaries

- Settle the intended configuration and assembly placement before generating views.
- Treat exact hidden-line projection as geometry evidence, not proof that every
  required manufacturing annotation is present.
- Verify sheet units, projection convention, scale, tolerances, notes, and title block.
- Do not call a demonstration template a certified drawing standard.

## Procedure

1. Record the drawing contract: source project, active configuration, included
   bodies or assembly, sheet size, projection convention, scale, units, required
   views, dimensions, tolerances, notes, symbols, tables, and output format.
2. Inspect the source with `$inspect-and-measure-in-partmode`. Resolve rebuild or
   placement problems before creating drawing evidence.
3. Choose **Output** → **Drawing** to generate the active drawing. Wait for exact
   OpenCascade hidden-line removal to finish.
4. Confirm the standard front, top, right, and isometric views or the document's
   persisted drawing recipe. Check view identity, orientation, scale, and hidden
   or visible line behavior.
5. Add or review dimensions, tolerances, notes, symbols, tables, balloons, and
   title-block fields required by the contract. Cross-check critical drawing
   dimensions against the model.
6. Export the requested SVG, DXF, or use **Print or export drawing PDF** when
   available. Do not silently substitute a screenshot.
7. Open the saved artifact with an independent viewer. Record source state,
   configuration, format, bytes, checksum, and any missing manufacturing content.

## Done

- Drawing views come from a settled exact model and the intended configuration
- View orientation, scale, units, and critical dimensions pass review
- The exported SVG, DXF, or PDF opens independently and has a recorded checksum
- Required annotations are present or explicitly listed as incomplete
- The result does not overclaim certification or manufacturing completeness
