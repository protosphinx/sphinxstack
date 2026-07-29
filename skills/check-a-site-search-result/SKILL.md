---
name: check-a-site-search-result
category: web
description: Check an internal site-search result for relevance, accuracy, access control, highlighting, navigation, empty states, and freshness. Use when a query returns missing, stale, unsafe, or confusing results.
---

# check-a-site-search-result

Evaluate the result against a recorded query and user context.

## When to use

- Use for content, product, help-center, document, or application search.
- Do not use privileged access to prove a result that ordinary users cannot see.

## Procedure

1. Record query exactly, locale, filters, sort, user role, index version, device, and expected intent.
2. Capture result count, order, titles, excerpts, highlights, destinations, dates, and access states.
3. Check top results for relevance, duplicate entries, stale content, broken links, and misleading excerpts.
4. Verify restricted, deleted, draft, embargoed, or tenant-specific records do not leak.
5. Test spelling, synonyms, punctuation, zero results, filters, pagination, keyboard use, and screen-reader labels.
6. Open representative results and confirm destination identity, canonical URL, and preserved query context.
7. Record whether the issue is indexing, ranking, metadata, permissions, rendering, or source content.

## Done

- A search-result report records query context, ranking, excerpts, destinations, freshness, permissions, and issue classification
- Relevance, access, zero-result, filter, pagination, accessibility, and destination checks verify the result set
