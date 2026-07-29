---
name: implement-client-side-caching
category: web
description: Implement client-side caching with explicit ownership, freshness, invalidation, isolation, and recovery. Use when browser data reuse can improve latency or resilience without misleading users.
---

# implement-client-side-caching

Cache only data whose stale and cross-session behavior is understood.

## Procedure

1. Inventory candidate data, owner, sensitivity, size, update rate, and freshness contract.
2. Choose memory, HTTP, service-worker, or persistent storage by lifecycle and trust boundary.
3. Define cache key, account, tenant, locale, version, and authorization dimensions.
4. Set freshness, stale use, revalidation, invalidation, eviction, and quota behavior.
5. Prevent older responses and concurrent mutations from overwriting newer state.
6. Clear or partition data on logout, account switch, permission change, and schema migration.
7. Expose stale, refreshing, offline, conflict, and failure states honestly.
8. Test hit, miss, expiry, race, eviction, offline, upgrade, and cross-account isolation.
9. Measure latency benefit, correctness, storage, and stale-result frequency.

## Guardrails

- Never reuse private cached data across identities or tenants.
- Cache presence does not grant current authorization.
- Avoid indefinite stale fallback for consequential decisions.

## Done

- A client cache policy report documents keys, freshness, lifecycle, and isolation
- Race, expiry, offline, migration, and account-transition cases are tested
- Cached, network, and visible state reconcile
