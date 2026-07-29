---
name: build-a-localization-routing-strategy
category: web
description: Build a localization routing strategy for stable URLs, locale negotiation, alternates, fallbacks, indexing, persistence, and migration. Use when a website serves multiple languages, countries, scripts, or regional content variants.
---

# build-a-localization-routing-strategy

Keep content identity stable and make locale choice reversible.

## When to use

- Use for new multilingual sites, URL redesigns, market launches, or localization defects.
- Do not force a locale solely from inferred location when users need another language or market.

## Procedure

1. Inventory languages, scripts, regions, legal variants, translation coverage, domains, paths, query patterns, and legacy URLs.
2. Choose a canonical URL model and document whether language, region, or both determine content identity.
3. Define first-visit negotiation from explicit choice, saved preference, account setting, browser language, and location in that priority.
4. Provide a visible selector that preserves the equivalent page, accepts keyboard and assistive technology, and stores minimal preference.
5. Specify missing-translation fallback without silently changing regulated terms, prices, availability, or market context.
6. Map canonical, alternate-language, default, sitemap, redirect, and indexing behavior.
7. Preserve query, campaign, authentication, and safe navigation state across locale changes.
8. Test bots, users, logged-in transitions, shared URLs, unsupported locales, mixed scripts, right-to-left layout, and cache variation.
9. Migrate legacy routes with one-hop redirects and monitor wrong-locale landings and crawl signals.

## Done

- A localization routing plan records URL identity, negotiation priority, selector behavior, fallback, alternates, caching, and migration maps
- Locale, bot, canonical, redirect, equivalent-page, accessibility, cache, and indexing tests verify every supported variant
