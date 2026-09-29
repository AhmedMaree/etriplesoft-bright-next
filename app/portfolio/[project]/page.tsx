import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Photo, CTA, TextLink } from "@/components/site";
const aliases: Record<string, string> = {
  "manufacturing-erp": "erp",
  "ai-document-automation": "ai",
  "digital-marketing": "marketing",
};
export function generateStaticParams() {
  return [
    ...projects.map((p) => p.image.replace("project-", "")),
    ...Object.keys(aliases),
  ].map((project) => ({ project }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const p = projects.find(
    (p) => p.image === "project-" + (aliases[project] || project),
  );
  // Illustrative project pages: not in the sitemap and not linked from the
  // site, so they are kept out of search results.
  return {
    title: p?.title || "Project Not Found",
    alternates: { canonical: `/portfolio/${project}` },
    robots: { index: false, follow: true },
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const p = projects.find(
    (p) => p.image === "project-" + (aliases[project] || project),
  );
  if (!p) notFound();
  return (
    <main id="main">
      <div className="container">
        <article className="article-content">
          <TextLink href="/portfolio">All Projects</TextLink>
          <span className="eyebrow mt">
            {p.category} · Project Scope Example
          </span>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
          <Photo name={p.image} alt={p.title} />
          <h2>Typical Challenge</h2>
          <p>
            Organizations considering this type of project often need a more
            connected way to manage work, improve visibility and reduce manual
            handoffs between teams.
          </p>
          <h2>Potential Scope</h2>
          <p>
            A real engagement would begin by documenting the workflow, systems,
            responsibilities and evidence required to define an appropriate
            solution. This page is an illustrative layout, not a published
            client case study.
          </p>
          <h2>Built Around the Business</h2>
          <p>
            Our approach brings discovery, solution design, implementation,
            training and ongoing support into one coordinated project. Contact
            our team to discuss a similar solution for your organization.
          </p>
          <TextLink href={"/contact?service=" + encodeURIComponent(p.category)}>
            Discuss Your Project
          </TextLink>
        </article>
      </div>
      <CTA title="Ready to Define Your Project Scope?" />
    </main>
  );
}
