---
name: audit-a-third-party-web-script
category: web
description: Audit a third-party web script for purpose, provenance, loading, permissions, data flow, consent, security, performance, accessibility, failure, updates, and removal. Use when external JavaScript can affect users or page trust.
---
# audit-a-third-party-web-script
## When to use
- Use for analytics, ads, chat, consent, payments, experimentation, social embeds, fraud, or tag-manager payloads.
- Do not test unknown code against sensitive production sessions or real personal data.
## Procedure
1. Define pages, jurisdictions, users, purpose, owner, vendor, contract, deployment route, and acceptance criteria.
2. Identify exact URLs, versions, hashes, tag-manager rules, first-party proxies, subresources, update control, and fallback behavior.
3. Observe network, storage, DOM, event, form, location, identity, device, timing, and cross-origin data flows before and after consent.
4. Review permissions, CSP, SRI feasibility, sandboxing, trusted types, secret exposure, supply-chain history, and incident notification.
5. Measure main-thread cost, layout shift, network priority, caching, page weight, errors, accessibility, and degraded experience.
6. Test block, delay, timeout, tamper, vendor outage, consent withdrawal, route change, SPA lifecycle, and emergency disable.
7. Record necessity, alternatives, findings, risk acceptance, controls, monitoring, removal owner, and retest trigger.
## Failure plan
- Disable or isolate the script when purpose, provenance, data use, consent, security, or safe failure cannot be demonstrated.
## Worked example
A chat widget sends form-field labels and a stable visitor ID before consent, then blocks checkout when its vendor is unavailable.
## Done
- A third-party script audit records purpose, provenance, load path, data flow, consent, security, performance, accessibility, failure, and removal
- Network, storage, DOM, consent, CSP, performance, outage, disable, and regression evidence supports every conclusion
