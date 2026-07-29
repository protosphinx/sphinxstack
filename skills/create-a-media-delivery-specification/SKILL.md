---
name: create-a-media-delivery-specification
category: write
description: Create a media delivery specification for masters, derivatives, audio, captions, metadata, naming, transfer, and quality control. Use when a vendor or team must deliver reproducible final media packages.
---

# create-a-media-delivery-specification

Define the receiving system and acceptance evidence, not only a codec name.

## Procedure

1. Identify recipient, platforms, masters, derivatives, archive, regions, and due dates.
2. Specify container, codec, resolution, frame rate, scan, aspect, color, bit depth, and bitrate.
3. Define audio sample rate, bit depth, channel layout, stems, loudness, peak, and sync.
4. List caption, subtitle, transcript, audio-description, language, and timebase formats.
5. Define slate, bars, clocks, handles, clean versions, textless elements, and thumbnails.
6. Provide file naming, folder structure, version, identifiers, metadata, and rights documents.
7. Set transfer, encryption, checksum, retry, acknowledgment, and retention requirements.
8. Define automated and human QC, rejection reasons, correction, and acceptance sign-off.
9. Test one sample package through the recipient's real ingest.

## Guardrails

- Never assume a platform preset satisfies archive or accessibility needs.
- Do not transmit sensitive unreleased media through an unapproved channel.
- Keep technical acceptance distinct from editorial approval.

## Done

- A versioned media delivery specification covers every required artifact
- A sample package, checksum, ingest, playback, captions, and metadata are verified
- Recipient acceptance, rejection, and correction paths are recorded
