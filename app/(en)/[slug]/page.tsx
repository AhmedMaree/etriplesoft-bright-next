import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import {
  AboutPage,
  PortfolioPage,
  ContactPage,
  SupportPage,
  CareersPage,
} from "@/components/company-pages";
import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/content/legal/privacy";
import { terms } from "@/content/legal/terms";
import { FaqsPage } from "@/components/faqs/FaqsPage";
import { servicePages } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { pages, serviceSchemaSlugs } from "@/lib/page-seo";
import InsightsReferencePage from "@/components/insights/InsightsReferencePage";
import { insightCards } from "@/content/insights";
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return { title: "Page Not Found", robots: { index: false } };
  return pageMetadata({ ...page, path: `/${slug}` });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return PageBody(slug);
}

function PageBody(slug: string) {
  if (servicePages[slug])
    return (
      <>
        {serviceSchemaSlugs.includes(slug) && (
          <JsonLd
            data={serviceJsonLd({
              path: `/${slug}`,
              name: pages[slug].title,
              description: pages[slug].description,
            })}
          />
        )}
        <ServicePage slug={slug} />
      </>
    );
  if (slug === "about") return <AboutPage />;
  if (slug === "portfolio") return <PortfolioPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "support-ticket") return <SupportPage />;
  if (slug === "careers") return <CareersPage />;
  if (slug === "faqs") return <FaqsPage />;
  if (slug === "insights")
    return <InsightsReferencePage articles={insightCards()} />;
  if (slug === "privacy") return <LegalPage doc={privacy} />;
  if (slug === "terms") return <LegalPage doc={terms} />;
  notFound();
}
