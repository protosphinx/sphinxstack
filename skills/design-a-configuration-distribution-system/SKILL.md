---
name: design-a-configuration-distribution-system
category: code
description: Design configuration distribution with source authority, schema, versioning, signing, targeting, staged propagation, rollback, caching, and audit. Use when many runtimes depend on changing operational settings.
---
# design-a-configuration-distribution-system
## When to use
- Use for service, device, edge, agent, or fleet configuration.
- Keep secrets in a dedicated secret system and prevent unreviewed code execution through configuration.
## Procedure
1. Define owners, schemas, environments, targets, defaults, and prohibited values.
2. Store immutable versions with review, provenance, signature, and audit.
3. Distribute using monotonic epochs and authenticated integrity.
4. Validate before acceptance and preserve last-known-good state.
5. Stage by cohort with health gates, expiry, rollback, and emergency authority.
6. Handle offline, cache, partial propagation, version skew, and clock behavior.
7. Test corruption, stale replay, signer loss, outage, rollback, and recovery.
## Failure plan
- Reject invalid or stale configuration and use the explicit safe version.
## Worked example
An edge fleet rejects a replayed signed configuration because its epoch is older than accepted state.
## Done
- A configuration design records authority, schema, versions, signing, targeting, propagation, gates, rollback, and audit
- Invalid, stale, corrupt, offline, partial, signer, cache, rollback, and recovery tests verify distribution
