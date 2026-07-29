---
name: build-a-safe-file-upload
category: code
description: Build a safe file upload with authorization, size and type controls, quarantine, scanning, isolated storage, safe retrieval, retention, and abuse handling. Use when users or systems submit files.
---

# build-a-safe-file-upload

Treat every upload as untrusted bytes, regardless of its name or claimed type.

## When to use

- Use for documents, images, media, archives, imports, or attachments.
- Obtain specialist security and privacy review for high-risk or regulated files.

## Preconditions

- Define uploaders, consumers, formats, limits, threats, privacy, retention, availability, and moderation.

## Procedure

1. Authorize upload intent and issue a bounded single-use upload identity.
2. Stream with byte, time, count, and decompression limits; never trust extension or client MIME.
3. Store under generated identity outside executable or public paths.
4. Quarantine until signature, structure, malware, archive, metadata, and policy checks finish.
5. Transform risky media in isolation and strip unnecessary metadata.
6. Serve through authorized download or safe rendering with correct headers and separate origin where needed.
7. Record provenance, hashes, owner, scan version, decision, retention, access, and deletion.
8. Test polyglots, traversal, bombs, malformed files, races, duplicates, scanners, and abuse.

## Failure plan

- On scanner outage, keep files quarantined rather than failing open.

## Worked example

A profile image is streamed to quarantine, decoded and re-encoded in isolation, stripped of metadata, and served from a non-executable origin.

## Done

- An upload implementation records authorization, limits, quarantine, checks, storage, retrieval, retention, deletion, and audit
- Polyglot, path, archive-bomb, malformed, race, scanner-outage, access, and cleanup tests verify safety
