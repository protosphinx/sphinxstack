---
name: validate-a-sql-query-plan
category: code
description: Validate a SQL query plan against representative parameters, statistics, data shape, resource use, and production-safe execution. Use when a plan may be slow, unstable, or misleading.
---
# validate-a-sql-query-plan
## When to use
- Use for an exact query, engine, version, schema, and data distribution.
- Do not run unsafe full execution on production.
## Procedure
1. Capture query, bindings safely, schema, indexes, statistics, settings, and expected rows.
2. Obtain estimated and authorized actual plans.
3. Inspect access, joins, order, estimates, rows, loops, filters, sorts, memory, spills, I/O, and parallelism.
4. Test representative parameter and data-skew cases.
5. Compare planning and execution time plus concurrency impact.
6. Record hypothesis, candidate change, tradeoff, rollback, and regression test.
## Failure plan
- Use plan-only or a representative clone when actual execution risks service.
## Worked example
A fast common parameter hides a severe nested-loop plan for one large tenant.
## Done
- A query-plan report records query, environment, estimates, actuals, parameters, resources, finding, and recommendation
- Version, statistics, skew, concurrency, memory, I/O, production-safety, and regression checks verify the plan
