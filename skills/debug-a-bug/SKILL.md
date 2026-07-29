---
name: debug-a-bug
category: code
description: Reproduce a software defect, isolate its smallest proven cause, implement a narrow fix, and verify both the failure and surrounding behavior. Use when someone says "fix this bug," reports a regression, or has an error that needs diagnosis and repair.
---

# debug-a-bug

Turn a report into a repeatable failing case, then make the smallest change that explains why
the failure disappears. Preserve the evidence that separates a verified fix from a plausible guess.

## When to use

Use this for incorrect behavior in an existing codebase when implementation is in scope. If the
request is diagnosis only, stop after the causal explanation and evidence. For a live outage,
contain user impact with debug-a-production-incident before editing code.

## Inputs

- Read the repository instructions, current worktree state, relevant code, and existing tests.
- Capture the observed result, expected result, environment, inputs, and last known working state.
- Separate facts from reporter assumptions. Preserve unrelated local changes.

## Procedure

1. Reproduce the symptom with the smallest command, request, fixture, or interaction that still fails.
   Record exact output and environment details. If it cannot be reproduced, gather more evidence rather
   than changing code speculatively.
2. Reduce the search area using the execution path, logs, recent changes, and controlled comparisons.
   Change one variable at a time.
3. Write or identify a regression check that fails for the reported reason. Avoid a test that merely
   restates the current implementation.
4. Trace the failing value or state backward to the first point where it becomes wrong. Name the
   invariant violated there and the evidence supporting that conclusion.
5. Consider at least one competing explanation. Use a targeted observation or experiment to reject it.
6. Implement the smallest fix at the broken boundary. Do not mix refactoring, formatting, dependency
   upgrades, or unrelated cleanup into the repair.
7. Run the regression check and the narrow surrounding test set. Then run the repository's required
   broader checks in proportion to the change's risk.
8. Test nearby boundaries such as empty input, repeated execution, error paths, and the last known
   working case. Confirm the fix does not only handle the reporter's exact example.
9. Review the diff for accidental changes, debug output, weakened assertions, exposed data, and
   environment-specific assumptions.
10. Write a short repair record: symptom, root cause, fix, tests run, and any residual risk or follow-up.

## Boundaries

Do not claim a root cause unless the evidence connects it to the symptom. Do not delete user data,
reset a worktree, weaken security checks, or expose private production records to make reproduction
easier. Ask before changing public behavior beyond the reported defect.

## Done

- A saved regression check fails before the fix and passes after it for the expected reason
- The repair record identifies the broken invariant and links it to observed evidence
- Targeted and required broader tests pass, with commands and results recorded
- The final diff contains only the fix, its proof, and explicitly approved supporting changes

Then use review-a-pull-request for an independent change review.
