---
name: migrate-a-global-domain
category: web
description: Migrate a global web domain while preserving resolution, identity, security, email, application, and search behavior through staged cutover and rollback. Use when a live service must change its public origin without breaking trust or access.
---

# migrate-a-global-domain

Treat the domain as an identity and security boundary, not just a hostname.

## When to use

- Use for rebrands, domain consolidation, top-level-domain changes, acquisitions, or regional origin moves with public users and integrated clients.
- Use an ordinary redirect change when identity, cookies, federation, applications, email, APIs, certificates, and indexed routes do not cross origins.

## Preconditions

- Confirm registrar and registry control, DNS owners, authoritative providers, transfer locks, renewal, DNSSEC, certificates, certificate transparency, email, abuse contacts, and emergency authority for old and new domains.
- Preserve zone data, TTLs, traffic, route inventory, URL parameters, security headers, authentication and federation configuration, client registrations, search data, email records, monitoring, and known external links.
- Establish an approved migration window, compatibility period, rollback decision owner, communications plan, and a separately controlled emergency channel.

## Procedure

1. Build a **domain and DNS inventory** for all hosts, record types, DNSSEC, certificates, redirects, mail, APIs, files, callbacks, deep links, regional origins, private endpoints, monitoring, and delegated subdomains.
2. Create a deterministic **URL and identity mapping** from every material old origin, route, query behavior, account realm, cookie, OAuth or SAML callback, WebAuthn relying-party identifier, API endpoint, and mobile association to its supported outcome.
3. Identify properties that do not transfer across origins. Host-bound cookies need a safe reauthentication or narrowly designed exchange. WebAuthn relying-party changes, federation audiences, and application registrations may require parallel enrollment rather than automatic rewriting.
4. Register and harden the new domain before traffic: DNS, DNSSEC, certificates, email authentication, abuse handling, HSTS strategy, CSP, CORS, referrer behavior, allowlists, rate controls, and origin protection.
5. Make applications origin-aware without accepting arbitrary hosts or return URLs. Use exact server-side destination mappings and test encoded, scheme-relative, nested, mixed-case, backslash, user-info, and double-decoded redirect bypasses alongside password reset, recovery, invitations, account linking, logout, CSRF, passkeys, OAuth, SAML, API credentials, webhooks, CORS, and signed links.
6. Publish the new domain in internal and external configuration through versioned changes. Coordinate email, mobile universal or app links, package clients, partners, enterprise identity providers, and customer allowlists.
7. Prepare exact redirects for public content, preserving only permitted parameters. Update canonical, `hreflang`, structured data, sitemaps, robots behavior, feeds, and internal links without redirect chains.
8. Rehearse cutover and **rollback** from independent networks and regions, including DNS cache behavior, certificate failure, identity transition, write consistency, email, APIs, stale clients, and old-domain availability.
9. Run a **staged cutover** through internal, canary, regional, and percentage waves. Lower TTLs only where they materially improve recovery and restore them after stabilization.
10. Monitor DNS resolution, certificate errors, authentication, recovery, conversion, mail, APIs, redirects, crawl behavior, support, security alerts, and behavior parity by domain and region.
11. Keep the old domain controlled, renewed, monitored, and narrowly redirected for the approved compatibility period. Maintain a long-term custody plan even after endpoint retirement so the registration cannot be reacquired for historical links, mail, callbacks, or recovery attacks.
12. Close only after parity, identity safety, search migration, owner attestations, and rollback exit criteria pass.

## Failure plan

- If account mapping, recovery, federation, or passkey behavior can bind the wrong identity, stop the wave and restore the prior origin without weakening verification.
- If DNS or certificate state differs by region, hold the safe dual-domain mode and reconcile authoritative and recursive evidence before continuing.
- If rollback would discard writes accepted on the new domain, preserve shared authoritative state or design state-compatible compensation before cutover.
- Never use an open redirect, shared wildcard cookie, permissive CORS, or relaxed callback validation as a temporary migration bridge.

## Worked example

A global account service must move from `old.example` to `new.example`. The old origin owns browser sessions, OAuth and SAML callbacks, passkeys, mobile links, API endpoints, indexed content, regional hosts, and millions of saved links. The team inventories every DNS and application dependency, maps routes and identity properties, uses safe reauthentication where cookies cannot transfer, parallel-enrolls federation and passkey support where required, rehearses regional cutover and rollback, and moves canary traffic only after behavior parity and account-binding tests pass.

## Done

- A domain migration register records domain and DNS inventory, owners, mappings, identity dependencies, clients, certificates, email, search, waves, exceptions, and decisions
- A resolution and behavior parity report proves DNS, TLS, routes, identity, recovery, APIs, mobile links, email, headers, redirects, indexing, and regional outcomes
- A cutover and rollback rehearsal verifies staged cutover, state-compatible recovery, independent regional checks, monitoring, communications, and old-domain retirement gates
