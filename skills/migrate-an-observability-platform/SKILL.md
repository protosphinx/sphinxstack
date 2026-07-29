---
name: migrate-an-observability-platform
category: code
description: Migrate an observability platform while preserving signal meaning, query behavior, alert coverage, incident access, and rollback. Use when production telemetry, dashboards, or alerting must move between vendors or architectures.
---

# migrate-an-observability-platform

Moving bytes is not enough. Prove that operational decisions still mean the same thing before retiring the old platform.

## When to use

- Use when changing log, metric, trace, event, dashboard, alert, on-call, or telemetry-storage platforms for live services.
- Use ordinary configuration deployment when producers, semantics, history, access, queries, alerts, and incident workflows remain on one platform.

## Preconditions

- Confirm platform, service, security, privacy, finance, incident-response, and executive risk owners.
- Obtain contracts, export limits, retention, schemas, producers, collectors, queries, alerts, dashboards, integrations, access, audit, and incident history.
- Define the maximum acceptable alert gap, historical loss, semantic drift, cost overlap, and rollback duration.

## Procedure

1. Build a **signal inventory** for every producer, schema, metric type, log field, span, event, environment, region, tenant, owner, retention, and consumer.
2. Inventory queries, dashboards, alerts, objectives, reports, investigations, API integrations, on-call routes, and rarely used incident procedures.
3. Define **semantic equivalence** for types, units, labels, timestamps, missing data, rates, histograms, percentiles, parsing, search, joins, and sampling.
4. Map identity, tenancy, access, encryption, residency, retention, legal hold, deletion, and audit controls.
5. Convert producers and collectors through a compatibility layer where possible, with bounded buffering and observable loss.
6. Translate queries and alerts from intended decisions, not syntax alone; document irreducible differences.
7. Run **dual-write validation** over normal traffic, peak periods, deploys, known incidents, low-volume services, and telemetry failures.
8. Compare ingestion, series, event counts, latency, sampling, query results, alert timing, routing, dashboard values, and cost.
9. Rehearse incident investigation and security or audit retrieval in the target before each migration wave.
10. Migrate by low-risk producer and consumer cohorts with mismatch thresholds, exception expiry, and pause authority.
11. Perform cutover only after alert, access, history, runbook, integration, and support acceptance.
12. Rehearse **rollback** that restores old ingestion and alert routing without losing target-side evidence or creating duplicate paging.
13. Retire the source only after retention, export, legal, rollback, and reconciliation gates expire.

## Failure plan

- Pause a wave for unexplained signal loss, semantic mismatch, late or missing critical alerts, access regression, or breached data controls.
- Keep source alerting authoritative until target parity is proven; deduplicate dual notifications through an explicit incident key.
- If target ingestion fails, route through the rehearsed compatible path and preserve loss counters plus buffered state.
- Roll back producer and alert routing independently when one plane fails.
- Never delete source history or configuration until required evidence is verified accessible and the rollback window is closed.

## Worked example

A company moves from a proprietary platform to an open telemetry collector and a new storage vendor. Its signal inventory finds a latency histogram whose bucket semantics cannot be reproduced by the translated dashboard and a security alert that depends on a rarely queried field. Dual-write validation shows matching request counts but a two-minute target ingestion delay that would breach paging needs. The team keeps source alerts authoritative, repairs routing, and replays three prior incidents. After query, alert, access, and retention parity pass for each cohort, a rehearsal restores old ingestion and suppresses duplicate pages without deleting target evidence.

## Done

- A migration coverage register contains the signal inventory, consumers, controls, semantic equivalence decisions, exceptions, and owners
- A query and alert parity report verifies dual-write validation across values, timing, routing, incidents, access, retention, and cost
- A cutover and rollback rehearsal records target acceptance, old-path restoration, duplicate prevention, evidence preservation, and reconciliation
