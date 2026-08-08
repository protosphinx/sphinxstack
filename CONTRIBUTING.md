# Contributing

## Adding a skill

Create `skills/<name>/SKILL.md`. The frontmatter needs `name` and
`description`; the description must say when to use the skill,
including the phrases a person would actually say. The body is the
method: what to inspect first, the ordered steps, the rules that
apply, and what must be true at the end.

Every skill in the library passes this review bar:

- a clear trigger in the frontmatter
- a specific artifact or observable result
- an ordered, usable method
- safety, privacy, consent, and scope boundaries
- verification evidence
- an explicit stopping condition

When publishing a skill, add its id to the front of
`registry/latest-skills.json` and keep the six newest entries.
Add it to `registry/skill-levels.json`, `registry/skill-reviews.json`,
the search-intent map in `site/build.mjs`, and the relevant cohort in
`registry/skill-roadmap.json`. Editorial cohorts may contain no more
than 25 skills. Record at least three representative simulations for
every completed cohort in `registry/cohort-forward-tests.json`.

Skills do things with the person, not for them or to them. Nothing
invented: a skill that produces a resume, a site, or a post states
facts the person supplied or built.

## Adding a project brief

Create `projects/<id>/project.md`: the problem, the constraints, the
milestones, and a finish line another person could check. Link the
skills the work needs. Briefs are starting points meant to be bent
around the builder's actual life — write them concrete, not generic.

## Checks

```
npm test
```

runs the catalog and 1,021-skill roadmap validators, plus the skill,
advanced-skill, worked-example, and SEO lints. Everything must pass before
a change lands. `npm run build` renders the site into `site/dist/` if
you want to see your skill's page.
