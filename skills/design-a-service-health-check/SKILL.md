---
name: design-a-service-health-check
category: code
description: Design service health checks that distinguish process life, traffic readiness, dependency degradation, and user outcome. Use when orchestrators and operators need safe automated decisions.
---
# design-a-service-health-check
## When to use
- Use for services, workers, gateways, or stateful components.
- Do not make liveness depend on transient downstream failure.
## Preconditions
- Define user journeys, dependencies, startup, drain, recovery, platform actions, and failure budget.
## Procedure
1. Separate startup, liveness, readiness, and diagnostic signals.
2. Test only conditions each signal can act on safely.
3. Bound latency, work, dependencies, caching, and authentication.
4. Make readiness fail before drain and recover only after stable prerequisites.
5. Return minimal machine state while protecting internals.
6. Test dependency outage, partial failure, overload, startup, drain, and recovery.
## Failure plan
- Disable harmful automated restart or routing action when a check amplifies failure.
## Worked example
A database outage removes readiness but keeps liveness healthy, avoiding a restart storm.
## Done
- A health-check design document records signals, semantics, thresholds, actions, dependencies, and diagnostics
- Startup, drain, outage, overload, recovery, privacy, and orchestrator-action tests verify safety
