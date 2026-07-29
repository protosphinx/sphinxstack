---
name: identify-missing-values
category: data
description: Identify missing values across nulls, blanks, sentinels, absent records, and conditional requirements. Use when assessing dataset completeness before cleaning, modeling, reporting, or migration.
---

# identify-missing-values

Distinguish unknown, not applicable, not yet available, and structurally absent.

## When to use

- Use during profiling, quality review, feature preparation, or reconciliation.
- Do not impute or delete missing data before understanding how it arose.

## Procedure

1. Record dataset version, unit of observation, keys, expected population, fields, and business rules.
2. Define missing representations including null, blank, whitespace, sentinel codes, invalid dates, and absent child records.
3. Count missing values by column, row, source, time, cohort, and relevant outcome.
4. Test conditional requirements such as fields required only for one record type or status.
5. Compare source and transformed missingness to detect loss introduced by joins, parsing, filtering, or aggregation.
6. Investigate clusters and distinguish collection, extraction, permission, schema, timing, and real-world causes.
7. Document impact and handling options without changing the controlled source.

## Done

- A missing-value report records definitions, counts, conditional rules, cohorts, causes, affected uses, and proposed handling
- Source, transform, key, conditional, time, and cohort checks verify that missingness is measured rather than hidden
