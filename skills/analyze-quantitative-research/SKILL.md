---
name: analyze-quantitative-research
category: school
description: Analyze quantitative research with reproducible data checks, estimands, assumptions, uncertainty, sensitivity, and bounded interpretation. Use when testing numerical evidence against a research question.
---

# analyze-quantitative-research

Define the quantity being estimated before selecting a statistical procedure.

## When to use

- Use for descriptive, comparative, causal, predictive, longitudinal, experimental, or observational analysis.
- Do not select tests after seeing results solely to obtain a preferred conclusion.

## Procedure

1. Restate the question, population, unit, design, variables, estimand, and preregistered decisions.
2. Preserve raw data and create a reproducible analysis dataset with a transformation log.
3. Check identifiers, duplicates, ranges, units, dates, missingness, exclusions, attrition, and design balance.
4. Describe the sample and outcome distributions before modeling.
5. Choose analysis based on design and estimand, then state model assumptions and dependence structure.
6. Estimate effects with uncertainty intervals and meaningful units, not p-values alone.
7. Examine missing-data mechanisms, influential observations, multiplicity, subgroup logic, and model diagnostics.
8. Run justified robustness and sensitivity analyses without hiding unfavorable results.
9. Distinguish association, prediction, and causation and compare effect magnitude with practical significance.
10. Reproduce outputs from a clean environment and reconcile analysis counts to the study flow.

## Worked example

A study finds a statistically significant two-point difference on a 100-point scale. The analysis reports the interval, attrition imbalance, clustered design, and sensitivity to missing outcomes. It concludes that the data support a small difference, not a large practical benefit.

## Done

- A reproducible analysis package contains validated data, code, estimand, assumptions, diagnostics, uncertainty, and sensitivity results
- Counts, tables, and figures are verified from a clean run and every conclusion is bounded by design and missing-data evidence
