---
name: design-a-web-performance-budget
category: web
description: Design a web performance budget tied to user journeys, device and network conditions, Core Web Vitals, resource limits, and release enforcement. Use when preventing performance regressions across pages, components, and third-party code.
---

# design-a-web-performance-budget

Budget the experiences users feel and the resources teams control.

## When to use

- Use during product planning, redesigns, platform changes, or performance remediation.
- Do not optimize only a laboratory score or one high-end device.

## Procedure

1. Select critical journeys, page templates, user populations, geographies, devices, networks, cache states, and accessibility modes.
2. Establish current laboratory and field baselines with sample size, percentiles, and measurement limitations.
3. Set experience thresholds for loading, responsiveness, visual stability, navigation, and task completion.
4. Set resource budgets for HTML, CSS, JavaScript, images, fonts, requests, main-thread work, and third parties.
5. Allocate budgets by route, component, team, and third-party owner with an explicit exception process.
6. Add reproducible pull-request and release checks using controlled conditions and multiple runs.
7. Monitor field percentiles by route, device, region, release, and user state without collecting unnecessary data.
8. Treat regressions through diagnosis, owner, deadline, rollback or mitigation, and expiring exceptions.
9. Review budgets as products and user populations change without normalizing accumulated regressions.

## Done

- A performance budget document records journeys, populations, metrics, resource limits, baselines, owners, and exception criteria
- Repeated lab, field, route, device, network, release, and third-party checks verify enforcement and expose variance
