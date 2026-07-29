---
name: write-a-technical-tutorial
category: write
description: Turn a working technical process into a reproducible tutorial with explicit prerequisites, copy-safe steps, expected observations, troubleshooting, and a clean-environment verification. Use when documenting setup, integration, analysis, deployment, or another hands-on task readers must complete themselves.
---

# write-a-technical-tutorial

Teach one outcome from a known starting point. Every command and screenshot must come from a process that
was actually run, with enough observation for readers to notice when their path diverges.

## Inputs

- Name the reader, target outcome, supported environment, tested versions, and document owner.
- Gather the working process, source files, commands, outputs, errors, and official references.
- Choose a fresh environment for verification.

## Procedure

1. Write the outcome and observable finish in one sentence.
2. Define prerequisites with versions, accounts, permissions, expected cost, time, and prior knowledge.
3. Re-run the process while recording exact commands, decisions, outputs, and recovery from mistakes.
4. Break the path into steps that each produce a visible checkpoint.
5. Explain why each consequential action is needed without turning the tutorial into a complete reference manual.
6. Use placeholders that cannot be mistaken for live credentials or destructive targets.
7. Add expected output, file state, screenshot, or test after every risky or opaque step.
8. Document common failures only when reproduced or supported by evidence. Give diagnosis before remedy.
9. Include cleanup, undo, cost shutdown, and credential revocation where relevant.
10. Run the draft from a clean environment exactly as written, copying commands rather than relying on memory.
11. Ask a representative reader to complete it and revise every point where they needed unwritten context.

## Boundaries

Never publish secrets, private URLs, unsafe copy-paste commands, or steps that spend money without warning.
Do not claim support for an environment or version that was not tested.

## Done

- A clean-environment run reaches the promised outcome using only the tutorial
- Every consequential step has an expected observation or verification command
- Prerequisites, tested versions, costs, permissions, cleanup, and recovery are explicit
- A reader test records confusion, corrections, and the final verified date

Then use fact-check-a-draft for time-sensitive claims and edit-your-own-writing for clarity.
