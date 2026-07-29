---
name: implement-content-security-policy
category: web
description: Implement a staged Content Security Policy from an evidence-based resource inventory, with enforceable directives and safe rollout controls. Use when reducing script, framing, injection, or data-exfiltration risk in a web application.
---

# implement-content-security-policy

Build the policy from required behavior, not copied allowlists.

## When to use

- Use for a new policy, a report-only policy ready for enforcement, or a policy weakened by third-party additions.
- Fix injection flaws independently; CSP is defense in depth, not permission to render unsafe input.

## Procedure

1. Inventory first-party and third-party scripts, styles, images, fonts, frames, workers, forms, media, manifests, and network destinations by route and user state.
2. Remove obsolete dependencies and inline code before granting sources.
3. Establish `default-src 'none'`, then add the narrowest required directives for each resource class.
4. Prefer per-response nonces or stable hashes for required inline code. Do not add `unsafe-inline` or broad wildcards to silence violations.
5. Constrain navigation and embedding with `base-uri`, `object-src`, `frame-ancestors`, `form-action`, and relevant sandbox or permission controls.
6. Evaluate `strict-dynamic`, Trusted Types, upgrade controls, and reporting against browser support and application architecture.
7. Deploy report-only to controlled users. Sample and redact reports so URLs or user data do not become a new privacy leak.
8. Classify violations as required behavior, blocked attack, extension noise, browser variance, or application defect.
9. Add automated header, nonce, route, browser, third-party failure, and injection tests.
10. Enforce by route or traffic wave with violation, conversion, error, and support monitoring. Keep a versioned rollback that restores the last safe policy rather than removing CSP.

## Failure plan

- If a vendor needs a broad source, isolate or replace it before widening the whole application.
- If enforcement breaks a critical route, revert to the last safe policy while preserving report evidence and fixing the missing dependency.
- Never include secrets, full query strings, or personal data in violation telemetry.

## Done

- A CSP inventory maps every allowed source and directive to an owner and required behavior
- Browser and injection tests prove required resources work and unauthorized script, frame, form, and connection paths are blocked
- A staged enforcement record captures violations, exceptions, monitoring, policy version, and safe rollback
