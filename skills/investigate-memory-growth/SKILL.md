---
name: investigate-memory-growth
category: code
description: Investigate service memory growth by separating workload, cache, allocator, leak, fragmentation, and limit behavior. Use when memory rises, garbage collection worsens, or instances are killed.
---

# investigate-memory-growth

Protect the service first, then collect comparable evidence at safe workload and lifecycle points.

## Procedure

1. Define user impact, process limits, kill events, growth rate, workload, and deploy timeline.
2. Compare resident, virtual, heap, non-heap, cache, buffer, and container measurements.
3. Segment by version, instance age, traffic class, request rate, and background work.
4. Check whether memory plateaus, returns after idle or collection, or grows per operation.
5. Capture safe heap, allocation, object-count, or process profiles under controlled load.
6. Rank retaining types, allocation sites, native consumers, caches, and fragmentation evidence.
7. Reproduce with a bounded scenario and an unexposed control where possible.
8. Test the smallest fix, cache bound, lifecycle change, or dependency upgrade.
9. Load-test steady state and peak behavior, including restart and recovery.
10. Record before-and-after memory, latency, throughput, and residual risk.

## Guardrails

- Heap dumps may contain secrets and personal data; protect and delete them under policy.
- Never collect a production heap dump without authorized access, bounded scope, and protected storage.
- Increasing the limit can delay failure without fixing growth.
- Profiling overhead must be bounded in production.

## Done

- A memory investigation report records growth shape, workload, and retained sources
- Reproduction and control comparisons are verified
- The fix is load-tested with before-and-after resource evidence
