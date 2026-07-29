---
name: redesign-a-multitenant-authorization-system
category: code
description: Redesign multitenant authorization through identity, tenant and resource boundaries, policy semantics, migration, revocation, audit, abuse testing, rollback, and verified isolation. Use when existing access rules are inconsistent, unsafe, or unable to support new organization models.
---

# redesign-a-multitenant-authorization-system

Every decision must bind actor, tenant, resource, action, context, policy version, and evidence.

## When to use

- Use for organization accounts, delegated administration, shared resources, service identities, cross-tenant collaboration, or authorization-model replacement.
- Activate qualified security, identity, privacy, legal, data, product, support, accessibility, and platform authority.

## Preconditions

- Define actors, tenants, resources, actions, ownership, delegation, invitations, service identities, support access, residency, high-risk powers, and revocation objectives.
- Establish deny and containment authority, protected test tenants, audit requirements, migration inventory, and rollback boundaries.
- Treat authentication, tenant selection, authorization, capability elevation, and data filtering as separate controls.

## Procedure

Complete **current authority reconstruction**, **target policy and isolation design**, **safe migration and enforcement**, and **abuse and recovery verification**.

1. Build an **authorization decision register** for actor, identity, tenant, membership, role, resource, relationship, action, condition, policy version, result, reason, and evidence.
2. Inventory every enforcement point across APIs, jobs, queues, search, exports, caches, analytics, files, support, admin, webhooks, integrations, and direct data access.
3. Reconstruct implicit authority from code, data filters, group sync, invitations, ownership, inherited roles, support tools, and operational exceptions.
4. Define target policy semantics, default deny, tenant binding, resource hierarchy, relationship, role, condition, delegation, expiry, separation of duties, and emergency access.
5. Assign stable tenant, actor, resource, relationship, and policy identities; prevent user-controlled context from selecting authority.
6. Centralize decision semantics while keeping enforcement local enough to fail safely; include policy version and tenant in caches and tokens.
7. Design revocation propagation for sessions, tokens, caches, jobs, exports, subscriptions, webhooks, search indexes, and long-running work.
8. Give each deferred job, queue item, subscription, and export a nontransferable authorization envelope containing actor, run-as identity, tenant, resource scope, action, context, policy version, creation time, expiry, and revocation handle.
9. Reauthorize at enqueue, execution, privilege-expanding checkpoints, artifact finalization, and delivery; quarantine partial results after revocation until authorized disposition.
10. Create machine-checkable policy tests from real current grants, expected denials, edge cases, and abuse cases.
11. Migrate in shadow mode, compare old and new decisions, classify discrepancy, and require owner acceptance for intentional change.
12. Enforce bounded cohorts with immediate deny, rollback, audit, and customer-support routes; do not dual-authorize by allowing either system.
13. Test cross-tenant identifiers, confused deputy, stale membership, ownership transfer, role escalation, invitation reuse, service identity, batch, cache, export, support impersonation, group removal, tenant exit, support expiry, and policy rollback during deferred work.
14. Verify logs support decision reconstruction without exposing sensitive resource contents.
15. Monitor false allow, false deny, latency, stale policy, revocation time, exception expiry, appeals, and tenant-isolation incidents.
16. Retire old grants and enforcement only after every surface and retained token path is proven.

## Failure plan

- If tenant context or resource ownership is ambiguous, deny and route to authorized resolution.
- If new and old decisions conflict, do not choose the more permissive result automatically.
- If revocation cannot reach a surface within objective, quarantine its high-risk capabilities.
- If audit cannot explain a consequential decision, stop migration of that surface.

## Worked example

A SaaS platform replaces inconsistent role checks while enterprise groups sync externally, users belong to several tenants, projects can be shared, support can impersonate, jobs and exports outlive sessions, caches omit tenant identity, and a prior bug exposed search results across customers. The redesign reconstructs every authority path, binds decisions to tenant and policy version, shadow-compares policy, quarantines stale capability, and proves isolation plus revocation.

## Done

- An authorization decision register verifies actors, tenants, resources, relationships, actions, policy versions, outcomes, reasons, owners, and exceptions
- An enforcement, migration, and isolation report proves API, job, queue, search, export, cache, integration, admin, service-identity, and direct-data controls with discrepancy disposition
- An abuse, revocation, rollback, and recovery report demonstrates cross-tenant denial, deferred-work authorization leases, nondeliverable revoked artifacts, stale-capability quarantine, bounded enforcement, decision audit, exception expiry, false-deny support, and independent acceptance
