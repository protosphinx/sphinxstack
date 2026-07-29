---
name: migrate-a-media-archive
category: media
description: Migrate a media archive while preserving bit integrity, metadata, relationships, rights, access, retention, and rollback. Use when moving production assets between storage, archive, or asset-management systems.
---

# migrate-a-media-archive

Prove that every expected object and its meaning survive the move before decommissioning the source.

## When to use

- Use when masters, sources, projects, proxies, captions, metadata, rights, or archives move to a new storage or management system.
- Use ordinary copying for bounded files whose inventory, relationships, rights, and long-term retrieval do not change.

## Preconditions

- Confirm archive, editorial, rights, security, privacy, records, IT, and business owners.
- Obtain source inventories, schemas, storage health, checksums, permissions, retention, legal holds, retrieval patterns, costs, and target capability.

## Procedure

1. Build an **asset and rights inventory** across files, versions, derivatives, projects, captions, transcripts, metadata, owners, licenses, holds, and restrictions.
2. Classify preservation master, production source, proxy, derivative, duplicate, orphan, and disposal candidate.
3. Define **metadata mapping** for identifiers, hierarchy, relationships, timecode, technical data, descriptive terms, rights, access, and provenance.
4. Generate or verify source checksums and export immutable migration manifests.
5. Test target format, object size, path, naming, API, search, playback, access, retention, and restore behavior.
6. Migrate in bounded cohorts with retry, idempotency, quarantine, and no source mutation.
7. Perform **fixity validation** for bytes, object counts, metadata, relationships, rights, captions, and representative playback.
8. Reconcile missing, extra, duplicate, corrupt, denied, and transformed objects after each wave.
9. Rehearse **rollback** of catalog pointers and workflows while preserving target evidence.
10. Decommission source only after retrieval, legal, retention, user acceptance, and rollback gates expire.

## Failure plan

- Pause for unexplained checksum, count, metadata, rights, or access differences.
- Quarantine corrupt sources and preserve both original evidence and recovery attempts.
- Keep the source read-only and available through the approved rollback window.
- Never transform preservation masters silently to fit the target.

## Worked example

A broadcaster moves two petabytes from tape catalog plus object storage into a media asset system. The inventory finds captions detached from programs, reused filenames, expired music rights, and preservation masters with no checksums. Stable archive IDs and a metadata crosswalk preserve relationships. Each cohort compares bytes, counts, rights, and playback. One codec cannot preview in the target, so the master remains unchanged and a proxy is generated. A rollback rehearsal restores old catalog pointers before any tape retirement is approved.

## Done

- An archive migration register contains asset and rights inventory, metadata mapping, manifests, waves, exceptions, and owners
- A fixity and rights report verifies checksums, counts, metadata, relationships, permissions, captions, retention, and playback
- A cutover and rollback rehearsal records workflow movement, source restoration, evidence preservation, retrieval, and decommission gates
