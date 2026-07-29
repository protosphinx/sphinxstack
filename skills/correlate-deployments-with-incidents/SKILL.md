---
name: correlate-deployments-with-incidents
category: code
description: Correlate deployments with incidents using exposure, timing, controls, rollback, and alternative-cause evidence. Use when a release is suspected of changing production behavior.
---

# correlate-deployments-with-incidents

Treat temporal proximity as a hypothesis and test whether affected traffic was actually exposed.

## Procedure

1. Build a timeline of symptom onset, detection, release stages, config, flags, schema, and infrastructure changes.
2. Identify affected cohorts, regions, versions, routes, tenants, and instances.
3. Map actual exposure from routing and deployment evidence, not intended rollout state.
4. Compare errors, latency, saturation, and outcomes between exposed and unexposed controls.
5. Inspect release diffs for mechanisms consistent with the observed failure.
6. Check dependency, traffic, data, capacity, certificate, and operator changes as alternatives.
7. Use a safe pause, rollback, flag change, or canary comparison when it can discriminate causes.
8. Preserve confounders and distinguish trigger, amplifier, and unrelated change.
9. Record the supported conclusion, uncertainty, mitigation, and prevention test.

## Guardrails

- Do not roll back blindly when the release includes an irreversible data transition.
- A deployment marker can be wrong or incomplete.
- Avoid claiming root cause from correlation alone.

## Done

- A release-incident timeline and exposure report are saved
- Exposed and control behavior are compared and verified
- Mitigation results and remaining alternative causes are recorded
