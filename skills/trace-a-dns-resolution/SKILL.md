---
name: trace-a-dns-resolution
category: code
description: Trace DNS resolution from client search and cache through recursive and authoritative answers, DNSSEC, delegation, and address selection. Use when names resolve differently across clients, networks, or time.
---
# trace-a-dns-resolution
## When to use
- Use for an authorized domain, resolver, or client path.
- Do not change production DNS while diagnosis is still ambiguous.
## Preconditions
- Record name, type, client, network, resolver, time, search domains, address family, and expected authority.
## Procedure
1. Capture the client’s actual query, search expansion, hosts file, and cache state.
2. Query the configured recursive resolver and record answer, authority, additional data, flags, and TTL.
3. Trace delegation from root to authoritative servers.
4. Check glue, lame delegation, DNSSEC chain, CNAME or alias, negative caching, and split horizon.
5. Compare resolvers, regions, IPv4 and IPv6, and cached versus uncached paths.
6. Order observations by time and identify the first divergent layer.
## Failure plan
- If DNSSEC or delegation is broken, preserve evidence before emergency correction.
## Worked example
One office resolver retains a negative answer after a restored record because the SOA negative TTL has not expired.
## Done
- A DNS trace report records client, recursive, delegation, authoritative, DNSSEC, cache, TTL, and divergence evidence
- Search-domain, hosts, resolver, region, address-family, negative-cache, clock, and authority checks verify diagnosis
