import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";
import styles from "@/components/booking/booking.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Book a Free Odoo Consultation in Egypt, UAE & KSA",
  description:
    "Choose a date and time for a free consultation with ETripleSoft about Odoo ERP, business workflows or your digital project in Egypt, the UAE or Saudi Arabia.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Book a consultation" }]} />
          <span className="eyebrow">Plan your next step</span>
          <h1>Book a Free Consultation</h1>
          <p>
            Choose a date and time, then tell our team about your business and
            the Odoo or digital solution you are exploring.
          </p>
        </div>
      </section>
      <section className={styles.booking} aria-labelledby="booking-title">
        <div className="container">
          <div className={styles.heading}>
            <div>
              <CalendarDays aria-hidden="true" />
              <h2 id="booking-title">Choose your appointment</h2>
            </div>
            <a href={company.appointmentUrl} target="_blank" rel="noopener noreferrer">
              Open booking in a new tab <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <iframe
            className={styles.frame}
            src={company.appointmentUrl}
            title="ETripleSoft free consultation booking form"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className={styles.help}>
            If the booking form does not load, use the link above or <Link href="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
