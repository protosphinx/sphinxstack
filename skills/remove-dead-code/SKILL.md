---
name: remove-dead-code
category: code
description: Produce a removal report and delete unused code, configuration, flags, assets, or dependencies while preserving observable behavior and recovery evidence. Use when maintenance work identifies code believed to be unreachable or obsolete.
---

# remove-dead-code

Prove absence of use across static references, dynamic loading, configuration, runtime telemetry, and supported
entry points before deletion. Keep the removal narrow and reversible.

## Inputs

- Gather the candidate code, ownership, history, entry points, build targets, flags, plugins, reflection, and deployment variants.
- Use static search, dependency analysis, tests, runtime signals, documentation, and consumer inventory.
- Confirm the observation window and environments where use could occur.

## Procedure

1. State exactly what will be removed and the behavior it once supported.
2. Search code, configuration, templates, scripts, documentation, generated files, and external interfaces.
3. Inspect dynamic import, reflection, plugin, scheduled, migration, fallback, and platform-specific paths.
4. Review runtime telemetry and explain coverage, sampling, retention, and blind spots.
5. Identify owners and known consumers; announce removal when an external dependency is possible.
6. Capture baseline builds, tests, bundles, APIs, and representative behavior.
7. Delete the smallest coherent slice, including stale tests and configuration only when their purpose is gone.
8. Rebuild every supported target and run focused plus surrounding tests.
9. Compare public interfaces, artifacts, size, warnings, startup, and runtime signals.
10. Keep a revert path and monitor the affected release window.

## Boundaries

Never equate no search result with no runtime use. Do not remove compatibility, migration, security, or recovery
code without the responsible owner's review. Preserve user data and public contracts.

## Done

- Static, dynamic, configuration, runtime, and consumer evidence supports the removal
- The deleted slice and its former behavior are documented
- Supported builds, interfaces, tests, and representative workflows are checked
- A revert path exists and post-release signals show no unexpected use
