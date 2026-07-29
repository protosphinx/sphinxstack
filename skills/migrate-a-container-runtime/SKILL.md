---
name: migrate-a-container-runtime
category: code
description: Migrate a container runtime through workload inventory, image and isolation parity, node cohorts, drain, rollback, and security verification. Use when changing the runtime beneath active container workloads.
---
# migrate-a-container-runtime
## When to use
- Use for runtime, shim, snapshotter, cgroup, sandbox, or host-platform changes.
- Do not mix an unproven runtime move with unrelated application releases.
## Preconditions
- Inventory nodes, workloads, images, platforms, storage, networks, devices, security, observability, and recovery.
## Procedure
1. Compare image, process, cgroup, filesystem, network, signal, device, and security semantics.
2. Test representative privileged, stateful, GPU, init, sidecar, and failure cases.
3. Build immutable node images and verify provenance plus rollback.
4. Drain bounded cohorts while respecting disruption and state ownership.
5. Reconcile workload identity, storage, networking, telemetry, and policy after restart.
6. Monitor crashes, latency, resources, isolation, image pulls, and node health.
7. Retire old runtime only after rollback and mixed-fleet duties close.
## Failure plan
- Roll back the node cohort when workload or isolation parity fails.
## Worked example
A GPU workload exposes a device-mapping difference in canary nodes before fleet rollout.
## Done
- A runtime migration report records parity, workloads, node images, cohorts, drain, security, monitoring, and rollback
- Stateful, privileged, signal, cgroup, network, storage, device, isolation, and rollback tests verify migration
