---
name: design-a-multiregion-failover
category: code
description: Design multiregion failover with authority, data consistency, dependency, routing, capacity, recovery objectives, split-brain prevention, and reconciliation. Use when one region must survive another becoming unsafe or unavailable.
---
# design-a-multiregion-failover
## When to use
- Use for critical services with explicit regional failure requirements.
- Do not call traffic routing failover if write authority and data recovery are unresolved.
## Preconditions
- Define journeys, regions, dependencies, data, write authority, RTO, RPO, capacity, and failure assumptions.
## Procedure
1. Map regional and global dependencies plus hidden control planes.
2. Define per-domain read and write authority with fencing epochs.
3. Choose replication and consistency from accepted loss and conflict semantics.
4. Provision independent capacity, identity, secrets, routing, and observability.
5. Define detection, decision, traffic shift, data recovery, and customer communication.
6. Reconcile split, late, duplicate, and target-region writes before failback.
7. Rehearse loss, partition, control-plane failure, corruption, and failback.
## Failure plan
- Prefer bounded unavailability to two unfenced write authorities.
## Worked example
A regional partition fences old payment writes before routing and later reconciles queued reads without duplicate charges.
## Done
- A failover design document records authority, replication, dependencies, routing, capacity, objectives, recovery, and failback
- Partition, region-loss, corruption, control-plane, stale-write, capacity, reconciliation, and failback rehearsals verify design
