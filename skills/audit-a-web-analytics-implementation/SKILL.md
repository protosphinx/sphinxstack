---
name: audit-a-web-analytics-implementation
category: web
description: Audit web analytics for event meaning, consent, identity, payload quality, duplication, loss, attribution, governance, and report reconciliation. Use when metrics are untrusted, tracking changes, or privacy and decision risks need review.
---

# audit-a-web-analytics-implementation

Trace a representative user action from interface through collection to the report.

## When to use

- Use before major decisions, after instrumentation changes, or during privacy and data-quality reviews.
- Do not collect secrets, raw form values, sensitive URLs, or unnecessary personal data.

## Procedure

1. Define decisions, metrics, users, regions, platforms, consent states, environments, and authoritative event specifications.
2. Inventory scripts, tags, SDKs, server events, proxies, destinations, identities, cookies, storage, and data retention.
3. Map each event's trigger, schema, properties, timestamp, identity, consent requirement, deduplication key, and report use.
4. Observe network and server payloads for representative journeys without recording sensitive values.
5. Test initial load, navigation, history, refresh, retry, multiple tabs, authentication, logout, consent change, blockers, offline, and restoration.
6. Reconcile interface actions to collector receipt, warehouse rows, transformed models, and published metrics.
7. Quantify missing, duplicate, late, malformed, bot, internal, and misattributed events.
8. Review access, retention, deletion, downstream sharing, data contracts, change control, and monitoring.
9. Correct defects through versioned specifications and verify reports after the relevant processing delay.

## Done

- An analytics audit report records inventory, event contracts, consent, identity, payload findings, lineage, defects, owners, and decisions at risk
- Journey, duplicate, loss, consent, cross-tab, offline, collector, warehouse, deletion, and report-reconciliation checks verify the implementation
