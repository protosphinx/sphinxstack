---
name: build-a-durable-idempotency-store
category: code
description: Build a durable idempotency store with scoped keys, request identity, atomic claims, outcome receipts, expiry, conflict handling, and recovery. Use when retried operations must not repeat side effects.
---
# build-a-durable-idempotency-store
## When to use
- Use for payments, provisioning, messages, imports, or consequential mutation.
- Do not reuse keys across tenants, operations, or semantically different requests.
## Procedure
1. Define tenant, operation, key, request fingerprint, scope, and retention.
2. Atomically create pending ownership or return the existing state.
3. Reject key reuse with a different request fingerprint.
4. Record durable completed outcome before releasing ownership.
5. Handle crash, timeout, lease recovery, unknown external outcome, and manual reconciliation.
6. Encrypt sensitive results and bound storage, expiry, and abuse.
7. Test concurrency, duplicate, mismatch, crash windows, expiry, and disaster recovery.
## Failure plan
- Keep ambiguous external outcomes pending until reconciled rather than repeat them.
## Worked example
A payment timeout retains an indeterminate receipt and checks the provider before any retry.
## Done
- An idempotency implementation records scope, fingerprint, states, atomicity, outcomes, retention, security, and reconciliation
- Concurrent, mismatch, crash, timeout, external-unknown, expiry, tenant, and restore tests verify exactly-one effect
