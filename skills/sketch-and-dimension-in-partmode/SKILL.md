---
name: sketch-and-dimension-in-partmode
category: design
description: Create and verify a closed PartMode sketch with exact dimensions and constraints. Use when someone asks how to draw a CAD profile, constrain lines or arcs, fix an under-defined sketch, or prepare a profile for Extrude, Cut, or Revolve.
---

# sketch-and-dimension-in-partmode

Turn the person's intended cross-section into a closed, dimensioned model profile
that can drive an exact feature. Read https://partmode.com/help#getting-started and
use the current sketch diagnostics rather than guessing solver state.

## Boundaries

- Establish the profile plane, origin, units, and intended feature before drawing.
- Prefer geometric intent and a small constraint set over duplicate dimensions.
- Do not hide an open loop, conflicting constraint, or solver failure by tracing
  another line over it.
- Keep construction geometry separate from the closed profile.

## Procedure

1. Restate the profile as primitives and relationships: lines, arcs, circles,
   horizontal or vertical edges, symmetry, tangency, coincidence, and exact
   dimensions. Ask for every missing dimension that changes the part.
2. Choose **Sketch** and the intended base plane or supported planar face. Confirm
   its orientation before drawing; switching planes later changes feature intent.
3. Anchor the profile deliberately to the origin or another stable reference.
   Draw the simplest closed loop that represents the section and add construction
   lines only for axes or alignment.
4. Apply geometric constraints before dimensional constraints. Add exact length,
   radius, diameter, distance, and angle values with explicit units.
5. Resolve solver diagnostics one at a time. Remove a redundant constraint rather
   than weakening unrelated intent. A profile intended for a solid must have no
   accidental gap, overlap, self-intersection, or duplicate edge.
6. Preview the intended downstream feature. If the loop selection or region is
   wrong, return to the sketch instead of accepting a surprising solid.
7. Record the driving dimensions and inspect the saved sketch or inline profile
   after the rebuild settles.

## Done

- Inspector verifies that the sketch lies on the intended stable plane or face
- Checked driving values have an explicit unit or documented project-unit meaning
- Solver evidence confirms that the intended profile is closed and free of unresolved diagnostics
- Construction geometry is not mistaken for a solid boundary
- A verified Extrude, Cut, or Revolve preview selects exactly the intended region
