---
name: write-a-unit-test
category: code
description: Write a focused deterministic unit test that specifies one behavior, boundary, failure, or invariant with useful diagnostics. Use when a small code unit can be verified without production dependencies.
---

# write-a-unit-test

Test observable behavior, not implementation trivia.

## When to use

- Use for pure logic or a bounded component with controlled collaborators.
- Do not call live networks, shared databases, clocks, randomness, or secrets from a unit test.

## Procedure

1. State the behavior and why unit scope is appropriate.
2. Choose the public input and output or state change to observe.
3. Create the smallest representative setup with explicit clock, randomness, filesystem, or collaborator control.
4. Exercise one behavior per test and name it as a readable specification.
5. Assert meaningful values, errors, side effects, and invariant boundaries.
6. Add null, empty, minimum, maximum, invalid, and alternate-path cases where relevant.
7. Run the test against the unfixed behavior when addressing a defect.
8. Run it repeatedly and with the nearby suite, then simplify any brittle fixture.

## Done

- A unit test file specifies the target behavior, boundaries, controlled dependencies, and useful assertions
- The test is verified to fail for the intended defect and pass deterministically with the accepted behavior
