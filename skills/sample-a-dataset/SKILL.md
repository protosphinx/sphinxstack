---
name: sample-a-dataset
category: data
description: Sample a dataset with a documented frame, method, seed, strata, privacy controls, and representativeness checks. Use when a full dataset is too large or sensitive for inspection, testing, labeling, or analysis.
---

# sample-a-dataset

Choose the sample design from the intended use and sources of variation.

## When to use

- Use for quality review, testing, annotation, exploration, or reproducible development.
- Do not call a convenience sample representative of a population.

## Procedure

1. Define population, unit, sampling frame, intended use, exclusions, key subgroups, rare cases, and error tolerance.
2. Assess coverage gaps, clustering, time effects, duplicates, and dependencies in the frame.
3. Choose random, systematic, stratified, cluster, time-window, risk-based, or hybrid sampling with rationale.
4. Set size, allocation, replacement, seed, and stable ordering; separate training, validation, and test entities where relevant.
5. Minimize sensitive data and apply access, masking, retention, and secure output rules.
6. Generate the sample reproducibly and preserve source version plus selection metadata.
7. Compare population and sample distributions, coverage, missingness, and important outcomes.

## Done

- A sampling plan and manifest record population, frame, method, seed, strata, size, source version, privacy, and selected record references
- Reproduction, overlap, subgroup, time, missingness, distribution, and coverage checks verify fitness for the stated use
