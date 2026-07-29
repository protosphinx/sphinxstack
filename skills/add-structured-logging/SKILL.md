---
name: add-structured-logging
category: code
description: Add stable, privacy-safe structured events that explain important application decisions and failures without flooding storage. Use when logs are free-form, production behavior is hard to trace, or a service needs searchable events before launch or incident response.
---

# add-structured-logging

Log the decisions and state changes an operator must explain. Give events stable names and fields,
connect work across boundaries, and verify that sensitive data stays out.

## Inputs

- Name the user journey, operational questions, service owner, retention rules, and log destination.
- Gather current logs, incident examples, data classification, and correlation mechanisms.
- Identify cost, volume, and access constraints before adding events.

## Procedure

1. Write the questions the logs must answer, such as what failed, for whom, at which boundary, and after which change.
2. Inventory existing events and remove or consolidate lines that answer no operational question.
3. Define a small event schema: event name, timestamp, severity, service, version, environment, correlation id, outcome, and approved domain fields.
4. Establish naming, types, required fields, null handling, schema versioning, and ownership.
5. Add events at request acceptance, important decisions, external boundaries, state transitions, rejection, retry, and completion.
6. Keep exception type and safe diagnostic context while excluding credentials, tokens, message bodies, and unnecessary personal data.
7. Propagate one correlation identifier through requests, jobs, queues, and provider calls without using it as authorization.
8. Define sampling and rate limits for high-volume success events. Never sample away rare severe failures by default.
9. Test representative success, validation failure, dependency failure, retry, and cancellation paths.
10. Query the emitted events to reconstruct one journey and verify field types, redaction, retention, and access.
11. Measure event volume and cost, then publish the event dictionary and owner.

## Boundaries

Never log passwords, secrets, authorization headers, full request bodies, payment data, or private user content
by default. Do not increase severity to make dashboards look active. Treat logs as sensitive data with explicit
access and deletion rules.

## Done

- An event dictionary defines stable names, fields, types, severity, owner, retention, and redaction
- Tests verify success and failure events, correlation, field shape, and absence of prohibited data
- A diagnostic query reconstructs one real or safely simulated journey across boundaries
- Volume and cost are measured, with sampling and rate limits checked against operational needs

Then use design-observability to connect events to metrics, traces, alerts, and runbooks.
