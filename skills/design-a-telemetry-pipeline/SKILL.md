---
name: design-a-telemetry-pipeline
category: code
description: Design a production telemetry pipeline with explicit coverage, loss, overload, governance, tenancy, and recovery guarantees. Use when logs, metrics, traces, or events must cross shared collection and storage infrastructure reliably.
---

# design-a-telemetry-pipeline

Telemetry is operational evidence, but it is also a distributed data system. State which signals can be delayed, sampled, dropped, reconstructed, or never lost.

## When to use

- Use when many services, clusters, regions, or tenants share collectors, processors, routing, and observability storage.
- Use direct application export only for a bounded system whose failure, volume, and governance needs do not justify a pipeline.

## Preconditions

- Identify service, security, privacy, audit, compliance, finance, platform, and incident-response owners.
- Gather producers, signal schemas, volumes, bursts, objectives, sensitive fields, consumers, retention, regions, vendors, and current loss evidence.
- Define which serving paths must remain independent of telemetry availability.

## Procedure

1. Build a **coverage model** across producers, signals, environments, regions, tenants, critical journeys, incidents, audit needs, and downstream consumers.
2. Classify each signal by value, sensitivity, volume, freshness, durability, ordering, retention, and permissible sampling or loss.
3. Define interoperable schemas, resource identity, clocks, correlation, tenancy, versioning, and invalid-record behavior.
4. Place agents, gateways, buffers, processors, routers, and regional or central storage according to failure domains and data rules.
5. Specify **backpressure and loss** behavior at every hop: memory and disk bounds, spill, retry, shedding priority, blocking limits, drop counters, and producer impact.
6. Enforce **data governance** through minimization, redaction, encryption, tenant isolation, residency, access, retention, legal hold, deletion, and audit.
7. Establish sampling, aggregation, enrichment, routing, and cost budgets without hiding rare failures or required evidence.
8. Instrument the pipeline itself for accepted, rejected, queued, delayed, retried, sampled, dropped, duplicated, and delivered data.
9. Test schema errors, burst overload, downstream slowness, partition, collector loss, storage outage, credential failure, clock skew, and regional isolation.
10. Compare source operation counts with accepted and delivered telemetry for representative windows.
11. Design **disaster recovery** for configuration, routing, buffers, keys, metadata, and critical retained evidence with tested restore objectives.
12. Stage rollout by producer and region with compatibility, pause, rollback, and consumer acceptance gates.

## Failure plan

- If the pipeline threatens a serving path, activate the approved bounded shedding or isolation mode and preserve critical security and audit evidence first.
- If loss or duplication exceeds the signal contract, declare coverage degraded, notify consumers, preserve counters, and stop unsupported claims.
- If tenant, residency, or sensitive-data routing fails, quarantine affected flow and follow the authorized privacy or security incident process.
- If downstream storage is unavailable, retain only within approved bounds and make impending loss visible before buffers exhaust.
- Restore to the last compatible configuration and reconcile source, buffer, and destination counts before declaring recovery.

## Worked example

A company centralizes logs, metrics, and traces from three regions into shared gateways. The coverage model distinguishes request telemetry, security detections, and required audit events. Regional agents batch to disk, but application writes never block indefinitely. During an overload test, verbose debug logs shed first while audit events route to a separately bounded durable stream. A malformed attribute containing customer text is quarantined by the governance rule. The team loses a regional gateway, restores configuration and keys in a clean environment, drains retained buffers, and reconciles producer, drop, duplicate, and destination counts before restoring full coverage.

## Done

- A telemetry architecture record contains the coverage model, signal contracts, topology, schemas, governance, backpressure and loss rules, and disaster recovery
- A loss and overload test report verifies bursts, partitions, failures, shedding priority, serving-path isolation, and visible coverage degradation
- A recovery and reconciliation rehearsal restores configuration and critical flow, then reconciles source, buffer, drop, duplicate, and destination evidence
