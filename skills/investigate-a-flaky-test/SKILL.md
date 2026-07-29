---
name: investigate-a-flaky-test
category: code
description: Find and fix nondeterministic automated-test behavior without muting, retrying away, or normalizing the failure. Use when a test passes and fails across identical-looking runs, environments, orderings, or timings.
---

# investigate-a-flaky-test

Treat flakiness as evidence of uncontrolled state, timing, environment, or specification. Preserve the failure
until the causal condition and the fix are proven.

## Inputs

- Gather the test, recent changes, failure output, run metadata, seeds, timing, environment, and execution order.
- Identify shared services, files, database state, clocks, randomness, concurrency, network, and resource limits.
- Record current retry, quarantine, and parallelization behavior.

## Procedure

1. Quantify failure frequency across controlled repeated runs and save every failure signature.
2. Compare passing and failing metadata for seed, order, worker, time, resource, version, and environment differences.
3. Run the test alone, in its normal shard, in changed order, and under relevant parallelism.
4. Freeze randomness and time where possible, then vary one suspected source deliberately.
5. Inspect shared state, incomplete cleanup, async completion, polling, race conditions, and eventual consistency.
6. Reduce the test and fixture while retaining the intermittent failure.
7. State a causal hypothesis and design a run that should change failure frequency if it is correct.
8. Fix the product, test, fixture, isolation, or wait condition at the responsible layer.
9. Prove the test fails against the defective behavior and remains stable across a meaningful run count.
10. Remove temporary retries or quarantine and monitor the original CI context.

## Boundaries

Do not increase retries, sleeps, or thresholds merely to obtain green CI. Never delete a test before preserving
its intended behavior elsewhere. Avoid unsafe load on shared services and protect secrets and customer data in
captured failures.

## Done

- The original failure frequency and signatures are recorded
- A controlled experiment supports the identified nondeterministic cause
- The fix preserves a test that fails on the defective behavior and passes on the corrected behavior
- Repeated local and CI runs are stable without new retries, sleeps, or quarantine
