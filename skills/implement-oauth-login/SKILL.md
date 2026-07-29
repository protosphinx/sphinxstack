---
name: implement-oauth-login
category: code
description: Implement standards-based federated login with validated identity claims, protected redirects, and safe account linking. Use when an application must authenticate people through an external identity provider.
---

# implement-oauth-login

Use OpenID Connect for authentication and keep the authorization-code exchange on a trusted server boundary.

## Procedure

1. Confirm whether the need is authentication, delegated API authorization, or both; use OpenID Connect for identity.
2. Register exact redirect URLs, trusted origins, logout behavior, and minimal scopes for each environment.
3. Load provider discovery metadata and pin the expected issuer and supported algorithms.
4. Start an authorization-code flow with one-time `state`, `nonce`, and PKCE values bound to the browser session.
5. Exchange the code through a confidential server path and never expose a client secret to browser code.
6. Validate signature, issuer, audience, nonce, expiration, authorized party, and required claims before trusting identity.
7. Link accounts through a verified, explicit policy rather than matching unverified email text alone.
8. Issue the application's own rotated session and store provider tokens only when a documented API use requires them.
9. Handle denial, expiry, replay, provider outage, revoked consent, logout, and key rotation with safe user messages.
10. Test successful and hostile flows against a provider sandbox and record the configuration.

## Guardrails

- Never treat an access token as proof of identity without the protocol's required validation.
- Do not accept arbitrary return URLs or dynamically weaken redirect matching.
- Avoid automatic account linking when the provider's identifier or verification status is ambiguous.

## Done

- Provider registration and identity-claim policy are documented
- Login, denial, replay, linking, logout, and key-rotation cases are tested
- Issued application sessions reconcile with verified provider events and audit logs
