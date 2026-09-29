import {
  Hero,
  PartnerBadges,
  ValueProps,
  SectionHeading,
  Icon,
  TextLink,
  IndustryBento,
  Process,
  Stats,
  CTA,
  Testimonials,
} from "@/components/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import OdooHero from "@/components/odoo/OdooHero";
import { insightCards } from "@/content/insights";
import { industryCardItems } from "@/data/industries/hub";
export const metadata: Metadata = pageMetadata({
  title: "Odoo Partner in Egypt, UAE & KSA | ETripleSoft",
  absoluteTitle: true,
  description: siteConfig.defaultDescription,
  path: "/",
});

export default function Home() {
  return (
    <main id="main" className="homepage">
      <JsonLd data={organizationJsonLd()} />
      <Hero
        className="home-hero"
        eyebrow="Odoo Partner in Egypt, UAE & KSA"
        title={"Digital Transformation\nBuilt Around"}
        accent="Your Business."
        description="Odoo ERP, apps, AI and digital solutions for ambitious companies across Egypt, UAE and Saudi Arabia."
        image="hero-image"
        primary="Book a Free Consultation"
        secondary="Explore Solutions"
        secondaryHref="#solutions"
        note={"One platform.\nBetter decisions."}
      >
        <PartnerBadges />
      </Hero>
      <ValueProps />
      <OdooHero headingLevel="h2" primaryHref="/odoo" />
      <section
        id="solutions"
        className="section home-stage home-solutions-process-stage"
      >
        <div className="container">
          <div className="home-solutions-reference">
            <SectionHeading
              center
              eyebrow="Our Solutions"
              title={
                <>
                  Technology Solutions for a <em>Stronger Tomorrow</em>
                </>
              }
              description="From ERP and cloud to AI and digital experiences — we deliver end-to-end solutions that help you work smarter, grow faster, and stay ahead."
            />
            <div className="home-solutions-grid">
              {[
                [
                  "odoo",
                  "coins",
                  "Odoo ERP",
                  "End-to-end business management on one powerful platform.",
                ],
                [
                  "cloud",
                  "cloud",
                  "Cloud & Security",
                  "Secure, scalable and reliable cloud solutions for your business.",
                ],
                [
                  "ai",
                  "brain",
                  "AI Automation",
                  "Automate processes and unlock new opportunities with AI.",
                ],
                [
                  "web",
                  "monitor",
                  "Web & Mobile Development",
                  "Modern websites and applications that grow with your business.",
                ],
                [
                  "digital-marketing",
                  "chart",
                  "Digital Marketing",
                  "Data-driven marketing to increase your visibility and sales.",
                ],
              ].map(([slug, icon, title, description]) => (
                <article className="home-solution-card" key={slug}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <TextLink href={"/" + slug} prefetch={false}>
                    Learn More
                  </TextLink>
                </article>
              ))}
            </div>
          </div>
          <div className="home-process-reference">
            <Process inline />
          </div>
        </div>
      </section>
      <section className="section tinted home-stage home-industries-stage">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Deep Industry Expertise"
            description="We understand your industry. Our tailored solutions help you overcome challenges and achieve sustainable growth."
            link="Explore All Industries"
            href="/industries"
          />
          <IndustryBento items={industryCardItems} />
        </div>
      </section>
      <Stats
        title={
          <>
            Numbers That Tell <em>Our Story</em>
          </>
        }
        description="Real outcomes. Lasting partnerships. A growing impact across Egypt, UAE and Saudi Arabia."
        items={[
          [
            "250+",
            "Projects Delivered",
            "briefcase",
            "Real work, real outcomes for ambitious businesses.",
          ],
          ["3", "Countries", "globe", "Egypt, UAE & Saudi Arabia."],
          ["10+", "Years of Experience", "clock", "Building since day one."],
          ["9+", "Industries Served", "building", "Deep sector expertise."],
        ]}
      />
      <section className="section tinted home-stage home-testimonials-stage">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <section className="section insights-home home-stage home-insights-stage">
        <div className="container">
          <SectionHeading
            eyebrow="Our Insights"
            title="Latest Articles & Insights"
            description="Stay updated with the latest trends, tips and success stories."
            link="View All Articles"
            href="/insights"
          />
          <div className="card-grid cols-3">
            {insightCards().slice(0, 3).map((article) => (
              <Link className="article-card" href={"/insights/" + article.slug} prefetch={false} key={article.slug}>
                {article.image && (
                  <Image
                    className="home-article-image"
                    src={article.image.src}
                    alt={article.image.alt}
                    width={article.image.width}
                    height={article.image.height}
                    sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                  />
                )}
                <div>
                  <span className="tag">{article.category}</span>
                  <small>{article.dateLabel}</small>
                </div>
                <h3>{article.title}</h3>
                <p className="home-article-summary">{article.summary}</p>
                <span className="text-link">Read More <ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
