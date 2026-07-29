---
name: validate-a-data-migration
category: code
description: Validate a data migration through source custody, mapping rules, record and control totals, invariants, exceptions, behavior, and rollback evidence. Use when deciding whether migrated data is safe to accept.
---

# validate-a-data-migration

Prove meaning and behavior, not only row counts.

## When to use

- Use for database, storage, schema, tenant, vendor, or application migrations.
- Do not repair the source or discard exceptions merely to make totals match.

## Procedure

1. Preserve source snapshot, extract query, filters, versions, hashes, and authoritative control reports.
2. Define source-to-target mapping, transformations, default values, exclusions, and acceptable tolerances.
3. Reconcile records, bytes, totals, nulls, duplicates, keys, relationships, and status by meaningful segment.
4. Test business invariants, historical boundaries, currencies, times, ordering, and referential integrity.
5. Sample high-risk, edge, random, and known records from target back to source.
6. Exercise create, read, update, delete, search, reporting, permission, and export behavior.
7. Record rejected, quarantined, transformed, missing, and ambiguous records with disposition.
8. Rehearse rollback or forward repair and revalidate after every correction.

## Done

- A migration validation report reconciles mappings, counts, controls, invariants, exceptions, samples, and behaviors
- Rollback or repair rehearsal plus rerun evidence proves the accepted target state
