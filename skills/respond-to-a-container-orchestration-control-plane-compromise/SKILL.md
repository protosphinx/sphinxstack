---
name: respond-to-a-container-orchestration-control-plane-compromise
category: code
description: Respond to a container orchestration control-plane compromise through independent containment, workload and identity reconstruction, clean-cluster recovery, data protection, trust replacement, and verified return. Use when cluster administration, scheduling, secrets, admission, nodes, images, or workload identity may be malicious.
---
# respond-to-a-container-orchestration-control-plane-compromise

Assume the compromised control plane could change every workload and credential it governed.

## When to use
- Use for stolen cluster administration, malicious admission, control-store breach, node bootstrap abuse, secret exposure, or unauthorized workload mutation.
- Activate security, platform, identity, application, data, network, legal, privacy, communications, and continuity authority.
## Preconditions
- Establish independent incident command, trusted communications, evidence custody, external identity, workload freeze, customer protection, and clean recovery infrastructure.
- Inventory clusters, regions, control planes, nodes, identities, secrets, workloads, images, storage, networks, registries, CI, external clouds, and downstream systems.
## Procedure
Complete **independent containment**, **cluster and workload reconstruction**, **clean recovery**, and **trust reestablishment**.
1. Open a **control-plane compromise timeline** for identities, API actions, objects, nodes, workloads, credentials, data, decisions, and communications.
2. Preserve control-store snapshots, audit logs, identity records, admission, policies, manifests, events, node state, runtime evidence, images, volumes, network logs, and cloud actions outside the suspect plane.
3. For each audit gap, enumerate possible privileged actions and reconcile independent cloud IAM, token issuance, KMS, secrets, registry, runtime, network, DNS, load balancer, storage versions, databases, payments, CI, customer, and downstream evidence.
4. Classify each workload, secret, volume, external resource, transaction stream, and customer as verified clean, affected, or unresolved; absence inside a known gap never proves safety.
5. Fence compromised administrators, workload identities, certificates, bootstrap tokens, service accounts, webhooks, controllers, CI, registry, and cloud credentials in dependency order.
4. Protect critical services through independently controlled routing or continuity paths without trusting suspect scheduling.
5. Reconstruct desired and observed state per workload, image digest, identity, secret, admission decision, node, network policy, volume, and external privilege.
6. Hunt unauthorized workloads, exec, mounts, secrets, images, persistence, controllers, webhooks, node changes, egress, and downstream actions.
7. Determine a trusted application and data recovery point from source, artifact provenance, backups, and independent evidence.
8. Build new clusters under separately governed identity, network, registry, signing, secrets, nodes, admission, audit, and infrastructure state.
9. Restore data through verified copies, rotate every exposed trust path, deploy pinned attested artifacts, and validate tenant plus workload isolation.
10. Migrate bounded services, reconcile business state and external actions, monitor, then revoke and retire compromised infrastructure.
11. Publish affected scope and protective actions, verify customer recovery, and harden bootstrap, admission, secrets, node, registry, audit, backup, and response controls.
## Failure plan
- If external identity or cloud administration shares the compromise, establish new authority outside that control plane.
- If data integrity is uncertain, keep it quarantined and reconcile before application use.
- If clean and suspect clusters can act on one external resource, fence one authority first.
## Worked example
A stolen cluster-admin credential installs a malicious admission webhook, captures secrets, mutates payment workloads, creates privileged daemon processes, and uses workload identity to access cloud storage across regions while audit retention is incomplete. The response preserves external evidence, fences trust, reconstructs every workload and downstream action, builds separately governed clusters, restores verified data and artifacts, rotates identity, and proves recovery.
## Done
- A control-plane compromise timeline verifies independent authority, evidence, identities, workloads, nodes, secrets, data, external actions, decisions, and communications
- A cluster, workload, artifact, credential, storage, network, and downstream reconciliation includes privileged audit-gap reconstruction and proves affected scope, persistence, external effects, customer impact, recovery points, and uncertainty
- A clean-cluster and trust report demonstrates new governance, pinned artifacts, verified data, rotated trust, workload isolation, business reconciliation, customer recovery, retirement, and hardening
