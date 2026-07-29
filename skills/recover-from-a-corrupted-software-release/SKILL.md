---
name: recover-from-a-corrupted-software-release
category: code
description: Recover from a corrupted software release by containing untrusted artifacts, preserving evidence, rebuilding from verified sources, and restoring state-compatible service. Use when release integrity or provenance is uncertain.
---

# recover-from-a-corrupted-software-release

Do not roll back to another artifact from the same untrusted chain.

## When to use

- Use when artifacts are truncated, mutated, malicious, regionally inconsistent, unsigned, unreproducible, or built from uncertain source or dependencies.
- Use normal rollback when artifact identity, provenance, integrity, and compatible state are still trusted.

## Preconditions

- Establish incident, security, release, application, data, registry, build, communications, and recovery authority.
- Preserve source, commits, tags, build logs, runners, dependencies, lockfiles, signatures, attestations, artifacts, registries, caches, deployments, runtime hashes, and database changes.
- Stop automatic promotion, rebuild, garbage collection, cache purge, and credential reuse until evidence is captured.

## Procedure

1. Define the **release trust boundary** across source control, CI, runners, dependencies, registries, signing, storage, CDN, deployment, hosts, and runtime.
2. Build a timeline of creation, upload, replication, caching, deployment, observed hashes, execution, state changes, and discovery.
3. Conduct **containment and evidence** preservation by blocking promotion, quarantining artifacts, protecting logs, limiting credentials, and recording affected versions, regions, hosts, and users.
4. Compare source commit, build inputs, lockfiles, toolchains, artifact hashes, signatures, attestations, registry metadata, and runtime files.
5. Determine whether corruption is build-time, storage, transfer, cache, deployment, host, runtime, or malicious without naming a cause prematurely.
6. Assess database migrations, queues, sessions, caches, files, external calls, secrets, and accepted writes before choosing recovery.
7. Produce a **trusted rebuild** in a clean isolated environment from reviewed source and pinned, verified dependencies with new credentials and attestations as needed.
8. Compare reproducible outputs or explain nondeterminism; scan, sign, store, and promote through a clean path.
9. Design **state-compatible recovery** through trusted rollback, forward repair, failover, or restore while preserving externally committed effects.
10. Rehearse on production-shaped state, then canary with independent artifact and runtime verification.
11. Restore regions and traffic gradually while monitoring integrity, behavior, security, data, and business outcomes.
12. Revoke compromised trust, repair build and release controls, reconcile every artifact and host, notify affected parties, and close only after recurrence tests.

## Failure plan

- If the last-known-good artifact shares the untrusted build, registry, signing, or cache path, quarantine it until independently verified.
- If database or external effects make rollback destructive, use a state-compatible forward repair or restore plan.
- If evidence will be lost through rebuild or purge, preserve it first unless immediate containment of active harm requires priority action.
- If source or dependency provenance cannot be established, keep the release unavailable and escalate rather than declaring a clean build.
- Never overwrite quarantined artifacts, reuse possibly compromised signing material, or equate a matching filename with integrity.

## Worked example

A release tag produces different hashes across two regions under the same version. Registry metadata was overwritten, build provenance is incomplete, edge caches contain mixed files, and the prior release came from the same runner. A database migration already committed new rows. The team halts promotion, preserves each artifact and runtime hash, quarantines the build and signing chain, verifies source and dependencies, produces a clean attested rebuild, and performs a forward-compatible canary rather than trusting the apparent rollback artifact.

## Done

- A release corruption timeline records release trust boundary, source, builds, artifacts, hashes, signatures, regions, runtimes, state changes, discovery, containment, and custody
- An artifact and runtime integrity report proves containment and evidence, affected scope, provenance comparison, corruption layer, credentials, data effects, and recovery decision
- A clean recovery and recurrence report verifies trusted rebuild, state-compatible recovery, canary, independent runtime hashes, data and business controls, trust revocation, remediation, monitoring, and closeout
