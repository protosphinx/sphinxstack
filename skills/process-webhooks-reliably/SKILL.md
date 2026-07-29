---
name: process-webhooks-reliably
category: code
description: Process incoming webhooks with authentic verification, durable intake, deduplication, retries, and reconciliation. Use when an external provider sends at-least-once event notifications to an application.
---

# process-webhooks-reliably

Separate fast authentic intake from repeatable business processing and independent truth reconciliation.

## Procedure

1. Read the provider contract for signatures, raw-body requirements, timestamps, identifiers, retries, ordering, and retention.
2. Capture the bounded raw request and verify its signature before parsing or transforming the body.
3. Enforce timestamp tolerance and replay policy while allowing legitimate provider retries.
4. Persist an immutable event envelope durably, then acknowledge within the provider's deadline.
5. Deduplicate by provider event ID or a documented stable fingerprint.
6. Process asynchronously through an idempotent handler that tolerates duplicates and out-of-order delivery.
7. Apply bounded retries and route poison events to an owned dead-letter queue.
8. Preserve per-object ordering only where the business transition requires it.
9. Rotate signing secrets with overlap, rollback, and verification tests.
10. Reconcile local state against the provider API or periodic authoritative export.
11. Test altered signatures, stale requests, duplicates, gaps, reordering, outage, and replay.

## Guardrails

- Signature verification must use the exact bytes and algorithm specified by the provider.
- Do not perform long business work before acknowledging a valid delivery.
- A webhook is a notification, not necessarily the authoritative current state.

## Done

- The intake envelope, verification policy, and handler contract are documented
- Authenticity, duplicate, ordering, outage, and replay tests are verified
- Accepted events, business effects, dead letters, and provider state reconcile
