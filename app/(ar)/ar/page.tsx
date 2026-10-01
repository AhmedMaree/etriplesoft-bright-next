import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import { ClientLogos } from "@/components/home/ClientLogos";
import { HomeMotion } from "@/components/home/HomeMotion";
import { OdooAppsGrid } from "@/components/home/OdooAppsGrid";
import { IndustriesShowcase } from "@/components/home/IndustriesShowcase";
import { HomeArticles } from "@/components/home/HomeArticles";
import { JsonLd } from "@/components/json-ld";
import { arHome, arOffices } from "@/i18n/ar";
import { company } from "@/lib/company";
import { organizationGraphJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "شريك أودو الذهبي في مصر والإمارات والسعودية | ETripleSoft",
  absoluteTitle: true,
  description:
    "ETripleSoft شريك أودو الذهبي: حلول أنظمة ERP، السحابة والأمن السيبراني، أتمتة الذكاء الاصطناعي، وتطوير المواقع والتطبيقات والتسويق الرقمي للشركات في مصر والإمارات والسعودية.",
  path: "/ar",
});

export default function ArabicHome() {
  const arabicOfficesList = [
    { id: "egypt", label: arOffices.egypt.label },
    { id: "saudi", label: arOffices.saudi.label },
    { id: "uae", label: arOffices.uae.label },
  ];

  return (
    <main id="main" className="homepage">
      <JsonLd data={organizationGraphJsonLd()} />
      <HomeMotion />

      {/* Hero Section */}
      <Hero
        className="home-hero"
        eyebrow={arHome.hero.eyebrow}
        title={arHome.hero.title}
        accent={arHome.hero.accent}
        description={arHome.hero.description}
        image="hero-image-ar"
        mobileImage="hero-mobile-ar"
        primary={arHome.hero.primary}
        primaryHref={arHome.hero.primaryHref}
        secondary={arHome.hero.secondary}
        secondaryHref={arHome.hero.secondaryHref}
        note={arHome.hero.note}
        callouts={arHome.hero.callouts}
      >
        <PartnerBadges odooLabel="شريك ذهبي" microsoftLabel={<>شريك<br />مايكروسوفت</>} />
      </Hero>

      {/* Client Logos Strip */}
      <ClientLogos title={arHome.clientLogosTitle} />

      {/* Value Props Section */}
      <ValueProps
        eyebrow={arHome.valueProps.eyebrow}
        title={
          <>
            {arHome.valueProps.titleText} <em>{arHome.valueProps.titleAccent}</em>
          </>
        }
        description={arHome.valueProps.description}
        items={arHome.valueProps.items}
      />

      {/* Odoo Apps Grid Showcase */}
      <div id="odoo-apps">
      <OdooAppsGrid
        pill={arHome.odooApps.pill}
        title={
          <>
            {arHome.odooApps.titleLine1}
            <br />
            {arHome.odooApps.titleLine2}
            <br />
            <em>{arHome.odooApps.titleAccent}</em>
          </>
        }
        description={arHome.odooApps.description}
        ctaLabel={arHome.odooApps.cta}
        ctaHref={arHome.odooApps.ctaHref}
        visualNote={
          <>
            منصة واحدة
            <br />
            إمكانيات لا محدودة
          </>
        }
        visualCaption={arHome.odooApps.visualCaption}
        appsList={arHome.odooApps.apps}
        chipsList={arHome.odooApps.chips.map(({ label }) => ({ label }))}
      />
      </div>

      {/* Solutions & Process Stage */}
      <section
        id="solutions"
        className="section home-stage home-solutions-process-stage"
      >
        <div className="container">
          <div className="home-solutions-reference">
            <SectionHeading
              center
              eyebrow={arHome.solutions.eyebrow}
              title={
                <>
                  {arHome.solutions.titleText} <em>{arHome.solutions.titleAccent}</em>
                </>
              }
              description={arHome.solutions.description}
            />
            <div className="home-solutions-grid">
              {arHome.solutions.items.map((sol) => (
                <article className="home-solution-card" key={sol.slug}>
                  <Icon name={sol.icon} />
                  <h3>
                  <Link className="card-link" href={"/ar/" + sol.slug}>
                      {sol.title}
                    </Link>
                  </h3>
                  <p>{sol.description}</p>
                  <ArrowRight className="card-arrow" size={18} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
          <div className="home-process-reference">
            <Process
              inline
              pill={arHome.process.pill}
              title={
                <>
                  {arHome.process.titleLine1}
                  <br />
                  <em>{arHome.process.titleAccent}</em>
                </>
              }
              description={arHome.process.description}
              ctaLabel={arHome.process.cta}
              ctaHref={arHome.process.ctaHref}
              moreLabel={arHome.process.more}
              stepItems={arHome.process.steps}
            />
          </div>
        </div>
      </section>

      {/* Industries Stage */}
      <section id="industries" className="section tinted home-stage home-industries-stage">
        <div className="container">
          <IndustriesShowcase
            eyebrow={arHome.industries.eyebrow}
            title={arHome.industries.title}
            lead={arHome.industries.lead}
            ctaLabel={arHome.industries.cta}
            ctaHref={arHome.industries.ctaHref}
            exploreLabel={(title) => `استكشف ${title}`}
            statsList={arHome.industries.stats}
            industriesList={arHome.industries.items}
          />
        </div>
      </section>

      {/* Stats Section */}
      <Stats
        badge={arHome.stats.badge}
        title={
          <>
            {arHome.stats.titleText} <em>{arHome.stats.titleAccent}</em>
          </>
        }
        description={arHome.stats.description}
        items={arHome.stats.items}
        offices={arabicOfficesList}
      />

      {/* Testimonials Stage */}
      <section id="testimonials" className="section tinted home-stage home-testimonials-stage">
        <div className="container">
          <Testimonials
            locale="ar"
            eyebrow={arHome.testimonials.eyebrow}
            title={
              <>
                {arHome.testimonials.titleLine1}
                <br />
                {arHome.testimonials.titleLine2} <span>{arHome.testimonials.titleAccent}</span>
              </>
            }
            sub={arHome.testimonials.sub}
            itemsList={arHome.testimonials.items}
          />
        </div>
      </section>

      {/* Insights / Articles Stage */}
      <section className="section insights-home home-stage home-insights-stage">
        <div className="container">
          <HomeArticles
            eyebrow={arHome.articles.eyebrow}
            title={
              <>
                {arHome.articles.titleText} <span>{arHome.articles.titleAccent}</span>
              </>
            }
            intro={arHome.articles.intro}
            viewAllLabel={arHome.articles.viewAll}
            viewAllHref={arHome.articles.viewAllHref}
            readArticleLabel={arHome.articles.readArticle}
            itemsList={arHome.articles.items}
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        badge={arHome.ctaSection.badge}
        title={
          <>
            {arHome.ctaSection.titleText} <span>{arHome.ctaSection.titleAccent}</span>
          </>
        }
        description={arHome.ctaSection.description}
        button={arHome.ctaSection.button}
        href={arHome.ctaSection.href}
        secondary={{
          label: arHome.ctaSection.whatsapp,
          href: company.whatsappUrl,
          external: true,
        }}
        perks={arHome.ctaSection.perks}
      />
    </main>
  );
}
