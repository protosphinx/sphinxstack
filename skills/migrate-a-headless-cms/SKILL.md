---
name: migrate-a-headless-cms
category: web
description: Migrate a headless CMS with content identity, schema, references, assets, localization, workflow, permissions, delivery APIs, previews, search, redirects, cutover, and rollback. Use when structured content must move without breaking consuming channels.
---
# migrate-a-headless-cms
## When to use
- Use when replacing, consolidating, replatforming, or regionalizing a headless content operation.
- Do not migrate content records without tracing every consuming site, app, feed, search index, and automation.
## Procedure
1. Define spaces, environments, content classes, channels, locales, teams, obligations, change windows, and acceptance.
2. Inventory entries, stable IDs, schemas, references, assets, variants, versions, schedules, workflows, permissions, webhooks, and consumers.
3. Map source to target semantics including nulls, ordering, rich text, nested references, locale fallback, slug uniqueness, and publication state.
4. Build repeatable extraction, transformation, loading, checksum, reconciliation, and exception handling with preserved provenance.
5. Recreate preview, editorial workflow, roles, API contracts, webhooks, cache invalidation, search, redirects, analytics, and accessibility.
6. Run dry migrations, delta capture, editorial rehearsal, consumer contract tests, performance tests, and item-level parity reports.
7. Transfer write authority in waves, monitor downstream outcomes, retain reversible snapshots, and retire only after signed acceptance.
## Failure plan
- Freeze the affected content class, route reads to the last verified source, and reverse authority without discarding accepted target edits.
## Worked example
A publisher migrates localized articles and assets while preserving scheduled releases, rich-text references, preview, search, and mobile API contracts.
## Done
- A headless CMS migration records inventory, identity, schema, references, workflow, access, consumers, transformation, cutover, and retirement
- Item, locale, reference, asset, API, preview, search, permission, performance, cutover, and rollback evidence verifies parity
