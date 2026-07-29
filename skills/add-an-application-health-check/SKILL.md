---
name: add-an-application-health-check
category: code
description: Add bounded liveness, readiness, and startup checks that reflect an application's ability to serve. Use when orchestration or monitoring needs a reliable machine-readable health signal.
---

# add-an-application-health-check

Expose the smallest honest signal needed for restart, routing, and human diagnosis decisions.

## Procedure

1. Define what liveness, readiness, and startup mean for this application and platform.
2. Keep liveness local so a dependency outage does not create a restart storm.
3. Include only service-critical dependencies in readiness, with tight timeouts and no recursive checks.
4. Return stable status codes and a small versioned body with component states.
5. Exclude secrets, stack traces, host details, and sensitive dependency identifiers.
6. Configure probe cadence, timeout, threshold, startup allowance, and routing behavior.
7. Test startup, normal operation, saturation, dependency failure, degraded mode, and recovery.
8. Connect health transitions to logs, metrics, dashboards, and an operator runbook.

## Guardrails

- Do not make a health endpoint perform expensive work or mutate state.
- Avoid reporting healthy merely because the process accepts TCP connections.
- Protect diagnostic detail separately from the minimal externally reachable endpoint.

## Done

- A health-check report documents probe semantics and orchestration settings
- Failure and recovery tests verify routing and restart behavior
- Health transitions reconcile with recorded logs and monitoring signals
