---
name: migrate-a-global-identity-platform
category: code
description: Migrate a global identity platform through subject continuity, authentication and federation parity, credential protection, authorization dependencies, staged cutover, recovery, and revocation. Use when workforce or customer identity must move without account takeover or mass exclusion.
---
# migrate-a-global-identity-platform

Preserve each person’s identity while replacing every trust relationship around it.

## When to use
- Use for identity provider, directory, federation, authentication, account, or tenant consolidation.
- Activate identity, security, privacy, legal, accessibility, support, fraud, regional, application, and continuity authority.
## Preconditions
- Inventory subjects, identifiers, tenants, directories, credentials, factors, sessions, federation, applications, groups, provisioning, recovery, risk, consent, residency, and support.
- Define canonical identity, proof standards, high-risk capabilities, recovery objectives, and stop authority.
## Procedure
Complete **identity and trust inventory**, **authentication and dependency parity**, **staged authority transfer**, and **recovery and retirement**.
1. Build a **global identity migration register** for subject, aliases, tenant, credential, factor, session, group, federation, consent, application, recovery, region, risk, and owner.
2. Resolve duplicate, merged, split, changed-name, recycled, guest, service, shared, minor, deceased, and inaccessible identities without weak automatic linking.
3. Map password and passwordless credentials, keys, factors, recovery, device trust, risk signals, sessions, federation, provisioning, and deprovisioning semantics.
4. Rebuild application audience, claims, scopes, groups, roles, consent, logout, token lifetime, revocation, and break-glass contracts.
5. Protect credential material through lawful migration, reset, or phased enrollment; never downgrade proof silently.
6. Test accessible sign-in, recovery, changed contact, lost device, weak connectivity, language, displacement, and support journeys.
7. Assign subject and trust epochs; shadow-compare authentication, identity linking, claims, provisioning, and revocation without accepting the more permissive result.
8. Maintain a per-subject authorization-state ledger per tenant and application with change event ID, source sequence, effective time, tombstone, source and target acknowledgement, authorization version, and trust epoch.
9. Put authorization version in tokens; high-risk applications reject old versions, unresolved removals remain quarantined, and idempotent rollback cannot revive tombstoned membership.
10. Cut over bounded tenants, applications, regions, or cohorts only after provisioning queues and removals reconcile, with safe communication, support, fraud monitoring, rollback, and one token authority.
9. Reauthorize high-risk capability separately after identity continuity; quarantine long-lived sessions, jobs, integrations, and privileged grants until current policy passes.
10. Reconcile sign-in, tokens, sessions, groups, application access, provisioning, recovery, support, fraud, false reject, and false accept.
11. Retire old federation, credentials, sessions, connectors, keys, data, and recovery only after rejection, retention, audit, and restore duties are proven.
## Failure plan
- If identity linking is ambiguous, keep identities separate and route to safe proof.
- If both platforms can mint accepted tokens, fence one issuer before proceeding.
- If a cohort experiences harmful exclusion or takeover, stop, restore safe authority, and reconcile.
## Worked example
A multinational business moves employees, contractors, customers, service accounts, social logins, enterprise federation, passkeys, recovery, groups, and application tokens from several regional providers while names, identifiers, residency, accessibility, fraud risk, and labor obligations differ. The migration resolves identity carefully, preserves proof strength, fences token authority, quarantines privilege, and verifies both takeover and exclusion.
## Done
- A global identity migration register verifies subjects, aliases, credentials, factors, sessions, groups, federation, consent, applications, recovery, regions, risks, and ownership
- An identity, authentication, claim, provisioning, accessibility, privacy, and authorization parity report proves safe linking, proof strength, application behavior, revocation, and unresolved exceptions
- A cutover, recovery, and retirement report demonstrates issuer fencing, authorization-version enforcement, removal-wins ordering, cohort gates, privileged-capability reauthorization, false-accept and false-reject monitoring, rollback without privilege revival, old-trust rejection, and independent acceptance
