---
name: reproduce-a-bug
category: code
description: Build a minimal, repeatable reproduction of a software defect while controlling environment, inputs, and state. Use when a bug report is inconsistent, complex, or not yet proven outside the original system.
---

# reproduce-a-bug

Turn an anecdotal failure into an observable experiment. Reduce variables without erasing the condition that
causes the defect.

## Inputs

- Gather the original report, affected version, environment, inputs, state, logs, and expected behavior.
- Identify destructive operations, production-only data, rate limits, and privacy or security constraints.
- Prepare a safe local, test, or isolated environment when possible.

## Procedure

1. Recreate the reported environment and record every intentional difference.
2. Run the original steps once without modification and capture the result.
3. Repeat enough times to estimate frequency without unsafe load.
4. Control one variable at a time: version, configuration, data shape, timing, permission, network, or dependency.
5. Reduce the steps, input, and code to the smallest case that still fails.
6. Add a nearby control case that should pass and compare the observable difference.
7. Restart from clean state to expose hidden cache, order, or shared-state dependence.
8. Save commands, seed data, fixture, script, or test in a reproducible artifact.
9. Record conditions that suppress the failure and any remaining nondeterminism.
10. Hand off the minimal case with exact run instructions and expected output.

## Boundaries

Do not copy sensitive production data, expose secrets, or run destructive experiments in a shared system.
Never call a defect fixed because it failed to reproduce once. Stop if reproduction can cause customer harm,
data loss, excessive cost, or a security incident.

## Done

- The reproduction starts from a documented state and produces a checked pass or fail observation
- A minimal failing case and a meaningful control case are saved
- Frequency, environment differences, suppressed conditions, and remaining uncertainty are recorded
- Another person can run the artifact without access to private production data
