---
name: plan-a-change-freeze
category: code
description: Plan a bounded reduction in change risk with explicit scope, exceptions, and exit conditions. Use when peak events, migrations, incidents, audits, staffing gaps, or other periods make ordinary change disproportionately risky.
---

# plan-a-change-freeze

Define which risks are being reduced and which changes remain necessary. A freeze without a scope or exit rule becomes ambiguous backlog policy.

## Procedure

1. State the risk, protected period, systems, environments, change classes, start, end, and accountable owner.
2. Inventory planned releases, migrations, expirations, certificates, vendor changes, and maintenance that overlap the window.
3. Classify allowed, deferred, and exception-required changes using observable criteria.
4. Preserve emergency security, safety, rollback, and risk-reducing paths with named authority.
5. Define evidence required for exceptions: urgency, blast radius, tests, monitoring, rollback, staffing, and approval.
6. Communicate the freeze to implementers, approvers, support, vendors, and affected business owners.
7. Verify repository, pipeline, scheduler, and operational controls enforce the intended policy without blocking recovery.
8. Track exceptions and detect unreviewed changes during the window.
9. Exit using a readiness check, ordered backlog release, capacity limits, and heightened monitoring.
10. Review whether the freeze reduced risk or merely shifted it.

## Guardrails

- Do not claim “no changes” when automated, vendor, infrastructure, or configuration changes continue.
- Avoid bypass credentials or informal approval channels.
- Never let the freeze block immediate containment of active harm.
- Account for queued risk and staff load after the freeze ends.

## Done

- Scope, dates, allowed changes, and authority are unambiguous
- Overlapping obligations and automation are reconciled
- Exceptions are controlled and observable
- Exit sequencing and post-freeze evidence are recorded
