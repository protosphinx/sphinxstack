---
name: compare-two-database-schemas
category: code
description: Compare two database schemas across objects, types, defaults, constraints, indexes, permissions, functions, and migration meaning. Use when environments or versions may have drifted.
---
# compare-two-database-schemas
## When to use
- Use for migration validation, incident diagnosis, release review, or drift detection.
- Do not apply generated destructive changes without data and rollback review.
## Preconditions
- Record engines, versions, databases, namespaces, migration revisions, and authorized metadata access.
## Procedure
1. Export normalized metadata from both sides.
2. Compare tables, columns, types, nullability, defaults, generated values, and identity.
3. Compare keys, checks, relationships, indexes, partitions, views, functions, triggers, and sequences.
4. Compare roles, ownership, grants, policies, collations, extensions, and settings.
5. Separate semantic differences from ordering or engine-generated noise.
6. Map each material difference to migration history, data risk, and reversible action.
## Failure plan
- If engine versions differ, label unsupported equivalence rather than forcing a textual diff.
## Worked example
A missing partial unique index explains duplicate active subscriptions despite matching column definitions.
## Done
- A schema comparison report records normalized inventories, material differences, migration linkage, risk, and action
- Version, namespace, default, constraint, index, permission, semantic-noise, and rollback checks verify comparison
