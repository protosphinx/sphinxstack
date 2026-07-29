---
name: prototype-an-interaction
category: design
description: Prototype an interaction at the minimum fidelity needed to test behavior, state, timing, content, accessibility, and implementation risk. Use when a design question cannot be answered reliably by static screens.
---

# prototype-an-interaction

Build only enough fidelity to answer the named question.

## When to use

- Use for navigation, direct manipulation, animation, gestures, focus, responsive behavior, or complex state transitions.
- Do not present simulated data or controls as production functionality.

## Procedure

1. Write the question, hypothesis, users, task, decision, success evidence, and known limitations.
2. Choose paper, linked screens, interactive design file, coded prototype, or instrumented build based on the behavior under test.
3. Include realistic content, critical states, user input, errors, permission, latency, and recovery.
4. Implement enough keyboard, focus, semantics, reduced motion, and zoom behavior to test the relevant accessibility question.
5. Separate functional behavior from staged shortcuts and label every simulation.
6. Create a test script that avoids leading participants and captures actions, interpretation, outcome, and breakdown.
7. Test with representative users or qualified reviewers and preserve observation evidence.
8. Record what the prototype supports, disproves, leaves unknown, and changes in the design or implementation.
9. Archive or delete prototype data and credentials after the test.

## Failure plan

- If prototype limitations cause the observed problem, improve fidelity before blaming the design.
- If a test could create real transactions or expose data, isolate it from production.

## Done

- A prototype file and test plan identify the decision, behavior, states, simulations, accessibility scope, and limitations
- Observation evidence verifies the tested outcome and records design decisions, unresolved risks, and next implementation checks
