---
name: implement-browser-storage-migration
category: web
description: Implement a browser-storage migration with versioned schemas, privacy controls, idempotent conversion, cross-tab coordination, rollback, and corrupted-state recovery. Use when changing cookies, local storage, session storage, IndexedDB, or cached client data.
---

# implement-browser-storage-migration

Treat every client as an independent, interruptible migration.

## When to use

- Use for schema changes, storage-engine moves, key renames, encryption changes, or data minimization.
- Do not copy credentials, secrets, or data beyond its consent and retention purpose.

## Procedure

1. Inventory keys, schemas, sizes, owners, sensitivity, consent, retention, browser support, and code consumers.
2. Define old and new versions, valid states, invariants, transformation, default, deletion, and rollback compatibility.
3. Make migration idempotent and resumable with a committed version marker only after validation.
4. Coordinate multiple tabs and workers through a lease or version check; fence stale writers.
5. Preserve data required for continuity while minimizing, expiring, or deleting obsolete fields.
6. Handle quota, private mode, blocked storage, partial write, corrupted data, old client, offline, and interrupted update.
7. Roll out by cohort with telemetry that avoids payload contents and identifies version or failure class.
8. Test upgrade, downgrade, reload, cross-tab, account switch, logout, deletion request, rollback, and recovery.

## Done

- A storage migration document records schemas, versions, transformations, privacy, ownership, fencing, cohorts, and recovery rules
- Upgrade, interruption, corruption, quota, cross-tab, logout, deletion, old-client, and rollback tests verify data integrity
