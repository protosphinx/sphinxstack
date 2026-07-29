---
name: design-a-content-model
category: data
description: Model structured content around meaning, relationships, reuse, and lifecycle. Use when content must serve multiple channels, locales, permissions, workflows, or migrations without becoming ungoverned fields.
---

# design-a-content-model

## Procedure

1. Define user journeys, channels, content domain, authors, systems, and lifecycle.
2. Inventory representative content, including edge cases and restricted variants.
3. Identify stable entities, components, relationships, taxonomies, and reusable meaning.
4. Define fields with purpose, type, constraints, cardinality, validation, default, and ownership.
5. Separate presentation choices from semantic content where reuse requires it.
6. Model locale, version, status, permissions, provenance, scheduling, and retirement.
7. Create example entries and test authoring, API delivery, rendering, search, and migration.
8. Check optionality, orphaning, circularity, deep nesting, and uncontrolled rich text.
9. Version the schema and define compatible change and migration rules.
10. Validate with authors, developers, editors, translators, and consumers.

## Guardrails

- Do not collect or expose restricted data through a broadly reusable model.
- Avoid one field per current page layout.
- Preserve source and consent for reused claims or media.

## Done

- A content model document defines entities, fields, relationships, rules, and lifecycle
- Representative authoring and delivery examples pass
- Permissions, localization, schema change, and migration checks are recorded
