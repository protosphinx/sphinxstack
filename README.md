<div align="center">

# sphinxstack

**Everything is a skill. Including the resume.**

1,021 skills · 153 project briefs · plain markdown · any agent · MIT

[**sphinxstack.com**](https://sphinxstack.com) · [skills](https://sphinxstack.com/skills/) · [projects](https://sphinxstack.com/ideas/) · [brain](https://sphinxstack.com/brain/) · [about](https://sphinxstack.com/about/) · [smbwiki](https://smbwiki.com)

</div>

---

A stack of skills for your AI agent, made for people starting from
zero. Take a skill, load it into whatever agent you have — Codex,
Claude Code, Copilot, Gemini, Cursor — and do the thing: build your
resume, put a website live, ship a working app.

A prompt asks for a result. A skill records the process used to
produce and check that result: what to inspect first, which questions
to ask, what not to change, how to handle failure, and which evidence
marks the work as finished. Skills here are plain markdown files. You
can read one before using it, edit it after a failure, keep it with a
project, and load it into a different agent tomorrow.

## Try one in thirty seconds

Paste this into your agent:

```
Read https://sphinxstack.com/skills/build-resume.md and follow it. Then: build my resume.
```

or launch it directly:
[Open in ChatGPT](https://chatgpt.com/?q=Read%20https%3A%2F%2Fsphinxstack.com%2Fskills%2Fbuild-resume.md%20and%20follow%20it.%20Then%3A%20build%20my%20resume.) ·
[Open in Claude](https://claude.ai/new?q=Read%20https%3A%2F%2Fsphinxstack.com%2Fskills%2Fbuild-resume.md%20and%20follow%20it.%20Then%3A%20build%20my%20resume.)

The agent interviews you about what you have actually done, reads
your GitHub if you have one, and ships a one-page HTML/PDF resume
with live links. The first rule in the file:

> ## Rule zero: nothing invented
>
> Every line on the resume must trace to something the person told you
> or something you found in their accounts. Never fabricate employers,
> dates, titles, tools, or metrics. If a section would be empty, leave
> it out — a short true resume beats a padded one. If they ask you to
> make something up, refuse and offer to build the missing piece for
> real instead.

If the facts are thin, the fix is building something real. Most of
the library exists for exactly that.

Every skill works the same way: paste the raw URL, or copy the full
text from its page on [sphinxstack.com](https://sphinxstack.com), or
install it into your agent's skill directory:

```
npx skills add protosphinx/sphinxstack -s build-resume -g -y
```

## The library

| category | skills | for example |
|---|---:|---|
| code | 173 | `connect-partmode-to-an-agent` · `edit-cad-in-partmode` · `export-cad-from-partmode` |
| data | 110 | `migrate-a-global-master-data-platform` · `audit-a-feature-store` · `build-a-change-data-capture-pipeline` |
| web | 100 | `test-a-multiregion-web-failover` · `migrate-a-headless-cms` · `audit-a-third-party-web-script` |
| get-hired | 80 | `respond-to-a-hiring-process-data-breach` · `design-a-cross-border-executive-search` · `prepare-for-an-executive-interview` |
| resume | 60 | `audit-a-resume-after-identity-fraud` · `write-a-resume-for-public-sector-role` · `consolidate-multiple-resume-versions` |
| design | 92 | `get-started-with-partmode` · `sketch-and-dimension-in-partmode` · `prepare-a-part-for-3d-printing-in-partmode` |
| start | 90 | `manage-a-multijurisdiction-corporate-separation` · `plan-a-business-unit-carve-out` · `manage-a-regulatory-remediation-program` |
| school | 70 | `respond-to-a-research-misconduct-allegation` · `migrate-a-university-learning-platform` · `design-a-mixed-methods-study` |
| write | 90 | `respond-to-a-publication-ethics-crisis` · `migrate-a-global-content-operation` · `write-a-technical-case-study` |
| media | 70 | `respond-to-a-live-broadcast-integrity-crisis` · `verify-a-final-media-conform` · `design-a-podcast-archive-workflow` |
| money | 80 | `recover-from-a-global-treasury-control-failure` · `design-a-refund-control-process` · `build-a-working-capital-dashboard` |

Each skill is leveled by the judgment its procedure requires:
**328 starter** (one bounded artifact, a short feedback loop),
**583 working** (an existing project, several connected decisions),
**110 advanced** (production risk, an explicit failure plan, an
evidence package).

## The road to 1,021

The catalog grows in reviewed cohorts of at most 25 skills. The
[skill roadmap](registry/skill-roadmap.json) allocates exactly 1,021
slots across the twelve subjects and records the 150, 250, 500, 750,
1,000, 1,006, 1,009, and 1,021-skill milestones. `npm test` rejects a completed
cohort whose skills, capacity targets, or quality metadata are
incomplete.

The twelfth subject is business. Those six skills read the open
operating models at [smbwiki](https://smbwiki.com), which publishes how
125 business types actually run and uses the same definition of a skill
as this library.

## Project briefs

153 things worth building, each with a problem, constraints,
milestones, and a finish line another person could check — from a
recipe archive for your grandmother's handwritten cards to a Discord
bot your server actually uses to a load-tested API with a postmortem.
111 fit in about a week; 29 take two to three weeks with real
architecture; 13 run a month or more with real users. Pick one and
point `start-a-project` at it.

## Principles

- Skills do things with the person, not for them or to them. The
  agent explains as it goes; the person makes the choices that make
  the result theirs.
- Nothing invented, ever. Resumes state facts; sites carry real
  content. If the facts are thin, the fix is building something real —
  there are skills for that.
- Boring stacks, live URLs. Static files, GitHub Pages, one page that
  works beats a framework that doesn't.

## Repo layout

```
skills/<name>/SKILL.md    agent skills (frontmatter: name, description)
projects/<id>/project.md  the idea bank: briefs to point skills at
registry/validate.mjs     validates both, emits registry/catalog.json
site/build.mjs            static site generator -> site/dist/
SEO.md                    search intent, page roles, and measurement gates
```

`npm test` validates the catalog and lints every skill and worked
example, builds the site, and checks its search metadata, structured data,
robots rules, and sitemap coverage. `npm run build` renders sphinxstack.com
into `site/dist/` — static files, host them anywhere.

## Contributing

New skills welcome. [CONTRIBUTING.md](CONTRIBUTING.md) has the format
and the review bar every skill in the library passes: a clear
trigger, an ordered method, real guardrails, and a checkable
definition of done.

## License

[MIT](LICENSE).
