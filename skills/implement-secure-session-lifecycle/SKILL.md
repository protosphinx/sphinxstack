---
name: implement-secure-session-lifecycle
category: web
description: Implement secure web sessions across creation, rotation, expiration, revocation, recovery, and distributed enforcement. Use when an application must protect authenticated browser state beyond the initial login.
---

# implement-secure-session-lifecycle

Treat every session as a revocable authorization grant.

## When to use

- Use for account systems, privilege changes, shared-device risk, long-lived sessions, or inconsistent logout behavior.
- Use a framework's maintained session primitive where possible, but verify its actual lifecycle.

## Procedure

1. Model session types, principals, assurance, privileges, devices, tenants, idle and absolute lifetime, and revocation events.
2. Generate high-entropy opaque identifiers and keep authoritative state server-side or use short-lived, purpose-bound tokens with an explicit revocation design.
3. Set cookies with `Secure`, `HttpOnly`, appropriate `SameSite`, minimal `Path`, host-only scope where possible, and no sensitive payload.
4. Rotate the session identifier after authentication, recovery, privilege elevation, tenant change, and suspicious state to prevent fixation.
5. Enforce idle and absolute expiration server-side using a trustworthy clock. Define safe refresh behavior and race handling.
6. Protect state-changing requests against CSRF and recheck authorization from current server-side policy.
7. Support per-session and all-session revocation for logout, password reset, account disablement, administrator action, compromise, and deletion.
8. Reconcile revocation across regions, caches, WebSockets, API tokens, background work, and device lists.
9. Rotate signing or encryption keys with overlap only for the documented verification window.
10. Test fixation, replay, theft, logout, concurrent tabs, clock edges, distributed lag, recovery, role reduction, and shared devices. Log identifiers only in hashed or otherwise non-reusable form.

## Failure plan

- Fail closed for a revoked, malformed, expired, unknown, or ambiguously scoped session.
- If distributed revocation is delayed, block sensitive actions against authoritative state and expose the lag operationally.
- Do not make logout depend only on deleting a browser cookie.

## Done

- A session lifecycle specification records states, cookie controls, rotations, expiry, revocation events, and distributed dependencies
- Security tests prove fixation resistance, current authorization, CSRF protection, expiration, and server-side revocation
- An operating report verifies recovery, key rotation, monitoring, and rejection of revoked sessions across regions
