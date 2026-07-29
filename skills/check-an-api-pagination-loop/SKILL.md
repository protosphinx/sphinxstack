---
name: check-an-api-pagination-loop
category: code
description: Check an API pagination loop for cursor handling, termination, duplicates, omissions, mutation, rate limits, retries, and bounded memory. Use when a client must traverse a changing collection safely.
---
# check-an-api-pagination-loop
## When to use
- Use with the exact API contract and representative fixture.
- Do not assume page size, order, or cursor stability.
## Procedure
1. Record contract, ordering, cursor opacity, snapshot semantics, limits, and error rules.
2. Preserve cursors without decoding or constructing them.
3. Test first, middle, last, empty, short, and repeated pages.
4. Detect cursor nonadvance, cycles, duplicate identity, omission, and changed ordering.
5. Handle retry, expiry, mutation, rate limit, cancellation, and resume.
6. Stream or checkpoint results within memory and side-effect bounds.
## Failure plan
- Stop on cursor cycles or ambiguous progress rather than looping or silently skipping.
## Worked example
A repeated next cursor is detected after three pages, preventing an infinite import.
## Done
- A pagination test report records contract, pages, cursors, identities, termination, mutation, retries, and resource use
- Empty, last, cycle, duplicate, omission, expiry, rate, cancellation, and resume tests verify traversal
