import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Factory,
  FolderKanban,
  Headphones,
  Receipt,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./home.module.css";

const service = (name: string) =>
  `/contact?service=${encodeURIComponent("Odoo " + name)}`;

const apps: {
  name: string;
  copy: string;
  href: string;
  icon: LucideIcon;
  tone: "blue" | "teal" | "violet" | "amber";
}[] = [
  { name: "Sales", copy: "Quotes, orders and pipeline in one flow.", href: service("Sales"), icon: ShoppingCart, tone: "blue" },
  { name: "CRM", copy: "Track every lead from first touch to close.", href: service("CRM"), icon: BarChart3, tone: "teal" },
  { name: "Accounting", copy: "Books, tax and e-invoicing without re-keying.", href: "/odoo/accounting", icon: Receipt, tone: "violet" },
  { name: "Inventory", copy: "Stock, warehouses and deliveries in real time.", href: service("Inventory"), icon: Boxes, tone: "amber" },
  { name: "Manufacturing", copy: "Bills of materials, work orders and costing.", href: service("Manufacturing"), icon: Factory, tone: "blue" },
  { name: "Projects", copy: "Plan work, log time and bill it accurately.", href: service("Projects"), icon: FolderKanban, tone: "teal" },
  { name: "HR & Payroll", copy: "People records, attendance and payroll.", href: service("HR & Payroll"), icon: Users, tone: "violet" },
  { name: "Helpdesk", copy: "Tickets and SLAs your team can actually follow.", href: "/odoo/itsm-helpdesk", icon: Headphones, tone: "amber" },
];

export function OdooAppsGrid() {
  return (
    <section className={styles.apps} aria-labelledby="odoo-apps-heading">
      <div className="container">
        <div className={styles.appsHead}>
          <span className="eyebrow">Odoo ERP</span>
          <h2 id="odoo-apps-heading">
            Every app you need, <em>on one platform</em>
          </h2>
          <p>
            Start with the app that solves today&rsquo;s bottleneck and add the
            rest as you grow &mdash; they already share the same data.
          </p>
        </div>
        <ul className={styles.appsGrid}>
          {apps.map(({ name, copy, href, icon: AppIcon, tone }) => (
            <li key={name} className={`${styles.app} ${styles[tone]}`}>
              <span className={styles.appIcon} aria-hidden="true">
                <AppIcon size={24} />
              </span>
              <h3>
                <Link href={href} className={styles.appLink}>
                  {name}
                </Link>
              </h3>
              <p>{copy}</p>
              <ArrowRight className={styles.appArrow} size={18} aria-hidden="true" />
            </li>
          ))}
        </ul>
        <div className={styles.appsCta}>
          <Link className="button" href="/odoo">
            Explore Odoo ERP <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
