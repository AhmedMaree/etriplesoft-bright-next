import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/industries/IndustryPage";
import { industryPages } from "@/data/industries";

type IndustryRouteProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(industryPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const data = industryPages[slug as keyof typeof industryPages];
  if (!data) return {};
  return pageMetadata({
    title: data.seo.title,
    description: data.seo.description,
    path: `/industries/${data.slug}`,
  });
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const { slug } = await params;
  const data = industryPages[slug as keyof typeof industryPages];
  if (!data) notFound();
  return <IndustryPage data={data} />;
}
