import Link from "next/link";
import { JsonLd } from "./json-ld";
import { absoluteUrl } from "@/lib/site";
import styles from "./breadcrumb.module.css";

export type Crumb = { label: string; href?: string };

function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

/**
 * BreadcrumbList JSON-LD only, for pages that render their own visible
 * breadcrumb markup. Pass the same labels and links the page shows.
 */
export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}

/** Visible breadcrumb plus matching BreadcrumbList JSON-LD. The last item is the current page. */
export function Breadcrumb({
  items,
  label = "Breadcrumb",
}: {
  items: Crumb[];
  label?: string;
}) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label={label} className={styles.breadcrumb}>
        <ol>
          {items.map((item, index) => (
            <li
              key={item.label}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.href && index < items.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/** Breadcrumb in its own strip, for pages whose hero has no breadcrumb slot. */
export function CrumbStrip({ items }: { items: Crumb[] }) {
  return (
    <div className="container crumb-strip">
      <Breadcrumb items={items} />
    </div>
  );
}
