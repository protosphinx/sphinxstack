---
name: design-multitenant-authorization
category: code
description: Design multitenant authorization with explicit isolation invariants, centralized decisions, adversarial testing, and recoverable administration. Use when one application serves organizations whose identities, data, and authority must never cross.
---

# design-multitenant-authorization

Tenant isolation is a system invariant, not a filter added to ordinary role checks. Prove that every path derives and enforces the same trusted boundary.

## When to use

- Use when a shared application, API, worker, cache, search index, file store, or analytics system handles more than one customer organization.
- Use ordinary role-based access control only when all protected resources and actors live inside one trust domain.

## Preconditions

- Identify the legal and product meaning of a tenant, all identity issuers, administrative support powers, shared infrastructure, and data residency constraints.
- Gather routes, jobs, queries, storage keys, caches, exports, logs, search, support tools, and existing authorization failures.
- Obtain security, product, data, operations, and tenant-administration owners who can approve isolation and recovery behavior.

## Procedure

1. Write a **tenant boundary model** that names tenant identifiers, membership sources, resource ownership, shared objects, allowed collaboration, and forbidden crossings.
2. Define isolation invariants for reads, writes, references, enumeration, search, files, caches, events, logs, analytics, and deletion.
3. Derive tenant context from authenticated server-side membership or trusted workload identity, never from an unverified request field alone.
4. Establish one **authorization decision point** contract for subject, tenant, resource, action, relationship, conditions, policy version, decision, and reason.
5. Enforce that decision at every server, job, event consumer, export, administration, and storage access boundary.
6. Make tenant ownership part of keys, uniqueness, queries, cache namespaces, object paths, search filters, and database constraints where possible.
7. Design support access, tenant impersonation, delegated administration, break-glass approval, time limits, notices, and immutable audit evidence.
8. Build a **cross-tenant test matrix** for direct IDs, bulk operations, pagination, search, caches, signed URLs, imports, exports, jobs, races, and deleted memberships.
9. Run differential tests across two or more synthetic tenants and inject malicious references at every boundary.
10. Stage migration with shadow decisions, mismatch review, exception expiry, rollback, and isolation monitoring.
11. Rehearse **administrative recovery** for a locked-out tenant without weakening identity proof, separation of duties, or tenant isolation.
12. Publish the authorization architecture record and evidence required for launch approval.

## Failure plan

- If a cross-tenant read or write is observed, stop the affected path, preserve evidence, revoke exposed links or sessions, and follow the incident process.
- If tenant context is missing or conflicting, deny the action and surface an owned diagnostic rather than selecting a default tenant.
- If a new path cannot call the decision point, keep it disabled until an equivalent reviewed enforcement boundary exists.
- Roll back policy enforcement only to a version known to preserve the same isolation invariants.
- Never repair tenant access by directly changing identifiers or granting broad support access without authorized evidence.

## Worked example

A collaboration platform is moving from one database per customer to a shared regional database. The team writes invariants for documents, search, exports, caches, webhooks, and support impersonation. Every resource key includes tenant ownership, and a shared policy service evaluates actor membership plus resource tenant before repository access. Shadow decisions expose one export path that trusted a request tenant; launch pauses until it is repaired. A two-tenant adversarial suite verifies direct IDs, pagination, signed downloads, background jobs, and cache reuse. Finally, support rehearses recovery for a customer whose only administrator left, using two-person approval and a time-limited audited grant.

## Done

- An approved authorization architecture record contains the tenant boundary model, isolation invariants, decision-point contract, and administrative recovery
- An isolation test report verifies the cross-tenant test matrix across interactive, asynchronous, storage, and support paths
- An abuse and recovery rehearsal records containment, locked-out-tenant recovery, rollback, and evidence review
