---
name: rotate-a-compromised-secret
category: code
description: Contain, replace, and verify credentials after suspected or confirmed exposure. Use when a token, key, password, certificate, signing secret, or machine credential may be copied, logged, leaked, or misused.
---

# rotate-a-compromised-secret

Treat rotation as incident containment and dependency recovery, not a string replacement. Preserve evidence while minimizing the time an attacker could retain access.

## When to use

- Use for suspected or confirmed exposure of a token, key, password, certificate, signing secret, or machine credential.
- Use the ordinary secrets-management procedure for planned rotation with no exposure signal.

## Preconditions

- Confirm incident authority, secret owner, affected environments, safety constraints, and communication channel.
- Use approved secret stores and privileged access. Never paste secret values into tickets, chat, or this procedure.

## Procedure

1. Record discovery time, source, secret type, scope, privilege, last known safe state, and evidence references.
2. Preserve relevant logs and artifacts without copying the live value.
3. Build a dependency inventory covering the issuer, enforcement points, consumers, replicas, caches, automation, human holders, and downstream credentials.
4. Assess active misuse and blast radius from audit logs, source history, build output, telemetry, and provider records.
5. Contain urgently: restrict scope, disable unsafe automation, revoke sessions, or block indicators while preserving critical service.
6. Create a new independent credential with least privilege, correct lifetime, and an accountable owner.
7. Update consumers in a sequenced rollout with health, authentication, and authorization checks.
8. Perform sequenced revocation at every enforcement point; do not rely on deleting a local copy.
9. Search for residual copies and residual exposure in history, logs, artifacts, backups, images, caches, and third parties.
10. Verify old-secret failure, new-secret success, service health, audit visibility, and absence of continued misuse.
11. Document cause, affected window, obligations, corrective controls, and residual-risk acceptance.

## Failure plan

- If revocation could cause material harm, use a time-bounded overlap only with explicit incident authority and monitoring.
- Stop rollout on unauthorized access, unknown consumers, or unrecoverable service degradation; preserve containment.
- Do not rewrite shared repository history without coordinating downstream recovery and evidence preservation.
- Escalate certificate, signing, encryption, or root credential exposure because consequences can outlive ordinary rotation.

## Done

- The exposure record verifies discovery, scope, privilege, provenance, and containment
- Consumer cutover evidence verifies known consumers use the replacement and pass scoped checks
- Old-secret rejection proof verifies revocation at enforcement points and relevant session termination
- Residual copies, sessions, downstream credentials, and residual exposure are accounted for
- The incident record proves containment, recovery, and residual-risk ownership
