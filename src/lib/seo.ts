import type { Metadata } from "next";
import { absoluteUrl, siteConfig, siteName } from "./site";
import { company } from "./company";

export const organizationId = siteConfig.url + "/#organization";
const organizationRef = { "@id": organizationId };

export type FaqItem = { question: string; answer: string };

/** FAQPage JSON-LD. Pass exactly the questions that are visible on the page. */
export function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Article JSON-LD. The author is the organization; no person is credited. */
export function articleJsonLd(input: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    ...(input.image ? { image: [absoluteUrl(input.image)] } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    author: organizationRef,
    publisher: organizationRef,
  };
}

/**
 * The one Organization entity, built only from src/lib/company.ts and emitted
 * on the homepage. Other structured data references it by `@id`.
 * No ratings, reviews, opening hours, founding date or headcount: none are
 * confirmed.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.name,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
      width: 1600,
      height: 393,
    },
    email: company.primaryEmail,
    sameAs: company.socialLinks.map((link) => link.url),
    contactPoint: company.offices.flatMap((office) =>
      office.phones.map((phone) => ({
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phone.display,
        email: company.primaryEmail,
        areaServed: office.country,
      })),
    ),
    location: company.offices.map((office) => ({
      "@type": "Place",
      name: office.label,
      address: {
        "@type": "PostalAddress",
        addressLocality: office.city,
        addressCountry: office.country,
        ...(office.address ? { streetAddress: office.address } : {}),
      },
    })),
  };
}

/** Service JSON-LD for a genuine service page. Provider is the Organization. */
export function serviceJsonLd(input: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: organizationRef,
  };
}

type PageMetadataInput = {
  /** Page title without the brand suffix (the root template adds it). */
  title: string;
  description: string;
  /** Canonical site-relative path, e.g. "/odoo/accounting". */
  path: string;
  /** Use the title exactly as given, with no brand suffix (homepage). */
  absoluteTitle?: boolean;
  image?: { url: string; width?: number; height?: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Keep the page out of search results (still crawlable, so the tag is seen). */
  noindex?: boolean;
};

/**
 * Single builder for page metadata: title, description, canonical, Open Graph
 * and Twitter card. Every page goes through this so the pieces cannot drift.
 * No twitter:site/creator: no verified X account exists.
 */
export function pageMetadata(input: PageMetadataInput): Metadata {
  const image = input.image ?? siteConfig.ogImage;
  const socialTitle = input.absoluteTitle
    ? input.title
    : `${input.title} | ${siteName}`;
  const images = [
    {
      url: image.url,
      ...("width" in image && image.width ? { width: image.width } : {}),
      ...("height" in image && image.height ? { height: image.height } : {}),
      alt: image.alt,
    },
  ];
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: { canonical: input.path },
    ...(input.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: input.type ?? "website",
      url: input.path,
      siteName,
      locale: siteConfig.locale,
      title: socialTitle,
      description: input.description,
      images,
      ...(input.type === "article" && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
      ...(input.type === "article" && input.modifiedTime
        ? { modifiedTime: input.modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: input.description,
      images: images.map(({ url, alt }) => ({ url, alt })),
    },
  };
}
