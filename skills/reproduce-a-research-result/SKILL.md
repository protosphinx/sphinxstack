---
name: reproduce-a-research-result
category: school
description: Reproduce a research result by reconstructing its data, code, environment, decisions, and reported outputs with a transparent discrepancy record. Use when checking computational or analytical reproducibility.
---

# reproduce-a-research-result

Preserve the original package and distinguish exact, analytic, and conceptual reproduction.

## When to use

- Use for published papers, internal studies, coursework, audits, or inherited analyses.
- Do not expose restricted data, credentials, participant identities, or licensed materials while sharing reproduction evidence.

## Procedure

1. Define which claim, table, figure, coefficient, or dataset must reproduce and the acceptable tolerance.
2. Inventory paper version, corrections, data, code, dependencies, operating environment, seeds, external services, and access limits.
3. Preserve the received package with hashes and run instructions before modifying it.
4. Attempt the documented workflow in an isolated environment and capture the complete transcript.
5. Reconcile raw and analytic record counts, exclusions, variable construction, and intermediate files.
6. Compare outputs numerically and visually using prespecified tolerances.
7. Localize discrepancies across data version, environment, nondeterminism, hidden step, code defect, or reporting transcription.
8. Test one hypothesis at a time and keep every deviation from the original explicit.
9. Contact authors or owners with a focused evidence package when needed.
10. Report exact matches, bounded differences, unresolved blockers, and whether the substantive conclusion changes.

## Worked example

A figure does not reproduce because a dependency changed its default missing-value handling. Pinning the documented-era version restores the reported values. The report records both runs, the dependency difference, and a container that recreates the verified result.

## Done

- A reproduction report records scope, custody, environment, commands, data lineage, output comparisons, discrepancies, and conclusion impact
- A clean rerun verifies the reproduction package or documents the exact external, permission, or evidence blocker
