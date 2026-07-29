---
name: harden-a-dependency-update-process
category: code
description: Harden dependency updates with provenance, review, compatibility, generated-lock control, staged testing, rollback, and monitoring. Use when automated or manual upgrades can alter production supply-chain risk.
---
# harden-a-dependency-update-process
## When to use
- Use for language packages, actions, images, toolchains, SDKs, or system libraries.
- Never auto-merge high-risk updates solely because tests are green.
## Preconditions
- Inventory manifests, locks, registries, sources, maintainers, update tools, consumers, and release gates.
## Procedure
1. Classify update by source, privilege, runtime reach, semantic change, and exploit urgency.
2. Verify publisher, provenance, signature or integrity, release notes, ownership, and compromise signals.
3. Regenerate locks only with the pinned package manager and review transitive changes.
4. Run unit, contract, integration, security, build, and representative behavior tests.
5. Stage rollout with immutable artifacts, monitoring, and rollback.
6. Track exceptions, ignored updates, expiry, and residual vulnerability.
## Failure plan
- Pin or revert when provenance, compatibility, or behavior cannot be established.
## Worked example
A patch update adds a new install script and publisher, so automation opens review instead of merging.
## Done
- A dependency-update report records classification, provenance, lock diff, tests, approval, rollout, rollback, and residual risk
- Publisher, source, integrity, transitive, script, compatibility, artifact, canary, and revert tests verify change
