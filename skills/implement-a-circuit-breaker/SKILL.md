---
name: implement-a-circuit-breaker
category: code
description: Implement a circuit breaker with meaningful failure classification, bounded state, safe fallback, probing, recovery, and observability. Use when repeated dependency calls can amplify an outage.
---
# implement-a-circuit-breaker
## When to use
- Use around a dependency whose failure can consume scarce resources or cascade.
- Do not count caller cancellation or valid business rejection as dependency failure.
## Preconditions
- Define operation, timeout, failures, volume, fallback, retry, idempotency, and recovery.
## Procedure
1. Classify success, slow, retryable, terminal, caller, and dependency outcomes.
2. Choose scope by operation, tenant, region, or endpoint without global collateral damage.
3. Define closed, open, and half-open transitions with minimum volume and bounded windows.
4. Coordinate timeout, retry, concurrency, and backoff.
5. Provide a truthful safe fallback or explicit unavailability.
6. Test flapping, low volume, partial failure, probe concurrency, and restart state.
## Failure plan
- Allow authorized bounded bypass only with monitoring and resource protection.
## Worked example
A payment breaker opens on upstream timeouts but not declined cards and permits one idempotent probe.
## Done
- A circuit-breaker implementation records scope, classifications, thresholds, states, fallback, and telemetry
- Low-volume, timeout, retry, probe, flapping, restart, bypass, and idempotency tests verify behavior
