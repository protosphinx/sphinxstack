---
name: document-a-service-dependency
category: code
description: Document a service dependency's contract, ownership, limits, failure behavior, observability, and recovery path. Use when a production capability relies on another internal or external system.
---

# document-a-service-dependency

Make the dependency visible enough to design, operate, and recover the calling service honestly.

## Procedure

1. Name the consumer outcome, provider, owner, criticality, and environments.
2. Record endpoints, authentication, data classes, versions, quotas, and supported operations.
3. Define latency, availability, consistency, ordering, and freshness assumptions.
4. Describe timeout, retry, idempotency, circuit, cache, and fallback behavior.
5. Map monitoring, status, support, escalation, maintenance, and change-notice channels.
6. Record geographic, security, privacy, compliance, cost, and concentration constraints.
7. Rehearse slow, unavailable, incorrect, stale, and partially recovered states.
8. Publish a dependency record with review date, evidence links, and exit owner.

## Guardrails

- Do not copy credentials or sensitive contract terms into broad documentation.
- Provider uptime does not prove the consumer journey works.
- Avoid a fallback that silently returns incorrect or unsafe data.

## Done

- A versioned service-dependency record is reviewed by both owners
- Failure and fallback behavior are tested
- Monitoring and escalation paths are verified against a rehearsal
