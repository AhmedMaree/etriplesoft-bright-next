"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./OdooHero.module.css";

type OdooHeroProps = {
  headingLevel?: "h1" | "h2";
  primaryHref?: string;
  className?: string;
};

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function BackgroundDecorations() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <span className={styles.glow} />
      <span className={styles.organicShape} />
      <span className={styles.organicShapeLower} />
      <svg className={styles.dashedOrbit} viewBox="0 0 430 430">
        <circle cx="215" cy="215" r="198" />
      </svg>
      <span className={styles.orbitDot} />
    </div>
  );
}

function PartnerLogos() {
  return (
    <motion.div className={styles.partners} aria-label="Technology partnerships" variants={reveal}>
      <Image
        src="/images/odoo/odoo-gold-partner.webp"
        alt="Odoo Gold Partner"
        width={435}
        height={218}
        className={styles.odooPartner}
        sizes="(max-width: 767px) 126px, 160px"
      />
      <span className={styles.partnerDivider} aria-hidden="true" />
      <Image
        src="/images/odoo/microsoft-certified-partner.webp"
        alt="Microsoft Certified Partner"
        width={960}
        height={231}
        className={styles.microsoftPartner}
        sizes="(max-width: 767px) 170px, 220px"
      />
    </motion.div>
  );
}

function FloatingIcon({ src, className }: { src: string; className: string }) {
  return (
    <motion.span
      className={`${styles.floatingIcon} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.55 }}
      aria-hidden="true"
    >
      <Image src={src} alt="" width={160} height={160} sizes="76px" />
    </motion.span>
  );
}

function LaptopVisual({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      className={styles.visual}
      initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
    >
      <FloatingIcon src="/images/odoo/icon-sales.webp" className={styles.iconSales} />
      <FloatingIcon src="/images/odoo/icon-crm.webp" className={styles.iconCrm} />
      <FloatingIcon src="/images/odoo/icon-inventory.webp" className={styles.iconInventory} />
      <Image
        src="/images/odoo/odoo-laptop-dashboard.webp"
        alt="Odoo ERP dashboard displayed on a laptop"
        width={1408}
        height={875}
        priority
        className={styles.laptop}
        sizes="(max-width: 767px) 124vw, (max-width: 1023px) 90vw, 62vw"
      />
      <motion.div
        className={styles.addonsPanel}
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.45 }}
      >
        <Image
          src="/images/odoo/odoo-addons.webp"
          alt="Odoo Addons: Sales, CRM, Accounting, Inventory, Manufacturing, Website, E-commerce and Projects"
          width={980}
          height={670}
          className={styles.addonsImage}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 290px, 390px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function OdooHero({
  headingLevel = "h1",
  primaryHref = "/odoo#solutions",
  className = "",
}: OdooHeroProps) {
  const reduceMotion = useReducedMotion();
  const Heading = headingLevel;

  return (
    <section className={`${styles.hero} ${className}`.trim()}>
      <BackgroundDecorations />
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: reduceMotion ? 0 : 0.11 }}
          >
            <motion.span className={styles.eyebrow} variants={reveal}>
              Odoo ERP Solution
            </motion.span>
            <motion.div className={styles.headingWrap} variants={reveal}>
              <Heading
                className={styles.heading}
                aria-label="Run Your Entire Business on One Platform."
              >
                <span aria-hidden="true">Run Your Entire</span>
                <span aria-hidden="true">Business on</span>
                <span className={styles.headingAccent} aria-hidden="true">One Platform.</span>
              </Heading>
            </motion.div>
            <motion.p className={styles.description} variants={reveal}>
              Streamline your operations, increase productivity, and get
              <br className={styles.desktopBreak} /> complete visibility with Odoo — tailored for your business
              <br className={styles.desktopBreak} /> needs.
            </motion.p>
            <motion.div className={styles.actions} variants={reveal}>
              <Link className={`${styles.button} ${styles.primaryButton}`} href={primaryHref}>
                <span>Explore Odoo ERP</span>
                <ArrowIcon />
              </Link>
              <Link
                className={`${styles.button} ${styles.secondaryButton}`}
                href="/contact?service=Odoo%20ERP%20Demo"
              >
                <span>Request a Demo</span>
                <ArrowIcon />
              </Link>
            </motion.div>
            <PartnerLogos />
          </motion.div>
          <LaptopVisual reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}
