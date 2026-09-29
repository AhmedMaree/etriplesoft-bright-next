import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CrumbStrip } from "@/components/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button, Icon } from "@/components/site";
import styles from "@/components/services/ServicesHub.module.css";
import {
  channels,
  closing,
  demoHref,
  foundation,
  hero,
  metadataContent,
  odoo,
  region,
  together,
  type Support,
} from "@/components/services/content";

const url = "/services";

export const metadata: Metadata = pageMetadata({
  title: metadataContent.title,
  description: metadataContent.description,
  path: url,
});

function LearnMore({ item }: { item: Support }) {
  return (
    <Link className="text-link" href={item.href}>
      Learn more<span className={styles.srOnly}> about {item.title}</span>
      <ArrowRight size={15} aria-hidden="true" />
    </Link>
  );
}

// Node positions for the "together" diagram (viewBox 0 0 400 400).
const orbit = [
  ["Cloud & Security", 200, 46],
  ["AI Automation", 354, 160],
  ["Digital Marketing", 296, 340],
  ["Mobile Applications", 104, 340],
  ["Web Development", 46, 160],
] as const;

export default function ServicesPage() {
  return (
    <>
    <CrumbStrip
      items={[{ label: "Home", href: "/" }, { label: "Services" }]}
    />
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 id="services-title">{hero.title}</h1>
            <p className={styles.lead}>{hero.description}</p>
            <div className="button-row">
              <Button gradient href={demoHref}>
                Book a Demo
              </Button>
              <Button secondary href="#odoo">
                See the Odoo core
              </Button>
            </div>
          </div>
          <ol className={styles.tiers} aria-label="How the portfolio fits together">
            {hero.tiers.map(([label, services], i) => (
              <li key={label} data-core={i === 0 || undefined}>
                <span>{label}</span>
                <strong>{services}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="odoo" className={styles.odoo} aria-labelledby="odoo-title">
        <div className={`container ${styles.odooGrid}`}>
          <div className={styles.odooCopy}>
            <span className={styles.odooEyebrow}>{odoo.eyebrow}</span>
            <h2 id="odoo-title">{odoo.title}</h2>
            <p>{odoo.description}</p>
            <p>{odoo.supporting}</p>
            <div className={styles.odooCta}>
              <Button white href={odoo.cta.href}>
                {odoo.cta.label}
              </Button>
            </div>
          </div>
          <div className={styles.odooVisual}>
            <Image
              src={odoo.image.src}
              width={odoo.image.width}
              height={odoo.image.height}
              alt={odoo.image.alt}
              sizes="(min-width: 1000px) 560px, 100vw"
            />
          </div>
          <nav className={styles.capabilities} aria-labelledby="odoo-capabilities">
            <h3 id="odoo-capabilities">{odoo.capabilitiesLabel}</h3>
            <ul>
              {odoo.capabilities.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>
                    {label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section
        className={styles.foundation}
        aria-labelledby="foundation-title"
      >
        <div className="container">
          <header className={styles.groupHead}>
            <span className="eyebrow">{foundation.eyebrow}</span>
            <h2 id="foundation-title">{foundation.title}</h2>
            <p>{foundation.description}</p>
          </header>
          {foundation.items.map((item, i) => (
            <article
              key={item.slug}
              className={styles.row}
              data-flip={i % 2 === 1 || undefined}
              aria-labelledby={`${item.slug}-title`}
            >
              <div className={styles.rowIcon} aria-hidden="true">
                <Icon name={item.icon} />
              </div>
              <div className={styles.rowCopy}>
                <h3 id={`${item.slug}-title`}>{item.title}</h3>
                <p>{item.problem}</p>
                <p className={styles.connect}>{item.connection}</p>
                <LearnMore item={item} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.channels} aria-labelledby="channels-title">
        <div className="container">
          <header className={styles.groupHead}>
            <span className="eyebrow">{channels.eyebrow}</span>
            <h2 id="channels-title">{channels.title}</h2>
            <p>{channels.description}</p>
          </header>
          <div className={styles.columns}>
            {channels.items.map((item) => (
              <article key={item.slug} aria-labelledby={`${item.slug}-title`}>
                <span aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <h3 id={`${item.slug}-title`}>{item.title}</h3>
                <p>{item.problem}</p>
                <p className={styles.connect}>{item.connection}</p>
                <LearnMore item={item} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.together} aria-labelledby="together-title">
        <div className={`container ${styles.togetherGrid}`}>
          <div>
            <span className="eyebrow">{together.eyebrow}</span>
            <h2 id="together-title">{together.title}</h2>
            <p className={styles.lead}>{together.description}</p>
            <dl className={styles.points}>
              {together.points.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <svg
            className={styles.diagram}
            viewBox="0 0 400 400"
            role="img"
            aria-label={together.diagramLabel}
          >
            <circle cx="200" cy="200" r="150" className={styles.ring} />
            {orbit.map(([label, x, y]) => (
              <line
                key={label}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                className={styles.spoke}
              />
            ))}
            <circle cx="200" cy="200" r="58" className={styles.hub} />
            <text x="200" y="196" className={styles.hubText}>
              Odoo
            </text>
            <text x="200" y="214" className={styles.hubSub}>
              ERP
            </text>
            {orbit.map(([label, x, y]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="8" className={styles.node} />
                <text
                  x={x}
                  y={y < 200 ? y - 18 : y + 28}
                  className={styles.nodeText}
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      <section className={styles.region} aria-labelledby="region-title">
        <div className="container">
          <div className={styles.regionHead}>
            <span className="eyebrow">{region.eyebrow}</span>
            <h2 id="region-title">{region.title}</h2>
            <p>{region.description}</p>
          </div>
          <ul className={styles.places}>
            {region.places.map(([city, country]) => (
              <li key={city}>
                <MapPin size={18} aria-hidden="true" />
                <strong>{city}</strong>
                <span>{country}</span>
              </li>
            ))}
          </ul>
          <Link className="text-link" href={region.link.href}>
            {region.link.label}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="services-cta-title">
        <div className="container">
          <div>
            <h2 id="services-cta-title">{closing.title}</h2>
            <p>{closing.description}</p>
          </div>
          <div className={styles.ctaActions}>
            <Button white href={demoHref}>
              Book a Demo
            </Button>
            <Link className={styles.ctaLink} href={closing.secondary.href}>
              {closing.secondary.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
