// Route pairs between the English site (root) and the Arabic site (/ar).
// A page appears here only when both languages carry the same content, so
// hreflang stays truthful and reciprocal, and the language switcher can keep
// the visitor on the equivalent page. Anything not listed falls back to the
// other language's home (or blog, for Arabic articles).

export const localePairs = [
  { en: "/", ar: "/ar" },
  { en: "/about", ar: "/ar/about-us" },
  { en: "/contact", ar: "/ar/contact-us" },
  { en: "/insights", ar: "/ar/insights" },
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
  return localePairs.find((pair) => pair.en === normalizePath(enPath))?.ar ?? "/ar";
}

/** Where the "English" switcher on an Arabic page should go. */
export function englishCounterpart(arPath: string): string {
  const clean = normalizePath(arPath);
  const pair = localePairs.find((item) => item.ar === clean);
  if (pair) return pair.en;
  return clean.startsWith("/ar/insights/") ? "/insights" : "/";
}
