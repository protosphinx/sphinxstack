---
name: write-an-incident-communication
category: write
description: Write timely incident updates that distinguish facts, impact, actions, and uncertainty. Use when preparing internal notices, status pages, customer messages, leadership briefings, or recovery updates during a disruption.
---

# write-an-incident-communication

Help the audience act without speculating. Match the message to its audience while keeping the underlying facts consistent.

## Inputs

- Verified incident state, affected service or population, and start time
- Current impact, mitigations, workarounds, risks, and next decision
- Audience, channel, approval owner, accessibility needs, and update cadence
- Privacy, security, legal, regulatory, and contractual communication constraints

## Procedure

1. Identify the audience and the decision or action the message should enable.
2. Timestamp the update with an explicit timezone and name the affected service or workflow.
3. State observed impact in plain language; separate confirmed scope from possible scope.
4. Describe what responders are doing without exposing sensitive tactics, people, or unverified causes.
5. Give safe workarounds, support routes, and actions only when verified.
6. State what is unknown or under investigation when it matters to the audience.
7. Set the next update time or a clear condition for the next message.
8. Obtain required approval, publish through the authoritative channel, and preserve the exact version.
9. Reconcile later updates against earlier claims and correct material errors explicitly.

## Message frame

`At [time zone], [service/workflow] is [observed state]. [Audience] may experience [impact]. We are [verified action]. [Safe action or workaround]. We will update by [time/condition].`

## Guardrails

- Do not name a cause, attacker, person, recovery time, or affected count without evidence and authority.
- Avoid “fully resolved” until user journeys and monitoring support it.
- Keep internal-only security or personal information out of public messages.
- Do not erase prior updates; append corrections and preserve history.

## Done

- The message is accurate for its timestamp and audience
- Impact, action, uncertainty, and next update are explicit
- Required approval and publication evidence are retained
- Corrections and final resolution evidence remain traceable
