---
name: design-a-bulk-action-flow
category: design
description: Design a bulk-action flow with explicit selection scope, previews, authorization, progress, partial-result reconciliation, and recovery. Use when one command can change many records or objects.
---

# design-a-bulk-action-flow

Let users see exactly which objects the action will affect.

## When to use

- Use for bulk edit, move, archive, delete, approve, export, notify, assign, or permission changes.
- Do not infer selection across hidden pages or filters without stating it.

## Procedure

1. Define action, eligible objects, maximum size, permissions, side effects, dependencies, and reversibility.
2. Design selection for visible rows, all filtered results, exceptions, disabled objects, and changed data.
3. Keep selection count, scope, filter, and representative items visible.
4. Preview changes, conflicts, downstream effects, recipient counts, cost, and destructive consequences.
5. Reauthorize at execution and create a stable operation identifier for safe retry.
6. Show queued, running, complete, partial, failed, canceled, and expired states without blocking unrelated work.
7. Reconcile every object with success, reason, current state, and allowed retry or recovery.
8. Provide undo or compensation only when it is genuinely safe and bounded.
9. Test concurrent edits, permission loss, timeouts, duplicates, huge sets, hidden items, keyboard, screen readers, and refresh.

## Failure plan

- If the selected set changes after preview, require renewed review for consequential actions.
- If processing is partial, keep one operation record and never invite a blind rerun of completed objects.

## Done

- A bulk-action specification records selection semantics, preview, authorization, operation states, object results, and recovery
- Failure and accessibility tests verify scope, concurrency, idempotent retry, partial reconciliation, progress, and safe reversal
