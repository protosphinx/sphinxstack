---
name: create-a-local-development-environment
category: code
description: Create a reproducible local development environment with pinned tools, isolated services, safe configuration, fixtures, reset, and verification. Use when contributors need a reliable path from clone to working code.
---

# create-a-local-development-environment

Automate the smallest environment that reproduces real interfaces.

## When to use

- Use for onboarding, cross-platform development, isolated debugging, or consistent tests.
- Do not copy production secrets, personal data, or unrestricted database dumps into local machines.

## Procedure

1. Inventory runtime, package manager, compiler, services, ports, system libraries, and supported platforms.
2. Pin tool versions and define one bootstrap command with explicit prerequisites.
3. Use safe example configuration and an approved secret-injection path.
4. Provide synthetic or de-identified fixtures with deterministic creation.
5. Isolate containers, databases, caches, queues, names, ports, and volumes by project or worktree.
6. Add health checks, migrations, seed, start, stop, reset, and cleanup.
7. Verify build, tests, service journey, offline or failure state, and a clean rebuild.
8. Document troubleshooting from observable errors and maintain ownership.

## Done

- A local setup script and document pin tools, configure safe services, create fixtures, and support reset
- A clean-machine or clean-container check verifies clone, bootstrap, build, tests, journey, stop, and rebuild
