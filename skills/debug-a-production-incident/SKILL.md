---
name: debug-a-production-incident
category: code
description: Restore a production service while preserving the evidence needed to understand the failure. Establish impact, contain harm, test the recovery, and record follow-up work. Use when real users are affected or a production signal requires coordinated investigation.
---

# debug-a-production-incident

Run an incident as two connected jobs: reduce harm now, then learn enough to prevent a
repeat. Prefer safe restoration over a clever diagnosis while users are still affected.
Keep one factual timeline so responders do not have to reconstruct the event from chat.

## When to use

Use this skill when users are failing, data may be wrong, an important service-level signal
is breached, or responders must coordinate a production investigation. Do not declare an
incident for a local development bug with no shared or production effect.

Never expose customer data, credentials, or private logs in a public channel. Do not make
several uncontrolled changes at once; each change needs an owner, timestamp, and observed result.

## Preconditions

- Open an incident record with a lead, communications owner, severity, and start time.
- Identify the safest source of production signals and the authority required for changes.
- Preserve relevant logs, traces, deploy identifiers, feature-flag state, and recent change history.
- Agree on a communication interval and the audience for internal and external updates.

## Procedure

1. State the user-visible symptom, affected population, first known time, and current severity.
2. Start an incident timeline. Record observations and actions separately from hypotheses.
3. Check broad dependencies and recent changes before diving into one component.
4. Choose the safest containment: disable a feature, shed optional work, fail over, limit traffic,
   revert a configuration, or rollback a release. Predict the signal that should improve.
5. Make one controlled change. Record who made it, when, why, and what happened next.
6. Confirm recovery from the user's path as well as internal dashboards. A green process is not
   enough when checkout, login, or data delivery still fails.
7. Continue monitoring through a defined stability window. Keep the incident open while errors
   are recurring, queues are draining, or data repair is incomplete.
8. Once stable, narrow the causal chain with timestamps and evidence. Distinguish trigger,
   contributing conditions, failed defenses, and user impact.
9. Hold a post-incident review without blame. Create only follow-ups that have an owner,
   priority, verification method, and due condition.
10. Publish an accurate final update and store the incident record where future responders can find it.

## Failure plan

Prepare for a containment action that makes the incident worse. Define the rollback command,
the signal that triggers it, and the person authorized to execute it. If evidence conflicts,
return to the last confirmed observation. If data integrity or security may be involved, stop
destructive repair and involve the responsible owner before proceeding.

## Done

- An incident timeline separates observations, hypotheses, decisions, and production changes
- The impact window names affected users, functions, and duration without unsupported precision
- Recovery proof includes the user journey, system signals, and a completed stability window
- The post-incident review identifies trigger, contributing conditions, and failed defenses
- Every corrective action has a follow-up owner and an explicit verification method

Then use design-observability to repair missing signals and create-a-deployment-pipeline if release controls failed.
