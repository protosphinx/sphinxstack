---
name: design-a-map-interface
category: design
description: Design a map interface with clear spatial purpose, data provenance, non-map alternatives, privacy controls, and accessible interaction. Use when location and spatial relationships materially support a user task.
---

# design-a-map-interface

Use the map to answer a spatial question, not as decorative chrome.

## When to use

- Use for routing, proximity, coverage, assets, incidents, boundaries, or spatial comparison.
- Provide an equivalent list, table, directions, or search path for users who cannot use the map.

## Procedure

1. Define the spatial task, data, accuracy, freshness, coordinate system, boundaries, zoom, and consequences of error.
2. Separate precise, approximate, inferred, delayed, and intentionally obfuscated locations.
3. Design search, geolocation permission, pan, zoom, select, filter, detail, route, and reset behavior.
4. Provide keyboard-accessible controls, visible focus, sufficient targets, non-color symbols, text alternatives, and a synchronized non-map view.
5. Handle clusters, overlaps, dense areas, empty regions, boundaries, uncertainty, stale data, loading, offline, and provider failure.
6. Minimize location collection, explain permission value, support manual entry, and protect sensitive homes, facilities, or vulnerable people.
7. Check labels, attribution, license, locale, right-to-left behavior, units, time, and map-provider terms.
8. Test screen readers, keyboard, zoom, touch, motion sensitivity, low bandwidth, denied location, inaccurate GPS, and long results.
9. Validate route or proximity outcomes against known cases rather than visual plausibility.

## Failure plan

- If precision is unsafe or unsupported, show an appropriate region and uncertainty instead of a false point.
- If the provider fails, preserve the non-map task path and last safe state.

## Done

- A map design specification records task, data, accuracy, freshness, states, controls, privacy, attribution, and alternate view
- Interaction and known-case tests verify spatial outcomes, accessibility, denied permission, provider failure, and uncertainty communication
