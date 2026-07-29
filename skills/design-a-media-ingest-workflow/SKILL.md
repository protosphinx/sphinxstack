---
name: design-a-media-ingest-workflow
category: media
description: Design a media ingest workflow with custody, verified copy, metadata, rights, security, proxy, backup, and release controls. Use when repeated productions must move camera, audio, photo, or archive media into managed storage.
---

# design-a-media-ingest-workflow

Preserve originals and prove every transition.

## When to use

- Use for production teams, studios, newsrooms, archives, events, or distributed field crews.
- Do not erase or return source media before authorized verification gates pass.

## Procedure

1. Define sources, volumes, formats, card structure, roles, locations, sensitivity, rights, deadlines, and recovery objectives.
2. Assign stable project, shoot, device, card, reel, file, and custody identifiers.
3. Create intake, write-protection, malware, quarantine, and handling rules for untrusted media.
4. Copy full source structures with checksums to primary and independent backup storage.
5. Reconcile counts, bytes, hashes, clip continuity, spanned media, metadata, clocks, and representative playback.
6. Add technical, descriptive, rights, release, sensitivity, location, language, and quality metadata without overwriting source.
7. Generate proxies and transcodes from verified originals with deterministic mapping and managed color and audio.
8. Log anomalies, repairs, duplicates, restricted items, and missing media.
9. Release cards and downstream editing only after evidence, access, and backup gates pass.
10. Test lost card, corrupt file, malware, duplicate name, wrong clock, interrupted copy, remote upload, and restore scenarios.

## Failure plan

- If source and copy disagree, quarantine both, preserve logs, and retry to a new destination without deleting evidence.
- If rights or sensitivity are unknown, restrict access until ownership resolves.

## Done

- An ingest architecture records identities, custody, copy, checksums, metadata, proxy mapping, rights, access, backup, and release gates
- Production-shaped tests verify integrity, interrupted recovery, quarantine, duplicates, restricted media, card release, and restore
