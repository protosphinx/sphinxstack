---
name: review-a-dependency-update
category: code
description: Review a dependency update for provenance, compatibility, security, behavior, transitive change, build output, rollout, and rollback. Use when a library, toolchain, action, image, or runtime version changes.
---

# review-a-dependency-update

Review what will actually resolve and run.

## When to use

- Use for automated or manual dependency update pull requests.
- Do not approve from version number, green unit tests, or release-note summary alone.

## Procedure

1. Identify source, current and proposed versions, direct or transitive role, consumers, and environments.
2. Read official release, migration, deprecation, security, license, and support information.
3. Inspect manifest and lockfile changes, provenance, checksums, maintainers, install scripts, and unexpected packages.
4. Search code for changed APIs, defaults, configuration, serialization, timing, errors, and platform requirements.
5. Run clean install, build, lint, unit, integration, contract, security, and representative runtime tests.
6. Compare bundle, binary, image, performance, memory, startup, and output where relevant.
7. Stage the update with monitoring and a tested rollback or pin.
8. Record accepted risk, follow-up deprecations, owner, and deadline.

## Done

- A dependency review report covers release changes, provenance, transitive graph, compatibility, security, license, and runtime impact
- Clean build, representative tests, rollout monitoring, and rollback evidence verify the accepted update
