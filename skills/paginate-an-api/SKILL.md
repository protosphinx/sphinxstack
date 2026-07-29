---
name: paginate-an-api
category: code
description: Consume a paginated API without silent gaps, duplicates, loops, or unsafe retry behavior. Use when a client must retrieve a complete changing collection across multiple requests.
---

# paginate-an-api

Make completion, ordering, and restart behavior explicit before iterating through pages.

## Procedure

1. Read the contract for cursor, token, offset, limit, ordering, snapshot, and rate-limit behavior.
2. Choose a stable sort key and define how collection mutations during traversal are handled.
3. Implement a termination rule from the documented next-page signal, not from a guessed page size.
4. Detect repeated cursors, missing tokens, malformed pages, and maximum-page breaches.
5. Deduplicate by a stable item identifier while preserving the required order.
6. Checkpoint the next cursor and processed count when a long retrieval must resume safely.
7. Apply bounded retries and backpressure without advancing the checkpoint before a page is accepted.
8. Test empty, single-page, exact-boundary, multi-page, repeated-cursor, mutation, and restart cases.
9. Reconcile retrieved identifiers and counts against an independent summary or targeted sample.

## Guardrails

- Do not assume offset pagination remains stable while records are inserted or deleted.
- Treat cursors as opaque and avoid logging sensitive cursor contents.
- Stop on a loop or inconsistent page instead of returning a falsely complete result.

## Done

- Pagination tests are verified across all boundary and restart cases
- A retrieval report records pages, unique items, retries, and completion signal
- The final collection is verified and reconciled against an independent count or sample
