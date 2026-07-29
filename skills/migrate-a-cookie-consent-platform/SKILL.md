---
name: migrate-a-cookie-consent-platform
category: web
description: Migrate a cookie-consent platform through jurisdiction rules, tag inventory, consent-state mapping, staged validation, and auditable withdrawal. Use when replacing a consent manager without firing prohibited tags or losing valid user choices.
---

# migrate-a-cookie-consent-platform

Consent is a versioned permission state, not a banner display flag. This is not legal advice.

## When to use

- Use when changing consent vendors, tag managers, category models, policy versions, or regional rules.
- Obtain qualified privacy and legal approval for jurisdictional behavior and state carryover.

## Procedure

1. Inventory domains, apps, regions, policies, categories, cookies, storage, tags, vendors, signals, and downstream recipients.
2. Map old and new purposes, categories, lawful configuration, identifiers, versions, expiries, and proof fields.
3. Decide which prior choices can transfer; when meaning or evidence changes materially, request a fresh choice.
4. Establish one consent authority and block tags before consent where required, including direct, tag-manager, embedded, and server-side paths.
5. Implement minimal versioned state with timestamp, region, policy, category choices, and source.
6. Validate accept, reject, granular choice, no action, withdrawal, expiry, account transition, cross-domain, and global privacy signals.
7. Dual-observe decisions without allowing both platforms to control firing.
8. Roll out by region and domain, monitor tag and storage differences, and retain rollback without reviving invalid state.
9. Retire the old platform only after evidence export, deletion, policy, vendor, and withdrawal obligations are verified.

## Done

- A consent migration register records jurisdictions, tags, category mapping, transfer decisions, state versions, owners, and evidence
- Pre-choice, reject, granular, withdrawal, tag, storage, region, accessibility, carryover, and rollback tests verify the new authority
