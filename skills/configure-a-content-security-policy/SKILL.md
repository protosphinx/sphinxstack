---
name: configure-a-content-security-policy
category: web
description: Configure a deployable Content Security Policy from measured resource needs and staged violation evidence. Use when a web application needs browser-enforced script, framing, and content boundaries.
---

# configure-a-content-security-policy

Build the policy from actual application dependencies, then remove unsafe execution paths before enforcement.

## Procedure

1. Inventory scripts, styles, images, fonts, frames, connections, workers, media, forms, and navigation targets.
2. Start with `default-src 'none'` and add the narrow sources each resource type truly needs.
3. Use per-response nonces or stable hashes for approved scripts and remove inline handlers and dynamic evaluation.
4. Set `object-src 'none'`, a restrictive `base-uri`, `frame-ancestors`, and `form-action`.
5. Decide whether `strict-dynamic`, Trusted Types, mixed-content upgrades, or sandboxing fit supported browsers.
6. Deploy a report-only policy with a controlled report endpoint and sample-rate or deduplication plan.
7. Triage violations into required resources, extensions, scanners, stale pages, and actual defects.
8. Remove unnecessary origins and unsafe exceptions before switching to enforcement.
9. Test core journeys, error pages, authentication, embedded contexts, and third-party failure.
10. Version the policy and monitor enforcement regressions after every resource or vendor change.

## Guardrails

- Avoid `unsafe-inline`, `unsafe-eval`, wildcards, and broad scheme sources as permanent shortcuts.
- CSP contains some execution paths but does not replace output encoding or sanitization.
- Never send sensitive page data in violation reports.

## Done

- A resource inventory maps each allowed origin to an owner and purpose
- Report-only and enforced browser tests cover critical journeys
- Violation reports are recorded, classified, and reconciled before launch
