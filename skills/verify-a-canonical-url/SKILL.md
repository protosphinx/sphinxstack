---
name: verify-a-canonical-url
category: web
description: Verify that a page's canonical URL is absolute, indexable, representative, internally consistent, and aligned with redirects and sitemaps. Use when reviewing duplicate, parameterized, localized, or migrated web pages.
---

# verify-a-canonical-url

Canonical signals should agree with the URL users and search engines can retrieve.

## When to use

- Use for SEO audits, migrations, filters, tracking parameters, syndication, and duplicate routes.
- Do not canonicalize materially different language, product, or user content to an unrelated page.

## Procedure

1. Fetch the page with a real GET and record final URL, status, robots directives, and rendered canonical link.
2. Confirm one absolute canonical with correct scheme, host, path, case, slash, and encoding.
3. Fetch the canonical target and verify it returns the intended indexable representative content.
4. Compare redirects, internal links, sitemap, hreflang, structured data, social URL, and alternate formats.
5. Test parameter, protocol, host, case, and trailing-slash variants.
6. Check templates do not emit fallback, staging, current-request, or multiple canonicals.
7. Record intentional exceptions and re-crawl after changes.

## Done

- A canonical audit report records source variants, final URL, canonical target, indexability, and content equivalence
- GET, rendered HTML, redirects, internal links, sitemap, hreflang, and metadata signals are verified as consistent
