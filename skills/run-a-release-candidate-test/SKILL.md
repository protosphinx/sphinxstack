---
name: run-a-release-candidate-test
category: code
description: Test an immutable release candidate against the highest product and operational risks, then produce a release recommendation. Use when a frozen build, package, image, mobile binary, or deployment artifact is ready for final verification.
---

# run-a-release-candidate-test

Test the artifact that could actually ship in an environment close enough to expose release-specific failure.
Do not substitute a later source checkout or locally rebuilt package.

## Inputs

- Gather the immutable candidate identifier, release scope, risk assessment, supported environments, and prior evidence.
- Identify upgrade and install paths, data or config changes, flags, integrations, rollback, and known issues.
- Prepare representative accounts, fixtures, devices, and production-shaped observability.

## Procedure

1. Verify artifact identity, provenance, checksum, version, configuration, and included scope.
2. Confirm test-environment differences and the release decisions those differences limit.
3. Build a risk matrix linking each critical behavior to a test and evidence owner.
4. Test clean install, upgrade, configuration, startup, health, and the primary user journeys.
5. Exercise permissions, data integrity, integrations, errors, retries, partial failures, and recovery.
6. Verify migrations, feature flags, backward compatibility, monitoring, alerts, logs, and support diagnostics.
7. Rehearse rollback or recovery against the candidate's actual state changes.
8. Record defects with severity, evidence, affected scope, workaround, owner, and disposition.
9. Rerun affected tests on the unchanged candidate after environmental or fixture corrections only.
10. Publish pass, conditional pass, or fail with residual risks and exact evidence links.

## Boundaries

Do not modify the candidate and continue calling it the same artifact. Never test destructive paths against
production without approval. Keep customer data, credentials, and unreleased security details restricted.

## Done

- Candidate identity and environment differences are recorded
- Critical product, upgrade, data, integration, operational, and recovery risks have checked evidence
- Defects and residual risks have explicit release dispositions and owners
- The recommendation applies to the exact immutable artifact proposed for release
