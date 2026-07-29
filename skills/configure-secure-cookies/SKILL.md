---
name: configure-secure-cookies
category: web
description: Configure browser cookies with narrow scope, transport protection, script isolation, and deliberate cross-site behavior. Use when a web application stores sessions, state, or preferences in cookies.
---

# configure-secure-cookies

Give each cookie the least reach and lifetime needed for its documented purpose.

## Procedure

1. Inventory cookie name, owner, value type, purpose, sensitivity, scope, and lifetime.
2. Set `Secure` for HTTPS transport and `HttpOnly` whenever scripts do not need the value.
3. Choose `SameSite=Strict`, `Lax`, or `None` from the actual cross-site flow; pair `None` with `Secure`.
4. Narrow `Path` and omit `Domain` when a host-only cookie is sufficient.
5. Prefer `__Host-` or `__Secure-` prefixes when their constraints match the design.
6. Use session or explicit `Max-Age` lifetimes and rotate authentication cookies after privilege changes.
7. Separate development configuration without weakening production defaults.
8. Test login, logout, expiry, subdomains, redirects, embedded contexts, and cross-site requests in browsers.

## Guardrails

- Cookie flags do not replace server-side authorization or CSRF defenses.
- Never store passwords, raw access tokens readable by scripts, or unnecessary personal data.
- Avoid sharing a cookie across every subdomain unless all subdomains have the same trust boundary.

## Done

- A cookie inventory records purpose, flags, scope, owner, and lifetime
- Browser tests verify expected first-party and cross-site behavior
- Session rotation and deletion are recorded and reconciled with server state
