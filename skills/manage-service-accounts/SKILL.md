---
name: manage-service-accounts
category: code
description: Manage nonhuman identities through explicit ownership, least privilege, short-lived credentials, review, and retirement. Use when applications, automations, or infrastructure need machine-to-machine access.
---

# manage-service-accounts

Give every machine identity one attributable purpose, bounded authority, and a tested end-of-life path.

## Procedure

1. Inventory each service account, workload, environment, owner, approver, dependency, and current use.
2. Use a dedicated nonhuman identity rather than a shared human account.
3. Grant the smallest resource, action, environment, network, and time scope that performs the workload.
4. Prefer workload identity or short-lived federation over stored static secrets.
5. Store unavoidable credentials in a managed secret system and never in source, images, tickets, or chat.
6. Define issuance, rotation, overlap, revocation, break-glass, and dependency-recovery procedures.
7. Log authentication and consequential actions with the service, workload, and deployment identity.
8. Review privilege, activity, ownership, and unused accounts on a risk-based schedule.
9. Disable orphaned or dormant accounts through a staged process with rollback.
10. Test credential expiry, rotation, revoked access, owner absence, and workload recovery.

## Guardrails

- Never exempt service accounts from MFA-equivalent workload assurance merely because no person logs in.
- A human owner must remain accountable even when credentials rotate automatically.
- Do not reuse one identity across development, staging, and production.

## Done

- A service-account inventory report records purpose, owner, scope, credential type, and review date
- Rotation, revocation, expiry, and recovery tests are verified
- Active credentials and observed use reconcile with approved accounts and workloads
