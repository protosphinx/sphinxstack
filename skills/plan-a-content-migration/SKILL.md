---
name: plan-a-content-migration
category: web
description: Plan a content migration with inventory, transformation, redirects, parity, rollback, and evidence. Use when a live site, help center, documentation set, CMS, domain, taxonomy, or localization model must change without losing user journeys or records.
---

# plan-a-content-migration

Move an accountable content estate, not just files. Preserve URL history, meaning, permissions, ownership, and recovery.

## When to use

- Use for consequential platform, domain, information-architecture, schema, or bulk-content change.
- Use ordinary editing for a small set of pages with no shared migration or rollback risk.

## Preconditions

- Confirm source and target owners, change authority, access, preservation duties, privacy boundary, launch decision, and rollback horizon.
- Obtain current exports, schemas, routes, permissions, analytics, search data, active-edit process, and infrastructure dependencies.

## Procedure

1. Define scope, source and target systems, users, success, decision authority, freeze, launch window, and rollback horizon.
2. Build a reconciled content inventory covering URLs, IDs, locales, versions, owners, status, metadata, assets, links, permissions, and dependencies.
3. Assign keep, transform, merge, split, redirect, archive, delete, exclude, or investigate with evidence and approval.
4. Design canonical URL, identifier, taxonomy, schema, asset, link, translation, access, retention, and redirect mappings with redirect integrity checks.
5. Specify deterministic transformation rules, exception queues, provenance, idempotency, and rerun behavior.
6. Create a migration rehearsal on a representative copy and reconcile source, transformed, rejected, and target counts.
7. Test content fidelity, rendering, accessibility, metadata, links, search, permissions, analytics, forms, feeds, redirects, and indexed URLs.
8. Define launch hold points, monitoring, crawl controls, support, communications, abort thresholds, and versioned rollback.
9. Execute by controlled batch, preserve logs, and independently verify critical journeys and reconciliation.
10. Monitor errors, traffic, search, support, permissions, and stale copies through the agreed window before retiring rollback.

## Failure plan

- Stop on unexplained count drift, lost ownership, broad permission change, broken critical journeys, redirect collision, or irrecoverable source mutation.
- Roll back code, routing, or read paths without discarding migration evidence or new writes.
- Do not delete source or redirects until retention, verification, and rollback conditions pass.
- Preserve confidential, unpublished, and regulated content boundaries during test and export.

## Done

- Migration reconciliation records every source disposition, target, exception, and source-to-target count
- Rehearsal evidence verifies deterministic transformation and rerun behavior
- A parity report verifies critical content, journeys, permissions, redirect integrity, and indexed history
- A rollback rehearsal, monitoring, retirement, and residual-risk decision record prove recovery readiness
