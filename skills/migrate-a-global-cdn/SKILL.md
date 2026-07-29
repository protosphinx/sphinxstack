---
name: migrate-a-global-cdn
category: web
description: Migrate a global content delivery network through route, cache, security, origin, certificate, regional parity, traffic control, and reversible cutover. Use when moving public web and API delivery between edge providers without exposing private content or disrupting users.
---

# migrate-a-global-cdn

Edge parity includes security and cache semantics, not only successful responses.

## When to use

- Use for CDN replacement, consolidation, regional migration, or major edge-architecture change.
- Obtain qualified DNS, networking, security, privacy, application, certificate, and provider review.

## Preconditions

- Establish incident, DNS, certificate, network, edge, application, security, privacy, origin, data, observability, support, and business authority.
- Define domains, regions, routes, methods, protocols, availability, latency, security, privacy, cache, and rollback thresholds.
- Lower DNS risk only through an approved plan; do not weaken origin controls merely to make both CDNs work.

## Procedure

Complete the **delivery and dependency inventory**, **cache and security behavior parity**, **staged traffic migration**, and **rollback and origin protection** before full cutover.

1. Build a **CDN migration register** for DNS, certificates, TLS, HTTP versions, routing, redirects, cache keys, variation, invalidation, compression, images, APIs, streaming, signed access, cookies, WAF, bots, rate limits, logs, analytics, and owners.
2. Trace each domain and route through resolver, edge, origin, storage, identity, payment, API, third party, and monitoring dependencies.
3. Define response invariants by route: status, body identity, headers, cacheability, variation, stale behavior, cookies, authorization, geography, language, device, and error handling.
4. Design origin authentication so only authorized provider paths reach the origin. Separate provider credentials and make revocation and rollback explicit.
5. Provision and validate certificates, names, protocols, ciphers, renewal, redirects, DNS records, DNSSEC interactions, and certificate transparency monitoring.
6. Recreate cache keys, bypasses, tags, purges, TTLs, stale rules, negative caching, range requests, and personalization boundaries. Require a cache equivalence-class proof for each cacheable response: every request attribute that can change content or authorization must be normalized into the key or force shared-cache bypass, then tested differentially across providers. Never cache one user's private response for another.
7. Recreate WAF, bot, rate-limit, geofence, signed-URL, upload, request-size, method, header, and abuse controls with logged exceptions.
8. Run the new CDN against production-shaped shadow or test hosts and compare regional delivery, cache, and security behavior without allowing duplicate mutation.
9. Validate anonymous and authenticated pages, APIs, uploads, downloads, media, checkout, login, redirects, errors, purges, origin failure, and provider degradation.
10. Route controlled traffic by hostname, region, account, or deterministic cohort while maintaining one authoritative DNS and routing plan.
11. Reconcile status, content hashes, headers, cache outcomes, latency, origin load, security decisions, application errors, conversions, and support signals.
12. Rehearse cutover and rollback with DNS and routing propagation, connection reuse, cache warmth, purge, certificate, log access, origin capacity, and stop authority.
13. Roll back future routing without losing investigation evidence, invalidation state, or security protection; fence the failed edge from origin access when required.
14. Retire the old CDN only after traffic drains, certificates, logs, privacy, billing, purge, stored objects, credentials, and incident obligations are complete.

## Failure plan

- If private content crosses users or cache variants collapse, stop the affected route, purge both edges, contain origin access, and investigate before resuming.
- If regional errors or latency exceed thresholds, halt expansion and restore governed routing for new connections.
- If origin load rises dangerously, activate tested shielding, cache, or rollback controls without bypassing authentication.
- If DNS or connection state makes traffic ownership uncertain, keep both paths monitored and do not decommission either provider.

## Worked example

A global commerce platform must move web pages, APIs, images, downloads, signed links, checkout, login, redirects, WAF, bot controls, rate limits, certificates, DNS, cache invalidation, logs, and origin shielding from one CDN to another while both edges overlap across regions and no private response may leak through a bad cache key. The team maps route invariants, isolates origin credentials, compares cache and security behavior regionally, canaries deterministic traffic, reconciles customer and origin outcomes, and rehearses propagation-aware rollback.

## Done

- A CDN migration register verifies domains, routes, dependencies, certificates, cache rules, security controls, origin access, ownership, and retirement obligations
- A regional delivery, cache, and security parity report proves content, headers, variants, personalization, performance, origin load, and enforcement across representative routes and locations
- A cutover and rollback rehearsal demonstrates traffic control, propagation handling, cache warmth and purge, origin protection, stop authority, monitoring, and independent post-change verification
