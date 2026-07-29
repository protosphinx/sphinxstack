---
name: audit-a-build-pipeline
category: code
description: Audit a build pipeline for source provenance, dependency integrity, isolated execution, secrets, artifact reproducibility, signing, promotion, and evidence. Use when release trust depends on CI or build infrastructure.
---

# audit-a-build-pipeline

Trace the released artifact back to authorized source and controlled inputs.

## When to use

- Use before release, after pipeline change, or during supply-chain review.
- Never expose credentials or execute untrusted build steps with production authority.

## Preconditions

- Inventory repositories, triggers, runners, identities, dependencies, caches, registries, artifacts, signing, environments, and deployments.

## Procedure

1. Map source commit to trigger, workflow version, runner, inputs, dependencies, outputs, and promotion.
2. Verify branch protection, review, workflow-change authority, pinning, and fork boundaries.
3. Inspect runner isolation, network, filesystem, persistence, cache keys, and cleanup.
4. Trace secrets, tokens, OIDC claims, permissions, lifetime, masking, and environment separation.
5. Verify lockfiles, sources, integrity, generated code, compilers, base images, and build scripts.
6. Record artifact hashes, provenance, SBOM, signing, attestations, and immutable promotion.
7. Rebuild cleanly where feasible and compare expected outputs or explain nondeterminism.
8. Test compromise, cache poison, secret exposure, tampering, rollback, and revocation.

## Failure plan

- Stop promotion when artifact provenance or builder trust cannot be established.

## Worked example

An audit finds a mutable third-party action and cross-branch cache; both are pinned and isolated before a clean signed rebuild.

## Done

- A build-pipeline audit report records source, workflow, runner, dependencies, secrets, artifacts, provenance, promotion, and findings
- Fork, cache, pin, permission, clean-build, signature, tamper, revocation, and rollback tests verify trust
