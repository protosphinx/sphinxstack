---
name: use-parameters-in-partmode
category: design
description: Drive related PartMode dimensions with named parameters, equations, functions, and explicit units. Use when someone asks to make a model adjustable, link wall thickness or clearances, mix units safely, create design rules, or diagnose an expression or parameter-cycle failure.
---

# use-parameters-in-partmode

Replace duplicated dimensions with a small, readable parameter system that
rebuilds predictably. PartMode evaluates length in millimetres and angles in
degrees while accepting supported explicit unit literals.

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

- Give each parameter one meaning, unit dimension, and owner in the design.
- Do not create cycles or use unsupported names, functions, or units.
- Treat a successful numeric evaluation and a successful geometry rebuild as
  separate checks.
- Keep safety-critical or manufacturing values traceable to an approved source.

## Procedure

1. List the independent design inputs and the dimensions derived from them.
   Choose clear names such as `width`, `wall`, `clearance`, and `hole_pitch`.
2. Open **Parameters** and create the independent values with explicit units.
   Supported length literals include `mm`, `cm`, `m`, `um`, `in`, `ft`, and
   `mil`; angle literals include `deg` and `rad`.
3. Define derived expressions with supported arithmetic, comparisons, and
   functions. Keep expressions short; for example, derive an inside width from
   `width - 2 * wall` rather than repeating that logic in several features.
4. Replace the corresponding sketch or feature dimensions with parameter names.
   Change one independent input and predict the expected downstream dimensions
   before rebuilding.
5. Wait for evaluation and geometry to settle. On an unknown name, unit mismatch,
   non-finite result, or cycle, repair the expression graph instead of inserting
   a guessed constant.
6. Inspect affected features and exact measurements. Test at least one second
   valid parameter set and one agreed boundary value.
7. Restore the intended final values and save the editable project.

## Done

- Independent inputs and derived dimensions have clear names and units
- No parameter cycle, unsupported expression, or rebuild diagnostic remains
- Changing one input updates every intended dependent feature and no unrelated one
- Exact measurements match the predicted values for two valid parameter sets
- The final saved project contains the agreed parameter values
