---
name: migrate-a-website
category: web
description: Move an existing website between platforms, frameworks, domains, or information architectures while preserving approved content, URLs, search signals, analytics, and rollback. Use when rebuilding or replatforming a live site and broken links, lost content, tracking gaps, or traffic loss must be controlled.
---

# migrate-a-website

Treat the current site as a set of public contracts. Inventory content and URLs, map each item to a
deliberate destination, rehearse the cutover, and verify from outside the new system.

## Inputs

- Name the current and target platforms, domains, owner, launch window, and rollback authority.
- Gather crawl data, analytics, search reports, content ownership, integrations, DNS, hosting, and deployment access.
- Freeze or track content changes during the migration window.

## Procedure

1. Crawl and export every indexable URL, status, canonical, title, description, heading, inbound link, traffic, and conversion role.
2. Inventory forms, feeds, downloads, scripts, redirects, analytics, consent, search, authentication, and third-party integrations.
3. Classify each URL as keep, merge, redirect, replace, archive, or remove with owner approval.
4. Build a one-to-one redirect manifest from old canonical URL to the closest new equivalent. Avoid chains and unrelated homepage redirects.
5. Migrate content with dates, authorship, media rights, structured data, internal links, and accessibility intact.
6. Recreate critical journeys and analytics in a production-shaped environment.
7. Crawl staging and compare content, status, canonical, robots, sitemap, links, assets, metadata, and structured data with the manifest.
8. Rehearse deployment, DNS or routing change, cache purge, health check, rollback, and content freeze.
9. Launch during the approved window and verify critical journeys plus a representative old-URL sample externally.
10. Monitor errors, redirects, indexing, traffic, conversions, forms, and logs through a defined observation window.
11. Keep the old release recoverable until evidence supports retirement and all content changes are reconciled.

## Boundaries

Do not delete the only copy of content, change domains without ownership proof, or launch without a tested
redirect manifest and rollback. Never describe editorial search intents as verified traffic demand; use
current analytics and search data for impact decisions.

## Done

- A migration inventory assigns every important old URL and asset an approved destination or removal decision
- Staging comparison verifies content, links, metadata, structured data, accessibility, analytics, and journeys
- Launch evidence proves redirects, canonical URLs, forms, analytics, sitemap, robots, and critical paths externally
- Rollback remains tested through the observation window and the final reconciliation has no unexplained content loss

Then use seo-basics for follow-up search checks and debug-a-production-incident for active user impact.
