---
name: prevent-cross-site-scripting
category: web
description: Prevent reflected, stored, and DOM cross-site scripting through contextual output handling and safe APIs. Use when untrusted data can reach HTML, script, URL, style, or document execution contexts.
---

# prevent-cross-site-scripting

Trace untrusted data to every rendering sink and apply the control required by that exact context.

## Procedure

1. Inventory server templates, client renderers, rich-text features, URLs, messages, previews, and third-party widgets.
2. Trace untrusted sources to HTML, attribute, JavaScript, CSS, URL, SVG, and DOM sinks.
3. Use framework-native text binding and contextual escaping by default.
4. Replace unsafe APIs such as string-built markup or dynamic evaluation with typed, non-executing alternatives.
5. Sanitize intentionally allowed rich HTML with a maintained parser and a restrictive policy.
6. Validate allowed URL schemes and keep untrusted data out of executable script and style contexts.
7. Add a strict Content Security Policy as containment and detection, not as the primary fix.
8. Test stored, reflected, DOM, mutation, encoding, and framework-escape bypass cases.
9. Review dependency and browser assumptions whenever rendering libraries change.
10. Record removed sinks, sanitizer policy, tests, and remaining exceptions.

## Guardrails

- Never use a regular expression as an HTML sanitizer.
- Encoding for one context is unsafe when reused in another.
- Do not mark arbitrary content as trusted to silence a framework warning.

## Done

- A source-to-sink inventory and approved rendering patterns are documented
- Representative payloads are tested in every reachable context
- Unsafe sinks and sanitizer exceptions are recorded and reviewed
