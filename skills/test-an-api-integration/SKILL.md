---
name: test-an-api-integration
category: code
description: Test an API integration across contract, authentication, state, retries, errors, limits, observability, and cleanup. Use when verifying a new or changed consumer-provider connection before release.
---

# test-an-api-integration

Exercise the integration as a stateful conversation, not a single happy request. Prove how it behaves when
either side is slow, unavailable, duplicated, changed, or only partly successful.

## Inputs

- Gather the versioned contract, consumer behavior, provider environment, credentials, quotas, webhooks, and support path.
- Identify side effects, idempotency, pagination, async jobs, eventual consistency, retries, and data retention.
- Prepare a sandbox or approved isolated account with synthetic data.

## Procedure

1. Record the supported contract version, permissions, endpoints, events, and expected state transitions.
2. Verify authentication, authorization, expiration, rotation, and least-privilege failure behavior.
3. Test representative valid requests and reconcile consumer and provider state.
4. Exercise invalid input, missing permission, conflict, not found, and version mismatch.
5. Simulate timeout, rate limit, provider error, dropped response, delayed webhook, and duplicate delivery.
6. Verify idempotency, retry backoff, pagination, ordering, deduplication, and reconciliation.
7. Check logs, metrics, correlation identifiers, alerts, and privacy-safe diagnostic context.
8. Test schema additions and removals against the consumer's parsing behavior.
9. Clean up test resources and confirm no credentials or synthetic records leak.
10. Save a contract test report with failures, owners, and release decision.

## Boundaries

Never test destructive or billable operations against production without explicit approval. Do not store real
credentials or customer payloads in fixtures and logs. Respect provider rate limits and terms.

## Done

- Contract, permissions, happy path, errors, retries, limits, and asynchronous behavior are tested
- Consumer and provider state reconcile after success, duplicate, timeout, and partial failure
- Diagnostic signals identify failures without exposing secrets or private payloads
- Cleanup is verified and the report records evidence, exceptions, owners, and release decision
