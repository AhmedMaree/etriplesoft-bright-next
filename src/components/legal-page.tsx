import Link from "next/link";
import { company, mailto, primaryPhone } from "@/lib/company";
import type {
  LegalBlock,
  LegalDocument,
  LegalSection,
} from "@/content/legal/types";
import styles from "./legal-page.module.css";

const token = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders the small inline markup used by legal content: **bold**, [label](href). */
function Inline({ text }: { text: string }) {
  const resolved = text.replaceAll("{{websiteUrl}}", company.websiteUrl);
  return (
    <>
      {resolved.split(token).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (!link) return part;
        const [, label, href] = link;
        return href.startsWith("/") ? (
          <Link key={index} href={href}>
            {label}
          </Link>
        ) : (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      })}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p")
    return (
      <p>
        <Inline text={block.text} />
      </p>
    );
  return (
    <ul>
      {block.items.map((item) => (
        <li key={item}>
          <Inline text={item} />
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: LegalSection }) {
  const Heading = `h${section.level ?? 2}` as "h2" | "h3" | "h4";
  return (
    <section aria-labelledby={section.id}>
      <Heading id={section.id}>{section.title}</Heading>
      {section.blocks?.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </section>
  );
}

export function LegalPage({ doc }: { doc: LegalDocument }) {
  const contents = [
    ...doc.sections.filter((section) => (section.level ?? 2) === 2),
    { id: "contact-us", title: "Contact Us" },
  ];
  return (
    <main id="main" className={styles.page}>
      <div className="container">
        <article className={styles.doc}>
          <h1>{doc.title}</h1>
          <div className={styles.intro}>
            {doc.intro.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>

          <nav aria-labelledby="legal-contents" className={styles.toc}>
            <h2 id="legal-contents">Contents</h2>
            <ol>
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          {doc.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}

          <section aria-labelledby="contact-us">
            <h2 id="contact-us">Contact Us</h2>
            <p>{doc.contactLead}</p>
            <ul>
              <li>
                By email: <a href={mailto()}>{company.primaryEmail}</a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <Link href="/contact">{company.websiteUrl}/contact</Link>
              </li>
              <li>
                By phone: <a href={primaryPhone.href}>{primaryPhone.display}</a>
              </li>
            </ul>
          </section>

          <p className={styles.related}>
            <Link href={doc.related.href}>{doc.related.label}</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
