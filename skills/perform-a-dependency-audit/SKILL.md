---
name: perform-a-dependency-audit
category: code
description: Audit direct and transitive software dependencies for necessity, provenance, maintenance, security, license, compatibility, and upgrade risk. Use when performing release review, maintenance planning, incident response, or supply-chain hardening.
---

# perform-a-dependency-audit

Produce an actionable inventory rather than a raw scanner dump. Evaluate whether the application actually
reaches the risky component and what a safe remediation would change.

## Inputs

- Gather manifests, lockfiles, build files, containers, generated clients, vendored code, and deployed artifacts.
- Record runtime, development, optional, platform, and transitive dependency paths.
- Use current authoritative advisories, license data, project releases, and maintenance signals.

## Procedure

1. Generate a reproducible dependency and provenance inventory from the built artifact.
2. Identify unpinned, unverified, duplicated, abandoned, unexpected, or unnecessary packages.
3. Map each dependency to purpose, owner, execution context, privilege, data access, and update path.
4. Check advisories and supported versions, recording source and date.
5. Assess reachability and exploit preconditions instead of ranking only by published severity.
6. Review license, export, platform, compatibility, and maintenance constraints with responsible owners.
7. Prioritize remove, replace, upgrade, isolate, accept, or investigate decisions.
8. Plan upgrades with release notes, migration work, tests, lockfile diff, and rollback.
9. Verify the rebuilt artifact contains the intended versions and no unexpected additions.
10. Save exceptions with risk owner, compensating control, expiry, and review trigger.

## Boundaries

Do not publish private dependency graphs, exploit details, or internal exposure without approval. Never auto-upgrade
production dependencies solely from scanner output. Preserve lockfiles and generated artifacts needed for a
reproducible review.

## Done

- The inventory reconciles manifests, lockfiles, transitive paths, and the deployed artifact
- Findings include reachability, context, evidence source, and remediation choice
- Planned changes have compatibility tests, owners, rollback, and verification
- Accepted risks and false positives have dated evidence and review triggers
