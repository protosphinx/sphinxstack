---
name: audit-third-party-scripts
category: web
description: Audit third-party browser scripts for purpose, data access, execution power, performance, consent, integrity, and removal. Use when external code runs in a site's origin or user journey.
---

# audit-third-party-scripts

Treat remotely controlled browser code as privileged access to the page and its users.

## Procedure

1. Inventory scripts, tags, packages, owners, vendors, purposes, loading paths, and environments.
2. Observe network, cookies, storage, DOM access, events, forms, frames, and data destinations.
3. Map consent, contract, privacy, residency, retention, and security requirements.
4. Measure blocking, transfer, CPU, layout, errors, and critical-journey failure.
5. Check version pinning, integrity, CSP, sandboxing, permissions, source control, and update path.
6. Remove duplicates, unused tags, broad triggers, and unsupported data collection.
7. Isolate or proxy capabilities where the business need survives with less access.
8. Test vendor outage, compromise simulation, consent change, rollback, and complete removal.
9. Publish an owner and recurring review for every retained script.

## Guardrails

- Never assume a tag manager makes loaded code trusted.
- Do not expose form or authentication data to a vendor without explicit approved purpose.
- A contract does not technically constrain browser execution.

## Done

- A third-party script inventory report records purpose, access, owner, and controls
- Performance, consent, outage, compromise, and removal cases are tested
- Observed network and storage behavior reconcile with approved purpose
