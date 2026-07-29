---
id: retention-schedule-pilot
level: 2
group: Data
name: Retention schedule pilot
proves: [build-a-data-retention-schedule, classify-data-sensitivity, create-a-data-deletion-runbook]
resume_line:
  job: "Built and tested an operational data-retention schedule across live, vendor, and recovery stores"
  college: "Mapped record purposes, retention triggers, holds, and deletion evidence in a working data-governance pilot"
  freelance: "Turns retention policy into tested system rules, exception handling, and deletion evidence"
---

## Brief

Choose one real but bounded workflow, such as support tickets, event
registrations, or volunteer records. Build a retention schedule for
its distinct record classes and trace each class through the live
system, exports, vendors, archives, and backups. Then implement or
simulate one safe expiry path with holds, failure alerts, and
reconciliation. The result should show where deletion is immediate,
delayed, anonymized, or not yet technically supported.

## Personalize

- **The workflow.** Pick a system whose owner can explain purpose,
  copies, exceptions, and current deletion behavior.
- **The authority.** Use actual approved policy or obtain a written
  decision from the responsible records or privacy owner.
- **The hard case.** Include one linked record, preservation hold,
  vendor copy, or restored backup that could defeat a naive deletion.

## Milestones

1. Scope, owners, authorities, record classes, and sensitive fields inventoried.
2. Retention triggers, periods, rationale, disposition, and exceptions documented.
3. Every class mapped across systems, exports, processors, archives, and recovery stores.
4. One expiry workflow implemented or simulated with dry-run output and approval hold point.
5. Exact-match, hold, linked-record, partial-failure, retry, and restore cases tested.
6. Owner reviews reconciliation evidence and records unsupported paths as governed gaps.

## Done means

- Every record class has a sourced trigger, period, owner, and disposition
- System copies and expected residual copies are explicitly mapped
- The pilot cannot delete a held or ineligible record
- Independent queries reconcile eligible, processed, failed, and residual counts
- No live sensitive values appear in project evidence
- Unsupported deletion paths have named remediation or accepted risk
