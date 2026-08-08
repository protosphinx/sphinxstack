#!/usr/bin/env node
// Static site generator: skills catalog + idea bank -> dist/
// Skill pages are the product: what your agent can do with this skill,
// plus the install one-liner and the full copyable skill text.
// Raw endpoints: /skills/<id>.md and /ideas/<id>.md (also /projects/<id>.md
// for compatibility with already-spawned repos).

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { Resvg } from "@resvg/resvg-js";
import { skillThumb } from "./thumbs.mjs";

const SITE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(SITE, "..");
const DIST = join(SITE, "dist");

execSync("node " + join(ROOT, "registry", "validate.mjs"), { stdio: "inherit" });
const catalog = JSON.parse(readFileSync(join(ROOT, "registry", "catalog.json"), "utf8"));
const skillStatsSeed = JSON.parse(readFileSync(join(ROOT, "registry", "skill-stats.json"), "utf8"));
const skillRoadmap = JSON.parse(readFileSync(join(ROOT, "registry", "skill-roadmap.json"), "utf8"));

// ---------- minimal markdown (the constrained subset our files use) ----------
function esc(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function escAttr(s) {
  return esc(String(s)).replaceAll('"', "&quot;");
}
function inline(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/(^|\s)(https?:\/\/[^\s<]+[^\s<.,)])/g, '$1<a href="$2">$2</a>');
}
function markdownTableCells(line) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}
function isMarkdownTableDivider(line) {
  if (!line?.includes("|")) return false;
  const cells = markdownTableCells(line);
  return cells.length >= 2 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}
function md(text) {
  const lines = text.split("\n");
  const out = [];
  let list = null;
  let listItemOpen = false;
  let para = [];
  const flushPara = () => {
    if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; }
  };
  const flushList = () => {
    if (listItemOpen) { out.push("</li>"); listItemOpen = false; }
    if (list) { out.push(`</${list}>`); list = null; }
  };
  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trimEnd();
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    const ul = line.match(/^-\s+(.*)$/);
    const ol = line.match(/^\d+\.\s+(.*)$/);
    const cont = line.match(/^\s{2,}(\S.*)$/);
    if (line.includes("|") && isMarkdownTableDivider(lines[index + 1])) {
      flushPara(); flushList();
      const headings = markdownTableCells(line);
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes("|")) {
        rows.push(markdownTableCells(lines[index]));
        index += 1;
      }
      index -= 1;
      out.push(`<div class="table-scroll"><table class="plain-table skill-source-table">
<thead><tr>${headings.map((cell) => `<th scope="col">${inline(cell)}</th>`).join("")}</tr></thead>
<tbody>${rows.map((cells) => `<tr>${headings.map((_, column) => `<td>${inline(cells[column] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody>
</table></div>`);
    } else if (h) {
      flushPara(); flushList();
      const n = Math.max(2, h[1].length);
      out.push(`<h${n}>${inline(h[2])}</h${n}>`);
    } else if (ul) {
      flushPara();
      if (list !== "ul") { flushList(); out.push("<ul>"); list = "ul"; }
      if (listItemOpen) out.push("</li>");
      out.push(`<li>${inline(ul[1])}`);
      listItemOpen = true;
    } else if (ol) {
      flushPara();
      if (list !== "ol") { flushList(); out.push("<ol>"); list = "ol"; }
      if (listItemOpen) out.push("</li>");
      out.push(`<li>${inline(ol[1])}`);
      listItemOpen = true;
    } else if (cont && list) {
      out[out.length - 1] += " " + inline(cont[1]);
    } else if (!line.trim()) {
      flushPara(); flushList();
    } else {
      if (list) flushList();
      para.push(line.trim());
    }
  }
  flushPara(); flushList();
  return out.join("\n");
}
const bodyOf = (path) => readFileSync(join(ROOT, path), "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
const fullText = (path) => readFileSync(join(ROOT, path), "utf8");
function firstSentence(mdText, section) {
  const m = mdText.match(new RegExp(`\\n## ${section}\\n+([^\\n]+(?:\\n[^\\n#-][^\\n]*)*)`));
  if (!m) return "";
  const para = m[1].replace(/\n/g, " ");
  const s = para.match(/^.*?[.!?](?=\s|$)/);
  return s ? s[0] : para;
}

// ---------- page shell ----------
const COPY_JS = `<script>
document.addEventListener("click", (e) => {
  const share = e.target.closest("[data-share]");
  if (share) {
    const payload = { title: share.dataset.shareTitle, url: share.dataset.shareUrl };
    const original = share.textContent;
    const copied = () => {
      share.textContent = "link copied";
      setTimeout(() => (share.textContent = original), 1400);
    };
    if (navigator.share) {
      navigator.share(payload).catch((error) => {
        if (error.name !== "AbortError" && navigator.clipboard) {
          navigator.clipboard.writeText(payload.url).then(copied);
        }
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(payload.url).then(copied);
    }
    return;
  }
  const b = e.target.closest("[data-copy]");
  if (b) {
    const src = document.getElementById(b.dataset.copy);
    navigator.clipboard.writeText(src.textContent).then(() => {
      const t = b.textContent; b.textContent = "copied"; setTimeout(() => (b.textContent = t), 1200);
    });
    return;
  }
  const next = e.target.closest(".cd-next");
  if (next) {
    const demo = next.closest(".chatdemo");
    const hidden = demo.querySelectorAll(".cm.cd-hide");
    if (hidden.length) {
      hidden[0].classList.remove("cd-hide");
      if (hidden.length > 1 && hidden[1].classList.contains("cm-agent")) hidden[1].classList.remove("cd-hide");
      if (!demo.querySelectorAll(".cm.cd-hide").length) next.textContent = "Restart";
    } else {
      demo.querySelectorAll(".cm").forEach((m, i) => { if (i > 1) m.classList.add("cd-hide"); });
      next.textContent = "Next \\u2192";
    }
    return;
  }
  const tb = e.target.closest(".tabbtn");
  if (tb) {
    const bar = tb.closest(".tabbar");
    bar.querySelectorAll(".tabbtn").forEach((x) => x.classList.remove("on"));
    tb.classList.add("on");
    let el = bar.nextElementSibling;
    while (el && el.classList.contains("tabpane")) {
      el.classList.toggle("cd-hide", el.id !== tb.dataset.tab);
      el = el.nextElementSibling;
    }
  }
});
</script>`;

const SITE_URL = "https://sphinxstack.com";
const BETA_FORM_ENDPOINT = (process.env.SPHINXSTACK_BETA_ENDPOINT ?? "").trim();
if (
  BETA_FORM_ENDPOINT
  && !BETA_FORM_ENDPOINT.startsWith("/")
  && !BETA_FORM_ENDPOINT.startsWith("https://")
) {
  throw new Error("SPHINXSTACK_BETA_ENDPOINT must be a root-relative path or an https URL");
}
const SEARCH_TITLE_MAX = 60;
const META_DESCRIPTION_MAX = 160;
const CSS_HASH = createHash("sha256").update(readFileSync(join(SITE, "style.css"))).digest("hex").slice(0, 10);
const assetHashCache = new Map();
function clipSearchText(text, max) {
  const clean = plainCardText(text);
  if (clean.length <= max) return clean;
  const clipped = clean.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > max * 0.7 ? lastSpace : clipped.length).replace(/[\s,;:.!?-]+$/g, "")}…`;
}
function searchTitle(primary, suffix = " | sphinxstack") {
  const clean = plainCardText(primary);
  if (`${clean}${suffix}`.length <= SEARCH_TITLE_MAX) return `${clean}${suffix}`;
  if (clean.length <= SEARCH_TITLE_MAX) return clean;
  throw new Error(`search title exceeds ${SEARCH_TITLE_MAX} characters: ${clean}`);
}
function searchDescription(text) {
  const clean = plainCardText(text);
  if (clean.length <= META_DESCRIPTION_MAX) return clean;
  const withoutTrigger = clean.replace(/\s+Use when\b[\s\S]*$/i, "");
  if (withoutTrigger.length >= 70 && withoutTrigger.length <= META_DESCRIPTION_MAX) return withoutTrigger;
  return clipSearchText(withoutTrigger, META_DESCRIPTION_MAX);
}
function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;
}
function pageSchema({ canonical, title, desc, pageType, breadcrumbs, mainEntity, image }) {
  const pageId = `${canonical}#webpage`;
  const websiteId = `${SITE_URL}/#website`;
  const graph = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE_URL}/`,
      name: "sphinxstack",
      description: "A free library of reusable skills and project briefs for AI agents.",
      inLanguage: "en",
    },
    {
      "@type": pageType,
      "@id": pageId,
      url: canonical,
      name: title,
      description: desc,
      isPartOf: { "@id": websiteId },
      inLanguage: "en",
      ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
    },
  ];
  if (breadcrumbs?.length) {
    const breadcrumbId = `${canonical}#breadcrumb`;
    graph[1].breadcrumb = { "@id": breadcrumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    });
  }
  if (mainEntity) {
    const entity = { ...mainEntity, "@id": mainEntity["@id"] ?? `${canonical}#main-entity` };
    graph[1].mainEntity = { "@id": entity["@id"] };
    graph.push(entity);
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
function assetHash(webPath) {
  if (assetHashCache.has(webPath)) return assetHashCache.get(webPath);
  let h = "";
  try {
    h = createHash("sha256").update(readFileSync(join(SITE, webPath.replace(/^\/assets/, "assets")))).digest("hex").slice(0, 8);
  } catch {}
  assetHashCache.set(webPath, h);
  return h;
}
function hashAssets(html) {
  return html.replace(/(src=")(\/assets\/[^"?]+)(")/g, (m, a, path, z) => {
    const h = assetHash(path);
    return h ? a + path + "?v=" + h + z : m;
  });
}

// ---------- social cards: inspectable files, rendered from catalog data -------
function plainCardText(text) {
  return String(text ?? "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function summarySentence(text) {
  const clean = plainCardText(text).replace(/\s+Use when[\s\S]*$/i, "");
  const match = clean.match(/^.*?[.!?](?:\s|$)/);
  return (match ? match[0] : clean).trim();
}
function trimLine(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, Math.max(1, max - 1)).replace(/[\s,;:.!?-]+$/g, "") + "…";
}
function wrapCardText(text, max = 26, limit = 3) {
  const words = plainCardText(text).split(" ").filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = (cur + " " + w).trim();
    if (next.length > max && cur) {
      lines.push(cur);
      cur = w;
      if (lines.length === limit) break;
    } else cur = next;
  }
  if (cur && lines.length < limit) lines.push(cur);
  if (words.join(" ").length > lines.join(" ").length && lines.length) {
    lines[lines.length - 1] = trimLine(lines[lines.length - 1], max);
  }
  return lines;
}
function estimatedTitleWidth(text, fontSize) {
  let units = 0;
  for (const char of text) {
    if (/\s/.test(char)) units += 0.3;
    else if (/[ilI1.,'`:;]/.test(char)) units += 0.32;
    else if (/[tfrj]/.test(char)) units += 0.42;
    else if (/[MW@%&]/.test(char)) units += 0.9;
    else if (/[A-Z0-9]/.test(char)) units += 0.72;
    else units += 0.61;
  }
  return units * fontSize;
}
function wrapTitleToWidth(text, fontSize, maxWidth, limit) {
  const words = plainCardText(text).split(" ").filter(Boolean);
  const lines = [];
  let current = "";
  let usedWords = 0;
  for (const word of words) {
    const next = (current + " " + word).trim();
    if (current && estimatedTitleWidth(next, fontSize) > maxWidth) {
      lines.push(current);
      if (lines.length === limit) return { lines, complete: false };
      current = word;
      usedWords += 1;
    } else {
      current = next;
      usedWords += 1;
    }
  }
  if (current && lines.length < limit) lines.push(current);
  const complete = usedWords === words.length && lines.every((line) => estimatedTitleWidth(line, fontSize) <= maxWidth);
  return { lines, complete };
}
function svgLines(lines, { x, y, lineHeight, className }) {
  return `<text x="${x}" y="${y}" class="${className}">${lines
    .map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${esc(line)}</tspan>`)
    .join("")}</text>`;
}
function heroOgSVG(card) {
  const summaryLines = wrapCardText(card.summary, 65, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<style>
  .tile { font-family: Menlo, Consolas, monospace; font-size: 22px; font-weight: 700; }
  .brand { font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: -0.035em; }
  .hero-title { font-family: Georgia, "Times New Roman", serif; font-size: 112px; font-weight: 400; letter-spacing: -0.05em; }
  .hero-summary { font-family: Georgia, "Times New Roman", serif; font-size: 30px; font-weight: 400; }
</style>
<rect width="1200" height="630" fill="#ffffff"/>
<rect x="60" y="48" width="58" height="58" fill="#202122"/>
<text x="89" y="85" class="tile" fill="#ffffff" text-anchor="middle">sx</text>
<text x="142" y="91" class="brand" fill="#202122">sphinxstack.com</text>
<text x="58" y="302" class="hero-title" fill="#202122">${esc(card.title)}</text>
${svgLines(summaryLines, { x: 62, y: 382, lineHeight: 48, className: "hero-summary" })}
<line x1="60" y1="548" x2="1140" y2="548" stroke="#c8ccd1"/>
</svg>`;
}
function ogSVG(card) {
  if (card.layout === "hero") return heroOgSVG(card);
  const titleFits = [
    { fontSize: 76, limit: 1 },
    { fontSize: 66, limit: 1 },
    { fontSize: 66, limit: 2 },
    { fontSize: 56, limit: 3 },
  ].map((candidate) => ({
    ...candidate,
    ...wrapTitleToWidth(card.title, candidate.fontSize, 690, candidate.limit),
  }));
  const chosenTitle = titleFits.find((candidate) => candidate.complete) ?? titleFits.at(-1);
  if (!chosenTitle.complete) throw new Error(`share card title does not fit: ${card.title}`);
  const titleLines = chosenTitle.lines;
  const titleSize = chosenTitle.fontSize;
  const titleLineHeight = Math.round(titleSize * 1.06);
  const summaryY = 216 + titleLines.length * titleLineHeight + 28;
  const summaryLines = wrapCardText(card.summary, 48, 3);
  const panelItems = (card.panelItems ?? []).slice(0, 3);
  let panelY = 205;
  const panel = panelItems.map((item) => {
    const lines = wrapCardText(item, 27, 3);
    const block = `<rect x="856" y="${panelY - 15}" width="8" height="8" fill="#0645ad"/>
${svgLines(lines, { x: 882, y: panelY, lineHeight: 25, className: "panel-copy" })}`;
    panelY += Math.max(58, lines.length * 25 + 31);
    return block;
  }).join("\n");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<style>
  .utility { font: 600 18px Menlo, Consolas, monospace; letter-spacing: 0.04em; }
  .brand { font: 700 28px Helvetica, Arial, sans-serif; }
  .eyebrow { font: 600 19px Menlo, Consolas, monospace; letter-spacing: 0.045em; }
  .title { font-family: Georgia, "Times New Roman", serif; font-size: ${titleSize}px; font-weight: 700; letter-spacing: -0.025em; }
  .summary { font: 400 27px Helvetica, Arial, sans-serif; }
  .panel-title { font: 600 17px Menlo, Consolas, monospace; letter-spacing: 0.045em; }
  .panel-copy { font: 400 21px Helvetica, Arial, sans-serif; }
  .footer { font: 500 18px Menlo, Consolas, monospace; letter-spacing: 0.025em; }
</style>
<rect width="1200" height="630" fill="#ffffff"/>
<rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#c8ccd1"/>
<rect x="60" y="46" width="176" height="52" fill="#202122"/>
<text x="78" y="80" class="utility" fill="#ffffff">sx / ${esc(card.tab)}</text>
<text x="260" y="82" class="brand" fill="#202122">sphinxstack</text>
<text x="1140" y="80" class="utility" fill="#54595d" text-anchor="end">${esc(card.kind)}</text>
<line x1="60" y1="116" x2="1140" y2="116" stroke="#c8ccd1"/>
<line x1="60" y1="116" x2="60" y2="548" stroke="#0645ad" stroke-width="6"/>
<text x="92" y="166" class="eyebrow" fill="#0645ad">${esc(card.eyebrow.toUpperCase())}</text>
${svgLines(titleLines, { x: 88, y: 224, lineHeight: titleLineHeight, className: "title" })}
${svgLines(summaryLines, { x: 92, y: summaryY, lineHeight: 36, className: "summary" })}
<line x1="818" y1="154" x2="818" y2="516" stroke="#c8ccd1"/>
<text x="856" y="166" class="panel-title" fill="#54595d">${esc(card.panelTitle.toUpperCase())}</text>
${panel}
<line x1="60" y1="548" x2="1140" y2="548" stroke="#c8ccd1"/>
<text x="60" y="590" class="footer" fill="#54595d">${esc(card.footer)}</text>
<text x="1140" y="590" class="footer" fill="#0645ad" text-anchor="end">sphinxstack.com</text>
</svg>`;
}
const OG_DIR = join(DIST, "og");
const ogFontFiles = [
  "/System/Library/Fonts/Helvetica.ttc",
  "/System/Library/Fonts/Menlo.ttc",
  "/System/Library/Fonts/Supplemental/Georgia.ttf",
  "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
].filter(existsSync);
const ogFonts = {
  loadSystemFonts: ogFontFiles.length === 0,
  fontFiles: ogFontFiles,
};
const ogCards = [];
const builtPages = [];
let defaultOgImage = "";
function renderOg(slug, card) {
  mkdirSync(OG_DIR, { recursive: true });
  const svg = ogSVG(card);
  const png = new Resvg(svg, { font: ogFonts, fitTo: { mode: "width", value: 1200 } }).render().asPng();
  const hash = createHash("sha256").update(png).digest("hex").slice(0, 10);
  const filename = `${slug}.${hash}.png`;
  writeFileSync(join(OG_DIR, filename), png);
  const url = `${SITE_URL}/og/${filename}`;
  ogCards.push({ slug, url, kind: card.kind, title: card.title, width: 1200, height: 630 });
  return url;
}
function page({
  title,
  metaTitle = title,
  desc,
  path,
  content,
  crumb,
  breadcrumbs = [],
  ogImage,
  ogImageAlt,
  shareLabel,
  shareTitle,
  wide,
  indexable = true,
  pageType = "WebPage",
  mainEntity,
  targetQuery,
}) {
  const canon = path === "." ? "/" : `/${path.replace(/\/index\.html$/, "")}/`;
  const canonical = `${SITE_URL}${canon}`;
  const og = ogImage ?? defaultOgImage;
  const ogAlt = ogImageAlt ?? `${shareTitle ?? title} — sphinxstack share card`;
  const shareVersion = og.match(/\.([a-f0-9]{10})\.png$/)?.[1];
  const shareUrl = `${canonical}${shareVersion ? `?share=${shareVersion}` : ""}`;
  const finalTitle = searchTitle(metaTitle, "");
  const finalDesc = searchDescription(desc);
  const schema = pageSchema({
    canonical,
    title: finalTitle,
    desc: finalDesc,
    pageType,
    breadcrumbs,
    mainEntity,
    image: og,
  });
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(finalTitle)}</title>
<meta name="description" content="${escAttr(finalDesc)}">
<meta name="robots" content="${indexable ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, follow"}">
<meta name="theme-color" content="#202122">
<meta property="og:site_name" content="sphinxstack">
<meta property="og:title" content="${escAttr(title)}">
<meta property="og:description" content="${escAttr(finalDesc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta property="og:image:secure_url" content="${og}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escAttr(ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escAttr(title)}">
<meta name="twitter:description" content="${escAttr(finalDesc)}">
<meta name="twitter:image" content="${og}">
<meta name="twitter:image:alt" content="${escAttr(ogAlt)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="stylesheet" href="/style.css?v=${CSS_HASH}">
${jsonLd(schema)}
</head>
<body${path === "." ? ' class="home-page"' : path === "beta" ? ' class="beta-page"' : path === "partmode" ? ' class="partmode-page"' : path.startsWith("skills/") ? ' class="skill-page"' : ""}>
<header><div class="wrap">
<a class="wordmark" href="/"><span class="tile">sx</span>sphinxstack</a>
<nav><a href="/skills/">skills</a> <a href="/ideas/">projects</a> <a href="/brain/">brain</a> <a href="/setup/">use a skill</a> <a href="/about/">about</a></nav>
</div></header>
<main class="wrap${wide ? "" : " article"}">
${crumb || shareLabel ? `<div class="page-meta">
${crumb ? `<p class="crumb">${crumb}</p>` : "<span></span>"}
${shareLabel ? `<button class="share-link" type="button" data-share data-share-title="${escAttr(shareTitle ?? title)}" data-share-url="${shareUrl}">${esc(shareLabel)}</button>` : ""}
</div>` : ""}
${content}
</main>
<footer><div class="wrap">
sphinxstack · skills for your agent · <a href="/about/">about</a> ·
<a href="/graph/">skills and graphs</a> ·
<a href="/partmode/">PartMode MCP</a> ·
<a href="https://github.com/protosphinx/sphinxstack">source</a>
</div></footer>
${COPY_JS}
${content.includes("data-skill-stats") ? skillStatsScript() : ""}
</body>
</html>
`;
  const file = path.endsWith(".html") ? join(DIST, path) : join(DIST, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, hashAssets(html));
  builtPages.push({
    path: canon,
    canonical,
    title: finalTitle,
    description: finalDesc,
    targetQuery: targetQuery ?? "",
    indexable,
    shareUrl,
    image: og,
    imageAlt: ogAlt,
  });
}

// ---------- build ----------
rmSync(DIST, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
mkdirSync(DIST, { recursive: true });
cpSync(join(SITE, "style.css"), join(DIST, "style.css"));
cpSync(join(SITE, "favicon.svg"), join(DIST, "favicon.svg"));
if (existsSync(join(SITE, "assets"))) cpSync(join(SITE, "assets"), join(DIST, "assets"), { recursive: true });
const { skills, projects } = catalog;
defaultOgImage = renderOg("site", {
  layout: "hero",
  kind: "SKILL LIBRARY",
  title: "No skill issues.",
  summary: "A website, a database, a job search, the resume at the end. Each one can be a skill your agent knows how to follow.",
});

const SAY = {
  "build-resume": "build my resume",
  "build-website": "build me a website for …",
  "build-web-app": "build an app that …",
  "ship-on-github": "get me set up on GitHub",
};
const CATEGORY_META = [
  ["resume", "Resume"],
  ["get-hired", "Job hunt"],
  ["code", "Code"],
  ["web", "Web"],
  ["start", "Start something"],
  ["write", "Writing"],
  ["design", "Design"],
  ["media", "Video & audio"],
  ["data", "Data"],
  ["money", "Money"],
  ["school", "School & college"],
  ["business", "Running a business"],
];
const LEVEL_META = [
  ["starter", "Starter", "One bounded artifact and a short feedback loop.", "A finished artifact and a direct check."],
  ["working", "Working", "An existing project and several connected decisions.", "A working change, cross-part checks, and a clear handoff."],
  ["advanced", "Advanced", "Production risk, architecture, security, reliability, or data integrity.", "A decision record, failure rehearsal, and recovery evidence."],
];
const byCategory = new Map(CATEGORY_META.map(([id]) => [id, []]));
for (const s of skills) (byCategory.get(s.category) ?? byCategory.set(s.category, []).get(s.category)).push(s);
const TITLE_OVERRIDES = {
  "build-resume": "Build a resume",
  "build-website": "Build a website",
  "build-web-app": "Build a web app",
  "ship-on-github": "Ship on GitHub",
  "first-sql": "First SQL",
  "seo-basics": "SEO basics",
  "linkedin-profile": "LinkedIn profile",
  "publish-to-youtube": "Publish to YouTube",
  "use-an-api": "Use an API",
  "design-an-api-contract": "Design an API contract",
  "design-a-cli": "Design a CLI",
  "define-an-mvp": "Define an MVP",
  "document-an-api-example": "Document an API example",
  "deprecate-an-api": "Deprecate an API",
  "maintain-a-public-api": "Maintain a public API",
  "evaluate-an-ai-system": "Evaluate an AI system",
  "start-a-youtube-channel": "Start a YouTube channel",
  "readme-that-sells": "A README that sells",
  "build-a-customer-faq": "Build a customer FAQ",
  "mockup-in-figma": "Mock it up in Figma",
  "apply-to-college-system": "College application system",
  "negotiate-first-offer": "Negotiate a first offer",
  "sell-online-basics": "Sell something online",
  "ask-for-recommendation": "Ask for a recommendation",
  "tailor-resume": "Tailor your resume",
  "connect-partmode-to-an-agent": "Connect PartMode to an agent",
  "edit-cad-in-partmode": "Edit CAD in PartMode",
  "export-cad-from-partmode": "Export CAD from PartMode",
  "get-started-with-partmode": "Get started with PartMode",
  "sketch-and-dimension-in-partmode": "Sketch and dimension in PartMode",
  "extrude-a-part-in-partmode": "Extrude a part in PartMode",
  "cut-a-part-in-partmode": "Cut a part in PartMode",
  "revolve-a-part-in-partmode": "Revolve a part in PartMode",
  "use-parameters-in-partmode": "Use parameters in PartMode",
  "inspect-and-measure-in-partmode": "Inspect and measure in PartMode",
  "assign-material-and-check-mass-in-partmode": "Assign material and check mass in PartMode",
  "create-configurations-in-partmode": "Create configurations in PartMode",
  "create-a-drawing-in-partmode": "Create a drawing in PartMode",
  "import-a-step-file-in-partmode": "Import a STEP file in PartMode",
  "prepare-a-part-for-3d-printing-in-partmode": "Prepare a part for 3D printing in PartMode",
};
function titleOf(id) {
  if (TITLE_OVERRIDES[id]) return TITLE_OVERRIDES[id];
  const t = id.replaceAll("-", " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const SKILL_QUERY_OVERRIDES = {
  "connect-partmode-to-an-agent": "how to connect PartMode MCP to an AI agent",
  "edit-cad-in-partmode": "how to edit CAD with PartMode MCP",
  "export-cad-from-partmode": "how to export STEP and CAD files from PartMode",
  "get-started-with-partmode": "PartMode tutorial for beginners",
  "sketch-and-dimension-in-partmode": "how to sketch and dimension in PartMode",
  "extrude-a-part-in-partmode": "how to extrude a 3D part in PartMode",
  "cut-a-part-in-partmode": "how to cut a hole or pocket in PartMode",
  "revolve-a-part-in-partmode": "how to revolve a part in PartMode",
  "use-parameters-in-partmode": "how to use CAD parameters in PartMode",
  "inspect-and-measure-in-partmode": "how to measure and inspect CAD in PartMode",
  "assign-material-and-check-mass-in-partmode": "how to calculate part mass in PartMode",
  "create-configurations-in-partmode": "how to create part configurations in PartMode",
  "create-a-drawing-in-partmode": "how to create a CAD drawing in PartMode",
  "import-a-step-file-in-partmode": "how to import a STEP file in PartMode",
  "prepare-a-part-for-3d-printing-in-partmode": "how to export PartMode CAD for 3D printing",
  "accessibility-pass": "website accessibility audit with AI",
  "add-analytics": "how to add analytics to a website",
  "add-search-to-a-site": "how to add search to a website",
  "add-structured-logging": "how to add structured logging",
  "analyze-an-experiment": "how to analyze an A/B test",
  "analyze-customer-feedback": "how to analyze customer feedback",
  "apply-for-apprenticeships": "how to find an apprenticeship",
  "apply-for-internships": "how to get an internship with no experience",
  "apply-in-person": "how to apply for a job in person",
  "apply-online": "how to apply for jobs online",
  "apply-to-college-system": "college application tracker",
  "ask-for-recommendation": "how to ask for a letter of recommendation",
  "auth-basics": "how to add authentication to a web app",
  "audit-a-website": "how to audit a website",
  "audit-data-quality": "how to audit data quality",
  "automate-a-task": "how to automate tasks with AI",
  "backend-basics": "how to build a backend with AI",
  "blog-post": "how to write a blog post with AI",
  "brand-kit": "how to create a brand kit with AI",
  "browser-extension": "how to build a browser extension with AI",
  "budget-basics": "how to make a budget with AI",
  "build-a-customer-faq": "how to create a customer FAQ",
  "build-a-game": "how to make a browser game with AI",
  "build-a-sales-pipeline": "how to build a sales pipeline",
  "build-an-achievement-inventory": "how to make a brag document",
  "build-resume": "how to make a resume with AI",
  "build-web-app": "how to build a web app with AI",
  "build-website": "how to build a website with AI",
  "captions-and-subtitles": "how to add captions to a video",
  "chart-the-truth": "how to make a chart with AI",
  "choose-a-major-with-data": "how to choose a college major",
  "clean-a-dataset": "how to clean a dataset with AI",
  "cold-email": "how to write a cold email with AI",
  "cold-outreach-for-work": "how to cold email for a job",
  "college-list": "how to make a college list",
  "compare-pricing-models": "how to choose a pricing model",
  "conduct-user-interviews": "how to conduct user interviews",
  "contribute-to-open-source": "how to contribute to open source",
  "cover-letter": "how to write a cover letter with AI",
  "create-a-design-system": "how to create a design system",
  "create-an-editorial-calendar": "how to create a content calendar",
  "create-a-refund-checklist": "refund process checklist",
  "create-a-support-escalation-policy": "customer support escalation policy",
  "create-a-deployment-pipeline": "how to build a CI/CD pipeline",
  "custom-domain": "how to connect a custom domain",
  "database-basics": "how to build a database with AI",
  "debug-a-bug": "how to debug a software bug",
  "debug-a-production-incident": "how to debug a production incident",
  "decide-with-data": "how to make a decision matrix",
  "define-an-mvp": "how to define an MVP",
  "define-product-metrics": "how to define product metrics",
  "define-support-service-levels": "customer support service level examples",
  "deploy-anywhere": "how to deploy a website for free",
  "design-customer-onboarding": "how to design customer onboarding",
  "design-a-cli": "how to design a command line interface",
  "design-a-data-model": "how to design a database schema",
  "design-a-production-system": "how to design a production system",
  "design-a-user-flow": "how to create a user flow",
  "design-an-error-state": "how to design error messages for apps",
  "design-an-api-contract": "how to design an API contract",
  "design-basics": "graphic design basics for beginners",
  "design-critique": "how to critique a design with AI",
  "design-observability": "how to design observability for a system",
  "edit-a-short": "how to edit a short video",
  "edit-your-own-writing": "how to edit your own writing",
  "email-a-professor": "how to email a professor",
  "evaluate-an-ai-system": "how to evaluate an AI system",
  "exam-prep-plan": "how to make an exam study plan",
  "fact-check-a-draft": "how to fact check an article",
  "find-openings": "how to find jobs near me",
  "first-freelance-gig": "how to get your first freelance client",
  "first-sql": "how to learn SQL with AI",
  "follow-up-after-applying": "how to follow up after applying for a job",
  "forecast-cash-flow": "how to make a cash flow forecast",
  "forecast-a-sales-pipeline": "sales pipeline forecasting method",
  "forms-that-work": "how to add a contact form to a website",
  "get-referred": "how to ask for a job referral",
  "improve-a-conversion-funnel": "how to improve website conversion rate",
  "investigate-a-customer-complaint": "how to investigate a customer complaint",
  "interview-prep": "how to practice for a job interview with AI",
  "invoice-and-get-paid": "how to make an invoice and get paid",
  "job-application-tracker": "how to make a job application tracker",
  "launch-a-product": "how to launch a product",
  "linkedin-profile": "how to improve your LinkedIn profile with AI",
  "logo-basics": "how to make a logo with AI",
  "make-a-thumbnail": "how to make a YouTube thumbnail with AI",
  "make-it-fast": "how to improve website speed",
  "manage-secrets-safely": "how to manage application secrets",
  "map-a-customer-journey": "how to create a customer journey map",
  "measure-support-quality": "customer support quality metrics",
  "migrate-a-database": "how to migrate a database safely",
  "migrate-a-website": "how to migrate a website without losing SEO",
  "mockup-in-figma": "how to make a website mockup in Figma",
  "negotiate-first-offer": "how to negotiate your first job offer",
  "newsletter-issue": "how to write a newsletter with AI",
  "optimize-a-slow-query": "how to optimize a slow SQL query",
  "personal-statement-workshop": "how to write a personal statement",
  "pick-fonts-and-colors": "how to choose fonts and colors for a website",
  "plan-a-group-project": "how to plan a group project",
  "plan-a-literature-review": "how to plan a literature review",
  "plan-a-service-recovery": "customer service recovery plan",
  "plan-a-video-series": "how to plan a video series",
  "podcast-episode": "how to record and publish a podcast",
  "portfolio-page": "how to build a portfolio website with AI",
  "poster-or-flyer": "how to make a poster with AI",
  "prepare-a-live-demo": "how to prepare a product demo",
  "prepare-a-sales-discovery-call": "sales discovery call preparation",
  "prepare-a-performance-review": "how to write a performance self review",
  "prepare-a-portfolio-review": "how to prepare for a portfolio interview",
  "prepare-a-technical-interview": "how to prepare for a technical interview",
  "price-your-work": "how to price freelance work",
  "publish-to-youtube": "how to upload a video to YouTube",
  "qualify-a-sales-lead": "sales lead qualification process",
  "readme-that-sells": "how to write a good README",
  "record-clean-audio": "how to record clean audio at home",
  "reconcile-business-expenses": "how to reconcile business expenses",
  "references-list": "how to make a job reference list",
  "refactor-without-changing-behavior": "how to refactor code safely",
  "research-a-company": "how to research a company for an interview",
  "research-a-sales-account": "how to research a sales account",
  "research-paper-workshop": "how to write a research paper",
  "resume-review": "how to review a resume with AI",
  "review-a-pull-request": "how to review a pull request",
  "run-a-design-handoff": "how to hand off a design to developers",
  "run-a-sales-discovery-call": "how to run a sales discovery call",
  "run-a-support-handoff": "customer support handoff checklist",
  "run-a-load-test": "how to load test a website",
  "run-a-survey": "how to create a survey",
  "run-an-agent-swarm": "how to run multiple AI coding agents",
  "run-a-usability-test": "how to run a usability test",
  "save-for-a-goal": "how to save money for a goal",
  "scope-a-freelance-project": "how to write a freelance project scope",
  "scholarship-search": "how to find scholarships",
  "screen-recording-tutorial": "how to make a screen recording tutorial",
  "sell-online-basics": "how to sell stuff online",
  "seo-basics": "how to get your website on Google",
  "set-up-a-webhook": "how to set up a webhook",
  "ship-a-data-pipeline": "how to build a data pipeline",
  "ship-on-github": "how to publish a website with GitHub Pages",
  "simple-dashboard": "how to build a dashboard with AI",
  "slide-deck": "how to make a presentation with AI",
  "social-post": "how to write a social media post with AI",
  "spreadsheet-basics": "spreadsheet basics for beginners",
  "start-a-club": "how to start a club",
  "start-a-newsletter": "how to start a newsletter with AI",
  "start-a-project": "how to start a coding project",
  "start-a-website": "website project ideas for beginners",
  "start-a-youtube-channel": "how to start a YouTube channel with AI",
  "start-an-app": "app project ideas for beginners",
  "start-selling-something": "what can I sell online to make money",
  "study-system": "how to build a study system",
  "summarize-a-support-ticket": "how to summarize a support ticket",
  "tailor-resume": "how to tailor a resume to a job with AI",
  "threat-model-a-feature": "how to threat model a feature",
  "track-anything": "how to build a personal tracker",
  "triage-support-tickets": "support ticket triage process",
  "train-a-model": "how to train a machine learning model",
  "understand-your-paycheck": "how to read a pay stub",
  "upgrade-a-dependency-safely": "how to upgrade software dependencies safely",
  "use-an-api": "how to use an API with AI",
  "validate-a-product-idea": "how to validate a product idea",
  "video-resume": "how to make a video resume",
  "video-script": "how to write a video script with AI",
  "write-a-case-study": "how to write a portfolio case study",
  "write-a-customer-success-plan": "customer success plan template",
  "write-a-sales-follow-up": "sales follow up email after a meeting",
  "write-a-support-reply": "how to write a customer support response",
  "write-a-technical-tutorial": "how to write a technical tutorial",
  "write-a-test-plan": "how to write a software test plan",
  "write-an-architecture-decision-record": "how to write an architecture decision record",
  "write-clearly": "how to improve your writing with AI",
  "analyze-a-support-backlog": "how to analyze a support ticket backlog",
  "document-a-known-issue": "how to document a known software issue",
  "handle-a-refund-request": "how to process a customer refund",
  "recover-a-failed-onboarding": "customer onboarding recovery plan",
  "write-a-bug-report": "how to write a good bug report",
  "reproduce-a-bug": "how to reproduce a software bug",
  "write-release-notes": "how to write software release notes",
  "create-a-changelog-entry": "how to write a changelog entry",
  "document-an-api-example": "how to write API documentation examples",
  "write-a-runbook-step": "how to write a runbook procedure",
  "review-an-error-message": "how to write better error messages",
  "investigate-a-flaky-test": "how to fix a flaky test",
  "design-a-regression-test": "how to write a regression test",
  "test-a-data-migration": "how to test a data migration",
  "test-an-api-integration": "how to test an API integration",
  "perform-a-dependency-audit": "how to audit software dependencies",
  "remove-dead-code": "how to remove dead code safely",
  "deprecate-an-api": "how to deprecate an API",
  "plan-a-software-release": "software release planning checklist",
  "run-a-release-candidate-test": "release candidate testing checklist",
  "prepare-a-rollback-plan": "software rollback plan template",
  "write-an-operations-runbook": "how to write an operations runbook",
  "document-a-software-architecture": "how to document software architecture",
  "create-a-troubleshooting-guide": "how to write a troubleshooting guide",
  "improve-developer-onboarding": "how to improve developer onboarding",
  "maintain-a-public-api": "how to maintain API backward compatibility",
  "audit-feature-flags": "how to audit feature flags",
  "design-a-disaster-recovery-plan": "how to create a disaster recovery plan",
  "verify-a-backup-restore": "how to test backup and restore",
  "define-a-research-question": "how to write a research question",
  "find-primary-sources": "how to find primary sources",
  "evaluate-source-credibility": "how to evaluate source credibility",
  "build-a-source-log": "how to create a research source log",
  "synthesize-research-evidence": "how to synthesize research evidence",
  "conduct-a-literature-search": "how to conduct a literature search",
  "write-an-annotated-bibliography": "how to write an annotated bibliography",
  "prevent-citation-errors": "how to check citations for accuracy",
  "verify-a-statistical-claim": "how to verify a statistical claim",
  "trace-a-claim-to-its-source": "how to trace a claim to its original source",
  "resolve-conflicting-sources": "how to reconcile conflicting sources",
  "design-a-desk-research-plan": "how to plan desk research",
  "build-a-household-inventory": "how to make a household inventory",
  "evaluate-a-vendor": "how to evaluate vendors",
  "audit-recurring-subscriptions": "how to audit recurring subscriptions",
  "dispute-a-billing-error": "how to dispute a billing error",
  "prepare-an-insurance-claim": "how to prepare an insurance claim",
  "manage-accounts-receivable": "how to manage accounts receivable",
  "design-a-purchase-approval-process": "how to create a purchase approval process",
  "manage-a-business-renewal-calendar": "business contract renewal calendar template",
  "organize-important-documents": "how to organize important documents",
  "create-a-personal-records-system": "how to organize personal records",
  "plan-a-household-move": "how to plan a household move",
  "update-address-and-contact-records": "address change checklist",
  "create-an-emergency-information-file": "emergency information file checklist",
  "write-a-scholarship-essay": "how to write a scholarship essay",
  "prepare-for-a-college-interview": "how to prepare for a college interview",
  "compare-financial-aid-offers": "how to compare financial aid offers",
  "plan-course-registration": "college course registration planning",
  "request-an-academic-reference": "how to ask for an academic reference",
  "build-an-academic-portfolio": "how to create an academic portfolio",
  "prepare-a-research-presentation": "how to prepare a research presentation",
  "appeal-an-academic-decision": "how to write an academic appeal",
  "prepare-for-your-first-day": "how to prepare for your first day at work",
  "write-a-work-status-update": "how to write a work status update",
  "ask-for-feedback-at-work": "how to ask for feedback at work",
  "run-a-one-on-one": "how to run a one-on-one meeting",
  "negotiate-work-priorities": "how to negotiate priorities at work",
  "recover-from-a-work-mistake": "how to recover from a mistake at work",
  "hand-off-a-work-project": "project handoff checklist",
  "document-a-work-process": "how to document a work process",
  "prepare-for-a-probation-review": "how to prepare for a probation review",
  "write-a-professional-bio": "how to write a professional bio",
  "write-a-creative-brief": "how to write a creative brief",
  "plan-a-photo-shoot": "photo shoot planning checklist",
  "build-a-shot-list": "how to make a shot list",
  "manage-creative-feedback": "how to manage creative feedback",
  "prepare-artwork-for-delivery": "artwork preflight checklist",
  "direct-a-voice-recording": "how to direct a voice recording session",
  "create-a-content-style-guide": "how to create a content style guide",
  "prepare-a-meeting-agenda": "how to write a meeting agenda",
  "write-meeting-notes": "how to write meeting notes",
  "record-a-work-decision": "how to document a business decision",
  "run-a-daily-standup": "how to run a daily standup",
  "prepare-a-project-kickoff": "project kickoff checklist",
  "prepare-an-executive-briefing": "how to prepare an executive briefing",
  "create-a-responsibility-matrix": "how to create a responsibility matrix",
  "write-a-delegation-brief": "how to delegate work clearly",
  "write-a-job-description": "how to write a job description",
  "plan-a-hiring-process": "how to design a hiring process",
  "create-an-interview-scorecard": "how to create an interview scorecard",
  "run-a-candidate-debrief": "how to run a hiring debrief",
  "onboard-a-new-employee": "new employee onboarding checklist",
  "delegate-a-workstream": "how to delegate a workstream",
  "run-a-team-retrospective": "how to run a team retrospective",
  "facilitate-a-decision-meeting": "how to facilitate a decision meeting",
  "write-a-team-charter": "how to write a team charter",
  "map-a-business-process": "how to map a business process",
  "design-an-operating-rhythm": "how to design an operating rhythm",
  "manage-a-team-backlog": "how to manage a team backlog",
  "create-a-risk-register": "how to create a risk register",
  "manage-a-project-budget": "how to manage a project budget",
  "plan-capacity-and-staffing": "how to create a capacity plan",
  "design-an-on-call-rotation": "how to design an on-call rotation",
  "run-a-root-cause-analysis": "how to run a root cause analysis",
  "classify-data-sensitivity": "how to classify data sensitivity",
  "build-a-data-retention-schedule": "how to create a data retention schedule",
  "respond-to-a-data-subject-request": "how to respond to a data subject request",
  "run-a-privacy-impact-assessment": "how to conduct a privacy impact assessment",
  "design-an-access-review": "how to design a user access review",
  "rotate-a-compromised-secret": "how to rotate a compromised secret",
  "triage-a-security-alert": "how to triage a security alert",
  "investigate-a-phishing-report": "how to investigate a phishing report",
  "write-an-incident-communication": "how to write an incident communication",
  "conduct-a-tabletop-exercise": "how to conduct a tabletop exercise",
  "define-service-reliability-objectives": "how to define service level objectives",
  "create-an-error-budget-policy": "how to create an error budget policy",
  "plan-a-change-freeze": "how to plan a change freeze",
  "manage-a-maintenance-window": "maintenance window checklist",
  "perform-a-business-impact-analysis": "how to perform a business impact analysis",
  "map-critical-service-dependencies": "how to map service dependencies",
  "create-a-vendor-security-questionnaire": "how to create a vendor security questionnaire",
  "review-a-data-processing-agreement": "data processing agreement review checklist",
  "build-a-controls-evidence-map": "how to map controls to audit evidence",
  "prepare-for-an-audit": "how to prepare for an audit",
  "document-a-security-exception": "how to document a security exception",
  "design-a-disaster-communications-plan": "how to create a disaster communication plan",
  "plan-an-incident-exercise": "how to plan an incident response exercise",
  "conduct-an-access-offboarding-review": "employee access offboarding checklist",
  "create-a-data-deletion-runbook": "how to create a data deletion runbook",
  "define-an-audience": "how to define a target audience",
  "write-a-positioning-statement": "how to write a positioning statement",
  "create-a-content-brief": "how to create a content brief",
  "write-a-product-announcement": "how to write a product announcement",
  "create-a-media-list": "how to build a media list",
  "write-a-press-release": "how to write a press release",
  "plan-a-webinar": "webinar planning checklist",
  "plan-a-community-program": "how to plan a community program",
  "create-a-messaging-framework": "how to create a messaging framework",
  "plan-a-content-campaign": "how to plan a content campaign",
  "write-a-landing-page": "how to write landing page copy",
  "plan-a-product-launch-campaign": "product launch campaign plan",
  "pitch-a-journalist": "how to pitch a journalist",
  "prepare-a-media-briefing": "media briefing preparation checklist",
  "create-a-brand-voice-guide": "how to create a brand voice guide",
  "run-a-content-audit": "how to run a content audit",
  "measure-content-performance": "how to measure content performance",
  "design-an-email-nurture-sequence": "how to create an email nurture sequence",
  "produce-a-webinar": "how to produce a webinar",
  "conduct-a-case-study-interview": "how to conduct a case study interview",
  "create-a-customer-proof-library": "how to organize customer proof",
  "moderate-an-online-community": "how to moderate an online community",
  "plan-a-content-migration": "content migration checklist",
  "respond-to-public-criticism": "how to respond to public criticism",
  "assess-reputation-risk": "how to assess reputation risk",
  "define-design-principles": "how to create design principles",
  "create-a-component-inventory": "how to create a UI component inventory",
  "document-a-design-token": "how to document design tokens",
  "design-a-form": "how to design an accessible form",
  "design-a-navigation-system": "how to design website navigation",
  "design-a-responsive-layout": "how to design a responsive layout",
  "design-an-empty-state": "how to design an empty state",
  "design-a-notification-system": "how to design a notification system",
  "design-a-content-model": "how to create a content model",
  "create-a-service-blueprint": "how to create a service blueprint",
  "map-a-service-journey": "how to create a service journey map",
  "run-a-design-workshop": "how to run a design workshop",
  "plan-a-design-research-study": "how to plan a design research study",
  "synthesize-design-research": "how to synthesize design research",
  "validate-a-design-system-component": "design system component testing checklist",
  "govern-a-design-system": "how to govern a design system",
  "plan-a-design-system-migration": "design system migration plan",
  "audit-accessibility-at-scale": "how to conduct an accessibility audit",
  "write-accessible-error-messages": "how to write accessible error messages",
  "design-for-keyboard-navigation": "how to design keyboard navigation",
  "design-a-modal-dialog": "how to design an accessible modal",
  "design-a-data-table": "how to design an accessible data table",
  "design-mobile-navigation": "how to design mobile navigation",
  "document-a-design-decision": "how to document a design decision",
  "measure-design-system-adoption": "how to measure design system adoption",
  "define-procurement-requirements": "how to write procurement requirements",
  "write-a-request-for-proposal": "how to write a request for proposal",
  "create-a-bid-evaluation-matrix": "how to create a bid evaluation matrix",
  "document-a-purchase-decision": "how to document a purchasing decision",
  "plan-a-contract-handoff": "contract handoff checklist",
  "reconcile-a-purchase-order": "how to reconcile a purchase order",
  "create-an-approval-workflow": "how to create an approval workflow",
  "prepare-a-budget-summary": "how to prepare a budget summary",
  "run-a-vendor-selection": "vendor selection process",
  "negotiate-a-vendor-renewal": "how to negotiate a vendor renewal",
  "manage-a-vendor-onboarding": "vendor onboarding checklist",
  "monitor-vendor-performance": "how to monitor vendor performance",
  "plan-a-vendor-exit": "vendor exit plan",
  "forecast-a-department-budget": "how to forecast a department budget",
  "analyze-budget-variance": "how to analyze budget variance",
  "create-a-business-case": "how to create a business case",
  "calculate-total-cost-of-ownership": "how to calculate total cost of ownership",
  "plan-a-cost-reduction": "how to create a cost reduction plan",
  "evaluate-a-capital-purchase": "capital purchase evaluation checklist",
  "manage-a-grant-budget": "how to manage a grant budget",
  "design-a-financial-control": "how to design a financial control",
  "run-a-procurement-tabletop": "procurement tabletop exercise",
  "investigate-a-payment-discrepancy": "how to investigate a payment discrepancy",
  "create-a-fraud-response-plan": "how to create a fraud response plan",
  "assess-third-party-concentration-risk": "how to assess third party concentration risk",
  "define-an-event-brief": "how to write an event brief",
  "create-an-event-budget": "how to create an event budget",
  "choose-an-event-venue": "how to choose an event venue",
  "write-an-event-invitation": "how to write an event invitation",
  "prepare-a-speaker-briefing": "event speaker briefing template",
  "create-an-event-run-of-show": "event run of show template",
  "create-an-event-registration-form": "how to create an event registration form",
  "write-an-event-recap": "how to write an event recap",
  "plan-an-event-program": "how to plan an event program",
  "manage-event-speakers": "event speaker management checklist",
  "plan-event-accessibility": "event accessibility checklist",
  "plan-event-production": "event production plan",
  "create-an-event-sponsorship-package": "event sponsorship package template",
  "manage-event-vendors": "how to manage event vendors",
  "plan-event-staffing": "event staffing plan",
  "design-an-event-feedback-survey": "how to create an event feedback survey",
  "measure-event-outcomes": "how to measure event success",
  "plan-a-hybrid-event": "how to plan a hybrid event",
  "run-an-event-rehearsal": "event rehearsal checklist",
  "manage-event-communications": "event communication plan",
  "plan-an-event-contingency": "event contingency plan",
  "coordinate-an-event-load-in": "event load in checklist",
  "run-an-event-command-center": "event command center plan",
  "plan-crowd-safety-and-egress": "crowd safety and evacuation plan",
  "govern-event-data-and-consent": "event data privacy and consent plan",
  "identify-transferable-skills": "how to identify transferable skills",
  "document-work-accomplishments": "how to document work accomplishments",
  "write-a-career-summary": "how to write a career summary",
  "prepare-a-networking-introduction": "how to introduce yourself at a networking event",
  "request-an-informational-interview": "how to ask for an informational interview",
  "follow-up-after-networking": "how to follow up after networking",
  "create-a-job-search-plan": "how to create a job search plan",
  "prepare-for-a-career-fair": "how to prepare for a career fair",
  "analyze-a-job-description": "how to analyze a job description",
  "create-a-target-employer-list": "how to build a target company list",
  "run-an-informational-interview": "how to conduct an informational interview",
  "prepare-for-a-behavioral-interview": "how to prepare for a behavioral interview",
  "prepare-for-a-case-interview": "how to prepare for a case interview",
  "plan-a-career-pivot": "how to plan a career change",
  "return-to-work-after-a-break": "how to return to work after a career break",
  "prepare-an-internal-job-application": "how to apply for an internal job",
  "write-an-executive-resume": "how to write an executive resume",
  "create-a-leadership-portfolio": "how to create a leadership portfolio",
  "ask-for-a-raise": "how to ask for a raise",
  "negotiate-a-promotion": "how to negotiate a promotion",
  "evaluate-a-job-offer": "how to evaluate a job offer",
  "plan-your-first-90-days": "first 90 days in a new job plan",
  "audit-an-automated-hiring-system": "how to audit an automated hiring system",
  "conduct-a-workplace-investigation": "how to conduct a workplace investigation",
  "plan-a-workforce-reorganization": "how to plan a workforce reorganization",
  "inspect-an-http-request": "how to inspect an HTTP request",
  "handle-api-errors": "API error handling best practices",
  "paginate-an-api": "how to paginate an API",
  "validate-untrusted-input": "how to validate untrusted input",
  "add-an-application-health-check": "how to add an application health check",
  "protect-a-form-from-abuse": "how to protect a web form from spam and bots",
  "store-user-preferences-safely": "how to store user preferences securely",
  "configure-secure-cookies": "how to configure secure cookies",
  "implement-oauth-login": "how to implement OAuth login securely",
  "design-role-based-access-control": "how to design role based access control",
  "secure-file-uploads": "secure file upload best practices",
  "implement-idempotent-requests": "how to implement idempotent API requests",
  "add-api-rate-limiting": "how to add API rate limiting",
  "design-session-management": "secure session management design",
  "prevent-cross-site-request-forgery": "how to prevent CSRF attacks",
  "prevent-cross-site-scripting": "how to prevent cross site scripting",
  "configure-a-content-security-policy": "how to configure Content Security Policy",
  "implement-audit-logging": "how to implement audit logging",
  "create-a-background-job": "how to create a reliable background job",
  "process-webhooks-reliably": "webhook reliability best practices",
  "test-authentication-flows": "how to test authentication flows",
  "manage-service-accounts": "service account management best practices",
  "design-multitenant-authorization": "how to design multitenant authorization",
  "migrate-an-authentication-system": "authentication system migration plan",
  "respond-to-account-takeover": "account takeover incident response plan",
  "read-application-logs": "how to read application logs",
  "inspect-a-metric": "how to interpret an application metric",
  "trace-a-request-id": "how to trace a request ID across services",
  "define-alert-severity": "how to define alert severity levels",
  "create-an-uptime-check": "how to create an uptime check",
  "measure-a-queue-backlog": "how to measure queue backlog",
  "inspect-a-database-query-plan": "how to read a database query plan",
  "document-a-service-dependency": "service dependency documentation template",
  "instrument-an-application": "how to instrument an application",
  "design-service-metrics": "how to design service metrics",
  "create-a-service-dashboard": "how to create a service dashboard",
  "tune-an-alert": "how to tune monitoring alerts",
  "implement-distributed-tracing": "how to implement distributed tracing",
  "monitor-a-background-queue": "how to monitor a background job queue",
  "monitor-a-database": "database monitoring best practices",
  "create-a-synthetic-monitor": "how to create synthetic monitoring",
  "manage-telemetry-sampling": "telemetry sampling strategy",
  "detect-metric-cardinality-problems": "how to reduce metric cardinality",
  "correlate-deployments-with-incidents": "how to correlate deployments with incidents",
  "investigate-memory-growth": "how to investigate application memory growth",
  "investigate-cpu-saturation": "how to investigate CPU saturation",
  "reduce-observability-cost": "how to reduce observability costs",
  "design-a-telemetry-pipeline": "how to design a telemetry pipeline",
  "migrate-an-observability-platform": "observability platform migration plan",
  "respond-to-monitoring-blindness": "monitoring outage response plan",
  "inspect-responsive-breakpoints": "how to test responsive breakpoints",
  "check-color-contrast": "how to check website color contrast",
  "inspect-browser-storage": "how to inspect browser storage",
  "validate-structured-data": "how to validate structured data markup",
  "test-a-website-on-mobile": "how to test a website on mobile devices",
  "document-a-ui-component": "UI component documentation template",
  "review-a-design-specification": "design specification review checklist",
  "inspect-a-web-performance-waterfall": "how to read a web performance waterfall",
  "create-a-progressive-web-app": "how to create a progressive web app",
  "implement-offline-first-ui": "how to build an offline first web app",
  "design-a-permission-prompt": "how to design a browser permission prompt",
  "optimize-web-font-loading": "how to optimize web font loading",
  "implement-responsive-images": "how to implement responsive images",
  "design-a-cookie-consent-interface": "how to design a cookie consent interface",
  "test-cross-browser-compatibility": "cross browser testing checklist",
  "design-a-search-interface": "how to design a search interface",
  "design-a-filtering-interface": "how to design filter UI",
  "implement-client-side-caching": "client side caching best practices",
  "design-a-file-upload-interface": "how to design a file upload interface",
  "design-a-multistep-form": "how to design a multistep form",
  "test-a-web-form": "web form testing checklist",
  "audit-third-party-scripts": "how to audit third party scripts",
  "migrate-a-web-frontend-framework": "frontend framework migration plan",
  "design-a-global-web-delivery-architecture": "global web delivery architecture",
  "respond-to-a-frontend-supply-chain-incident": "frontend supply chain incident response",
  "write-an-interview-brief": "how to write an interview brief",
  "log-video-footage": "how to log video footage",
  "organize-a-media-project": "how to organize a video editing project",
  "create-a-release-form": "media release form template",
  "select-b-roll": "how to select B roll footage",
  "check-audio-levels": "how to check audio loudness levels",
  "write-a-video-description": "how to write a video description",
  "export-social-video": "social media video export settings",
  "plan-a-documentary-interview": "how to plan a documentary interview",
  "edit-a-podcast-interview": "how to edit a podcast interview",
  "mix-dialogue-for-video": "how to mix dialogue for video",
  "color-correct-video-footage": "how to color correct video footage",
  "design-a-video-caption-workflow": "video captioning workflow",
  "produce-a-livestream": "livestream production checklist",
  "localize-a-video": "how to localize a video",
  "manage-media-rights-and-clearances": "media rights and clearances checklist",
  "write-a-documentary-treatment": "how to write a documentary treatment",
  "transcribe-an-interview": "how to transcribe an interview",
  "create-an-audio-edit-decision-list": "audio edit decision list template",
  "plan-a-media-release-calendar": "media release calendar template",
  "write-a-production-safety-brief": "film production safety brief template",
  "create-a-media-delivery-specification": "media delivery specification template",
  "restore-a-corrupted-media-project": "how to recover a corrupted video editing project",
  "migrate-a-media-archive": "media archive migration plan",
  "respond-to-a-live-broadcast-failure": "live broadcast failure response plan",
  "read-an-income-statement": "how to read an income statement",
  "read-a-balance-sheet": "how to read a balance sheet",
  "calculate-gross-margin": "how to calculate gross margin",
  "reconcile-a-bank-statement": "bank statement reconciliation checklist",
  "prepare-an-accounts-aging-summary": "accounts receivable aging report guide",
  "profile-a-financial-dataset": "financial data profiling checklist",
  "validate-financial-model-inputs": "financial model input validation checklist",
  "document-financial-assumptions": "financial assumptions register template",
  "model-unit-economics": "how to model unit economics",
  "prepare-a-month-end-close": "month end close checklist",
  "reconcile-payment-processor-payouts": "payment processor reconciliation guide",
  "forecast-working-capital": "how to forecast working capital",
  "evaluate-a-business-loan-offer": "how to compare business loan offers",
  "manage-a-tax-filing-calendar": "business tax filing calendar template",
  "create-a-management-accounts-pack": "management accounts pack template",
  "analyze-revenue-concentration": "customer revenue concentration analysis",
  "build-a-cohort-revenue-analysis": "how to build a cohort revenue analysis",
  "analyze-customer-profitability": "customer profitability analysis guide",
  "model-pricing-scenarios": "pricing scenario model guide",
  "detect-financial-data-anomalies": "financial data anomaly detection checklist",
  "design-a-financial-dashboard": "financial dashboard design guide",
  "stress-test-a-cash-flow-model": "cash flow stress testing guide",
  "migrate-an-accounting-system": "accounting system migration checklist",
  "respond-to-a-business-cash-crisis": "business cash crisis response plan",
  "investigate-a-financial-reporting-error": "financial reporting error investigation guide",
  "take-effective-lecture-notes": "how to take effective lecture notes",
  "read-an-academic-paper": "how to read an academic paper",
  "prepare-for-office-hours": "how to prepare for professor office hours",
  "create-a-study-guide": "how to create a study guide",
  "plan-a-semester-workload": "semester workload planning template",
  "participate-in-a-seminar": "how to participate in a seminar",
  "document-a-lab-notebook-entry": "how to write a lab notebook entry",
  "cite-a-dataset": "how to cite a dataset",
  "design-a-research-method": "how to design a research methodology",
  "create-a-research-protocol": "research protocol template",
  "design-an-academic-survey": "academic survey design guide",
  "prepare-an-ethics-application": "research ethics application guide",
  "recruit-research-participants": "research participant recruitment plan",
  "manage-research-data": "research data management plan",
  "analyze-qualitative-research": "qualitative research analysis guide",
  "analyze-quantitative-research": "quantitative research analysis guide",
  "reproduce-a-research-result": "research reproducibility checklist",
  "write-a-research-proposal": "how to write a research proposal",
  "respond-to-peer-review": "how to respond to peer review comments",
  "plan-a-field-study": "field research plan template",
  "coordinate-a-student-research-team": "student research team project plan",
  "conduct-research-with-human-participants": "human participant research checklist",
  "respond-to-a-research-integrity-concern": "research integrity investigation process",
  "migrate-a-research-data-repository": "research data repository migration plan",
  "manage-a-laboratory-safety-incident": "laboratory incident response plan",
  "write-a-resume-headline": "how to write a resume headline",
  "write-resume-bullet-points": "how to write resume bullet points",
  "list-technical-skills-on-a-resume": "how to list technical skills on a resume",
  "format-a-resume-for-ats": "ATS friendly resume formatting guide",
  "explain-an-employment-gap": "how to explain an employment gap",
  "prepare-a-resume-file-package": "resume file naming and format checklist",
  "document-professional-certifications": "how to list certifications on a resume",
  "write-a-project-description-for-a-resume": "how to describe projects on a resume",
  "write-a-technical-resume": "how to write a technical resume",
  "write-a-research-cv": "how to write a research CV",
  "write-an-academic-cv": "how to write an academic CV",
  "write-a-government-resume": "how to write a government resume",
  "write-a-healthcare-resume": "how to write a healthcare resume",
  "write-a-sales-resume": "how to write a sales resume",
  "write-a-career-change-resume": "how to write a career change resume",
  "adapt-a-resume-for-an-international-market": "international resume format guide",
  "build-a-freelance-portfolio": "how to build a freelance portfolio",
  "create-a-board-candidate-bio": "board candidate bio template",
  "document-confidential-work-on-a-resume": "how to describe confidential work on a resume",
  "audit-a-resume-for-bias": "resume bias audit checklist",
  "verify-resume-claims": "resume claim verification checklist",
  "design-an-accessible-resume": "accessible resume design guide",
  "prepare-an-executive-transition-package": "executive transition communication checklist",
  "respond-to-resume-identity-theft": "resume identity theft response plan",
  "migrate-a-professional-portfolio": "professional portfolio migration checklist",
  "read-a-stack-trace": "how to read a stack trace",
  "write-a-unit-test": "how to write a unit test",
  "create-a-git-branch": "how to create a Git branch",
  "resolve-a-merge-conflict": "how to resolve a Git merge conflict",
  "inspect-an-api-response": "how to inspect an API response",
  "validate-a-json-schema": "JSON Schema validation guide",
  "pin-a-dependency-version": "how to pin a dependency version",
  "document-an-environment-variable": "environment variable documentation template",
  "build-an-api-client": "how to build a resilient API client",
  "implement-idempotency": "how to implement idempotency",
  "add-database-transaction-boundaries": "database transaction boundary guide",
  "design-a-background-job": "background job design guide",
  "validate-a-data-migration": "data migration validation checklist",
  "create-a-feature-flag-rollout": "feature flag rollout plan",
  "review-a-dependency-update": "dependency update review checklist",
  "profile-application-performance": "application performance profiling guide",
  "build-a-contract-test-suite": "contract testing guide",
  "implement-graceful-shutdown": "graceful shutdown implementation guide",
  "create-a-local-development-environment": "local development environment setup guide",
  "manage-database-schema-changes": "database schema change checklist",
  "design-application-error-handling": "application error handling design guide",
  "decompose-a-production-monolith": "monolith decomposition strategy",
  "migrate-a-critical-api": "critical API migration plan",
  "respond-to-a-failed-database-migration": "failed database migration recovery plan",
  "recover-from-a-corrupted-software-release": "corrupted software release recovery plan",
  "inspect-browser-console-errors": "how to inspect browser console errors",
  "verify-a-canonical-url": "canonical URL verification checklist",
  "check-a-page-title-and-description": "page title and meta description checklist",
  "test-keyboard-navigation": "keyboard navigation testing guide",
  "inspect-a-cookie": "how to inspect browser cookie settings",
  "test-a-file-download": "file download testing checklist",
  "verify-a-mailto-link": "mailto link testing checklist",
  "create-a-404-page": "how to create a useful 404 page",
  "implement-content-security-policy": "Content Security Policy implementation guide",
  "implement-secure-session-lifecycle": "secure web session lifecycle guide",
  "implement-webhook-signature-verification": "webhook signature verification guide",
  "build-a-responsive-navigation": "responsive navigation accessibility guide",
  "design-a-checkout-flow": "checkout flow design checklist",
  "implement-web-push-notifications": "web push notification implementation guide",
  "build-an-accessible-data-table": "accessible data table implementation guide",
  "implement-server-side-rendering": "server-side rendering implementation checklist",
  "optimize-a-third-party-embed": "third-party embed performance checklist",
  "create-a-multilingual-site": "multilingual website implementation guide",
  "manage-web-cache-invalidation": "web cache invalidation strategy",
  "test-web-accessibility-with-assistive-technology": "assistive technology web testing guide",
  "secure-a-file-download": "secure file download implementation guide",
  "implement-account-deletion": "account deletion workflow implementation",
  "migrate-a-global-domain": "global domain migration checklist",
  "respond-to-a-web-cache-poisoning-incident": "web cache poisoning incident response plan",
  "redesign-a-critical-checkout-flow": "critical checkout redesign migration plan",
  "write-a-recruiter-follow-up": "recruiter follow-up email example",
  "prepare-for-a-phone-screen": "phone screen preparation checklist",
  "prepare-an-interview-question-list": "questions to ask in a job interview",
  "organize-a-job-search-week": "weekly job search schedule template",
  "prepare-a-work-sample": "how to prepare a work sample",
  "check-an-interview-invitation": "how to verify an interview invitation",
  "decline-an-interview": "how to decline a job interview",
  "thank-an-interviewer": "interview thank-you email example",
  "build-a-networking-strategy": "professional networking strategy guide",
  "prepare-for-a-panel-interview": "panel interview preparation guide",
  "prepare-for-a-remote-interview": "remote interview preparation checklist",
  "prepare-for-a-salary-negotiation": "salary negotiation preparation worksheet",
  "evaluate-company-culture": "company culture evaluation checklist",
  "research-compensation": "how to research job compensation",
  "manage-multiple-job-offers": "how to compare multiple job offers",
  "prepare-professional-references": "professional reference list guide",
  "build-an-interview-story-bank": "interview story bank template",
  "respond-to-a-job-rejection": "how to respond to a job rejection",
  "return-to-work-job-search": "return-to-work job search plan",
  "navigate-an-internal-job-search": "internal job application strategy",
  "evaluate-a-work-trial-request": "job interview work trial checklist",
  "audit-a-hiring-process-for-fairness": "hiring process fairness audit",
  "respond-to-a-recruitment-fraud-incident": "recruitment fraud incident response plan",
  "design-a-global-hiring-process": "global hiring process design guide",
  "manage-a-conflicted-executive-search": "executive search conflict governance",
  "choose-a-type-scale": "how to choose a typography scale",
  "create-a-color-palette": "accessible color palette guide",
  "annotate-a-wireframe": "wireframe annotation checklist",
  "review-a-design-at-zoom": "interface zoom accessibility review",
  "prepare-a-design-review-agenda": "design review agenda template",
  "export-design-assets": "design asset export checklist",
  "document-an-icon": "icon documentation template",
  "check-touch-target-sizes": "touch target size testing checklist",
  "design-a-dashboard": "dashboard design process",
  "design-a-settings-page": "settings page UX design guide",
  "design-an-onboarding-flow": "user onboarding flow design",
  "design-a-pricing-page": "pricing page UX checklist",
  "design-a-command-palette": "command palette UX design",
  "design-a-date-and-time-input": "date and time input UX guide",
  "design-a-file-management-interface": "file manager interface design",
  "design-a-comparison-interface": "product comparison UX design",
  "design-a-bulk-action-flow": "bulk action UX pattern",
  "design-a-localization-ready-interface": "localization-ready interface design",
  "design-a-high-density-workspace": "high-density application UX",
  "prototype-an-interaction": "interaction prototype testing guide",
  "measure-design-quality": "design quality measurement framework",
  "design-a-map-interface": "accessible map interface design",
  "redesign-a-clinical-workflow-interface": "clinical workflow interface redesign",
  "govern-design-for-a-regulated-product": "regulated product design governance",
  "migrate-a-product-interface-without-disruption": "product interface migration plan",
  "frame-an-interview-shot": "interview shot framing guide",
  "record-room-tone": "how to record room tone",
  "check-video-frame-rate": "video frame rate troubleshooting",
  "organize-a-footage-card": "footage card ingest checklist",
  "write-a-lower-third": "lower third title checklist",
  "create-a-media-contact-sheet": "media contact sheet workflow",
  "prepare-a-teleprompter-script": "teleprompter script format guide",
  "check-audio-sync": "audio video sync troubleshooting",
  "design-a-multicamera-edit": "multicamera editing workflow",
  "edit-a-documentary-scene": "documentary scene editing guide",
  "mix-a-podcast-episode": "podcast episode mixing checklist",
  "create-a-color-grading-plan": "video color grading plan",
  "manage-a-video-review-cycle": "video review workflow",
  "create-an-audio-delivery-package": "audio delivery package checklist",
  "design-a-remote-recording-workflow": "remote recording workflow",
  "produce-an-accessible-video": "accessible video production checklist",
  "archive-a-finished-production": "media production archive checklist",
  "clear-music-for-a-video": "music clearance for video checklist",
  "create-a-live-stream-redundancy-plan": "live stream redundancy plan",
  "design-a-media-ingest-workflow": "media ingest workflow design",
  "verify-media-authenticity": "media authenticity verification guide",
  "respond-to-a-media-rights-dispute": "media rights dispute response plan",
  "migrate-a-live-production-platform": "live production platform migration",
  "recover-from-a-published-media-error": "published media correction plan",
  "manage-a-sensitive-documentary-production": "sensitive documentary production protocol",
  "calculate-break-even-point": "break-even point calculation guide",
  "read-a-cash-flow-statement": "how to read a cash flow statement",
  "calculate-runway": "business cash runway calculator guide",
  "track-invoice-due-dates": "invoice due date tracking workflow",
  "compare-bank-fees": "bank fee comparison worksheet",
  "prepare-a-simple-price-quote": "simple price quote template guide",
  "check-a-vendor-invoice": "vendor invoice review checklist",
  "document-a-refund": "refund documentation checklist",
  "build-a-rolling-forecast": "rolling financial forecast guide",
  "manage-a-chart-of-accounts": "chart of accounts management guide",
  "reconcile-intercompany-balances": "intercompany reconciliation checklist",
  "design-a-revenue-recognition-checklist": "revenue recognition checklist",
  "build-a-capital-budget": "capital budget model guide",
  "manage-a-debt-covenant-calendar": "debt covenant calendar template",
  "analyze-product-margin": "product margin analysis guide",
  "forecast-subscription-revenue": "subscription revenue forecast model",
  "prepare-a-treasury-cash-position": "daily treasury cash position report",
  "design-an-expense-policy": "employee expense policy guide",
  "perform-a-financial-close-review": "financial close review checklist",
  "evaluate-a-merchant-services-contract": "merchant services contract checklist",
  "manage-customer-credit-risk": "customer credit risk management guide",
  "prepare-a-board-finance-pack": "board finance pack template",
  "redesign-a-global-billing-process": "global billing process redesign",
  "respond-to-a-payroll-fraud-incident": "payroll fraud incident response plan",
  "migrate-a-payment-processor": "payment processor migration plan",
  "inspect-http-response-headers": "HTTP response header inspection guide",
  "test-a-redirect-chain": "redirect chain testing guide",
  "check-a-form-error-message": "form error message accessibility checklist",
  "verify-open-graph-tags": "Open Graph tag checker guide",
  "inspect-a-service-worker": "service worker debugging guide",
  "test-a-cookie-banner": "cookie consent banner testing checklist",
  "check-a-site-search-result": "internal site search quality checklist",
  "verify-link-prefetching": "link prefetch testing guide",
  "implement-http-security-headers": "HTTP security headers implementation",
  "design-a-webhook-retry-policy": "webhook retry policy design",
  "build-a-localization-routing-strategy": "website localization URL strategy",
  "migrate-a-cookie-consent-platform": "consent management platform migration",
  "design-a-web-performance-budget": "web performance budget template",
  "implement-progressive-image-loading": "progressive image loading guide",
  "audit-a-web-analytics-implementation": "web analytics implementation audit",
  "design-a-session-timeout-experience": "session timeout UX design guide",
  "build-a-status-page": "service status page design guide",
  "implement-browser-storage-migration": "browser storage migration guide",
  "design-a-web-rate-limit-strategy": "web rate limiting strategy",
  "test-an-ecommerce-checkout": "ecommerce checkout testing checklist",
  "design-a-content-preview-workflow": "secure content preview workflow",
  "migrate-a-global-cdn": "global CDN migration plan",
  "respond-to-a-client-side-data-leak": "client-side data leak response plan",
  "recover-from-a-broken-web-deployment": "broken web deployment recovery",
  "redesign-a-high-risk-account-recovery-flow": "secure account recovery flow redesign",
  "inspect-a-csv-file": "CSV file inspection checklist",
  "check-a-dataset-date-range": "dataset date range quality check",
  "identify-missing-values": "missing data analysis guide",
  "compare-two-data-exports": "compare data export files",
  "validate-column-types": "data column type validation",
  "check-for-duplicate-records": "duplicate record detection guide",
  "document-a-data-field": "data dictionary field template",
  "sample-a-dataset": "dataset sampling plan guide",
  "build-a-data-quality-scorecard": "data quality scorecard template",
  "design-a-data-retention-policy": "data retention policy template",
  "implement-data-lineage": "data lineage implementation guide",
  "reconcile-source-and-warehouse-records": "data warehouse reconciliation",
  "design-a-metric-definition": "metric definition template",
  "validate-a-machine-learning-feature": "machine learning feature validation",
  "build-a-data-anonymization-plan": "data anonymization plan",
  "design-a-data-access-review": "data access review process",
  "audit-a-data-export": "data export audit checklist",
  "migrate-a-dashboard": "dashboard migration checklist",
  "investigate-a-data-freshness-incident": "data freshness incident response",
  "design-a-reference-data-process": "reference data management process",
  "test-a-data-pipeline-backfill": "data backfill testing checklist",
  "respond-to-a-data-poisoning-incident": "data poisoning incident response",
  "migrate-a-critical-data-warehouse": "data warehouse migration plan",
  "govern-a-high-stakes-machine-learning-dataset": "high-stakes ML dataset governance",
  "recover-from-a-failed-data-backfill": "failed data backfill recovery",
  "write-a-meeting-decision": "meeting decision record template",
  "create-a-simple-risk-register": "simple risk register template",
  "define-a-project-assumption": "project assumption log template",
  "prepare-a-handoff-note": "project handoff note template",
  "set-a-project-milestone": "project milestone definition guide",
  "create-an-action-item-list": "action item list template",
  "document-a-process-exception": "process exception request template",
  "prepare-a-vendor-kickoff": "vendor kickoff agenda and checklist",
  "design-a-portfolio-review": "project portfolio review process",
  "run-a-pre-mortem": "project pre-mortem workshop guide",
  "manage-a-cross-functional-dependency": "cross-functional dependency management",
  "build-an-operating-cadence": "team operating cadence design",
  "design-a-change-control-process": "change control process design",
  "manage-a-program-budget": "program budget management guide",
  "plan-a-pilot-program": "pilot program planning template",
  "design-an-escalation-path": "escalation path design template",
  "coordinate-a-multi-vendor-project": "multi-vendor project coordination",
  "manage-a-project-recovery": "project recovery plan",
  "design-an-approval-workflow": "approval workflow design guide",
  "plan-a-regulatory-submission": "regulatory submission project plan",
  "manage-a-strategic-partnership": "strategic partnership operating model",
  "design-a-service-transition": "service transition plan",
  "respond-to-a-major-vendor-failure": "critical vendor failure response",
  "migrate-a-global-operating-model": "global operating model migration",
  "manage-a-high-stakes-organizational-crisis": "organizational crisis management plan",
  "write-a-policy-summary": "policy summary template",
  "write-a-release-announcement": "release announcement template",
  "write-a-case-study-outline": "case study outline template",
  "write-a-correction-note": "correction note template",
  "write-a-short-executive-summary": "short executive summary template",
  "write-a-public-faq-answer": "public FAQ answer template",
  "write-a-data-methodology-note": "data methodology note template",
  "write-a-resume-summary": "resume summary writing guide",
  "edit-a-multiauthor-report": "multi-author report editing workflow",
  "write-a-public-consultation-response": "public consultation response guide",
  "create-a-content-governance-guide": "content governance guide",
  "write-an-incident-communication-plan": "incident communication plan",
  "write-a-technical-case-study": "technical case study writing guide",
  "write-an-accessible-policy-document": "accessible policy document guide",
  "write-a-localization-brief": "localization brief template",
  "design-a-document-review-workflow": "document review workflow design",
  "write-a-regulatory-response": "regulatory response writing guide",
  "manage-an-editorial-corrections-process": "editorial corrections process",
  "write-a-sensitive-research-summary": "sensitive research summary guide",
  "build-a-knowledge-base-style-guide": "knowledge base style guide",
  "tailor-a-resume-for-a-leadership-role": "leadership resume tailoring guide",
  "write-a-resume-for-a-regulated-profession": "regulated profession resume guide",
  "respond-to-a-publication-ethics-crisis": "publication ethics crisis response",
  "migrate-a-global-content-operation": "global content operation migration",
  "audit-an-executive-resume-for-public-disclosure": "executive resume disclosure audit",
  "write-a-research-question": "research question writing guide",
  "create-a-study-timetable": "study timetable template",
  "annotate-a-primary-source": "primary source annotation guide",
  "prepare-a-seminar-question": "seminar discussion question guide",
  "summarize-a-journal-article": "journal article summary guide",
  "build-a-course-reading-list": "course reading list template",
  "check-a-citation-format": "citation format checklist",
  "write-a-skills-based-resume": "skills based resume guide",
  "design-a-mixed-methods-study": "mixed methods study design",
  "conduct-an-archival-research-project": "archival research workflow",
  "build-a-reproducible-analysis-notebook": "reproducible analysis notebook guide",
  "write-a-systematic-review-protocol": "systematic review protocol template",
  "manage-a-research-collaboration": "research collaboration management",
  "design-an-assessment-rubric": "assessment rubric design guide",
  "run-an-academic-peer-review": "academic peer review guide",
  "prepare-a-thesis-defense": "thesis defense preparation guide",
  "audit-a-course-for-accessibility": "course accessibility audit",
  "design-a-community-based-research-project": "community based research design",
  "plan-a-field-research-study": "field research study plan",
  "write-a-resume-for-an-academic-role": "academic role resume guide",
  "translate-academic-experience-for-industry": "academic to industry resume guide",
  "write-a-resume-after-a-career-break": "career break resume guide",
  "respond-to-a-research-misconduct-allegation": "research misconduct response",
  "migrate-a-university-learning-platform": "learning platform migration plan",
  "audit-an-academic-cv-for-public-appointment": "academic CV verification audit",
  "inspect-a-stack-trace": "stack trace inspection guide",
  "compare-two-api-responses": "API response comparison guide",
  "validate-a-json-payload": "JSON payload validation checklist",
  "inspect-a-request-correlation-id": "request correlation ID tracing",
  "check-a-database-index": "database index review checklist",
  "read-a-package-lockfile": "package lockfile review guide",
  "reproduce-a-cli-error": "CLI error reproduction guide",
  "verify-a-feature-flag-state": "feature flag state verification",
  "design-a-background-task-runner": "background task runner design",
  "implement-an-outbox-pattern": "transactional outbox implementation",
  "build-a-safe-file-upload": "secure file upload implementation",
  "design-a-cache-invalidation-strategy": "cache invalidation strategy",
  "test-service-shutdown-behavior": "service shutdown testing",
  "design-a-contract-testing-strategy": "contract testing strategy",
  "migrate-a-message-queue": "message queue migration plan",
  "instrument-a-distributed-trace": "distributed tracing implementation",
  "harden-a-cli-for-automation": "CLI automation hardening",
  "design-a-schema-evolution-process": "schema evolution process",
  "implement-a-rate-limiter": "rate limiter implementation",
  "audit-a-build-pipeline": "build pipeline security audit",
  "recover-a-corrupted-git-repository": "corrupted Git repository recovery",
  "respond-to-a-software-supply-chain-compromise": "software supply chain incident response",
  "migrate-a-global-event-streaming-platform": "event streaming platform migration",
  "recover-from-a-catastrophic-source-control-failure": "source control disaster recovery",
  "redesign-a-multitenant-authorization-system": "multitenant authorization redesign",
  "decode-a-jwt-safely": "safe JWT decoding guide",
  "inspect-a-tls-certificate": "TLS certificate inspection",
  "verify-a-webhook-signature": "webhook signature verification",
  "check-a-container-image-tag": "container image tag verification",
  "inspect-a-process-environment": "process environment inspection",
  "compare-two-database-schemas": "database schema comparison",
  "validate-a-cron-expression": "cron expression validation",
  "trace-a-dns-resolution": "DNS resolution tracing",
  "design-a-service-health-check": "service health check design",
  "implement-a-circuit-breaker": "circuit breaker implementation",
  "build-a-secret-rotation-workflow": "secret rotation workflow",
  "design-a-database-connection-pool": "database connection pool design",
  "implement-optimistic-concurrency-control": "optimistic concurrency control",
  "secure-an-internal-api": "internal API security guide",
  "design-a-multiregion-failover": "multiregion failover design",
  "migrate-a-container-runtime": "container runtime migration",
  "audit-a-logging-pipeline": "logging pipeline audit",
  "design-a-websocket-reconnection-strategy": "WebSocket reconnection strategy",
  "implement-a-saga-workflow": "saga workflow implementation",
  "harden-a-dependency-update-process": "dependency update hardening",
  "build-a-chaos-test-plan": "chaos test plan",
  "investigate-a-memory-leak": "memory leak investigation",
  "respond-to-a-container-orchestration-control-plane-compromise": "container control plane incident response",
  "migrate-a-global-identity-platform": "global identity platform migration",
  "recover-from-a-cross-region-data-consistency-failure": "cross-region data consistency recovery",
  "write-a-networking-introduction": "networking introduction template",
  "prepare-a-job-fair-plan": "job fair preparation plan",
  "research-an-interviewer": "interviewer research guide",
  "ask-for-an-informational-interview": "informational interview request",
  "document-transferable-skills": "transferable skills inventory",
  "evaluate-a-job-posting": "job posting evaluation checklist",
  "prepare-a-reference-request": "professional reference request",
  "write-a-career-objective": "career objective writing guide",
  "build-a-return-to-work-plan": "return to work plan",
  "negotiate-a-remote-work-offer": "remote work offer negotiation",
  "prepare-for-a-multistage-interview": "multistage interview preparation",
  "evaluate-an-employment-contract": "employment contract review checklist",
  "plan-an-internal-job-move": "internal job move plan",
  "manage-a-job-search-confidentially": "confidential job search plan",
  "prepare-for-an-executive-interview": "executive interview preparation",
  "build-a-professional-sponsorship-plan": "professional sponsorship plan",
  "navigate-a-background-check": "background check preparation",
  "respond-to-a-job-offer-deadline": "job offer deadline response",
  "evaluate-a-global-mobility-offer": "global mobility offer evaluation",
  "write-a-resume-for-public-sector-role": "public sector resume guide",
  "consolidate-multiple-resume-versions": "resume version consolidation",
  "negotiate-equity-compensation": "equity compensation negotiation",
  "respond-to-a-hiring-process-data-breach": "hiring data breach response",
  "design-a-cross-border-executive-search": "cross-border executive search design",
  "audit-a-resume-after-identity-fraud": "resume identity fraud recovery",
  "inspect-an-http-cache-header": "HTTP cache header inspection",
  "validate-a-sql-query-plan": "SQL query plan validation",
  "compare-two-container-manifests": "container manifest comparison",
  "check-an-api-pagination-loop": "API pagination loop testing",
  "profile-a-parquet-file": "Parquet file profiling",
  "verify-a-data-export-checksum": "data export checksum verification",
  "review-a-modal-dialog": "modal dialog accessibility review",
  "inspect-a-design-token": "design token inspection",
  "design-a-feature-rollout-controller": "feature rollout controller design",
  "build-a-durable-idempotency-store": "durable idempotency store",
  "audit-a-serverless-runtime": "serverless runtime security audit",
  "test-a-zero-downtime-deploy": "zero downtime deployment test",
  "design-a-configuration-distribution-system": "configuration distribution design",
  "migrate-a-monorepo-build-system": "monorepo build system migration",
  "design-a-data-contract-registry": "data contract registry design",
  "build-a-change-data-capture-pipeline": "change data capture pipeline",
  "audit-a-feature-store": "feature store audit",
  "design-a-data-deletion-workflow": "data deletion workflow",
  "design-an-accessible-command-palette": "accessible command palette design",
  "audit-a-complex-form": "complex form accessibility audit",
  "govern-a-multibrand-design-system": "multibrand design system governance",
  "redesign-an-operational-dashboard": "operational dashboard redesign",
  "respond-to-a-critical-open-source-maintainer-compromise": "open source maintainer compromise response",
  "migrate-a-global-master-data-platform": "global master data migration",
  "redesign-a-safety-critical-control-interface": "safety critical control interface redesign",
  "write-a-media-file-manifest": "media file manifest template",
  "check-a-video-safe-area": "video safe area checklist",
  "verify-a-bank-transfer-reference": "bank transfer reference verification",
  "document-a-decision-owner": "decision owner record",
  "prepare-a-business-continuity-call-tree": "business continuity call tree template",
  "inspect-a-csp-report": "CSP report inspection",
  "test-a-deep-link": "deep link testing checklist",
  "design-a-podcast-archive-workflow": "podcast archive workflow",
  "verify-a-final-media-conform": "final media conform checklist",
  "audit-a-digital-asset-library": "digital asset library audit",
  "design-a-refund-control-process": "refund control process",
  "build-a-working-capital-dashboard": "working capital dashboard",
  "design-a-crisis-decision-log": "crisis decision log template",
  "audit-a-vendor-exit-plan": "vendor exit plan audit",
  "plan-a-business-unit-carve-out": "business unit carve out plan",
  "design-a-policy-exception-program": "policy exception program",
  "build-an-enterprise-risk-appetite-process": "enterprise risk appetite process",
  "manage-a-regulatory-remediation-program": "regulatory remediation program",
  "design-a-web-access-control-review": "web access control review",
  "migrate-a-headless-cms": "headless CMS migration",
  "test-a-multiregion-web-failover": "multiregion web failover test",
  "audit-a-third-party-web-script": "third party web script audit",
  "respond-to-a-live-broadcast-integrity-crisis": "live broadcast integrity crisis response",
  "recover-from-a-global-treasury-control-failure": "global treasury control failure recovery",
  "manage-a-multijurisdiction-corporate-separation": "multijurisdiction corporate separation",
  "map-your-business-operating-model": "business operating model",
  "find-your-missing-records": "business record keeping gaps",
  "write-a-business-skill": "document a business process",
  "choose-what-to-measure": "small business metrics",
  "pick-your-business-software": "choosing business software",
  "hand-a-department-to-an-agent": "AI agent for business operations",
};
for (const skill of skills) {
  if (!SKILL_QUERY_OVERRIDES[skill.id]) {
    throw new Error(`SEO target missing for skill: ${skill.id}`);
  }
}
for (const id of Object.keys(SKILL_QUERY_OVERRIDES)) {
  if (!skills.some((skill) => skill.id === id)) {
    throw new Error(`SEO target references unknown skill: ${id}`);
  }
}
function skillTargetQuery(id) {
  return SKILL_QUERY_OVERRIDES[id];
}
function skillSearchTitle(id) {
  const query = skillTargetQuery(id);
  return searchTitle(query.charAt(0).toUpperCase() + query.slice(1));
}
const PROJECT_QUERY_OVERRIDES = {
  "academic-work-portfolio": "academic portfolio project idea",
  "alumni-directory": "alumni directory project idea",
  "answer-page": "FAQ page project idea",
  "babysitting-page": "babysitting website project idea",
  "bake-order-page": "baking order form project idea",
  "band-page": "band website project idea",
  "beat-the-forecast": "weather forecasting data project",
  "before-after-short": "before and after video project",
  "best-friend-episode": "podcast episode with a friend project",
  "best-trick-short": "short-form video project idea",
  "bike-repair-page": "bike repair website project idea",
  "bilingual-help-page": "bilingual help website project",
  "bill-split": "bill splitting calculator project",
  "block-errands": "neighborhood errand board project",
  "camera-roll-classifier": "image classification project idea",
  "camera-roll-curated": "photo portfolio project idea",
  "canvas-arcade": "HTML canvas game project idea",
  "carpool-rota": "carpool scheduling app project",
  "chore-board": "chore chart app project idea",
  "chore-rotation-bot": "chore rotation bot project",
  "class-flashcards": "flashcard app project idea",
  "classmate-explainer": "student explainer website project",
  "club-dues-tracker": "club membership tracker project",
  "club-election": "online voting app project idea",
  "club-hq": "club management system project",
  "club-newsletter": "club newsletter project idea",
  "club-page": "club website project idea",
  "collection-manager": "collection tracking app project",
  "commission-page": "artist commission website project",
  "commute-experiment": "commute data analysis project",
  "count-something": "data collection project idea",
  "countdown-board": "countdown timer project idea",
  "cover-the-game": "sports recap video project",
  "deadline-aggregator": "deadline tracker app project",
  "decision-spinner": "decision wheel app project",
  "desk-setup": "desk setup website project",
  "dinner-picker": "random dinner picker app project",
  "discord-server-bot": "Discord bot project idea",
  "dog-page": "dog website project idea",
  "downloads-janitor": "downloads folder cleanup automation",
  "event-page": "event website project idea",
  "family-birthdays": "family birthday reminder app",
  "family-newsletter": "family newsletter project idea",
  "family-shop-inventory": "small business inventory system project",
  "family-tree": "interactive family tree project",
  "fan-reference": "fan wiki website project idea",
  "feeder-counter": "computer vision counting project",
  "first-job-post": "first job reflection blog post",
  "fix-it-history": "beginner Git project idea",
  "fix-writeup": "technical troubleshooting case study",
  "forecast-vs-reality": "forecast accuracy data project",
  "free-stuff-map": "free stuff map app project",
  "friend-quiz": "friendship quiz app project",
  "friend-yearbook": "digital yearbook project idea",
  "game-night-standings": "game night leaderboard project",
  "garage-sale-catalog": "garage sale catalog website",
  "grandma-cooks": "family recipe video project",
  "grandparent-interview": "oral history interview project",
  "hobby-converter": "unit converter app project",
  "hobby-glossary": "glossary website project idea",
  "hours-vs-grades": "study time data analysis project",
  "household-recovery-file": "household inventory project idea",
  "house-rules": "shared house rules app project",
  "how-they-met": "family history video project",
  "how-to-guide": "how-to guide website project",
  "idle-game": "idle game project idea",
  "interactive-tool": "interactive web tool project",
  "lawn-yard-page": "landscaping service website project",
  "league-office": "sports league management app project",
  "lessons-page": "tutor website project idea",
  "letters-archive": "digital letters archive project",
  "life-story": "family biography website project",
  "listening-charted": "music listening data project",
  "little-library-catalog": "little free library catalog app",
  "local-ranking": "local ranking website project",
  "minutes-site": "meeting minutes archive website",
  "missing-stat-table": "sports statistics website project",
  "morning-digest": "daily email digest automation",
  "moving-crew-page": "moving help signup website",
  "neighborhood-recs": "neighborhood recommendations website",
  "newsletter-engine": "newsletter platform project idea",
  "niche-daily-puzzle": "daily word puzzle app project",
  "niche-explainer": "niche explainer website project",
  "note-sorter": "text classification project idea",
  "online-turn-based": "multiplayer turn-based game project",
  "order-desk": "order management system project",
  "packing-list": "packing list generator project",
  "pantry-inventory": "pantry inventory app project",
  "paper-to-pixels": "document digitization project",
  "paycheck-calc": "paycheck calculator project",
  "personal-recommender": "recommendation system project idea",
  "personal-tracker": "personal tracking app project",
  "pet-page": "pet profile website project",
  "photo-timeline": "family photo timeline project",
  "physics-toy-game": "physics game project idea",
  "pickup-game-page": "pickup sports website project",
  "plant-mail-watch": "home monitoring app project",
  "plant-watering": "plant watering reminder app",
  "predict-the-season": "sports prediction data project",
  "price-drop-alert": "price drop alert app project",
  "price-watch": "price tracker app project",
  "qr-event-checkin": "QR code event check-in app",
  "qr-one-pager": "QR code landing page project",
  "quiz-battle": "real-time quiz game project",
  "quote-wall": "quote wall website project",
  "reading-list": "reading list website project",
  "real-folder-repo": "beginner version control project",
  "real-site": "beginner website project idea",
  "recipe-archive": "family recipe archive website",
  "repo-action": "GitHub Actions project idea",
  "reunion-page": "family reunion website project",
  "same-keyboard-versus": "local multiplayer game project",
  "school-calendar-feed": "school calendar app project",
  "school-swap": "school marketplace app project",
  "score-keeper": "scorekeeping app project",
  "screen-time-honesty": "screen time data project",
  "season-in-numbers": "sports season data project",
  "season-photos": "team photo archive website",
  "season-recap": "sports season recap newsletter",
  "session-booker": "tutor booking system project",
  "shift-on-film": "day in the life video project",
  "signup-sheet": "online signup sheet project",
  "sleep-week": "sleep tracking data project",
  "small-web-fix": "browser extension project idea",
  "speedrun-leaderboard": "game leaderboard project",
  "start-page": "personal start page project",
  "street-answers": "neighborhood FAQ website",
  "street-history": "local history website project",
  "street-oral-history": "community oral history project",
  "street-tree-survey": "street tree survey data project",
  "study-group-hub": "study group website project",
  "study-session-scheduler": "study group scheduling app project",
  "study-timer": "study timer app project",
  "survival-guide": "freshman survival guide project",
  "taste-predictor": "music recommendation model project",
  "team-schedule": "sports team schedule website",
  "team-stats-board": "team statistics app project",
  "tech-help-neighbors": "community tech support website",
  "text-adventure": "text adventure game project",
  "textbook-list": "school textbook exchange project",
  "tool-lending-library": "tool lending library app project",
  "tournament-bracket": "tournament bracket app project",
  "trip-archive": "travel archive website project",
  "tutoring-page": "tutor services website project",
  "volunteer-hours": "volunteer hours tracking app",
  "volunteer-recap": "volunteer event recap project",
  "walking-routes": "walking route map project",
  "week-of-logs": "daily Git commit project",
  "which-bus": "bus route comparison app project",
  "workout-timer": "workout timer app project",
  "year-of-books": "book review website project",
  "retention-schedule-pilot": "data retention schedule project",
  "controls-evidence-room": "audit controls evidence project",
};
for (const project of projects) {
  if (!PROJECT_QUERY_OVERRIDES[project.id]) {
    throw new Error(`SEO target missing for project: ${project.id}`);
  }
}
for (const id of Object.keys(PROJECT_QUERY_OVERRIDES)) {
  if (!projects.some((project) => project.id === id)) {
    throw new Error(`SEO target references unknown project: ${id}`);
  }
}
function projectTargetQuery(project) {
  return PROJECT_QUERY_OVERRIDES[project.id];
}
function projectSearchTitle(project) {
  const query = projectTargetQuery(project);
  return searchTitle(query.charAt(0).toUpperCase() + query.slice(1));
}
function indexSkillRow(s) {
  const searchText = `${titleOf(s.id)} ${summarySentence(s.description)} ${s.category} ${s.level}`.toLowerCase();
  return `<li data-skill-row data-skill-category="${escAttr(s.category)}" data-skill-level="${escAttr(s.level)}" data-skill-search="${escAttr(searchText)}"><a href="/skills/${s.id}/">${esc(titleOf(s.id))}</a>
<span class="level-skill-description">${esc(summarySentence(s.description))}</span>
${skillActivity(s, { compact: true })}
</li>`;
}
function levelSections() {
  return LEVEL_META.map(([level, label, note]) => {
    const groups = CATEGORY_META.map(([category, categoryLabel]) => {
      const list = skills.filter((skill) => skill.level === level && skill.category === category);
      if (!list.length) return "";
      return `<section class="level-category">
<h3 id="${level}-${category}">${esc(categoryLabel)}</h3>
<ul class="level-skill-list">${list.map(indexSkillRow).join("\n")}</ul>
</section>`;
    }).filter(Boolean).join("\n");
    return `<section class="skill-level" id="${level}">
<h2>${esc(label)} skills</h2>
<p>${esc(note)} A level describes the procedure, not the person using it.</p>
<div class="level-categories">${groups}</div>
</section>`;
  }).join("\n");
}
function subjectMatrix() {
  const head = LEVEL_META.map(([, label]) => `<th scope="col">${esc(label)}</th>`).join("");
  const rows = CATEGORY_META.map(([category, label]) => {
    const cells = LEVEL_META.map(([level]) => {
      const count = skills.filter((skill) => skill.category === category && skill.level === level).length;
      return `<td>${count ? `<a href="#${level}-${category}">${count}</a>` : `<span aria-label="none">0</span>`}</td>`;
    }).join("");
    const total = skills.filter((skill) => skill.category === category).length;
    return `<tr id="${category}"><th scope="row">${esc(label)}</th>${cells}<td>${total}</td></tr>`;
  }).join("\n");
  return `<div class="table-scroll"><table class="subject-matrix">
<thead><tr><th scope="col">Subject</th>${head}<th scope="col">Total</th></tr></thead>
<tbody>${rows}</tbody>
</table></div>`;
}
function skillFinder() {
  const levels = LEVEL_META.map(([id, label]) => `<option value="${id}">${esc(label)}</option>`).join("");
  const categories = CATEGORY_META.map(([id, label]) => `<option value="${id}">${esc(label)}</option>`).join("");
  return `<form class="skill-finder" data-skill-finder>
<div class="skill-finder-query">
<label for="skill-query">Find a skill</label>
<input id="skill-query" type="search" autocomplete="off" placeholder="Try: debug, interview, data, publish">
</div>
<div>
<label for="skill-level-filter">Level</label>
<select id="skill-level-filter"><option value="">All levels</option>${levels}</select>
</div>
<div>
<label for="skill-category-filter">Subject</label>
<select id="skill-category-filter"><option value="">All subjects</option>${categories}</select>
</div>
<button type="reset">Clear</button>
<p id="skill-filter-status" role="status" aria-live="polite">Showing all ${skills.length} skills.</p>
</form>
<p class="skill-filter-empty" data-skill-filter-empty hidden>No skills match. Clear a filter or try fewer words.</p>
<script>
(() => {
  const init = () => {
    const form = document.querySelector("[data-skill-finder]");
    if (!form) return;
    const query = form.querySelector("#skill-query");
    const level = form.querySelector("#skill-level-filter");
    const category = form.querySelector("#skill-category-filter");
    const status = form.querySelector("#skill-filter-status");
    const empty = document.querySelector("[data-skill-filter-empty]");
    const rows = [...document.querySelectorAll("[data-skill-row]")];
    const update = () => {
      const terms = query.value.toLowerCase().trim().split(/\\s+/).filter(Boolean);
      let shown = 0;
      for (const row of rows) {
        const matches =
          (!level.value || row.dataset.skillLevel === level.value)
          && (!category.value || row.dataset.skillCategory === category.value)
          && terms.every((term) => row.dataset.skillSearch.includes(term));
        row.hidden = !matches;
        if (matches) shown += 1;
      }
      document.querySelectorAll(".level-category").forEach((group) => {
        group.hidden = !group.querySelector("[data-skill-row]:not([hidden])");
      });
      document.querySelectorAll(".skill-level").forEach((section) => {
        section.hidden = !section.querySelector("[data-skill-row]:not([hidden])");
      });
      status.textContent = shown === rows.length
        ? "Showing all " + rows.length + " skills."
        : "Showing " + shown + " of " + rows.length + " skills.";
      empty.hidden = shown !== 0;
    };
    form.addEventListener("input", update);
    form.addEventListener("reset", () => setTimeout(update, 0));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  };
})();
</script>`;
}

// raw skill + idea endpoints
mkdirSync(join(DIST, "skills"), { recursive: true });
mkdirSync(join(DIST, "ideas"), { recursive: true });
mkdirSync(join(DIST, "projects"), { recursive: true });
for (const s of skills) writeFileSync(join(DIST, "skills", `${s.id}.md`), fullText(s.path));
for (const p of projects) {
  const raw = `# ${p.name}\n\nsphinxstack project idea. Works with the skill(s): ${p.proves.join(", ")}.\n\n${bodyOf(p.path).trim()}\n`;
  writeFileSync(join(DIST, "ideas", `${p.id}.md`), raw);
  writeFileSync(join(DIST, "projects", `${p.id}.md`), raw); // legacy path for spawned repos
}
mkdirSync(join(DIST, "stats"), { recursive: true });
writeFileSync(join(DIST, "stats", "skills.json"), `${JSON.stringify(skillStatsSeed, null, 2)}\n`);

function sectionOf(body, name) {
  const m = body.match(new RegExp(`\\n## ${name}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`));
  return m ? m[1].trim() : "";
}
function skillContentParts(body) {
  const withoutTitle = body.trimStart().replace(/^# [^\n]+\n+/, "");
  const firstSection = withoutTitle.search(/^## /m);
  const opening = (firstSection === -1 ? withoutTitle : withoutTitle.slice(0, firstSection)).trim();
  const sectionText = firstSection === -1 ? "" : withoutTitle.slice(firstSection);
  const sections = [...`${sectionText}\n## __END__\n`.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## )/gm)]
    .filter(([, title]) => title !== "__END__")
    .map(([, title, contents]) => ({
      title: plainCardText(title),
      contents: contents.trim(),
    }));
  return { opening, sections };
}
function sectionId(title, usedIds) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64) || "section";
  let id = base;
  let suffix = 2;
  while (usedIds.has(id)) id = `${base}-${suffix++}`;
  usedIds.add(id);
  return id;
}
function listItems(section) {
  return section
    .split("\n")
    .filter((line) => /^-\s+/.test(line))
    .map((line) => plainCardText(line.replace(/^-\s+/, "")))
    .filter(Boolean);
}
function numberedItems(section) {
  const items = [];
  let current = "";
  const flush = () => {
    if (current) items.push(plainCardText(current));
    current = "";
  };
  for (const line of section.split("\n")) {
    const start = line.match(/^\d+\.\s+(.+)$/);
    if (start) {
      flush();
      current = start[1];
    } else if (current && /^\s{2,}\S/.test(line)) {
      current += ` ${line.trim()}`;
    } else if (!line.trim()) {
      flush();
    }
  }
  flush();
  return items.filter(Boolean);
}
function howToItems(body) {
  const explicit = sectionOf(body, "Procedure") || sectionOf(body, "Method");
  const explicitSteps = numberedItems(explicit);
  if (explicitSteps.length >= 2) {
    return explicitSteps.map((text) => ({
      name: clipSearchText(text, 120),
      text: clipSearchText(text, 320),
    }));
  }

  const excluded = /^(when to use|preconditions?|done(?: means)?|rule|guardrails?|safety|failure plan|thin resume|where to go|notes?|principles?|limits?)/i;
  const sectionSteps = [...`${body}\n## __END__\n`.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## )/gm)]
    .filter(([, heading]) => heading !== "__END__")
    .filter(([, heading]) => !excluded.test(plainCardText(heading)))
    .map(([, heading, contents]) => ({
      name: clipSearchText(heading, 120),
      text: clipSearchText(
        contents
          .replace(/^[-*]\s+/gm, "")
          .replace(/^\d+\.\s+/gm, "")
          .replace(/\n+/g, " "),
        320,
      ),
    }))
    .filter((step) => step.text);
  if (sectionSteps.length >= 2) return sectionSteps;

  const allNumbered = numberedItems(body);
  if (allNumbered.length >= 2) {
    return allNumbered.map((text) => ({
      name: clipSearchText(text, 120),
      text: clipSearchText(text, 320),
    }));
  }
  return sectionSteps;
}
const skillStructureCache = new Map();
function skillStructure(skill) {
  if (skillStructureCache.has(skill.id)) return skillStructureCache.get(skill.id);
  const body = bodyOf(skill.path);
  const doneItems = listItems(sectionOf(body, "Done"));
  const procedure = sectionOf(body, "Procedure") || sectionOf(body, "Method");
  const value = {
    doneItems,
    steps: procedure.split("\n").filter((line) => /^\d+\.\s+/.test(line)).length,
    level: Object.fromEntries(LEVEL_META)[skill.level] ?? titleOf(skill.level),
  };
  skillStructureCache.set(skill.id, value);
  return value;
}
function dateLabel(value, style = "short") {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
function skillActivity(skill, {
  compact = false,
  detail = false,
  className = "",
} = {}) {
  const stats = skillStatsSeed.skills[skill.id] ?? { installs: 0 };
  const installs = Number(stats.installs ?? stats.loads ?? 0);
  const classes = [
    "skill-activity",
    compact ? "skill-activity--compact" : "",
    detail ? "skill-activity--detail" : "",
    className,
  ].filter(Boolean).join(" ");
  return `<div class="${classes}" data-skill-stats data-skill-id="${skill.id}" aria-label="Skill loads for ${escAttr(titleOf(skill.id))}">
<span class="skill-install-count" data-stat="installs">${installs.toLocaleString("en")} skill load${installs === 1 ? "" : "s"}</span>
</div>`;
}
function catalogActivitySummary() {
  const summary = skillStatsSeed.summary ?? { installs: 0 };
  const installs = Number(summary.installs ?? summary.loads ?? 0);
  const since = dateLabel(skillStatsSeed.since, "long");
  return `<div class="catalog-activity" data-catalog-stats aria-label="Skill loads since ${escAttr(since)}">
<span><strong data-catalog-stat="installs">${installs.toLocaleString("en")}</strong> skill loads</span>
${since ? `<span>since ${esc(since)}</span>` : ""}
</div>`;
}
function projectDuration(level) {
  if (level === 3) return "a month or more";
  if (level === 2) return "two to three weeks";
  return "about a week";
}
const LEVEL_RANK = { starter: 1, working: 2, advanced: 3 };
function ringNeighbors(items, currentId, limit = 2) {
  if (items.length < 2) return [];
  const index = items.findIndex((item) => item.id === currentId);
  if (index < 0) return [];
  const related = [];
  for (let distance = 1; related.length < limit && distance < items.length; distance += 1) {
    for (const offset of [-distance, distance]) {
      const item = items[(index + offset + items.length) % items.length];
      if (item.id !== currentId && !related.some((candidate) => candidate.id === item.id)) {
        related.push(item);
        if (related.length === limit) break;
      }
    }
  }
  return related;
}
function relatedSkills(skill, limit = 3) {
  const peers = [...(byCategory.get(skill.category) ?? [])]
    .sort((a, b) => (LEVEL_RANK[a.level] ?? 0) - (LEVEL_RANK[b.level] ?? 0) || titleOf(a.id).localeCompare(titleOf(b.id)));
  const related = ringNeighbors(peers, skill.id, 2);
  const coUsed = skills
    .filter((candidate) => candidate.id !== skill.id && !related.some((item) => item.id === candidate.id))
    .map((candidate) => ({
      candidate,
      sharedProjects: projects.filter((project) => project.proves.includes(skill.id) && project.proves.includes(candidate.id)).length,
    }))
    .filter(({ sharedProjects }) => sharedProjects > 0)
    .sort((a, b) => b.sharedProjects - a.sharedProjects || titleOf(a.candidate.id).localeCompare(titleOf(b.candidate.id)));
  for (const { candidate } of coUsed) {
    if (related.length === limit) break;
    related.push(candidate);
  }
  for (const candidate of ringNeighbors(peers, skill.id, limit + 2)) {
    if (related.length === limit) break;
    if (!related.some((item) => item.id === candidate.id)) related.push(candidate);
  }
  return related.slice(0, limit);
}
function relatedSkillLinks(skill) {
  const links = relatedSkills(skill)
    .map((candidate) => `<li><a href="/skills/${candidate.id}/">${esc(titleOf(candidate.id))}</a> —
${esc(trimLine(summarySentence(candidate.description), 150))}</li>`)
    .join("\n");
  return `<section class="skill-guide-section skill-related">
<h2>Related skills</h2>
<ul class="dense">
${links}
</ul>
</section>`;
}
function relatedProjects(project, limit = 3) {
  const peers = projects
    .filter((candidate) => (candidate.group ?? "Practice") === (project.group ?? "Practice"))
    .sort((a, b) => (a.level ?? 1) - (b.level ?? 1) || a.name.localeCompare(b.name));
  const related = ringNeighbors(peers, project.id, 2);
  const candidates = projects
    .filter((candidate) => candidate.id !== project.id && !related.some((item) => item.id === candidate.id))
    .map((candidate) => ({
      candidate,
      score:
        candidate.proves.filter((id) => project.proves.includes(id)).length * 10
        + ((candidate.group ?? "Practice") === (project.group ?? "Practice") ? 3 : 0)
        + ((candidate.level ?? 1) === (project.level ?? 1) ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name));
  for (const { candidate } of candidates) {
    if (related.length === limit) break;
    related.push(candidate);
  }
  return related.slice(0, limit);
}
function relatedProjectLinks(project) {
  const links = relatedProjects(project)
    .map((candidate) => {
      const query = projectTargetQuery(candidate);
      const label = query.charAt(0).toUpperCase() + query.slice(1);
      return `<li><a href="/ideas/${candidate.id}/">${esc(label)}</a></li>`;
    })
    .join("\n");
  return `<section class="related-projects">
<h2>Related projects</h2>
<ul class="dense">
${links}
</ul>
</section>`;
}
// skill pages
for (const s of skills) {
  const skillText = fullText(s.path);
  const requiresPartModeConnection =
    s.id.includes("partmode") && s.id !== "connect-partmode-to-an-agent";
  const catLabel = Object.fromEntries(CATEGORY_META)[s.category] ?? s.category;
  const levelLabel = Object.fromEntries(LEVEL_META)[s.level] ?? s.level;
  const body = bodyOf(s.path);
  const sayPhrase = SAY[s.id] ?? "use the " + titleOf(s.id).toLowerCase() + " skill";
  const done = sectionOf(body, "Done");
  const procedureSteps = howToItems(body);
  const skillSummary = summarySentence(s.description);
  const proofPoints = listItems(done).slice(0, 3);
  const skillParts = skillContentParts(body);
  const doneSection = skillParts.sections.find((section) => /^Done\b/i.test(section.title));
  const usedSectionIds = new Set();
  const guideSections = skillParts.sections
    .filter((section) => section !== doneSection)
    .map((section) => {
      const id = sectionId(section.title, usedSectionIds);
      return `<section class="skill-guide-section">
<h2 id="${id}">${inline(section.title)}</h2>
${md(section.contents)}
</section>`;
    })
    .join("\n");
  page({
    wide: true,
    title: `${titleOf(s.id)} — sphinxstack`,
    metaTitle: skillSearchTitle(s.id),
    desc: s.description,
    path: `skills/${s.id}`,
    targetQuery: skillTargetQuery(s.id),
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "AI skills", path: "/skills/" },
      { name: titleOf(s.id), path: `/skills/${s.id}/` },
    ],
    mainEntity: {
      "@type": "HowTo",
      name: `${titleOf(s.id)} with an AI agent`,
      description: skillSummary,
      isAccessibleForFree: true,
      license: "https://opensource.org/license/mit",
      step: procedureSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    ogImage: renderOg(`skill-${s.id}`, {
      tab: "SKILL.md",
      kind: `${String(levelLabel).toUpperCase()} SKILL`,
      eyebrow: `${catLabel} / reusable method`,
      title: titleOf(s.id),
      summary: skillSummary,
      panelTitle: "Proof at the end",
      panelItems: proofPoints.length ? proofPoints : ["A finished artifact", "Checks that prove it works"],
      footer: "PLAIN TEXT · LOAD IN ANY AGENT",
    }),
    ogImageAlt: `${titleOf(s.id)} skill card. ${skillSummary}`,
    shareLabel: "share this skill",
    shareTitle: `${titleOf(s.id)} — a sphinxstack skill`,
    crumb: `<a href="/skills/">Skills</a> / <a href="/skills/#${s.level}">${esc(levelLabel)}</a> / ${esc(titleOf(s.id))}`,
    content: `
<article class="skill-detail">
<section class="skill-hero">
<div class="skill-hero-copy">
<p class="skill-kicker">${esc(levelLabel)} <span aria-hidden="true">/</span> ${esc(catLabel)} skill</p>
<h1>${esc(titleOf(s.id))}</h1>
<p class="skill-summary">${esc(skillSummary)}</p>
</div>
${(() => {
  if (requiresPartModeConnection) {
    return `<aside class="skill-use" aria-labelledby="skill-use-title">
<h2 id="skill-use-title">Connect PartMode first</h2>
<p>This skill is operating guidance, not an authenticated PartMode connection. Set up the account, agent key, and MCP endpoint before asking an agent to run it.</p>
<ul>
<li><a href="/partmode/#start">Set up account and key</a><span>required</span></li>
<li><a href="/skills/connect-partmode-to-an-agent/">Connect PartMode to an agent</a><span>MCP guide</span></li>
<li><button class="skill-copy-link" type="button" data-copy="skill-${s.id}">Copy skill text</button><span>after connection</span></li>
</ul>
<a class="skill-raw-link" href="/skills/${s.id}.md" rel="nofollow">Read the raw SKILL.md</a>
</aside>`;
  }
  const prefill = encodeURIComponent(`Read ${SITE_URL}/skills/${s.id}.md and follow it. Then: ${sayPhrase}.`);
  return `<aside class="skill-use" aria-labelledby="skill-use-title">
<h2 id="skill-use-title">Use this skill</h2>
<p>Open it with your request ready, or copy the instructions into the agent you already use.</p>
<ul>
<li><a href="https://chatgpt.com/?q=${prefill}" target="_blank" rel="noopener">Open in ChatGPT</a><span>new chat</span></li>
<li><a href="https://claude.ai/new?q=${prefill}" target="_blank" rel="noopener">Open in Claude</a><span>new chat</span></li>
<li><button class="skill-copy-link" type="button" data-copy="skill-${s.id}">Copy skill text</button><span>any agent</span></li>
</ul>
<a class="skill-raw-link" href="/skills/${s.id}.md" rel="nofollow">Read the raw SKILL.md</a>
</aside>`;
})()}
</section>
<div class="skill-body">
<div class="skill-guide">
${skillParts.opening ? `<div class="skill-opening">${md(skillParts.opening)}</div>` : ""}
${guideSections}
${relatedSkillLinks(s)}
</div>
<aside class="skill-outcome" aria-labelledby="skill-outcome-title">
<h2 id="skill-outcome-title">At the end</h2>
${doneSection ? md(doneSection.contents) : "<p>The skill keeps working until its stated finish line is true.</p>"}
<a class="skill-outcome-source" href="/skills/${s.id}.md" rel="nofollow">Read the exact SKILL.md</a>
</aside>
</div>
<pre id="skill-${s.id}" hidden>${esc(skillText)}</pre>
</article>`,
  });
}

// skills index
page({
  wide: true,
  title: "Skills — sphinxstack",
  metaTitle: "Free AI skills library for ChatGPT, Claude & Codex",
  desc: "The sphinxstack skill catalog: take a skill, load it into your agent, do the thing.",
  path: "skills",
  targetQuery: "free AI skills library",
  pageType: "CollectionPage",
  mainEntity: {
    "@type": "ItemList",
    name: "Free AI agent skills",
    numberOfItems: skills.length,
    itemListElement: skills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: titleOf(skill.id),
      url: `${SITE_URL}/skills/${skill.id}/`,
    })),
  },
  ogImage: renderOg("skills", {
    tab: "INDEX",
    kind: "SKILL LIBRARY",
    eyebrow: "The complete index",
    title: `${skills.length} skills for your agent`,
    summary: "Choose a method, load the file, and keep working until the evidence exists.",
    panelTitle: "Every skill has",
    panelItems: [
      `${catalog.skill_level_counts.starter} starter skills`,
      `${catalog.skill_level_counts.working} working skills`,
      `${catalog.skill_level_counts.advanced} advanced skills`,
    ],
    footer: "BROWSE · LOAD · RUN",
  }),
  ogImageAlt: `${skills.length} skills for your agent — the sphinxstack index`,
  content: `
<h1>Skills</h1>
<p class="lede">Each skill gives an agent a reusable method, boundaries, and a checkable
finish. The levels describe how much system context and operational judgment the procedure
requires. They are not ratings of the person using it.</p>
${catalogActivitySummary()}
<p><strong>${skills.length} of ${skillRoadmap.target_skill_count} skills published.</strong>
The library grows in reviewed cohorts of at most ${skillRoadmap.max_editorial_batch};
the levels describe the procedure, not the person using it.</p>
${skillFinder()}

<h2>How the levels work</h2>
<table class="level-guide">
<thead><tr><th scope="col">Level</th><th scope="col">Procedure</th><th scope="col">Required finish</th></tr></thead>
<tbody>
${LEVEL_META.map(([level, label, note, proof]) => `<tr><th scope="row"><a href="#${level}">${esc(label)}</a><span>${catalog.skill_level_counts[level]} skills</span></th><td><b class="mobile-label">Procedure</b>${esc(note)}</td><td><b class="mobile-label">Required finish</b>${esc(proof)}</td></tr>`).join("\n")}
</tbody>
</table>

<h2>Skills by subject and level</h2>
<p class="table-note">Each number links to that part of the complete catalog.</p>
${subjectMatrix()}

${levelSections()}`,
});

// idea pages + index
for (const p of projects) {
  const withSkills = p.proves.map((id) => `<a href="/skills/${id}/">${esc(id)}</a>`).join(", ");
  const projectBody = bodyOf(p.path);
  const projectSummary = firstSentence(projectBody, "Brief") || p.name;
  const projectDone = sectionOf(projectBody, "Done means") || sectionOf(projectBody, "Done");
  const projectProof = listItems(projectDone)[0] || "A finished artifact with evidence";
  const methods = p.proves.map(titleOf);
  page({
    title: `${p.name} — sphinxstack ideas`,
    metaTitle: projectSearchTitle(p),
    desc: projectSummary,
    path: `ideas/${p.id}`,
    targetQuery: projectTargetQuery(p),
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Project ideas", path: "/ideas/" },
      { name: p.name, path: `/ideas/${p.id}/` },
    ],
    mainEntity: {
      "@type": "LearningResource",
      name: p.name,
      description: projectSummary,
      learningResourceType: "Project brief",
      educationalLevel: `Level ${p.level ?? 1}`,
      timeRequired: p.level === 3 ? "P1M" : p.level === 2 ? "P21D" : "P7D",
      teaches: methods,
      isAccessibleForFree: true,
      license: "https://opensource.org/license/mit",
    },
    ogImage: renderOg(`project-${p.id}`, {
      tab: "BRIEF.md",
      kind: "PROJECT BRIEF",
      eyebrow: `${p.group ?? "Practice"} / level ${p.level ?? 1}`,
      title: p.name,
      summary: projectSummary,
      panelTitle: "Build file",
      panelItems: [
        `Time: ${projectDuration(p.level)}`,
        `Uses: ${methods.slice(0, 3).join(", ")}${methods.length > 3 ? ` +${methods.length - 3}` : ""}`,
        projectProof,
      ],
      footer: "BUILD IT · SHOW THE PROOF",
    }),
    ogImageAlt: `${p.name} project brief. ${projectSummary}`,
    shareLabel: "share this project",
    shareTitle: `${p.name} — a sphinxstack project brief`,
    crumb: `<a href="/ideas/">Projects</a> / ${esc(p.name)}`,
    content: `
<div class="pagehead">
${existsSync(join(SITE, "assets", "project-img", `${p.id}.jpg`)) ? `<img class="pageimg" src="/assets/project-img/${p.id}.jpg" alt="">` : ""}
<h1>${esc(p.name)}</h1>
<p class="payoff">${p.level === 3 ? "Level 3: a month or more, real users. " : p.level === 2 ? "Level 2: two to three weeks, real architecture. " : ""}Use with: ${withSkills}. Resume line when done:
<em>${esc(p.resume_line.job)}</em></p>
</div>
${md(bodyOf(p.path))}
${relatedProjectLinks(p)}`,
  });
}
try {
  const ideasRaw = readFileSync(join(ROOT, "projects", "IDEAS.md"), "utf8");
  writeFileSync(join(DIST, "ideas.md"), ideasRaw);
} catch {}
const GROUP_ORDER = [
  "Bigger builds", "Automation & bots", "Games", "Data & ML",
  "Websites", "Apps & tools", "Data", "Content", "Community & events",
  "Selling & services", "Practice",
];
const LEVEL_TIME = { 1: "~1 wk", 2: "2–3 wk", 3: "1 mo+" };
const byGroup = new Map();
for (const p of projects) {
  const g = p.group ?? "Practice";
  if (!byGroup.has(g)) byGroup.set(g, []);
  byGroup.get(g).push(p);
}
const groupId = (g) => g.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const orderedGroups = [...GROUP_ORDER, ...[...byGroup.keys()].filter((g) => !GROUP_ORDER.includes(g))]
  .filter((g) => byGroup.has(g));
const levelCount = (lv) => projects.filter((p) => (p.level ?? 1) === lv).length;
const groupSections = orderedGroups
  .map((g) => {
    const rows = byGroup
      .get(g)
      .sort((a, b) => (a.level ?? 1) - (b.level ?? 1) || a.name.localeCompare(b.name))
      .map(
        (p) => `<tr data-level="${p.level ?? 1}"><td class="pn"><a href="/ideas/${p.id}/">${esc(p.name)}</a></td>
<td class="tt">${LEVEL_TIME[p.level ?? 1]}</td><td class="pd">${esc(firstSentence(bodyOf(p.path), "Brief"))}</td></tr>`,
      )
      .join("\n");
    return `<section class="gsec" id="${groupId(g)}">
<h2>${esc(g)} <span class="gcount"></span></h2>
<table class="proj"><colgroup><col class="c-n"><col class="c-t"><col class="c-d"></colgroup>
<tbody>
${rows}
</tbody></table>
</section>`;
  })
  .join("\n");
const projToc = orderedGroups
  .map((g) => `<a href="#${groupId(g)}">${esc(g)}</a> <span class="gcount" data-g="${groupId(g)}"></span>`)
  .join(" ·\n");
const projFilters = `<div class="filterline" role="group" aria-label="Filter by size">
<button class="fchip active" data-lv="0">All <b>${projects.length}</b></button>
<button class="fchip" data-lv="1">About a week <b>${levelCount(1)}</b></button>
<button class="fchip" data-lv="2">Two to three weeks <b>${levelCount(2)}</b></button>
<button class="fchip" data-lv="3">A month or more <b>${levelCount(3)}</b></button>
</div>
<div class="contents-box">
<b>Contents</b>
<p class="toc">${projToc}</p>
</div>`;
const projScript = `<script>
(() => {
  const rows = [...document.querySelectorAll("tr[data-level]")];
  const counts = () => {
    document.querySelectorAll(".gsec").forEach((sec) => {
      const n = [...sec.querySelectorAll("tr[data-level]")].filter((r) => !r.classList.contains("hid")).length;
      sec.querySelector(".gcount").textContent = "(" + n + ")";
      const t = document.querySelector('.toc .gcount[data-g="' + sec.id + '"]');
      if (t) {
        t.textContent = "(" + n + ")";
        t.previousElementSibling.classList.toggle("dim", n === 0);
      }
      sec.classList.toggle("hid", n === 0);
    });
  };
  document.querySelectorAll(".fchip").forEach((ch) => ch.addEventListener("click", () => {
    document.querySelectorAll(".fchip").forEach((c) => c.classList.remove("active"));
    ch.classList.add("active");
    const lv = +ch.dataset.lv;
    rows.forEach((r) => r.classList.toggle("hid", lv !== 0 && +r.dataset.level !== lv));
    counts();
  }));
  counts();
})();
</script>`;
page({
  wide: true,
  title: "Projects — sphinxstack",
  metaTitle: "Project ideas to build with AI | sphinxstack",
  desc: "Project briefs to point your skills at: each one personalized to your life, sized to about a week, ending in something you can show.",
  path: "ideas",
  targetQuery: "project ideas to build with AI",
  pageType: "CollectionPage",
  mainEntity: {
    "@type": "ItemList",
    name: "Project ideas to build with AI",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${SITE_URL}/ideas/${project.id}/`,
    })),
  },
  ogImage: renderOg("projects", {
    tab: "INDEX",
    kind: "PROJECT LIBRARY",
    eyebrow: "Things worth building",
    title: "Projects worth building",
    summary: "Real constraints, milestones, and finish lines for work you can show.",
    panelTitle: "Three depths",
    panelItems: ["Level 1: about a week", "Level 2: real architecture", "Level 3: real users"],
    footer: "PICK ONE · USE YOUR SKILLS",
  }),
  ogImageAlt: `${projects.length} sphinxstack project briefs across three levels`,
  content: `
<h1>Projects</h1>
<p>Things worth building with your skills, bent around your own life. Three levels:
Level 1 takes about a week. Level 2 takes two to three weeks and has real
architecture (a backend, a database, sign-in, an API). Level 3 is a month or more:
a system with real users that anchors a resume. Start where you are, or let
<a href="/skills/start-a-project/">start a project</a> pick with you.</p>
${projFilters}
${groupSections}
${projScript}`,
});

// setup page
page({
  title: "Use a skill — sphinxstack",
  metaTitle: "How to use AI agent skills | sphinxstack",
  desc: "Load a sphinxstack SKILL.md file into the agent you already use, then let the skill drive the work.",
  path: "setup",
  targetQuery: "how to use AI agent skills",
  pageType: "TechArticle",
  ogImage: renderOg("setup", {
    tab: "HOW TO",
    kind: "FIELD GUIDE",
    eyebrow: "One file, any agent",
    title: "How to use a skill",
    summary: "Load a plain SKILL.md file, describe the real task, and follow it to proof.",
    panelTitle: "The short path",
    panelItems: ["Choose a skill", "Load it into your agent", "Work until done is true"],
    footer: "NO INSTALL REQUIRED",
  }),
  ogImageAlt: "How to use a sphinxstack skill with any AI agent",
  content: `
<h1>Use a skill</h1>
<p>sphinxstack skills are plain <code>SKILL.md</code> files. They work with Codex,
Claude Code, Cursor, Copilot, Gemini, ChatGPT, and any other agent that can read a
file or URL.</p>

<h2>The short path</h2>
<ol>
<li><a href="/skills/">Choose a skill</a>.</li>
<li>Open it in your agent, give the agent its raw URL, or copy the file in.</li>
<li>Describe the real task. The skill supplies the process, rules, and checks.</li>
<li>Keep the skill loaded until its definition of done is satisfied.</li>
</ol>

<h2>Pick a useful first one</h2>
<ul>
<li><a href="/skills/use-an-api/">Use an API</a></li>
<li><a href="/skills/automate-a-task/">Automate a task</a></li>
<li><a href="/skills/deploy-anywhere/">Deploy anywhere</a></li>
<li><a href="/skills/ship-on-github/">Ship on GitHub</a></li>
<li><a href="/partmode/">Operate PartMode with an AI agent</a></li>
</ul>`,
});

// PartMode MCP operating guide and skill hub
page({
  wide: true,
  title: "PartMode MCP — operate CAD with an AI agent",
  metaTitle: "PartMode MCP — operate CAD with an AI agent",
  desc: "Learn PartMode with twelve guided CAD skills, connect an AI agent through MCP, and verify edits and exports with exact evidence.",
  path: "partmode",
  targetQuery: "PartMode MCP",
  pageType: "TechArticle",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "PartMode MCP", path: "/partmode/" },
  ],
  crumb: `<a href="/">Home</a> / PartMode MCP`,
  shareLabel: "share this guide",
  shareTitle: "Operate PartMode with an AI agent",
  ogImage: renderOg("partmode", {
    tab: "PARTMODE",
    kind: "MCP OPERATING GUIDE",
    eyebrow: "Exact CAD for people and agents",
    title: "Operate PartMode with an AI agent",
    summary: "Twelve learning skills plus safe MCP procedures for exact CAD work.",
    panelTitle: "Fifteen PartMode skills",
    panelItems: ["Learn from a first sketch", "Connect the agent safely", "Edit and export with evidence"],
    footer: "LEARN · CONNECT · BUILD",
  }),
  ogImageAlt: "PartMode learning and MCP guide with fifteen skills for exact CAD work",
  content: readFileSync(join(SITE, "pages", "partmode.html"), "utf8"),
});

// paid early beta application
page({
  wide: true,
  title: "Early beta — sphinxstack",
  metaTitle: "Paid early beta program | sphinxstack",
  desc: "Apply to join a small paid beta group, work directly with the team, and help shape what sphinxstack builds next.",
  path: "beta",
  indexable: false,
  pageType: "WebPage",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Early beta", path: "/beta/" },
  ],
  crumb: `<a href="/">Home</a> / Early beta`,
  shareLabel: "share this application",
  shareTitle: "Join the sphinxstack early beta",
  ogImage: renderOg("beta", {
    tab: "BETA",
    kind: "PAID PROGRAM",
    eyebrow: "A small group of active builders",
    title: "Build with us",
    summary: "Get early access, work directly with the team, and shape what comes next.",
    panelTitle: "Application",
    panelItems: ["A short builder profile", "A 60-second tooling check", "Separate internship route"],
    footer: "EARLY ACCESS · DIRECT FEEDBACK",
  }),
  ogImageAlt: "Apply to join the paid sphinxstack early beta program",
  content: readFileSync(join(SITE, "pages", "beta.html"), "utf8")
    .replaceAll("{{BETA_FORM_ENDPOINT}}", escAttr(BETA_FORM_ENDPOINT)),
});

// the brain guide
page({
  title: "How to set up your brain — sphinxstack",
  metaTitle: "How to build an AI agent brain | sphinxstack",
  desc: "The whole method for configuring an AI agent: identity, memory, skills, and reflexes, one sorting rule, and the habit that makes the setup compound.",
  path: "brain",
  targetQuery: "how to build an AI agent brain",
  pageType: "TechArticle",
  ogImage: renderOg("brain", {
    tab: "BRAIN",
    kind: "FIELD GUIDE",
    eyebrow: "The sphinxstack method",
    title: "How to set up your brain",
    summary: "Give your agent identity, memory, skills, and reflexes that compound.",
    panelTitle: "Four layers",
    panelItems: ["Identity + memory", "Skills + reflexes", "Keep what survives the chat"],
    footer: "SORT IT · KEEP IT · RUN IT AGAIN",
  }),
  ogImageAlt: "How to set up an AI agent brain with identity, memory, skills, and reflexes",
  content: readFileSync(join(SITE, "pages", "brain.html"), "utf8"),
});

// skills and graphs: what context does to a procedure
page({
  title: "What a graph does to a skill — sphinxstack",
  metaTitle: "Skills and graphs: what context does to a skill",
  desc: "How a graph changes a skill: situation, measurable generality, identity in the wiring, checkable claims, and the maintenance tradeoff, measured on two live corpora.",
  path: "graph",
  targetQuery: "skills and graphs",
  pageType: "TechArticle",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "What a graph does to a skill", path: "/graph/" },
  ],
  crumb: `<a href="/">Home</a> / Graph`,
  shareLabel: "share this page",
  shareTitle: "What a graph does to a skill",
  ogImage: renderOg("graph", {
    tab: "GRAPH",
    kind: "FIELD NOTES",
    eyebrow: "Skills in context",
    title: "What a graph does to a skill",
    summary: "Situation, measurable generality, and identity in the wiring, on two live corpora.",
    panelTitle: "Measured",
    panelItems: ["108 of 125 run accounts payable", "173 of 227 skills run in one type", "88 of 125 types share every skill"],
    footer: "ONE FILE FORMAT · TWO CORPORA",
  }),
  ogImageAlt: "What a graph does to a skill: context, generality, and composition for AI agent skills",
  content: readFileSync(join(SITE, "pages", "graph.html"), "utf8")
    .replaceAll("{{SKILL_COUNT}}", skills.length.toLocaleString("en-US")),
});

// about Sphinx and the reason for the library
page({
  title: "About sphinxstack",
  desc: "What the sphinxstack skill library contains, why it exists, and how its skills and project briefs are maintained.",
  path: "about",
  targetQuery: "sphinxstack",
  pageType: "AboutPage",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "About sphinxstack", path: "/about/" },
  ],
  crumb: `<a href="/">Home</a> / About`,
  shareLabel: "share this page",
  shareTitle: "About sphinxstack",
  ogImage: renderOg("about", {
    tab: "ABOUT",
    kind: "REFERENCE PAGE",
    eyebrow: "The library and its method",
    title: "About sphinxstack",
    summary: "What the library contains, why it exists, and how its skills are maintained.",
    panelTitle: "Library",
    panelItems: [`${skills.length} skills`, `${projects.length} project briefs`, "Plain text, any agent"],
    footer: "PLAIN FILES · FREE TO USE",
  }),
  ogImageAlt: "About sphinxstack, a library of plain-text skills and project briefs for AI agents",
  content: readFileSync(join(SITE, "pages", "about.html"), "utf8"),
});

// image credits (Wikimedia Commons attribution)
try {
  const credits = JSON.parse(readFileSync(join(SITE, "assets", "skill-img-credits.json"), "utf8"));
  const rows = Object.entries(credits)
    .sort()
    .map(
      ([id, c]) => `<li><a href="/skills/${id}/">${esc(titleOf(id))}</a> —
<a href="${esc(c.url)}">${esc((c.file || "").replace("File:", ""))}</a>${c.artist ? `, ${esc(c.artist)}` : ""}
(${esc(c.license || "public domain")}, via Wikimedia Commons)</li>`,
    )
    .join("\n");
  page({
    title: "Image credits — sphinxstack",
    desc: "Photographs on sphinxstack come from Wikimedia Commons. Full attribution per image.",
    path: "credits",
    indexable: false,
    pageType: "CollectionPage",
    content: `
<h1>Image credits</h1>
<p>Photographs on this site come from Wikimedia Commons, used under their stated
licenses. Cropped for display.</p>
<ul class="dense">
${rows}
</ul>`,
  });
} catch {}

// homepage
const homeSkill = skills.find((s) => s.id === "use-an-api");
const homePrompt = encodeURIComponent(
  `Read ${SITE_URL}/skills/use-an-api.md and follow it. Inspect my project and help me add a real API safely.`,
);
const homeProof = {
  "automate-a-task": "Done: an unattended run, a visible log, and a safe off switch.",
  "use-an-api": "Done: live data, handled failures, and no secret in git history.",
  "first-sql": "Done: real queries, saved notes, and answers checked against the data.",
  "ship-on-github": "Done: a repository, a repeatable commit loop, and a live Pages URL.",
  "deploy-anywhere": "Done: a public URL, push-to-deploy loop, and readable deploy logs.",
  "accessibility-pass": "Done: keyboard, label, contrast, and repeatable automated checks.",
};
function homeIndexItem(id) {
  const skill = skills.find((s) => s.id === id);
  const description = summarySentence(skill.description);
  return `<li><a href="/skills/${id}/"><strong>${esc(titleOf(id))}</strong></a>
<span class="wiki-home-description">${esc(description)}</span>
<span class="wiki-home-proof">${esc(homeProof[id])}</span>
${skillActivity(skill)}
</li>`;
}
function homeLatestItem(id) {
  const skill = skills.find((s) => s.id === id);
  const description = summarySentence(skill.description);
  const { doneItems } = skillStructure(skill);
  const proof = doneItems[0]
    ?? "A finished artifact with evidence another person can check";
  return `<li>
<a href="/skills/${id}/"><strong>${esc(titleOf(id))}</strong></a>
<span class="wiki-home-description">${esc(description)}</span>
<span class="wiki-home-proof">Proof: ${esc(trimLine(proof, 120))}</span>
${skillActivity(skill)}
</li>`;
}
const homeCategoryPurpose = {
  resume: "Turn real experience into documents and evidence for applications.",
  "get-hired": "Find openings, apply, interview, and follow through.",
  code: "Build systems that use data, APIs, automation, and accounts.",
  web: "Build, publish, measure, and improve work on the web.",
  start: "Turn an idea into a project, club, channel, or first sale.",
  write: "Draft, edit, publish, and send writing in the person's own voice.",
  design: "Make visual decisions, test them, and export usable artifacts.",
  media: "Record, edit, caption, and publish audio and video.",
  data: "Structure data, ask questions, and report what the evidence supports.",
  money: "Handle first budgets, prices, invoices, and sales carefully.",
  school: "Plan applications and study work without doing graded work for the student.",
  business: "Document how a business runs, then hand parts of it to an agent.",
};
function homeCategoryShelf(id, label) {
  const items = byCategory.get(id) ?? [];
  const homeLabel = id === "start" ? "Start something" : label;
  const links = items
    .slice(0, 6)
    .map((skill) => `<li><a href="/skills/${skill.id}/">${esc(titleOf(skill.id))}</a>
<span>${esc(summarySentence(skill.description))}</span></li>`)
    .join("\n");
  const more = items.length > 6
    ? `<a class="wiki-home-more" href="/skills/#${id}">${id === "start" ? "all project skills" : `all ${esc(label.toLowerCase())}`}</a>`
    : "";
  return `<section class="wiki-home-shelf">
<h3><a href="/skills/#${id}">${esc(homeLabel)}</a></h3>
<p>${esc(homeCategoryPurpose[id])}</p>
<ul>${links}</ul>
${more}
</section>`;
}
const homeProjectMap = new Map(projects.map((project) => [project.id, project]));
const homeProjectLanes = [
  {
    title: "Level 1 · about a week",
    description: "Finish one thing you can show.",
    ids: ["real-folder-repo", "fix-it-history", "week-of-logs", "interactive-tool", "missing-stat-table", "fan-reference"],
  },
  {
    title: "Level 2 · two to three weeks",
    description: "Connect several parts into a working system.",
    ids: ["downloads-janitor", "repo-action", "small-web-fix", "deadline-aggregator", "note-sorter", "discord-server-bot"],
  },
  {
    title: "Level 3 · a month or more",
    description: "Build for real users, then explain what you learned.",
    ids: ["online-turn-based", "speedrun-leaderboard", "camera-roll-classifier", "feeder-counter", "newsletter-engine", "order-desk"],
  },
];
function homeProjectLane(lane) {
  const links = lane.ids
    .map((id) => homeProjectMap.get(id))
    .filter(Boolean)
    .map((project) => `<li><a href="/ideas/${project.id}/">${esc(project.name)}</a></li>`)
    .join("\n");
  return `<section class="wiki-home-project-lane">
<h3>${esc(lane.title)}</h3>
<p>${esc(lane.description)}</p>
<ul>${links}</ul>
</section>`;
}
page({
  wide: true,
  title: "sphinxstack — skills for your agent",
  metaTitle: "Free AI agent skills for Claude, Codex & ChatGPT",
  desc: "Browse 1,021 reviewed, agent-loadable skills. Each skill defines a repeatable method, guardrails, and checkable evidence.",
  path: ".",
  targetQuery: "AI agent skills",
  pageType: "CollectionPage",
  ogImageAlt: "1,021 reviewed skills for Codex, Claude, Copilot, Gemini, and Cursor.",
  content: `
<section class="wiki-home-lead">
  <div class="wiki-home-intro" data-home-rotator>
    <div class="wiki-home-rotating-copy">
      <h1 data-rotating-title>Everything is a skill.</h1>
      <p class="wiki-home-deck" data-rotating-deck>A website, a database, a job
      search, the resume at the end. Each one can be a skill your agent knows how
      to follow.</p>
    </div>
    <section class="wiki-home-catalog" aria-labelledby="home-catalog-count">
      <div class="wiki-home-catalog-total">
        <span class="wiki-home-catalog-kicker">Published catalog</span>
        <strong id="home-catalog-count">${skills.length.toLocaleString("en-US")}</strong>
        <span class="wiki-home-catalog-label">reviewed skill files</span>
      </div>
      <dl class="wiki-home-catalog-breakdown">
        <div><dt>Starter</dt><dd>${skillRoadmap.level_targets.starter}</dd></div>
        <div><dt>Working</dt><dd>${skillRoadmap.level_targets.working}</dd></div>
        <div><dt>Advanced</dt><dd>${skillRoadmap.level_targets.advanced}</dd></div>
        <div><dt>Subjects</dt><dd>${Object.keys(skillRoadmap.category_targets).length}</dd></div>
      </dl>
      <a class="wiki-home-catalog-action" href="/skills/">
        Browse all ${skills.length.toLocaleString("en-US")} skills
        <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
    <p>sphinxstack is a working library of skills for Codex, Claude, Copilot,
    Gemini, and Cursor. Each skill gives an agent a method for one kind of work.
    Skills can refer to other skills; together, they form the skills layer of an
    agent's brain.</p>
    <p class="wiki-home-thesis">A skill tells the agent where to start, which
    steps to follow, which rules apply, and what must be true before the work is
    complete.</p>
    <p class="wiki-home-review-note">Every skill enters the catalog in a reviewed
    cohort of at most ${skillRoadmap.max_editorial_batch}, with an explicit finish
    and evidence another person can check.</p>
    <ul class="wiki-home-contents">
      <li><a href="#latest-skills">See the latest skills</a></li>
      <li><a href="#worked-example">See a skill at work</a></li>
      <li><a href="/ideas/">Pick a project brief</a></li>
      <li><a href="/brain/">Set up the rest of your brain</a></li>
      <li><a href="/partmode/">Operate CAD through PartMode MCP</a></li>
    </ul>
  </div>

  <aside id="worked-example" class="wiki-file wiki-example" aria-label="Worked example of the use-an-api skill">
    <div class="wiki-file-head">
      <strong>Worked example</strong>
      <a href="/skills/use-an-api/">use-an-api skill</a>
    </div>
    <dl class="wiki-example-brief">
      <div>
        <dt>Request</dt>
        <dd>Add today's weather to the club's event page.</dd>
      </div>
      <div>
        <dt>Starting point</dt>
        <dd>A static site, no backend, and no API selected.</dd>
      </div>
    </dl>
    <section class="wiki-example-method">
      <h2>What the skill makes the agent do</h2>
      <ol>
        <li><strong>Inspect the site.</strong><span>Identify the stack, host, and smallest useful place for the weather.</span></li>
        <li><strong>Read the API documentation.</strong><span>Record the endpoint, fields, authentication, limits, and attribution rules.</span></li>
        <li><strong>Choose a safe connection.</strong><span>Prefer an API with no secret. If a secret is required, keep it behind a server route.</span></li>
        <li><strong>Build every state.</strong><span>Show loading, current weather, and a useful unavailable message.</span></li>
        <li><strong>Test failure deliberately.</strong><span>Try a wrong URL, rejected credential, and an offline connection.</span></li>
      </ol>
    </section>
    <section class="wiki-example-proof">
      <h2>Evidence at the end</h2>
      <ul>
        <li>The deployed page renders live weather data.</li>
        <li>No secret appears in source, built files, browser tools, or git history.</li>
        <li>An API failure leaves the page usable and explains what happened.</li>
      </ul>
    </section>
    <div class="wiki-file-actions">
      <a href="https://chatgpt.com/?q=${homePrompt}" target="_blank" rel="noopener">Load in ChatGPT</a>
      <a href="https://claude.ai/new?q=${homePrompt}" target="_blank" rel="noopener">Load in Claude</a>
      <button class="wiki-text-button" data-copy="home-featured-skill">Copy SKILL.md</button>
    </div>
    <pre id="home-featured-skill" hidden>${esc(fullText(homeSkill.path))}</pre>
  </aside>

  <section class="wiki-home-hero-anatomy">
    <h2>Components of a skill</h2>
    <dl class="wiki-skill-anatomy">
      <div><dt>Trigger</dt><dd>When the agent should load it.</dd></div>
      <div><dt>Process</dt><dd>The ordered path, questions, tools, and handoffs.</dd></div>
      <div><dt>Guardrails</dt><dd>Secrets, scope, destructive actions, and known failure modes.</dd></div>
      <div><dt>Definition of done</dt><dd>The files, checks, URLs, logs, or other proof that must exist.</dd></div>
    </dl>
  </section>
</section>

<section id="latest-skills" class="wiki-home-section wiki-home-latest">
  <div class="wiki-home-heading">
    <h2>Latest skills</h2>
    <a href="/skills/">Complete skill index</a>
  </div>
  <p>The newest procedures added to the library, listed in publication order.
  Installs count successful loads of the raw SKILL.md file.</p>
  ${catalogActivitySummary()}
  <ul class="wiki-home-index">
    ${catalog.latest_skill_ids.map(homeLatestItem).join("\n")}
  </ul>
</section>

<section class="wiki-home-section wiki-home-basics">
  <article>
    <h2>What is a skill?</h2>
    <p>A skill is a reusable set of instructions that teaches an AI agent how to
    perform a specific kind of work. It records when the method applies, the order
    of work, the rules to follow, and the evidence required before the task is
    complete.</p>
    <p>For example, the <a href="/skills/use-an-api/">use-an-api skill</a> tells the
    agent to read documentation before writing code, keep credentials out of
    version control, test failure cases, and verify the shipped feature.</p>
  </article>
  <article>
    <h2>How is a skill different from a prompt?</h2>
    <p>A prompt describes a task or desired result. A skill supplies a repeatable
    method for completing it. <code>Connect this app to an API</code> requests an
    outcome; the skill specifies how the agent should produce and verify it.</p>
    <p>Because a skill is plain text, you can inspect it, revise it after a failure,
    version it, and use it with another agent. Skills can also refer to other
    skills, allowing several focused methods to support one project.</p>
  </article>
</section>

<section class="wiki-home-section">
  <div class="wiki-home-heading">
    <h2>Recommended starting skills</h2>
    <a href="/skills/">Complete index</a>
  </div>
  <p>These skills introduce processes, rules, and checks that can be reused across
  different projects.</p>
  <ul class="wiki-home-index">
    ${["automate-a-task", "use-an-api", "ship-on-github", "deploy-anywhere", "first-sql", "accessibility-pass"].map(homeIndexItem).join("\n")}
  </ul>
</section>

<section class="wiki-home-section wiki-home-directory">
  <div class="wiki-home-heading">
    <h2>Skill categories</h2>
    <a href="/skills/">Complete skill index</a>
  </div>
  <p>Each file includes a trigger, procedure, guardrails, and definition of done.
  Skills are grouped by kind of work; choose the one that matches the task in
  front of you.</p>
  <div class="wiki-home-shelves">
    ${CATEGORY_META.map(([id, label]) => homeCategoryShelf(id, label)).join("\n")}
  </div>
</section>

<section class="wiki-home-section wiki-home-projects">
  <div class="wiki-home-heading">
    <h2>Project briefs</h2>
    <a href="/ideas/">Complete project index</a>
  </div>
  <p>A project brief defines the work on which skills can be used. Each brief has
  milestones, constraints, and a finish line sized to the depth of the build.</p>
  <div class="wiki-home-project-grid">
    ${homeProjectLanes.map(homeProjectLane).join("\n")}
  </div>
</section>

<section class="wiki-home-section wiki-home-stacking">
  <div class="wiki-home-heading">
    <h2>How skills form a stack</h2>
    <a href="/brain/">Read how the brain is organized</a>
  </div>
  <p>A project can use several skills, but it does not have to use all of them.
  Each skill owns one procedure, leaves behind evidence, and recommends another
  skill only when the project needs it. This is one possible sequence for taking
  a web app from an idea to a resume entry.</p>
  <ol class="wiki-home-chain">
    <li>
      <a href="/skills/start-a-project/">Start a project</a>
      <p>Choose the user, narrow the problem, and write a finish line that can be checked.</p>
    </li>
    <li>
      <a href="/skills/build-web-app/">Build a web app</a>
      <p>Create the smallest complete flow and make the core data persist.</p>
    </li>
    <li>
      <a href="/skills/auth-basics/">Add authentication</a>
      <p>Give each user an identity and test who can read or change every record.</p>
    </li>
    <li>
      <a href="/skills/use-an-api/">Use an API</a>
      <p>Add outside data without exposing credentials, then test failed responses.</p>
    </li>
    <li>
      <a href="/skills/accessibility-pass/">Run an accessibility pass</a>
      <p>Check keyboard use, headings, labels, focus, contrast, and error messages.</p>
    </li>
    <li>
      <a href="/skills/deploy-anywhere/">Deploy anywhere</a>
      <p>Publish to a stable URL and record how to rebuild, inspect logs, and roll back.</p>
    </li>
    <li>
      <a href="/skills/add-analytics/">Add analytics</a>
      <p>Measure one useful question and verify that a real visit reaches the dashboard.</p>
    </li>
    <li>
      <a href="/skills/build-resume/">Build the resume</a>
      <p>Turn the shipped work, decisions, failures, and proof into a defensible entry.</p>
    </li>
  </ol>
</section>

<section class="wiki-home-section wiki-home-guides">
  <div class="wiki-home-heading">
    <h2>Using the skill library</h2>
    <a href="/setup/">How to load and use a skill</a>
  </div>
  <div class="wiki-home-guides-grid">
  <article id="project-briefs-with-skills">
    <h2>Using skills with a project brief</h2>
    <p>A project brief describes something worth building. It is not a tutorial.
    It supplies the shape of the project; skills supply the methods used to
    complete each part.</p>
    <dl class="wiki-home-guide-list">
      <div><dt>The brief</dt><dd>Defines the problem, constraints, milestones, and finish line.</dd></div>
      <div><dt>The skills</dt><dd>Provide repeatable procedures for planning, building, checking, and shipping.</dd></div>
      <div><dt>Your agent</dt><dd>Loads the relevant skill, follows it with you, and verifies the result.</dd></div>
      <div><dt>You</dt><dd>Supply the real context, make the decisions, and keep the finished artifacts.</dd></div>
    </dl>
    <ul class="wiki-home-guide-links">
      <li><a href="/ideas/">Browse all project briefs</a></li>
      <li><a href="/skills/start-a-project/">Shape your own project with start-a-project</a></li>
    </ul>
  </article>
  <article id="brain-setup">
    <h2>How to set up your brain</h2>
    <p>Skills are one of four layers in a useful agent setup. The other layers
    keep your methods attached to your preferences, your facts, and the checks
    that should happen every time.</p>
    <dl class="wiki-home-guide-list">
      <div><dt>Identity</dt><dd>Your standing preferences, taste, and rules.</dd></div>
      <div><dt>Memory</dt><dd>Facts about you, your work, and decisions already made.</dd></div>
      <div><dt>Skills</dt><dd>Procedures the agent can load and run for a specific kind of work.</dd></div>
      <div><dt>Reflexes</dt><dd>Checks that happen every time without needing to be requested.</dd></div>
    </dl>
    <ul class="wiki-home-guide-links">
      <li><a href="/brain/">Read the complete brain setup guide</a></li>
      <li><a href="/setup/">Learn how to load and use a skill</a></li>
    </ul>
  </article>
  </div>
</section>`,
});

function skillStatsScript() {
  return `<script>
(() => {
  const installLabel = (count) => {
    const number = new Intl.NumberFormat("en").format(count);
    return number + " skill load" + (count === 1 ? "" : "s");
  };
  const renderSkillStats = (container, stats) => {
    const installs = Number(stats.installs ?? stats.loads ?? 0);
    const target = container.querySelector('[data-stat="installs"]');
    if (target) target.textContent = installLabel(installs);
  };
  const renderCatalogStats = (summary) => {
    document.querySelectorAll("[data-catalog-stats]").forEach((container) => {
      const target = container.querySelector('[data-catalog-stat="installs"]');
      if (target) target.textContent = new Intl.NumberFormat("en").format(summary.installs ?? summary.loads ?? 0);
    });
  };
  const containers = [...document.querySelectorAll("[data-skill-stats]")];
  fetch("/stats/skills.json", { cache: "no-store", credentials: "omit" })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("stats unavailable")))
    .then((payload) => {
      containers.forEach((container) => {
        const stats = payload.skills && payload.skills[container.dataset.skillId];
        if (stats) renderSkillStats(container, stats);
      });
      const summary = payload.summary || Object.values(payload.skills || {}).reduce(
        (total, stats) => ({
          installs: total.installs + (stats.installs ?? stats.loads ?? 0),
        }),
        { installs: 0 },
      );
      renderCatalogStats(summary);
    })
    .catch(() => {});
})();
</script>`;
}

const homeRotatorScript = `<script>
(() => {
  const rotator = document.querySelector("[data-home-rotator]");
  if (!rotator) return;

  const copy = rotator.querySelector(".wiki-home-rotating-copy");
  const title = rotator.querySelector("[data-rotating-title]");
  const deck = rotator.querySelector("[data-rotating-deck]");
  const messages = [
    {
      title: "Everything is a skill.",
      deck: "A website, a database, a job search, the resume at the end. Each one can be a skill your agent knows how to follow."
    },
    {
      title: "No skill issues.",
      deck: "Give your agent the missing method: where to start, which steps to take, what to avoid, and how to know the work is done."
    }
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let timer = null;

  const schedule = () => {
    window.clearTimeout(timer);
    if (!reducedMotion.matches && !document.hidden) {
      timer = window.setTimeout(() => show((current + 1) % messages.length), 6200);
    }
  };

  const show = (next) => {
    copy.classList.add("is-changing");
    window.setTimeout(() => {
      current = next;
      title.textContent = messages[current].title;
      deck.textContent = messages[current].deck;
      copy.classList.remove("is-changing");
      schedule();
    }, 180);
  };

  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener?.("change", schedule);
  schedule();
})();
</script>`;

const homepagePath = join(DIST, "index.html");
writeFileSync(
  homepagePath,
  readFileSync(homepagePath, "utf8").replace("</body>", `${homeRotatorScript}\n</body>`)
);

function xmlEsc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
function sitemapUrlset(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((item) => `  <url><loc>${xmlEsc(item.canonical)}</loc></url>`).join("\n")}
</urlset>
`;
}
const indexedPages = builtPages.filter((item) => item.indexable);
const sitemapGroups = [
  ["skills", indexedPages.filter((item) => item.path === "/skills/" || item.path.startsWith("/skills/"))],
  ["ideas", indexedPages.filter((item) => item.path === "/ideas/" || item.path.startsWith("/ideas/"))],
  ["pages", indexedPages.filter((item) => !item.path.startsWith("/skills/") && !item.path.startsWith("/ideas/"))],
];
const SITEMAP_DIR = join(DIST, "sitemaps");
mkdirSync(SITEMAP_DIR, { recursive: true });
for (const [name, pages] of sitemapGroups) {
  writeFileSync(join(SITEMAP_DIR, `${name}.xml`), sitemapUrlset(pages));
}
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapGroups.map(([name]) => `  <sitemap><loc>${SITE_URL}/sitemaps/${name}.xml</loc></sitemap>`).join("\n")}
</sitemapindex>
`,
);
writeFileSync(
  join(DIST, "robots.txt"),
  `User-agent: Googlebot
Disallow: /*.md$
Disallow: /events/
Disallow: /stats/

User-agent: Bingbot
Disallow: /*.md$
Disallow: /events/
Disallow: /stats/

User-agent: *
Allow: /
Disallow: /events/
Disallow: /stats/

Sitemap: ${SITE_URL}/sitemap.xml
`,
);
writeFileSync(
  join(DIST, "seo-manifest.json"),
  `${JSON.stringify({
    version: 1,
    site: SITE_URL,
    indexable_pages: indexedPages.length,
    excluded_pages: builtPages.filter((item) => !item.indexable).map((item) => item.canonical),
    pages: builtPages.map(({ path, canonical, title, description, targetQuery, indexable }) => ({
      path,
      canonical,
      title,
      description,
      target_query: targetQuery,
      indexable,
    })),
  }, null, 2)}\n`,
);

const cardUrls = new Set(ogCards.map((card) => card.url));
if (cardUrls.size !== ogCards.length) throw new Error("share card URLs must be unique");
for (const card of ogCards) {
  if (!/\/og\/[a-z0-9-]+\.[a-f0-9]{10}\.png$/.test(card.url)) {
    throw new Error(`share card is not content-hashed: ${card.url}`);
  }
  const file = join(DIST, new URL(card.url).pathname);
  const png = readFileSync(file);
  if (png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630) {
    throw new Error(`share card has the wrong dimensions: ${card.url}`);
  }
}
for (const builtPage of builtPages) {
  if (!cardUrls.has(builtPage.image)) {
    throw new Error(`page has no generated share card: ${builtPage.path}`);
  }
  if (!builtPage.imageAlt) throw new Error(`page has no share card alt text: ${builtPage.path}`);
  const imageVersion = builtPage.image.match(/\.([a-f0-9]{10})\.png$/)?.[1];
  if (!imageVersion || !builtPage.shareUrl.endsWith(`?share=${imageVersion}`)) {
    throw new Error(`page share URL is not tied to its card: ${builtPage.path}`);
  }
}
writeFileSync(join(OG_DIR, "manifest.json"), JSON.stringify({
  version: 2,
  cards: ogCards,
  pages: builtPages,
}, null, 2) + "\n");

console.log(`share cards OK — ${ogCards.length} hashed image(s) cover ${builtPages.length} page(s)`);
console.log(`site built -> ${DIST}`);
