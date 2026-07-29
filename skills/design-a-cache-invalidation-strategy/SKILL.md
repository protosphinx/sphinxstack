---
name: design-a-cache-invalidation-strategy
category: code
description: Design cache invalidation from data authority, key identity, dependency, freshness, event ordering, failure, and repair requirements. Use when cached values can become stale across processes or regions.
---

# design-a-cache-invalidation-strategy

Define what makes a cached value equivalent before choosing eviction.

## When to use

- Use for application, CDN, query, object, computed, or distributed caches.
- Do not cache authorization or sensitive data without explicit correctness and isolation controls.

## Preconditions

- Define authoritative data, readers, writers, keys, dependencies, freshness, regions, load, privacy, and failure tolerance.

## Procedure

1. Define each cache entry’s identity, scope, version, derivation, and acceptable staleness.
2. Map writes and dependencies that can invalidate or supersede it.
3. Choose versioned keys, write-through, event invalidation, revalidation, TTL, or a justified combination.
4. Prevent cross-tenant collision and old events from evicting or repopulating new generations.
5. Handle stampede, negative caching, partial failure, partitions, clock skew, and cold start.
6. Add bypass, purge, generation advance, and rebuild controls.
7. Measure hit rate alongside stale-read and origin-load evidence.
8. Test mutation races, reorder, duplication, outage, recovery, and privacy boundaries.

## Failure plan

- Bypass or advance generation when cache correctness is uncertain and protect the origin with bounded load controls.

## Worked example

A product page key includes catalog generation and locale; stale invalidation events cannot overwrite a newer generation.

## Done

- A cache strategy document records authority, identity, dependencies, freshness, invalidation, isolation, repair, and observability
- Race, stale-event, tenant, partition, stampede, bypass, purge, and origin-recovery tests verify correctness
