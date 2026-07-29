---
name: build-a-data-anonymization-plan
category: data
description: Build a data-anonymization plan from purpose, attacker knowledge, linkage risk, utility needs, transformations, validation, access, and release controls. Use when sharing or reusing data without direct identification.
---

# build-a-data-anonymization-plan

Removing names is not proof of anonymity. This is not legal advice.

## When to use

- Use for research, testing, analytics, publication, collaboration, or product data release.
- Obtain qualified privacy, legal, security, statistical, and domain review for the actual dataset and threat.

## Procedure

1. Define purpose, recipients, environment, release model, data subjects, jurisdictions, utility, and prohibited uses.
2. Inventory direct, quasi, sensitive, free-text, location, time, image, network, and behavioral identifiers.
3. Model plausible attackers, external datasets, membership knowledge, rare combinations, and linkage paths.
4. Choose minimization, suppression, generalization, perturbation, aggregation, tokenization, synthesis, or privacy-preserving mechanisms.
5. Separate reversible pseudonymization keys from released data with independent access and retention.
6. Test singling out, linkability, inference, membership, outliers, text leakage, and repeated-release composition.
7. Measure utility for approved analyses and document conclusions the transformed data cannot support.
8. Apply contracts, access, query limits, monitoring, retention, deletion, incident, and re-evaluation controls.

## Done

- An anonymization plan records purpose, fields, threat model, transformations, key custody, release controls, utility, and residual risk
- Direct-identifier, linkage, outlier, free-text, repeated-release, utility, access, and re-identification challenge tests verify the release decision
