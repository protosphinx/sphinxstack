---
name: migrate-an-authentication-system
category: code
description: Migrate an authentication system without losing identity continuity, account control, session safety, or recovery evidence. Use when changing identity providers, credential stores, login protocols, or session architecture in a live product.
---

# migrate-an-authentication-system

An authentication migration changes who can prove control of an account. Treat identity mapping, active sessions, and recovery as first-class data migrations.

## When to use

- Use when replacing an identity provider, moving password hashes, adopting federation, merging user stores, or changing production session verification.
- Use a routine configuration change when identity identifiers, credentials, sessions, recovery, and account linking remain unchanged.

## Preconditions

- Confirm executive risk ownership, privacy and security review, maintenance constraints, support coverage, and the authority to pause or roll back.
- Obtain both systems' identifier semantics, verified attributes, credentials, MFA factors, recovery methods, sessions, service identities, audit history, and export limits.
- Define critical user cohorts, locked or disputed accounts, regulated users, administrators, and nonhuman access.

## Procedure

1. Build an **identity inventory** across old and new identifiers, verified contacts, authenticators, factors, roles, tenants, sessions, recovery state, and legal retention.
2. Define a canonical internal subject that does not depend on a mutable email address or provider-specific login name.
3. Write deterministic **account linking** rules for exact verified identifiers, collisions, aliases, provider reuse, merged accounts, and ambiguous cases.
4. Quarantine ambiguity for proof-based human review; never guess which person owns a privileged account.
5. Choose password rehash-on-login, secure bulk transfer, reset, federation, or staged enrollment based on source capability and risk.
6. Design the **session transition**: acceptance overlap, token issuer and key changes, privilege refresh, MFA continuity, logout, and forced reauthentication cohorts.
7. Migrate recovery channels and service accounts with independent validation and no weakening of account-control proof.
8. Run dry migrations on sanitized or protected data and produce an identity reconciliation report for counts, collisions, orphan records, roles, tenants, and factors.
9. Stage by low-risk cohort with dual observation, support scripts, user notices, rate-limit capacity, and measurable pause criteria.
10. Perform cutover verification through real login, recovery, MFA, logout, administrative, and revoked-access journeys.
11. Reconcile source and target identities, successful and failed transitions, unresolved cases, sessions, and audit events after each wave.
12. Rehearse **rollback** before launch and keep old verification available only for the bounded period required by the approved plan.

## Failure plan

- Pause migration if ownership becomes ambiguous, privileged roles drift, recovery weakens, or reconciliation exceeds the approved threshold.
- Revoke or quarantine sessions whose subject, tenant, assurance, or privilege cannot be proven in the target system.
- Use the rehearsed rollback to restore the last known-good verification path without overwriting target-side evidence.
- Keep a protected manual recovery lane with separation of duties for users stranded by provider or factor failure.
- Never mass-link accounts on email similarity or bypass MFA merely to reduce support volume.

## Worked example

A business application moves from a legacy username store to an external OpenID Connect provider. Its identity inventory finds duplicate emails, shared mailboxes, dormant administrators, local MFA, and API users. The team creates immutable internal subjects, auto-links only exact provider identities with verified contacts, and routes collisions to reviewed recovery. During session transition, ordinary users can finish a short old session while administrators reauthenticate immediately. A 5 percent pilot reveals that suspended source users were provisioned as active, so the wave pauses. The mapping is corrected, source and target counts reconcile, critical journeys pass, and the rollback rehearsal proves the old issuer can resume without accepting newly revoked access.

## Done

- An identity reconciliation report verifies the identity inventory, account linking outcomes, roles, tenants, factors, service identities, and exceptions
- Cutover verification records login, recovery, MFA, session transition, logout, administration, and revoked-access journeys
- A rollback rehearsal proves pause, restoration, evidence preservation, and safe resumption
