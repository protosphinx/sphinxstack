#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS = join(ROOT, "skills");
const REVIEW = join(ROOT, "registry", "skill-reviews.json");
const errors = [];
const ids = [];

const artifactTerms = /\b(artifact|file|document|sheet|tracker|repo|repository|url|link|page|site|app|api|database|email|message|video|audio|recording|invoice|report|plan|list|draft|export|commit|pull request|dashboard|form|model|query|script)\b/i;
const evidenceTerms = /\b(verify|verified|test|tested|check|checked|proof|prove|proves|evidence|live|published|sent|saved|recorded|opens?|works?|working|doing|computes?|passes?|reconcile|logged|render|exported|deployed|submitted|scheduled|rehearsed|created|written|accurate|correct|confirmed|kept|listed|identified|selected|completed?)\b/i;
const boundaryTerms = /\b(never|do not|don't|cannot|no |only|permission|consent|privacy|private|secret|credential|scope|rule|guardrail|minor|guardian|official source|current official)\b/i;
const bannedTone = /\b(cringe|hostage tape|business-plan theater|guess-and-spray|spam from a teenager|talk is cheap|worth exactly nothing)\b/i;

for (const id of readdirSync(SKILLS).sort()) {
  const file = join(SKILLS, id, "SKILL.md");
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  ids.push(id);
  const rel = `skills/${id}/SKILL.md`;
  const interfaceFile = join(SKILLS, id, "agents", "openai.yaml");
  const interfaceRel = `skills/${id}/agents/openai.yaml`;
  const name = text.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = text.match(/^description:\s*([\s\S]*?)\n---\n/m)?.[1]
    ?.replace(/^\s+/gm, " ")
    .trim();
  const lines = text.split("\n");
  const h2Count = lines.filter((line) => /^##\s+/.test(line)).length;
  const procedureLines = lines.filter((line) => /^(?:\d+\.|-)\s+/.test(line)).length;
  const done = text.match(/\n## Done\n([\s\S]*?)(?=\n##\s|$)/)?.[1] ?? "";
  const doneBullets = done.split("\n").filter((line) => /^-\s+/.test(line)).length;

  if (name !== id) errors.push(`${rel}: frontmatter name must match its directory`);
  if (!description?.includes("Use when")) errors.push(`${rel}: description must state when to use the skill`);
  if (!text.includes(`\n# ${id}\n`)) errors.push(`${rel}: H1 must match the skill name`);
  if (lines.length > 500) errors.push(`${rel}: exceeds 500 lines`);
  if (/\nYou are\s/.test(text)) errors.push(`${rel}: write instructions in imperative form, not roleplay form`);
  if (h2Count < 2) errors.push(`${rel}: needs a structured procedure`);
  if (procedureLines < 3) errors.push(`${rel}: needs concrete ordered steps or checks`);
  if (!artifactTerms.test(text)) errors.push(`${rel}: no concrete artifact or observable result found`);
  if (!boundaryTerms.test(text)) errors.push(`${rel}: no scope, safety, privacy, or permission boundary found`);
  if (!evidenceTerms.test(done) || doneBullets < 2) errors.push(`${rel}: Done must contain at least two evidence-based checks`);
  if (/^(?:TODO|TBD|FIXME):/im.test(text)) errors.push(`${rel}: contains placeholder text`);
  if (bannedTone.test(text)) errors.push(`${rel}: contains editorial or snarky copy; use training-manual language`);

  if (!existsSync(interfaceFile)) {
    errors.push(`${interfaceRel}: missing direct-install interface metadata`);
  } else {
    const interfaceText = readFileSync(interfaceFile, "utf8");
    const displayName = interfaceText.match(/^\s{2}display_name:\s*"([^"]+)"\s*$/m)?.[1] ?? "";
    const shortDescription = interfaceText.match(/^\s{2}short_description:\s*"([^"]+)"\s*$/m)?.[1] ?? "";
    const defaultPrompt = interfaceText.match(/^\s{2}default_prompt:\s*"([^"]+)"\s*$/m)?.[1] ?? "";
    if (!displayName) errors.push(`${interfaceRel}: interface.display_name must be a quoted non-empty string`);
    if (shortDescription.length < 25 || shortDescription.length > 64) {
      errors.push(`${interfaceRel}: interface.short_description must contain 25 through 64 characters`);
    }
    if (!defaultPrompt.includes(`$${id}`)) {
      errors.push(`${interfaceRel}: interface.default_prompt must mention $${id}`);
    }
  }
}

const review = JSON.parse(readFileSync(REVIEW, "utf8"));
const reviewed = [...new Set(review.reviewed_skills ?? [])].sort();
const expected = [...ids].sort();
const missing = expected.filter((id) => !reviewed.includes(id));
const stale = reviewed.filter((id) => !expected.includes(id));
if (missing.length) errors.push(`skill-reviews.json: missing ${missing.join(", ")}`);
if (stale.length) errors.push(`skill-reviews.json: unknown ${stale.join(", ")}`);
if ((review.rubric ?? []).length < 6) errors.push("skill-reviews.json: incomplete legitimacy rubric");

if (errors.length) {
  console.error(`skills INVALID — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`skills OK — ${ids.length} individually reviewed skill(s), all legitimacy checks passed`);
