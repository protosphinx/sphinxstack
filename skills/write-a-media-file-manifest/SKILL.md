---
name: write-a-media-file-manifest
category: media
description: Write a media file manifest with stable identity, filename, checksum, format, duration, tracks, rights, language, accessibility, source, and delivery state. Use when media assets must be transferred or archived reliably.
---
# write-a-media-file-manifest
## When to use
- Use for video, audio, images, captions, transcripts, projects, masters, or derivatives.
- Do not include secret locations or unnecessary personal metadata.
## Procedure
1. Define package, version, owner, destination, scope, and naming rules.
2. Record each file’s stable ID, relative path, bytes, checksum algorithm, and hash.
3. Record container, codecs, dimensions, frame or sample rate, duration, color, and tracks.
4. Record language, captions, transcript, audio description, rights, expiry, consent, and restrictions.
5. Link source, master, derivative, poster, subtitle, and project relationships.
6. Validate files, totals, duplicates, missing companions, and delivery state.
## Failure plan
- Quarantine mismatched, unlicensed, or unidentified files rather than relabeling them.
## Worked example
A documentary package links its master to captions, transcript, poster, and restricted source audio with checksums.
## Done
- A media manifest document records package, file identities, paths, checksums, formats, tracks, rights, accessibility, relationships, and status
- File, checksum, duration, codec, language, companion, right, duplicate, and package-total checks verify delivery
