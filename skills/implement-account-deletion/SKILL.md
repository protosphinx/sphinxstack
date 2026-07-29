---
name: implement-account-deletion
category: web
description: Implement account deletion across identity, product data, derived stores, vendors, retention duties, and user confirmation. Use when users need a reliable way to close an account and remove or irreversibly anonymize eligible data.
---

# implement-account-deletion

Turn a user request into a reconciled lifecycle, not a hidden support ticket.

## When to use

- Use for self-service closure, administrator-assisted deletion, privacy requests, or replacing an incomplete soft-delete flag.
- Distinguish account deletion from workspace transfer, subscription cancellation, and record retention.

## Procedure

1. Inventory identity, profile, content, shared objects, billing, support, security, analytics, search, caches, exports, backups, models, and vendor data.
2. Define delete, anonymize, detach, transfer, retain, and expire rules with purpose, authority, owner, and deadline.
3. Show the user scope, consequences, shared-content handling, subscription effects, retained categories, timing, and any reversible cooling period.
4. Reauthenticate proportionately and protect against takeover, coercion, CSRF, replay, and administrator misuse.
5. Create one idempotent deletion case, revoke sessions and credentials, block new processing, and coordinate ownership transfer where required.
6. Execute dependency-aware deletion or anonymization across primary and derived systems, vendors, indexes, caches, and generated artifacts.
7. Keep legally retained data segregated, access-controlled, purpose-limited, and automatically expired. Do not present retention as completed deletion.
8. Define backup expiry and restoration controls so deleted data does not silently return to active use.
9. Reconcile every system response, retry transient failures, escalate permanent exceptions, and prohibit account recreation from relinking deleted state automatically.
10. Send a minimal receipt that contains no sensitive deleted content and provide support or cancellation paths consistent with the chosen policy.

## Failure plan

- If a dependency fails, keep the case open, prevent renewed processing, retry safely, and expose the exception to an owner.
- If identity may be compromised, pause irreversible action and use a recovery path that does not rely only on attacker-controlled channels.

## Done

- A deletion map records every data store, action, authority, owner, deadline, vendor, backup, and shared-content rule
- Security and lifecycle tests verify reauthentication, idempotency, revocation, dependency failure, cancellation, and no silent relinking
- A reconciliation report proves each eligible system completed deletion or anonymization and identifies time-bound retained exceptions
