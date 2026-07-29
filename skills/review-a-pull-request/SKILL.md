---
name: review-a-pull-request
category: code
description: Review a proposed code change for behavioral defects, regressions, security risks, and missing proof, then report only actionable findings. Use when someone asks for a pull request review, code review, diff review, or a release-readiness check on a change.
---

# review-a-pull-request

Review the change as a set of claims about behavior. Reconstruct what it is meant to do, inspect
the actual diff and affected paths, and raise findings only when the evidence shows a concrete risk.

## When to use

Use this on a pull request, branch diff, patch, or staged change. Keep review separate from
implementation unless the user also asks to address findings. For failing CI, use the check logs
as evidence rather than inferring the failure from the patch.

## Inputs

- Read repository instructions and the complete change description.
- Inspect the base-to-head diff, changed tests, relevant callers, and current worktree state.
- Identify the intended behavior, compatibility promises, data boundaries, and release risk.

## Procedure

1. Summarize the change's intended outcome in one or two sentences and list any claim the diff must prove.
2. Map changed interfaces, callers, persisted data, permissions, configuration, and failure paths.
3. Read the diff in context, including code above and below each hunk. Do not review isolated lines as
   though surrounding invariants do not exist.
4. Trace representative success and failure paths through the changed code. Check empty, repeated,
   concurrent, unauthorized, partial, and rollback cases where relevant.
5. Compare tests with the behavioral claims. Look for assertions that can pass without exercising the
   new behavior, missing regression cases, and mocks that hide integration failures.
6. Check compatibility with existing consumers, schemas, configuration, and deployment order.
7. Run the smallest relevant checks when local execution is safe. Record commands and distinguish a
   verified failure from a concern that still needs confirmation.
8. Rank each finding by user impact and likelihood. Give a precise location, triggering scenario,
   consequence, and the smallest acceptable correction.
9. Remove style preferences, speculative redesigns, compliments, and duplicate findings from the report.
10. If no actionable defect remains, say so and name any meaningful validation gap or residual risk.

## Review rules

Do not approve from the description alone. Do not expose secrets or private data in comments. Do not
request a broad rewrite when a local correction satisfies the contract. Treat pre-existing defects as
separate follow-up work unless the change makes them materially worse.

## Done

- Every finding names a file location, reproducible scenario, consequence, and concrete correction
- Severity reflects likely user or system impact rather than reviewer preference
- Tests or direct code evidence support each blocking claim
- The final review clearly states whether actionable findings remain and which checks were actually run

Then use debug-a-bug to repair an accepted defect or write-a-test-plan when the proof strategy is incomplete.
