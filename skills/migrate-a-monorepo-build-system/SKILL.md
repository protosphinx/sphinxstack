---
name: migrate-a-monorepo-build-system
category: code
description: Migrate a monorepo build system through target inventory, dependency graph parity, hermetic execution, cache integrity, developer workflows, staged cutover, and rollback. Use when changing how many projects build and test together.
---
# migrate-a-monorepo-build-system
## When to use
- Use for task runners, build graphs, remote caches, package layouts, or CI orchestration.
- Do not combine unexplained output changes with build-tool migration.
## Procedure
1. Inventory targets, inputs, outputs, dependencies, tools, platforms, CI, and developer commands.
2. Define canonical graph and hermetic input boundaries.
3. Reproduce outputs, tests, generated code, packaging, and side effects under both systems.
4. Secure local and remote cache identity, tenant, provenance, and write authority.
5. Migrate representative projects and rare platform cases.
6. Compare clean builds, incremental builds, failures, performance, and artifacts.
7. Cut over by target cohort with fallback and old-system retirement evidence.
## Failure plan
- Keep a target on the old path when graph or output parity is unresolved.
## Worked example
A generated API client depends on an undeclared environment tool, revealed by a clean hermetic build.
## Done
- A build migration report records targets, graph, inputs, outputs, cache, workflows, cohorts, comparison, and rollback
- Clean, incremental, generated, cross-platform, cache-poison, CI, developer, artifact, and fallback tests verify migration
