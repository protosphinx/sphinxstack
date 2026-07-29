---
name: migrate-a-message-queue
category: code
description: Migrate a message queue while preserving message identity, ordering, delivery, retries, dead letters, backpressure, side effects, and rollback. Use when brokers, topics, clients, or queue topology must change.
---

# migrate-a-message-queue

Move ownership of each message without creating two side-effect authorities.

## When to use

- Use for broker replacement, topology redesign, regional move, client upgrade, or managed-service migration.
- Protect message payloads, credentials, and regulated data.

## Preconditions

- Inventory producers, consumers, topics, schemas, keys, ordering, retention, acknowledgements, retries, dead letters, throughput, and recovery.

## Procedure

1. Define stable message and operation identity plus authoritative outcome.
2. Compare delivery, ordering, visibility, transaction, retention, size, security, and failure semantics.
3. Update contracts and clients compatibly before topology cutover.
4. Establish controlled source fan-out or capture without allowing duplicate side effects.
5. Track per-partition or queue watermarks, lag, acknowledgements, retries, dead letters, and outcomes.
6. Migrate bounded cohorts and reconcile messages plus business effects.
7. Fence old consumers and producers with epochs before authority transfer.
8. Rehearse rollback while preserving new acknowledgements and accepted effects.

## Failure plan

- Stop a cohort when message outcome is ambiguous; reconcile before replay.

## Worked example

A payment event exists on both brokers but one durable operation receipt ensures only one charge, while watermarks prove complete transfer.

## Done

- A queue migration plan records contracts, identity, topology, security, watermarks, authority, cohorts, rollback, and retirement
- Duplicate, ordering, lag, poison, outage, backpressure, side-effect, rollback, and reconciliation tests verify migration
