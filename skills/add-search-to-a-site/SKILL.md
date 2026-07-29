---
name: add-search-to-a-site
category: web
description: Add site search with a defined content index, useful ranking, accessible interaction, privacy boundaries, and measured zero-result behavior. Use when visitors cannot find content through navigation alone or an existing search box returns incomplete, confusing, or untrustworthy results.
---

# add-search-to-a-site

Build search around real information-seeking tasks. Choose the smallest index and retrieval approach that
can return understandable results, then measure relevance and failure.

## Inputs

- Name the audiences, content types, languages, update frequency, and top search tasks.
- Gather representative content, current navigation, query evidence, privacy rules, and hosting limits.
- Decide which content must never enter the index.

## Procedure

1. Collect representative queries from analytics, support, interviews, and known tasks. Label the useful result for each.
2. Define the searchable document: stable id, URL, title, summary, body, type, date, language, and approved facets.
3. Choose client-side, build-time, hosted, or server search from corpus size, freshness, privacy, budget, and operational needs.
4. Build an index from canonical published content. Exclude drafts, duplicates, private pages, and markup noise.
5. Establish ranking signals such as exact title match, phrase, field weight, recency, popularity, and type.
6. Design input, suggestions, submit, loading, results, filters, no-results, error, and keyboard behavior.
7. Make result snippets explain why an item matched. Preserve focus and announce result counts accessibly.
8. Test the representative query set and grade the first useful result, zero results, and misleading matches.
9. Add safe query analytics with consent and retention controls. Avoid storing sensitive free-text unnecessarily.
10. Define reindexing, deletion, stale-content, provider-failure, and rollback behavior.
11. Launch to a limited audience and use observed reformulations and zero-result queries to improve content or ranking.

## Boundaries

Do not index private, draft, deleted, or access-controlled content into a public client bundle. Never use
search logs to infer sensitive traits without a legitimate purpose and consent. Do not promise semantic or
AI search when ordinary fielded retrieval meets the task more reliably.

## Done

- A versioned search schema and exclusion rule define exactly what enters the index
- A relevance test set records expected results, first useful rank, zero results, and misleading matches
- Keyboard, screen-reader, loading, error, empty, and narrow-screen states are verified
- Reindexing, deletion, analytics privacy, provider failure, and rollback behavior are documented

Then use add-analytics to monitor search outcomes and accessibility-pass for a broader interaction audit.
