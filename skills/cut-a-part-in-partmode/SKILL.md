---
name: cut-a-part-in-partmode
category: design
description: Remove exact material from one PartMode body with a dimensioned sketch cut. Use when someone asks to create a hole, slot, recess, or pocket, choose a cut depth, or diagnose a Cut that misses or affects the wrong body.
---

# cut-a-part-in-partmode

Create one bounded subtractive model feature and prove it removed material from
the intended body. Use the Hole Wizard only when its live options match the required
hole definition; otherwise use an explicit sketch and Cut.

## Boundaries

- Identify exactly one target body and the face or plane supporting the profile.
- Distinguish blind depth, through-all intent, and symmetric extent. Do not
  substitute one for another silently.
- Reject a profile that lies outside the target, crosses an unintended wall, or
  selects multiple regions unexpectedly.
- Preserve unrelated faces, bodies, and features.

## Procedure

1. Record the cut shape, location, orientation, depth or through condition,
   target body, and minimum wall or clearance that must remain.
2. Select a stable planar face or plane and choose **Cut**. Create the profile
   with `$sketch-and-dimension-in-partmode`, locating it from stable references
   rather than visual placement.
3. Enter the exact depth and confirm the removal direction. Use a live-supported
   through condition only when the design truly requires it.
4. Rotate the preview and inspect both entry and exit sides. Confirm that the
   cut intersects exactly one intended body and does not remove a neighboring
   feature or body.
5. Apply the feature and wait for the rebuild to settle. If PartMode reports that
   the Cut does not subtract from exactly one target, correct the profile, extent,
   or target instead of forcing the result.
6. Inspect the Cut in **History** and the resulting body in **Inspector**. Measure
   the opening, depth, position, and remaining wall or clearance.
7. Save the editable project after the exact body is valid.

## Done

- History verifies that the Cut references the intended profile and one target body
- Checked opening dimensions, position, and extent match the agreed values
- Exact measurement confirms required remaining material or clearance
- Unrelated geometry and body count remain unchanged
- History and Inspector confirm a settled valid result
