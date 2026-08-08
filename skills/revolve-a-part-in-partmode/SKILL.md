---
name: revolve-a-part-in-partmode
category: design
description: Build an axisymmetric PartMode solid by revolving a dimensioned profile around a stable axis. Use when someone asks to model a knob, pulley, spacer, bushing, turned part, fitting, or another rotational form from a section sketch.
---

# revolve-a-part-in-partmode

Create a rotational solid whose section, axis, angle, and body intent are
explicit and verifiable.

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

- Confirm the rotation axis independently from the profile boundary.
- Keep a solid-generating profile on one valid side of the axis unless the
  intended operation and live preview prove otherwise.
- Use degrees or radians explicitly. Do not assume a full revolution.
- Do not use Revolve for geometry whose defining section changes around the axis.

## Procedure

1. Reduce the design to a radial section. Record diameters or radii, axial
   lengths, shoulders, the axis, revolution angle, and expected overall size.
2. Create the section with `$sketch-and-dimension-in-partmode`. Add a stable
   construction centerline or select an authored axis datum for rotation.
3. Choose **Revolve**, select exactly the intended profile and axis, and enter
   the required angle. Confirm direction and any symmetric setting.
4. Choose whether the result is a new body, additive feature, or subtractive
   feature based on the agreed design and the current supported options.
5. Inspect the preview at an oblique view and along the axis. Look for a missing
   region, self-intersection, unexpected seam, or merge with the wrong body.
6. Apply the feature, wait for the exact rebuild, and resolve any diagnostic from
   the profile or axis rather than simplifying the evidence.
7. Inspect the Revolve in **History** and verify the body's axial length, maximum
   diameter, bore or inner diameter, and exact-solid health.

## Done

- The saved Revolve references the intended section and stable axis
- The angle, direction, and result-body intent match the request
- Exact measurements confirm the critical axial and radial dimensions
- Bodies contains the expected valid solid count
- The project is saved after the settled rebuild
