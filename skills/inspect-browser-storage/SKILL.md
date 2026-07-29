---
name: inspect-browser-storage
category: web
description: Inspect cookies, local storage, session storage, IndexedDB, caches, and service-worker state for purpose and risk. Use when client data persists unexpectedly or crosses an unsafe boundary.
---

# inspect-browser-storage

Map what the browser retains, who can read it, when it expires, and how it is cleared.

## Procedure

1. Define the origin, user state, journey, environment, and question.
2. Inventory cookies, web storage, IndexedDB, Cache Storage, service workers, and downloaded files.
3. Record key purpose, value class, owner, scope, lifetime, size, and readers.
4. Check authentication, tenant, logout, consent, private mode, and account-switch transitions.
5. Inspect script access, cookie flags, origin boundaries, encryption claims, and offline behavior.
6. Identify secrets, personal data, stale schemas, orphaned caches, and unbounded growth.
7. Clear or migrate one store safely and test recovery.
8. Save a redacted browser-storage report with lifecycle evidence.

## Guardrails

- Never paste live tokens or personal values into a report.
- Browser storage is not a trusted authorization boundary.
- Do not clear user data without understanding offline and recovery effects.

## Done

- A redacted storage inventory records purpose, scope, access, and lifetime
- Logout, account switch, expiry, and clearing behavior are tested
- Stored state reconciles with the visible application state
