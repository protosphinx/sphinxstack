---
name: add-database-transaction-boundaries
category: code
description: Add database transaction boundaries that protect stated invariants across reads, writes, concurrency, errors, and retries. Use when several database changes must commit or fail as one logical operation.
---

# add-database-transaction-boundaries

Define the invariant and isolation need before opening a transaction.

## When to use

- Use for related writes, read-modify-write logic, allocation, balances, ownership, or state transitions.
- Do not hold transactions across user input, slow networks, or irreversible external effects.

## Procedure

1. State the business invariant, records, competing transactions, and observable failure.
2. Choose the smallest boundary and required isolation based on actual anomalies.
3. Acquire rows or constraints in a consistent order and rely on database-enforced uniqueness where possible.
4. Keep external effects outside the transaction through outbox, intent, or compensation design.
5. Propagate one transaction context and prevent helpers from committing independently.
6. Classify retryable deadlocks or serialization failures and make the operation idempotent.
7. Roll back on every error and preserve useful diagnostics without sensitive values.
8. Test concurrent interleavings, failures, retries, and final invariants.

## Done

- A transaction design document records invariant, boundary, isolation, lock order, external-effect strategy, and retry rules
- Concurrent and fault tests verify atomic commit, rollback, deadlock handling, and preserved invariants
