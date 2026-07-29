---
name: optimize-a-slow-query
category: code
description: Measure and improve a slow database query while preserving result correctness, concurrency behavior, and operational safety. Use when a query, report, endpoint, or job is too slow, consumes excessive resources, or needs an evidence-backed indexing or rewrite decision.
---

# optimize-a-slow-query

Optimize from a representative execution plan and workload, not from query appearance. Protect result
equivalence and write cost while changing the smallest proven bottleneck.

## Inputs

- Capture the query, parameters, schema, indexes, database version, row counts, and caller.
- Record a representative workload, latency distribution, resource pressure, and freshness requirements.
- Use a production-shaped safe environment before running expensive analysis or changes.

## Procedure

1. Reproduce the slow case with representative parameters and record result count, latency, reads, memory, and plan.
2. Verify the query returns the intended rows. Save a result-equivalence fixture before changing it.
3. Inspect the execution plan for scans, estimates, joins, sorts, spills, repeated work, filters, and lock behavior.
4. Check data distribution and stale statistics. Compare fast and slow parameter shapes before assuming one plan fits all.
5. Identify one bottleneck supported by measurements.
6. Choose the smallest intervention: predicate correction, query rewrite, precomputation, pagination, statistics update, or index.
7. For an index, estimate size, build time, write amplification, maintenance, selectivity, and overlap with existing indexes.
8. Apply the change in the safe environment and repeat the same workload several times.
9. Compare result sets, median and tail latency, reads, CPU, memory, plan stability, and affected write performance.
10. Define deployment, observation, abort, and rollback steps. Use nonblocking creation where supported and required.
11. Record the before/after evidence and remove any experimental index or instrumentation not selected.

## Boundaries

Do not run unbounded analysis or index builds on a busy production database without authorization and abort
criteria. Never trade correct or current results for speed without an explicit product decision. Avoid hints
that freeze one plan unless the operational owner accepts the maintenance cost.

## Done

- A baseline records representative parameters, plan, results, latency, reads, and resource use
- A result-equivalence check proves the optimized query returns the required data
- Before/after measurements show the selected change improves the named bottleneck without unacceptable write cost
- Deployment, observation, abort, rollback, and cleanup steps are documented and verified

Then use run-a-load-test when the query must be proven under concurrent application traffic.
