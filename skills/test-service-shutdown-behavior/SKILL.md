---
name: test-service-shutdown-behavior
category: code
description: Test service shutdown behavior across traffic drain, readiness, in-flight work, queues, transactions, leases, deadlines, and restart recovery. Use when deploys or termination may interrupt useful work.
---

# test-service-shutdown-behavior

Shutdown is a state transition, not just a signal handler.

## When to use

- Use for servers, workers, schedulers, consumers, or stateful processes.
- Never test destructive shutdown against production without authorized containment.

## Preconditions

- Define signals, platform grace period, readiness and liveness semantics, traffic routing, task types, and durable state.

## Procedure

1. Record shutdown states and which new work each state accepts.
2. Verify readiness fails before termination while liveness remains appropriate.
3. Test connection drain, keepalive, streaming, and new-request rejection.
4. Test transactions, tasks, message acknowledgements, leases, locks, and side effects at each interruption window.
5. Enforce deadlines, cancellation, forced exit, and bounded cleanup.
6. Restart and reconcile incomplete work without duplication or loss.
7. Observe drain duration, abandoned work, errors, and platform kills.
8. Rehearse rolling deploy, scale-down, crash, and dependency delay.

## Failure plan

- If graceful completion exceeds the platform deadline, make work checkpointable rather than extending shutdown indefinitely.

## Worked example

A worker loses readiness, finishes a leased job, releases unused claims, exits before the deadline, and safely retries a pre-acknowledgement message after restart.

## Done

- A shutdown test report records states, signals, drain, in-flight outcomes, deadlines, forced exit, restart, and reconciliation
- Request, stream, task, transaction, lease, acknowledgement, rolling-deploy, and platform-kill tests verify behavior
