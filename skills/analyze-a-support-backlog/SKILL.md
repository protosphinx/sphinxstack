---
name: analyze-a-support-backlog
category: data
description: Measure a support backlog, identify customer and operational risk, and produce a capacity-aware recovery plan. Use when ticket age, volume, reassignment, reopen rates, or missed commitments are increasing.
---

# analyze-a-support-backlog

Explain what is accumulating, why it is stuck, and which recovery actions reduce harm without hiding demand.
Keep new inflow, historical backlog, and data-quality problems separate.

## Inputs

- Export a dated queue snapshot with status history, priority, channel, product, customer segment, owner, and timestamps.
- Gather service-level definitions, staffing hours, arrival and completion rates, incident history, and known migrations.
- Document exclusions, missing fields, merged cases, spam rules, and clock behavior.

## Procedure

1. Define backlog, age, first response, active work, waiting state, resolution, reopen, and breach precisely.
2. Reconcile the snapshot to the support system totals and quantify missing or invalid records.
3. Split new inflow from carried backlog and chart age distribution rather than only the average.
4. Segment by impact, reason, channel, product, customer state, owner, reassignment, and reopen history.
5. Identify blocked dependencies, missing ownership, automation loops, duplicate demand, and policy bottlenecks.
6. Compare arrival and sustainable completion capacity with uncertainty and seasonality noted.
7. Model recovery options such as dedicated sweeps, routing repair, product fixes, deflection, or temporary staffing.
8. Rank actions by customer harm reduced, effort, risk, owner, and time to observable effect.
9. Create a daily recovery dashboard with inflow, outflow, age bands, breaches, and quality guardrails.
10. Set exit criteria and a follow-up review to confirm the backlog did not merely change labels.

## Boundaries

Do not bulk-close, redate, suppress, or merge tickets to improve the chart. Protect private customer content
and avoid publishing agent rankings without appropriate context and permission. Do not treat reduced ticket
volume as success if access to support or reporting quality worsened.

## Done

- The report reconciles to a dated source snapshot and states data limitations
- Backlog size, age, inflow, outflow, and risk segments are computed and checked
- The recovery plan names actions, owners, capacity assumptions, guardrails, and exit criteria
- Follow-up evidence can distinguish real resolution from relabeling or suppressed demand
