---
name: create-a-design-system
category: design
description: Create a reusable interface system from real product patterns, including tokens, components, states, accessibility, documentation, and contribution rules. Use when screens drift, teams rebuild the same controls, or a product needs consistent design and implementation across several surfaces.
---

# create-a-design-system

Build the system from recurring product needs, not an abstract component wishlist. Give each pattern one
owned contract across design, code, content, accessibility, and testing.

## Inputs

- Gather current screens, components, styles, accessibility findings, brand rules, and supported platforms.
- Name design, engineering, content, and product owners plus intended adopters.
- Define the first product journeys the system must support.

## Procedure

1. Inventory repeated visual and behavioral patterns across shipped interfaces. Record duplicates, variants, and known failures.
2. Group patterns into foundations, primitives, components, compositions, and product-specific exceptions.
3. Define tokens for color, type, spacing, size, radius, motion, elevation, and breakpoints using semantic names.
4. Choose the smallest component set needed by the priority journeys.
5. Specify each component's anatomy, content rules, variants, states, responsive behavior, keyboard behavior, and accessible name.
6. Implement design and code sources together. Map every variant and token between them.
7. Create examples for default, long content, empty, loading, error, disabled, focus, high zoom, and translated states.
8. Add visual, interaction, accessibility, and API checks appropriate to each component.
9. Migrate one real journey and measure duplication removed, defects found, and adoption friction.
10. Define contribution, review, versioning, deprecation, and exception rules with accountable owners.
11. Publish searchable documentation and a roadmap driven by product use rather than component count.

## Boundaries

Do not replace working platform conventions without evidence. Never encode inaccessible color, motion,
focus, or content behavior as a reusable default. Do not force one component to cover unrelated semantics.

## Done

- An audited inventory connects each initial token and component to real product use
- Design, code, content, states, and accessibility contracts match for the published components
- A migrated journey passes visual, keyboard, screen-reader, responsive, and interaction checks
- Contribution, versioning, deprecation, exception, and ownership rules are documented and exercised

Then use run-a-design-handoff to move a product flow onto the system.
