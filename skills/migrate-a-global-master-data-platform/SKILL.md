---
name: migrate-a-global-master-data-platform
category: data
description: Migrate a global master-data platform through entity identity, survivorship, hierarchy, reference, governance, regional policy, downstream parity, cutover, rollback, and reconciliation. Use when authoritative customer, product, supplier, location, or account records must move without corrupting business identity.
---
# migrate-a-global-master-data-platform

Preserve who and what each record represents before changing where authority lives.

## When to use
- Use for master-data management, entity resolution, reference-data consolidation, acquisition, or regional platform replacement.
- Activate data, business, privacy, security, legal, finance, operations, regional, integration, and customer authority.
## Preconditions
- Inventory domains, entities, identifiers, sources, stewards, matching, survivorship, hierarchies, references, consumers, regions, rights, and critical decisions.
- Define canonical entity and relationship identity, source authority, cutover ownership, rollback, and stop thresholds.
## Procedure
Complete **entity and authority inventory**, **identity and semantic parity**, **staged mastership transfer**, and **rollback and retirement**.
1. Build a **global master-data migration register** for entity, identifier, source, attribute, authority, provenance, confidence, relationship, hierarchy, region, policy, steward, consumer, and state.
2. Reconstruct matching, merge, split, survivorship, golden record, override, exception, and manual stewardship history.
3. Define canonical identity without weakly merging shared names, reused codes, household or corporate relationships, aliases, acquisitions, or regional variants.
4. Version attribute meaning, code sets, units, reference values, hierarchy time, effective dates, and null semantics.
5. Store authoritative attributes, relationships, and hierarchies bitemporally with valid-from, valid-to, recorded-at, superseded-at, provenance, steward decision, policy, and authority epoch.
6. Require consequential downstream decisions to record entity ID, master-data version or epoch, relevant attribute and relationship hashes, and policy version; retroactive correction emits an impact event and opens reconciliation rather than rewriting context silently.
7. Map privacy, consent, residency, retention, contracts, sanctions, tax, finance, safety, and permitted-use obligations.
6. Reproduce matching and survivorship in shadow mode and classify every new merge, split, winner, loser, and unresolved entity.
7. Reconcile source and target attributes, relationships, hierarchies, references, history, stewardship, access, and downstream business outcomes.
8. Transfer mastership by domain, entity cohort, region, and consumer using authority epochs and accepted watermarks.
9. Quarantine ambiguous identity and preserve source-specific views; never resolve conflict by last-write-wins.
10. Rehearse rollback after target stewardship, new entities, hierarchy changes, downstream acknowledgements, and external actions.
11. Monitor duplicate, false merge, false split, stale reference, missing relationship, policy breach, and business impact.
12. Retire legacy only after history, audit, reference, integration, stewardship, retention, and restore duties close.
## Failure plan
- If identity or survivorship is ambiguous, keep records separate and route to governed stewardship.
- If downstream systems cannot reject stale mastership epochs, keep that domain on the old authority.
- If rollback would erase valid target changes, create a reconciled new generation.
## Worked example
A multinational manufacturer moves customer, supplier, product, location, legal-entity, tax, and account masters from regional systems while identifiers collide, corporate hierarchies change over time, sanctions and residency differ, local stewards override values, and finance, logistics, ecommerce, service, and analytics depend on conflicting golden records. The migration preserves source identity, shadow-compares matching, governs survivorship, transfers mastership by cohort, reconciles decisions, and rehearses rollback after new target stewardship.
## Done
- A global master-data migration register verifies entities, identifiers, attributes, sources, authority, provenance, relationships, hierarchies, regions, policies, stewards, consumers, and state
- An identity, match, survivorship, semantic, policy, hierarchy, reference, and downstream parity report proves bitemporal history, decision-time provenance, retroactive impact reconciliation, false-merge and false-split controls, business outcomes, and unresolved exceptions
- A cutover, rollback, and retirement report demonstrates authority epochs, cohort gates, target-change preservation, consumer acknowledgements, stewardship continuity, monitoring, restore, and independent acceptance
