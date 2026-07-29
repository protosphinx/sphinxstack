---
name: inspect-a-tls-certificate
category: code
description: Inspect a TLS certificate chain, names, validity, issuer, key, usages, revocation signals, and served context. Use when diagnosing trust, expiry, hostname, or deployment problems.
---
# inspect-a-tls-certificate
## When to use
- Use for an authorized host, file, endpoint, or captured chain.
- Do not expose private keys or assume one network path represents every edge.
## Preconditions
- Record hostname, port, protocol, SNI, client location, time, resolver, and expected authority.
## Procedure
1. Capture the served leaf and chain with the exact SNI and protocol.
2. Inspect subject alternative names, issuer, serial, validity, key, signature, and usages.
3. Build and verify the chain against the intended trust store.
4. Check hostname, clock, intermediates, stapling or revocation signals, and algorithm policy.
5. Compare regions, IPv4 and IPv6, direct origin and edge where applicable.
6. Record the observed problem and deployment layer that owns it.
## Failure plan
- If private-key exposure is suspected, stop inspection scope and activate key replacement.
## Worked example
IPv6 serves an expired chain while IPv4 is current, identifying a stale edge rather than a universal certificate failure.
## Done
- A TLS inspection report records endpoint context, chain, names, validity, trust, algorithms, and path differences
- SNI, hostname, clock, trust-store, region, address-family, revocation, and key-safety checks verify findings
