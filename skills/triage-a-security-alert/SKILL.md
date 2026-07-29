---
name: triage-a-security-alert
category: code
description: Assess a security signal, preserve evidence, and choose a proportionate next action. Use when monitoring, a vendor, a user, or an automated detector reports suspicious identity, endpoint, network, application, or data behavior.
---

# triage-a-security-alert

Decide what is known, what could be harmed, and what must happen next. An alert is a claim to investigate, not proof of compromise or proof of safety.

## Inputs

- Raw alert, detector logic, timestamps, confidence, and source
- Asset, identity, data, environment, and business criticality
- Relevant telemetry, baselines, recent changes, and response authority
- Escalation, containment, privacy, and evidence-handling procedures

## Procedure

1. Preserve the original alert and record receipt, owner, source timezone, and any automatic actions.
2. Check alert integrity, scope, suppression state, detector health, and known duplicates.
3. Identify affected identities, assets, data, privileges, geography, and time window.
4. Enrich from authoritative logs while recording query, source, retention gap, and collection time.
5. Separate observations, benign explanations, suspicious patterns, and unsupported inference.
6. Rate potential impact and urgency using the organization's approved criteria.
7. Contain only within authority, choosing reversible steps when facts remain incomplete.
8. Escalate to incident response when thresholds or uncertainty justify it; assign next actions and evidence owners.
9. Close only with a documented explanation, corroborating evidence, and any detection or control follow-up.
10. Review false-positive, missed-signal, and telemetry-gap lessons without weakening coverage blindly.

## Guardrails

- Do not contact a suspected actor or alter a device before considering evidence loss and safety.
- Do not upload sensitive telemetry to unapproved analysis tools.
- Absence of one log event is not proof that an action did not occur.
- Keep employee, customer, and sensitive investigation details need-to-know.

## Done

- Alert provenance, scope, impact, and confidence are recorded
- Containment and escalation decisions name authority and evidence
- Open hypotheses and telemetry gaps have owners
- Closure is reproducible from the retained case record
