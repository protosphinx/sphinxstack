---
name: design-a-file-upload-interface
category: design
description: Design a file upload interface with clear acceptance, progress, inspection, correction, and recovery states. Use when users submit one or more files through a web experience.
---

# design-a-file-upload-interface

Set expectations before selection and preserve a clear record for every file afterward.

## Procedure

1. Define allowed purpose, types, sizes, counts, privacy, retention, and processing time.
2. Support accessible browse, drag and drop, camera, or paste only where useful.
3. Show selected name, type, size, preview, ordering, removal, and replacement.
4. Validate early while keeping server inspection authoritative.
5. Display per-file queued, uploading, paused, processing, complete, warning, and failed states.
6. Support cancellation, bounded retry, duplicate handling, and resumability where justified.
7. Explain rejection and scanning without exposing detection details.
8. Test keyboard, screen reader, mobile capture, slow network, interruption, and mixed outcomes.
9. Reconcile UI completion with durable server and processing state.

## Guardrails

- Never imply a file is accepted before server validation and required inspection complete.
- Do not expose local paths or other users' filenames.
- Preserve a non-drag alternative.

## Done

- An upload interaction specification covers every file and processing state
- Accessibility, interruption, rejection, and mixed-result cases are tested
- Visible completion reconciles with server records
