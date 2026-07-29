---
name: inspect-a-service-worker
category: web
description: Inspect a web service worker's registration, scope, lifecycle, caches, fetch behavior, update state, and offline effects. Use when a site serves stale content, fails offline, loops updates, or behaves differently after deployment.
---

# inspect-a-service-worker

Distinguish the active worker from waiting and installing versions.

## When to use

- Use for progressive web app, caching, offline, update, and deployment troubleshooting.
- Do not unregister or clear user storage without permission and a recovery plan.

## Procedure

1. Record origin, path, browser, profile, network state, deployed release, and observed behavior.
2. Inspect registrations, script URLs, scopes, lifecycle states, update times, and controlling worker.
3. Review install, activate, fetch, message, sync, push, and navigation handling.
4. List cache names, versions, entries, response status, and retention rules without exposing private data.
5. Compare first visit, repeat visit, reload, hard reload, offline, restored network, and update scenarios.
6. Check skip-waiting, client claiming, cache cleanup, navigation fallback, error handling, and version compatibility.
7. Reproduce with a clean profile and save console, network, registration, and cache evidence.

## Done

- A service-worker report records registration, scope, lifecycle, script version, caches, fetch paths, and reproduction steps
- Clean-profile, offline, update, stale-cache, restore, and rollback checks verify the diagnosed behavior
