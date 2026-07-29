---
name: map-critical-service-dependencies
category: data
description: Map the dependencies, ownership, and failure effects behind a critical service. Use when incident response, continuity, migrations, reliability objectives, or change planning depend on an accurate service boundary.
---

# map-critical-service-dependencies

Produce a versioned dependency map and report that responders and change owners can verify. Treat diagrams, configuration, telemetry, and operator knowledge as separate evidence sources until reconciled.

## Procedure

1. Define the user journey, service boundary, environments, time of observation, and depth of the map.
2. Trace entry points through application, data, identity, network, messaging, infrastructure, observability, and external services.
3. Add people, access, facilities, certificates, secrets, vendors, contracts, and manual processes.
4. For each dependency, record owner, purpose, interface, direction, criticality, redundancy, failure behavior, and evidence.
5. Compare architecture documents with configuration, traffic, traces, deployment manifests, bills, and incident history.
6. Identify hidden, circular, single-owner, shared-control-plane, regional, and recovery-order dependencies.
7. Simulate loss, degradation, stale data, throttling, and partial recovery at consequential nodes.
8. Record detection, degraded mode, failover, recovery prerequisite, and escalation route.
9. Resolve discrepancies or mark them with an owner and due date.
10. Version the map and define updates triggered by changes, incidents, tests, or owner departures.

## Guardrails

- Keep credentials, exploitable detail, and unnecessary personal information out of broadly shared views.
- A vendor logo or network line is not enough; specify the operational dependency.
- Do not mark redundancy proven until failure and recovery behavior are tested.
- Preserve the observed date because dependency maps decay quickly.

## Done

- Every critical edge has evidence, ownership, and failure behavior
- Hidden and recovery-order dependencies are visible
- Discrepancies and untested failovers have owners
- The map has versioning and refresh triggers
