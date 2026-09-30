import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { partner } from "./content";
import OdooWalkthrough from "./OdooWalkthrough";
import styles from "./OdooPageHero.module.css";

export default function OdooPageHero() {
  return (
    <section className={styles.hero} aria-labelledby="odoo-title">
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.credential}>
            <Image
              src={partner.badge.src}
              width={partner.badge.width}
              height={partner.badge.height}
              alt={partner.badge.alt}
              sizes="100px"
            />
            <span>Your local Odoo implementation partner</span>
          </div>
          <h1 id="odoo-title">
            Odoo ERP
            <br />
            Implementation <em>in Egypt</em>
          </h1>
          <p className={styles.description}>
            Transform your business with Odoo, the all-in-one ERP solution.
            ETripleSoft helps Egyptian businesses implement, customize and scale
            Odoo for sustainable growth.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/book-consultation">
              Book a Free Consultation <ArrowRight aria-hidden="true" />
            </Link>
            <Link className={styles.secondary} href="#solutions">
              Explore Odoo modules <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className={styles.assurances}>
            <li>
              <Check aria-hidden="true" />
              Local Egyptian team
            </li>
            <li>
              <Check aria-hidden="true" />
              End-to-end support
            </li>
          </ul>
        </div>
        <OdooWalkthrough />
      </div>
    </section>
  );
}
