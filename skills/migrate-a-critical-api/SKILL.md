---
name: migrate-a-critical-api
category: code
description: Migrate a critical API through consumer discovery, versioned compatibility, dual-run evidence, staged cutover, and rehearsed rollback. Use when externally or independently released clients depend on changing behavior.
---

# migrate-a-critical-api

Preserve supported outcomes until every material consumer has proven migration.

## When to use

- Use for API gateway, protocol, provider, version, authentication, endpoint, schema, or ownership migrations with production consumers.
- Use an additive change when the existing contract can remain supported without a consumer cutover.

## Preconditions

- Confirm provider and consumer owners, contract and notice duties, service objectives, security, privacy, support, budget, cutover authority, and end-of-support rules.
- Preserve specifications, SDKs, documentation, traffic telemetry, logs, alerts, examples, support cases, credentials model, quotas, and current deployment artifacts.
- Treat observed traffic as a lower bound because dormant, scheduled, failover, and offline clients may not appear.

## Procedure

1. Build a **consumer inventory** from registration, credentials, telemetry, code search, SDK downloads, contracts, support, partners, jobs, webhooks, and owner attestation.
2. Define the **compatibility contract** for methods, paths, auth, scopes, fields, types, nullability, errors, pagination, ordering, time, idempotency, rate limits, retries, webhooks, and performance.
3. Classify each proposed change as additive, compatible, conditionally compatible, deprecated, or breaking for each supported consumer.
4. Provide versioned or compatibility-layer behavior for breaking changes and publish testable migration guidance plus deadlines.
5. Build provider, consumer, schema, SDK, security, failure, load, and mixed-version contract tests.
6. Shadow or mirror safe traffic and perform **dual-run validation** of outputs, side effects, latency, errors, rate behavior, and observability without duplicating mutations.
7. For financial or irreversible mutations, maintain an independent control ledger linking canonical request, idempotency, authoritative provider, provider identifiers, state, amounts, reversals, and reconciliation.
8. Migrate internal, canary, low-risk, partner, high-volume, scheduled, and critical consumers in owned waves.
9. Require consumer-generated proof for authentication, normal, boundary, error, retry, pagination, webhook, and rollback cases.
10. Rehearse routing, credentials, SDK, cache, data, and **rollback** while preserving accepted mutations and revocation state.
11. Cut over with live consumer health, parity, error, saturation, support, and business monitoring.
12. Retire old behavior only after notice, telemetry, owner confirmation, failover checks, and retention conditions pass.

## Failure plan

- If a material consumer has no owner or test evidence, keep compatible service or escalate an explicit risk decision.
- If dual run would duplicate a mutation, compare shadow computation or read-only outputs and reconcile provider-side effects separately.
- If authentication or scope mapping widens access, stop the wave and restore the prior boundary.
- If rollback cannot preserve mutations accepted by the new API, design state-compatible compensation before cutover.
- Never use telemetry absence as proof that a client is retired.

## Worked example

A billing API must move from version one to a new provider. The response shape, auth scopes, idempotency, rate limits, webhook signatures, SDK defaults, and validation errors differ. Hundreds of clients include scheduled partners not seen in 30 days. The team inventories credential and contract owners, publishes a versioned compatibility contract, shadows reads, validates mutations through safe provider-side reconciliation, migrates consumers by wave, and rehearses routing plus credential rollback without replaying charges.

## Done

- An API migration register records consumer inventory, contracts, owners, versions, notice, compatibility classification, credentials, waves, exceptions, and decisions
- A consumer compatibility report proves compatibility contract and dual-run validation for behavior, auth, scopes, errors, pagination, idempotency, webhooks, performance, SDKs, and mixed versions
- A cutover and rollback rehearsal verifies routing, credentials, state-compatible recovery, accepted mutations, monitoring, support, consumer proof, and retirement gates
