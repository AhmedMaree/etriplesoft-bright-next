import { portfolioItems } from "@/data/portfolio";
import styles from "./home.module.css";

// Client logos come from the portfolio gallery (built from assets/brand-logos
// by scripts/build-portfolio-images.mjs), so this strip and /portfolio always
// show the same set. Two rows scroll in opposite directions.
const logos = portfolioItems.filter(
  (item): item is typeof item & { image: string } => Boolean(item.image),
);
const half = Math.ceil(logos.length / 2);
const rows = [logos.slice(0, half), logos.slice(half)];

export function ClientLogos({
  title = "Trusted by forward-thinking companies",
}: {
  title?: string;
}) {
  return (
    <section className={styles.clients} aria-labelledby="client-logos-heading">
      <div className="container">
        <p id="client-logos-heading" className={styles.clientsTitle}>
          {title}
        </p>
      </div>
      <div className={styles.clientRows} dir="ltr">
        {rows.map((row, rowIndex) => (
          <div
            className={`${styles.clientRow} ${rowIndex === 1 ? styles.reverse : ""}`}
            key={rowIndex}
          >
            <ul className={styles.clientTrack}>
              {[0, 1].map((copy) =>
                row.map((logo) => (
                  <li
                    className={styles.clientLogo}
                    key={`${copy}-${logo.id}`}
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.image}
                      alt={copy === 0 ? logo.name : ""}
                      width={96}
                      height={96}
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                )),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
