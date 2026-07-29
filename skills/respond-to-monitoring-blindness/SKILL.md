---
name: respond-to-monitoring-blindness
category: code
description: Respond to a monitoring blind spot by scoping lost evidence, using independent signals, reducing operating risk, and restoring visibility. Use when telemetry, alerting, dashboards, or health checks may be missing or misleading during production operation.
---

# respond-to-monitoring-blindness

A green dashboard built from missing data is not healthy. Treat unknown service state as operational risk and make uncertainty explicit.

## When to use

- Use when telemetry stops, becomes delayed, loses a region or tenant, produces impossible values, or fails to notify expected conditions.
- Use ordinary monitor repair when independent evidence proves service state and the missing signal cannot affect consequential decisions.

## Preconditions

- Confirm incident authority, service ownership, telemetry ownership, safe change controls, and communication routes.
- Gather independent user reports, synthetic checks, provider status, service state, infrastructure signals, deploys, collector health, buffers, and audit records.
- Identify decisions that currently depend on the suspect signal.

## Procedure

1. Declare uncertainty and build a **blind-spot scope** across services, signals, regions, tenants, environments, time, retention, alerts, dashboards, and incident workflows.
2. Determine whether the problem is producer, network, collector, pipeline, storage, query, dashboard, notification, access, clock, or configuration.
3. Establish **alternate evidence** through independent synthetics, direct bounded service checks, infrastructure counters, safe log access, business reconciliations, customer reports, and provider channels.
4. Separate evidence of service health from evidence only that the monitoring system is alive.
5. Choose a **risk-based operating mode**: pause risky deploys, restrict changes, add staffing, reduce traffic, disable fragile features, or continue with explicit controls.
6. Preserve pipeline state, buffers, configs, deploy history, alert decisions, access logs, and loss counters before repair.
7. Restore the narrowest trustworthy critical path first, including high-severity alert routing and user-outcome signals.
8. Test the restored path with controlled signal injection from producer through notification.
9. Backfill only when source data, ordering, duplication, retention, and downstream consequences are understood.
10. Reconcile service events, source telemetry, buffers, delivered records, gaps, alerts, and communications.
11. Complete **visibility restoration** across the blind-spot scope and remove compensating controls only after independent verification.
12. Review why blindness was not detected and add independent coverage, freshness, loss, and notification tests.

## Failure plan

- If service state cannot be established, operate as degraded and stop changes whose risk requires missing evidence.
- If the repair threatens serving availability or destroys buffered data, preserve state and use the approved alternate collection path.
- If security, audit, or regulated evidence may be lost, notify authorized owners and preserve custody immediately.
- Do not backfill alerts in a way that creates uncontrolled paging or automated remediation.
- If a restored dashboard conflicts with independent evidence, keep the blind-spot incident open.

## Worked example

After a collector configuration deploy, every regional dashboard is green but error volume and request counts drop nearly to zero. Responders declare a monitoring blind spot, pause unrelated production changes, and use synthetic transactions, load-balancer counts, direct health checks, customer reports, and database completion records as alternate evidence. They find one region also has real elevated failures. The telemetry rollback restores critical logs and alerts first, controlled test errors reach the paging route, buffered records drain with duplicate markers, and source-to-destination counts identify an unrecoverable nine-minute gap. Normal change resumes only after each region and signal passes independent verification.

## Done

- A monitoring exposure timeline records blind-spot scope, onset, affected decisions, service evidence, telemetry evidence, and remaining gaps
- A compensating-control log records alternate evidence, risk-based operating mode, change restrictions, decisions, owners, and removal gates
- A restoration and backfill report verifies visibility restoration, end-to-end signal injection, gap and duplicate reconciliation, alert routing, and prevention actions
