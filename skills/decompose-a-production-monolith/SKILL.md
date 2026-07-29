---
name: decompose-a-production-monolith
category: code
description: Decompose a production monolith through measured domain boundaries, dependency and data ownership, compatible extraction waves, parity tests, and rollback. Use when independent evolution is needed without sacrificing operating control.
---

# decompose-a-production-monolith

Change one verified ownership boundary at a time.

## When to use

- Use when the monolith's coupling creates demonstrated release, reliability, scaling, security, or team-ownership constraints.
- Use modularization inside the monolith when network separation would add cost without a clear independently operated boundary.

## Preconditions

- Confirm business owners, architecture and operations authority, service objectives, release constraints, incident history, compliance, budget, and migration horizon.
- Baseline runtime topology, request paths, dependencies, deployment, data, transactions, jobs, sessions, caches, reports, security, observability, and cost.
- Freeze destructive architectural changes until rollback and data-ownership evidence exists.

## Procedure

1. Create a **domain and dependency inventory** of capabilities, code, owners, callers, data, transactions, events, jobs, reports, failure paths, and operational objectives.
2. Measure change coupling, runtime traffic, latency, failure propagation, scaling pressure, release conflicts, and support load.
3. Discover hidden transactions through database transaction traces, query and audit logs, stored procedures, triggers, lock analysis, request traces, and job causality before assigning boundaries.
4. Choose a bounded extraction candidate with coherent business responsibility, enforceable interface, operational owner, and measurable benefit.
5. Define **data and transaction ownership** for authoritative writes, reads, invariants, cross-boundary workflows, history, and reconciliation.
6. Create an internal seam, compatibility facade, or anti-corruption layer before introducing a network boundary.
7. Define versioned contracts, identity, authorization, idempotency, deadlines, retries, observability, and failure semantics.
8. Establish data transition through expand, copy, verify, dual-read or controlled dual-write, ownership switch, and contraction without uncontrolled multi-writer state.
9. Run **extraction waves** for shadow reads, low-risk consumers, bounded writes, jobs, reports, and critical flows with explicit gates.
10. Verify behavior, data, permissions, latency, load, cost, failure isolation, recovery, and operational readiness at each wave.
11. Rehearse **rollback** of routing and ownership without losing effects already committed across the boundary.
12. Cut over under monitored decision authority and keep the original path available until reconciliation and recovery evidence stabilizes.
13. Remove obsolete code, data paths, permissions, flags, and infrastructure only after consumers and retention duties are proven complete.

## Failure plan

- If an invariant still requires an undocumented cross-module transaction, stop extraction and model the workflow before splitting it.
- If dual writes diverge, declare one authority, halt expansion, preserve both histories, and reconcile before retrying.
- If latency, failure coupling, or operator burden worsens beyond the gate, route back while preserving committed business effects.
- If a service has no accountable operations owner, do not create it.
- Never use a new service boundary to bypass authorization, audit, privacy, or data-residency controls.

## Worked example

A commerce monolith shares one database across checkout, inventory, billing, support, reporting, sessions, caches, and jobs. Teams want four services within six months, but cross-module transactions are undocumented. The program inventories runtime and data coupling, chooses notification history as a lower-risk first boundary, creates an internal interface, assigns authoritative data ownership, shadows reads, migrates jobs and consumers in waves, and rehearses routing rollback. Checkout remains inside until order and inventory invariants can be modeled and reconciled safely.

## Done

- A decomposition architecture record documents domain and dependency inventory, measured constraints, boundaries, data and transaction ownership, contracts, objectives, owners, and decisions
- A wave parity and isolation report verifies extraction waves across behavior, data, permissions, latency, load, cost, failure containment, operations, and consumer migration
- A cutover and rollback rehearsal proves routing, ownership, reconciliation, state-compatible recovery, committed-effect handling, monitoring, and retirement gates
