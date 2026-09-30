import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/site";
import type { IndustryPageData } from "@/data/industries/types";
import styles from "./industries.module.css";

const moduleLinks: Record<string, string> = {
  Accounting: "/odoo/accounting",
  Helpdesk: "/odoo/itsm-helpdesk",
};

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionIntro}>
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <main id="main" className={styles.page}>
      <JsonLd data={faqJsonLd(data.faqs)} />
      <section className={styles.hero} aria-labelledby="industry-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="industry-title">{data.heroTitle}</h1>
              <p>{data.heroDescription}</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href={`/contact?service=${encodeURIComponent(`${data.name} Odoo`)}`}>
                  Discuss your workflow <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link className={styles.secondaryButton} href="#problems">Explore the approach</Link>
              </div>
            </div>
            <aside className={styles.heroPanel} aria-label={`${data.name} priorities`}>
              <span>Operational focus</span>
              <ul>
                {data.heroHighlights.map((highlight) => (
                  <li key={highlight}><Check aria-hidden="true" size={18} />{highlight}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="problems" className={styles.section}>
        <div className="container">
          <SectionIntro label="Industry problems" title={`Where ${data.name.toLowerCase()} operations lose continuity`} description={data.problemsIntro} />
          <div className={styles.problemGrid}>
            {data.problems.map((item) => (
              <article key={item.title} className={styles.problemItem}>
                <h3>{item.title}</h3><p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className="container">
          <SectionIntro label="How ETripleSoft and Odoo address them" title="Connect the handoffs, records and approvals" description={data.solutionIntro} />
          <div className={styles.solutionGrid}>
            {data.solutions.map((item) => (
              <article key={item.title} className={styles.solutionCard}>
                <h3>{item.title}</h3><p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.compactSection}`}>
        <div className={`container ${styles.moduleLayout}`}>
          <SectionIntro label="Relevant modules" title="Standard Odoo apps, selected for the workflow" description="The final application set follows discovery. We configure only the apps that support the agreed operating model." />
          <ul className={styles.moduleList} aria-label={`Relevant Odoo apps for ${data.name}`}>
            {data.modules.map((module) => {
              const href = module.href ?? moduleLinks[module.name];
              return <li key={module.name}>{href ? <Link href={href}>{module.name}</Link> : module.name}</li>;
            })}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.workflowSection}`}>
        <div className="container">
          <SectionIntro label="Typical workflow" title="A connected operational path" description={data.workflowIntro} />
          <ol className={styles.workflow}>
            {data.workflow.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionIntro label="Integrations" title="Connect the systems around Odoo" description={data.integrationsIntro} />
          <div className={styles.openGrid}>
            {data.integrations.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className="container">
          <SectionIntro label="Regional considerations" title="Prepared for Egypt, Saudi Arabia and the UAE" description={data.regionalIntro} />
          <div className={styles.openGrid}>
            {data.regionalConsiderations.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionIntro label="Implementation approach" title="Move from discovery to supported operation" description={data.implementationIntro} />
          <ol className={styles.implementation}>
            {data.implementation.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={`container ${styles.faqLayout}`}>
          <SectionIntro label="FAQ" title={`${data.name} Odoo questions`} description="Answers depend on scope, existing systems and the operating model. These are the points we clarify during discovery." />
          <div className={styles.faqList}>
            {data.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary><p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA title={data.cta.title} description={data.cta.description} button={data.cta.button} href={`/contact?service=${encodeURIComponent(`${data.name} Odoo`)}`} />
    </main>
  );
}

