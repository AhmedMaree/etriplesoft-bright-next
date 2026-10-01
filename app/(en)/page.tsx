import {
  Hero,
  PartnerBadges,
  ValueProps,
  SectionHeading,
  Icon,
  Process,
  Stats,
  CTA,
  Testimonials,
} from "@/components/site";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { organizationGraphJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { ClientLogos } from "@/components/home/ClientLogos";
import { HomeMotion } from "@/components/home/HomeMotion";
import { OdooAppsGrid } from "@/components/home/OdooAppsGrid";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { HomeArticles } from "@/components/home/HomeArticles";
export const metadata: Metadata = pageMetadata({
  title: "Odoo Gold Partner in Egypt, UAE & Saudi Arabia | ETripleSoft",
  absoluteTitle: true,
  description: siteConfig.defaultDescription,
  path: "/",
});

export default function Home() {
  return (
    <main id="main" className="homepage">
      <JsonLd data={organizationGraphJsonLd()} />
      <HomeMotion />
      <Hero
        className="home-hero"
        eyebrow="Odoo Gold Partner · Egypt · UAE · Saudi Arabia"
        title={"Digital Transformation\nBuilt Around"}
        accent="Your Business."
        description="Odoo ERP, apps, AI and digital solutions for ambitious companies across Egypt, UAE and Saudi Arabia."
        image="hero-image"
        mobileImage="hero-mobile-en"
        primary="Book a Free Consultation"
        primaryHref="/book-consultation"
        secondary="Explore Solutions"
        secondaryHref="/services"
        note={"One platform.\nBetter decisions."}
      >
        <PartnerBadges />
      </Hero>
      <ClientLogos />
      <ValueProps />
      <OdooAppsGrid />
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
                  <h3>
                    <Link className="card-link" href={"/" + slug}>
                      {title}
                    </Link>
                  </h3>
                  <p>{description}</p>
                  <ArrowRight className="card-arrow" size={18} aria-hidden="true" />
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
          <IndustriesShowcase />
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
          ["250+", "Projects Delivered", "briefcase"],
          ["3", "Countries", "globe"],
          ["8+", "Years of Experience", "clock"],
          ["6", "Industries Served", "building"],
        ]}
      />
      <section className="section tinted home-stage home-testimonials-stage">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <section className="section insights-home home-stage home-insights-stage">
        <div className="container">
          <HomeArticles />
        </div>
      </section>
      <CTA />
    </main>
  );
}
