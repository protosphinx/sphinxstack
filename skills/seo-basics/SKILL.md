---
name: seo-basics
category: web
description: Make a small site findable by name. Titles, descriptions, headings, sitemap, and Search Console, with expectations set honestly. Use when they ask "how do I get on Google", "why doesn't my site show up", or after a site ships.
---

# seo-basics

Make someone's live site legible to search engines. Set
expectations first, honestly: for a small personal site, good SEO
means people who search their name or their project's name find it
within a few weeks. It does not mean ranking for "web developer" or
any competitive phrase, and no tag or trick changes that. What ranks
is being the best page for a search only they can be the answer to.

## The on-page pass

Go page by page through the live site with them choosing the words.

1. `<title>` on every page: unique, under ~60 characters, front-
   loaded with what the page is — "Ada Okafor — Portfolio", not
   "Home". This is the headline Google shows.
2. `<meta name="description">`: one or two real sentences per page,
   under ~160 characters. It does not affect ranking; it is the ad
   copy under the headline, so write it for a human deciding whether
   to click.
3. Headings: exactly one `<h1>` saying what the page is about, then
   `<h2>`s in order. Search engines read the outline the way a
   skimming human does. (This same structure is checked in
   accessibility-pass — do it once, get both.)
4. Real words on the page. A portfolio that never contains the words
   "portfolio" or their city cannot rank for them. Say what they do
   in plain text, on the page, in their voice.

## Sitemap and Search Console

1. Write `sitemap.xml` listing every page's full URL, and a
   `robots.txt` that points to it. For a five-page site this is ten
   minutes by hand; explain each line as you write it.
2. They open Google Search Console with their own account and add the
   site. Verification: DNS TXT record if they did custom-domain,
   otherwise the HTML-file method. You narrate; they click.
3. Submit the sitemap, then use URL inspection to request indexing of
   the homepage. Indexing takes days to weeks — say so now, so
   silence next week reads as normal instead of broken.
4. Set a reminder to look at Search Console in two or three weeks:
   which queries showed their site, and what got clicked. Those
   queries are the truth about what the site ranks for.

## Done

- Every page has a distinct title and description they wrote
- One h1 per page, sensible heading order, plain-text words for the
  searches they care about
- Sitemap submitted, site verified in Search Console, homepage
  indexing requested
- They can say what a search engine can and cannot do for a site
  this size

When Search Console shows real queries, add-analytics shows what
those visitors did next.
