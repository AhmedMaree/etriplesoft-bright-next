import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/site";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { partner } from "@/components/odoo/content";
import { odooPageByKey, odooPageHref } from "@/lib/odoo-pages";
import { StageNav } from "./StageNav";
import styles from "./OdooChild.module.css";
import type {
  Block,
  Module,
  OdooChildPageConfig,
  PageLink,
  Section,
} from "./types";

/** Metadata (title, description, canonical, Open Graph) for a child page. */
export function odooChildMetadata(config: OdooChildPageConfig): Metadata {
  const { title, description } = config.metadata;
  return pageMetadata({ title, description, path: config.path });
}

type Locale = "en" | "ar";

const UI = {
  en: {
    home: "Home",
    odoo: "Odoo",
    breadcrumb: "Breadcrumb",
    onThisPage: "On this page",
    whatHappens: "What happens",
    whatWeNeed: "What we need from you",
    whatYouReceive: "What you receive",
    supportTiers: "Support tiers",
    partnerAlt: "Odoo Gold Partner badge",
    partnerStatement: null as string | null,
    learnMore: (label: string, text?: string) =>
      text ? `${text}: learn more about Odoo ${label}` : `Learn more about Odoo ${label}`,
  },
  ar: {
    home: "الرئيسية",
    odoo: "أودو",
    breadcrumb: "مسار التنقل",
    onThisPage: "في هذه الصفحة",
    whatHappens: "ماذا يحدث",
    whatWeNeed: "ما نحتاجه منك",
    whatYouReceive: "ما ستحصل عليه",
    supportTiers: "مستويات الدعم",
    partnerAlt: "شارة شريك أودو الذهبي",
    partnerStatement: "ETripleSoft شريك أودو الذهبي.",
    learnMore: (label: string, text?: string) => text ?? label,
  },
} as const;

/** Where a topic page lives in the given language. */
const topicHref = (locale: Locale, page: ReturnType<typeof odooPageByKey>) =>
  locale === "ar" ? `/ar${page.path}` : odooPageHref(page);

const layouts = ["split", "columns", "stacked"] as const;

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArrowLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link className="text-link" href={href} aria-label={ariaLabel}>
      {children}
      <ArrowRight size={15} aria-hidden="true" />
    </Link>
  );
}

/** Link to another Odoo topic page, or its consultation fallback. */
function PageLinkView({ link, locale }: { link: PageLink; locale: Locale }) {
  const page = odooPageByKey(link.key);
  return (
    <ArrowLink
      href={topicHref(locale, page)}
      ariaLabel={UI[locale].learnMore(page.label, link.text)}
    >
      {link.text}
    </ArrowLink>
  );
}

type LinkItem = {
  text?: string;
  href?: string;
  pageKey?: string;
  ariaLabel?: string;
};

function RelatedLink({ item, locale }: { item: LinkItem; locale: Locale }) {
  if (item.pageKey) {
    const page = odooPageByKey(item.pageKey);
    return (
      <ArrowLink
        href={topicHref(locale, page)}
        ariaLabel={item.ariaLabel ?? UI[locale].learnMore(page.label)}
      >
        {item.text ?? page.label}
      </ArrowLink>
    );
  }
  return (
    <ArrowLink href={item.href ?? "/odoo"} ariaLabel={item.ariaLabel}>
      {item.text}
    </ArrowLink>
  );
}

function ModuleBody({ module, locale }: { module: Module; locale: Locale }) {
  return (
    <>
      {module.items && <Bullets items={module.items} />}
      {module.entries && (
        <div className={styles.entries}>
          {module.entries.map((entry) => (
            <div key={entry.name}>
              <h4>{entry.name}</h4>
              <Bullets items={entry.points} />
            </div>
          ))}
        </div>
      )}
      {module.link && <PageLinkView link={module.link} locale={locale} />}
    </>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "body":
      return (
        <>
          {block.paragraphs.map((p) => (
            <p key={p} className={styles.body}>
              {p}
            </p>
          ))}
        </>
      );
    case "bullets":
      return <Bullets items={block.items} />;
    case "note":
      return <p className={styles.note}>{block.text}</p>;
    case "table":
      return (
        <div className={styles.tableWrap}>
          <div className={styles.tableScroll} role="region" aria-label={block.caption} tabIndex={0}>
            <table className={styles.compare}>
              <caption>{block.caption}</caption>
              <thead>
                <tr>
                  {block.columns.map((column, i) => (
                    <th
                      key={column}
                      scope="col"
                      className={i === block.highlight ? styles.highlightCol : undefined}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map(([label, ...cells]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {cells.map((cell, i) => (
                      <td
                        key={i}
                        className={i + 1 === block.highlight ? styles.highlightCol : undefined}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className={styles.note}>{block.note}</p>}
        </div>
      );
    case "columns":
      return (
        <div
          className={styles.columns}
          style={{ "--cols": block.modules.length } as React.CSSProperties}
        >
          {block.modules.map((module) => (
            <article
              key={module.id}
              id={module.id}
              aria-labelledby={`${module.id}-title`}
            >
              <h3 id={`${module.id}-title`}>{module.title}</h3>
              {module.intro && (
                <p className={styles.moduleIntro}>{module.intro}</p>
              )}
              <ModuleBody module={module} locale={locale} />
            </article>
          ))}
        </div>
      );
    case "rows":
      return (
        <div className={styles.rows}>
          {block.modules.map((module) => (
            <article
              key={module.id}
              id={module.id}
              aria-labelledby={`${module.id}-title`}
            >
              <div>
                <h3 id={`${module.id}-title`}>{module.title}</h3>
                {module.intro && (
                  <p className={styles.moduleIntro}>{module.intro}</p>
                )}
              </div>
              <div>
                <ModuleBody module={module} locale={locale} />
              </div>
            </article>
          ))}
        </div>
      );
    case "flow": {
      const columns = block.columns ?? 4;
      const inner = (
        <>
          {block.eyebrow && <span className="eyebrow">{block.eyebrow}</span>}
          {block.title && <h3>{block.title}</h3>}
          {block.intro && <p className={styles.flowIntro}>{block.intro}</p>}
          <ol
            className={styles.steps}
            data-columns={block.steps.length <= columns ? columns : 3}
            aria-label={block.ariaLabel}
          >
            {block.steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <h3>
                  <span className={styles.srOnly}>Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          {block.callout && <p className={styles.callout}>{block.callout}</p>}
          {block.note && <p className={styles.note}>{block.note}</p>}
        </>
      );
      return block.panel ? (
        <div id={block.id} className={styles.flowPanel}>
          {inner}
        </div>
      ) : (
        <div id={block.id}>{inner}</div>
      );
    }
    case "cards": {
      const hasBullets = block.items.some((item) => item.items);
      return (
        <div
          className={styles.cards}
          data-columns={block.columns}
          data-bullets={hasBullets || undefined}
        >
          {block.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              {item.text && <p>{item.text}</p>}
              {item.items && <Bullets items={item.items} />}
            </article>
          ))}
        </div>
      );
    }
    case "callouts":
      return (
        <ul className={styles.callouts}>
          {block.items.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>
                <strong>{block.label} </strong>
                {text}
              </p>
            </li>
          ))}
        </ul>
      );
    case "links":
      return (
        <ul className={styles.linkRow}>
          {block.items.map((item) => (
            <li key={item.text}>
              <RelatedLink item={item} locale={locale} />
            </li>
          ))}
        </ul>
      );
    case "list":
      return (
        <ul className={styles.integrationList}>
          {block.items.map((item) => (
            <li key={item.text}>
              <span>{item.text}</span>
              {item.link && <PageLinkView link={item.link} locale={locale} />}
            </li>
          ))}
        </ul>
      );
    case "timeline":
      return (
        <>
          <ol className={styles.sequence} aria-label="Order of stages">
            {block.sequence.map((stage) => (
              <li key={stage.id}>
                <a href={`#${stage.id}`}>
                  <span aria-hidden="true">{stage.order}</span>
                  {stage.title}
                </a>
              </li>
            ))}
          </ol>
          <div className={styles.timelineGrid}>
            <div>
              <h3>{block.left.title}</h3>
              <Bullets items={block.left.items} />
            </div>
            <div>
              <h3>{block.right.title}</h3>
              <Bullets items={block.right.items} />
            </div>
          </div>
          <p className={styles.note}>{block.note}</p>
        </>
      );
    case "stages":
      return (
        <div className={styles.processGrid}>
          <StageNav
            items={block.stages.map(({ id, order, title }) => ({
              id,
              order,
              title,
            }))}
          />
          <ol className={styles.stages}>
            {block.stages.map((stage, index) => (
              <li key={stage.id}>
                <article
                  id={stage.id}
                  className={styles.stage}
                  data-layout={layouts[index % layouts.length]}
                  aria-labelledby={`${stage.id}-title`}
                >
                  <header>
                    <span className={styles.number} aria-hidden="true">
                      {stage.order}
                    </span>
                    <div>
                      <h3 id={`${stage.id}-title`}>
                        <span className={styles.srOnly}>
                          Stage {stage.order}:{" "}
                        </span>
                        {stage.title}
                      </h3>
                      <p>{stage.summary}</p>
                      {stage.duration && (
                        <p className={styles.duration}>
                          Typical: {stage.duration}
                        </p>
                      )}
                    </div>
                  </header>
                  <div className={styles.stageBody}>
                    <section aria-label={`${stage.title}: ${UI[locale].whatHappens}`}>
                      <h4>{UI[locale].whatHappens}</h4>
                      <Bullets items={stage.whatHappens} />
                    </section>
                    <section
                      aria-label={`${stage.title}: ${UI[locale].whatWeNeed}`}
                    >
                      <h4>{UI[locale].whatWeNeed}</h4>
                      <Bullets items={stage.clientContributes} />
                    </section>
                    {stage.deliverables.length > 0 && (
                      <section aria-label={`${stage.title}: ${UI[locale].whatYouReceive}`}>
                        <h4>{UI[locale].whatYouReceive}</h4>
                        <Bullets items={stage.deliverables} />
                      </section>
                    )}
                    {stage.id === "support" && block.supportTiers.length > 0 && (
                      <section aria-label={UI[locale].supportTiers}>
                        <h4>{UI[locale].supportTiers}</h4>
                        <dl className={styles.tiers}>
                          {block.supportTiers.map((tier) => (
                            <div key={tier.name}>
                              <dt>{tier.name}</dt>
                              <dd>{tier.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </section>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      );
  }
}

function SectionView({
  section,
  id,
  config,
}: {
  section: Section;
  id: string;
  config: OdooChildPageConfig;
}) {
  const titleId = `${id}-title`;
  switch (section.type) {
    case "intro":
      return (
        <section
          className={`${styles.section} ${styles.intro}`}
          aria-labelledby={titleId}
        >
          <div className={`container ${styles.introGrid}`}>
            <div>
              <span className="eyebrow">{section.eyebrow}</span>
              <h2 id={titleId}>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className={styles.body}>
                  {p}
                </p>
              ))}
            </div>
            <div className={styles.lists}>
              {section.lists.map((list) => (
                <div key={list.title}>
                  <h3>{list.title}</h3>
                  <Bullets items={list.items} />
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    case "section": {
      const tone =
        section.tone === "tinted"
          ? styles.tinted
          : section.tone === "pale"
            ? styles.pale
            : "";
      return (
        <section
          id={section.id}
          className={`${styles.section} ${tone}`}
          aria-labelledby={titleId}
        >
          <div className="container">
            <header className={styles.sectionHead}>
              {section.eyebrow && (
                <span className="eyebrow">{section.eyebrow}</span>
              )}
              <h2 id={titleId}>{section.title}</h2>
              {section.description && <p>{section.description}</p>}
            </header>
            <div className={styles.blocks}>
              {section.blocks.map((block, index) => (
                <BlockView key={index} block={block} locale={config.locale ?? "en"} />
              ))}
            </div>
          </div>
        </section>
      );
    }
    case "midCta":
      return (
        <section className={styles.midCta} aria-labelledby={titleId}>
          <div className={`container ${styles.midCtaInner}`}>
            <div>
              <h2 id={titleId}>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <Button gradient href={config.hero.primary.href}>
              {config.hero.primary.label}
            </Button>
          </div>
        </section>
      );
    case "strip":
      return (
        <section className={styles.strip} aria-labelledby={titleId}>
          <div className={`container ${styles.stripInner}`}>
            <div>
              <h2 id={titleId}>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <ArrowLink
              href={section.link.href}
              ariaLabel={section.link.ariaLabel}
            >
              {section.link.text}
            </ArrowLink>
          </div>
        </section>
      );
    case "faq":
      return (
        <section
          id={section.id}
          className={`${styles.section} ${styles.faq}`}
          aria-labelledby={titleId}
        >
          <div className={`container ${styles.faqWrap}`}>
            <h2 id={titleId}>{section.title}</h2>
            <div>
              {section.items.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      );
    case "related":
      return (
        <section className={styles.relatedSection} aria-labelledby={titleId}>
          <div className="container">
            <h2 id={titleId}>{section.title}</h2>
            <ul className={styles.relatedList}>
              {section.links.map((link) => (
                <li key={link.text ?? link.pageKey ?? link.href}>
                  <RelatedLink item={link} locale={config.locale ?? "en"} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
  }
}

/** One template for every /odoo/<topic> child page. */
export function OdooChildPage({ config }: { config: OdooChildPageConfig }) {
  const { hero, closing } = config;
  const locale: Locale = config.locale ?? "en";
  const ui = UI[locale];
  const crumbs = config.breadcrumbs ?? [
    { label: ui.home, href: locale === "ar" ? "/ar" : "/" },
    { label: ui.odoo, href: locale === "ar" ? "/ar/odoo" : "/odoo" },
  ];
  const prefix = config.path.split("/").filter(Boolean).join("-");
  const faqSection = config.sections.find((section) => section.type === "faq");
  return (
    <main id="main" className={styles.page}>
      <JsonLd
        data={serviceJsonLd({
          path: config.path,
          name: config.serviceName ?? config.breadcrumbLabel,
          description: config.metadata.description,
        })}
      />
      {faqSection && faqSection.type === "faq" && (
        <JsonLd
          data={faqJsonLd(
            faqSection.items.map(([question, answer]) => ({ question, answer })),
          )}
        />
      )}
      <BreadcrumbSchema
        items={[...crumbs, { label: config.breadcrumbLabel }]}
      />
      <section className={styles.hero} aria-labelledby={`${prefix}-h1`}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <nav aria-label={ui.breadcrumb} className={styles.breadcrumb}>
              <ol>
                {crumbs.map((crumb) => (
                  <li key={crumb.href}>
                    <Link href={crumb.href}>{crumb.label}</Link>
                  </li>
                ))}
                <li aria-current="page">{config.breadcrumbLabel}</li>
              </ol>
            </nav>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1
              id={`${prefix}-h1`}
              style={
                hero.titleMaxCh
                  ? ({
                      "--title-max": `${hero.titleMaxCh}ch`,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {hero.title}
            </h1>
            <p className={styles.lead}>{hero.description}</p>
            {hero.highlight && (
              <p className={styles.highlight}>{hero.highlight}</p>
            )}
            <div className="button-row">
              <Button gradient href={hero.primary.href}>
                {hero.primary.label}
              </Button>
              <Button secondary href={hero.secondary.href}>
                {hero.secondary.label}
              </Button>
            </div>
          </div>
          <div className={styles.trust}>
            <Image
              src={partner.badge.src}
              width={partner.badge.width}
              height={partner.badge.height}
              alt={ui.partnerAlt}
              sizes="120px"
            />
            <p>{ui.partnerStatement ?? partner.statement}</p>
          </div>
        </div>
      </section>

      {config.anchors && (
        <nav className={styles.anchors} aria-label={ui.onThisPage}>
          <ul className="container">
            {config.anchors.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {config.sections.map((section, index) => (
        <SectionView
          key={index}
          section={section}
          id={`${prefix}-s${index}`}
          config={config}
        />
      ))}

      <section className="cta-band" aria-labelledby={`${prefix}-cta`}>
        <div className="container">
          <div>
            <h2 id={`${prefix}-cta`}>{closing.title}</h2>
            <p>{closing.description}</p>
          </div>
          <div className={styles.ctaActions}>
            <Button white href={hero.primary.href}>
              {hero.primary.label}
            </Button>
            <Link className={styles.ctaLink} href={closing.secondary.href}>
              {closing.secondary.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
