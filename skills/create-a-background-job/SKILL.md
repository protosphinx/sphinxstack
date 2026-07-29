---
name: create-a-background-job
category: code
description: Create a durable background job with explicit delivery, idempotency, retry, cancellation, and recovery behavior. Use when work should continue outside a synchronous request.
---

# create-a-background-job

Move work off the request path without moving correctness, ownership, or evidence out of sight.

## Procedure

1. Define the job input, output, owner, business effect, deadline, ordering, and delivery guarantee.
2. Put stable record identifiers in the queue payload and retrieve sensitive details through authorized storage.
3. Make the handler idempotent and define its transaction or checkpoint boundaries.
4. Acknowledge delivery only after durable progress makes replay safe.
5. Set execution timeout, bounded exponential backoff, jitter, maximum attempts, and retry classification.
6. Add cancellation and supersession checks before each expensive or irreversible step.
7. Route exhausted or malformed work to a dead-letter path with owner, alert, and replay procedure.
8. Bound concurrency and document per-key ordering or mutual-exclusion needs.
9. Emit structured attempt, progress, outcome, latency, and queue-age signals.
10. Test duplicates, crashes, poison input, dependency outage, cancellation, deploys, and replay.
11. Reconcile source records, queue state, completed effects, and dead letters.

## Guardrails

- Do not serialize credentials or full sensitive records into a queue message.
- Never retry every exception indefinitely.
- A successful dequeue is not evidence that the business effect completed.

## Done

- The job contract and state transitions are documented
- Duplicate, crash, retry, cancellation, and replay tests are verified
- Source, queue, effect, and dead-letter records reconcile
