import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FileText, FileUp, MapPin, Play, Users } from "lucide-react";
import styles from "./careers-reference.module.css";
import { mailto } from "@/lib/company";
import { CareersJobsEmbed } from "./careers-jobs-embed";
import { CareersFeatureCards } from "./careers-feature-cards";
import { CareersLocations } from "./careers-locations";

const values = [
  ["Regional work", "Build digital solutions for businesses in Egypt, the UAE and Saudi Arabia."],
  ["Connected technologies", "Work across Odoo, cloud, AI, web and digital marketing."],
  ["Practical problem-solving", "Help teams connect their operations, systems and customers."],
  ["Long-term support", "Work that can continue through implementation, training and support."],
];
const heroStats = [
  { value: "250+", label: "Projects Delivered", Icon: FileText, tone: "blue" },
  { value: "3", label: "Regional Offices", Icon: MapPin, tone: "violet" },
  { value: "8+", label: "Years of Experience", Icon: Users, tone: "green" },
  { value: "6", label: "Industries Served", Icon: Building2, tone: "orange" },
];

function Action({ href, children, light = false, newTab = false }: { href: string; children: React.ReactNode; light?: boolean; newTab?: boolean }) {
  return <Link href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} className={`${styles.button} ${light ? styles.lightButton : ""}`}>{children}<ArrowRight size={19} aria-hidden="true" /></Link>;
}
function ArtworkIcon({ type, index }: { type: string; index: number }) {
  return <Image src={`/images/careers/${type}-${index}.webp`} alt="" width={128} height={type === "benefit" ? 110 : 128} className={styles.artworkIcon} sizes="80px" />;
}

export function CareersReferencePage() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="careers-title">
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Build a brighter tomorrow with ETripleSoft</p>
            <h1 id="careers-title" className={styles.careerTitle}>Careers</h1>
            <h2 className={styles.heroStatement}><span>Great People Build</span><span>Great Technology.</span></h2>
            <p className={styles.heroDescription}>At ETripleSoft, we’re more than a tech company — we’re a team of problem-solvers, innovators, and doers building digital solutions that create real impact.</p>
            <div className={styles.actions}>
              <Action href={mailto("Career application")}>Email Your CV</Action>
              <Link href="#life-at-etriplesoft" className={`${styles.button} ${styles.whiteButton}`}><span className={styles.play}><Play size={13} fill="currentColor" aria-hidden="true" /></span>Life at ETripleSoft</Link>
            </div>
            <dl className={`${styles.stats} ${styles.heroStats}`}>
              {heroStats.map(({ value, label, Icon, tone }) => <div className={styles.statCard} key={label}>
                <span className={styles.statIcon} data-tone={tone}><Icon size={23} strokeWidth={2.2} aria-hidden="true" /></span>
                <span className={styles.statCopy}><dt>{value}</dt><dd>{label}</dd></span>
              </div>)}
            </dl>
          </div>
          <div className={styles.heroPhoto}>
            <Image src="/images/careers/careers-hero-en.webp" alt="ETripleSoft colleagues collaborating around a laptop in a bright office" fill sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1240px) 48vw, 600px" priority />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="why-work-title">
        <div className={`${styles.container} ${styles.valuesLayout}`}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Our employer brand</p>
            <h2 id="why-work-title">Why Work With Us</h2>
            <p>Explore work across Odoo ERP, cloud and security, AI automation, web and mobile development, and digital marketing.</p>
            <Action href="/about" light>Our Story</Action>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(([title, description], i) => <article className={styles.valueCard} key={title}><ArtworkIcon type="value" index={i} /><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <CareersFeatureCards locale="en" />

      <CareersJobsEmbed
        eyebrow="Join our team"
        title="Open positions"
        description="Browse current roles and apply directly through our careers portal."
        openPortalLabel="Open careers portal"
        iframeTitle="ETripleSoft open positions"
      />

      <section className={styles.section} aria-label="More ways to join our team">
        <div className={`${styles.container} ${styles.opportunitiesGrid}`}>
          <article className={`${styles.pictureCard} ${styles.internships}`}><Image src="/images/careers/02-image-en-right.webp" alt="ETripleSoft office lounge with blue chairs, green plants and the company logo" fill sizes="(max-width: 900px) 100vw, 60vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>Learn about our work</p><h2>Meet ETripleSoft</h2><p>See the services and regional locations behind our digital solutions.</p><Action href="/about" light>About Us</Action></div></article>
          <article className={styles.cvCard}><div><p className={styles.eyebrow}>Don’t see a suitable opening?</p><h2>Send Us Your CV</h2><p>Email your CV to our team. We’ll follow up if a suitable opportunity comes up.</p><Action href={mailto("Career application")} light>Send Your CV</Action></div><FileUp className={styles.cvIcon} strokeWidth={1.2} aria-hidden="true" /></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.locationsSection}`} aria-labelledby="locations-title">
        <CareersLocations locale="en" />
        <div className="container"><div className={styles.closing}><div><p className={styles.eyebrow}>Interested in a career with us?</p><h2>Share Your CV</h2><p>Email your CV to ask about current or future opportunities.</p></div><Action href={mailto("Career application")} light>Email Your CV</Action></div></div>
      </section>
    </main>
  );
}
