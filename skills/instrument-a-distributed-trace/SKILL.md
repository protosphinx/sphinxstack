---
name: instrument-a-distributed-trace
category: code
description: Instrument distributed tracing with stable propagation, meaningful spans, bounded attributes, sampling, privacy, asynchronous links, and validation. Use when a request or workflow crosses services and queues.
---

# instrument-a-distributed-trace

Trace decisions and boundaries without turning telemetry into a data leak.

## When to use

- Use across HTTP, RPC, database, queue, job, and external-service boundaries.
- Never attach secrets, raw payloads, personal data, or unbounded identifiers.

## Preconditions

- Define journeys, trust boundaries, standards, telemetry backend, retention, cost, privacy, and debugging needs.

## Procedure

1. Choose trace and baggage propagation standards and explicit trust-boundary filtering.
2. Name spans by stable operation, not high-cardinality route values.
3. Record timing, status, bounded errors, dependency, version, region, and safe domain outcome.
4. Model synchronous parent-child and asynchronous producer-consumer links accurately.
5. Define head, tail, error, and rare-path sampling with known blind spots.
6. Correlate logs and metrics through safe identifiers.
7. Test propagation, broken context, retries, fan-out, long jobs, and sampling.
8. Measure overhead, cardinality, storage, access, and deletion.

## Failure plan

- Drop unsafe attributes and continue bounded tracing rather than exporting sensitive data.

## Worked example

A checkout trace links an asynchronous fraud result as a span link, preserving retries without falsely nesting hours of queue delay.

## Done

- A tracing implementation records propagation, span model, attributes, async links, sampling, privacy, retention, and dashboards
- Cross-service, queue, retry, fan-out, sampling, cardinality, overhead, and sensitive-data tests verify telemetry
