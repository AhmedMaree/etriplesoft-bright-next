import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedPage, { localizedPageMetadata } from "@/components/ar/LocalizedPage";
import { localizedRoutePaths } from "@/i18n/localized-paths";
import { industryHubItems } from "@/data/industries/hub";
import { arPortfolioProjectSlugs } from "@/i18n/ar-routes";
import { ArabicIndustriesPage, ArabicIndustryDetailPage } from "@/components/ar/ArabicIndustriesPage";
import { ArabicServicesPage } from "@/components/ar/ArabicServicesPage";
import { ArabicOdooPage } from "@/components/ar/ArabicOdooPage";
import { ArabicCareersPage } from "@/components/ar/ArabicCareersPage";
import { ArabicPortfolioPage } from "@/components/ar/ArabicPortfolioPage";
import { ArabicSupportPage } from "@/components/ar/ArabicSupportPage";
import { ArabicCloudReferencePage } from "@/components/ar/ArabicCloudReferencePage";
import { ArabicAIReferencePage } from "@/components/ar/ArabicAIReferencePage";
import { ArabicWebReferencePage } from "@/components/ar/ArabicWebReferencePage";
import { ArabicMobileReferencePage } from "@/components/ar/ArabicMobileReferencePage";
import { ArabicDigitalMarketingReferencePage } from "@/components/ar/ArabicDigitalMarketingReferencePage";
import { ArabicOdooDetailPage } from "@/components/ar/ArabicOdooDetailPage";
import { ArabicDemoPage } from "@/components/ar/ArabicDemoPage";
import { ArabicAboutPage } from "@/components/ar/ArabicAboutPage";
import { ArabicContactPage } from "@/components/ar/ArabicContactPage";
import { ArabicResourcesPage } from "@/components/ar/ArabicResourcesPage";

const routes = [...new Set([
  ...localizedRoutePaths,
  ...industryHubItems.map((item) => `/industries/${item.id}`),
  ...arPortfolioProjectSlugs.map((slug) => `/portfolio/${slug}`),
])];

export function generateStaticParams() {
  return routes.map((route) => ({ segments: route.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ segments: string[] }> }): Promise<Metadata> {
  const { segments } = await params;
  return localizedPageMetadata(`/${segments.join("/")}`);
}

export default async function ArabicLocalizedRoute({ params }: { params: Promise<{ segments: string[] }> }) {
  const { segments } = await params;
  const path = `/${segments.join("/")}`;
  if (!routes.includes(path)) notFound();
  if (path === "/about" || path === "/about-us") return <ArabicAboutPage />;
  if (path === "/contact" || path === "/contact-us") return <ArabicContactPage />;
  if (path === "/resources") return <ArabicResourcesPage />;
  if (path === "/industries") return <ArabicIndustriesPage />;
  if (path.startsWith("/industries/")) return <ArabicIndustryDetailPage slug={path.slice("/industries/".length)} />;
  if (path === "/services") return <ArabicServicesPage />;
  if (path === "/odoo") return <ArabicOdooPage />;
  if (path === "/careers") return <ArabicCareersPage />;
  if (path === "/portfolio") return <ArabicPortfolioPage />;
  if (path === "/support-ticket") return <ArabicSupportPage />;
  if (path === "/request-demo") return <ArabicDemoPage />;
  if (path === "/cloud") return <ArabicCloudReferencePage />;
  if (path === "/ai") return <ArabicAIReferencePage />;
  if (path === "/web") return <ArabicWebReferencePage />;
  if (path === "/mobile") return <ArabicMobileReferencePage />;
  if (path === "/digital-marketing") return <ArabicDigitalMarketingReferencePage />;
  if (path.startsWith("/odoo/")) return <ArabicOdooDetailPage slug={path.slice("/odoo/".length)} />;
  return <LocalizedPage path={path} />;
}
