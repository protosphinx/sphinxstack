---
name: implement-an-outbox-pattern
category: code
description: Implement an outbox pattern that atomically records domain change and event intent, then publishes with idempotency, ordering, observability, and reconciliation. Use when database state and messages must not diverge.
---

# implement-an-outbox-pattern

Atomic intent plus replay-safe delivery replaces unreliable dual writes.

## When to use

- Use when one transaction changes local state and must notify another system.
- Do not claim exactly-once delivery; prove idempotent effect and reconciliation.

## Preconditions

- Define transaction boundary, event contract, consumers, ordering, retention, throughput, and recovery.

## Procedure

1. Write domain change and outbox row in one local transaction.
2. Assign event ID, aggregate ID, sequence, schema version, occurred time, and safe payload.
3. Publish with claim or lease semantics that survive worker crashes.
4. Record attempts and acknowledgement without deleting the only evidence prematurely.
5. Require consumers to deduplicate event IDs and enforce aggregate ordering where needed.
6. Handle schema compatibility, poison events, retries, dead letters, and redrive.
7. Reconcile domain rows, outbox state, broker acknowledgements, and consumer outcomes.
8. Test every crash window plus backlog and recovery.

## Failure plan

- Pause publishing when ordering or consumer compatibility is unsafe while retaining committed intent.

## Worked example

An order and `OrderPlaced` event commit together; a crash after broker publish causes a retry that the consumer rejects by event ID.

## Done

- An outbox implementation includes schema, transactional write, publisher, consumer contract, retention, reconciliation, and runbook
- Rollback, duplicate, ordering, crash-window, backlog, poison, redrive, and end-to-end tests verify delivery
