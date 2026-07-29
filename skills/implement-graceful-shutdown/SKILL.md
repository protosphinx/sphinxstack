---
name: implement-graceful-shutdown
category: code
description: Implement graceful shutdown that stops admission, drains work, preserves durable state, releases resources, and terminates within platform limits. Use when services or workers receive planned or forced termination.
---

# implement-graceful-shutdown

Assume the hard deadline will eventually arrive.

## When to use

- Use for servers, workers, schedulers, consumers, and stateful processes.
- Do not acknowledge unfinished work or block forever waiting for uncontrolled clients.

## Procedure

1. Record platform signals, readiness behavior, grace period, termination deadline, and orchestrator sequence.
2. Make signal handling idempotent and begin shutdown exactly once.
3. Mark the instance unready and stop accepting new requests, jobs, leases, or sessions.
4. Drain bounded in-flight work while propagating cancellation and deadlines.
5. Checkpoint or return durable work safely and flush critical buffered state.
6. Close listeners, connections, files, telemetry, and temporary resources in dependency order.
7. Exit nonzero when required preservation or cleanup fails and expose shutdown metrics.
8. Save a shutdown test report for idle, active, overloaded, stuck, repeated-signal, dependency-failure, and hard-kill cases.

## Done

- A shutdown implementation defines admission stop, drain, checkpoint, cleanup, deadline, and exit behavior
- Integration tests verify signals, repeated calls, in-flight work, forced termination, restart, and no lost acknowledged work
