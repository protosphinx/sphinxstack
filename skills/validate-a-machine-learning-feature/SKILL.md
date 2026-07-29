---
name: validate-a-machine-learning-feature
category: data
description: Validate a machine-learning feature for meaning, provenance, leakage, timing, training-serving parity, quality, stability, fairness risk, and monitoring. Use when adding or changing an input to a predictive or generative model.
---

# validate-a-machine-learning-feature

Reconstruct what was knowable at prediction time.

## When to use

- Use for batch, streaming, online, derived, embedding, label-adjacent, or third-party features.
- Do not use a feature whose rights, consent, provenance, or prediction-time availability is unresolved.

## Procedure

1. Define feature meaning, entity, source, owner, model use, population, sensitivity, and allowed purpose.
2. Trace provenance, transformations, joins, labels, timestamps, permissions, retention, and versions.
3. Rebuild historical values using only data available before each prediction timestamp.
4. Test target, future, proxy, split, duplicate-entity, and evaluation-set leakage.
5. Compare offline and online definitions, code, defaults, freshness, null handling, types, units, and lookup behavior.
6. Profile coverage, missingness, distribution, outliers, drift, stability, and subgroup differences.
7. Test ablation, sensitivity, robustness, adversarial manipulation, and failure defaults.
8. Define monitoring, alerts, ownership, rollback, and retraining triggers before release.

## Done

- A feature validation report records meaning, provenance, availability, leakage tests, parity, quality, subgroup risk, performance, and ownership
- Historical reconstruction, leakage, offline-online, drift, subgroup, ablation, adversarial, and rollback checks verify fitness
