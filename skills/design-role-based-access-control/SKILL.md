---
name: design-role-based-access-control
category: code
description: Design role-based access control from explicit resources, actions, constraints, and ownership. Use when permissions have outgrown scattered conditionals or informal administrator conventions.
---

# design-role-based-access-control

Make authorization decisions predictable, reviewable, and enforced at every trusted entry point.

## Procedure

1. Inventory protected resources, actions, data scopes, environments, and consequential side effects.
2. Model permissions as verb-and-resource grants with explicit tenant, ownership, or state constraints.
3. Derive a small role set from stable job responsibilities, not from individual people.
4. Default to deny and define precedence for grants, restrictions, separation of duties, and emergency access.
5. Put authorization enforcement in a shared server-side decision point near the protected operation.
6. Design assignment, approval, expiry, review, transfer, and revocation workflows with named owners.
7. Produce a decision matrix covering role, action, resource relationship, condition, and expected result.
8. Test direct requests, alternate routes, bulk actions, background jobs, exports, and cross-tenant references.
9. Log consequential assignments and decisions without exposing sensitive resource data.
10. Migrate existing permissions with comparison mode, exception tracking, and a rollback point.

## Guardrails

- UI visibility is not an authorization boundary.
- Do not create one-off roles whenever a user requests a single exception.
- Never let an untrusted client choose its own role, tenant, or resource ownership.

## Done

- An approved permission model and role-assignment workflow are documented
- The decision matrix is tested across every trusted entry point
- Existing and new authorization results are reconciled before enforcement
