import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import styles from "./faq-accordion.module.css";

/**
 * Shared FAQ accordion built on native <details>/<summary>: keyboard operable
 * (Tab, Enter, Space) with the site's visible focus ring, no client JavaScript.
 */
export function FaqAccordion({
  items,
  idPrefix,
}: {
  items: readonly {
    question: string;
    answer: string;
    link?: { label: string; href: string };
  }[];
  idPrefix?: string;
}) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className={styles.item}
          id={idPrefix ? `${idPrefix}-${index + 1}` : undefined}
        >
          <summary>
            {item.question}
            <ChevronDown aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
          {item.link && (
            <Link className={`text-link ${styles.follow}`} href={item.link.href}>
              {item.link.label}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </details>
      ))}
    </div>
  );
}
