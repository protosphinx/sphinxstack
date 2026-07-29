---
name: design-a-date-and-time-input
category: design
description: Design date and time input with explicit locale, time zone, precision, validation, ambiguity handling, and accessible alternatives. Use when users schedule, record, filter, or compare time-sensitive information.
---

# design-a-date-and-time-input

Store an unambiguous instant or declared local time with its context.

## When to use

- Use for appointments, deadlines, ranges, recurring events, logs, travel, or date-only records.
- Do not add a time zone to a date-only fact or convert a local wall time without a defined rule.

## Procedure

1. Define whether the value is date-only, local time, absolute instant, duration, range, recurrence, or flexible window.
2. Identify user locale, input calendar, display format, time zone, daylight-saving behavior, precision, and storage model.
3. Use labeled text or segmented inputs with an optional picker; never make the visual picker the only path.
4. Show the expected format and time zone before entry, and preserve the user's typed value on errors.
5. Validate impossible dates, reversed ranges, boundaries, past or future rules, unavailable times, and recurrence conflicts.
6. Resolve repeated or missing daylight-saving times explicitly rather than silently choosing one.
7. Display a confirmation in human language when converting zones or scheduling consequential events.
8. Test keyboard, screen reader, zoom, mobile keyboards, locale formats, non-Latin digits, long zone names, DST transitions, and server-client skew.

## Failure plan

- If time-zone context is missing, require it before committing an instant.
- If a local time becomes invalid after a rule change, flag it for review rather than shifting silently.

## Done

- A temporal-input model records value type, locale, calendar, zone, precision, storage, validation, and conversion rules
- Interaction tests verify accessible entry, errors, ranges, recurrence, DST ambiguity, localization, and confirmed output
