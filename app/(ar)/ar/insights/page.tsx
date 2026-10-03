import type { Metadata } from "next";
import InsightsReferencePage, { type InsightCard } from "@/components/insights/InsightsReferencePage";
import { arabicArticles } from "@/content/insights-ar";
import { insightCards } from "@/content/insights";
import { arDateFormat, arReadingMinutes } from "@/i18n/ar";
import { arInsightSummaries } from "@/i18n/ar-routes";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "المدونة: أدلة عن أودو والأمن السيبراني في مصر والخليج",
  description:
    "مقالات عملية من ETripleSoft عن أسعار أودو، واختيار شريك التنفيذ، وقوانين حماية البيانات في مصر والسعودية والإمارات.",
  path: "/ar/insights",
});

function arabicInsightCards(): InsightCard[] {
  const original = arabicArticles.map((article) => ({
    title: article.title,
    summary: article.description,
    category: article.category,
    slug: article.slug,
    image: { src: article.image, alt: article.title, width: 1200, height: 630 },
    date: article.datePublished.slice(0, 10),
    dateLabel: arDateFormat.format(new Date(`${article.datePublished.slice(0, 10)}T12:00:00Z`)),
    minutes: arReadingMinutes(article.body),
  }));

  const translated = insightCards().flatMap((source) => {
    const translation = arInsightSummaries.find((item) => item.slug === source.slug);
    if (!translation) return [];
    return [{
      ...source,
      title: translation.title,
      summary: translation.description,
      category: translation.category,
      image: source.image ? { ...source.image, alt: translation.title } : undefined,
      dateLabel: arDateFormat.format(new Date(`${source.date}T12:00:00Z`)),
      minutes: arReadingMinutes(translation.body),
    }];
  });

  return [...original, ...translated].sort((a, b) => b.date.localeCompare(a.date));
}

export default function ArabicInsights() {
  return <InsightsReferencePage articles={arabicInsightCards()} locale="ar" />;
}
