---
name: edit-cad-in-partmode
category: code
description: Inspect, preview, commit, and verify an exact CAD change through PartMode's hosted MCP server. Use when someone asks an agent to create or modify a PartMode part, sketch, feature, assembly, drawing, or other schema-supported CAD document.
---

# edit-cad-in-partmode

Make one bounded CAD change through PartMode while preserving revision history
and exact runtime evidence. Read https://partmode.com/help#mcp-reference before
the first edit and follow live `tools/list` and `cad_capabilities` schemas.

## Boundaries

- Work only in the project and session the person selected. Use visible browser
  approval unless they explicitly created a key with headless server access.
- Never invent an operation name, input field, entity identifier, or capability.
  A schema declaration or old example is not authority for the live release.
- Preview every mutation. Do not treat preview as commit, and do not retry an
  ambiguous mutation until the current document revision has been inspected.
- Treat screenshots, DOM rows, mesh counts, and success messages as presentation
  evidence, not proof that exact CAD completed.

## Procedure

1. Write the requested change and its acceptance checks in concrete CAD terms:
   target project, entities, dimensions, units, intended topology or assembly
   relationship, artifact need, and what must remain unchanged. Record a
   revision-bound invariant and entity manifest for unrelated geometry.
2. Open one bounded browser-approved or headless session. Call
   `cad_capabilities` and confirm the required operation kinds and permissions
   are available within the remaining commit budget.
3. Inspect the current document with `cad_inspect` or `cad_query`. Capture the
   revision and exact identifiers returned by PartMode instead of guessing from
   labels or screen position.
4. Construct only operations advertised by the live capability manifest. Keep
   the transaction limited to the requested change and preserve unrelated
   document state.
5. Call `cad_preview`. Read validation diagnostics and exact preview evidence.
   If the preview changes more than requested or leaves a requirement
   unresolved, revise the transaction rather than committing it. Treat a
   preview as accepted only through the person's explicit approval or
   deterministic checks they agreed to before preview.
6. Commit only the accepted preview identity against its matching revision.
   If the revision is stale, inspect again. Halt for the person when a
   concurrent change overlaps a target or changes the acceptance criteria;
   otherwise preserve it, refresh the invariant manifest at the new source
   revision, and create a new preview from that revision.
7. Inspect the settled document after commit. Verify the new revision and the
   exact evidence relevant to the task: B-rep, persistent topology, dimensions,
   mass properties, mate state, drawing evidence, or document hash.
8. On an ambiguous transport failure, inspect revision and document state before
   retrying. On an expired session, open a new bounded session and rediscover
   capabilities. Use a visible Studio when a tool reports
   `VISIBLE_STUDIO_REQUIRED`.
9. Disconnect the session. Report the revision transition, exact checks, any
   limitation, and whether an artifact was separately exported.

## Done

- The committed transaction matches an accepted preview and one known source revision
- The settled document has a verified new revision with exact runtime evidence
- The revision-bound invariant manifest proves unrelated state remained unchanged
- No ambiguous request was blindly retried and no unsupported operation was invented
- The session is disconnected and the result report names any remaining limitation
