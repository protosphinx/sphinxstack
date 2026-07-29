---
name: check-audio-sync
category: media
description: Check audio-to-picture sync at multiple points and identify offset, drift, variable-rate, clock, or routing causes. Use when dialogue, music, effects, or remote recordings do not align reliably with video.
---

# check-audio-sync

Check the beginning, middle, and end before applying one offset.

## When to use

- Use after ingest, multicamera sync, transcode, remote recording, long takes, or export.
- Preserve original timestamps, rates, and files before resampling or changing interpretation.

## Procedure

1. Record source devices, timecode, frame rates, sample rates, variable-rate status, duration, and timeline settings.
2. Find a sharp visible and audible event near the start and measure offset.
3. Repeat at the middle and end to distinguish constant offset from progressive drift or discontinuity.
4. Compare camera scratch, recorder, remote local, platform, and reference tracks.
5. Correct constant offset at the clip level; correct drift only after identifying clock, sample-rate, frame-rate, or dropped-media cause.
6. Listen for phase, channel, pitch, edit, and time-stretch artifacts.
7. Export a test and verify lip sync on target playback systems.
8. Document corrections and retain the untouched source.

## Done

- A sync report records sources, rates, measured points, offsets, drift, cause, correction, and untouched originals
- Timeline and exported playback checks verify lip sync, phase, pitch, continuity, and end-of-program stability
