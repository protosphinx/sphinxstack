---
name: design-a-search-interface
category: design
description: Design a search interface around user intent, query construction, result comprehension, and recovery. Use when people must find items across a substantial or changing collection.
---

# design-a-search-interface

Support the whole path from forming a query to understanding and refining results.

## Procedure

1. Research search tasks, vocabulary, collection scope, sensitivity, and success criteria.
2. Define query syntax, spelling, suggestions, recent searches, and privacy behavior.
3. Design results with clear identity, relevance cues, metadata, actions, and state.
4. Support keyboard submission, focus, announcements, and screen-reader result updates.
5. Distinguish empty collection, no results, error, loading, partial, and stale states.
6. Provide refinement, filter, sort, clear, and back-navigation behavior.
7. Protect sensitive suggestions and prevent unauthorized result inference.
8. Test known-item, exploratory, ambiguous, misspelled, broad, and inaccessible queries.
9. Measure successful find, reformulation, abandonment, and harmful zero-result patterns.

## Guardrails

- Never expose unauthorized records through suggestions, counts, or snippets.
- Avoid automatic query rewriting that hides what was actually searched.
- Relevance metrics do not replace user-task evidence.

## Done

- A search interaction specification covers query, result, and recovery states
- Representative tasks and accessibility behavior are tested
- Search outcomes and failed-query evidence are recorded
