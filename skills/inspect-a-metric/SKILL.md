---
name: inspect-a-metric
category: data
description: Inspect a metric's meaning, shape, labels, units, aggregation, and collection limits before interpreting a chart. Use when a telemetry value appears surprising or supports an operational decision.
---

# inspect-a-metric

Verify what the series actually measures before explaining why it changed.

## Procedure

1. Record the metric name, owner, source, type, unit, and intended decision.
2. Read its definition for counter, gauge, histogram, summary, or derived behavior.
3. Inspect labels, cardinality, resets, missing values, scrape interval, and retention.
4. Confirm the query's range, rate function, aggregation, grouping, and timezone.
5. Compare raw and aggregated series across instances and known events.
6. Check sampling, dropped data, delayed ingestion, deploys, and schema changes.
7. Test the interpretation against a second signal such as logs, traces, or business counts.
8. Document the supported reading, uncertainty, and a safer query if needed.

## Guardrails

- Do not average percentiles or rates without validating the mathematics.
- Missing and zero are different states.
- A correlated metric is not automatically a cause.

## Done

- A metric definition and query report are documented
- Units, labels, aggregation, and collection limits are verified
- The interpretation is reconciled with an independent signal
