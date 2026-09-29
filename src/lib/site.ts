import { company } from "./company";

export const siteUrl = company.websiteUrl;
export const siteName = company.name;

/** Site-wide SEO defaults. Pages override these through `pageMetadata()`. */
export const siteConfig = {
  name: siteName,
  url: siteUrl,
  locale: "en_US",
  defaultTitle: "ETripleSoft — Digital Transformation Built Around Your Business",
  defaultDescription:
    "ETripleSoft is an Odoo partner delivering ERP, cloud, AI, web, mobile and digital marketing solutions for businesses across Egypt, the UAE and Saudi Arabia.",
  /** Self-hosted 1200x630 fallback, built by scripts/build-og-image.mjs. */
  ogImage: {
    url: "/images/og-default.png",
    width: 1200,
    height: 630,
    alt: "ETripleSoft: digital transformation built around your business",
  },
  logo: "/images/logo-header.svg",
} as const;

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : siteUrl + (path === "/" ? "" : path);
