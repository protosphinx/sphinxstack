---
name: design-a-file-management-interface
category: design
description: Design a file-management interface with clear ownership, location, permissions, versions, transfer states, search, and recoverable destructive actions. Use when users organize, upload, move, share, download, archive, or delete files.
---

# design-a-file-management-interface

Make object identity and destination explicit before an action.

## When to use

- Use for document libraries, media managers, cloud drives, project files, or attachment systems.
- Do not expose storage paths, private previews, or actions beyond current authorization.

## Procedure

1. Model file, folder, collection, version, owner, tenant, location, permission, share, retention, and lifecycle states.
2. Define list, grid, search, filter, sort, selection, preview, details, and navigation behavior for realistic scale.
3. Show stable identity, name, type, size, modified time, owner, access, sync, and processing state where useful.
4. Design upload, duplicate, conflict, move, copy, rename, share, download, archive, restore, and delete journeys.
5. Preview scope and destination before bulk or destructive actions; make partial success and remaining work explicit.
6. Protect sharing and download with current authorization, expiry, recipient, sensitivity, and audit context.
7. Preserve focus, selection, scroll, and user input through updates and recoverable errors.
8. Test large sets, identical names, long names, unsupported types, failed scans, offline, concurrent changes, permissions, keyboard, screen readers, and zoom.
9. Provide trash, version restore, conflict resolution, or authorized support for recoverable mistakes.

## Failure plan

- If ownership or destination is ambiguous, stop move, share, or delete.
- If a bulk action partly succeeds, reconcile every object and never present all-or-nothing success.

## Done

- A file-management model records objects, identity, location, permission, lifecycle, operations, states, and recovery
- Prototype tests verify search, selection, transfer, sharing, concurrency, partial failure, accessibility, and authorization boundaries
