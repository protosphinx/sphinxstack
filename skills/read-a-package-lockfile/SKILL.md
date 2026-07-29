---
name: read-a-package-lockfile
category: code
description: Read a package lockfile to identify resolved versions, dependency paths, integrity, sources, platforms, and unexpected changes. Use when reviewing installation, upgrade, vulnerability, or supply-chain evidence.
---

# read-a-package-lockfile

Read the lockfile with the package manager and format that produced it.

## When to use

- Use during dependency review, incident analysis, reproducibility checks, or merge review.
- Do not edit generated lock entries manually unless the package manager explicitly supports it.

## Preconditions

- Identify manifest, lock format and version, package manager and version, registries, workspace, and target platforms.

## Procedure

1. Preserve the lockfile and compare it to the relevant base revision.
2. Identify direct requirements and each resolved transitive path.
3. Inspect version, source, registry or URL, integrity, optionality, peer, platform, and lifecycle metadata.
4. Explain duplicate versions and resolution overrides.
5. Flag new sources, git URLs, local paths, missing integrity, scripts, and surprising transitive growth.
6. Reproduce installation in a clean authorized environment without updating the lock.
7. Record findings and regenerate through the correct package-manager command when change is approved.

## Failure plan

- If the format or package-manager version is unknown, do not infer fields from another ecosystem.

## Worked example

A minor direct upgrade introduces a git-sourced transitive package with an install script; the reviewer traces its path and blocks release pending provenance.

## Done

- A lockfile review report records format, versions, paths, sources, integrity, duplicates, scripts, diff, and findings
- Clean-install, manifest, package-manager-version, registry, platform, provenance, and lock-stability checks verify interpretation
