---
name: inspect-browser-console-errors
category: web
description: Inspect browser console errors by preserving page, version, action, source, stack, network, and reproduction context. Use when a web page logs exceptions, warnings, policy failures, or rejected resources.
---

# inspect-browser-console-errors

Treat console output as evidence, not a root cause.

## When to use

- Use for page-load, interaction, extension, security-policy, resource, or script failures.
- Do not expose tokens, cookies, personal data, private URLs, or production source maps.

## Procedure

1. Record URL, environment, browser and version, device, user state, build, time, and exact action.
2. Preserve complete messages, levels, stacks, source locations, grouping, and timestamps.
3. Separate application, browser, extension, network, policy, deprecation, and third-party output.
4. Correlate with failed requests, response headers, request IDs, and server logs.
5. Reproduce in a clean profile and another browser or known-good version.
6. Map the first application-controlled failure to the exact deployed source.
7. Form and test one discriminating hypothesis at a time.
8. Save a redacted diagnostic report.

## Done

- A console diagnostic report records context, errors, sources, network correlations, and deployed version
- Clean reproduction and a focused test confirm or reject the identified application-controlled cause
