---
name: recover-a-corrupted-git-repository
category: code
description: Recover a corrupted Git repository through preservation, object and reference diagnosis, alternate-copy inventory, minimal repair, and independent verification. Use when objects, refs, index, worktree, or repository metadata are damaged.
---

# recover-a-corrupted-git-repository

Preserve every unique object and uncommitted file before repair.

## When to use

- Use for checksum errors, missing objects, invalid refs, broken index, failed fetch, or inaccessible history.
- Do not run destructive cleanup, reset, checkout, or garbage collection before preservation.

## Preconditions

- Record symptoms, repository path, filesystem state, remotes, clones, worktrees, bundles, backups, reflogs, and uncommitted work.

## Procedure

1. Stop automated fetch, maintenance, cleanup, and writes.
2. Copy repository metadata and worktree through an authorized recoverable method.
3. Inventory refs, reflogs, alternates, worktrees, submodules, remotes, packs, loose objects, and unique files.
4. Run read-only integrity checks and classify index, ref, object, pack, config, or filesystem damage.
5. Obtain missing objects only from verified clones, remotes, bundles, backups, or collaborators.
6. Repair the smallest affected layer and preserve conflicting evidence.
7. Rebuild derived index or metadata only after unique state is safe.
8. Verify history, trees, tags, signatures, worktrees, builds, and remote comparison before resuming.

## Failure plan

- If unique objects remain missing, preserve partial history and document the exact loss rather than fabricating continuity.

## Worked example

A missing pack exists in a verified colleague bundle; recovery imports it into a copy, rebuilds the index, and preserves three uncommitted files.

## Done

- A repository recovery report records preserved copies, integrity findings, sources, repairs, remaining loss, and resumed state
- Object, ref, reflog, worktree, signature, build, remote, uncommitted-file, and independent-copy checks verify recovery
