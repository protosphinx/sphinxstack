---
name: resolve-a-merge-conflict
category: code
description: Resolve a merge conflict by reconstructing both changes, choosing the intended combined behavior, and testing the integrated result. Use when Git cannot combine overlapping edits automatically.
---

# resolve-a-merge-conflict

Resolve intent, not just conflict markers.

## When to use

- Use during merge, rebase, cherry-pick, or patch application.
- Do not choose “ours” or “theirs” wholesale unless every discarded change is understood and authorized.

## Procedure

1. Inspect repository status, operation in progress, conflicted files, base, and both sides.
2. Preserve unrelated dirty work and read surrounding code, tests, history, and relevant commits.
3. State the behavior each side intended and identify compatible, competing, and obsolete parts.
4. Edit the file to implement the intended combined behavior and remove every marker.
5. Search for semantic conflicts in callers, imports, generated files, schemas, and documentation.
6. Run focused tests for both changes plus integration behavior.
7. Inspect the staged diff for accidental deletion, duplication, formatting, or secrets.
8. Complete or abort the Git operation only with the intended scope verified.

## Done

- The resolved file contains the reviewed combined intent with no conflict markers or unexplained discarded change
- Focused tests and staged diff checks verify both original behaviors and their integration
