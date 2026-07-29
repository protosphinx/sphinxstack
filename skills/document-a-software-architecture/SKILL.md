---
name: document-a-software-architecture
category: write
description: Document a software system's boundaries, components, data, decisions, runtime, security, failure modes, and change paths. Use when maintainers or reviewers need a current architecture guide grounded in the real implementation.
---

# document-a-software-architecture

Explain the system at the level needed to change and operate it. Prefer a small set of linked views and decision
records over one diagram that claims to show everything.

## Inputs

- Gather repositories, deployment configuration, schemas, interfaces, infrastructure, observability, and ownership.
- Review current runtime evidence, dependency inventories, incidents, threat models, and architecture decisions.
- Define the audience and the maintenance or review questions the document must answer.

## Procedure

1. State system purpose, users, scope, non-goals, quality attributes, and important constraints.
2. Draw context and trust boundaries around people, external systems, and owned services.
3. Map major components, responsibilities, interfaces, dependencies, and owners.
4. Trace critical request, event, data, and control flows end to end.
5. Document persistent data, lifecycle, consistency, privacy, retention, and recovery.
6. Explain deployment units, environments, configuration, secrets, scaling, and network boundaries.
7. Record availability, security, capacity, observability, and operational assumptions.
8. Describe expected failures, containment, degradation, retry, reconciliation, and recovery behavior.
9. Link consequential decisions and known debt rather than rewriting their full history.
10. Verify diagrams and claims against code, deployed configuration, and responsible owners; add freshness triggers.

## Boundaries

Do not publish secrets, private endpoints, customer data paths, or exploitable detail beyond the document's
approved audience. Never document intended architecture as current without labeling the gap.

## Done

- Context, components, interfaces, data, deployment, trust, and ownership views are linked
- Critical flows and failure behavior are checked against implementation and runtime evidence
- Constraints, decisions, debt, and intended changes are visibly distinguished
- The document has an owner and review triggers tied to system change
