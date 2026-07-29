---
name: refactor-without-changing-behavior
category: code
description: Improve an existing codebase's structure while preserving its observable behavior, compatibility, and operational characteristics. Use when someone asks to refactor, simplify, extract, reorganize, or reduce duplication without changing what users or callers receive.
---

# refactor-without-changing-behavior

Make the code easier to change while holding its behavioral contract still. Establish the contract before
editing, keep transformations small, and retain evidence that separates structural improvement from a hidden rewrite.

## Inputs

- Read repository instructions, the full affected path, callers, tests, configuration, and current worktree state.
- Name the maintainability problem and the behavior that must remain stable.
- Record performance, compatibility, data, logging, and error behavior that consumers may observe.

## Procedure

1. Capture a baseline with the narrow test suite, representative inputs, public output, and relevant runtime measures.
2. Map responsibilities, dependencies, mutation, side effects, and duplicated rules in the target area.
3. State the intended structural improvement in one sentence and define files or behavior outside scope.
4. Add characterization tests only where important behavior is not already protected. Test outcomes rather than private structure.
5. Choose one reversible transformation: rename, extract, move, split, inline, or replace duplication with one owned rule.
6. Apply the transformation without mixing in feature changes, dependency upgrades, formatting sweeps, or altered defaults.
7. Run the narrow checks after every meaningful step. Compare output, error shape, ordering, side effects, and timing where relevant.
8. Inspect callers and integration boundaries after moves or signature changes. Preserve compatibility or document approved migration work.
9. Review the final diff for reduced complexity, clearer ownership, and no new abstraction that merely relocates confusion.
10. Run required broader checks and write a refactor record containing baseline, transformations, proof, and remaining debt.

## Boundaries

Do not call a behavior change a refactor. Never weaken assertions to make a transformation pass or delete
compatibility code before every supported caller has moved. Preserve unrelated user changes and ask before
expanding the refactor beyond its stated boundary.

## Done

- Baseline and final test records show the same supported behavior and error contract
- The diff contains structural changes only, with any approved behavior change isolated separately
- Complexity or duplication is demonstrably reduced at the named ownership boundary
- Required tests pass and the refactor record lists commands, results, compatibility, and residual risk

Then use review-a-pull-request for an independent behavioral review.
