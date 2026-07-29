---
name: build-a-secret-rotation-workflow
category: code
description: Build a secret rotation workflow with consumer inventory, overlapping trust, staged distribution, verification, revocation, rollback, and evidence. Use when credentials must change without unknown outage or residual access.
---
# build-a-secret-rotation-workflow
## When to use
- Use for passwords, tokens, keys, certificates, signing material, or machine identities.
- Never store secret values in plans, logs, tickets, or source.
## Preconditions
- Inventory issuer, consumers, privileges, storage, delivery, sessions, dependencies, owners, and revocation.
## Procedure
1. Assign a versioned secret identity and affected trust boundary.
2. Discover direct, transitive, offline, emergency, and dormant consumers.
3. Create new trust through authorized isolated generation.
4. Distribute least-privilege references and verify each consumer on the new version.
5. Handle dual trust only for a bounded recorded overlap.
6. Revoke old trust, reject it in tests, close sessions, and monitor residual use.
7. Preserve rollback without silently reactivating compromised material.
## Failure plan
- Stop revocation when a critical unknown consumer appears, contain its privilege, and resolve ownership.
## Worked example
A database credential rotates by workload cohort, with old-login rejection and session closure proven afterward.
## Done
- A rotation workflow document records secret identity, consumers, generation, distribution, verification, revocation, rollback, and ownership
- Unknown-consumer, overlap, session, stale-copy, least-privilege, old-secret-rejection, and recovery tests verify closure
