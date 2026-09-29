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
import { servicePages, services } from "@/lib/data";
import { JsonLd } from "@/components/json-ld";
import { CrumbStrip, type Crumb } from "@/components/breadcrumb";
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
// Pages whose own layout has no breadcrumb get one here, following the site
// hierarchy (services sit under /services, everything else under Home).
function trail(slug: string): Crumb[] | null {
  const home = { label: "Home", href: "/" };
  const service = services.find((item) => item.slug === slug);
  if (service && slug !== "odoo")
    return [home, { label: "Services", href: "/services" }, { label: service.title }];
  const labels: Record<string, string> = {
    about: "About",
    careers: "Careers",
    insights: "Insights",
    odoo: "Odoo ERP",
  };
  return labels[slug] ? [home, { label: labels[slug] }] : null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crumbs = trail(slug);
  return (
    <>
      {crumbs && <CrumbStrip items={crumbs} />}
      {PageBody(slug)}
    </>
  );
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
