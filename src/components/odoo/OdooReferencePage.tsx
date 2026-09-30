import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle,
  ChevronDown,
  ChartNoAxesCombined,
  Coins,
  GraduationCap,
  HardHat,
  Headphones,
  Network,
  Rocket,
  Settings,
  UtensilsCrossed,
  Users,
  Wrench,
} from "lucide-react";
import {
  odooCapabilityPages,
  odooPageByKey,
  odooPageHref,
  type OdooRelatedPage,
} from "@/lib/odoo-pages";
import {
  benefits as benefitLinks,
  closing,
  einvoicing,
  faqs,
  implementation as implementationContent,
  industries as industryContent,
  integrations,
  localization,
  midCta,
  modules as moduleContent,
  outcomes,
  partner,
  related,
} from "./content";
import styles from "./OdooReferencePage.module.css";
import hub from "./OdooHub.module.css";
import OdooSectionNav from "./OdooSectionNav";
import OdooPageHero from "./OdooPageHero";

const glyphs = {
  network: Network,
  coins: Coins,
  chart: ChartNoAxesCombined,
  check: CheckCircle,
  rocket: Rocket,
  settings: Settings,
  users: Users,
  headphones: Headphones,
  "hard-hat": HardHat,
  building: Building2,
  wrench: Wrench,
  utensils: UtensilsCrossed,
  graduation: GraduationCap,
} as const;
type Glyph = keyof typeof glyphs;
function GlyphIcon({ name }: { name: string }) {
  const Component = glyphs[name as Glyph] ?? Settings;
  return (
    <span className={hub.glyph} aria-hidden="true">
      <Component />
    </span>
  );
}

const base = "/images/odoo/reference/";
const demoHref = "/book-consultation";
const steps = [
  [
    "Discovery",
    "Understand your business needs, goals and challenges.",
    "discovery",
  ],
  [
    "Solution Design",
    "Plan and customize your Odoo solution to fit your processes.",
    "design",
  ],
  [
    "Implementation",
    "Configure, develop and migrate data with minimal disruption.",
    "implementation",
  ],
  [
    "Training",
    "Empower your team with practical training for success.",
    "training",
  ],
  [
    "Go Live",
    "Launch and ensure a smooth transition to your live system.",
    "launch",
  ],
  [
    "Ongoing Support",
    "Continuous support and improvements to help you grow.",
    "ongoing",
  ],
];
const benefits = [
  [
    "Customization & Integration",
    "Tailor Odoo to fit your unique business processes. Integrate with your existing systems and third-party tools seamlessly.",
    "customization",
  ],
  [
    "Local Support in Egypt",
    "Our Cairo-based team provides on-site and remote support, training, and consultation in Arabic and English.",
    "support",
  ],
  [
    "Ongoing Growth",
    "We stay with you beyond go-live. Continuous support, upgrades, and new features to help you grow.",
    "growth",
  ],
];
const priorityModules = [
  [
    "Manufacturing",
    "Streamline production and operations.",
    "manufacturing-icon",
  ],
  [
    "Inventory & Purchasing",
    "Coordinate stock, suppliers, warehouses and replenishment.",
    "inventory",
  ],
];
const otherModules = [
  ["CRM", "Turn leads into loyal customers.", "crm"],
  ["Sales", "Boost your revenue with a modern sales flow.", "sales"],
  ["Projects", "Deliver projects on time and within budget.", "projects"],
];
function Asset({
  name,
  className = "",
  alt = "",
}: {
  name: string;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      className={className}
      src={
        name === "professional"
          ? "/images/professional.webp"
          : `${base}${name}.webp`
      }
      alt={alt}
      loading="lazy"
    />
  );
}
function DemoButton({ secondary = false }: { secondary?: boolean }) {
  return (
    <Link
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
      href={secondary ? "/services" : demoHref}
    >
      {secondary ? "Explore Solutions" : "Book a Free Consultation"}
      {!secondary && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}
/** Link to a related Odoo topic page (or its consultation fallback). */
function TopicLink({
  page,
  children = "Learn more",
}: {
  page: OdooRelatedPage;
  children?: React.ReactNode;
}) {
  return (
    <Link
      className={styles.learnMore}
      href={odooPageHref(page)}
      aria-label={`${children} about Odoo ${page.label}`}
    >
      {children} <ArrowRight aria-hidden="true" />
    </Link>
  );
}
function PartnerBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`${hub.trust} ${className}`}>
      <Image
        src={partner.badge.src}
        width={partner.badge.width}
        height={partner.badge.height}
        alt={partner.badge.alt}
        sizes="120px"
      />
      <p>{partner.statement}</p>
    </div>
  );
}
function MidCta() {
  return (
    <section className={hub.midCta} aria-labelledby="odoo-mid-cta">
      <div className={`${styles.container} ${hub.midCtaInner}`}>
        <div>
          <h2 id="odoo-mid-cta">{midCta.title}</h2>
          <p>{midCta.description}</p>
        </div>
        <div className={`${styles.actions} ${hub.wrapActions}`}>
          <DemoButton />
          <DemoButton secondary />
        </div>
      </div>
    </section>
  );
}
function Checks({ items }: { items: string[] }) {
  return (
    <ul className={styles.checks}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OdooReferencePage() {
  return (
    <main id="main" className={styles.page}>
      <OdooPageHero />

      <OdooSectionNav />

      <section
        className={`${styles.section} ${hub.outcomes}`}
        id="outcomes"
        aria-labelledby="odoo-outcomes-title"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>{outcomes.eyebrow}</span>
            <h2 id="odoo-outcomes-title">{outcomes.title}</h2>
            <p>{outcomes.description}</p>
          </div>
          <ul className={hub.outcomeGrid}>
            {outcomes.items.map(([title, copy, icon]) => (
              <li key={title}>
                <GlyphIcon name={icon} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.process}`}
        id="implementation"
        aria-labelledby="odoo-process-title"
      >
        <div className={styles.processTop}>
          <Asset
            name="process"
            className={styles.processImage}
            alt="ETripleSoft specialist implementing Odoo, with local expertise, fast implementation, tailored solutions, and long-term partnership"
          />
          <div className={styles.container}>
            <div className={styles.processCopy}>
              <span className={styles.eyebrow}>
                A proven methodology <i />
              </span>
              <h2 id="odoo-process-title">
                Our Implementation
                <br />
                <em>Process</em>
              </h2>
              <p>
                A proven, step-by-step approach to successful Odoo ERP
                implementation in Egypt. We plan, implement, and support you at
                every stage to ensure a smooth and lasting transformation.
              </p>
            </div>
          </div>
        </div>
        <ol className={`${styles.container} ${styles.steps}`}>
          {steps.map(([title, copy, asset], index) => (
            <li key={title}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <Asset name={asset} className={styles.stepIcon} />
              <h3>{title}</h3>
              <p>{copy}</p>
              {index < steps.length - 1 && (
                <ArrowRight className={styles.stepArrow} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <div className={`${styles.container} ${hub.related}`}>
          <TopicLink page={odooPageByKey("implementation")}>
            {implementationContent.link}
          </TopicLink>
        </div>
      </section>

      <MidCta />

      <section
        className={`${styles.section} ${styles.modules}`}
        id="solutions"
        aria-labelledby="odoo-modules-title"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>{moduleContent.eyebrow}</span>
            <h2 id="odoo-modules-title">{moduleContent.title}</h2>
            <p>{moduleContent.description}</p>
          </div>
          <ul className={hub.featuredGrid}>
            {moduleContent.featured.map(([key, title, copy, icon]) => (
              <li key={key}>
                <GlyphIcon name={icon} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <TopicLink page={odooPageByKey(key)} />
              </li>
            ))}
          </ul>
          <div className={hub.applications}>
            <h3 className={hub.applicationsHeading}>
              Manufacturing &amp; inventory
            </h3>
            <div className={hub.priorityModules}>
              {priorityModules.map(([title, copy, asset]) => (
                <article key={title}>
                  <Asset name={asset} />
                  <div>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className={hub.supportingHeading}>
              {moduleContent.othersTitle}
            </h3>
            <div className={hub.supportingModules}>
              {otherModules.map(([title, copy, asset]) => (
                <article key={title}>
                  <Asset name={asset} />
                  <div>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.industrySection}`}
        id="industries"
        aria-labelledby="odoo-industries-title"
      >
        <div className={styles.container}>
          <div className={styles.industryHeading}>
            <div>
              <span className={styles.eyebrow}>{industryContent.eyebrow}</span>
              <h2 id="odoo-industries-title">{industryContent.title}</h2>
              <p>{industryContent.description}</p>
            </div>
            <Link href="/industries" className={styles.learnMore}>
              View All Industries <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className={hub.industryGrid}>
            {industryContent.items.map(([key, copy, icon]) => {
              const page = odooPageByKey(key);
              return (
                <li key={key}>
                  <GlyphIcon name={icon} />
                  <h3>{page.label}</h3>
                  <p>{copy}</p>
                  <TopicLink page={page} />
                </li>
              );
            })}
          </ul>
          <p className={hub.alsoServe}>{industryContent.alsoServe}</p>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.integrations}`}
        id="integrations"
        aria-labelledby="odoo-integrations-title"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>{integrations.eyebrow}</span>
            <h2 id="odoo-integrations-title">{integrations.title}</h2>
            <p>{integrations.description}</p>
          </div>
          <ul className={hub.integrationGrid}>
            {integrations.items.map(([title, copy]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.benefits}`}
        id="why-etriplesoft"
        aria-labelledby="odoo-why-title"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>Why ETripleSoft</span>
            <h2 id="odoo-why-title">
              Built Around <em>Your Business</em>
            </h2>
            <p>
              More than an ERP implementation — we deliver long-term value with
              solutions
              <br className={styles.desktopBreak} /> that fit your needs, local
              expertise, and continuous support.
            </p>
          </div>
          <div className={styles.benefitGrid}>
            {benefits.map(([title, copy, asset], index) => (
              <article key={title}>
                <Asset name={asset} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <a
                  className={styles.learnMore}
                  href={Object.values(benefitLinks.links)[index]}
                  aria-label={`Learn more about ${title}`}
                >
                  Learn More <ArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.region}`}
        id="localization"
        aria-labelledby="odoo-localization-title"
      >
        <div className={styles.container}>
          <div className={styles.regionTop}>
            <div>
              <span className={styles.eyebrow}>{localization.eyebrow}</span>
              <h2 id="odoo-localization-title">{localization.title}</h2>
              <p>{localization.description}</p>
            </div>
            <Asset
              name="region"
              alt="Regional presence in Egypt, Saudi Arabia, and the UAE"
            />
          </div>
          <div className={hub.countryGrid}>
            {localization.countries.map((country) => (
              <article key={country.name}>
                <h3>{country.name}</h3>
                <ul>
                  {country.points.map((point) => (
                    <li key={point}>
                      <Check aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={hub.note}>{localization.note}</p>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.einvoicing}`}
        aria-labelledby="odoo-einvoicing-title"
      >
        <div className={styles.container}>
          <span className={styles.eyebrow}>{einvoicing.eyebrow}</span>
          <h2 id="odoo-einvoicing-title">{einvoicing.title}</h2>
          <div className={hub.einvoiceGrid}>
            {einvoicing.items.map(([country, copy]) => (
              <div key={country}>
                <h3>{country}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className={hub.note}>{einvoicing.note}</p>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.faqSection}`}
        id="faqs"
        aria-labelledby="odoo-faq-title"
      >
        <div className={`${styles.container} ${hub.faqWrap}`}>
          <div className={styles.faq}>
            <h2 id="odoo-faq-title">
              Frequently <em>Asked Questions</em>
            </h2>
            <div>
              {faqs.map(([question, answer], index) => (
                <details key={question}>
                  <summary>
                    <span>{index + 1}</span>
                    {question}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.relatedSection}`}
        aria-labelledby="odoo-related-title"
      >
        <div className={styles.container}>
          <h2 id="odoo-related-title">{related.title}</h2>
          <ul className={hub.relatedList}>
            {odooCapabilityPages.map((page) => (
              <li key={page.key}>
                <TopicLink page={page}>{page.label}</TopicLink>
              </li>
            ))}
            {related.moreLinks.map(([label, href]) => (
              <li key={href}>
                <Link className={styles.learnMore} href={href}>
                  {label} <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.demo} aria-labelledby="odoo-demo-title">
        <div className={styles.container}>
          <div className={styles.demoCopy}>
            <span className={styles.eyebrow}>
              Ready to transform your business?
            </span>
            <h2 id="odoo-demo-title">
              Book Your Free
              <br />
              <em>Odoo Demo Today</em>
            </h2>
            <p>
              See how Odoo can work for your business. Get a personalized demo
              from our experts in Egypt.
            </p>
            <div className={styles.demoActions}>
              <DemoButton />
              <Link className={styles.learnMore} href={closing.secondary.href}>
                {closing.secondary.label} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={hub.demoChecks}>
              <Checks
                items={[
                  "No commitment",
                  "Expert consultation",
                  "Tailored to your needs",
                ]}
              />
            </div>
            <PartnerBadge className={hub.trustCompact} />
          </div>
        </div>
      </section>
    </main>
  );
}
