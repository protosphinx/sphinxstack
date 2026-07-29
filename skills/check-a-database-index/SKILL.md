---
name: check-a-database-index
category: code
description: Check whether a database index supports a real query using definition, selectivity, plan, statistics, write cost, and production-safe evidence. Use when query latency or index usefulness is uncertain.
---

# check-a-database-index

An index that exists may be unused, unsafe, redundant, or expensive.

## When to use

- Use for a named query and database version with representative data.
- Do not create or drop production indexes without approved change and rollback.

## Preconditions

- Capture query shape, parameters safely, schema, index definitions, statistics, workload, locks, and latency evidence.

## Procedure

1. Confirm the exact query, predicates, joins, order, limits, and parameter distribution.
2. Inspect index columns, order, uniqueness, filters, expressions, includes, validity, and size.
3. Refresh or assess statistics through the authorized route.
4. Compare safe execution plans with representative parameters and data volume.
5. Check scans, estimates, rows, sorts, lookups, memory, I/O, and runtime.
6. Evaluate write amplification, storage, locks, maintenance, overlap, and failure risk.
7. Record keep, change, test, or remove recommendation with a reversible proof plan.

## Failure plan

- If production execution is unsafe, use plan-only or a representative clone and label the limit.

## Worked example

An index begins with low-selectivity status while the query filters tenant then date, so a candidate order is tested against both read gain and insert cost.

## Done

- An index review report records query, definitions, statistics, plans, performance, write cost, risk, and recommendation
- Representative-parameter, estimate, lock, storage, regression, rollback, and production-safety checks verify the decision
