---
name: prevent-cross-site-request-forgery
category: web
description: Prevent cross-site request forgery with deliberate cookie behavior, request tokens, and origin verification. Use when browser credentials are attached automatically to state-changing requests.
---

# prevent-cross-site-request-forgery

Require evidence that a consequential browser request originated from an authorized application context.

## Procedure

1. Inventory every state-changing route, including login, logout, uploads, GraphQL mutations, and legacy forms.
2. Identify which credentials browsers attach automatically and which flows must operate cross-site.
3. Set the strictest workable `SameSite` cookie policy as one defense layer.
4. Add a proven synchronizer-token or signed double-submit pattern to applicable requests.
5. Validate `Origin` and, where appropriate, `Referer` against an exact allowlist on the trusted server.
6. Keep safe methods free of side effects and reject simple-content-type workarounds where feasible.
7. Treat CORS as a browser read policy, not as a replacement for CSRF protection.
8. Cover subdomains, redirects, embedded frames, login CSRF, and session transitions in the design.
9. Test missing, stale, cross-session, attacker-supplied, and duplicated tokens in real browser flows.
10. Monitor rejections without recording token values.

## Guardrails

- Never put a CSRF token in a URL or a broadly shared cache key.
- XSS can bypass many CSRF controls, so both classes require independent prevention.
- Do not exempt a route merely because its request body is JSON.

## Done

- A route inventory maps each state change to its CSRF controls
- Browser tests verify legitimate and hostile cross-site flows
- Rejection logs are recorded and reconciled without exposing tokens
