---
name: design-a-regression-test
category: code
description: Create a focused automated test that fails for a proven defect and protects the corrected behavior from returning. Use when a software regression has been reproduced and fixed or a missing test gap must be closed.
---

# design-a-regression-test

Encode the smallest observable contract that the defect violated. Avoid duplicating implementation structure
or turning one bug into a broad brittle test.

## Inputs

- Gather the minimal reproduction, expected contract, root cause, fix diff, and nearby existing tests.
- Identify the cheapest test level that can observe the failure with realistic dependencies.
- Record environment, data, timing, and state required for the defect.

## Procedure

1. Describe the exact behavior that regressed and its source of truth.
2. Run the proposed test against the defective revision or undo the fix to prove it fails for the right reason.
3. Choose unit, component, contract, integration, or end-to-end scope based on where behavior becomes observable.
4. Use the smallest fixture that preserves the causal condition.
5. Assert public outcomes, state, errors, and side effects rather than private implementation calls.
6. Add a nearby passing control or boundary case when it prevents false positives.
7. Make time, randomness, concurrency, locale, and external responses deterministic where appropriate.
8. Run the test against the fix and inspect failure output for diagnostic usefulness.
9. Execute the surrounding suite and relevant repeated or parallel runs.
10. Link the defect and explain any behavior intentionally left untested.

## Boundaries

Do not weaken the production fix to make testing easier or mock away the causal boundary. Never add snapshots
or broad assertions that can pass while the original defect returns. Keep private production data out of fixtures.

## Done

- The test demonstrably fails on the defective behavior and passes on the fix
- Assertions cover the violated public contract and meaningful side effects
- Fixtures and environmental controls preserve the causal condition without brittleness
- The surrounding suite passes and the test links to the original defect evidence
