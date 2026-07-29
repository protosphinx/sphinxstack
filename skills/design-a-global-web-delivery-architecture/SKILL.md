---
name: design-a-global-web-delivery-architecture
category: web
description: Design global web delivery with explicit routing, caching, origin, identity, data, failure-domain, and recovery guarantees. Use when users in multiple regions depend on edge and origin infrastructure.
---

# design-a-global-web-delivery-architecture

Optimize global reach without turning caches, failover, or replication into silent correctness failures.

## When to use

- Use when CDNs, multiple origins, regions, edge compute, replicated data, or jurisdictional routing affect a production web property.
- Use ordinary hosting guidance for one origin whose delivery and recovery boundaries are already adequate.

## Preconditions

- Confirm product, platform, network, security, data, privacy, support, and incident owners.
- Gather users, journeys, traffic, regions, data classes, origins, dependencies, objectives, attacks, contracts, and current failure evidence.

## Procedure

1. Build a **traffic and data map** for users, DNS, edge, compute, origins, APIs, storage, identity, residency, and dependencies.
2. Define correctness, availability, latency, freshness, security, and recovery objectives per journey.
3. Choose routing and health decisions with bounded propagation, fail-safe defaults, and observable overrides.
4. Specify **cache correctness** for keys, authorization, variants, freshness, invalidation, revalidation, errors, and private data.
5. Establish **regional failure isolation** through quotas, circuit boundaries, origin shielding, dependency limits, and tested traffic steering.
6. Design identity, session, bot, TLS, secret, logging, and administrative controls across edge and origin.
7. Model capacity for normal demand, attacks, failover concentration, cold caches, and recovery.
8. Test stale content, cache poisoning, regional partition, origin loss, dependency failure, and routing error.
9. Rehearse **origin recovery** with clean deployment, configuration, keys, data checks, cache treatment, and gradual traffic return.
10. Publish residual single points, manual authority, and review triggers.

## Failure plan

- If cache isolation or authorization fails, bypass or purge the affected scope and contain exposure.
- If a region is uncertain, stop automatic global steering until independent health evidence exists.
- Prevent failover from overwhelming the surviving origin with staged traffic and load shedding.
- Restore from known configuration and reconcile content, data, sessions, and cache state before full return.

## Worked example

A subscription service adds two origins behind a global edge. The traffic map shows that account pages and pricing vary by authentication, country, and currency. Cache tests find an omitted session variant that could expose private HTML, so those routes bypass caching until repaired. A regional failure exercise shows cold-cache failover would overload the second origin. The team adds staged steering, shielding, and capacity gates, then restores the failed origin cleanly and returns traffic only after data and cache checks pass.

## Done

- A delivery architecture record contains traffic and data map, objectives, routing, cache correctness, security, capacity, and origin recovery
- A failure and cache test report verifies variants, authorization, staleness, poisoning, partitions, origin loss, and failover load
- A regional recovery rehearsal records isolation, clean origin restore, data and cache reconciliation, and gradual traffic return
