---
name: verify-open-graph-tags
category: web
description: Verify Open Graph and related social preview metadata against canonical page content and published assets. Use when a shared web link shows the wrong title, description, image, URL, type, or locale.
---

# verify-open-graph-tags

Inspect the server-rendered public response, not only the browser DOM.

## When to use

- Use before launch, after content changes, or when a social preview is stale or wrong.
- Do not place private, draft, or user-specific data in public metadata.

## Procedure

1. Record the public URL, canonical URL, intended audience, locale, title, description, and share image.
2. Fetch the unauthenticated server response and locate `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, and locale tags.
3. Verify absolute URLs, encoding, duplicates, character quality, image access, media type, dimensions, and file size.
4. Compare Open Graph, canonical, page title, visible heading, and other platform metadata for consistent identity.
5. Check redirects, query variants, localization, staging exclusions, and cache headers.
6. Use official platform debuggers only with content safe to disclose.
7. Refresh cache where authorized and re-fetch the exact public response.

## Done

- A metadata report records the public response, canonical values, image properties, locale, variants, and discrepancies
- Direct fetch, image, redirect, cache, and representative platform checks verify the published preview
