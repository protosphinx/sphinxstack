---
name: design-a-feature-rollout-controller
category: code
description: Design a feature rollout controller with versioned targeting, bounded cohorts, health gates, authority, rollback, audit, and stale-client handling. Use when exposure must change safely across users or systems.
---
# design-a-feature-rollout-controller
## When to use
- Use for staged releases, migrations, experiments, or emergency disable.
- Do not use sensitive attributes without lawful purpose and privacy review.
## Procedure
1. Define feature, versions, subjects, cohorts, exclusions, prerequisites, and ownership.
2. Version rule sets and bind evaluations to configuration epochs.
3. Use deterministic assignment and separate experiment from safety override.
4. Set health, fairness, performance, and business gates with stop authority.
5. Handle cached config, offline defaults, conflicting flags, and old clients.
6. Audit changes, decisions, exposure, rollback, and override expiry.
7. Test partial propagation, stale epoch, outage, rollback, and recovery.
## Failure plan
- Freeze or roll back a cohort when evaluation or outcome evidence is unreliable.
## Worked example
A mobile rollout halts because old clients ignore a new prerequisite and enter an unsafe state.
## Done
- A rollout-controller design records rules, epochs, assignment, gates, authority, telemetry, rollback, and audit
- Determinism, stale-client, propagation, outage, privacy, fairness, stop, and rollback tests verify control
