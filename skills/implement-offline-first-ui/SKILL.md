---
name: implement-offline-first-ui
category: web
description: Implement an offline-first interface with explicit freshness, queued writes, conflict handling, and recovery. Use when users must read or change data through unreliable connectivity.
---

# implement-offline-first-ui

Make offline state visible and every local mutation traceable to a durable sync outcome.

## Procedure

1. Define which reads and writes work offline, their freshness needs, and irreversible limits.
2. Design local records with stable IDs, versions, ownership, schema, and migration.
3. Show offline, stale, pending, failed, conflicted, and synchronized states.
4. Queue mutations idempotently with original intent, order, retry, and cancellation.
5. Choose conflict rules per field or operation rather than universal last-write-wins.
6. Reauthenticate and reauthorize queued work before applying it after reconnect.
7. Bound storage, retention, encryption, logout, account switch, and device-loss behavior.
8. Test long offline periods, clock skew, duplicate writes, conflicts, eviction, upgrades, and recovery.
9. Reconcile local, queued, server, and user-visible outcomes.

## Guardrails

- Never imply a local action is complete before its durable state is clear.
- Do not sync a queued action after its permission or tenant context changed.
- Avoid storing unnecessary sensitive data for offline convenience.

## Done

- An offline data and conflict policy report is documented
- Connectivity, conflict, eviction, upgrade, and account-transition tests pass
- Local, queue, server, and visible records reconcile
