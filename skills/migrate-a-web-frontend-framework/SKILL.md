---
name: migrate-a-web-frontend-framework
category: web
description: Migrate a production frontend framework while preserving behavior, accessibility, performance, URLs, state, and rollback. Use when a live web application must change rendering or component architecture without a rewrite outage.
---

# migrate-a-web-frontend-framework

Move bounded product slices through a compatibility architecture and prove outcomes before retiring the old runtime.

## When to use

- Use when changing the framework, rendering mode, router, state system, or component runtime of a live frontend.
- Use a dependency upgrade when routing, rendering, state, and component contracts remain materially compatible.

## Preconditions

- Confirm product, frontend, backend, design, accessibility, SEO, analytics, security, and operations owners.
- Gather routes, features, browsers, components, state, APIs, performance, tests, URLs, tracking, incidents, and deployment constraints.

## Procedure

1. Build a **route and feature inventory** across entry points, states, devices, permissions, data, SEO, analytics, and owners.
2. Define outcome parity for behavior, accessibility, content, URLs, metadata, performance, security, and observability.
3. Choose a **compatibility architecture** for shared routing, shell, identity, navigation, design tokens, APIs, state, and errors.
4. Establish contract tests and visual, accessibility, browser, performance, and analytics baselines.
5. Select vertical **migration waves** that can ship, observe, and roll back independently.
6. Prevent duplicate state, handlers, telemetry, styles, and dependency payloads across runtimes.
7. Migrate shared foundations only after representative slices prove the boundary.
8. Compare old and new paths with synthetic, canary, and real outcome evidence.
9. Rehearse **rollback** of routing and assets without reversing incompatible server data.
10. Remove old code only after traffic, references, support, and rollback gates expire.

## Failure plan

- Pause a wave for behavior, accessibility, URL, security, analytics, or performance regression.
- Keep old routing available for compatible cohorts until the new slice passes observation.
- If shared state diverges, stop dual mutation and restore one authoritative owner.
- Roll back frontend delivery without claiming server-side effects were undone.

## Worked example

A commerce site moves from a client-only framework to server rendering. The inventory exposes account, checkout, search, localization, tracking, and saved-cart state. A shared edge router sends one product family to the new runtime while contracts keep URLs and API state stable. Canary comparison finds duplicate purchase analytics and a focus reset after navigation, so the wave pauses. Both defects are repaired, performance and accessibility baselines pass, and a rehearsal restores the old asset route without reverting completed orders.

## Done

- A migration architecture record contains route and feature inventory, compatibility architecture, contracts, waves, ownership, and rollback
- A behavior parity report verifies accessibility, URLs, state, browser, performance, security, SEO, analytics, and user outcomes
- A cutover and rollback rehearsal records traffic movement, asset restoration, evidence preservation, and server-state boundaries
