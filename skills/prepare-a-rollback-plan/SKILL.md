---
name: prepare-a-rollback-plan
category: code
description: Define and rehearse recovery from a failed software release, including triggers, authority, compatibility, data handling, and verification. Use when a release can change production behavior, configuration, infrastructure, or stored data.
---

# prepare-a-rollback-plan

Plan recovery for the exact candidate and production state. A rollback is not viable until its dependencies,
data consequences, execution time, and success checks are known.

## Inputs

- Gather the release artifact, current production version, deployment method, migrations, flags, config, and dependencies.
- Identify traffic, caches, queues, schemas, writes, external contracts, and irreversible side effects.
- Confirm backup or restore points, retention, access, authority, and maintenance constraints.

## Procedure

1. Define rollback scope and the last known compatible application, configuration, infrastructure, and schema state.
2. Map every release mutation to reversible, forward-only, data-repair, or externally irreversible handling.
3. Write observable rollback triggers and the person authorized to decide.
4. Specify how to stop rollout, drain or route traffic, pause jobs, and protect new writes.
5. List exact artifact, command, configuration, flag, and sequencing steps with pre-checks.
6. Handle schema and data compatibility, including records written by the new version.
7. Define expected observations, time budget, abort conditions, and escalation.
8. Verify health, critical journeys, data integrity, queues, integrations, and monitoring after rollback.
9. Rehearse in a production-shaped environment using the actual candidate and prior release.
10. Record rehearsal gaps, update the plan, and keep required artifacts available through the release window.

## Boundaries

Never claim rollback can undo external messages, payments, deletions, or incompatible data without proof.
Do not run production rollback commands during rehearsal. Only authorized operators may change traffic or
production state.

## Done

- Every release mutation has a checked recovery treatment
- Triggers, authority, steps, artifacts, timing, abort conditions, and escalation are written
- A production-shaped rehearsal restores the prior compatible state and verifies critical behavior
- Irreversible effects and forward-repair needs remain explicit in the release decision
