---
name: get-started-with-partmode
category: design
description: Guide a first-time CAD user through opening PartMode, choosing a blank project or editable template, reading the workspace, and saving an editable project. Use when someone says they have never used CAD, asks for a PartMode tour, or wants to create and preserve their first project.
---

# get-started-with-partmode

Help a beginner leave PartMode with an editable saved project and a clear mental
model of the workspace. Use https://partmode.com/help#getting-started as the
product reference and follow the labels visible in the current release.

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

- Keep this local-first. An account is not required to model, save, or export.
- Do not begin with advanced assemblies, drawings, or agent access unless the
  person asks for them.
- Treat browser recovery as a convenience. Download an important project file.
- Do not claim that a shaded view proves an exact valid solid.

## Procedure

1. Ask what simple object the person wants to make and choose millimetres unless
   another unit is required. Reduce the first goal to one closed profile and one
   solid feature.
2. On the first screen, choose **Blank sketch** for a new part or **Browse all
   templates** for an editable example. Explain that templates are normal CAD
   documents, not pictures or meshes.
3. Name the project and identify the main evidence surfaces: **History** is the
   ordered construction recipe, **Bodies** lists exact solids, **Parameters**
   stores reusable dimensions, **CFG** selects configurations, and **Inspector**
   explains the selected model entity.
4. Show how to orbit, pan, zoom, fit the view, select an entity, and clear a
   selection without changing the model. Keep the construction grid visible
   until the person understands the base plane.
5. Start the first profile with **Sketch**, but use
   `$sketch-and-dimension-in-partmode` before committing geometry the person
   cannot explain.
6. Wait for the document and kernel rebuild to settle. Read any diagnostic
   instead of continuing through a failed feature.
7. Choose **Save project file** and download the editable PartMode project.
   Confirm the downloaded file exists before clearing browser data or closing
   the only copy.

## Done

- The person has identified History, Bodies, Parameters, CFG, and Inspector
- The checked project has a meaningful name, chosen units, and a bounded first-part goal
- History confirms that no rebuild diagnostic is being ignored
- A non-empty editable project file is downloaded and verified at an approved location
- The next modeling step is explicit rather than an unexplained sequence of clicks
