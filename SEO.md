# SphinxStack search strategy

## Objective

Win qualified organic discovery for people who want an AI agent to help them
finish real work. The site-wide wedge is:

> Free, inspectable AI agent skills that work with Codex, Claude, ChatGPT,
> Copilot, Cursor, and Gemini.

Rankings are an outcome, not a build artifact. No implementation can guarantee
the top result for every page, and assigning a high-volume phrase to every URL
would create cannibalization and pages that do not satisfy the query. The
operating goal is stronger:

- every indexable page owns one distinct search intent;
- high-volume phrases go to the few pages that can fully satisfy them;
- supporting pages answer useful long-tail questions and strengthen a topic
  cluster;
- Search Console evidence decides what gets expanded, consolidated, or removed.

## Page roles

| Page family | Search job | Default intent |
| --- | --- | --- |
| Homepage | Category pillar | `AI agent skills` |
| Skills index | Browse the whole product | `free AI skills library` |
| Skill page | Complete one task with an agent | `[task] with AI` |
| Projects index | Browse things worth building | `project ideas to build with AI` |
| Project brief | Find one concrete build idea | `[project] project idea` |
| Brain guide | Configure a durable agent setup | `how to build an AI agent brain` |
| Setup guide | Load and run a skill | `how to use AI agent skills` |
| About | Brand and trust | `sphinxstack` |
| Credits | Attribution, not acquisition | `noindex, follow` |

The generated `site/dist/seo-manifest.json` is the current route-to-query
contract. `npm run lint:seo` fails if two indexable pages claim the same target.

## Opportunity tiers

### Tier 1: category-defining pages

These receive the deepest research, strongest examples, original visuals,
external references, and link acquisition:

- AI agent skills
- how to make a resume with AI
- how to write a cover letter with AI
- how to build a website with AI
- how to build a web app with AI
- how to automate tasks with AI
- how to learn SQL with AI
- how to use an API with AI
- how to start a YouTube channel with AI
- how to build a portfolio website with AI

These are hypotheses until demand, difficulty, and SERP intent are checked in a
keyword data source. A phrase stays Tier 1 only when the page can answer the
dominant intent better than the current results.

### Tier 2: topic-cluster pages

Related skills capture narrower queries and pass internal relevance to the Tier
1 page. Examples include resume review, resume tailoring, interview practice,
custom domains, deployment, accessibility, database basics, and website speed.

### Tier 3: project briefs

Project briefs primarily target specific inspiration queries and demonstrate
what the skills produce. They should not be inflated into generic
high-volume-keyword pages. Briefs with impressions but poor position can become
full guides; briefs with no distinct demand can remain support content or be
excluded from indexing.

## Research and editorial loop

1. Export Google Search Console data by query and page for 28 and 90 days.
2. Add monthly volume, trend, country, and difficulty from Keyword Planner,
   Ahrefs, Semrush, or an equivalent source.
3. Inspect the current result page. Record whether the intent is tutorial, tool,
   template, list, product, video, or mixed.
4. Score each opportunity:

   `opportunity = demand × product relevance × intent fit × attainable difficulty`

5. Assign one primary query and a small semantic cluster to one canonical page.
   Never assign the same primary intent to two pages.
6. Rewrite the page around the user's job: immediate answer, worked example,
   method, proof, failure cases, FAQ, and a useful next action.
7. Request indexing, measure impressions, position, clicks, and useful skill
   loads, then revise after enough data exists.

## Technical search contract

The generator must keep these conditions true:

- one canonical URL, title, description, H1, robots directive, and JSON-LD graph
  per HTML page;
- metadata is unique and bounded to 60 title characters and 160 description
  characters;
- skill pages expose `HowTo` plus breadcrumb data;
- project briefs expose `LearningResource` plus breadcrumb data;
- the sitemap index splits skills, ideas, and site pages so coverage can be
  measured by family;
- only canonical, indexable HTML pages appear in sitemaps;
- raw Markdown remains available to agents but is not submitted as a search
  result;
- internal stats, vote events, and attribution-only pages do not compete for
  search demand.

The production server should also return an `X-Robots-Tag: noindex, follow`
header, or an HTTP `Link` canonical header, on raw `.md` responses. That server
rule is stronger than relying on crawler-specific `robots.txt` exclusions while
keeping the files available to agents.

## Content bar

A page is ready to compete only when:

- the opening answers the exact query without requiring a click or signup;
- the method is original, specific, and visibly complete;
- claims are supported by a worked example, artifact, measurement, or source;
- headings reflect decisions a searcher actually needs to make;
- FAQs answer real follow-up questions rather than repeat keywords;
- the page links to its parent cluster and the most useful next step;
- the title promises exactly what the page delivers;
- the page is fast and usable on a phone.

Programmatic metadata alone is not a content strategy. Pages should be expanded
in opportunity order, not bulk-filled with interchangeable prose.

## Measurement

Track weekly by page family and monthly by target query:

- valid indexed pages versus submitted pages;
- impressions and unique ranking queries;
- median and distribution of position, not only an average;
- click-through rate at comparable positions;
- useful skill loads and ratings from organic entrances;
- referring domains and links to Tier 1 pages;
- pages with cannibalized queries;
- pages with impressions but no clicks;
- pages with no impressions after a reasonable crawl and evaluation window.

The first success gate is complete discovery and clean index coverage. The
second is impressions for the intended queries. Top-three rankings come after
the page proves intent fit and earns authority.
