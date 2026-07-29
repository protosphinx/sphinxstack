---
name: secure-an-internal-api
category: code
description: Secure an internal API with workload identity, authorization, transport protection, input limits, audit, segmentation, and abuse resistance. Use when a service boundary is private but still consequential.
---
# secure-an-internal-api
## When to use
- Use for service, admin, operations, or partner-only APIs.
- Never treat network location alone as identity or authorization.
## Preconditions
- Inventory callers, actions, resources, data, networks, identities, failure modes, and emergency access.
## Procedure
1. Assign authenticated workload identities with short-lived credentials.
2. Authorize each action and resource with tenant and purpose context.
3. Protect transport and verify peer identity end to end.
4. Validate schemas, sizes, rates, deadlines, replay, and idempotency.
5. Segment sensitive routes and restrict outbound dependencies.
6. Audit consequential decisions without logging secrets or payloads.
7. Test confused deputy, credential theft, SSRF, replay, overreach, and outage.
## Failure plan
- Fail closed for consequential action and preserve a bounded governed recovery path.
## Worked example
A private billing endpoint rejects a valid service identity that lacks authority for the requested tenant.
## Done
- An internal-API security report records identities, authorization, transport, validation, segmentation, audit, and recovery
- Cross-tenant, replay, SSRF, rate, credential, failover, log-redaction, and emergency-access tests verify controls
