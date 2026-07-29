---
name: design-a-disaster-recovery-plan
category: code
description: Design a recovery system for severe service, region, infrastructure, dependency, or data loss with explicit objectives and authority. Use when a production system needs tested disaster recovery beyond ordinary rollback or incident mitigation.
---

# design-a-disaster-recovery-plan

Design recovery for user-critical capabilities and trustworthy data, not merely restarted infrastructure.

## When to use

- Use for failures that can exceed normal high-availability, rollback, or on-call procedures.
- Include regional loss, control-plane loss, destructive credentials, corrupted data, and critical dependency failure.
- Use a narrower runbook when one known component can be restored without cross-system coordination.

## Preconditions

- Identify business owners, incident and recovery authority, legal obligations, and acceptable risk.
- Gather architecture, data flows, dependencies, backups, infrastructure, access paths, and prior exercises.
- Define recovery time and recovery point objectives per critical capability, with their evidence and limitations.

## Procedure

1. Rank user capabilities, data, and obligations by maximum tolerable disruption.
2. Map failure domains, shared dependencies, trust boundaries, control planes, and hidden single points.
3. Define recovery tiers, activation triggers, command roles, communication, and decision rights.
4. Design protected backups, replicas, immutable artifacts, infrastructure definitions, secrets recovery, and break-glass access.
5. Specify restoration order from identity, network, data, and control systems through user journeys.
6. Handle data currency, partial writes, queues, external effects, reconciliation, and re-entry to normal operation.
7. Define degraded modes and manual alternatives with capacity and safety limits.
8. Create executable runbooks, required inventories, validation queries, and customer communication inputs.
9. Run table-top, component restore, and production-shaped failover exercises within safe bounds.
10. Compare observed recovery with objectives and fund corrective work.

## Failure plan

- Stop an exercise if isolation, data protection, traffic control, access, or rollback cannot be proven.
- Keep the primary system authoritative until an approved cutover point; prevent split-brain writes.
- Preserve evidence and assign an incident owner when rehearsal exposes an actual production weakness.
- If recovery exceeds objectives, communicate the observed limit and escalate the residual risk rather than changing the target.

## Done

- A reviewed recovery architecture maps critical capabilities, failure domains, data, dependencies, and restoration order
- A tabletop record captures decisions, missing authority, communication, and corrective owners
- A production-shaped recovery rehearsal has verified access, restore, failover, reconciliation, and user journeys
- Observed time and data loss are compared with objectives, and residual risk has an accountable owner
