---
name: build-a-data-retention-schedule
category: data
description: Build an operational schedule for retaining and disposing of records. Use when systems hold overlapping record types with legal, contractual, business, privacy, preservation, and deletion constraints.
---

# build-a-data-retention-schedule

Create rules that systems can execute and owners can defend. Avoid one blanket period for a database containing different record classes.

## Inputs

- Record inventory, purposes, systems, owners, and data flows
- Applicable requirements supplied by authorized legal, privacy, security, finance, or records owners
- Contract terms, investigation holds, recovery dependencies, and deletion capabilities
- Current retention settings, backups, archives, replicas, exports, and vendor behavior

## Procedure

1. Define scope, authoritative policy sources, approval roles, and the date on which requirements were checked.
2. Group records by business event and purpose, not just table or file name.
3. Record the retention trigger, minimum, maximum, rationale, authority, and disposition for each class.
4. Separate active use, inactive archive, legal hold, backup expiry, anonymization, and final deletion.
5. Identify conflicts and unknowns without choosing a legal interpretation on your own.
6. Map each record class to every system copy, processor, export, cache, index, and recovery store.
7. Specify machine-testable start events, deletion jobs, exceptions, approvals, evidence, and failure alerts.
8. Test representative records across clock boundaries, linked objects, holds, restore paths, and vendor deletion.
9. Reconcile actual age distributions and deletion logs against the schedule.
10. Approve, version, publish, and review the schedule when purpose, system, or authority changes.

## Guardrails

- Never delete records subject to a confirmed hold or preservation duty.
- Do not retain everything “just in case”; record the purpose and authority.
- Do not claim hard deletion when backups, processors, or derived stores remain.
- Use privacy-minimized samples when testing.

## Done

- Every in-scope record class has a trigger, period, authority, owner, and disposition
- System copies and exceptions are mapped
- Deletion and hold behavior has been tested
- Reconciliation evidence and review triggers are retained
