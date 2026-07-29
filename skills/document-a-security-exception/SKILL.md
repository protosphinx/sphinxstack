---
name: document-a-security-exception
category: write
description: Document a time-bounded departure from a security requirement with accountable risk ownership. Use when a control cannot be met immediately and a formal exception or compensating-control decision is required.
---

# document-a-security-exception

Make the deviation, exposure, and exit path explicit. An exception records a governed decision; it does not turn a missing control into compliance.

## Procedure

1. Identify the exact requirement, asset, environment, data, users, and proposed exception period.
2. Explain the operational reason and alternatives considered without overstating impossibility.
3. Describe threat, plausible misuse, existing weakness, affected outcomes, and exposure duration.
4. Attach current evidence and distinguish facts, estimates, assumptions, and unknowns.
5. Define compensating controls with owner, enforcement point, monitoring, and test evidence.
6. State residual risk after compensation and who has authority to accept it.
7. Create remediation milestones, dependencies, funding, target date, and objective closure evidence.
8. Define automatic expiry, review triggers, breach conditions, and immediate revocation authority.
9. Obtain required security, system, data, business, and risk approvals.
10. Track the exception through closure, replacement, or renewed assessment; never roll it forward silently.

## Guardrails

- Do not include exploitable secrets or unnecessary personal data.
- Avoid vague scope such as “legacy systems”; enumerate the enforcement boundary.
- A compensating control must be active and tested, not merely planned.
- Stop if the requester and risk acceptor lack authority or a non-exceptionable rule applies.

## Done

- Requirement, scope, rationale, exposure, and evidence are specific
- Compensating controls are operating and verified
- Residual risk has named acceptance authority
- Expiry, remediation, monitoring, and closure are enforceable
