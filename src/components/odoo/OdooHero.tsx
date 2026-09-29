import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./OdooHero.module.css";

type OdooHeroProps = {
  headingLevel?: "h1" | "h2";
  primaryHref?: string;
  className?: string;
};

export default function OdooHero({
  headingLevel = "h1",
  primaryHref = "/odoo",
  className = "",
}: OdooHeroProps) {
  const Heading = headingLevel;

  return (
    <section className={`${styles.hero} ${className}`.trim()} aria-labelledby="home-odoo-heading">
      <div className={styles.decorations} aria-hidden="true">
        <span className={styles.organicShape} />
        <span className={styles.organicShapeLower} />
        <svg className={styles.dashedOrbit} viewBox="0 0 430 430">
          <circle cx="215" cy="215" r="198" />
        </svg>
        <span className={styles.orbitDot} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Odoo ERP Solution</span>
          <Heading id="home-odoo-heading" className={styles.heading}>
            <span>Run Your Entire</span>{" "}
            <span>Business on</span>{" "}
            <span className={styles.headingAccent}>One Platform.</span>
          </Heading>
          <p className={styles.description}>
            Streamline your operations, increase productivity, and get complete
            visibility with Odoo &mdash; tailored for your business needs.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.button} ${styles.primaryButton}`} href={primaryHref}>
              Explore Odoo ERP <ArrowRight aria-hidden="true" />
            </Link>
            <Link className={`${styles.button} ${styles.secondaryButton}`} href="/contact?service=Odoo%20ERP%20Demo">
              Request a Demo <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.partners} aria-label="Technology partnerships">
            <Image src="/images/odoo/odoo-gold-partner.webp" alt="Odoo Gold Partner" width={435} height={218} className={styles.odooPartner} sizes="125px" />
            <span className={styles.partnerDivider} aria-hidden="true" />
            <Image src="/images/odoo/microsoft-certified-partner.webp" alt="Microsoft Certified Partner" width={960} height={231} className={styles.microsoftPartner} sizes="176px" />
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.laptopAngle}>
            <Image src="/images/odoo/odoo-laptop-perspective.png" alt="Illustrative Odoo dashboard with revenue, leads, invoices, active users, and a sales overview chart" width={1536} height={1024} className={styles.laptop} sizes="(max-width: 760px) 100vw, (max-width: 1000px) 90vw, 850px" />
          </div>
          <span className={`${styles.floatingIcon} ${styles.iconSales}`} aria-hidden="true">
            <Image src="/images/odoo/icon-sales.webp" alt="" width={160} height={160} sizes="64px" />
          </span>
          <span className={`${styles.floatingIcon} ${styles.iconCrm}`} aria-hidden="true">
            <Image src="/images/odoo/icon-crm.webp" alt="" width={160} height={160} sizes="64px" />
          </span>
          <span className={`${styles.floatingIcon} ${styles.iconInventory}`} aria-hidden="true">
            <Image src="/images/odoo/icon-inventory.webp" alt="" width={160} height={160} sizes="64px" />
          </span>
          <Link className={styles.addonsPanel} href="/odoo" aria-label="View all Odoo addons: Sales, CRM, Accounting, Inventory, Manufacturing, Website, E-commerce, and Projects">
            <Image src="/images/odoo/odoo-addons.webp" alt="Odoo Addons: Sales, CRM, Accounting, Inventory, Manufacturing, Website, E-commerce, and Projects" width={980} height={670} sizes="(max-width: 760px) 46vw, 310px" />
          </Link>
        </div>
      </div>
    </section>
  );
}
