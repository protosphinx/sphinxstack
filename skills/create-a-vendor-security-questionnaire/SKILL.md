---
name: create-a-vendor-security-questionnaire
category: data
description: Create a risk-based vendor security questionnaire with evidence requests. Use when procurement or a renewal needs focused assurance about a vendor's actual service, data access, controls, resilience, and incident obligations.
---

# create-a-vendor-security-questionnaire

Ask fewer, sharper questions tied to the proposed use. A generic checklist invites polished claims that do not resolve the decision.

## Procedure

1. Define service, data, users, integrations, privilege, hosting, geography, criticality, and proposed contract term.
2. List plausible failure and misuse scenarios that would change the purchase decision.
3. Map those scenarios to control domains such as identity, encryption, development, tenancy, logging, response, recovery, deletion, personnel, and subprocessors.
4. Write one answerable question per decision, stating scope and relevant environment.
5. Request current evidence: dated reports, test extracts, diagrams, configurations, exercise results, metrics, or contractual commitments.
6. Distinguish certification coverage from the exact product, region, period, and control being assessed.
7. Add conditional follow-ups for exceptions, inherited controls, shared responsibility, and planned remediation.
8. Define response choices, evidence status, severity, owner, and disposition before sending.
9. Have security, privacy, legal, accessibility, finance, and operational owners review only their relevant domains.
10. Pilot the questionnaire on the known facts and remove duplication or questions that cannot affect a decision.

## Guardrails

- Do not request secrets, exploit details, unnecessary employee data, or unrestricted penetration-test reports.
- Treat self-attestation and roadmap promises as claims, not operating evidence.
- A questionnaire does not replace architecture review, contract review, or testing where risk requires them.
- Protect vendor confidential evidence under the approved access and retention process.

## Done

- Every question maps to a scoped risk or decision
- Evidence expectations and follow-ups are explicit
- Review ownership and scoring rules exist before responses arrive
- Sensitive evidence handling and retention are defined
