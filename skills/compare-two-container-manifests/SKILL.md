---
name: compare-two-container-manifests
category: code
description: Compare two container workload manifests across image identity, command, resources, security, network, storage, configuration, rollout, and metadata. Use when deployments or environments differ.
---
# compare-two-container-manifests
## When to use
- Use for exact rendered manifests, not unexpanded templates alone.
- Redact secrets and avoid applying generated changes during review.
## Procedure
1. Normalize API defaults, ordering, generated metadata, and templating evidence.
2. Compare image digests, entrypoint, arguments, ports, probes, lifecycle, and replicas.
3. Compare identities, privileges, capabilities, filesystem, policies, and service accounts.
4. Compare resources, affinity, disruption, rollout, scaling, and scheduling.
5. Compare config references, secrets identities, volumes, network, DNS, and dependencies.
6. Classify intentional, risky, breaking, generated, and unresolved differences.
## Failure plan
- Stop release when a secret, privilege, image, or rollout difference lacks ownership.
## Worked example
A staging and production manifest share tags but resolve different digests and security contexts.
## Done
- A manifest comparison report records normalized inputs, image, runtime, security, resource, network, storage, and rollout differences
- Render, default, secret, digest, privilege, policy, resource, dependency, and no-apply checks verify comparison
