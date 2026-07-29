---
name: migrate-a-university-learning-platform
category: school
description: Migrate a university learning platform through identity, course, assessment, accessibility, privacy, integration, cutover, rollback, and academic-record reconciliation. Use when active teaching and consequential learner records must move between systems.
---

# migrate-a-university-learning-platform

Preserve each learner’s access, work, deadlines, feedback, and official record.

## When to use

- Use for learning management, assessment, course-content, virtual-classroom, portfolio, or student-engagement platform replacement.
- Activate qualified academic, registrar, accessibility, privacy, security, records, identity, integration, labor, vendor, student, and regional authority.

## Preconditions

- Define institutions, terms, courses, cohorts, users, roles, regions, calendars, assessments, accommodations, integrations, retention, recovery objectives, and stop authority.
- Establish official source authority for identity, enrollment, course, submission, grade, feedback, accommodation, and completion state.
- Preserve a tested independent continuity route for critical teaching and assessment.

## Procedure

Complete **academic and technical inventory**, **identity, content, and record parity**, **term-aware cutover**, and **rollback and retirement**.

1. Build a **learning-platform migration register** for user, role, course, section, enrollment, content, activity, submission, attempt, grade, feedback, accommodation, communication, consent, integration, retention, owner, and source authority.
2. Inventory student-information, identity, library, video, plagiarism, proctoring, payment, analytics, notification, classroom, accessibility, and archival dependencies.
3. Define stable identities and mappings for people, courses, sections, groups, assessments, attempts, content, files, URLs, grades, and messages.
4. Recreate role, delegated access, least privilege, separation of duties, guest, observer, support, impersonation, emergency, and break-glass controls.
5. Preserve due dates, time zones, extensions, accommodations, anonymous marking, moderation, rubrics, attempts, late rules, grade calculations, releases, appeals, and audit history.
6. Migrate content from immutable exports with versions, hashes, rights, links, captions, transcripts, reading order, formats, source files, and rejection reasons.
7. Rehearse representative learner and staff journeys across registration, access, teaching, submission, autosave, feedback, grading, appeal, completion, and support.
8. Reconcile every consequential record by stable identity, not aggregate counts; test duplicate, missing, late, withdrawn, cross-listed, merged, and changed-identity cases.
9. Define per-object overlap states and monotonic authority epochs so only one system may accept or publish each assessment, grade, enrollment, message, or due-date change.
10. Before authority transfer, reconcile every inbound and outbound queue; require each event to carry a stable event ID, academic object ID, source revision, authority epoch, scheduled or effective time, and origin.
11. Require consumers to keep an idempotency ledger, reject stale epochs, and record queued, sent, acknowledged, failed, retried, dead-lettered, canceled, and transferred events.
12. Capture source and target revision, expected base, scheduled actions, integration acknowledgements, and target-only deltas; quarantine conflicts instead of last-write-wins.
13. Cut over around academic risk by pilot, faculty, program, region, term, or activity, with readiness gates, support, observation, and explicit go or rollback authority.
14. Monitor login, authorization, accessibility, content, submissions, integrations, notifications, grades, latency, support, and security during stabilization.
15. Rehearse delayed legacy grade export, one-time scheduled release, attempt-linked plagiarism or proctoring retry, notification deduplication, and rollback after external acceptance without replay.
16. Rehearse rollback after new submissions, feedback, grade changes, extensions, enrollment changes, and scheduled releases without losing valid work or duplicating action.
17. Retire legacy access only after official records, audit, appeals, retention, legal hold, rights, export, credential, integration, support, and restore duties are accepted.

## Failure plan

- If a learner cannot access a consequential activity, provide the authorized equivalent route and protect them from penalty.
- If submission, grade, or accommodation identity is ambiguous, stop that object and reconcile it before release.
- If both systems can act on one consequential identity, fence the stale authority immediately.
- If rollback loses post-cutover work, preserve the target and reconcile forward under one official record authority.

## Worked example

A university moves active courses, submissions, quizzes, grades, accommodations, videos, discussions, integrations, and archives between platforms across campuses with different calendars while final assessments continue. The migration assigns stable identities, tests accessible journeys, fences each academic record, reconciles attempts and grades, and rehearses rollback after valid target submissions.

## Done

- A learning-platform migration register verifies identities, courses, enrollments, content, assessments, attempts, grades, accommodations, messages, integrations, ownership, retention, and authority
- An accessibility, identity, content, submission, grade, and workflow parity report proves representative journeys, record reconciliation, rights, security, performance, and unresolved exceptions
- A cutover and rollback rehearsal demonstrates authority fencing, integration epoch rejection, idempotency, conflict quarantine, one-time schedules, continuity, new-work preservation, grade and enrollment integrity, monitoring, support, legacy restoration, and academic acceptance
