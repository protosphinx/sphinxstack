---
name: create-a-multilingual-site
category: web
description: Create a multilingual site with durable locale URLs, translation governance, correct metadata, and language-aware interaction. Use when one service must publish and maintain equivalent experiences across languages or regions.
---

# create-a-multilingual-site

Make language a first-class content state, not a string replacement pass.

## When to use

- Use for translated sites, regional variants, bidirectional languages, or locale-specific formats and terms.
- Separate language from country, currency, and legal region unless the product explicitly couples them.

## Procedure

1. Define supported locales, audience, source language, URL strategy, default, fallback, ownership, and release parity expectations.
2. Use stable locale-specific URLs and a visible language switcher that links to the equivalent page or explains when none exists.
3. Set document and fragment language, direction, locale metadata, canonical, reciprocal `hreflang`, sitemap, and status behavior.
4. Externalize messages with context, variables, plural and gender rules, and no sentence fragments that translators must reorder blindly.
5. Build a translation workflow with source version, status, reviewer, glossary, screenshots, legal review, and stale-content detection.
6. Localize dates, numbers, names, addresses, units, currencies, collation, forms, search, media, and error messages.
7. Support longer text, different line breaking, fonts, input methods, right-to-left layout, mirrored and non-mirrored icons, and zoom.
8. Do not redirect solely from IP or browser language; offer a choice and preserve deep links and user preference.
9. Test navigation, forms, search, authentication, checkout, emails, sharing, structured data, fallback, and missing translations.
10. Include fluent reviewers and representative users for high-risk journeys, then monitor locale-specific failures without collecting unnecessary identity data.

## Failure plan

- If a critical translation is missing, use an explicit approved fallback and label the language rather than mixing silent partial translations.
- If reciprocal metadata or equivalent routes are wrong, withhold those annotations until mapping is correct.

## Done

- A locale architecture records URLs, mappings, fallbacks, formats, translation state, owners, and release rules
- Linguistic, functional, accessibility, and metadata tests verify each supported locale and critical journey
- An operations report detects stale, missing, broken, or inaccessible localized content and records remediation
