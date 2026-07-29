---
name: design-a-schema-evolution-process
category: code
description: Design schema evolution with compatibility rules, ownership, versioning, staged rollout, backfill, validation, rollback, and retirement. Use when stored or exchanged data changes across independently deployed producers and consumers.
---

# design-a-schema-evolution-process

Change readers and writers in an order that keeps every live version safe.

## When to use

- Use for databases, events, APIs, files, caches, indexes, or analytical tables.
- Do not combine incompatible semantic change with an unproven storage migration.

## Preconditions

- Inventory schemas, owners, producers, consumers, stored history, versions, contracts, retention, and deployment constraints.

## Procedure

1. Define compatibility for readers, writers, history, unknown fields, defaults, and semantics.
2. Classify the proposed change as additive, restrictive, reinterpretive, destructive, or identity-changing.
3. Plan expand, dual-read or dual-write where justified, backfill, switch, verify, and contract.
4. Version transformations and make backfill replay-safe from immutable source.
5. Gate each stage with consumer inventory, telemetry, reconciliation, and rollback.
6. Handle invalid history, nulls, precision, enums, time, ordering, and old binaries.
7. Communicate deprecation and retain old fields until usage evidence supports removal.
8. Rehearse mixed-version deploy, rollback, replay, and restore.

## Failure plan

- Stop contraction while any unverified consumer or retained history depends on the old schema.

## Worked example

A currency field expands to amount plus code, backfills deterministically, supports mixed readers, then removes the old field only after telemetry and restore rehearsal.

## Done

- A schema-evolution plan records contracts, classification, stages, transforms, consumers, gates, rollback, and retirement
- Mixed-version, history, replay, null, enum, precision, consumer, rollback, and restore tests verify compatibility
