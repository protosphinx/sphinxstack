---
name: audit-a-feature-store
category: data
description: Audit a feature store for provenance, point-in-time correctness, online-offline parity, freshness, access, reuse, monitoring, and decision impact. Use when machine-learning features support consequential models.
---
# audit-a-feature-store
## When to use
- Use for batch, streaming, training, serving, and shared feature systems.
- Obtain qualified fairness, privacy, security, and domain review for high-stakes use.
## Procedure
1. Inventory features, entities, sources, transformations, owners, consumers, models, and purposes.
2. Trace versions and lineage from raw event to training and online value.
3. Test point-in-time joins, leakage, late data, backfill, defaults, and historical reproduction.
4. Compare online and offline definitions, types, values, freshness, and availability.
5. Review identity, access, sensitive proxies, retention, residency, and permitted reuse.
6. Test monitoring, rollback, incident scope, and per-decision provenance.
## Failure plan
- Quarantine a feature from consequential use when lineage or point-in-time behavior is unproven.
## Worked example
A fraud feature includes future investigation outcomes in training, exposing label leakage.
## Done
- A feature-store audit report records inventory, lineage, versions, point-in-time tests, parity, policy, monitoring, and impact
- Leakage, late, backfill, default, online-offline, identity, proxy, access, rollback, and decision-trace checks verify safety
