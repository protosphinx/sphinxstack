---
name: inspect-a-database-query-plan
category: data
description: Inspect a database query plan through operators, estimates, actual work, memory, I/O, and locking evidence. Use when a query is slow, unstable, or unexpectedly expensive.
---

# inspect-a-database-query-plan

Explain the work the database performed, then test the smallest evidence-based change.

## Procedure

1. Capture the exact normalized query, parameters, database version, schema, and representative data scale.
2. Obtain a safe estimated or actual plan without exposing sensitive literals.
3. Read the operator tree in execution order and identify scans, joins, sorts, aggregates, and exchanges.
4. Compare estimated and actual rows, loops, time, buffers, spills, and memory.
5. Check predicates, statistics, indexes, data skew, parameter sensitivity, locks, and concurrency.
6. Locate the first large estimation or work amplification, not only the most expensive displayed node.
7. Test one candidate change against representative and adversarial parameter sets.
8. Record before-and-after plans, runtime, resource use, and regression risk.

## Guardrails

- Actual-plan collection can execute the query and may be unsafe for destructive statements.
- Do not add an index solely because a plan mentions one.
- A faster isolated query can still harm write cost or concurrent workloads.

## Done

- A redacted query-plan analysis report is saved
- Estimates, actual work, and environmental assumptions are verified
- Any proposed change is tested against representative parameters and concurrency
