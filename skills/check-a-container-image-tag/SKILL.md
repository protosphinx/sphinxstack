---
name: check-a-container-image-tag
category: code
description: Check a container image tag by resolving its digest, registry, platform manifest, provenance, signature, and deployment use. Use when a mutable label must be tied to an exact artifact.
---
# check-a-container-image-tag
## When to use
- Use during release, incident, rollback, or environment comparison.
- Do not pull or execute an untrusted image on a privileged host.
## Preconditions
- Record registry, repository, tag, platform, credentials scope, time, and expected digest.
## Procedure
1. Resolve the tag from the authoritative registry without execution.
2. Record index and platform-specific digests plus media types.
3. Inspect creation metadata, source revision, SBOM, provenance, and signatures.
4. Compare deployment references and node-cached digests.
5. Detect tag mutation, platform divergence, registry mirror, and stale pull policy.
6. Recommend digest pinning or correction with rollback evidence.
## Failure plan
- Quarantine when provenance, signature, or expected digest cannot be established.
## Worked example
The same tag points to a new arm64 manifest while x86 remains old, explaining architecture-specific behavior.
## Done
- An image-tag report records registry, tag, digests, platforms, provenance, signatures, and deployment references
- Mutation, mirror, platform, cache, signature, SBOM, expected-digest, and safe-inspection checks verify identity
