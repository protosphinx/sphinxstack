---
name: design-an-access-review
category: code
description: Design a repeatable review of user, service, and privileged access. Use when entitlement sprawl, role changes, audit needs, or sensitive systems require owners to verify continuing need and remove excess access.
---

# design-an-access-review

Create a review that changes access safely. A spreadsheet of names is not sufficient unless it is reconciled to authoritative identities and actual enforcement points.

## Inputs

- In-scope systems, roles, groups, service identities, privileges, and data sensitivity
- Identity source, HR or contractor status, ownership, and joiner-mover-leaver events
- Role model, access policy, exception process, and prior review findings
- Export timestamps and evidence from the systems that enforce access

## Procedure

1. Define scope, risk tiers, review date, reviewers, decision authority, and completion threshold.
2. Extract identities and entitlements from each enforcement point with provenance.
3. Reconcile people and services to authoritative status, owner, role, and business need.
4. Flag orphaned, dormant, duplicate, shared, inherited, conflicting, external, and privileged access.
5. Route decisions to resource and data owners who understand the access, not only line managers.
6. Require keep, modify, revoke, investigate, or exception outcomes with rationale and expiry.
7. Perform high-risk removals through a controlled change with fallback for operational lockout.
8. Re-export access and reconcile every decision against observed state.
9. Escalate nonresponse, ambiguous ownership, toxic combinations, and unremovable access.
10. Measure recurrence and feed root causes into role design and lifecycle automation.

## Guardrails

- Do not expose unnecessary personal or security-sensitive detail in broad review files.
- Do not treat group membership as effective access until inheritance and downstream sync are checked.
- Preserve emergency and service continuity through explicit, tested alternatives.
- A manager attestation is not evidence that technical removal occurred.

## Done

- Population and entitlement completeness are reconciled
- Every decision has an accountable reviewer and rationale
- Revocations and changes are verified at enforcement points
- Exceptions, failures, and recurrence actions remain tracked
