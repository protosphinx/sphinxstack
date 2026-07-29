---
name: upgrade-a-dependency-safely
category: code
description: Upgrade a software dependency with release-note review, compatibility checks, lockfile control, targeted migration, and a tested rollback. Use when a library, framework, runtime, action, image, or package must move to a newer version without hiding behavioral or supply-chain risk.
---

# upgrade-a-dependency-safely

Treat an upgrade as a change to the program, not housekeeping. Understand why it is needed, identify the
affected surface, change one dependency boundary, and prove the built artifact still behaves correctly.

## Inputs

- Read repository instructions, dependency manifests, lockfiles, build images, and automated update policy.
- Record the current version, target range, reason, supported runtime, and owner.
- Use current official release notes, migration guides, advisories, and package provenance.

## Procedure

1. Reproduce the current build and relevant tests from a clean dependency state.
2. Inspect every direct and transitive place the dependency enters: manifest, lockfile, imports, plugins, generated code, CI, and runtime image.
3. Read all intervening official release notes. List breaking changes, security fixes, deprecations, new requirements, and changed defaults.
4. Check package identity, publisher, signatures or integrity metadata, release age, and supported platforms before downloading.
5. Choose the smallest target that satisfies the reason for upgrading. Avoid bundling unrelated dependency movement.
6. Update the manifest and regenerate the lockfile with the repository's package manager. Review every lockfile change.
7. Apply required code or configuration migration narrowly. Preserve compatibility layers when callers cannot move together.
8. Run targeted tests for affected APIs, serialization, output, errors, startup, and build tooling.
9. Run the required full suite and compare artifact size, warnings, performance, and runtime behavior with the baseline.
10. Rehearse reverting the manifest and lockfile or promoting the last known-good artifact.
11. Record version, reason, migration, verification, provenance, residual deprecations, and rollback.

## Boundaries

Do not suppress an advisory without an owner and documented rationale. Never accept an unexpected package,
publisher, install script, or lockfile expansion merely because tests pass. Do not combine major framework
upgrades with feature work.

## Done

- A verified dependency record links the target version to official release notes, advisories, and package provenance
- Manifest and lockfile changes are checked to contain only the intended dependency movement and reviewed transitive effects
- Targeted and full checks pass against a clean install, with baseline differences explained
- A rollback rehearsal restores the previous dependency set or last known-good artifact

Then use create-a-deployment-pipeline to keep dependency verification repeatable.
