---
name: create-an-uptime-check
category: code
description: Create an external uptime check that verifies a bounded service behavior from representative locations. Use when operators need independent evidence that a public endpoint is reachable and useful.
---

# create-an-uptime-check

Test a user-meaningful response without turning monitoring into load or a source of false confidence.

## Procedure

1. Choose a stable critical endpoint and define success beyond connection establishment.
2. Select representative regions, networks, protocol, headers, and safe authentication.
3. Validate status, bounded content, latency, certificate, and redirect behavior.
4. Set timeout, cadence, retries, and quorum from the service objective.
5. Use synthetic data and prevent the check from creating irreversible side effects.
6. Route failures only after confirming the signal is actionable.
7. Test endpoint, DNS, TLS, provider, regional, and application failure.
8. Link the check to an owner, dashboard, runbook, and maintenance behavior.

## Guardrails

- Do not place long-lived credentials in monitor configuration or URLs.
- A health endpoint can be green while a critical journey is broken.
- Avoid retry settings that hide the duration users actually experience.

## Done

- The uptime-check configuration and success contract are documented
- Failure modes and notification routing are tested
- External results reconcile with service logs and user-visible behavior
