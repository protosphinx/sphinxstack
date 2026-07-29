---
name: design-a-data-model
category: data
description: Turn real business rules and workflows into entities, relationships, constraints, ownership, and lifecycle decisions that can support reliable queries and change. Use when designing a new database, untangling an overloaded schema, or aligning product language with stored data before implementation.
---

# design-a-data-model

Model the facts the system must preserve, not the screens it currently shows. Make identity, time,
ownership, optionality, and invalid states explicit before selecting tables or documents.

## Inputs

- Gather real workflows, example records, reports, policies, integrations, and current terminology.
- Name system owners, data stewards, privacy classes, retention rules, and important queries.
- Separate durable business facts from presentation and derived values.

## Procedure

1. Write representative create, update, read, delete, correction, and history scenarios.
2. Build a glossary defining each business term, synonyms, owner, and disputed meaning.
3. Identify entities with stable identity and distinguish them from events, attributes, classifications, and aggregates.
4. Define relationships, cardinality, optionality, ordering, temporal validity, and ownership.
5. Choose identifiers and natural uniqueness rules. State how duplicates, merges, and external ids are handled.
6. Encode invariants as constraints where possible, not only application conventions.
7. Model state changes and history explicitly when the past matters. Avoid overwriting facts needed for audit or reconciliation.
8. Mark personal, confidential, regulated, derived, and deletable fields with access and retention rules.
9. Test the model against representative records, edge cases, corrections, concurrent actions, and required queries.
10. Normalize rules to one owner, then denormalize only for a measured read need with a reconciliation path.
11. Produce the logical model, data dictionary, invariant list, lifecycle notes, and open decisions.

## Boundaries

Do not copy production data into design artifacts without permission. Never use ambiguous names such as
status or type without a defined vocabulary. Do not add personal data because it may be useful later.

## Done

- A model diagram and glossary define entities, identities, relationships, cardinality, and ownership
- A data dictionary records type, meaning, privacy class, source, lifecycle, and constraints for material fields
- Representative workflows and invalid-state tests verify the model preserves business rules
- Derived or denormalized data has a named source of truth and reconciliation method

Then use database-basics for implementation or migrate-a-database for a live schema transition.
