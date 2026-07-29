#!/usr/bin/env node
// Lints site/examples/<skill-id>.html partials: required sections,
// resolvable links, existing images, style rules. Exit 1 on any error.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(SITE, "..");
const catalog = JSON.parse(readFileSync(join(ROOT, "registry", "catalog.json"), "utf8"));
const skillIds = new Set(catalog.skills.map((s) => s.id));
const projectIds = new Set(catalog.projects.map((p) => p.id));

const dir = join(SITE, "examples");
const errors = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith(".html"))) {
  const id = f.replace(".html", "");
  const t = readFileSync(join(dir, f), "utf8");
  const err = (m) => errors.push(`${f}: ${m}`);

  if (!skillIds.has(id)) err(`no skill named '${id}'`);
  if (!t.includes('class="chatdemo"')) err("missing chatdemo");
  if (!t.includes("application/ld+json")) err("missing FAQ JSON-LD");
  if (!t.includes("details class=\"faq\"") && !t.includes('class="faq"')) err("missing FAQ details");
  const h2s = (t.match(/<h2>/g) || []).length;
  if (h2s < 3) err(`only ${h2s} h2 sections`);
  if (!/Where to go from here/.test(t)) err("missing where-to-next section");

  for (const m of t.matchAll(/href="\/(skills|ideas)\/([a-z0-9-]+)\/"/g)) {
    const [, kind, ref] = m;
    if (kind === "skills" && !skillIds.has(ref)) err(`dead link /skills/${ref}/`);
    if (kind === "ideas" && !projectIds.has(ref)) err(`dead link /ideas/${ref}/`);
  }
  for (const m of t.matchAll(/src="\/assets\/([a-z-]+)\/([a-z0-9-]+)\.(jpg|png)"/g)) {
    if (!existsSync(join(SITE, "assets", m[1], `${m[2]}.${m[3]}`))) err(`missing image ${m[0]}`);
  }
  // em-dashes allowed only inside example-resume-ish content; flag any in prose tags
  for (const m of t.matchAll(/<(p|li|summary)>[^<]*—/g)) {
    err(`em-dash in prose near: ${m[0].slice(0, 60)}`);
  }
  const cms = (t.match(/class="cm cm-(user|agent)/g) || []).length;
  if (cms < 6) err(`chat demo too short (${cms} bubbles)`);
}
if (errors.length) {
  console.error(`examples INVALID — ${errors.length} error(s):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log(`examples OK — ${readdirSync(dir).filter((x) => x.endsWith(".html")).length} partial(s)`);
