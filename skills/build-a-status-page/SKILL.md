---
name: build-a-status-page
category: web
description: Build a service status page with independent availability, clear components, incident updates, subscriptions, history, accessibility, and truthful operational state. Use when users need a reliable source for outages, degradation, and maintenance.
---

# build-a-status-page

The status page must remain reachable and useful when the primary platform fails.

## When to use

- Use for public products, internal platforms, APIs, regions, or critical dependencies.
- Do not publish sensitive attack, customer, employee, or infrastructure details.

## Procedure

1. Define audience, components, regions, dependencies, states, severity, incident authority, and update service levels.
2. Host the page and update path independently from the systems whose failure it reports.
3. Map monitored signals to human-reviewed component states without claiming health from one shallow probe.
4. Design incident creation, timestamped updates, affected components, workarounds, resolution, and retrospective links.
5. Separate scheduled maintenance from incidents and state expected user impact in local and absolute time.
6. Provide email, feed, webhook, or other subscriptions with verified ownership, consent, and withdrawal.
7. Make page, charts, state labels, history, and subscription flows accessible and usable on slow networks.
8. Rehearse primary-platform, identity, DNS, provider, update-channel, and status-host failures.
9. Review update timeliness, accuracy, corrections, history retention, and discrepancy with support reports.

## Done

- A status-page runbook records components, state definitions, authority, update cadence, hosting independence, subscriptions, and failure modes
- Incident drill, independent-host, accessibility, slow-network, subscription, timestamp, history, and correction checks verify truthful availability
