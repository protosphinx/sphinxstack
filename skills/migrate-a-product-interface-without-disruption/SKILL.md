---
name: migrate-a-product-interface-without-disruption
category: design
description: Migrate a live product interface while preserving supported behavior, accessibility, user state, operations, and recovery through controlled coexistence. Use when a major redesign must replace an interface used by established customers.
---

# migrate-a-product-interface-without-disruption

Treat learned behavior and operational paths as compatibility contracts.

## When to use

- Use for major navigation, information architecture, interaction, visual-system, framework, or workflow migrations with active users.
- Use an ordinary release when no established behavior, saved state, support process, or high-risk journey changes.

## Preconditions

- Confirm product, design, research, accessibility, content, engineering, data, security, privacy, support, sales, training, operations, and customer authority.
- Preserve current routes, workflows, shortcuts, focus behavior, saved views, links, exports, integrations, help, analytics definitions, support cases, complaints, performance, and accessibility evidence.
- Define supported users, environments, obligations, release window, stop conditions, communication, migration help, rollback owner, and retirement authority.

## Procedure

1. Build a **behavior and user inventory** across roles, expertise, accessibility needs, devices, locales, critical tasks, frequency, shortcuts, routes, saved state, automation, documentation, and support.
2. Observe real use and distinguish intended features, relied-on affordances, safe workarounds, accidental behavior, and harmful legacy patterns.
3. Create a **compatibility and migration mapping** from every supported old route, control, term, state, shortcut, link, permission, export, and workflow outcome to the new behavior or explicit retirement.
4. Define outcome, data, authorization, timing, focus, error, accessibility, and audit invariants for critical journeys.
5. Keep underlying object identity and authoritative state stable unless a separately controlled data migration is required.
6. Build adapters for routes, links, commands, saved views, integrations, help references, and support tooling where direct parity is not possible.
7. Design orientation, contextual explanation, change summaries, migration preferences, and role-specific help without blocking normal work behind a tour.
8. Test the new interface with representative novice, expert, keyboard, screen-reader, zoom, mobile, locale, low-bandwidth, and high-volume users.
9. Verify critical tasks, destructive actions, privacy, permissions, performance, errors, interruptions, concurrent sessions, and cross-version state.
10. Run a **staged dual experience** through staff, opt-in, customer, role, region, and traffic waves. Pin each long-running session to a UI epoch and checkpoint unsaved state in a neutral, versioned envelope outside component implementation.
11. Compare task success, time, errors, accessibility, support, abandonment, operational outcome, and customer-reported harm, not only adoption.
12. Rehearse **rollback and adoption** for client/server skew, changed state, saved views, links, support, communication, and users who learned the new flow. Require the target interface to prove it can interpret escrowed state and revalidate current permissions before applying it.
13. Expand only after wave evidence passes; preserve an empowered stop switch and reconcile every exception.
14. Retire old behavior only after usage, contracts, customer confirmation, accessibility, support, documentation, integrations, and rollback exit gates pass.

## Failure plan

- If a critical user cohort cannot complete a supported outcome, remove that cohort from the new interface and preserve its state.
- If rollback would discard changes created in the new interface, keep the shared authoritative state and roll back only compatible presentation.
- If dual experience changes permissions, audit, or object meaning, stop coexistence until one consistent contract is restored.
- Do not force adoption merely to make old-interface usage reach zero.

## Worked example

A global project platform replaces navigation, record pages, bulk actions, keyboard shortcuts, filters, saved views, and a component system while enterprise users rely on bookmarks, screen readers, training guides, support scripts, and long-running sessions. The team inventories actual behavior, maps every supported outcome, preserves object state and permissions, adapts links and saved views, tests expert and accessibility journeys, assigns users stably in bounded waves, and rehearses presentation rollback without losing changes made in the new interface.

## Done

- An interface migration register records behavior and user inventory, owners, old-to-new mappings, invariants, dependencies, waves, exceptions, communication, and retirement gates
- A behavior and accessibility parity report proves critical outcomes, routes, shortcuts, saved state, permissions, errors, performance, assistive technology, cross-version state, and support readiness
- A rollout and rollback rehearsal verifies staged dual experience, stable assignment, state-compatible recovery, monitoring, customer support, adoption decisions, and legacy retirement
