---
name: implement-http-security-headers
category: web
description: Implement HTTP security headers from an application threat model, route inventory, browser behavior, and staged enforcement evidence. Use when hardening a website or web application against framing, type confusion, leakage, downgrade, or unsafe browser capabilities.
---

# implement-http-security-headers

Apply headers at the response layer that owns each route and content type.

## When to use

- Use for production web applications, static sites, APIs serving browsers, and embedded content.
- Do not copy a generic header set without testing required integrations and route behavior.

## Procedure

1. Inventory origins, routes, content types, frames, scripts, styles, media, downloads, cross-origin calls, and browser capabilities.
2. Define threats and compatibility needs for transport, framing, MIME handling, referrers, permissions, isolation, and cross-origin resources.
3. Configure HSTS only after HTTPS coverage, subdomain ownership, redirects, certificate operations, and recovery are proven.
4. Set content-type, frame, referrer, permissions, and cross-origin policies at the narrowest correct scope.
5. Coordinate framing rules with Content Security Policy and explicitly authorized embedders.
6. Stage report-only or monitoring where available and classify violations by route, browser, dependency, and user impact.
7. Test authenticated, anonymous, download, error, redirect, API, embed, and legacy-browser responses.
8. Roll out by environment and route, monitor, document exceptions with expiry, and verify at the public edge.

## Done

- A security-header control matrix records threat, route, value, owner, exception, browser support, rollout, and recovery
- Automated response, browser journey, embed, download, edge, and regression tests verify enforced headers without breaking required behavior
