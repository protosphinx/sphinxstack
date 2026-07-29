---
name: contribute-to-open-source
category: start
description: Make the person's first open source contribution. A real issue in a project they use, from fork to submitted change. Use when they say "I want to contribute to open source", "how do I make my first PR", or want public proof of work.
---

# contribute-to-open-source

Guide someone's first open source contribution. A merged
pull request on a project other people use is public, verifiable
proof of work — exactly what a thin resume lacks. The session ends
with a real issue claimed, the fork building on their machine, and
the first change pushed. Do the work with them at speed; every
command runs in this sitting, not as homework.

## Find the project in their life

Do not send them to a "good first issue" aggregator full of
abandoned repos. Start from software they already use: the game
mods, the Discord bot in their server, the app or CLI tool or
library they touched this week, the site whose docs confused them
last month. A contributor who uses the project writes better fixes
and cares whether they land.

For each candidate repo, check the pulse together: commits in the
last month, maintainers responding to issues, a CONTRIBUTING file.
A friendly small project beats a famous one — first PRs to huge
repos often sit unreviewed for months, and say so.

## Find the issue

Look through open issues labeled good-first-issue, help-wanted, or
docs — but also trust their own experience: a typo they noticed, a
confusing error message, a doc step that failed for them is a
legitimate first issue they can file and then fix. Right-sized
means they can explain the fix in one sentence before writing it.
Docs fixes, error-message improvements, and small reproducible bugs
all count; nothing is beneath a first PR.

Before writing code, read `CONTRIBUTING.md`, the issue thread, and recent pull
requests for the project's coordination norm. Comment to ask or state intent
only when the project requests it; some projects do not assign issues. Check
that no one is already doing the same work before starting.

## Fork, fix, submit

All in this session, them at the keyboard where possible:

1. Fork on GitHub, clone the fork, add the upstream remote.
2. Get it building or running locally, following the project's own
   docs. If the docs fail, that failure is a contribution too —
   note exactly where.
3. Branch, make the change small and complete, run the project's
   tests or checks.
4. Commit with a message that says what and why, push, open the PR.
   The PR description links the issue and states what changed —
   their words, plain.
5. Set the expectation: review may take days, requested changes are
   normal and not rejection, and they should respond within a day
   when it comes.

Once merged, the contribution goes on the resume with the PR link —
https://sphinxstack.com/skills/build-resume/ shapes that line. If
they liked the workflow, https://sphinxstack.com/skills/ship-on-github/
turns it toward projects of their own.

## Done

- Active project and right-sized issue selected under its published contribution rules
- Fork builds locally; focused change and relevant checks pass
- Pull request submitted in the person's words with issue link and proof, or a
  documented maintainer-specific next step if submission is intentionally later
