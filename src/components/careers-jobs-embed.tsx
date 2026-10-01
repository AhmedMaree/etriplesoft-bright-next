import { ArrowUpRight } from "lucide-react";
import styles from "./careers-reference.module.css";

const jobsPortalUrl = "https://etriple.odoo.com/jobs";

type CareersJobsEmbedProps = {
  eyebrow: string;
  title: string;
  description: string;
  openPortalLabel: string;
  iframeTitle: string;
};

export function CareersJobsEmbed({
  eyebrow,
  title,
  description,
  openPortalLabel,
  iframeTitle,
}: CareersJobsEmbedProps) {
  return (
    <section id="open-positions" className={styles.section} aria-labelledby="open-positions-title">
      <div className={styles.container}>
        <header className={`${styles.sectionHeading} ${styles.positionsHeading}`}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id="open-positions-title">{title}</h2>
            <p>{description}</p>
          </div>
          <a
            className={`${styles.button} ${styles.lightButton}`}
            href={jobsPortalUrl}
            target="_blank"
            rel="noreferrer"
          >
            {openPortalLabel}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </header>

        <div className={styles.jobsFrame}>
          <iframe
            className={styles.jobsIframe}
            src={jobsPortalUrl}
            title={iframeTitle}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
