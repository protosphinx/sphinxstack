---
name: automate-a-task
category: code
description: Write a script that completes a repetitive task they actually do. Covers input, output, dry runs, logs, scheduling, and a safe off switch. Use when they mention a repetitive task, ask "can I automate this", or want a script that runs by itself.
---

# automate-a-task

Automate a chore someone actually does: a script that does
the boring thing, then a scheduler that runs it without them. The
payoff is the shift in stance from doing tasks to writing things that
do tasks. It only lands if the chore is real.

## Ground rules

- Start from a real chore. Ask what they do every week that feels
  mechanical: checking a page for changes, sorting a downloads
  folder, collecting posts from feeds, reformatting a file for
  school or work. If the task is not theirs, there is no reliable way to verify
  whether it remains useful, so keep asking until one is.
- One script, one job, readable top to bottom. Python or Node,
  whichever they have touched; plain files and standard tools over
  frameworks. If it scrapes, respect the site: check robots.txt,
  fetch once per run, and prefer an official feed or API when one
  exists.
- Destructive steps get a rehearsal. Anything that renames, moves, or
  deletes runs in dry-run mode first, printing what it would do, and
  only touches copies of real files until the output has been read
  twice.
- Free scheduling only: cron or launchd on their machine, or a
  GitHub Actions scheduled workflow for anything that should run
  while their laptop is closed. Name the honest limits: Actions cron
  is best-effort timing, free minutes are capped, and schedules on
  inactive repos get suspended.
- Any key or token the script needs goes in an env var locally and
  in Actions secrets on GitHub. Never in the script, never committed.

## The path

1. Do the chore manually once, together, narrating each step. The
   narration is the spec; write it as comments before any code.
2. Script the core: input to output, run by hand, output checked
   against a manual pass of the same chore. Dry-run flag first if
   anything is destructive.
3. Harden lightly: the missing file, the page that changed shape,
   the empty feed. Fail with a clear message and a nonzero exit
   instead of half-finished work.
4. Schedule it. Local chore: a cron or launchd entry they write and
   can recite back. Cloud chore: a workflow YAML with `schedule:`,
   pushed, then triggered once by hand with `workflow_dispatch` to
   prove it runs before waiting for the clock.
5. Make results visible: the script writes a dated log line, commits
   an output file, or produces something they will notice. Silent
   automation is broken automation waiting to be discovered.
6. Let it run on its own at least once, then read the log together.

## Done

- A script in a repo that does the real chore end to end
- Scheduled and proven: at least one unattended run with visible
  output or log
- Destructive steps had a dry run; secrets live in env vars or
  Actions secrets only
- A README line saying what runs, when, and how to turn it off
- They can name the next chore they would automate

Then: use-an-api if the chore wants richer data, or ship-on-github
if the script deserves a repo of its own.
