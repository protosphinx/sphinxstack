---
name: design-a-cli
category: code
description: Design a command-line interface with coherent commands, arguments, output, errors, configuration, and compatibility for both people and scripts. Use when creating a new CLI, reshaping an existing command, or defining a stable shell-facing contract before implementation.
---

# design-a-cli

Treat the command line as a public interface. Optimize the common human path while keeping output,
exit behavior, quoting, and versioning predictable enough for automation.

## Inputs

- Name the users, tasks, operating systems, shell environments, and automation consumers.
- Gather existing commands, conventions, configuration sources, and compatibility commitments.
- Separate required first-release tasks from possible future commands.

## Procedure

1. Write the three to five highest-value tasks as complete invocations with the intended result.
2. Choose a noun-verb or verb-noun command grammar and apply it consistently. Prefer discoverable words over abbreviations.
3. Define positional arguments, named options, defaults, repeatable flags, mutually exclusive choices, and input precedence.
4. Specify configuration precedence across flags, environment, project files, user files, and built-in defaults.
5. Design stdout for requested results and stderr for diagnostics. Define quiet, verbose, structured, and color behavior.
6. Assign stable exit codes to success, usage error, missing dependency, rejected input, remote failure, and partial result.
7. Write help for the root, each command, realistic examples, destructive effects, and recovery. Make help useful without network access.
8. Define interactive behavior and a non-interactive equivalent. Never let automation hang on an unexpected prompt.
9. Walk quoting, spaces, Unicode, paths, stdin, pipes, pagination, cancellation, and terminal-width cases.
10. Prototype the command surface and test it with a first-time user plus one shell script.
11. Publish a versioned CLI contract and the compatibility rules for renames, deprecated flags, and output changes.

## Boundaries

Do not put secrets in command history, process arguments, or diagnostic output. Require explicit confirmation
for destructive actions and support a non-interactive safety flag only when the caller acknowledges the target.
Do not silently change machine-readable output.

## Done

- A CLI contract lists commands, arguments, options, precedence, output channels, exit codes, and examples
- Root and command help are tested by a first-time user without additional explanation
- A script test verifies non-interactive behavior, structured output, quoting, and stable exit status
- Compatibility and deprecation rules identify what may change and how consumers will be warned

Then use write-a-technical-tutorial for a hands-on guide after the interface works.
