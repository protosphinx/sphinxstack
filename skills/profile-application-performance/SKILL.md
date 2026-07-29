---
name: profile-application-performance
category: code
description: Profile application performance with a representative workload, synchronized measurements, call-path evidence, and before-after verification. Use when latency, throughput, CPU, memory, I/O, or cost needs improvement.
---

# profile-application-performance

Measure the bottleneck before optimizing.

## When to use

- Use after a performance symptom and success threshold are defined.
- Do not profile production with unsafe overhead, sensitive captures, or unapproved load.

## Procedure

1. Define journey, workload, environment, version, metric, percentile, baseline, and target.
2. Reproduce with production-shaped data and realistic concurrency while controlling warmup and cache state.
3. Synchronize request traces, CPU profiles, allocation or heap data, I/O, database, network, runtime, and host metrics.
4. Identify where elapsed time or resource use accumulates across the critical path.
5. Form a ranked hypothesis and choose the smallest discriminating experiment.
6. Change one material factor while preserving correctness and recording side effects.
7. Repeat enough trials to compare distributions, not a single fast run.
8. Run correctness, load, and regression checks and monitor after rollout.

## Done

- A performance profile report records representative workload, baseline, synchronized evidence, bottleneck, and hypothesis
- Repeated before-after tests verify target improvement, correctness, resource tradeoffs, and production monitoring
