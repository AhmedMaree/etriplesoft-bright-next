import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardList, MonitorPlay, Route } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import styles from "@/components/demo/demo.module.css";
import { FaqAccordion } from "@/components/faq-accordion";
import { ClientLogos } from "@/components/home/ClientLogos";
import { JsonLd } from "@/components/json-ld";
import { company, primaryPhone } from "@/lib/company";
import { odooCapabilityPages, odooPageHref } from "@/lib/odoo-pages";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Free Odoo Demo | Egypt, UAE & KSA",
  description:
    "Request a free Odoo demo for your business. See relevant apps on your workflows with an Odoo Gold Partner in Egypt, the UAE and Saudi Arabia.",
  path: "/request-demo",
});

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us about your business",
    text: "Share your industry, how you work today and what you want to see. The form takes a couple of minutes.",
  },
  {
    icon: CalendarCheck,
    title: "We confirm a time",
    text: "A member of our team gets in touch to agree a time that suits you and anyone else who should join.",
  },
  {
    icon: MonitorPlay,
    title: "See Odoo on your processes",
    text: "We walk through the apps that matter to you, using examples close to your own workflows rather than a generic deck.",
  },
  {
    icon: Route,
    title: "Decide the next step",
    text: "You leave with a clear view of what fits and what a project could involve, with no obligation.",
  },
];

const faqs = [
  {
    question: "Is the demo free?",
    answer:
      "Yes. The demo is free and carries no obligation to continue.",
  },
  {
    question: "What is the difference between a demo and a consultation?",
    answer:
      "A demo shows you Odoo working on processes like yours. A consultation is a conversation about your goals, scope and how a project would run. Many clients start with one and follow with the other. You can book a consultation on our booking page.",
  },
  {
    question: "Who should attend?",
    answer:
      "Ideally the people who would use the system day to day, such as finance, operations or HR leads, together with whoever makes the decision. Bring as many people as you like.",
  },
  {
    question: "Can you show my industry?",
    answer:
      "We tailor the demo to what you tell us. Choose the area you care about most in the form and describe your business, and we prepare around it.",
  },
];

const showcase = odooCapabilityPages.filter((page) => page.exists);

export default function RequestDemoPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd(faqs)} />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.copy}>
              <span className="eyebrow">Free Odoo demo</span>
              <h1>See Odoo running on your own processes</h1>
              <p className={styles.lead}>
                A guided walkthrough built around your business, from an Odoo
                Gold Partner in Egypt, the UAE and Saudi Arabia.
              </p>
              <h2 className={styles.stepsHeading}>How the demo works</h2>
              <ol className={styles.steps}>
                {steps.map(({ icon: StepIcon, title, text }, index) => (
                  <li key={title}>
                    <span className={styles.stepIcon} aria-hidden="true">
                      <StepIcon size={20} />
                    </span>
                    <div>
                      <h3 className={styles.stepTitle}>
                        <span className={styles.stepNumber}>{index + 1}.</span>{" "}
                        {title}
                      </h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.trust}>
                <Image
                  src="/images/odoo/odoo-gold-partner.webp"
                  alt="Odoo Gold Partner"
                  width={435}
                  height={218}
                  sizes="112px"
                />
                <p>
                  Prefer to talk first? Call{" "}
                  <a href={primaryPhone.href}>{primaryPhone.display}</a> or{" "}
                  <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    message us on WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className={styles.formCol}>
              <ContactForm demo />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="demo-showcase">
        <div className="container">
          <div className={styles.head}>
            <span className="eyebrow">What we can show</span>
            <h2 id="demo-showcase">Pick the area that matters most</h2>
            <p>
              Odoo is one platform, so we start where your bottleneck is and
              show how the rest connects. Read more about each area first if
              you like.
            </p>
          </div>
          <ul className={styles.showcase}>
            {showcase.map((page) => (
              <li key={page.key}>
                <Link href={odooPageHref(page)} prefetch={false}>
                  {page.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClientLogos />

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="demo-faq">
        <div className="container">
          <div className={styles.faqWrap}>
            <h2 id="demo-faq">Demo questions</h2>
            <FaqAccordion items={faqs} idPrefix="demo-faq" />
          </div>
        </div>
      </section>
    </main>
  );
}
