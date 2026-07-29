#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(join(ROOT, "registry", "catalog.json"), "utf8"));
const cases = JSON.parse(readFileSync(join(ROOT, "registry", "advanced-skill-tests.json"), "utf8"));
const caseById = new Map(cases.map((item) => [item.id, item]));
const advanced = catalog.skills.filter((skill) => skill.level === "advanced");
const errors = [];

function plain(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

for (const skill of advanced) {
  const test = caseById.get(skill.id);
  const text = readFileSync(join(ROOT, skill.path), "utf8");
  const examplePath = join(ROOT, "site", "examples", `${skill.id}.html`);
  let example = "";
  try { example = readFileSync(examplePath, "utf8"); } catch {}
  const body = text.toLowerCase();
  const done = (text.match(/\n## Done\n([\s\S]*?)(?=\n##\s|$)/)?.[1] ?? "").toLowerCase();
  const exampleText = plain(example);

  if (!test) errors.push(`${skill.id}: no forward-test case`);
  for (const heading of ["When to use", "Preconditions", "Procedure", "Failure plan", "Done"]) {
    if (!text.includes(`\n## ${heading}\n`)) errors.push(`${skill.id}: missing ## ${heading}`);
  }
  if (!example.includes('class="advanced-case"')) errors.push(`${skill.id}: worked example is not marked as an advanced case`);
  const faqCount = (example.match(/<details class="faq">/g) ?? []).length;
  if (faqCount !== 5) errors.push(`${skill.id}: worked example must contain exactly five FAQs`);
  if (!test) continue;
  if (!exampleText.includes(test.trigger.toLowerCase())) errors.push(`${skill.id}: example does not exercise its recorded trigger`);
  for (const term of test.must_cover) {
    if (!body.includes(term.toLowerCase())) errors.push(`${skill.id}: procedure does not cover '${term}'`);
  }
  for (const evidence of test.expected_evidence) {
    const normalized = evidence.toLowerCase();
    if (!done.includes(normalized)) errors.push(`${skill.id}: Done does not name '${evidence}'`);
    if (!exampleText.includes(normalized)) errors.push(`${skill.id}: worked case does not show '${evidence}'`);
  }
}

for (const test of cases) {
  if (!advanced.some((skill) => skill.id === test.id)) errors.push(`${test.id}: forward test is not assigned to an advanced skill`);
}

if (errors.length) {
  console.error(`advanced skills INVALID — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`advanced skills OK — ${advanced.length} realistic trigger, failure, and evidence contract(s) passed`);
