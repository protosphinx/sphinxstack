---
name: create-a-progressive-web-app
category: web
description: Create an installable progressive web app with resilient loading, honest offline behavior, and safe update controls. Use when a web experience benefits from device integration without losing web reach.
---

# create-a-progressive-web-app

Add progressive capabilities only where they improve a defined journey and fail safely.

## Procedure

1. Define install, offline, notification, share, file, or background capabilities the users actually need.
2. Establish secure origin, responsive shell, accessible navigation, and reliable core journey first.
3. Create a valid manifest with identity, icons, display, scope, start URL, and theme behavior.
4. Register a narrowly scoped service worker with versioned caches and controlled activation.
5. Choose cache strategies per resource and define freshness, invalidation, quota, and logout behavior.
6. Provide explicit offline, stale, syncing, failed, and update-available states.
7. Request permissions only after contextual user intent and support denial recovery.
8. Test install, upgrade, rollback, storage eviction, offline restart, reconnect, and multi-tab behavior.
9. Monitor service-worker versions, cache errors, update adoption, and user outcomes.

## Guardrails

- Never cache private responses across accounts or tenants.
- Do not force an update while unsaved work is present.
- An installed icon does not justify misleading native-app claims.

## Done

- A PWA implementation and cache-policy report are documented
- Install, offline, upgrade, eviction, and rollback cases are tested
- Cached and server state reconcile after reconnect and logout
