---
name: create-a-git-branch
category: code
description: Create a Git branch from the intended base while preserving existing changes, naming scope clearly, and verifying upstream state. Use when work needs an isolated line of development.
---

# create-a-git-branch

Inspect current state before changing branches.

## When to use

- Use for feature, fix, experiment, release, or review work that should not occur on the current branch.
- Do not discard, overwrite, or silently include another person's dirty or untracked work.

## Procedure

1. Inspect repository root, current branch, status, worktrees, remotes, and untracked files.
2. Confirm intended base and whether it must be refreshed from the remote.
3. Separate or preserve unrelated work through an approved worktree, commit, or stash strategy.
4. Choose a short branch name that reflects scope and repository convention.
5. Create the branch from the exact intended commit without rewriting shared history.
6. Verify branch name, HEAD, upstream expectation, and worktree status.
7. Record the base commit and planned validation in the task or pull request.

## Done

- A new branch points to the verified intended base and preserves all preexisting files and changes
- Branch name, HEAD commit, worktree status, and upstream plan are checked and recorded
