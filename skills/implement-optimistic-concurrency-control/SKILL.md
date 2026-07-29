---
name: implement-optimistic-concurrency-control
category: code
description: Implement optimistic concurrency control with version identity, conditional writes, conflict semantics, retries, merge policy, and user recovery. Use when concurrent updates must not silently overwrite one another.
---
# implement-optimistic-concurrency-control
## When to use
- Use where contention is bounded and lost updates are unacceptable.
- Do not automatically retry noncommutative or externally side-effecting updates.
## Preconditions
- Define entity, invariants, version source, operations, conflict rate, merge authority, and clients.
## Procedure
1. Choose monotonic version, ETag, compare value, or database-native token.
2. Return the version with every readable representation.
3. Require the expected version in each mutation and update atomically.
4. Return a structured conflict with current version and safe reconciliation data.
5. Retry only operations proven idempotent and commutative.
6. Test simultaneous create, update, delete, batch, stale cache, and side effects.
## Failure plan
- Route semantic conflicts to explicit user or domain resolution.
## Worked example
Two editors change a policy; the second write receives a conflict rather than erasing the first.
## Done
- A concurrency implementation records version contract, atomic update, conflict response, retry, merge, and telemetry
- Simultaneous, stale, delete, batch, idempotency, side-effect, cache, and user-recovery tests verify correctness
