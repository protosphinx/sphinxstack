---
name: define-alert-severity
category: code
description: Define alert severity from user impact, urgency, scope, reversibility, and required authority. Use when operational notifications need consistent routing and response expectations.
---

# define-alert-severity

Severity describes the needed response to current or imminent harm, not how unusual a graph looks.

## Procedure

1. Define the protected service outcome and the people or systems affected.
2. Score impact by scope, criticality, data risk, safety, financial harm, and reversibility.
3. Score urgency by time to harm, growth rate, workaround, and recovery window.
4. Map combinations to a small severity scale with concrete examples.
5. Define responder, paging, acknowledgment, escalation, communication, and incident-command expectations.
6. Specify downgrade, upgrade, merge, and closure authority.
7. Test historical and synthetic events against the scale.
8. Publish a severity decision table and review disagreements after incidents.

## Guardrails

- Do not set severity from error count alone.
- Avoid making every security or executive-visible issue automatically highest severity.
- Keep priority, customer tier, and severity distinct unless policy explicitly combines them.

## Done

- A severity decision table and routing plan are approved
- Historical scenarios are tested for consistent classification
- Escalation and closure decisions are recorded and reviewed
