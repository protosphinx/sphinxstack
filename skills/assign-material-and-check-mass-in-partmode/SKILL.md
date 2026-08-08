---
name: assign-material-and-check-mass-in-partmode
category: design
description: Assign materials to PartMode bodies and verify revision-bound volume, mass, center of mass, inertia, and geometry health. Use when someone asks how much a part or assembly weighs, needs density-driven properties, or sees an incomplete mass result.
---

# assign-material-and-check-mass-in-partmode

Calculate mass properties without presenting placeholder material data as a
released engineering value.

## Boundaries

- Verify actual grade and density before relying on a result. Bundled generic
  materials are editable placeholders.
- Assign a material to every included body before claiming complete mass,
  center of mass, or inertia.
- Keep configuration and assembly placement settled while measuring.
- Do not treat this workflow as structural, thermal, or manufacturing analysis.

## Procedure

1. Record the project, active configuration, included bodies or occurrences,
   units, required properties, and approved material grade and density source.
2. Select each body and choose **Inspect** → **Material**. Assign the matching
   material or create an explicitly labeled verified density when the bundled
   generic value is not adequate.
3. Confirm that every included body has density. Exclude a body only when the
   requested scope says to exclude it and the report names that exclusion.
4. Wait for the configuration, features, and assembly placements to settle.
5. Choose **Mass & health**. Record exact volume and surface area, mass, center
   of mass, inertia tensor, principal moments and axes, and radii of gyration as
   required by the task.
6. Check the missing-material list. If it is non-empty, report the known subset
   and center of volume only; do not relabel them as complete mass properties.
7. Perform a reasonableness check from volume × density and compare it with the
   reported mass. Save the material source, scope, configuration, and results.

## Done

- Every included body has an identified material and density source
- Mass & health reports a valid exact body set with no hidden missing material
- An independent volume × density check is consistent with the reported mass
- Configuration and assembly placement are named in the result
- The report states that material properties are not certification or simulation
