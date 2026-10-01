import { localizedInsightSlugs, localizedLegacyInsightSlugs, localizedPortfolioProjectSlugs, localizedRoutePaths } from "./localized-paths";

// Route pairs between the English site (root) and the Arabic site (/ar).
// The Arabic equivalents use translated page content while retaining the
// English slug where there is no established Arabic alias.

const aliases = [
  { en: "/", ar: "/ar" },
  { en: "/about", ar: "/ar/about-us" },
  { en: "/contact", ar: "/ar/contact-us" },
  { en: "/insights", ar: "/ar/insights" },
] as const;

const industryPagesWithEnglishRoutes = new Set([
  "/industries/construction",
  "/industries/real-estate",
  "/industries/facility-management",
  "/industries/restaurants",
  "/industries/education",
  "/industries/retail",
  "/industries/healthcare",
  "/industries/logistics",
]);

export const localePairs = [
  ...aliases,
  ...localizedRoutePaths
    .filter((en) => !en.startsWith("/industries/") || industryPagesWithEnglishRoutes.has(en))
    .map((en) => ({ en, ar: `/ar${en}` })),
  ...localizedInsightSlugs.map((slug) => ({ en: `/insights/${slug}`, ar: `/ar/insights/${slug}` })),
  ...localizedLegacyInsightSlugs.map((slug) => ({ en: `/insights/${slug}`, ar: `/ar/insights/${slug}` })),
  ...localizedPortfolioProjectSlugs.map((slug) => ({ en: `/portfolio/${slug}`, ar: `/ar/portfolio/${slug}` })),
] as const;

/** Strip query, hash and trailing slash so lookups are exact. */
export function normalizePath(path: string): string {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export const isArabicPath = (path: string) => {
  const clean = normalizePath(path);
  return clean === "/ar" || clean.startsWith("/ar/");
};

/** Both language URLs for a page that exists in both, else null. */
export function pairFor(path: string) {
  const clean = normalizePath(path);
  return (
    localePairs.find((pair) => pair.en === clean || pair.ar === clean) ?? null
  );
}

/** Where the "العربية" switcher on an English page should go. */
export function arabicCounterpart(enPath: string): string {
  const clean = normalizePath(enPath);
  const portfolioProject = clean.match(/^\/portfolio\/([^/]+)$/)?.[1];
  if (portfolioProject && localizedPortfolioProjectSlugs.includes(portfolioProject as (typeof localizedPortfolioProjectSlugs)[number])) return `/ar/portfolio/${portfolioProject}`;
  return localePairs.find((pair) => pair.en === clean)?.ar ?? (clean === "/" ? "/ar" : `/ar${clean}`);
}

/** Where the "English" switcher on an Arabic page should go. */
export function englishCounterpart(arPath: string): string {
  const clean = normalizePath(arPath);
  const pair = localePairs.find((item) => item.ar === clean);
  if (pair) return pair.en;
  const portfolioProject = clean.match(/^\/ar\/portfolio\/([^/]+)$/)?.[1];
  if (portfolioProject && localizedPortfolioProjectSlugs.includes(portfolioProject as (typeof localizedPortfolioProjectSlugs)[number])) return `/portfolio/${portfolioProject}`;
  if (clean.startsWith("/ar/insights/")) return "/insights";
  if (/^\/ar\/industries\/[^/]+$/.test(clean)) return "/industries";
  return clean.startsWith("/ar/") ? clean.slice(3) : "/";
}
