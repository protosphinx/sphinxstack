---
name: investigate-cpu-saturation
category: code
description: Investigate CPU saturation by connecting runnable work, profiles, throttling, concurrency, and user impact. Use when instances show high CPU, latency, reduced throughput, or scheduler pressure.
---

# investigate-cpu-saturation

Determine whether the service is doing useful work, repeating work, waiting poorly, or being throttled.

## Procedure

1. Confirm impact, onset, scope, deployment, traffic, quotas, and host or container limits.
2. Compare utilization with run queue, throttling, steal time, latency, throughput, and errors.
3. Segment by instance, version, route, job class, dependency, and instance age.
4. Capture a bounded CPU profile during representative saturation.
5. Rank hot functions, syscalls, lock contention, serialization, garbage collection, loops, and retry work.
6. Compare with a healthy or unexposed control and validate profile representativeness.
7. Mitigate through safe capacity, traffic, concurrency, feature, or rollback controls.
8. Fix the measured hot path and test both correctness and alternate workloads.
9. Load-test peak and steady state with realistic limits.
10. Record before-and-after CPU, latency, throughput, error, and cost.

## Guardrails

- High utilization is not automatically unhealthy if objectives and queues remain safe.
- Profiling and debug logging can worsen saturation.
- Scaling may amplify a bad retry or downstream overload.

## Done

- A CPU investigation report links saturation to workload and profile evidence
- Control comparison and mitigation behavior are verified
- The fix passes load tests with recorded before-and-after outcomes
