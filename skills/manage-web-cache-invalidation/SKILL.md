---
name: manage-web-cache-invalidation
category: web
description: Manage web cache invalidation across browsers, service workers, proxies, CDNs, and application caches with explicit keys and safe deploy ordering. Use when users can receive stale, mixed-version, private, or incorrect web content.
---

# manage-web-cache-invalidation

Know which representation each cache entry is allowed to serve.

## When to use

- Use for content updates, deploys, emergency corrections, personalized pages, regional delivery, or layered caches.
- Prefer versioned immutable assets over repeated global purges.

## Procedure

1. Inventory every cache layer, owner, key, variant, TTL, stale behavior, purge mechanism, and observability source.
2. Define representation inputs such as host, path, query allowlist, method, locale, encoding, device, authorization, cookie, experiment, and tenant.
3. Mark authenticated and user-specific responses private or uncacheable unless isolation is formally proven.
4. Publish hashed immutable assets first, then compatible HTML and metadata that reference them.
5. Use surrogate keys or tags to target mutable content; document which dependent pages and APIs each change affects.
6. Design stale-while-revalidate, stale-if-error, negative caching, and error caching intentionally.
7. Make purge requests idempotent, scoped, authenticated, logged, and observable through every layer.
8. Test cold, warm, stale, revalidated, purged, regional, variant, authorization, deploy-skew, rollback, and concurrent-update cases.
9. Verify returned age, cache status, version, content hash, and user isolation from independent locations after a change.
10. Keep an emergency bypass or TTL reduction that does not expose origin to uncontrolled load.

## Failure plan

- If private content may be shared, bypass and purge affected variants immediately while preserving request and response evidence.
- If layers disagree after purge, keep the safe bypass and reconcile each key rather than declaring success from one region.

## Done

- A cache architecture records layers, keys, variants, privacy classes, TTLs, dependencies, and purge ownership
- Automated tests prove version consistency, correct variants, user isolation, targeted invalidation, and rollback behavior
- A change record verifies content hash and cache status across layers and regions, including safe failure handling
