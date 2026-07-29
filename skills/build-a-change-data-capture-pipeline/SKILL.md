---
name: build-a-change-data-capture-pipeline
category: data
description: Build a change-data-capture pipeline with source position, event identity, schema history, snapshots, ordering, tombstones, idempotency, reconciliation, and recovery. Use when downstream state must follow database changes.
---
# build-a-change-data-capture-pipeline
## When to use
- Use for replication, search, analytics, integration, or cache updates.
- Do not infer business intent from low-level changes without a contract.
## Procedure
1. Define source tables, keys, transactions, consumers, positions, and retention.
2. Capture snapshot and change stream under one consistent boundary.
3. Assign event identity, source position, transaction, schema version, and operation.
4. Preserve ordering, tombstones, before and after meaning, and large-transaction behavior.
5. Make sinks idempotent and record accepted source watermarks.
6. Handle schema change, backpressure, restart, gap, poison, and replay.
7. Reconcile source, stream, sink, and business invariants continuously.
## Failure plan
- Stop publication and recover from the last proven position when a gap or ordering loss appears.
## Worked example
A snapshot overlaps live changes but the recorded high-watermark prevents missing or duplicating customer rows.
## Done
- A CDC implementation records source boundary, identity, positions, schema, ordering, tombstones, sink outcomes, and recovery
- Snapshot, live overlap, transaction, schema, tombstone, duplicate, gap, restart, and reconciliation tests verify correctness
