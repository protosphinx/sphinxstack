---
name: manage-database-schema-changes
category: code
description: Manage database schema changes through compatible expansion, backfill, dual behavior, validation, contraction, and rollback-aware release order. Use when live applications and data evolve together.
---

# manage-database-schema-changes

Keep old and new application versions compatible during rollout.

## When to use

- Use for tables, columns, types, constraints, indexes, relationships, partitions, or ownership changes.
- Do not combine destructive schema change, full backfill, and application switch in one unverified release.

## Procedure

1. Inventory readers, writers, jobs, reports, replicas, constraints, volume, locks, and rollback needs.
2. Define target invariant and mixed-version compatibility window.
3. Expand with additive nullable or backward-compatible structures and safe indexes.
4. Deploy code that can read old and new state and write according to a documented transition.
5. Backfill in restartable, throttled batches with checkpoints and reconciliation.
6. Validate completeness and introduce constraints using low-lock techniques.
7. Switch reads, stop old writes, observe, and prove no old consumer remains.
8. Contract obsolete structures only after retention and rollback gates expire.
9. Test production-shaped load, lock behavior, replica lag, failure, resume, and rollback.

## Done

- A schema-change plan records consumers, compatibility stages, backfill, validation, constraints, release order, and contraction gates
- Rehearsal proves lock bounds, restart, reconciliation, mixed-version behavior, rollback, and final invariants
