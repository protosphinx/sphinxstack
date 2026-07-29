---
name: design-a-production-system
category: code
description: Design the architecture for a service that will have real users. Make quality attributes, boundaries, failure modes, and trade-offs explicit before implementation. Use when a project is moving beyond a prototype or several components must work as one reliable system.
---

# design-a-production-system

Produce a design that another engineer can challenge, implement, and operate. Do not
start with vendor logos. Start with the work the system must do, the qualities it must
preserve, and the failures it must survive.

## When to use

Use this skill when a prototype is becoming a supported product, a new service will
carry real traffic, or a change crosses several components. It is especially useful
before committing to storage, queues, service boundaries, or third-party dependencies.

Do not use it to decorate a small, reversible feature with unnecessary architecture.
If one process and one database meet the stated needs, record that as the design.

## Preconditions

- Name the users, the critical user journey, and the person who can approve the design.
- Gather known traffic, data, privacy, latency, availability, cost, and recovery needs.
- Separate observed facts from estimates. Put a date and owner beside every estimate.
- Identify constraints that cannot be changed in this project, including existing systems.

## Procedure

1. Write the critical journey as a short sequence from user action to visible result.
2. Rank three to five quality attributes such as correctness, availability, latency,
   recoverability, security, cost, and operability. State a measurable target where possible.
3. Draw the smallest system diagram that shows clients, processes, data stores, external
   services, trust boundaries, and the direction of important data flows.
4. Assign one clear responsibility to each component. Remove any component whose
   responsibility can be handled safely by an existing one.
5. Record capacity assumptions for normal load, expected peak, data growth, and the
   largest plausible burst. Show the arithmetic and label estimates.
6. Walk through failure modes: dependency slow, dependency unavailable, partial write,
   duplicate message, stale cache, full disk, expired credential, and bad deployment.
7. For each important failure, record detection, user effect, containment, recovery,
   and the maximum acceptable loss or delay.
8. Write a decision record for every choice that would be expensive to reverse. Include
   context, options considered, choice, trade-offs, and the condition that would reopen it.
9. Review the diagram against the critical journey and the ranked qualities. Change the
   design when the walk-through exposes an unsupported requirement.
10. Plan an implementation sequence that produces a thin end-to-end path first, then
    adds capacity and resilience only where the evidence requires them.

## Failure plan

Treat the design review as a failure rehearsal. Select one dependency failure, one data
failure, and one deployment failure. Walk each from detection to recovery using the
diagram. If the team cannot name the owner, signal, containment step, and recovery path,
the design is not ready. Keep a simpler fallback design and the point at which it becomes
the safer choice.

## Done

- A system diagram shows components, data flows, dependencies, and trust boundaries
- A ranked quality-attribute table includes measurable targets and capacity assumptions
- A trade-off record explains the important choices, alternatives, and reopening conditions
- A failure walkthrough proves detection, containment, and recovery for three credible failures
- An implementation plan produces a usable end-to-end slice before optional complexity

Then use design-observability to attach signals to the important journeys and failure modes.
