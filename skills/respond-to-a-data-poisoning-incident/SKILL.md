---
name: respond-to-a-data-poisoning-incident
category: data
description: Respond to suspected data poisoning by containing unsafe inputs and decisions, preserving provenance, scoping affected datasets and models, recovering from trusted versions, and verifying recurrence controls. Use when malicious or unauthorized data changes may influence analytics, automation, or machine learning.
---

# respond-to-a-data-poisoning-incident

Protect affected people and decisions before optimizing model availability.

## When to use

- Use for compromised feeds, manipulated labels, adversarial examples, poisoned training data, insider changes, or corrupted feature stores.
- Activate qualified security, data, model-risk, privacy, legal, domain, and incident support for the affected decisions.

## Preconditions

- Establish incident, security, source, pipeline, analytics, machine-learning, domain, privacy, legal, customer, and evidence authority.
- Define affected decisions, models, datasets, users, time range, materiality, safety thresholds, and stop authority.
- Preserve current inputs, code, models, features, predictions, decisions, access, and runtime evidence before destructive repair where safe.

## Procedure

Complete **scope and containment**, **provenance and evidence**, **decision and model impact**, and **recovery and verification** as one incident process.

1. Open a **data poisoning incident timeline** covering source events, access, changes, pipeline runs, dataset and model versions, deployments, predictions, decisions, alerts, and containment.
2. Stop or quarantine suspect ingestion, training, feature publication, model rollout, and automated decisions while preserving a tested safe mode or human review.
3. Protect affected people through decision holds, reversals, notification, appeal, or manual continuity appropriate to the domain.
4. Preserve raw feeds, hashes, signatures, schemas, access logs, credentials, code, configurations, transformations, labels, feature snapshots, model artifacts, evaluations, predictions, and decision records.
5. Build a **provenance, dataset, model, and decision reconciliation** with bidirectional transitive lineage: trace each suspect record through aggregates, features, datasets, models, metrics, and decisions, and trace each affected decision back through its exact feature versions, model, threshold, rule, and source records. Preserve a per-decision provenance receipt.
6. Identify attacker or error paths through provider compromise, credentials, permissions, uploads, feedback loops, labeling, code, dependency, storage, and pipeline controls.
7. Compare suspect and trusted populations by source, time, entity, label, feature, cohort, distribution, outlier, influence, and downstream result.
8. Determine affected models, metrics, reports, experiments, customers, decisions, and derived datasets, including copies and retraining descendants.
9. Restore sources and pipelines from verified state, rotate compromised trust, patch controls, and rebuild datasets plus models under a new immutable generation.
10. Re-evaluate affected decisions using clean evidence without erasing original outcomes or denying appeal and remediation.
11. Validate source authenticity, schema, distribution, labels, feature parity, model behavior, subgroup outcomes, and adversarial resistance before release.
12. Monitor new inputs, influence, drift, access, decision outcomes, and recurrence through independently approved closeout.

## Failure plan

- If trusted data cannot be identified, suspend high-impact automation and use the qualified continuity process.
- If scope is uncertain, include all descendants of suspect records or model generations until disproven.
- If reverting a decision could create additional harm, route it through accountable domain review and preserve both outcomes.
- If an external source cannot establish integrity, keep it quarantined or reduce it to a nonauthoritative signal.

## Worked example

A fraud and eligibility platform discovers that an upstream partner feed was compromised, labels were altered through a feedback tool, suspect records entered training and test sets, shared features reached several models, and deployed decisions have affected customers for weeks. Responders quarantine the feed and model generations, preserve lineage and influence evidence, map every descendant and decision, protect affected customers, rebuild from verified inputs, re-evaluate outcomes, and add source-authenticity plus influence monitoring.

## Done

- A data poisoning incident timeline verifies sources, access, changes, runs, versions, deployments, decisions, containment, communications, and evidence custody
- A provenance, dataset, model, and decision reconciliation proves suspect records, descendants, influence, models, metrics, users, outcomes, remediation, and unresolved scope
- A recovery and control-effectiveness report demonstrates trusted rebuilds, customer protection, reevaluation, authenticity, quality, subgroup, adversarial, access, and recurrence tests
