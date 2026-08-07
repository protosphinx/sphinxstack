#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(SITE, "dist", "beta", "index.html");
const scriptPath = join(SITE, "dist", "assets", "beta-application.js");
const errors = [];

if (!existsSync(htmlPath)) errors.push("missing generated /beta/ page");
if (!existsSync(scriptPath)) errors.push("missing generated beta application script");

if (!errors.length) {
  const html = readFileSync(htmlPath, "utf8");
  const script = readFileSync(scriptPath, "utf8");

  const requiredHtml = [
    'data-beta-form',
    'data-quiz-start',
    'name="quiz_answers"',
    'name="quiz_duration_seconds"',
    'name="quiz_tab_switches"',
    'name="internship_interest"',
    'name="contact_consent"',
    'src="/assets/beta-application.js?',
  ];
  for (const marker of requiredHtml) {
    if (!html.includes(marker)) errors.push(`generated beta page is missing ${marker}`);
  }
  if (html.includes("{{BETA_FORM_ENDPOINT}}")) {
    errors.push("beta form endpoint template marker was not replaced");
  }
  if (!/<meta name="robots" content="noindex, follow">/.test(html)) {
    errors.push("beta application must remain noindex");
  }

  const questionCount = (script.match(/\bid:\s*"[^"]+"/g) ?? []).length;
  if (questionCount !== 5) errors.push(`expected 5 quiz questions, found ${questionCount}`);
  if (!script.includes("durationSeconds = 60")) errors.push("quiz timer must remain 60 seconds");
  if (!script.includes('document.addEventListener("visibilitychange"')) {
    errors.push("quiz must record tab visibility changes");
  }
}

if (errors.length) {
  console.error(`BETA INVALID — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("BETA OK — short application, 5-question tooling check, 60-second timer");
