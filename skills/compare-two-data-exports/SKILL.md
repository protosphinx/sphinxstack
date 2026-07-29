---
name: compare-two-data-exports
category: data
description: Compare two data exports by schema, keys, records, fields, aggregates, ordering, and provenance. Use when checking whether a refresh, migration, query, or system change preserved expected data.
---

# compare-two-data-exports

Normalize only documented representational differences.

## When to use

- Use for CSV, JSON, spreadsheet, query, report, or system exports.
- Do not expose sensitive values in diff output beyond the approved need.

## Procedure

1. Preserve both files and record source, query or configuration, timestamp, checksum, encoding, and expected differences.
2. Parse each export with explicit schema and normalize only agreed whitespace, case, timezone, number, null, and ordering rules.
3. Compare columns, types, order, keys, row counts, file counts, and control totals.
4. Match rows by stable key and classify added, removed, duplicate, changed, and unmatched records.
5. Compare field values with defined precision, tolerance, and multivalue ordering.
6. Summarize differences by field, source, period, cohort, and materiality while retaining drill-down references.
7. Reconcile expected differences and leave unexplained differences open.

## Done

- A versioned comparison report records sources, rules, schema, counts, aggregates, record differences, expected changes, and unresolved items
- Checksum, key, row, field, tolerance, duplicate, and control-total checks verify the comparison
