---
name: recover-from-a-broken-web-deployment
category: web
description: Recover from a broken web deployment through user-impact containment, release and cache reconciliation, compatible rollback or forward repair, and independent journey verification. Use when mixed assets, service workers, APIs, schemas, flags, or edge state leave users on incompatible versions.
---

# recover-from-a-broken-web-deployment

The deployed commit is only one part of the user-visible release state.

## When to use

- Use for severe frontend, edge, service-worker, static asset, configuration, or API compatibility incidents.
- Do not purge, redeploy, or roll back blindly when user transactions may be indeterminate.

## Preconditions

- Establish incident, release, frontend, API, edge, service-worker, data, identity, payments, support, security, and communications authority.
- Define critical journeys, affected populations, regions, release versions, customer-harm thresholds, and stop authority.
- Preserve current manifests, assets, caches, service-worker scripts, flags, APIs, logs, errors, and deployment evidence.

## Procedure

Complete **impact and containment**, **version and dependency reconciliation**, **recovery or rollback**, and **verification** before closeout.

1. Open a **deployment incident timeline** recording commits, builds, artifacts, manifests, deployments, cache changes, flags, API releases, alerts, user reports, decisions, and timestamps.
2. Protect users by stopping rollout, disabling unsafe actions, switching to a tested safe mode, or routing new sessions to a compatible release.
3. Build a **release version and user-state reconciliation** across HTML, asset manifest, JavaScript, CSS, service worker, caches, API, schema, configuration, flags, locale, session, and in-flight transactions. Bind compatible HTML, manifest, service worker, API contract, and flag schema to an immutable client execution epoch that requests can report and servers can validate.
4. Identify populations by region, browser, cache state, install age, service-worker controller, authentication, feature cohort, and entry route.
5. Distinguish missing asset, mixed version, stale HTML, stale worker, API incompatibility, schema migration, flag, configuration, third-party, and origin or CDN failure.
6. Determine transaction outcomes from authoritative server records; mark unknown actions indeterminate and prevent duplicate retry.
7. Choose rollback only if backend, data, schema, flags, and clients remain backward compatible. Otherwise build a controlled forward repair or compatibility bridge.
8. Publish a complete immutable release set, align manifests and cache rules, fence stale writers, and version service-worker activation plus cache cleanup.
9. Verify clean, warm, stale, offline, restored, long-lived, multi-tab, authenticated, and regional clients through critical journeys.
10. Reconcile orders, payments, messages, uploads, drafts, notifications, analytics, and support cases created during the incident.
11. Monitor errors, performance, conversion, duplicate or missing actions, cache versions, worker adoption, and regional health through stabilization.
12. Record root cause, detection gap, compatibility invariant, release-control change, owner, deadline, and tested recurrence guard.

## Failure plan

- If rollback would break newer data or in-flight state, do not roll back; restore compatibility through a forward repair.
- If clients cannot fetch the repair because of stale caches or workers, publish a minimal compatible recovery path with distinct immutable assets.
- If transaction outcome is unknown, block resubmission until the server-side state is reconciled.
- If no safe version exists, disable the affected action and communicate status rather than presenting a misleading interface.

## Worked example

A frontend release publishes HTML that references missing hashed assets while a new service worker caches an incompatible application shell, an API schema changed, CDN regions hold different manifests, feature flags vary by session, and some customers report duplicate checkout attempts. The team stops rollout, reconciles each user's version stack and transaction state, chooses a forward compatibility repair instead of an unsafe rollback, aligns immutable assets and worker epochs, and verifies stale plus clean clients globally.

## Done

- A deployment incident timeline verifies releases, artifacts, caches, flags, APIs, impact, containment, decisions, communications, and evidence
- A release version and user-state reconciliation proves HTML, assets, service worker, cache, API, schema, configuration, cohort, transaction, and affected-client disposition
- A recovery and prevention report demonstrates compatible repair or rollback, critical-journey verification, financial and user-state reconciliation, stabilization, root cause, and tested release controls
