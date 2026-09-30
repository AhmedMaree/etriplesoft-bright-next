import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/site";
import { faqCategories, publishedFaqs, type FaqCategory } from "@/data/faqs";
import { faqJsonLd } from "@/lib/seo";
import styles from "./faqs.module.css";

const anchor = (category: FaqCategory) =>
  category.toLowerCase().replace(/[^a-z]+/g, "-");

// Categories with no publishable answer get a one-line pointer, never filler.
const pointers: Partial<Record<FaqCategory, { text: string; href: string; label: string }>> = {
  Company: {
    text: "For questions about ETripleSoft as a company, get in touch and we will answer directly.",
    href: "/contact",
    label: "Contact us",
  },
};

export function FaqsPage() {
  const sections = faqCategories.map((category) => ({
    category,
    items: publishedFaqs.filter((entry) => entry.category === category),
  }));
  return (
    <main id="main" className={styles.page}>
      {/* JSON-LD lists exactly the questions rendered below. */}
      <JsonLd data={faqJsonLd(publishedFaqs)} />

      <section className={styles.head} aria-labelledby="faqs-title">
        <div className={`container ${styles.headInner}`}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faqs" },
            ]}
          />
          <span className="eyebrow">Help &amp; Resources</span>
          <h1 id="faqs-title">Frequently asked questions</h1>
          <p>
            Answers about Odoo, implementation, pricing, support and our
            services. Cannot find what you need? Talk to our team.
          </p>
          <nav aria-label="FAQ categories" className={styles.chips}>
            <ul>
              {sections.map(({ category, items }) => (
                <li key={category}>
                  <a href={`#${anchor(category)}`}>
                    {category}
                    {items.length > 0 && <span aria-hidden="true">{items.length}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className={`container ${styles.sections}`}>
        {sections.map(({ category, items }) => (
          <section
            key={category}
            id={anchor(category)}
            aria-labelledby={`${anchor(category)}-title`}
            className={styles.section}
          >
            <h2 id={`${anchor(category)}-title`}>{category}</h2>
            {items.length > 0 ? (
              <>
                <FaqAccordion items={items} idPrefix={anchor(category)} />
              </>
            ) : (
              pointers[category] && (
                <p className={styles.pointer}>
                  {pointers[category]!.text}{" "}
                  <Link className="text-link" href={pointers[category]!.href}>
                    {pointers[category]!.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </p>
              )
            )}
          </section>
        ))}
      </div>

      <CTA title="Still have a question?" button="Book a Free Consultation" />
    </main>
  );
}
