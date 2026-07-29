---
name: design-a-web-access-control-review
category: web
description: Design a web access control review across identities, sessions, roles, objects, actions, tenants, APIs, caches, jobs, exports, and revocation. Use when authorization coverage must be proven across a web product.
---
# design-a-web-access-control-review
## When to use
- Use before release, after an authorization incident, during audit, or when roles, tenants, sharing, APIs, or background work change.
- Do not infer server authorization from hidden buttons or successful login.
## Procedure
1. Define applications, origins, APIs, identities, tenants, resources, actions, environments, and test constraints.
2. Build an authorization matrix from policy, ownership, roles, relationships, lifecycle states, and explicit deny rules.
3. Map enforcement at routing, handler, service, database, object storage, cache, queue, export, search, websocket, and admin layers.
4. Generate positive, negative, cross-tenant, horizontal, vertical, stale-session, revoked, deleted, and bulk-operation cases.
5. Test direct identifiers, alternate encodings, nested objects, pagination, previews, downloads, retries, async jobs, and shared links.
6. Review decision logs, tenant context, cache keys, token claims, support actions, break-glass use, and revocation latency.
7. Record reproducible findings, affected populations, exploitability, containment, fixes, regression tests, and residual gaps.
## Failure plan
- Stop unsafe testing, preserve evidence, and contain access when a case could expose or alter real user data.
## Worked example
A SaaS review catches an export job that reuses the requester’s old role after access has been revoked.
## Done
- A web access control review design records scope, policy matrix, enforcement map, cases, logs, findings, fixes, and residual risk
- Positive, negative, cross-tenant, stale, revoked, cache, async, export, and regression evidence verifies control coverage
