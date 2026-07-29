---
name: design-a-data-contract-registry
category: data
description: Design a data contract registry with ownership, schema and semantic versions, compatibility, quality, policy, lineage, consumer evidence, and deprecation. Use when independently changing producers and consumers share data.
---
# design-a-data-contract-registry
## When to use
- Use for tables, streams, files, APIs, metrics, or features.
- Do not reduce a contract to field names while meaning, rights, or quality remain implicit.
## Procedure
1. Define asset identity, producer, consumers, purpose, authority, and support.
2. Record schema, semantics, units, keys, time, nulls, quality, lineage, and examples.
3. Attach classification, rights, residency, retention, access, and permitted use.
4. Version changes and automate compatibility plus policy checks.
5. Require consumer acceptance for consequential semantic change.
6. Publish health, incidents, exceptions, deprecation, and retirement evidence.
## Failure plan
- Block incompatible publication or preserve a versioned contract when consumers cannot migrate.
## Worked example
A revenue field changes from gross to net without a type change, so semantic compatibility blocks release.
## Done
- A contract-registry design records identity, owners, schema, semantics, quality, policy, lineage, versions, consumers, and retirement
- Compatibility, meaning, unit, time, key, privacy, consumer, exception, and deprecation tests verify governance
