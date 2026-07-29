---
name: design-a-cookie-consent-interface
category: design
description: Design a cookie consent interface with genuine purpose-level choice, equal refusal, evidence, and withdrawal. Use when nonessential browser storage or tracking requires user control.
---

# design-a-cookie-consent-interface

Make the decision understandable and ensure the interface matches actual script behavior.

## Procedure

1. Inventory storage, trackers, purposes, providers, data, duration, regions, and legal basis with qualified owners.
2. Separate strictly necessary behavior from each optional purpose.
3. Present accept, reject, and manage choices with comparable prominence and effort.
4. Use plain language for purpose, provider, consequence, and withdrawal.
5. Block optional processing until the applicable choice exists.
6. Store minimal consent evidence with policy version and allow later withdrawal.
7. Propagate changes to tags, vendors, cookies, local storage, and server records.
8. Test first visit, refusal, partial choice, expiry, policy change, withdrawal, accessibility, and script failure.
9. Reconcile the visible settings with observed network and storage behavior.

## Guardrails

- Never use color, repeated interruption, or hidden controls to coerce acceptance.
- Consent does not make unnecessary collection appropriate.
- Do not call an optional tracker strictly necessary without evidence.

## Done

- A consent-purpose and interface specification is approved
- Choice, refusal, withdrawal, accessibility, and vendor-failure paths are tested
- Network and storage activity reconcile with recorded user choices
