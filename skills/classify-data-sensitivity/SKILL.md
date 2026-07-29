---
name: classify-data-sensitivity
category: data
description: Classify information by plausible harm, handling needs, and access boundaries. Use when a dataset, document, form, export, or new data flow needs a defensible sensitivity label and concrete controls.
---

# classify-data-sensitivity

Turn a label into handling decisions. Classify the data actually present and expected, not the filename or system reputation.

## Inputs

- Data fields, examples, source, purpose, subjects, and jurisdictions
- Existing policy labels and required handling rules
- Storage, transfer, sharing, retention, and deletion paths
- Owners and people authorized to approve exceptions

## Procedure

1. Define the classification scope and distinguish sampled, inferred, and unknown contents.
2. Inventory direct identifiers, credentials, financial, health, legal, employment, location, confidential, and operationally sensitive data.
3. Record how combinations or free text could raise sensitivity beyond any single field.
4. Evaluate plausible harm from disclosure, alteration, loss, misuse, or unavailable access.
5. Map the evidence to the organization's existing labels. Do not invent a parallel taxonomy unless asked.
6. Assign the highest supported label at the smallest practical boundary; separate mixed collections when useful.
7. Translate the label into access, encryption, logging, transfer, retention, redaction, and disposal requirements.
8. Record owner, rationale, unknowns, review trigger, and any temporary exception.
9. Verify that actual system controls match the required handling before treating classification as complete.

## Guardrails

- Do not include live secrets or unnecessary personal data in the classification artifact.
- Treat uncertain free-form, derived, or joined data conservatively until sampled by an authorized reviewer.
- A sensitivity label does not establish legal permission to collect, use, or share data.
- Escalate conflicts between policy, contract, law, and operational need to the accountable owners.

## Done

- A field or collection inventory supports each label
- Required handling is explicit and testable
- Unknown contents and mismatched controls have owners
- The review date and reclassification triggers are recorded
