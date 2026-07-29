---
name: audit-feature-flags
category: code
description: Audit feature flags for purpose, ownership, state coverage, exposure, stale code, operational risk, and safe removal. Use when a flag inventory has grown, ownership is unclear, or rollout controls may no longer match production behavior.
---

# audit-feature-flags

Reconcile flag-service configuration with code and runtime behavior. Distinguish release, experiment, operational,
permission, and long-term configuration flags because their lifecycles differ.

## Inputs

- Gather flag-provider exports, code references, defaults, environments, targeting, history, telemetry, and owners.
- Identify sensitive attributes, kill switches, experiments, dependencies, and offline or degraded behavior.
- Confirm retention, approval, and removal rules.

## Procedure

1. Build a canonical inventory with key, type, purpose, owner, created date, expiry, default, and environments.
2. Reconcile provider records with code, configuration, tests, documentation, and deployed artifacts.
3. Identify missing, orphaned, duplicated, stale, permanently on, permanently off, and ownerless flags.
4. Review targeting attributes, audience size, privacy, fairness, and environment drift.
5. Test on, off, missing-provider, stale-cache, invalid-value, and dependency combinations.
6. Verify kill switches fail in the intended safe direction and remain operable.
7. Classify retain, repair, conclude experiment, convert to configuration, or remove.
8. Plan removal across code, provider, tests, metrics, documentation, and data analysis in safe order.
9. Execute a representative cleanup and verify behavior plus rollback.
10. Add creation requirements, expiry alerts, ownership review, and inventory checks.

## Boundaries

Do not expose targeting rules or personal attributes beyond approved access. Never delete a flag before proving
code behavior for all relevant states. Obtain authority before changing production targeting or kill switches.

## Done

- Provider, code, runtime, owner, and environment inventories reconcile
- Every flag has a type, purpose, state evidence, risk, and lifecycle decision
- State combinations and critical degraded behavior are tested
- Cleanup or retained-risk actions have owners, verification, rollback, and review dates
