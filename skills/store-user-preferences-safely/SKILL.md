---
name: store-user-preferences-safely
category: code
description: Store user preferences with minimal data, clear ownership, versioned schemas, and reliable synchronization. Use when an application must remember settings across sessions or devices.
---

# store-user-preferences-safely

Treat preferences as user data with lifecycle and authorization requirements, not as an unbounded settings blob.

## Procedure

1. Inventory each preference, its purpose, sensitivity, owner, default, and retention need.
2. Choose local, account-level, workspace-level, or device-level storage deliberately.
3. Define a versioned allowlist schema with types, bounds, and migration behavior.
4. Authorize reads and writes against the correct user and tenant on the server.
5. Encrypt sensitive values where justified and never store credentials as preferences.
6. Define offline updates, synchronization, conflicts, reset, export, and deletion behavior.
7. Apply safe defaults when a value is missing, obsolete, or invalid.
8. Test cross-account isolation, concurrent edits, migrations, corruption, and account deletion.

## Guardrails

- Do not place sensitive preferences in URLs or broadly readable browser storage.
- Never trust a stored preference to grant permission or bypass validation.
- Avoid retaining historical values unless users need and understand that history.

## Done

- The preference schema, defaults, ownership, and retention are documented
- Isolation, sync, migration, reset, and deletion tests are verified
- Stored records reconcile with the user-visible preference page
