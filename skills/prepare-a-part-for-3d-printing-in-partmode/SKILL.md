---
name: prepare-a-part-for-3d-printing-in-partmode
category: design
description: Verify a PartMode solid and export a traceable 3MF or STL artifact for an independent slicer. Use when someone wants to 3D print a model, choose between 3MF and STL, check scale and selected bodies, or avoid delivering an unverified mesh.
---

# prepare-a-part-for-3d-printing-in-partmode

Deliver a mesh artifact with known source, scale, scope, and checksum. Prefer
3MF when the downstream slicer supports it because PartMode writes explicit
millimetre units and named bodies; STL does not preserve names or units.

## Required connection

This skill is operating guidance, not a PartMode login or tool connection.
Before an agent continues, confirm that it can list PartMode MCP resources and
tools. If it cannot, stop and use `$connect-partmode-to-an-agent`: create or
sign in to an account at https://partmode.com/account with an account name and
passphrase, create the least-powerful suitable agent key, store the one-time
secret as `PARTMODE_AGENT_KEY`, and configure Codex with:

```sh
codex mcp add partmode --url https://partmode.com/mcp --bearer-token-env-var PARTMODE_AGENT_KEY
```

Restart the agent after adding the server. A browser-local project also requires
a signed-in PartMode tab and visible approval; server-headless work requires an
edit key created with the explicit headless grant. Never simulate CAD work from
these instructions or claim completion without exact settled evidence returned
by the connected PartMode tools.

## Boundaries

- Verify exact source geometry before tessellation. A successful mesh export
  does not prove wall thickness, support strategy, orientation, or printability.
- Confirm selected bodies and units with the person before export.
- Do not overwrite an existing file or silently choose a nearby format.
- Use an independent slicer for printer, material, support, and toolpath decisions.

## Procedure

1. Record the source project and configuration, intended bodies, required final
   dimensions, target format, slicer, printer process, and approved output path.
2. Use `$inspect-and-measure-in-partmode` to confirm valid exact solids, body
   count, envelope, openings, and required clearances. Resolve model errors first.
3. In **Bodies**, include only the intended export bodies. Check that hidden or
   construction content is not being mistaken for printable geometry.
4. Choose **Output** → **Export 3MF** when explicit units and named objects are
   useful, or **Export STL** when required by the downstream workflow. Record
   that STL scale must be interpreted as millimetres by agreement.
5. Confirm PartMode's export summary and save the artifact to the approved path.
   Record byte count and compute SHA-256 over the saved bytes.
6. Open the artifact in the independent slicer. Verify units, bounding dimensions,
   object count, watertightness diagnostics, and intended orientation before
   choosing material, layer, supports, or toolpath settings.
7. Deliver the mesh with a manifest naming source project, configuration,
   revision or settled state, selected bodies, units, format, bytes, checksum,
   slicer verification, and remaining print-process decisions.

## Done

- The source PartMode bodies are exact and pass the agreed dimensional checks
- The artifact contains only the intended bodies at the correct scale
- Saved bytes have a recorded count and independently computed SHA-256
- An independent slicer opens the file and confirms dimensions and object count
- The delivery record distinguishes CAD validity from print-process suitability
