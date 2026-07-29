---
name: design-a-data-access-review
category: data
description: Design a recurring data-access review that verifies identity, purpose, scope, sensitivity, privilege, activity, ownership, and removal. Use when governing who can query, export, administer, or share datasets and platforms.
---

# design-a-data-access-review

Review effective access, not only group membership.

## When to use

- Use for warehouses, lakes, dashboards, research environments, shared drives, vendors, and service accounts.
- Do not send sensitive row samples to reviewers who lack access.

## Procedure

1. Inventory systems, datasets, sensitivity, roles, groups, policies, direct grants, shares, tokens, service accounts, and external identities.
2. Define accountable data owners, platform owners, reviewers, cadence, risk tiers, and escalation.
3. Resolve effective access through nested groups, inherited roles, row or column policies, impersonation, break-glass, and downstream exports.
4. Link identities to current employment, contract, team, purpose, training, jurisdiction, and approval.
5. Provide reviewers minimal metadata: identity, role, scope, last use, grant source, expiry, and decision options.
6. Require explicit retain, reduce, remove, investigate, or expire decisions with rationale.
7. Execute revocations through controlled workflows and verify tokens, sessions, caches, shares, and downstream copies where relevant.
8. Reconcile completion, overdue decisions, orphan owners, dormant access, exceptions, and regrant patterns.

## Done

- An access-review plan and decision register record systems, effective grants, identity, purpose, use, owner, reviewer, decision, expiry, and evidence
- Nested-group, direct-grant, service-account, dormancy, revocation, token, exception, and regrant checks verify least privilege
