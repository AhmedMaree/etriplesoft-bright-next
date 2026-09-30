import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CrumbStrip } from "@/components/breadcrumb";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/site";
import { industryHubItems } from "@/data/industries/hub";
import styles from "@/components/industries/industries.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve with Odoo ERP in Egypt",
  description:
    "Explore how ETripleSoft maps Odoo to construction, real estate, facility management, restaurants, education, retail, healthcare and logistics workflows.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
    <CrumbStrip
      items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
    />
    <main id="main" className={`${styles.page} ${styles.hubPage}`}>
      <section className={styles.hubHero} aria-labelledby="industries-title">
        <div className="container">
          <span className={styles.eyebrow}>Industries</span>
          <h1 id="industries-title">Odoo shaped around how your industry operates</h1>
          <p>Technology becomes useful when it follows the real handoffs between teams. Explore the operational challenges, Odoo capabilities and target workflows we consider across eight industries in Egypt, Saudi Arabia and the UAE.</p>
        </div>
      </section>

      <section className={styles.hubIntro} aria-labelledby="hub-intro-title">
        <div className="container">
          <div>
            <h2 id="hub-intro-title">Start with the workflow, then choose the apps</h2>
            <p>Each implementation begins by mapping records, decisions, approvals and exceptions. The module list is a starting point; discovery determines the configuration, integration and carefully justified extensions.</p>
          </div>
          <nav className={styles.quickNav} aria-label="Industries on this page">
            {industryHubItems.map((industry) => <a key={industry.id} href={`#${industry.id}`}>{industry.name}</a>)}
          </nav>
        </div>
      </section>

      <div className={styles.hubIndustries}>
        {industryHubItems.map((industry, index) => (
          <section id={industry.id} className={styles.hubIndustry} key={industry.id}>
            <div className={`container ${styles.hubIndustryGrid}`}>
              <div className={styles.hubIndustryTitle}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h2>{industry.name}</h2>
              </div>
              <div className={styles.hubIndustryBody}>
                <div className={styles.challenge}>
                  <h3>Operational challenge</h3><p>{industry.challenge}</p>
                </div>
                <div className={styles.capabilityBlock}>
                  <h3>Relevant Odoo capabilities</h3>
                  <ul>{industry.capabilities.map((capability) => <li key={capability}><Check aria-hidden="true" size={17} />{capability}</li>)}</ul>
                </div>
                <div className={styles.improvement}>
                  <h3>What the workflow becomes</h3><p>{industry.improvement}</p>
                </div>
                <div className={styles.hubModules}>
                  <h3>Related Odoo modules</h3>
                  <ul>{industry.modules.map((module) => <li key={module}>{module}</li>)}</ul>
                </div>
                <Link className={styles.industryLink} href={industry.href}>
                  {industry.linkLabel}<ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.notListed}>
        <div className="container">
          <div><span className={styles.eyebrow}>Your industry</span><h2>Don’t see your operating model here?</h2></div>
          <p>Share the workflow you want to improve. We will assess where standard Odoo apps fit, where integration is appropriate and what should stay in a specialist system.</p>
          <Link className={styles.secondaryButton} href="/contact">Discuss your industry</Link>
        </div>
      </section>

      <CTA title="Turn your operating workflow into a practical Odoo scope" description="Start with the records, approvals and exceptions your teams handle today. We will help map the right next step." button="Talk to an Odoo specialist" />
    </main>
    </>
  );
}

