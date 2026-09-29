import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Photo, CTA, TextLink } from "@/components/site";
import { ArticleView } from "@/components/insights/ArticleView";
import { articleBySlug, articles } from "@/content/insights";
import { legacyDrafts } from "@/content/insights/drafts";

// Migrated articles are published. Anything left in legacyDrafts is served
// unlisted (noindex) so old links keep working without being indexed.
export function generateStaticParams() {
  return [
    ...articles.map((a) => a.slug),
    ...Object.keys(legacyDrafts),
  ].map((article) => ({ article }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article } = await params;
  const published = articleBySlug(article);
  if (published)
    return pageMetadata({
      title: published.metaTitle,
      description: published.description,
      path: `/insights/${published.slug}`,
      type: "article",
      publishedTime: published.datePublished,
      ...(published.image.src
        ? {
            image: {
              url: published.image.src,
              alt: published.image.alt,
            },
          }
        : {}),
    });
  const draft = legacyDrafts[article];
  return {
    title: draft?.title || "Article Not Found",
    robots: { index: false, follow: false },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const published = articleBySlug(article);
  if (published) return <ArticleView article={published} />;

  const a = legacyDrafts[article];
  if (!a) notFound();
  return (
    <main id="main">
      <div className="container">
        <article className="article-content">
          <TextLink href="/insights">All Articles</TextLink>
          <span className="eyebrow mt">{a.category}</span>
          <h1>{a.title}</h1>
          <p>{a.intro}</p>
          <Photo name={a.image} alt={a.title} />
          {a.sections.map(([t, p]) => (
            <section key={t}>
              <h2>{t}</h2>
              <p>{p}</p>
            </section>
          ))}
        </article>
      </div>
      <CTA />
    </main>
  );
}
