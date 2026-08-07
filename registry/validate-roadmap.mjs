#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(ROOT, "registry", "catalog.json"), "utf8"));
const roadmap = JSON.parse(readFileSync(join(ROOT, "registry", "skill-roadmap.json"), "utf8"));
const forwardTests = JSON.parse(readFileSync(join(ROOT, "registry", "cohort-forward-tests.json"), "utf8"));
const errors = [];
const statuses = new Set(["planned", "in-progress", "complete"]);
const levels = ["starter", "working", "advanced"];
const skillIds = new Set(catalog.skills.map((skill) => skill.id));
const categories = [...new Set(catalog.skills.map((skill) => skill.category))].sort();
const target = roadmap.target_skill_count;

if (!Number.isSafeInteger(target) || target !== 1009) {
  errors.push("target_skill_count must be exactly 1009");
}
if (!Number.isSafeInteger(roadmap.max_editorial_batch) || roadmap.max_editorial_batch < 1 || roadmap.max_editorial_batch > 25) {
  errors.push("max_editorial_batch must be an integer from 1 through 25");
}

const categoryTargets = roadmap.category_targets ?? {};
const targetCategories = Object.keys(categoryTargets).sort();
if (JSON.stringify(targetCategories) !== JSON.stringify(categories)) {
  errors.push(`category_targets must match catalog categories: ${categories.join(", ")}`);
}
if (Object.values(categoryTargets).reduce((sum, value) => sum + value, 0) !== target) {
  errors.push("category_targets must sum to target_skill_count");
}
for (const category of categories) {
  const current = catalog.skills.filter((skill) => skill.category === category).length;
  const planned = categoryTargets[category];
  if (!Number.isSafeInteger(planned) || planned < current) {
    errors.push(`category '${category}' target ${planned} is below current count ${current}`);
  }
}

const levelTargets = roadmap.level_targets ?? {};
if (JSON.stringify(Object.keys(levelTargets).sort()) !== JSON.stringify([...levels].sort())) {
  errors.push(`level_targets must contain exactly: ${levels.join(", ")}`);
}
if (Object.values(levelTargets).reduce((sum, value) => sum + value, 0) !== target) {
  errors.push("level_targets must sum to target_skill_count");
}
for (const level of levels) {
  if (!Number.isSafeInteger(levelTargets[level]) || levelTargets[level] < catalog.skill_level_counts[level]) {
    errors.push(`level '${level}' target ${levelTargets[level]} is below current count ${catalog.skill_level_counts[level]}`);
  }
}

const cohortTargets = roadmap.cohort_targets ?? [];
let previousScheduledTarget = 0;
for (const scheduledTarget of cohortTargets) {
  if (!Number.isSafeInteger(scheduledTarget) || scheduledTarget <= previousScheduledTarget) {
    errors.push("cohort_targets must contain strictly increasing integers");
  }
  if (previousScheduledTarget && scheduledTarget - previousScheduledTarget > roadmap.max_editorial_batch) {
    errors.push(`scheduled cohort ending at ${scheduledTarget} exceeds max_editorial_batch`);
  }
  previousScheduledTarget = scheduledTarget;
}
if (!cohortTargets.length || cohortTargets.at(-1) !== target) {
  errors.push("final cohort_targets entry must equal target_skill_count");
}
const scheduledTargets = new Set(cohortTargets);

const milestones = roadmap.milestones ?? [];
let previousMilestone = 0;
for (const milestone of milestones) {
  if (!Number.isSafeInteger(milestone.skill_count) || milestone.skill_count <= previousMilestone) {
    errors.push("milestones must have strictly increasing integer skill_count values");
  }
  previousMilestone = milestone.skill_count;
  if (!statuses.has(milestone.status)) errors.push(`milestone ${milestone.skill_count} has invalid status '${milestone.status}'`);
  if (!milestone.label) errors.push(`milestone ${milestone.skill_count} needs a label`);
  if (milestone.status === "complete" && milestone.skill_count > catalog.skill_count) {
    errors.push(`completed milestone ${milestone.skill_count} exceeds current count ${catalog.skill_count}`);
  }
}
if (!milestones.length || milestones.at(-1).skill_count !== target) {
  errors.push("final milestone must equal target_skill_count");
}

if (!Array.isArray(roadmap.quality_gates) || roadmap.quality_gates.length < 6) {
  errors.push("quality_gates must contain at least six explicit gates");
}

const cohortIds = new Set();
const plannedSkillIds = new Set();
const completeCohorts = new Map();
let previousCohortTarget = 0;
for (const cohort of roadmap.cohorts ?? []) {
  if (!cohort.id || cohortIds.has(cohort.id)) errors.push(`duplicate or missing cohort id '${cohort.id ?? ""}'`);
  cohortIds.add(cohort.id);
  if (!statuses.has(cohort.status)) errors.push(`cohort '${cohort.id}' has invalid status '${cohort.status}'`);
  if (!Number.isSafeInteger(cohort.target_skill_count) || cohort.target_skill_count <= previousCohortTarget) {
    errors.push(`cohort '${cohort.id}' target must be a strictly increasing integer`);
  }
  if (!scheduledTargets.has(cohort.target_skill_count)) {
    errors.push(`cohort '${cohort.id}' target is missing from cohort_targets`);
  }
  previousCohortTarget = cohort.target_skill_count;
  const ids = cohort.skill_ids ?? [];
  if (ids.length > roadmap.max_editorial_batch) {
    errors.push(`cohort '${cohort.id}' exceeds max_editorial_batch`);
  }
  for (const id of ids) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) errors.push(`cohort '${cohort.id}' has invalid skill id '${id}'`);
    if (plannedSkillIds.has(id)) errors.push(`skill '${id}' appears in more than one cohort`);
    plannedSkillIds.add(id);
    if (cohort.status === "complete" && !skillIds.has(id)) {
      errors.push(`completed cohort '${cohort.id}' references unpublished skill '${id}'`);
    }
  }
  if (cohort.status === "complete" && cohort.target_skill_count > catalog.skill_count) {
    errors.push(`completed cohort '${cohort.id}' exceeds current count ${catalog.skill_count}`);
  }
  if (cohort.status === "complete") completeCohorts.set(cohort.id, new Set(ids));
  if (cohort.status !== "complete" && !ids.length && !(cohort.themes ?? []).length) {
    errors.push(`planned cohort '${cohort.id}' needs skill_ids or themes`);
  }
}

const testsByCohort = new Map();
for (const test of forwardTests) {
  const cohortSkills = completeCohorts.get(test.cohort_id);
  if (!cohortSkills) {
    errors.push(`forward test references incomplete or unknown cohort '${test.cohort_id}'`);
    continue;
  }
  if (!cohortSkills.has(test.skill_id)) {
    errors.push(`forward test skill '${test.skill_id}' is not in cohort '${test.cohort_id}'`);
  }
  if (test.result !== "pass") errors.push(`forward test '${test.skill_id}' must pass before its cohort is complete`);
  if (typeof test.scenario !== "string" || test.scenario.length < 80) {
    errors.push(`forward test '${test.skill_id}' needs a realistic scenario`);
  }
  if (!Array.isArray(test.observed_artifacts) || test.observed_artifacts.length < 3) {
    errors.push(`forward test '${test.skill_id}' needs at least three observed artifacts`);
  }
  if (typeof test.notes !== "string" || test.notes.length < 80) {
    errors.push(`forward test '${test.skill_id}' needs evaluation notes`);
  }
  const cohortTests = testsByCohort.get(test.cohort_id) ?? [];
  cohortTests.push(test.skill_id);
  testsByCohort.set(test.cohort_id, cohortTests);
}
for (const cohortId of completeCohorts.keys()) {
  const testedSkills = new Set(testsByCohort.get(cohortId) ?? []);
  if (testedSkills.size < 3) {
    errors.push(`completed cohort '${cohortId}' needs at least three representative forward tests`);
  }
}

if (errors.length) {
  console.error(`roadmap INVALID — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

const remaining = target - catalog.skill_count;
const percent = ((catalog.skill_count / target) * 100).toFixed(1);
const gaps = categories
  .map((category) => {
    const current = catalog.skills.filter((skill) => skill.category === category).length;
    return `${category} ${current}/${categoryTargets[category]}`;
  })
  .join(", ");
console.log(`roadmap OK — ${catalog.skill_count}/${target} skills (${percent}%), ${remaining} remaining`);
console.log(`category capacity — ${gaps}`);
console.log(`cohort evidence — ${forwardTests.length} representative forward test(s) passed`);
