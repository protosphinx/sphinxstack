---
name: conduct-an-access-offboarding-review
category: code
description: Verify that access is removed or transferred when a person or vendor leaves a role. Use when offboarding spans identity, devices, applications, shared assets, secrets, facilities, automations, and evidence retention.
---

# conduct-an-access-offboarding-review

Verify effective access, not just closure of an HR or ticketing task. Preserve business records and continuity without preserving unnecessary access.

## Inputs

- Authoritative identity, role, end time, manager, employment or contract status, and approved exceptions
- Identity providers, devices, applications, cloud accounts, facilities, repositories, vendors, and shared resources
- Ownership-transfer, evidence-preservation, privacy, and investigation requirements

## Procedure

1. Confirm authority, exact effective time, urgency, confidentiality, scope, and responsible coordinator.
2. Build an identity map across aliases, federation, local accounts, privileged roles, tokens, keys, devices, badges, and vendor portals.
3. Inventory owned files, queues, automations, domains, billing, code, approvals, and operational knowledge needing transfer.
4. Preserve authorized business or investigation evidence before destructive actions.
5. Disable interactive access, sessions, recovery methods, physical entry, privileged elevation, and remote management at the required time.
6. Rotate shared or exposed secrets only where the departing party knew or could retrieve them.
7. Transfer ownership through named recipients and verify critical workflows still operate.
8. Re-export access from enforcement points and test that former identities cannot authenticate or authorize.
9. Investigate orphaned resources, delayed directory sync, unmanaged devices, unknown accounts, and active automation.
10. Record exceptions with owner and expiry, complete asset recovery, and schedule a follow-up reconciliation.

## Guardrails

- Do not delete records or personal files without approved retention and ownership decisions.
- Keep sensitive departure reasons need-to-know.
- Do not lock out critical services before transferring control and testing fallback.
- Ticket completion or identity-provider disablement alone does not prove downstream removal.

## Done

- Identities, sessions, devices, physical access, and secrets are reconciled
- Effective removal is verified at relevant enforcement points
- Critical ownership and automation are transferred
- Exceptions, evidence, and follow-up checks remain tracked
