---
name: inspect-an-http-cache-header
category: code
description: Inspect HTTP cache headers across request, response, browser, CDN, proxy, and origin context. Use when freshness, reuse, revalidation, privacy, or invalidation behavior is unclear.
---
# inspect-an-http-cache-header
## When to use
- Use for an exact authorized URL, method, identity, and network path.
- Do not cache private responses or expose credentials during capture.
## Procedure
1. Record request method, URL, authorization, cookies, time, edge, and expected policy.
2. Capture `Cache-Control`, `Age`, `Date`, `Expires`, validators, `Vary`, status, and CDN headers.
3. Separate browser, shared cache, surrogate, and origin decisions.
4. Calculate freshness and revalidation against clocks and directives.
5. Repeat cold, warm, conditional, anonymous, and authorized requests.
6. Record privacy, variation, stale, purge, and path findings.
## Failure plan
- Bypass shared caching when identity separation or directive meaning is unsafe.
## Worked example
An authenticated page is reused because `Vary` omits the tenant header despite a seemingly short TTL.
## Done
- A cache-header report records request context, directives, validators, age, variation, layers, and findings
- Cold, warm, conditional, clock, identity, tenant, privacy, and shared-cache checks verify behavior
