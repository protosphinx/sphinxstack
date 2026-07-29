---
name: investigate-a-memory-leak
category: code
description: Investigate a memory leak through workload reproduction, allocation and retention evidence, lifecycle hypotheses, controlled experiments, and verified remediation. Use when memory grows or fails to return under stable load.
---
# investigate-a-memory-leak
## When to use
- Use for processes, workers, browsers, runtimes, native code, or containers.
- Protect production data in dumps and avoid unsafe profiling overhead.
## Preconditions
- Record version, workload, memory limits, runtime, allocator, platform, deployment, and growth evidence.
## Procedure
1. Distinguish leak, cache, fragmentation, delayed collection, load growth, and measurement artifact.
2. Reproduce with a stable workload and track resident, heap, native, mapped, and cgroup memory.
3. Capture safe profiles, heap snapshots, allocation samples, and object or stack retention.
4. Rank lifecycle hypotheses with discriminating experiments.
5. Reduce to the smallest retaining path and verify ownership plus release.
6. Implement the narrow fix and compare identical workloads.
7. Run long enough to cover collection, cache, and production cycles.
## Failure plan
- Contain with capacity and restart policy while preserving evidence if production risk rises.
## Worked example
Heap stays flat while native image buffers grow, redirecting investigation from garbage collection to unreleased handles.
## Done
- A memory-leak report records workload, metrics, profiles, hypotheses, retaining path, fix, comparison, and residual risk
- Baseline, profiler, privacy, overhead, heap-native, lifecycle, long-run, regression, and containment checks verify cause
