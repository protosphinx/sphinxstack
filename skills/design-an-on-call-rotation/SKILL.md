---
name: design-an-on-call-rotation
category: code
description: Design a sustainable incident-response rotation with service scope, authority, readiness, compensation, escalation, and evidence. Use when production support must be reliable without unsafe hidden labor.
---

# design-an-on-call-rotation

On-call is a reliability system and a working condition. Match service promises to trained coverage, safe escalation, and measured burden.

## When to use

- Use when a production service needs scheduled primary and backup incident response outside ordinary staffed hours.
- Use ordinary support scheduling when paging, privileged mitigation, and time-critical reliability authority are not required.

## Preconditions

- Confirm service ownership, criticality, support promise, jurisdictions, employment rules, compensation policy, and leadership authority.
- Gather incident history, paging load, timing, severity, toil, response gaps, skills, dependencies, and current runbooks.

## Procedure

1. Define supported services, severity model, response objectives, coverage hours, and what does not page.
2. Measure page burden through frequency, after-hours distribution, actionability, duration, escalation, and interrupted sleep.
3. Set primary, secondary, incident-command, specialist, vendor, and leadership escalation responsibilities.
4. Build eligibility from demonstrated training and access, with shadow and supervised stages.
5. Design rotation size, handoff, holidays, swaps, time zones, backup, compensation, and recovery time.
6. Provide least-privilege access, tested alerts, current runbooks, communication paths, and safe rollback.
7. Rehearse representative incidents, unreachable responders, regional outage, and lost access.
8. Track paging burden, false pages, acknowledgment, mitigation, fatigue, attrition signal, and follow-up completion.
9. Reduce recurring toil at the source and change service promises when sustainable coverage is impossible.
10. Review the rotation with responders and authorized employment, safety, and reliability owners.

## Failure plan

- Never launch a rotation with untrained responders, missing access, no backup, or unclear compensation.
- Do not hide chronic understaffing through heroics, automatic escalation, or unpaid availability.
- If fatigue or health risk emerges, reduce load and coverage immediately through authorized channels.
- Keep credentials and sensitive incident data out of schedules and broad documents.

## Done

- An approved rotation design is checked across scope, severity, authority, coverage, compensation, access, escalation, and recovery time
- Every responder completes a tested supervised incident and failed-primary rehearsal
- A sustainability review measures page burden, service outcomes, toil actions, fatigue, and recovery
