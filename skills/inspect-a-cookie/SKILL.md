---
name: inspect-a-cookie
category: web
description: Inspect a web cookie's purpose, scope, attributes, lifetime, consent, transport, and server behavior. Use when debugging sessions, privacy choices, cross-site flows, or unexpected persistence.
---

# inspect-a-cookie

Inspect values only when authorized and redact secrets.

## When to use

- Use for session, preference, experiment, analytics, security, or integration cookies.
- Do not copy authentication tokens, identifiers, or personal values into screenshots, reports, or chat.

## Procedure

1. Record site, environment, browser, user state, action, time, and expected purpose.
2. Capture name and redacted value presence plus domain, path, expiry, SameSite, Secure, HttpOnly, and partitioning.
3. Trace the Set-Cookie response, redirects, proxy behavior, and subsequent Cookie requests.
4. Check host-only versus domain scope, path reach, expiration, rotation, deletion, and size.
5. Verify cross-site behavior and whether Secure and SameSite match the intended flow.
6. Compare purpose and consent category with the actual creation trigger.
7. Test logout, revocation, preference withdrawal, and browser restart.
8. Save a redacted cookie behavior report.

## Done

- A cookie report records purpose, trigger, scope, attributes, lifetime, consent, and request-response behavior
- Tests verify creation, sending, rotation, deletion, logout, and withdrawal without exposing the value
