#!/usr/bin/env node
// Lints the generated site's search-facing contract: one indexable intent per
// canonical page, bounded metadata, parseable JSON-LD, and exact sitemap cover.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = dirname(fileURLToPath(import.meta.url));
const DIST = join(SITE, "dist");
const SITE_URL = "https://sphinxstack.com";
const errors = [];

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* walk(path);
    else yield path;
  }
}
function attr(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}
function anchorText(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function duplicateValues(items, key) {
  const seen = new Map();
  for (const item of items) {
    const value = item[key];
    if (!value) continue;
    if (!seen.has(value)) seen.set(value, []);
    seen.get(value).push(item.path);
  }
  return [...seen.entries()].filter(([, paths]) => paths.length > 1);
}

if (!existsSync(join(DIST, "seo-manifest.json"))) {
  console.error("SEO INVALID — run `npm run build` before `npm run lint:seo`");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(join(DIST, "seo-manifest.json"), "utf8"));
const htmlFiles = [...walk(DIST)].filter((path) => path.endsWith("/index.html") || path === join(DIST, "index.html"));
const pages = [];
const localLinks = [];

for (const file of htmlFiles) {
  const path = relative(DIST, file);
  const html = readFileSync(file, "utf8");
  const title = attr(html, /<title>([^<]+)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)">/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)">/);
  const ogUrl = attr(html, /<meta property="og:url" content="([^"]+)">/);
  const robots = attr(html, /<meta name="robots" content="([^"]+)">/);
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const parsedSchemas = [];
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    if (match[1].startsWith("/")) {
      localLinks.push({ from: path, href: match[1], anchor: anchorText(match[2]) });
    }
  }

  if (!title) errors.push(`${path}: missing title`);
  if (title.length > 60) errors.push(`${path}: title is ${title.length} characters`);
  if (!description) errors.push(`${path}: missing meta description`);
  if (description.length > 160) errors.push(`${path}: meta description is ${description.length} characters`);
  if (!canonical.startsWith(`${SITE_URL}/`)) errors.push(`${path}: invalid canonical '${canonical}'`);
  if (ogUrl !== canonical) errors.push(`${path}: og:url does not match canonical`);
  if (h1Count !== 1) errors.push(`${path}: expected one h1, found ${h1Count}`);
  if (!robots) errors.push(`${path}: missing robots directive`);
  if (!jsonLdBlocks.length) errors.push(`${path}: missing JSON-LD`);

  for (const block of jsonLdBlocks) {
    try {
      parsedSchemas.push(JSON.parse(block[1]));
    } catch (error) {
      errors.push(`${path}: invalid JSON-LD (${error.message})`);
    }
  }
  const graph = parsedSchemas.find((schema) => Array.isArray(schema["@graph"]))?.["@graph"] ?? [];
  if (!graph.some((node) => node["@type"] === "WebSite")) errors.push(`${path}: JSON-LD graph has no WebSite`);
  if (canonical.includes("/skills/") && canonical !== `${SITE_URL}/skills/`) {
    const howTo = graph.find((node) => node["@type"] === "HowTo");
    if (!howTo) errors.push(`${path}: skill page has no HowTo entity`);
    else if (!Array.isArray(howTo.step) || howTo.step.length < 2) errors.push(`${path}: HowTo has fewer than two visible steps`);
    if (!graph.some((node) => node["@type"] === "BreadcrumbList")) errors.push(`${path}: skill page has no breadcrumbs`);
  }
  if (canonical.includes("/ideas/") && canonical !== `${SITE_URL}/ideas/`) {
    if (!graph.some((node) => node["@type"] === "LearningResource")) errors.push(`${path}: idea page has no LearningResource`);
    if (!graph.some((node) => node["@type"] === "BreadcrumbList")) errors.push(`${path}: idea page has no breadcrumbs`);
  }

  pages.push({ path, title, description, canonical, robots });
}

for (const { from, href } of localLinks) {
  const pathname = decodeURIComponent(href.split(/[?#]/)[0]);
  const target = pathname.endsWith("/")
    ? join(DIST, pathname, "index.html")
    : join(DIST, pathname);
  if (!existsSync(target)) errors.push(`${from}: broken local link '${href}'`);
}

if (manifest.pages.length !== pages.length) {
  errors.push(`manifest has ${manifest.pages.length} pages but build has ${pages.length} HTML pages`);
}
for (const [value, paths] of duplicateValues(pages, "title")) {
  errors.push(`duplicate title '${value}' on ${paths.join(", ")}`);
}
for (const [value, paths] of duplicateValues(pages, "canonical")) {
  errors.push(`duplicate canonical '${value}' on ${paths.join(", ")}`);
}
for (const [value, paths] of duplicateValues(
  manifest.pages.filter((page) => page.indexable),
  "target_query",
)) {
  errors.push(`duplicate target query '${value}' on ${paths.join(", ")}`);
}

const pagesByCanonical = new Map(pages.map((page) => [page.canonical, page]));
for (const entry of manifest.pages) {
  const page = pagesByCanonical.get(entry.canonical);
  if (!page) {
    errors.push(`manifest canonical missing from HTML: ${entry.canonical}`);
    continue;
  }
  if (entry.indexable && !entry.target_query) errors.push(`${page.path}: indexable page has no target query`);
  if (entry.indexable && !entry.title.toLowerCase().includes(entry.target_query.toLowerCase())) {
    errors.push(`${page.path}: title does not contain its target query '${entry.target_query}'`);
  }
  if (/^\d+\b/.test(entry.title)) errors.push(`${page.path}: title starts with a changing inventory count`);
  if (entry.title.includes("…") || entry.title.includes("...")) {
    errors.push(`${page.path}: title is mechanically clipped`);
  }
  if (entry.indexable && !page.robots.startsWith("index,")) errors.push(`${page.path}: expected index directive`);
  if (!entry.indexable && !page.robots.startsWith("noindex,")) errors.push(`${page.path}: expected noindex directive`);
}

function filePathToRoute(file) {
  const normalized = file.replaceAll("\\", "/");
  if (normalized === "index.html") return "/";
  return `/${normalized.replace(/index\.html$/, "")}`;
}
const indexablePaths = new Set(manifest.pages.filter((page) => page.indexable).map((page) => page.path));
const inboundSources = new Map([...indexablePaths].map((path) => [path, new Set()]));
const outboundTargets = new Map([...indexablePaths].map((path) => [path, new Set()]));
for (const { from, href, anchor } of localLinks) {
  const source = filePathToRoute(from);
  const target = decodeURIComponent(href.split(/[?#]/)[0]);
  if (!indexablePaths.has(source) || !indexablePaths.has(target) || source === target) continue;
  inboundSources.get(target).add(source);
  outboundTargets.get(source).add(target);
  if (/^(click here|here|learn more|read more|more)$/i.test(anchor)) {
    errors.push(`${from}: generic internal anchor '${anchor}' points to '${target}'`);
  }
}
for (const entry of manifest.pages.filter((page) => page.indexable)) {
  const isSkillDetail = /^\/skills\/[^/]+\/$/.test(entry.path);
  const isIdeaDetail = /^\/ideas\/[^/]+\/$/.test(entry.path);
  if (!isSkillDetail && !isIdeaDetail) continue;
  const inboundCount = inboundSources.get(entry.path).size;
  if (inboundCount < 3) errors.push(`${entry.path}: only ${inboundCount} internal page(s) link here`);
  const familyPrefix = isSkillDetail ? "/skills/" : "/ideas/";
  const relatedCount = [...outboundTargets.get(entry.path)]
    .filter((target) => target.startsWith(familyPrefix) && target !== familyPrefix).length;
  if (relatedCount < 2) errors.push(`${entry.path}: fewer than two contextual ${familyPrefix.slice(1, -1)} links`);
  if (isIdeaDetail) {
    const skillLinks = [...outboundTargets.get(entry.path)]
      .filter((target) => /^\/skills\/[^/]+\/$/.test(target)).length;
    if (skillLinks < 1) errors.push(`${entry.path}: project brief has no contextual skill link`);
  }
}

const sitemapIndex = readFileSync(join(DIST, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== 3) errors.push(`sitemap index has ${sitemapUrls.length} child sitemaps`);
const listedCanonicals = [];
for (const url of sitemapUrls) {
  const prefix = `${SITE_URL}/`;
  if (!url.startsWith(prefix)) {
    errors.push(`external sitemap URL: ${url}`);
    continue;
  }
  const file = join(DIST, url.slice(prefix.length));
  if (!existsSync(file)) {
    errors.push(`missing child sitemap: ${url}`);
    continue;
  }
  const xml = readFileSync(file, "utf8");
  listedCanonicals.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
}
const expectedCanonicals = manifest.pages.filter((page) => page.indexable).map((page) => page.canonical).sort();
const actualCanonicals = [...new Set(listedCanonicals)].sort();
if (listedCanonicals.length !== actualCanonicals.length) errors.push("child sitemaps contain duplicate URLs");
if (JSON.stringify(expectedCanonicals) !== JSON.stringify(actualCanonicals)) {
  errors.push(`sitemap coverage mismatch: expected ${expectedCanonicals.length}, found ${actualCanonicals.length}`);
}
if (actualCanonicals.some((url) => url.endsWith(".md"))) errors.push("raw Markdown URL found in sitemap");

const robots = readFileSync(join(DIST, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) errors.push("robots.txt has no sitemap");
if (!robots.includes("User-agent: Googlebot\nDisallow: /*.md$")) errors.push("robots.txt does not protect raw Markdown from Googlebot");
if (!robots.includes("User-agent: *\nAllow: /")) errors.push("robots.txt does not allow general crawling");

if (errors.length) {
  console.error(`SEO INVALID — ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `SEO OK — ${manifest.indexable_pages} indexable page(s), ${manifest.excluded_pages.length} excluded, 3 exact child sitemaps`,
);
