// Responsive audit: loads every sitemap page (plus a 404) at a range of widths
// in headless Chromium and reports layout defects.
//
//   npm run check-responsive                       (server on http://localhost:3000)
//   npm run check-responsive -- --widths=320,768 --pages=/,/contact
//   npm run check-responsive -- --shots=reports/shots   (full-page screenshots)
//   npm run check-responsive -- --json
//
// Errors: horizontal page overflow, clipped headings, desktop and mobile
// navigation visible together, broken images, a navigation that is not
// reachable. Warnings: small tap targets and tiny text on narrow screens.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { Reporter, parseArgs, request, writeJson } from "./lib/qa.mjs";

const args = parseArgs();
const { base } = args;
const widths = (args.values.widths || "320,375,430,768,900,1024,1280,1440,1920").split(",").map(Number);
const shotsDir = args.values.shots;
const report = new Reporter();

let paths;
if (args.values.pages) paths = args.values.pages.split(",");
else {
  try {
    const res = await request(base + "/sitemap.xml");
    const xml = await res.text();
    paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  } catch (error) {
    console.error(`Cannot reach ${base} (${error.cause?.code || error.message}). Start the app first.`);
    process.exit(2);
  }
  paths.push("/does-not-exist"); // 404 page
}

/** Runs inside the page. Returns a list of findings for the current viewport. */
function audit(viewport) {
  const findings = [];
  const vw = document.documentElement.clientWidth;
  const label = (el) => {
    const cls = typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0, 2).join(".") : "";
    return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}`;
  };
  const inScroller = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const o = getComputedStyle(p).overflowX;
      if (o === "auto" || o === "scroll" || o === "hidden" || o === "clip") return true;
    }
    return false;
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== "hidden" && s.display !== "none";
  };

  // 1. Page-level horizontal overflow.
  const doc = document.documentElement;
  if (doc.scrollWidth > vw + 1) {
    const offenders = [];
    for (const el of document.body.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 && r.width > 0 && !inScroller(el) && getComputedStyle(el).position !== "fixed") offenders.push(`${label(el)} (right ${Math.round(r.right)})`);
    }
    findings.push({ type: "HORIZONTAL_OVERFLOW", severity: "error", detail: `scrollWidth ${doc.scrollWidth} > viewport ${vw}; widest: ${offenders.slice(0, 4).join(", ") || "unknown"}` });
  }

  // 2. Headings and buttons whose text is clipped or spills out of the box.
  for (const el of document.querySelectorAll("h1,h2,h3,.button,button")) {
    if (!visible(el)) continue;
    if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX !== "visible")
      findings.push({ type: "CLIPPED_TEXT", severity: "error", detail: `${label(el)} "${el.textContent.trim().slice(0, 40)}"` });
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 && !inScroller(el)) findings.push({ type: "TEXT_OFF_SCREEN", severity: "error", detail: `${label(el)} "${el.textContent.trim().slice(0, 40)}"` });
  }

  // 3. Navigation: exactly one of desktop nav / mobile toggle is usable.
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".site-header .navigation");
  if (toggle && nav) {
    const toggleShown = visible(toggle);
    const navShown = visible(nav) && nav.getBoundingClientRect().height > 0 && getComputedStyle(nav).opacity !== "0" && nav.getBoundingClientRect().left >= -1 && nav.getBoundingClientRect().left < vw;
    if (toggleShown && navShown && viewport.width > 1000) findings.push({ type: "NAV_DUPLICATED", severity: "error", detail: "desktop navigation and mobile toggle both visible" });
    if (!toggleShown && !navShown) findings.push({ type: "NAV_UNREACHABLE", severity: "error", detail: "neither the navigation nor the menu button is visible" });
    if (!toggleShown) {
      const links = [...nav.querySelectorAll(":scope > a, :scope > .nav-dropdown")].filter(visible);
      const rows = new Set(links.map((l) => Math.round(l.getBoundingClientRect().top / 10)));
      if (rows.size > 1) findings.push({ type: "NAV_WRAPS", severity: "error", detail: `desktop navigation wraps onto ${rows.size} rows` });
      const header = document.querySelector(".site-header .header-inner");
      if (header && header.scrollWidth > header.clientWidth + 1) findings.push({ type: "NAV_CLIPPED", severity: "error", detail: "header content wider than its container" });
    }
  }

  // 4. Broken images.
  for (const img of document.images) if (img.complete && img.naturalWidth === 0 && visible(img)) findings.push({ type: "BROKEN_IMAGE", severity: "error", detail: img.getAttribute("src") });

  // 5. Narrow-screen usability (warnings).
  if (viewport.width <= 430) {
    let small = 0;
    const examples = [];
    for (const el of document.querySelectorAll("button, .button, input:not([type=hidden]):not([type=checkbox]), select, textarea, nav a, .site-footer a")) {
      if (!visible(el) || el.closest(".sr-only, .hp-field")) continue;
      const r = el.getBoundingClientRect();
      if (r.height < 24 || r.width < 24) {
        small++;
        if (examples.length < 3) examples.push(`${label(el)} ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
    }
    if (small) findings.push({ type: "SMALL_TAP_TARGET", severity: "warning", detail: `${small} control(s) under 24px: ${examples.join(", ")}` });
    let tiny = 0;
    for (const el of document.querySelectorAll("p, li, a, span, label")) {
      if (!visible(el) || !el.firstChild || el.firstChild.nodeType !== 3 || !el.textContent.trim() || el.closest('[aria-hidden="true"]')) continue;
      if (parseFloat(getComputedStyle(el).fontSize) < 11) tiny++;
    }
    if (tiny) findings.push({ type: "TINY_TEXT", severity: "warning", detail: `${tiny} text element(s) under 11px` });
  }

  // 6. Excessive heading wrap at small widths (hero h1 taller than 7 lines).
  const h1 = document.querySelector("h1");
  if (h1 && visible(h1)) {
    const s = getComputedStyle(h1);
    const lines = Math.round(h1.getBoundingClientRect().height / (parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.2));
    if (lines > 6) findings.push({ type: "H1_TOO_TALL", severity: "warning", detail: `h1 wraps onto ${lines} lines` });
  }

  // 7. Viewport meta must not block zoom.
  const meta = document.querySelector('meta[name="viewport"]')?.getAttribute("content") || "";
  if (/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/.test(meta)) findings.push({ type: "ZOOM_DISABLED", severity: "error", detail: meta });
  return findings;
}

// Optional executable override for CI images that provide their own Chromium.
const browser = await chromium.launch({
  ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
    : {}),
});
let checked = 0;
if (shotsDir) mkdirSync(shotsDir, { recursive: true });
for (const width of widths) {
  const height = width >= 1024 ? 900 : 800;
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, hasTouch: width <= 1024, isMobile: width <= 430 });
  for (const path of paths) {
    const page = await context.newPage();
    try {
      await page.goto(base + path, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(100);
      // Scroll through so lazy images load before measuring.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 10));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(50);
      const findings = await page.evaluate(audit, { width });
      for (const f of findings) report.add(f.type, f.severity, { source: path, width, detail: f.detail });
      if (shotsDir) await page.screenshot({ path: `${shotsDir}/${path === "/" ? "home" : path.slice(1).replace(/\//g, "_")}-${width}.png`, fullPage: true });
    } catch (error) {
      report.add("PAGE_ERROR", "error", { source: path, width, detail: error.message.split(String.fromCharCode(10))[0] });
    }
    await page.close();
    checked++;
  }
  await context.close();
}

// ---- navigation interaction (home page) at every width ----
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 800 }, hasTouch: width <= 1024 });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  try {
    await page.goto(base + "/", { waitUntil: "load" });
    // Next may finish loading the document before the client navigation
    // controls hydrate. Give the toggle a brief window before interacting.
    await page.waitForTimeout(300);
    const mobile = await page.locator(".mobile-toggle").isVisible();
    const fail = (type, detail) => report.add(type, "error", { source: "/ (navigation)", width, detail });
    if (mobile) {
      await page.locator(".mobile-toggle").tap();
      await page.waitForTimeout(350);
      const nav = await page.locator(".site-header .navigation").boundingBox();
      if (!nav || nav.x < -1 || nav.x + nav.width > width + 1) fail("MENU_OFF_SCREEN", `open mobile menu box ${JSON.stringify(nav)}`);
      if ((await page.locator(".mobile-toggle").getAttribute("aria-expanded")) !== "true") fail("MENU_ARIA", "mobile toggle lacks aria-expanded=true when open");
      const trigger = page.locator(".site-header .nav-dropdown-trigger").first();
      if (await trigger.count()) {
        await trigger.tap();
        await page.waitForTimeout(250);
        const panel = await page.locator(".site-header .nav-dropdown.is-open .dropdown-panel").first().boundingBox();
        if (panel && (panel.x < -1 || panel.x + panel.width > width + 1)) fail("MENU_OFF_SCREEN", `dropdown panel box ${JSON.stringify(panel)}`);
      }
      await page.keyboard.press("Escape");
    } else {
      const trigger = page.locator(".site-header .nav-dropdown-trigger").first();
      await trigger.hover();
      await page.waitForTimeout(300);
      let panel = await page.locator(".site-header .dropdown-panel:visible").first().boundingBox();
      if (!panel) {
        await trigger.click();
        await page.waitForTimeout(300);
        panel = await page.locator(".site-header .dropdown-panel:visible").first().boundingBox();
      }
      if (!panel) fail("MENU_UNREACHABLE", "dropdown does not open by hover or click");
      else if (panel.x < -1 || panel.x + panel.width > width + 1) fail("MENU_OFF_SCREEN", `dropdown panel box ${JSON.stringify(panel)}`);
      await trigger.focus();
      await page.keyboard.press("Enter");
      await page.waitForTimeout(200);
    }
  } catch (error) {
    report.add("MENU_ERROR", "error", { source: "/ (navigation)", width, detail: error.message.split(String.fromCharCode(10))[0] });
  }
  await context.close();
}
await browser.close();

// Group identical findings across widths.
const grouped = new Map();
for (const i of report.issues) {
  const key = `${i.severity}|${i.type}|${i.source}|${i.detail.replace(/\d+/g, "#")}`;
  const g = grouped.get(key) ?? { ...i, widths: [] };
  g.widths.push(i.width);
  grouped.set(key, g);
}
for (const g of [...grouped.values()].sort((a, b) => (a.severity === b.severity ? 0 : a.severity === "error" ? -1 : 1))) {
  console.log(`${g.severity.toUpperCase().padEnd(7)} ${g.type}  ${g.source}  @ ${g.widths.join(", ")}px\n        ${g.detail}\n`);
}
const count = (t) => report.issues.filter((i) => i.type === t).length;
console.log(`Checked ${paths.length} pages x ${widths.length} widths (${checked} loads)`);
console.log(`Errors: ${report.errors.length}   Warnings: ${report.warnings.length}`);
console.log(`  overflow: ${count("HORIZONTAL_OVERFLOW")}  clipped text: ${count("CLIPPED_TEXT") + count("TEXT_OFF_SCREEN")}  nav: ${count("NAV_DUPLICATED") + count("NAV_UNREACHABLE") + count("NAV_WRAPS") + count("NAV_CLIPPED")}  broken images: ${count("BROKEN_IMAGE")}`);
if (args.json) writeJson(args.jsonPath || "reports/responsive-check.json", { base, widths, issues: report.issues });
console.log(`\nResult: ${report.errors.length ? "FAILED" : report.warnings.length ? "PASSED with warnings" : "PASSED"}`);
process.exitCode = report.errors.length ? 1 : 0;
