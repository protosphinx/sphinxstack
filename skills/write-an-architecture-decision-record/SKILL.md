---
name: write-an-architecture-decision-record
category: code
description: Record a consequential technical decision with context, constraints, considered options, trade-offs, consequences, and conditions for review. Use when a team must choose an architecture, dependency, data model, protocol, or operational approach that will be expensive or confusing to reverse.
---

# write-an-architecture-decision-record

Preserve why a choice was reasonable at the time. Make the record short enough to read and specific enough
that a future maintainer can tell whether its assumptions still hold.

## Inputs

- Name the decision owner, reviewers, deadline, affected systems, and implementation stage.
- Gather requirements, constraints, measurements, prior decisions, and rejected proposals.
- Separate facts, estimates, preferences, and organizational constraints.

## Procedure

1. Give the decision a stable id and action-oriented title.
2. Describe the context and problem without embedding the preferred answer.
3. List decision drivers in priority order: correctness, compatibility, delivery, operability, security, cost, performance, or reversibility.
4. Record the smallest serious option set, including keeping the current approach when viable.
5. Evaluate each option against the same drivers using evidence and clearly labeled estimates.
6. State the decision in one paragraph, including scope and what it does not decide.
7. Record positive, negative, and uncertain consequences. Name new operational work and migration cost.
8. Define validation: prototype, benchmark, compatibility check, failure walkthrough, or review evidence.
9. Set reopening conditions tied to measurable changes rather than a calendar date alone.
10. Link superseded and dependent records, implementation work, and reviewers.
11. Obtain acknowledgement from accountable owners and store the record beside the system.

## Boundaries

Do not rewrite an old record to make history look cleaner. Supersede it with a new decision. Never present
an estimate as measured fact or hide a policy, staffing, cost, privacy, or security constraint behind
technical language.

## Done

- The decision record contains context, ranked drivers, options, decision, consequences, and scope
- Evidence and estimates are distinguished, with validation results or a named validation plan
- Reviewers and accountable owners are recorded along with meaningful dissent
- Reopening conditions and links to superseded, dependent, and implementation records are complete

Then use design-a-production-system when the decision depends on a wider architecture.
