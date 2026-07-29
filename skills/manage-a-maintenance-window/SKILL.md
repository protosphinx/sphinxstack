---
name: manage-a-maintenance-window
category: code
description: Coordinate a planned production maintenance event with safe execution and recovery. Use when upgrades, infrastructure work, migrations, vendor actions, or controlled downtime require cross-team sequencing and evidence.
---

# manage-a-maintenance-window

Run the event from a versioned plan with explicit hold, rollback, communication, and validation points.

## Preconditions

- Confirm change authority, service owner, executor, incident lead, window, dependencies, support coverage, and rollback authority.
- Require tested backups or recovery mechanisms appropriate to the change.

## Procedure

1. Define purpose, exact scope, expected impact, success criteria, maximum acceptable interruption, and hard stop time.
2. Inventory prerequisites, versions, access, capacity, dependencies, vendors, batch jobs, and conflicting changes.
3. Write a timestamped runbook with owners, commands or actions, expected outputs, hold points, and evidence locations.
4. Define abort and rollback triggers based on user journeys, integrity, time, capacity, and unknown behavior.
5. Rehearse destructive, irreversible, or time-critical steps in a representative environment.
6. Send audience-specific notices with timezone, expected impact, support path, and update cadence.
7. At the go/no-go, verify people, access, telemetry, backups, rollback, incident path, and current system health.
8. Execute one controlled step at a time and record observed state rather than checking boxes in advance.
9. Validate critical journeys, data integrity, queues, dependencies, alerts, and performance before completion.
10. Publish outcome, restore paused work, monitor the defined period, and reconcile deviations into follow-up.

## Guardrails

- Stop when observed state diverges materially from the runbook or rollback remains safer.
- Do not continue merely because the scheduled window is closing.
- Never expose secrets in the execution transcript.
- Completion means service validation, not just command success.

## Done

- Go/no-go, execution, hold, and rollback decisions are traceable
- Verification evidence shows critical journeys and data checks pass
- Communications reflect actual state
- Monitoring evidence, cleanup, and follow-up owners are active
