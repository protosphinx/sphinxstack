---
name: maintain-a-public-api
category: code
description: Evolve a public API with explicit contracts, compatibility classification, consumer evidence, tests, documentation, and operational safeguards. Use when changing behavior, schemas, versions, limits, errors, or lifecycle policy for external consumers.
---

# maintain-a-public-api

Treat consumer-observed behavior as the interface, including errors, timing, ordering, idempotency, and operational
limits. Make each change deliberate and testable.

## Inputs

- Gather the current schema, documentation, SDKs, consumer inventory, telemetry, support policy, and version rules.
- Identify authentication, authorization, privacy, rate, availability, performance, and compliance constraints.
- Use representative consumer contract tests and historical incidents.

## Procedure

1. Inventory documented and de facto behavior consumers may rely on.
2. Classify the proposed change as compatible, conditionally compatible, deprecating, or breaking with evidence.
3. Review request, response, error, ordering, pagination, retry, idempotency, and timing effects.
4. Design additive or versioned evolution before choosing a breaking path.
5. Update the machine-readable schema, implementation, examples, SDKs, and human documentation together.
6. Run provider and representative consumer contract tests across supported versions.
7. Test authorization, limits, invalid input, timeouts, partial failure, and backward compatibility.
8. Plan release, observability, support, deprecation, rollback, and consumer communication.
9. Monitor version adoption, errors, latency, limit events, and unexpected consumer behavior.
10. Record the decision and remove compatibility only through the approved lifecycle.

## Boundaries

Do not infer all consumers from incomplete telemetry or change security semantics silently. Never expose private
consumer payloads in diagnostics. Honor contracts, notice windows, accessibility, and regulated-data obligations.

## Done

- Contract changes and compatibility classification are written and reviewed
- Schemas, SDKs, examples, documentation, and implementation agree
- Provider, consumer, security, error, limit, and compatibility tests pass
- Release, observation, support, deprecation, and recovery evidence are recorded
