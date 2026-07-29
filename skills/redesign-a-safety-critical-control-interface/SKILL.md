---
name: redesign-a-safety-critical-control-interface
category: design
description: Redesign a safety-critical control interface through task and hazard analysis, state visibility, authority, alarm, confirmation, accessibility, degraded operation, validation, rollout, and recovery. Use when interface error can harm people, environment, equipment, or essential service.
---
# redesign-a-safety-critical-control-interface

Make safe system state, authority, consequence, and recovery visible under pressure.

## When to use
- Use for clinical, industrial, transport, energy, emergency, infrastructure, or other consequential control.
- Activate qualified safety, human factors, domain, engineering, accessibility, security, operations, training, regulatory, and incident authority.
## Preconditions
- Define users, roles, environments, systems, tasks, hazards, automation, authority, failure modes, regulations, training, and stop conditions.
- Preserve the known-safe interface and an independently usable fallback until validation and rollout evidence pass.
## Procedure
Complete **work and hazard reconstruction**, **control and state redesign**, **human and system validation**, and **safe rollout and recovery**.
1. Build a **safety-critical interaction register** for role, task, state, control, authority, intent, consequence, evidence, hazard, barrier, alarm, and recovery.
2. Observe normal, rare, degraded, emergency, shift-change, fatigue, noise, low-connectivity, protective-equipment, and accessibility conditions.
3. Reconstruct incidents, near misses, workarounds, automation surprises, mode confusion, alarm burden, and handoff failures.
4. Define system modes, source authority, control ownership, interlocks, permissions, safe defaults, and loss-of-communication behavior.
5. Show current state, freshness, trend, uncertainty, active controller, pending command, acknowledgement, and downstream effect.
6. Distinguish actions by consequence; require appropriate confirmation, two-person control, hold, sequence, or physical separation without creating harmful delay.
7. Design alarms by actionability, priority, suppression, escalation, acknowledgement, shelving, and audit; prevent flood and silent loss.
8. Support keyboard, touch, assistive technology, color independence, language, lighting, glove use, mobility, hearing, cognition, and stress.
9. Prototype with realistic data and hardware, then simulate routine, edge, conflicting, stale, delayed, sensor-failure, automation-failure, and emergency scenarios.
10. Measure detection, comprehension, decision, action, error, recovery, workload, alarm response, and team coordination with representative users.
11. Validate software, hardware, integration, security, fail-safe, audit, training, procedures, and regulatory evidence independently.
12. Assign a monotonic control epoch to every controller session and command; before deploy, authority transfer, or rollback, fence new commands, enumerate pending and physically incomplete operations, verify plant state through authoritative sensors and field confirmation, and execute the approved safe-state sequence.
13. Require stale-epoch rejection and keep the incoming interface read-only until authority, physical state, interlocks, and command queues complete a verified handshake.
14. Rehearse in-progress command, lost acknowledgement, sensor disagreement, automation takeover, and communications failure during rollout and rollback.
15. Roll out by bounded site or role with parallel safe reference, trained support, stop authority, monitoring, rollback, and post-deployment validation.
## Failure plan
- Stop validation or rollout when the interface creates a new hazard, obscures authority, or degrades a critical journey.
- If data freshness or system mode is unknown, show uncertainty and restrict unsafe control rather than display stale certainty.
- If rollback cannot preserve current physical or clinical state, transition through an approved safe-state procedure.
## Worked example
A regional water utility redesigns a control-room interface after a mode-confusion event: stale sensor values looked current, two operators issued conflicting pump commands, alarms flooded, remote and local authority were unclear, color alone signaled contamination risk, and rollback could not blindly restore prior valve commands. The team reconstructs work and hazards, makes authority and freshness explicit, simulates failures with operators, validates interlocks, and rolls out site by site through safe-state transitions.
## Done
- A safety-critical interaction register verifies roles, tasks, states, controls, authority, consequences, hazards, barriers, alarms, evidence, and recovery
- A human-factors, accessibility, system, security, simulation, and safety validation report proves representative scenarios, interlocks, mode awareness, workload, alarm actionability, fail-safe behavior, and unresolved risk
- A rollout and recovery report includes a signed physical-state handover and demonstrates control-epoch fencing, stale-command rejection, training, bounded deployment, live monitoring, stop authority, safe-state rollback, incident readiness, regulatory evidence, and independent safety acceptance
