---
name: inspect-a-request-correlation-id
category: code
description: Inspect a request correlation ID across gateway, service, queue, job, and database evidence to reconstruct one transaction. Use when a distributed failure must be traced without broad log searching.
---

# inspect-a-request-correlation-id

Correlation narrows a search; it does not prove causality or identity.

## When to use

- Use for a known request, trace, job, message, or support case identifier.
- Treat IDs and linked logs as potentially sensitive.

## Preconditions

- Record the identifier source, time window, environment, tenant where authorized, version, and clock assumptions.

## Procedure

1. Validate the ID format and provenance before searching.
2. Query authorized telemetry with a bounded time and system scope.
3. Order gateway, application, dependency, queue, worker, and persistence events by normalized time.
4. Link child spans, message IDs, retry attempts, and jobs while preserving one-to-many relationships.
5. Mark clock skew, sampling, missing spans, ID reuse, and propagation breaks.
6. Distinguish observed sequence from inferred cause.
7. Record the transaction path, failure boundary, and next evidence needed.

## Failure plan

- If the ID is reused or untrusted, stop cross-tenant attribution and narrow by independent fields.

## Worked example

A request ID reaches checkout, creates a queued job, and retries at the worker; missing propagation after the retry becomes an evidence gap, not proof the database failed.

## Done

- A correlation report records provenance, ordered events, relationships, retries, gaps, clocks, and failure boundary
- Scope, tenant, sampling, propagation, timestamp, privacy, and independent-field checks verify the reconstruction
