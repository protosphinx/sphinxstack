---
name: reconcile-source-and-warehouse-records
category: data
description: Reconcile source-system and warehouse records through stable keys, extraction boundaries, transformations, counts, values, aggregates, and exception ownership. Use when proving that analytical data represents the authoritative source population.
---

# reconcile-source-and-warehouse-records

Compare equivalent states at an explicit cutoff.

## When to use

- Use after pipeline changes, migrations, backfills, incidents, or before critical reporting.
- Do not force unexplained differences into an adjustment that hides source or warehouse defects.

## Procedure

1. Define source, target, entities, tables, fields, stable keys, time cutoff, timezone, late-arrival policy, and materiality.
2. Capture immutable source and warehouse versions or repeatable queries with row counts and checksums.
3. Reconcile extracted population to source including deletes, tombstones, permissions, filters, and incremental boundaries.
4. Map transformations, joins, deduplication, defaults, type changes, currencies, and effective dating.
5. Compare key presence, duplicate keys, field values, record versions, and representative history.
6. Compare totals and distributions by date, source, entity, status, and other critical cohorts.
7. Classify differences as timing, expected transformation, source defect, pipeline defect, mapping defect, or unresolved.
8. Correct the responsible system, rerun from controlled inputs, and retain exception evidence.

## Done

- A reconciliation report records scope, versions, keys, boundaries, mappings, counts, values, aggregates, classifications, and owners
- Source, extract, key, field, history, cohort, control-total, late-arrival, and rerun checks verify equivalence
