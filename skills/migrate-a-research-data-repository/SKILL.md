---
name: migrate-a-research-data-repository
category: school
description: Migrate a research data repository with governed scope, rights, metadata, identifiers, fixity, access validation, cutover, rollback, and retained evidence. Use when moving datasets and records between archival or research platforms.
---

# migrate-a-research-data-repository

Preserve bytes, provenance, rights, identifiers, and community obligations together.

## When to use

- Use when replacing, consolidating, or relocating a repository that stores research data, metadata, code, documentation, persistent identifiers, access decisions, or preservation records.
- Use ordinary file transfer only when no repository behavior, identifier, access, governance, retention, or preservation obligation changes.

## Preconditions

- Confirm repository owners, data stewards, records and privacy officers, Indigenous or community governance, security, researchers, funders, depositors, and cutover authority.
- Freeze scope for objects, versions, metadata, identifiers, access states, licenses, consent, agreements, embargoes, retention, workflows, integrations, and source retirement.
- Preserve source manifests, database and object-store exports, logs, configuration, encryption dependencies, documentation, and sample retrieval evidence.

## Procedure

1. Create a **data and rights inventory** for every dataset, file, version, derivative, code package, documentation object, owner, license, consent limit, community authority, sensitivity, embargo, retention rule, and disposition.
2. Generate or verify object-level checksums and record missing, corrupt, encrypted, orphaned, duplicated, or inaccessible items without silently excluding them.
3. Design **metadata and identifier mapping** for descriptive, administrative, technical, provenance, preservation, access, rights, citation, funding, and relationship fields.
4. Preserve DOI, accession, handle, version, citation, landing-page, tombstone, redirect, and source identifier behavior.
5. Model authentication, authorization, data-use review, restricted enclave, download, API, search, audit, takedown, withdrawal, and deletion workflows.
6. Configure the target for storage durability, backup, encryption, keys, residency, access, preservation actions, logs, indexing, and disaster recovery.
7. Build read-only, restartable migration waves that preserve immutable source IDs, mapping versions, checksums, counts, byte totals, rejections, and custody.
8. Perform **fixity and access validation** across every object plus representative deposit, discovery, citation, request, approval, download, API, restricted-use, embargo, restore, and deletion journeys.
9. Reconcile objects, bytes, versions, relationships, identifiers, metadata, rights, access states, audit records, and expected preservation events.
10. Rehearse cutover, final delta, redirect, identifier resolution, support, and **rollback** to a searchable source state without losing new deposits or access decisions.
11. Authorize cutover only when governance owners accept exceptions, community and consent obligations, security, performance, support, recovery, and user evidence.
12. Keep the source or a verified archive accessible until legal, preservation, governance, and rollback conditions permit retirement.

## Failure plan

- If rights, consent, Indigenous governance, or ownership is ambiguous, quarantine access and obtain authority rather than defaulting to open or closed.
- If an object lacks a trustworthy checksum, generate one from the preserved source before migration and record the limitation.
- If a persistent identifier cannot resolve correctly, pause the affected collection and preserve the prior route.
- If source shutdown arrives before evidence gates pass, negotiate extension or create an independently verified controlled archive.
- Never flatten versions, reuse identifiers, expose restricted metadata, transform preservation masters silently, or delete the only source.

## Worked example

A multi-institution repository holds genomic data, Indigenous-governed collections, licensed surveys, embargoed theses, software, and DOI landing pages. Source checksums are incomplete and shutdown is scheduled. The team inventories rights and community authority, generates preserved-source checksums, maps versions and identifiers, and quarantines records whose consent does not authorize the target access model. Migration waves reconcile objects, relationships, rights, DOIs, and audit trails. A rehearsal restores source discovery and safely replays new deposits before cutover approval.

## Done

- A repository migration register records data and rights inventory, scope, source custody, metadata and identifier mapping, waves, exceptions, owners, and approvals
- An integrity and governance report proves fixity and access validation, object and relationship reconciliation, rights, consent, community authority, identifiers, security, retrieval, and restore
- A cutover and rollback rehearsal verifies delta capture, identifier resolution, workflow recovery, new deposits, access decisions, communications, and retirement gates
