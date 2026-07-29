---
name: run-a-load-test
category: code
description: Measure how a system behaves under a realistic and safely bounded workload. Model user traffic, establish a baseline, find saturation, and turn results into a capacity decision. Use when launch traffic, growth, or a performance change needs evidence rather than estimates.
---

# run-a-load-test

Run a controlled experiment, not an uncontrolled flood. The result should explain which workload
was tested, where the system stopped meeting its objective, why, and what decision follows.

## When to use

Use this skill before a significant launch, after architecture or performance changes, or when
capacity planning depends on uncertain assumptions. Do not aim load at a production system,
third-party service, or network unless the owner has explicitly approved the scope and window.

Never use credentials or personal data copied from real users. Respect provider limits and stop
immediately if the test affects traffic outside the approved environment.

## Preconditions

- Obtain written scope, environment owner, execution window, traffic ceiling, and abort authority.
- Confirm the safe environment is isolated or sized so the test cannot harm shared users or dependencies.
- Define service objectives, critical journeys, expected launch volume, peak shape, and test-data rules.
- Verify observability, quotas, cleanup, and a way to stop every load generator quickly.

## Procedure

1. Create a workload model from observed or explicit assumptions: journey mix, arrival rate, concurrency,
   payload distribution, session behavior, think time, cache state, and test duration.
2. Choose the test type: baseline, step, spike, soak, or failure-under-load. State the question it answers.
3. Write success and abort thresholds for user latency, error rate, correctness, saturation, queue age,
   cost, and dependency limits.
4. Validate one virtual user end to end. Confirm it sends correct requests and checks useful responses.
5. Run a low-rate baseline. Compare generator counts with server counts and repair measurement gaps.
6. Increase load in controlled stages. Hold each stage long enough to observe queues, caches, and autoscaling.
7. Stop at the first abort threshold. Do not keep pushing simply to produce a larger number.
8. Correlate user latency and errors with CPU, memory, connections, locks, queue depth, storage, and dependencies.
9. Repeat the relevant stage after one change. Keep all other workload variables fixed.
10. Run a bounded soak only when leaks, queue growth, or slow degradation are part of the question.
11. Remove test data and temporary capacity, then record the safe operating point and remaining uncertainty.

## Failure plan

Practice the kill switch before the test. Name the abort threshold, operator, command, and confirmation
signal. Prepare for orphaned generators, quota exhaustion, shared dependency impact, invalid test data,
and telemetry overload. If measurements disagree, stop and repair the instrumentation rather than
reporting a result with false precision.

## Done

- A versioned workload model records assumptions, journey mix, data, stages, and abort threshold
- A baseline run proves the generator, service signals, and response checks agree
- A bottleneck record connects user-visible degradation to a measured saturated resource or dependency
- A capacity decision states the safe operating point, headroom, change made, and remaining uncertainty
- Test cleanup is complete and no unapproved user, provider, or shared system was affected

Then use design-observability if the experiment exposed missing signals or design-a-production-system for structural changes.
