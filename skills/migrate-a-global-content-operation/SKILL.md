---
name: migrate-a-global-content-operation
category: write
description: Migrate a global content operation through stable content identity, rights and workflow inventory, localization and accessibility parity, phased publication, rollback, and legacy retirement. Use when moving content, people, processes, and channels between platforms or operating models.
---

# migrate-a-global-content-operation

Preserve content meaning, authority, and public identity across systems.

## When to use

- Use for CMS replacement, publishing consolidation, acquisition, localization redesign, or documentation-platform migration.
- Obtain qualified privacy, security, accessibility, rights, records, SEO, legal, and regional review.

## Preconditions

- Establish content, platform, editorial, localization, accessibility, rights, SEO, security, privacy, records, support, and channel authority.
- Define sites, content types, locales, markets, audiences, channels, versions, dependencies, service levels, and rollback thresholds.
- Freeze uncontrolled schema, URL, workflow, and content-model changes or version them through migration governance.

## Procedure

Complete **content and identity inventory**, **content, access, and workflow parity**, **staged migration and cutover**, and **rollback and retirement** before closure.

1. Build a **global content migration register** for stable ID, URL, type, owner, status, version, locale, market, rights, source, assets, links, metadata, workflow, channel, retention, and consumers.
2. Discover content through repositories, APIs, sitemaps, analytics, search, feeds, apps, newsletters, support links, embeds, redirects, and owner attestation.
3. Classify keep, improve, merge, split, translate, archive, redirect, delete, and legally hold decisions with evidence and approval.
4. Design stable content and asset identity, version, locale relationships, canonical URL, redirect, alias, and external-reference handling.
5. Map schemas, components, rich text, media, files, forms, code, tables, structured data, search fields, and fallback rules.
6. Recreate author, reviewer, approver, publisher, translator, administrator, embargo, legal-hold, and emergency access with least privilege.
7. Preserve source, consent, rights, attribution, license, expiry, accessibility, reading order, alternative text, captions, transcripts, language, and market constraints.
8. Transform from immutable exports with repeatable mappings, rejection reasons, hashes, counts, and versioned manifests.
9. Compare rendered meaning, hierarchy, media, links, metadata, canonical and alternate tags, search, feeds, permissions, workflows, and channel outputs.
10. Migrate representative content and locale cohorts, including complex, high-traffic, regulated, old, inaccessible, and low-use cases.
11. Define an overlap state machine per stable content ID, locale, and channel: `legacy-write/legacy-publish`, `target-shadow`, `target-write/legacy-publish`, `target-write/target-publish`, and `retired`.
12. Record source and target revision IDs, expected base, capture watermark, monotonic publication epoch, rights version, translation source revision, scheduled actions, write authority, publication authority, and acknowledgement; reject stale epochs at every destination.
13. Apply concurrent edits with compare-and-swap semantics, quarantine base-revision conflicts, and prohibit last-write-wins across content, translation, rights, approval, schedule, form, and redirect state.
14. Cut over by route, type, locale, market, or channel with the recorded authority state, monitoring, support, and rollback.
15. Reconcile edits, comments, approvals, schedules, forms, subscriptions, translations, redirects, search indexes, and analytics during overlap.
16. Rehearse concurrent source and target edits, superseded-source translation, rights expiry, a scheduled release crossing cutover, URL collision, redirect rollback, and rollback after valid target-only edits.
17. Verify public pages, authenticated content, downloads, search, social previews, feeds, apps, newsletters, and backlinks from independent locations.
18. Retire legacy publishing only after retention, legal hold, history, audit, access, rights, redirects, support, and restore duties are proven.

## Failure plan

- If content identity or ownership is ambiguous, quarantine it rather than publish a duplicate or overwrite history.
- If rights, consent, accessibility, or legal-hold state cannot migrate safely, keep that item on the governed legacy path.
- If both systems can publish the same identity, fence one authority before resuming.
- If rollback would lose valid target edits, preserve a delta and reconcile forward instead of deleting work.

## Worked example

A global organization must move public sites, authenticated help, policies, product documentation, media, downloads, forms, search, structured data, localized pages, feeds, newsletters, and app content from several legacy CMS platforms to one operation while URLs, rights, accessibility, workflows, scheduled releases, user permissions, and regional obligations differ. The team assigns stable identities, migrates immutable cohorts, compares rendered and channel parity, fences publication, captures edits, and rehearses rollback without losing target work.

## Done

- A global content migration register verifies identity, URLs, types, versions, locales, rights, sources, assets, links, workflow, access, retention, and ownership
- A content, rights, accessibility, link, and workflow parity report proves rendered meaning, metadata, media, permissions, search, redirects, channels, and unresolved differences
- A cutover and rollback rehearsal demonstrates overlap state transitions, revision conflict quarantine, publication fencing, rights enforcement, translation freshness, scheduled-release control, delta capture, valid-edit preservation, public verification, and legacy restoration without duplicate publication
