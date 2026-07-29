---
name: inspect-a-process-environment
category: code
description: Inspect a process environment without exposing secrets, changing state, or confusing configured and inherited values. Use when runtime behavior may depend on environment, working directory, locale, paths, or limits.
---
# inspect-a-process-environment
## When to use
- Use on an authorized process or safe reproduction.
- Never print complete secrets, credentials, tokens, or unrelated personal values.
## Preconditions
- Record process identity, owner, command, version, start time, host, container, and expected configuration sources.
## Procedure
1. Define the specific variables and runtime properties needed.
2. Inspect through the least-privileged authorized mechanism.
3. Redact values while preserving presence, source, length class, or safe hash where useful.
4. Compare inherited, file, orchestrator, shell, and application-resolved configuration.
5. Check working directory, user, groups, locale, time zone, path, limits, mounts, and namespaces.
6. Record discrepancies without modifying the live process.
## Failure plan
- If access would expose broader secrets, reproduce safely or ask an authorized operator for bounded evidence.
## Worked example
A service inherits a staging endpoint from its supervisor despite a correct application file.
## Done
- A process-environment report records bounded configuration sources, runtime properties, discrepancies, and redactions
- Authorization, secret, inheritance, container, locale, path, limit, and no-mutation checks verify inspection
