---
name: write-an-operations-runbook
category: write
description: Create a dependable operations runbook for diagnosing, mitigating, recovering, and escalating one service condition. Use when on-call or support operators need a tested procedure that works without unwritten expert context.
---

# write-an-operations-runbook

Write around decisions and observations rather than a wall of commands. Let an authorized operator know when
to continue, stop, escalate, or choose a different path.

## Inputs

- Gather the service map, owners, dependencies, dashboards, alerts, logs, common failures, and recovery controls.
- Identify permissions, environments, customer impact, data sensitivity, time pressure, and change authority.
- Use incident history and current production interfaces as sources.

## Procedure

1. Define the trigger, scope, audience, prerequisites, and condition the runbook addresses.
2. State immediate safety, security, data, and customer-impact checks.
3. Provide a service and dependency orientation with authoritative links.
4. List low-risk diagnostics in order, each with command, expected observation, and interpretation.
5. Build decision branches from observable state, not assumed root cause.
6. Document bounded mitigations with authority, side effects, success signals, and reversal.
7. Add escalation triggers, contacts, evidence package, and retained ownership.
8. Describe recovery verification, data reconciliation, backlog handling, and customer communication.
9. Test access, commands, links, permissions, dashboards, and rollback in a safe environment.
10. Run a tabletop or operator walkthrough and assign owner and review triggers.

## Boundaries

Never embed credentials, customer data, unsafe broad targets, or commands that hide failure. Do not authorize
the reader to exceed their role. Separate public status language from restricted investigation details.

## Done

- Trigger, scope, prerequisites, diagnostics, decisions, mitigations, and escalation are complete
- Commands, links, access, expected observations, and reversals have been checked
- Recovery includes user behavior, service health, data, queues, and communication evidence
- An operator walkthrough completed without unwritten expert steps
