---
name: implement-a-rate-limiter
category: code
description: Implement a rate limiter with fair identity, atomic accounting, burst policy, distributed consistency, failure behavior, response semantics, and observability. Use when resource use or abuse must be bounded.
---

# implement-a-rate-limiter

Limit the costly action at the identity and scope that create the risk.

## When to use

- Use for APIs, authentication, messaging, jobs, expensive queries, or shared resources.
- Do not use an unstable address as the sole identity where it harms shared or displaced users.

## Preconditions

- Define protected resource, actors, identities, costs, limits, burst, windows, regions, exceptions, and failure tolerance.

## Procedure

1. Choose subject, route, tenant, credential, device, or composite keys with privacy review.
2. Select fixed, sliding, token, leaky, or concurrency control from desired semantics.
3. Make accounting atomic and define distributed consistency plus clock behavior.
4. Weight different operations by verified cost where needed.
5. Return documented status, retry timing, remaining capacity where safe, and accessible guidance.
6. Define fail-open, fail-closed, degraded, allowlist, and emergency authority.
7. Prevent bypass through key rotation, fan-out, case, path, or regional routing.
8. Test boundaries, bursts, concurrency, outage, fairness, recovery, and abuse.

## Failure plan

- Enter a bounded degraded mode when the limiter store fails, with explicit resource protection and monitoring.

## Worked example

A login limiter combines account and network risk, avoids punishing an entire campus, and uses stricter recovery controls after repeated failures.

## Done

- A rate-limiter implementation records identities, algorithm, atomic state, limits, responses, failure mode, exceptions, and telemetry
- Boundary, concurrency, clock, region, bypass, outage, fairness, privacy, and recovery tests verify behavior
