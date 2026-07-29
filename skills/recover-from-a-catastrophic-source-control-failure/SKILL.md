---
name: recover-from-a-catastrophic-source-control-failure
category: code
description: Recover from catastrophic source-control failure through evidence preservation, distributed object inventory, trust reconstruction, history repair, credential recovery, and independently verified restoration. Use when central repositories, mirrors, backups, signing, or history integrity are broadly compromised.
---

# recover-from-a-catastrophic-source-control-failure

Treat every clone and build artifact as potential recovery evidence, not automatic truth.

## When to use

- Use for destructive history rewrite, repository loss, object corruption, malicious ref change, compromised host, failed backups, or signing-key loss.
- Activate qualified incident, source-control, security, identity, legal, records, build, release, and project authority.

## Preconditions

- Establish independent incident authority, trusted communication, write freeze, evidence custody, emergency access control, and recovery decision rights.
- Define repositories, forks, mirrors, worktrees, submodules, large-file stores, artifacts, releases, registries, credentials, signatures, and retention.
- Create isolated recovery storage that does not trust the failed service.

## Procedure

Complete **containment and distributed preservation**, **object and trust reconciliation**, **authoritative reconstruction**, and **verified service restoration**.

1. Open a **source-control failure timeline** for systems, refs, objects, identities, changes, deletions, symptoms, decisions, and communications.
2. Stop pushes, replication, garbage collection, retention cleanup, automation, and deployments that could propagate damage.
3. Preserve failed servers, storage, logs, audit events, refs, reflogs, object databases, packs, hooks, configs, databases, keys, and backups.
4. Collect protected manifests from independent clones, forks, worktrees, bundles, CI checkouts, release artifacts, registries, developer machines, and offline archives without overwriting originals.
5. Hash and inventory commits, trees, blobs, tags, refs, signatures, large objects, submodules, uncommitted files, and provenance per source.
6. Reconstruct the last independently supported ref graph and classify consensus, unique, conflicting, missing, suspicious, and unverifiable objects.
7. Resolve malicious or accidental changes through authorized review, verified signatures where meaningful, build and release evidence, contributor attestation, and content comparison.
8. Preserve all unique disputed objects in a quarantine namespace even when excluded from restored canonical history.
9. Rebuild repositories from verified objects in clean infrastructure; restore branches, tags, permissions, protections, hooks, integrations, and retention deliberately.
10. Rotate credentials, tokens, deploy keys, signing keys, sessions, automation identities, and downstream secrets based on exposure.
11. Reproduce critical builds from reconstructed commits and compare hashes, provenance, tests, SBOMs, signatures, and deployed behavior.
12. Publish recovery status, history changes, lost or disputed state, developer actions, new trust, and correction routes.
13. Keep every pre-recovery clone read-only after capturing its object and configuration manifest; require a fresh clone with new credentials from the independently restored service.
14. Import unique local work only through a quarantined bundle or patch tied to original object IDs, reviewed against the reconstruction decision, scanned, and deliberately applied in the clean clone.
15. Reconcile branches, stashes, worktrees, submodules, large-file objects, remotes, hooks, configuration, and credentials in a **developer reconciliation ledger**; allow push only after named approval.
16. Resume bounded writes, monitor divergence, and harden independent backups, bundles, restore drills, transparency, and change controls.

## Failure plan

- If authoritative history cannot be established, publish a bounded partial recovery with disputed refs rather than inventing continuity.
- If a contributor clone may be compromised, treat it as one evidence source and require independent corroboration.
- If secrets or signing trust may be exposed, replace them before restored code can deploy.
- If restoration could destroy unique work, quarantine and preserve first.

## Worked example

An attacker compromises the central Git service, rewrites protected branches and tags, deletes repositories and backups, steals signing and deploy keys, while mirrors replicate damage and teams retain divergent clones plus unpushed work. Recovery freezes propagation, inventories distributed objects, reconstructs supported history, quarantines disputes, rotates trust, rebuilds critical releases, and independently verifies the restored service.

## Done

- A source-control failure timeline verifies systems, identities, destructive events, evidence custody, propagation, decisions, and communications
- A repository object, ref, signature, clone, artifact, release, and unique-work reconciliation proves reconstructed history, disputes, missing state, provenance, and trust limits
- A restoration and trust report demonstrates clean hosting, protections, credential and signing replacement, reproducible critical builds, an approved developer reconciliation ledger, controlled unique-work import, monitoring, backup reform, and independent acceptance
