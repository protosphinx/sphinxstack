#!/usr/bin/env node
// Validates skills/<id>/SKILL.md (agent skills) and projects/<id>/project.md
// (the idea bank), then emits registry/catalog.json. No dependencies.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, "skills");
const PROJECTS_DIR = join(ROOT, "projects");
const OUT = join(ROOT, "registry", "catalog.json");
const LEVELS_FILE = join(ROOT, "registry", "skill-levels.json");
const LATEST_FILE = join(ROOT, "registry", "latest-skills.json");
const STATS_FILE = join(ROOT, "registry", "skill-stats.json");

const CATEGORIES = ["resume", "get-hired", "start", "web", "code", "write", "design", "media", "data", "money", "school", "business"];
const SKILL_LEVELS = ["starter", "working", "advanced"];
const PROJECT_FIELDS = ["id", "name", "proves", "resume_line", "level"];
const RESUME_DOORS = ["job", "college", "freelance"];
const PROJECT_SECTIONS = ["## Brief", "## Personalize", "## Milestones", "## Done means"];

function* walk(dir, filename) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) yield* walk(p, filename);
    else if (entry === filename) yield p;
  }
}

function parseFrontmatter(text, file, errors) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { errors.push(`${file}: missing frontmatter block`); return null; }
  const lines = m[1].split("\n");
  const out = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!kv) { errors.push(`${file}: cannot parse frontmatter line: ${line}`); i++; continue; }
    const [, key, rawVal] = kv;
    if (rawVal === ">" || rawVal === "|") {
      const parts = [];
      i++;
      while (i < lines.length && /^\s+\S/.test(lines[i])) { parts.push(lines[i].trim()); i++; }
      out[key] = parts.join(" ");
    } else if (rawVal === "") {
      const nested = {};
      i++;
      while (i < lines.length && /^\s+\w/.test(lines[i])) {
        const nkv = lines[i].trim().match(/^(\w[\w-]*):\s*(.*)$/);
        if (nkv) nested[nkv[1]] = stripQuotes(nkv[2]);
        i++;
      }
      out[key] = nested;
    } else {
      out[key] = parseScalar(rawVal);
      i++;
    }
  }
  return out;
}
function stripQuotes(s) {
  return s.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
}
function parseScalar(v) {
  if (/^\[.*\]$/.test(v)) {
    const inner = v.slice(1, -1).trim();
    return inner ? inner.split(",").map((s) => stripQuotes(s.trim())) : [];
  }
  if (/^\d+$/.test(v)) return Number(v);
  return stripQuotes(v);
}

const errors = [];
const warnings = [];
const skills = [];
const projects = [];
const levelRegistry = JSON.parse(readFileSync(LEVELS_FILE, "utf8"));
const levelAssignments = levelRegistry.skills ?? {};
const latestRegistry = JSON.parse(readFileSync(LATEST_FILE, "utf8"));
const latestSkillIds = latestRegistry.latest_skills ?? [];
const publicStats = JSON.parse(readFileSync(STATS_FILE, "utf8"));
for (const level of SKILL_LEVELS) {
  if (!levelRegistry.criteria?.[level]) errors.push(`skill-levels.json: missing criterion for '${level}'`);
}

for (const file of walk(SKILLS_DIR, "SKILL.md")) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text, rel, errors);
  if (!fm) continue;
  const dir = basename(dirname(file));
  if (!fm.name) errors.push(`${rel}: missing 'name'`);
  if (fm.name && fm.name !== dir) errors.push(`${rel}: name '${fm.name}' != directory '${dir}'`);
  if (!fm.description) errors.push(`${rel}: missing 'description'`);
  if (fm.description && fm.description.length > 500) errors.push(`${rel}: description over 500 chars`);
  if (!fm.category) errors.push(`${rel}: missing 'category'`);
  if (fm.category && !CATEGORIES.includes(fm.category)) errors.push(`${rel}: unknown category '${fm.category}'`);
  const level = levelAssignments[fm.name];
  if (!level) errors.push(`${rel}: missing skill level assignment`);
  if (level && !SKILL_LEVELS.includes(level)) errors.push(`${rel}: unknown skill level '${level}'`);
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
  if (body.length < 400) errors.push(`${rel}: body too short to be a real skill`);
  skills.push({ id: fm.name, category: fm.category, level, description: fm.description, path: rel });
}

for (const file of walk(PROJECTS_DIR, "project.md")) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text, rel, errors);
  if (!fm) continue;
  for (const f of PROJECT_FIELDS) {
    if (!(f in fm)) errors.push(`${rel}: missing field '${f}'`);
  }
  const dir = basename(dirname(file));
  if (fm.id && fm.id !== dir) errors.push(`${rel}: id '${fm.id}' != directory '${dir}'`);
  if (fm.resume_line) {
    for (const door of RESUME_DOORS) {
      if (!fm.resume_line[door]) errors.push(`${rel}: resume_line missing '${door}'`);
    }
  }
  for (const section of PROJECT_SECTIONS) {
    if (!text.includes(`\n${section}`)) errors.push(`${rel}: missing section '${section}'`);
  }
  if (fm.level !== undefined && ![1, 2, 3].includes(fm.level)) errors.push(`${rel}: level must be 1, 2, or 3`);
  projects.push({ ...fm, path: rel });
}

const skillIds = new Set(skills.map((s) => s.id));
if (skillIds.size !== skills.length) errors.push("duplicate skill names");
if (latestSkillIds.length !== 6) errors.push("latest-skills.json: list exactly six skills");
if (new Set(latestSkillIds).size !== latestSkillIds.length) errors.push("latest-skills.json: duplicate skill ids");
for (const id of latestSkillIds) {
  if (!skillIds.has(id)) errors.push(`latest-skills.json: unknown skill '${id}'`);
}
for (const [id, stats] of Object.entries(publicStats.skills ?? {})) {
  if (!skillIds.has(id)) errors.push(`skill-stats.json: unknown skill '${id}'`);
  if (!Number.isSafeInteger(stats.installs) || stats.installs < 0) {
    errors.push(`skill-stats.json: '${id}.installs' must be a non-negative integer`);
  }
}
if (!Number.isSafeInteger(publicStats.summary?.installs) || publicStats.summary.installs < 0) {
  errors.push("skill-stats.json: 'summary.installs' must be a non-negative integer");
}
for (const id of Object.keys(levelAssignments)) {
  if (!skillIds.has(id)) errors.push(`skill-levels.json: unknown skill '${id}'`);
}
const projectIds = new Set();
for (const p of projects) {
  if (projectIds.has(p.id)) errors.push(`duplicate project id '${p.id}'`);
  projectIds.add(p.id);
  for (const sk of p.proves ?? []) {
    if (!skillIds.has(sk)) errors.push(`${p.path}: references unknown skill '${sk}'`);
  }
}
for (const s of skills) {
  if (s.id.startsWith("build-") && !projects.some((p) => (p.proves ?? []).includes(s.id)) && s.id !== "build-resume") {
    warnings.push(`skill '${s.id}' has no ideas in the idea bank`);
  }
}

if (errors.length) {
  console.error(`catalog INVALID — ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
for (const w of warnings) console.warn(`warning: ${w}`);

skills.sort((a, b) => (a.id === "build-resume" ? -1 : b.id === "build-resume" ? 1 : a.id.localeCompare(b.id)));
projects.sort((a, b) => a.id.localeCompare(b.id));
const levelCounts = Object.fromEntries(SKILL_LEVELS.map((level) => [level, skills.filter((s) => s.level === level).length]));
writeFileSync(
  OUT,
  JSON.stringify(
    {
      generated_from: ["skills/", "projects/", "registry/skill-levels.json", "registry/latest-skills.json"],
      skill_count: skills.length,
      skill_level_counts: levelCounts,
      skill_level_criteria: levelRegistry.criteria,
      project_count: projects.length,
      latest_skill_ids: latestSkillIds,
      skills,
      projects,
    },
    null, 2,
  ) + "\n",
);
console.log(`catalog OK — ${skills.length} skill(s), ${projects.length} idea(s) -> ${relative(ROOT, OUT)}`);
