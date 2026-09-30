import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon, SectionHeading } from "@/components/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "Browse ETripleSoft's company profile, courses, project portfolio and Odoo chart of accounts generator.",
  path: "/resources",
});

const resources = [
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Browse the gallery of projects and organizations featured on the legacy ETripleSoft website.",
    icon: "briefcase",
    label: "View portfolio",
    href: "/portfolio",
    internal: true,
  },
  {
    id: "company-profile",
    title: "Company profile",
    description:
      "Download the ETripleSoft company profile as a PDF.",
    icon: "file",
    label: "Download profile PDF",
    href: "/company-profile.pdf",
    download: true,
  },
  {
    id: "courses",
    title: "Courses",
    description:
      "Open the ETripleSoft learning portal to browse available courses.",
    icon: "graduation",
    label: "Browse courses",
    href: "https://learn.etriplesoft.com/",
    external: true,
  },
  {
    id: "chart-of-accounts",
    title: "Chart of accounts generator",
    description:
      "Open the interactive Odoo chart of accounts generator for Egypt, the UAE and Saudi Arabia.",
    icon: "chart",
    label: "Open generator",
    href: "/tools/chart-of-accounts",
    internal: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <main id="main" className="section tinted">
        <div className="container">
          <SectionHeading
            eyebrow="Resources"
            title="Company information and tools"
            headingLevel={1}
            description="Find our company profile, project portfolio, training portal and Odoo chart of accounts generator in one place."
          />
          <div className="card-grid cols-4 resource-grid">
            {resources.map((resource) => {
              const content = (
                <>
                  <Icon name={resource.icon} />
                  <h2>{resource.title}</h2>
                  <p>{resource.description}</p>
                  <span className="resource-card-link">
                    {resource.label}
                    {resource.external && <ArrowUpRight aria-hidden="true" size={16} />}
                  </span>
                </>
              );

              return (
                <article className="service-card resource-card" key={resource.id}>
                  {resource.internal ? (
                    <Link href={resource.href} prefetch={false}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={resource.href}
                      download={"download" in resource ? resource.download : undefined}
                      target={resource.external ? "_blank" : undefined}
                      rel={resource.external ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
