---
name: pin-a-dependency-version
category: code
description: Pin a dependency through the project's package and lockfile conventions while preserving reproducible resolution and update intent. Use when uncontrolled version drift can change builds or runtime behavior.
---

# pin-a-dependency-version

Pin through the package manager, not by editing resolved files blindly.

## When to use

- Use for direct, transitive, toolchain, image, action, or runtime dependencies.
- Do not pin a vulnerable version merely to make a test pass or bypass supported upgrade requirements.

## Procedure

1. Identify dependency, current source, direct or transitive status, affected environments, and reason for the pin.
2. Check project policy, package-manager semantics, supported versions, advisories, and upstream release notes.
3. Choose the narrowest stable version rule that meets the reproducibility need.
4. Update manifest, override or resolution, and lockfile with the approved package manager.
5. Verify checksums, registry source, signatures or provenance where available, and no unexpected dependency changes.
6. Run install from a clean cache plus relevant build, test, and runtime checks.
7. Document why the pin exists, owner, removal condition, and update review date.

## Done

- Manifest and lockfile resolve the intended dependency version from the approved source without unrelated changes
- Clean installation, build, tests, advisory review, and pin-removal record are completed
