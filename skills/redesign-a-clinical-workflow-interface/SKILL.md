---
name: redesign-a-clinical-workflow-interface
category: design
description: Redesign a clinical workflow interface through observed care practice, hazard analysis, human-factors validation, controlled migration, and rehearsed downtime recovery. Use when interface changes can affect diagnosis, medication, treatment, documentation, or patient safety.
---

# redesign-a-clinical-workflow-interface

Optimize the care system without separating the screen from its clinical consequences.

## When to use

- Use for clinician-facing ordering, administration, review, handoff, monitoring, scheduling, or documentation workflows with material patient risk.
- Use a standard interface redesign when wrong, delayed, or missing interaction cannot affect clinical care or regulated records.

## Preconditions

- Establish clinical, patient-safety, nursing, pharmacy, medical, human-factors, accessibility, privacy, security, quality, regulatory, informatics, engineering, support, and operational authority appropriate to the setting.
- Preserve current workflows, policies, order sets, alert rules, terminology, roles, overrides, incidents, near misses, complaints, audit logs, integrations, downtime forms, training, and performance evidence.
- Define patient populations, care settings, devices, network conditions, legal record, release authority, safety stop conditions, and who can accept residual clinical risk.

## Procedure

1. Build a **clinical workflow and hazard analysis** from direct observation, interviews, logs, incident evidence, and policy across normal, urgent, interrupted, handoff, remote, and downtime care.
2. Map each user, role, patient, task, data source, device, location, trigger, decision, communication, order, confirmation, override, delay, and downstream recipient.
3. Separate prescribed workflow from actual adaptations and determine which workarounds protect care versus create hidden risk.
4. Create a hazard register covering wrong patient, wrong medication or treatment, dose or unit, timing, omission, duplicate, stale data, hidden status, alert fatigue, interruption, handoff, permission, integration, and recovery failures.
5. Link severity, likelihood, detectability, affected population, cause, existing control, proposed control, verification, residual risk, and accountable clinical owner.
6. Define **safety controls and human factors** for patient identity, critical context, terminology, defaults, units, sequence, calculation, comparison, alerts, confirmation, cancellation, undo, escalation, and audit.
7. Minimize memory burden and mode errors. Give an uncertain integration outcome an explicit owned indeterminate state with stable order identity, block blind retry, and require authoritative reconciliation before further mutation.
8. Preserve keyboard, screen-reader, zoom, contrast, motor, language, fatigue, low-light, infection-control, mobile, and shared-workstation needs.
9. Prototype full scenarios with production-shaped data, integrations, interruptions, latency, alarms, concurrent updates, and downstream effects without exposing real patient data unnecessarily.
10. Conduct formative then summative simulated-use testing with representative authorized clinicians and realistic critical tasks. Capture close calls, recovery, workload, time, comprehension, and unsafe use patterns.
11. Verify clinical calculations, terminology, order semantics, decision support, permissions, audit, record integrity, interface-engine messages, and downstream display independently of visual acceptance.
12. Plan **phased validation and migration** by site, unit, role, patient risk, and workflow. Version training, configuration, order sets, support, hardware, and compatibility with old and new clients.
13. Rehearse **downtime and recovery** for network, device, integration, identity, data, deploy, rollback, and regional failure, including reconciliation of orders and documentation created during disruption.
14. Release through trained internal, simulation, shadow, low-risk, and bounded clinical waves with safety monitoring and empowered stop authority.
15. Monitor care delays, overrides, duplicates, omissions, wrong-patient corrections, alert response, support, accessibility, near misses, incidents, downtime, and workarounds by site and role.
16. Retire old behavior only after outstanding sessions, training, devices, integrations, records, support paths, and safety cases have verified dispositions.

## Failure plan

- If a design creates or conceals a credible severe hazard, stop affected use and restore the last verified workflow or approved downtime process.
- If rollback would lose or duplicate orders, medication administration, results, or legal documentation, preserve the authoritative clinical state and roll back only compatible layers.
- If simulation coverage excludes a material role, site, device, accessibility need, or emergency path, hold that cohort.
- If monitoring cannot distinguish patient harm signals, stop expansion until the safety signal is restored.

## Worked example

A hospital redesigns medication ordering and administration across emergency, inpatient, pharmacy, and nursing workflows. The current interface causes alert fatigue, unit confusion, duplicate orders, and hidden pending states, but local workarounds sometimes prevent harm. The team observes real practice, maps hazards and adaptations, designs patient and medication identity controls, validates full scenarios with representative clinicians and integrations, canaries low-risk units, and rehearses downtime plus order reconciliation before retiring any legacy workflow.

## Done

- A clinical workflow and hazard register records users, care contexts, tasks, data, workarounds, hazards, controls, verification, residual risk, and clinical authority
- A simulated-use and safety validation report proves critical tasks, human factors, accessibility, calculations, integrations, audit, workload, recovery, and residual limitations
- A cutover, downtime, and recovery rehearsal verifies phased validation and migration, training, compatibility, clinical-state reconciliation, stop authority, monitoring, rollback, and retirement gates
