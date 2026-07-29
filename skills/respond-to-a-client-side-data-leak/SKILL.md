---
name: respond-to-a-client-side-data-leak
category: web
description: Respond to a client-side data leak by protecting users, preserving browser and third-party evidence, tracing exposed fields and recipients, containing collection, and verifying durable remediation. Use when scripts, tags, URLs, storage, logs, or browser integrations transmit data to unintended parties.
---

# respond-to-a-client-side-data-leak

Stopping one visible script does not prove the data flow or stored copies are contained.

## When to use

- Use for analytics, tag, chat, replay, advertising, support, extension, CDN, browser-storage, or URL-based exposure.
- Activate qualified security, privacy, legal, communications, vendor, and regulatory support for the actual incident.

## Preconditions

- Establish incident, security, privacy, legal, web, analytics, identity, vendor, customer-support, communications, and evidence authority.
- Use clean administrative channels if tag managers, build systems, accounts, or third-party consoles may be compromised.
- Define emergency publication, tag disablement, credential rotation, user protection, notification, and evidence-preservation authority.

## Procedure

Complete **exposure scope and user protection**, **evidence preservation**, **containment**, and **recovery and remediation** as one incident process.

1. Open a **client-side data leak timeline** with detection, releases, scripts, tags, configurations, consent states, requests, recipients, access, decisions, and timestamps.
2. Protect users by stopping or isolating the harmful collection path, disabling affected journeys where necessary, and preventing additional exposure without destroying evidence.
3. Preserve deployed bundles, source maps under restriction, tags, configurations, network captures, headers, storage schemas, URLs, logs, releases, access history, vendor records, and payload samples with data minimization.
4. Build a **data flow and affected-record reconciliation** from interface fields and client state through serialization, request, proxy, recipient, downstream sharing, storage, access, deletion, and affected population.
5. Determine exact fields, sensitivity, consent, user groups, routes, regions, dates, recipients, purpose, encryption, retention, and likelihood of misuse.
6. Investigate root causes across code, dependencies, tag manager, configuration, data layer, URL construction, logging, replay masking, browser storage, source maps, and compromised access.
7. Rotate exposed credentials or tokens, invalidate sessions where justified, remove cached or indexed secrets, and block unauthorized recipients.
8. Send formal preservation, access restriction, deletion, and downstream-recipient requests to vendors. Track raw requests, recordings, derived profiles, exports, backups, model-training datasets, subprocessors, access evidence, deletion attestations, unresolved-copy owners, and the explicit residual-risk decision when eradication cannot be proven.
9. Coordinate user, customer, partner, regulator, insurer, and public communications from verified facts without repeating leaked data.
10. Remediate through field allowlists, typed schemas, URL and log minimization, secret scanning, tag governance, consent enforcement, isolation, and build-time plus runtime tests.
11. Validate clean and affected browsers, consent states, accounts, regions, routes, errors, third parties, caches, logs, and downstream reports.
12. Monitor recipient access, deletion evidence, credential misuse, renewed collection, user harm, and recurrence through closeout.

## Failure plan

- If the exposed fields remain uncertain, contain the broader plausible path and preserve that uncertainty.
- If disabling a script breaks a critical journey, use an independently reviewed safe-mode path rather than restoring unsafe collection.
- If a recipient cannot prove deletion, record residual exposure and continue legal, privacy, and user-protection handling.
- If secrets appeared in URLs or caches, assume replication across history, logs, referrers, analytics, and intermediaries until checked.

## Worked example

After a tag-manager release, a session-replay and analytics chain sends form values, account identifiers, password-reset tokens in URLs, and browser-storage fields to several third parties, while CDN and vendor logs retain requests and consent behavior differs by country. Responders disable unsafe collection, preserve restricted evidence, trace each field and recipient, protect affected accounts, request downstream restriction and deletion, correct URL and serialization paths, and verify all regions and consent states.

## Done

- A client-side data leak timeline verifies releases, access, scripts, tags, requests, recipients, containment, decisions, communications, and evidence custody
- A data flow and affected-record reconciliation proves exposed fields, users, routes, consent, recipients, downstream copies, access, retention, deletion, and unresolved exposure
- A containment, notification, and remediation report demonstrates user protection, credential handling, vendor action, legal and privacy decisions, technical controls, cross-region verification, and recurrence monitoring
