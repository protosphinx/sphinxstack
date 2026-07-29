---
name: design-a-content-preview-workflow
category: web
description: Design a secure content-preview workflow with draft identity, access, production parity, expiry, collaboration, robots exclusion, and publish reconciliation. Use when editors or reviewers need to inspect unpublished web content safely.
---

# design-a-content-preview-workflow

Preview the exact draft version without making it public or confusing it with production.

## When to use

- Use for CMS content, campaigns, localized pages, scheduled releases, or regulated review.
- Never depend on robots exclusion as the only access control for confidential drafts.

## Procedure

1. Define draft types, reviewers, sensitivity, environments, components, integrations, locales, and approval states.
2. Assign immutable content-version identity and show draft, environment, locale, timestamp, and expiry visibly.
3. Authorize preview through short-lived scoped access without putting secrets in durable or shareable URLs.
4. Render through production-equivalent templates and data contracts while isolating indexing, analytics, forms, payments, notifications, and external mutations.
5. Preserve comments and approval references against the exact content version.
6. Handle unpublished assets, linked drafts, personalization, permissions, redirects, and missing translations explicitly.
7. Expire and revoke access, prevent cache leakage, and test shared links, logout, role change, and screenshots or exports according to policy.
8. Reconcile the approved preview version to the published artifact and record any changes after approval.

## Done

- A preview workflow specification records version identity, authorization, expiry, parity, side-effect isolation, review, and publish mapping
- Access, cache, robots, analytics, form, locale, linked-draft, revocation, exact-version, and publish-reconciliation tests verify the workflow
