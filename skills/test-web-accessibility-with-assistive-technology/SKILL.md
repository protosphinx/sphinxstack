---
name: test-web-accessibility-with-assistive-technology
category: web
description: Test representative web journeys with assistive technology and record reproducible barriers, impact, and retest evidence. Use when automated checks cannot prove real interaction, perception, or recovery.
---

# test-web-accessibility-with-assistive-technology

Test user outcomes on named configurations, not an abstract claim of accessibility.

## When to use

- Use for critical journeys, custom controls, forms, dialogs, dynamic updates, media, tables, and reported barriers.
- Combine with code inspection, automated checks, keyboard testing, and disabled-user research.

## Procedure

1. Select representative tasks, content, accounts, data states, browsers, operating systems, and assistive technologies from supported users and risk.
2. Record exact versions, settings, viewport, zoom, input mode, starting route, expected result, and test limitations.
3. Complete the journey with keyboard alone before adding a screen reader or other technology.
4. Test landmarks, headings, reading order, names, roles, states, descriptions, forms, validation, focus, dialogs, menus, live updates, tables, media, and recovery.
5. Include zoom and reflow, magnification, speech input, switch access, reduced motion, forced colors, or other modes relevant to the audience.
6. Record each barrier with exact steps, expected and actual behavior, affected task, user impact, frequency, evidence, and environment.
7. Distinguish product defects from unfamiliar tester commands, browser defects, assistive-technology behavior, and unsupported combinations.
8. Prioritize by blocked outcome and harm, not only standards labels.
9. Retest the same steps after the fix and run nearby regression journeys.
10. State coverage and residual limits. Do not convert a small configuration sample into a universal conformance claim.

## Failure plan

- If the test environment is unreliable, preserve the result as inconclusive and repeat on a clean, documented configuration.
- If a critical task is blocked, provide and verify an equivalent accessible path while remediation proceeds.

## Done

- An assistive-technology test plan records tasks, configurations, expected outcomes, coverage, and limitations
- A barrier report contains reproducible steps, evidence, user impact, ownership, and priority
- Retest evidence verifies fixes and adjacent journeys without overstating supported combinations or conformance
