---
name: respond-to-a-web-cache-poisoning-incident
category: web
description: Respond to web cache poisoning by scoping variants, preserving evidence, containing shared delivery, repairing cache keys, and proving trusted restoration. Use when attacker-influenced content or headers may be served from a shared cache.
---

# respond-to-a-web-cache-poisoning-incident

A clean origin response does not prove that cached users are safe.

## When to use

- Use for injected redirects, scripts, headers, bodies, cache deception, key confusion, host manipulation, or cross-user cache leakage at a CDN, proxy, service worker, or application cache.
- Use ordinary cache invalidation when there is no adversarial input, trust-boundary failure, or exposure question.

## Preconditions

- Activate incident authority for edge providers, origin, application, security, privacy, support, communications, and legal duties.
- Preserve edge and origin logs, configuration versions, cache metadata, request samples, response headers, deployment state, DNS, and provider audit events under controlled access.
- Establish safe alternate access to origin and CDN controls. Avoid exploratory requests that create new poisoned variants.

## Procedure

1. Start a synchronized chronology and determine the **poisoned variant scope** across host, path, query, headers, cookies, encoding, language, device, region, method, status, cache tier, age, and authenticated state.
2. Preserve representative poisoned objects, triggering requests, cache status, keys or key components, and hashes before purge when safe. Redact affected-user data and do not replay active payloads broadly.
3. Apply **cache containment**: bypass or disable affected shared caching, block the suspected input, hold private and authenticated responses out of shared layers, and protect origin capacity.
4. Verify containment independently across providers, regions, protocols, variants, and cold and warm paths. A successful purge response is not proof of object removal.
5. Reconstruct **origin and key analysis** for every cache layer: normalization, host trust, query rules, unkeyed headers, `Vary`, cookies, redirects, error caching, internal rewrites, fragments, service workers, and vendor transformations. Where the platform permits, record a privacy-safe keyed fingerprint of the canonical cache key, normalization-policy version, cache namespace or epoch, fill identifier, and upstream source.
6. Establish whether origin logic reflected attacker-controlled input, whether an intermediate transformed a safe origin response, and whether authenticated or tenant-specific data entered a shared representation.
7. Determine exposure from delivery and request evidence, not only stored samples. Identify affected routes, variants, regions, users, time windows, content, credentials, and downstream caches.
8. Fix the cause with explicit key allowlists, trusted host validation, header stripping, correct `Vary`, private cache directives, normalized routing, separated error behavior, and tests for ambiguous encodings and duplicate inputs.
9. Advance a versioned cache namespace or epoch so old objects become unreachable when purge guarantees are insufficient, then purge every affected layer and dependent object, including shield caches, regional tiers, service workers, browser policies where controllable, and derived pages.
10. Build **trusted restoration** from reviewed origin and edge configuration. Release canary routes and regions, then verify hashes, headers, redirects, cache keys, isolation, and authorized behavior across cold, warm, stale, revalidated, origin-error, and failover states from independent networks.
11. Monitor re-poison attempts, variant growth, cache status, origin load, user reports, authentication anomalies, and provider changes. Notify affected parties when the evidence and duties require it.
12. Close with reconciled exposure, control effectiveness, retained evidence, follow-up ownership, and a timed recurrence test.

## Failure plan

- If containment overloads origin, shed noncritical traffic or serve a verified static safe response without re-enabling the vulnerable shared path.
- If provider cache state cannot be independently proven, keep bypass active and escalate through the provider incident channel.
- If private or authenticated content may have crossed users, treat it as a confidentiality incident and preserve access evidence.
- Do not destroy the only poisoned sample before preserving the minimum safe evidence needed to explain scope and cause.

## Worked example

Users in several regions receive attacker-controlled redirects only for certain language and device combinations. Origin checks are clean, two CDN layers disagree about purge, and authenticated fragments may share a key. Responders preserve controlled samples, bypass affected caches, enumerate host, header, query, locale, device, and authentication variants, trace normalization at both layers, repair the key and private-cache rules, purge dependencies, and restore by canary only after independent regional checks prove trusted content and user isolation.

## Done

- A cache poisoning incident timeline records detection, poisoned variants, evidence provenance, containment, provider actions, decisions, notifications, and restoration
- A variant and exposure reconciliation proves affected keys, tiers, routes, regions, users, content, authenticated boundaries, time window, purges, and residual uncertainty
- A restoration and control effectiveness report verifies origin trust, corrected keys and normalization, private isolation, independent regional results, monitoring, and recurrence tests
