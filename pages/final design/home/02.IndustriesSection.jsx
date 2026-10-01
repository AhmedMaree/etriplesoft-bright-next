import Link from "next/link";
import styles from "./IndustriesSection.module.css";

// Put your photos in /public/images/industries/ . If `image` is omitted,
// the card uses a gradient background (Retail has no photo on purpose).
const industries = [
  { id: "construction", label: "Construction", title: "Construction", href: "/industries/construction",
    text: "Project budgets, procurement and site costs in one view.",
    image: "/images/industries/construction.jpg", icon: "build" },
  { id: "retail", label: "Retail", title: "Retail", href: "/industries/retail",
    text: "Store sales, stock, replenishment and customer activity.",
    image: null, icon: "cart" },
  { id: "education", label: "Education", title: "Education", href: "/industries/education",
    text: "Admissions, learner records and finance aligned.",
    image: "/images/industries/education.jpg", icon: "cap" },
  { id: "realestate", label: "Real Estate", title: "Real Estate", href: "/industries/real-estate",
    text: "Property, enquiries, contracts and billing connected.",
    image: "/images/industries/real-estate.jpg", icon: "building" },
  { id: "healthcare", label: "Healthcare", title: "Healthcare", href: "/industries/healthcare",
    text: "Administrative workflows connected around clinical systems.",
    image: "/images/industries/healthcare.jpg", icon: "heart" },
  { id: "logistics", label: "Logistics", title: "Logistics", href: "/industries/logistics",
    text: "Warehouse, delivery, fleet and cost visibility.",
    image: "/images/industries/logistics.jpg", icon: "box" },
];

const stats = [
  { value: "6+", label: "Key Industries", icon: "building" },
  { value: "500+", label: "Customers", icon: "people" },
  { value: "Proven", label: "Results", icon: "chart" },
];

const paths = {
  build: "M6 21V9l6-5 6 5v12M3 21h18M10 21v-5h4v5",
  cart: "M3 4h2l2.5 11h10L20 7H6.5M9 19.5h.01M17 19.5h.01",
  cap: "M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5",
  building: "M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18",
  heart: "M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z",
  box: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",
  people: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 11a2.5 2.5 0 100-5M18 14c1.8.6 3 2.3 3 4.5",
  chart: "M5 20v-7M12 20V6M19 20v-10",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

export default function IndustriesSection() {
  return (
    <section className={styles.section} aria-labelledby="industries-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>INDUSTRIES</p>
        <h2 id="industries-title" className={styles.title}>Deep Industry Expertise</h2>
        <p className={styles.lead}>
          We understand your industry. Our tailored solutions help you overcome
          challenges and achieve sustainable growth.
        </p>
        <Link href="/industries" className={styles.cta}>
          Explore All Industries
          <span className={styles.ctaArrow}><Icon name="arrow" /></span>
        </Link>
        <ul className={styles.stats}>
          {stats.map((s) => (
            <li key={s.label}>
              <span className={styles.statIcon}><Icon name={s.icon} /></span>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.grid}>
        {industries.map((item) => (
          <article
            key={item.id}
            className={`${styles.card} ${styles[item.id]} ${item.image ? "" : styles.noPhoto}`}
            style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
          >
            <div className={styles.chip}>
              <span className={styles.chipIcon}><Icon name={item.icon} /></span>
              <span className={styles.chipLabel}>{item.label}</span>
            </div>
            <div className={styles.body}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <Link href={item.href} className={styles.go} aria-label={`Explore ${item.title}`}>
              <Icon name="arrow" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
