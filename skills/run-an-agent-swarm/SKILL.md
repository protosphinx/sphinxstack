---
name: run-an-agent-swarm
category: code
description: Run several coding agents in parallel on one repository from a shared work queue, with per-agent isolation, serialized builds, disk limits, and a supervision loop that reclaims stalled work. Use when someone asks to run a coding swarm, work through open beads overnight, keep several agents moving through a backlog, or stop parallel agents from colliding in one checkout or filling the disk.
---

# run-an-agent-swarm

Running several agents on one repository is a scheduling problem before it is a prompting
problem. The output that matters is merged, reviewed, tested changes, so the swarm needs
a queue that hands out one item per owner, checkouts that cannot overwrite each other, a
build path that does not thrash the machine, and a supervisor that notices when an agent
has stopped making progress.

## When to use

Use this when the backlog is genuinely parallel, each item can be checked independently,
and the repository already builds and tests from a single command. It suits a long
unattended run: an audit sweep, a migration across many call sites, a bug queue.

Do not use it for one hard change that needs a single coherent design. Do not use it on a
codebase with no test signal, because a swarm with no test signal produces volume that
nobody can verify. Do not point it at a repository where a bad merge reaches users
directly.

## Preconditions

- Read every applicable `AGENTS.md` file and the repository `README.md` completely before
  dispatching work. If either is missing, record that fact instead of inventing its rules.
- An agent-readable architecture note names the entry points, module boundaries, build
  command, test command, and files agents must not touch. Write it before launch.
- A shared work queue exists outside any single agent's memory. Every item has an id, a
  statement of done another agent could check, a status, and an owner field.
- The main branch is protected. A human, or a reviewer that did not write the change,
  approves every merge.
- Measured build cost is known: cold build time, test time, and disk consumed per build.
- Free disk is at least the number of agents multiplied by twice the cold build size.
- No agent checkout can read production credentials. Scope the run to a throwaway
  environment or to credentials that cannot touch user data.

## Roles the swarm needs

Any tool that fills the role works. The roles are what matter.

| role | what it must do | examples |
|---|---|---|
| work queue | hand out one item per owner, hold status and evidence | a bead tracker such as `br` and `bv`, issue tracker, a checked-in queue file |
| session host | start, list, message, and stop agents without losing their output | a terminal multiplexer such as `ntm` or `tmux` |
| isolation | give each agent a private working directory | git worktrees, one container per agent |
| build runner | one cached, serialized build and test path for all agents | a shared cached runner such as `rch`, a remote build cache |
| supervisor | run the cycle below on a fixed interval | a scheduled loop, a human at a keyboard |
| model roster | record each worker, runtime, model, and reasoning setting | three Codex workers and three Claude Code workers, or another reviewed mix |

## Tool mapping

Treat tool names as an implementation of the roles above, not as magic words. When the
environment provides `ntm`, `vibing-with-ntm`, `rch`, `br`, `bv`, `loop`, or a named review
skill, read that tool's installed instructions before invoking it. Never guess a command
from the tool name.

- Map `ntm` and `vibing-with-ntm` to session hosting, worker launch, and messaging.
- Map `br` and `bv` to queue creation, claim state, stalled-item inspection, and evidence.
- Map `rch` to the shared build runner. Route every build and test through it when required
  by the repository, and set one project-level build slot unless measurements justify more.
- Map `loop` to the supervision cycle. Four minutes is the default interval for an
  unattended run.
- Map installed `testing-*` and specialist review skills to the queue-expansion passes used
  only after open and reclaimed work is exhausted.

If one of these tools is unavailable, name the missing role and propose a substitute. Get
approval before changing the requested roster, model, reasoning setting, or work tracker.

## Procedure

1. Ground the swarm once. Read every applicable `AGENTS.md` from the repository root to the
   working directory, then read `README.md` completely. Investigate the code and write an
   architecture summary: purpose, entry points, module boundaries, data flow, build and
   test commands, and the parts that are risky to change. Every worker receives that note
   and the original files remain authoritative.
2. Fill the work queue before any agent starts. Split items until one agent can finish one
   item in one sitting. Anything vague becomes an investigation item that produces a
   written finding, never a speculative code change.
3. Size the swarm to the build, not to the model budget. Start with the number of agents
   the disk and build runner can carry, run one full cycle, and add agents only if that
   cycle stayed green.
4. Record the model roster before launch. Include worker id, runtime, requested model,
   reasoning setting, and role. Verify that every requested model and setting is actually
   available; if not, stop and ask before substituting. Use more than one model family when
   requested because disagreement between them is a useful review signal.
5. Give every agent isolation. One worktree or container per agent, its own branch, no
   shared working directory. An agent edits only the files its claimed item names.
6. Route every build and test through the shared cached runner and cap how many builds run
   at once, usually at one per project. Uncontrolled build contention is the common way a
   swarm turns into a machine that compiles all night and ships nothing.
7. Set a disk budget and enforce it every cycle. Prune stale build artifacts, remove
   worktrees of finished items, and stop admitting new work below the headroom threshold.
   The cleaner deletes from a fixed path allowlist. Never let an agent choose a recursive
   delete target.
8. Publish the claim protocol and require it: claim the item with owner and timestamp,
   push a branch within the first few minutes, update the item with evidence, release the
   claim if blocked. An item with no owner is open; an item with an owner is not touched
   by anyone else.
9. Run the supervision cycle on a fixed interval, four minutes by default. Each cycle:
   read the queue, hand the next item to any idle agent with fresh instructions, release
   every stalled claim, reclaim disk, and append one line to the supervision log. Lengthen
   the interval only when normal units of work cannot produce a heartbeat within it.
10. Treat a claim as stalled when its owner has produced no commit, comment, or status
    change for longer than the stall window, typically three cycles. Return it to open with
    a note naming what was found so far, so the next owner does not restart from zero.
11. Review before merge. A reviewer who did not write the change checks it against the
    item's statement of done and the test run, then a human merges. Unreviewed branches
    stay unmerged, however many there are.
12. Score each round: items closed, defects found, machine time and tokens spent. When the
    rate of defects found per unit of effort flattens across rounds, the round has reached
    saturation. Stop that round rather than paying for diminishing returns.
13. When the queue empties, do not let agents invent work. First run applicable installed
    `testing-*` skills, such as a conformance or property-test harness. Every finding
    becomes a new queue item with a statement of done, and the swarm works the queue again.
14. If testing rounds converge, move through specialist passes that fit the repository:
    mock or dead-code detection, reality checks, deadlock and concurrency review,
    profiling, optimization, or a language-port gauntlet. Do not run a Rust-specific pass
    on a non-Rust project. Add evidence-backed findings to the queue; do not edit unrelated
    code while searching for work.
15. Stop when the queue is empty and review rounds are saturated, or when the disk, build,
    cost, time, or safety budget reaches its written limit. Preserve open branches, queue
    state, and the final supervision record for the next run.

## Failure plan

Rehearse these before an unattended run, because each one silently wastes a whole night.

- **Two agents change the same file.** Expected under parallel work. The merge conflict is
  caught at review, the second item returns to open with the first change as context. If
  it happens repeatedly, the items overlap and the queue needs resplitting.
- **Disk fills mid-build.** The cycle's headroom check stops admitting work, the cleaner
  prunes artifacts and finished worktrees, and builds resume. If pruning does not recover
  headroom, stop the swarm rather than corrupting caches.
- **An item ping-pongs between owners.** Three release events on one item means the item is
  wrong, not the agents. Convert it into an investigation item for one agent.
- **The swarm is busy but not progressing.** Sample five merged commits. If they are
  reformatting, dead scaffolding, or tests asserting nothing, cut the agent count and
  tighten the statements of done before resuming.
- **A requested model or tool is unavailable.** Do not silently substitute it. Pause that
  worker, record the missing capability, and get approval for the replacement.
- **You need to stop everything.** Know the single command that halts all agents, where
  every branch and worktree lives, and that nothing merges without a human. Test the stop
  once while you are watching.

## Done

- A roster record names every worker, runtime, model, reasoning setting, checkout, and role
- A queue snapshot from the start and the end of the run shows which items moved, who
  owned them, and what evidence closed them
- A supervision log records every cycle: idle agents restarted, stalled claims released,
  disk reclaimed, and the queue counts at that moment
- A merge record shows each merged change reviewed by an agent or person who did not write
  it, with a passing build and test run against current main
- Disk headroom stayed above the threshold for the whole run, checked from the cycle records
- The stopping condition is written down with its numbers: queue empty, or the round hit
  saturation at a stated defects-per-effort ratio
- No unreviewed branch was merged and no agent held a claim it was not working

Then use debug-a-production-incident if a merged swarm change breaks something live, and
design-a-production-system when the queue keeps producing architecture questions rather
than tasks.
