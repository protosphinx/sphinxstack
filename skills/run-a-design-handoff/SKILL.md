---
name: run-a-design-handoff
category: design
description: Package an approved interface design into implementable states, behavior, assets, accessibility requirements, and acceptance checks, then resolve questions with engineering. Use when designs are ready to build, developers lack needed details, or a design-to-code handoff keeps producing rework.
---

# run-a-design-handoff

Make the design's behavior and constraints inspectable. A handoff is complete when the implementer can
build the intended experience and both sides can verify it without guessing.

## Inputs

- Identify the approved source file, product owner, designer, implementer, target platform, and release scope.
- Read the existing design system, component library, technical constraints, and accessibility requirements.
- Mark what is final, exploratory, inherited, or explicitly out of scope.

## Procedure

1. Walk the critical user flow with design and engineering. Confirm the goal, entry points, completion,
   cancellation, and recovery paths.
2. Inventory every visible and interactive state: default, hover, focus, pressed, selected, loading,
   empty, partial, success, error, offline, unauthorized, and permission-denied where relevant.
3. Map each design element to an existing component or name the reason a new component is needed.
4. Specify layout behavior with containers, spacing rules, content priority, breakpoints, overflow,
   zoom, localization, and long or missing content.
5. Document interaction behavior: input, validation timing, keyboard order, focus movement, announcements,
   animation, persistence, undo, and destructive confirmation.
6. Provide approved copy and real-shaped content. Avoid placeholder text that hides wrapping and empty-state issues.
7. Export only required assets in the correct formats and resolutions. Include accessible names and usage rights.
8. Write design acceptance checks in observable terms and connect them to screens or states.
9. Hold a short handoff review. Record questions, owner, decision, due condition, and source-of-truth update.
10. Review the first implemented slice in the real environment. Report behavioral and system mismatches,
   not pixel differences caused by an intentionally different platform.
11. Close the handoff by updating the design source and component documentation with accepted implementation decisions.

## Boundaries

Do not hand off inaccessible behavior, unlicensed assets, private user data, or designs that imply
unapproved product policy. Do not ask engineering to infer missing error, loading, or responsive states.
Preserve platform conventions unless a documented user need justifies changing them.

## Done

- The verified handoff package covers the critical flow, responsive rules, content, assets, and all material states
- Every element is checked against an existing component or an approved new component with an owner
- Acceptance checks include keyboard, focus, error, loading, empty, and long-content behavior
- A real implementation review resolves mismatches and updates both code-facing and design sources of truth

Then use accessibility-pass on the implementation and design-critique for unresolved experience questions.
