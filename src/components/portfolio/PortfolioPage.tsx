import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/site";
import { PortfolioHero } from "./PortfolioHero";
import { services } from "@/lib/data";
import { portfolioItems } from "@/data/portfolio";
import styles from "./portfolio.module.css";

// Migrate the public legacy gallery as image/name entries only. No outcomes,
// client quotations or other unverified case-study details are added.
const galleryItems = portfolioItems.filter((item) => item.image && item.source);

// Service pages are linked as capabilities, not tied to any named client.
const capabilityHref: Record<string, string> = {
  odoo: "/odoo",
  cloud: "/cloud",
  ai: "/ai",
  web: "/web",
  mobile: "/mobile",
  "digital-marketing": "/digital-marketing",
};

export function PortfolioPage() {
  return (
    <main id="main">
      <PortfolioHero locale="en" />

      <section className={styles.intro} aria-labelledby="portfolio-intro">
        <div className="container">
          <h2 id="portfolio-intro">Work, and the capabilities behind it</h2>
          <p>
            ETripleSoft delivers Odoo ERP, cloud and security, AI automation,
            web, mobile and digital marketing.
            {galleryItems.length > 0
              ? " Selected work is shown below, followed by the capabilities that made it possible."
              : " Explore the capabilities behind our projects and talk to us about yours."}
          </p>
        </div>
      </section>

      {galleryItems.length > 0 && (
        <section
          className={styles.work}
          id="selected-work"
          aria-labelledby="portfolio-work"
        >
          <div className="container">
            <h2 id="portfolio-work">Selected Work</h2>
            <ul className={styles.grid}>
              {galleryItems.map((item) => (
                <li key={item.id}>
                  <article className={styles.card}>
                    {item.image && (
                      <div className={styles.media}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={480}
                          height={480}
                          sizes="(min-width: 1000px) 240px, (min-width: 520px) 33vw, 100vw"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h3>{item.name}</h3>
                    <dl className={styles.meta}>
                      {item.industry && (
                        <div>
                          <dt>Industry</dt>
                          <dd>{item.industry}</dd>
                        </div>
                      )}
                      {item.servicesDelivered &&
                        item.servicesDelivered.length > 0 && (
                          <div>
                            <dt>Services</dt>
                            <dd>{item.servicesDelivered.join(", ")}</dd>
                          </div>
                        )}
                      {item.technology && item.technology.length > 0 && (
                        <div>
                          <dt>Technology</dt>
                          <dd>{item.technology.join(", ")}</dd>
                        </div>
                      )}
                    </dl>
                    {item.approvedOutcome && (
                      <p className={styles.outcome}>{item.approvedOutcome}</p>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        className={styles.capabilities}
        id="capabilities"
        aria-labelledby="portfolio-capabilities"
      >
        <div className="container">
          <h2 id="portfolio-capabilities">Capabilities we bring to a project</h2>
          <ul className={styles.capGrid}>
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={capabilityHref[service.slug] ?? `/${service.slug}`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Talk to us about your project"
        description="Tell us what you want to improve and we will help you frame the next step."
        button="Start a Conversation"
      />
    </main>
  );
}
