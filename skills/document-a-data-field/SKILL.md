---
name: document-a-data-field
category: data
description: Document a data field's business meaning, source, type, units, allowed values, lifecycle, quality rules, sensitivity, and consumers. Use when creating or correcting a data dictionary or schema reference.
---

# document-a-data-field

Describe the real business concept and the implemented representation.

## When to use

- Use for database, event, API, file, metric, model-feature, or report fields.
- Do not publish secrets, unnecessary personal examples, or undocumented guesses.

## Procedure

1. Record field name, stable ID, dataset, owner, steward, source, and current schema version.
2. Define the business concept, unit of observation, inclusion, exclusion, and common misinterpretations.
3. Document type, format, unit, precision, timezone, null meaning, allowed values, default, and examples using safe synthetic data.
4. Trace creation, transformation, update cadence, effective timing, retention, deletion, and downstream consumers.
5. Record quality rules, known limitations, sensitivity, access, consent, and permitted use.
6. Verify the documentation against code, schema, representative values, and an accountable domain owner.
7. Version the entry and link changes to affected producers and consumers.

## Done

- A data-dictionary entry records meaning, representation, lineage, timing, quality, sensitivity, use, ownership, and version
- Schema, code, value, source, consumer, privacy, and owner checks verify the field documentation
