---
name: audit-a-logging-pipeline
category: code
description: Audit a logging pipeline for source completeness, structure, loss, ordering, privacy, access, retention, integrity, cost, and retrieval. Use when logs support operations, security, compliance, or incident evidence.
---
# audit-a-logging-pipeline
## When to use
- Use across application, host, network, audit, and third-party logs.
- Never broaden collection of secrets or personal data merely for convenience.
## Preconditions
- Inventory sources, agents, buffers, transports, processors, stores, indexes, access, retention, and consumers.
## Procedure
1. Trace representative events from source through every transformation to retrieval.
2. Verify schema, timestamps, clocks, identity, severity, correlation, and provenance.
3. Measure drops, duplication, delay, reorder, truncation, backpressure, and outage behavior.
4. Review redaction, minimization, tenant isolation, encryption, access, deletion, and legal hold.
5. Check tamper evidence, configuration change, parser failure, and audit separation.
6. Test queries, alerts, incident reconstruction, capacity, and cost.
## Failure plan
- Preserve critical audit sources independently when the main pipeline is untrusted.
## Worked example
A parser silently drops multiline security events; raw-source reconciliation reveals the gap.
## Done
- A logging audit report records sources, transformations, quality, privacy, security, retention, retrieval, capacity, and findings
- Loss, duplicate, delay, parser, clock, tenant, access, deletion, tamper, and incident-reconstruction tests verify evidence
