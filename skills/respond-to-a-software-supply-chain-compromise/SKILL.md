---
name: respond-to-a-software-supply-chain-compromise
category: code
description: Respond to a software supply-chain compromise through trust containment, provenance reconstruction, consumer impact analysis, clean rebuild, credential recovery, correction, and verified hardening. Use when source, dependencies, builders, artifacts, signing, registries, or update channels may be malicious.
---

# respond-to-a-software-supply-chain-compromise

Assume every artifact derived from the compromised trust path may be affected.

## When to use

- Use for malicious packages, source or workflow tampering, builder compromise, stolen signing keys, poisoned caches, registry takeover, or update-channel abuse.
- Activate qualified incident, security, build, release, identity, legal, privacy, communications, vendor, and product authority.

## Preconditions

- Establish independent incident authority, trusted communication, evidence custody, release stop, emergency revocation, and customer-protection authority.
- Define repositories, identities, dependencies, runners, caches, registries, artifacts, signatures, deployments, customers, versions, and time range.
- Create a clean investigation and rebuild environment outside suspected trust paths.

## Procedure

Complete **trust and evidence containment**, **provenance and impact reconstruction**, **clean recovery and customer protection**, and **trust reestablishment**.

1. Open a **software supply-chain incident timeline** for trust anchors, changes, identities, artifacts, distribution, exposure, decisions, and communications.
2. Stop suspect builds, releases, promotions, updates, signing, package publication, and cache reuse while preserving availability through known-good paths.
3. Preserve source, refs, reviews, workflow definitions, runner images, logs, tokens, OIDC claims, dependencies, lockfiles, packages, caches, registry records, artifacts, signatures, SBOMs, deployments, and telemetry.
4. Revoke or fence compromised identities, sessions, credentials, signing keys, publishers, runners, and automation in a dependency-aware order.
5. Reconstruct authorized source-to-artifact provenance for every relevant build, including exact inputs, builder, network, environment, scripts, generated code, output hashes, signing, promotion, and distribution.
6. Identify the first untrusted boundary and calculate transitive artifact, version, environment, customer, data, execution, credential, and downstream-project exposure.
7. Hunt behavior and indicators without assuming absence of telemetry proves safety; protect customer systems and sensitive data.
8. Select a trustworthy source and dependency recovery point through independent review.
9. Establish an independently verified recovery root: inventory source, compiler, toolchain, operating and builder images, CI actions, dependencies, package manager, registries, mirrors, cloud administration, secrets authority, and signing system; acquire them through authenticated paths and verify immutable provenance.
10. Build on two separately administered builders with no shared writable cache or compromised control plane, restricted networks, independently created identities, and documented bootstrap inputs.
11. Create replacement signing keys through a multiparty ceremony in newly trusted infrastructure and publish revocation plus new trust through an out-of-band authenticated channel.
12. Compare both clean outputs and distributed artifacts, analyze every unexplained difference, test consumer installation and malicious behavior, and independently approve release.
13. Publish actionable advisories, affected versions, indicators, upgrade or removal paths, key changes, customer checks, and correction updates.
14. Replace affected artifacts, verify update adoption, revoke old trust, rotate downstream secrets, correct records, and monitor residual use.
15. Harden review, dependency policy, runner isolation, secrets, pinning, signing, transparency, registry, cache, promotion, and response controls.

## Failure plan

- If a trustworthy source point cannot be established, do not rebuild or attest affected code as safe.
- If signing or update trust is compromised, distribute recovery through an independently authenticated channel.
- If consumer impact is unknown, state the uncertainty and provide protective action rather than a false all-clear.
- If clean infrastructure may share the compromise, move recovery to independently governed builders and identities.

## Worked example

A popular library discovers a maintainer token theft, malicious release, mutable CI action, poisoned shared cache, stolen signing key, and auto-update distribution into developer tools and production services. The team stops release paths, preserves evidence, reconstructs every artifact, identifies affected consumers, rebuilds from independently verified source on clean infrastructure, replaces signing trust, publishes precise guidance, and verifies downstream recovery.

## Done

- A software supply-chain incident timeline verifies compromised trust, evidence custody, identities, artifacts, distribution, consumers, decisions, and communications
- A source, dependency, builder, artifact, signature, deployment, and consumer reconciliation proves provenance, affected scope, indicators, credentials, customer impact, and unresolved uncertainty
- A clean recovery and trust report demonstrates independently verified bootstrap trust, two separately governed builders, reproducible output, multiparty signing replacement, consumer installation, advisories, adoption, revocation, secret rotation, hardening, and residual monitoring
