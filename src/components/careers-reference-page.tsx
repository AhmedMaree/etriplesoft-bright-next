import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileUp, MapPin, Play } from "lucide-react";
import styles from "./careers-reference.module.css";
import { mailto } from "@/lib/company";

const values = [
  ["Regional work", "Build digital solutions for businesses in Egypt, the UAE and Saudi Arabia."],
  ["Connected technologies", "Work across Odoo, cloud, AI, web and digital marketing."],
  ["Practical problem-solving", "Help teams connect their operations, systems and customers."],
  ["Long-term support", "Work that can continue through implementation, training and support."],
];
const locations = ["Cairo, Egypt", "Riyadh, Saudi Arabia", "Dubai, UAE"];

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
        <div className={styles.heroPhoto}>
          <Image src="/images/careers/team-generated.webp" alt="The team collaborating on a project in a bright office" fill sizes="100vw" priority />
        </div>
        <div className={styles.container}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Build a brighter tomorrow with ETripleSoft</p>
            <h1 id="careers-title">Careers</h1>
            <h2>Great People Build Great Technology.</h2>
            <p className={styles.heroDescription}>At ETripleSoft, we’re more than a tech company — we’re a team of problem-solvers, innovators, and doers building digital solutions that create real impact.</p>
            <div className={styles.actions}>
              <Action href={mailto("Career application")}>Email Your CV</Action>
              <Link href="#life-at-etriplesoft" className={`${styles.button} ${styles.whiteButton}`}><span className={styles.play}><Play size={13} fill="currentColor" aria-hidden="true" /></span>Life at ETripleSoft</Link>
            </div>
            <dl className={styles.stats}>
              {[["250+", "Projects Delivered"], ["3", "Regional Offices"], ["10+", "Years of Experience"], ["6", "Industries Served"]].map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
            </dl>
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

      <section id="life-at-etriplesoft" className={styles.section} aria-label="Life at ETripleSoft">
        <div className={`${styles.container} ${styles.cultureGrid}`}>
          <article className={`${styles.pictureCard} ${styles.purpose}`}>
            <Image src="/images/careers/purpose-generated.webp" alt="A team member working at his desk" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className={styles.pictureCopy}><h2>People. Purpose.<br />Progress.</h2><p>Learn about the team and the work behind our regional digital solutions.</p><Action href="#open-positions" light>See Open Roles</Action></div>
          </article>
          <article className={`${styles.pictureCard} ${styles.culture}`}>
            <Image src="/images/careers/culture-generated.webp" alt="A bright office lounge with blue chairs and green plants" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className={styles.pictureCopy}><p className={styles.eyebrow}>Life at ETripleSoft</p><h2>Our Culture</h2><p>Explore the services, locations and people that shape our work across the region.</p><Action href="/about" light>About ETripleSoft</Action></div>
          </article>
        </div>
      </section>

      <section id="open-positions" className={styles.section} aria-labelledby="positions-title">
        <div className={styles.container}>
          <header className={`${styles.sectionHeading} ${styles.positionsHeading}`}><div><p className={styles.eyebrow}>Join our team</p><h2 id="positions-title">Career enquiries</h2><p>Email your CV to ask about current or future opportunities. We’ll follow up if a suitable role comes up.</p></div><Action href={mailto("Career application")} light>Email Your CV</Action></header>
        </div>
      </section>

      <section className={styles.section} aria-label="More ways to join our team">
        <div className={`${styles.container} ${styles.opportunitiesGrid}`}>
          <article className={`${styles.pictureCard} ${styles.internships}`}><Image src="/images/careers/culture-generated.webp" alt="A bright office lounge with blue chairs and green plants" fill sizes="(max-width: 900px) 100vw, 60vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>Learn about our work</p><h2>Meet ETripleSoft</h2><p>See the services and regional locations behind our digital solutions.</p><Action href="/about" light>About Us</Action></div></article>
          <article className={styles.cvCard}><div><p className={styles.eyebrow}>Don’t see a suitable opening?</p><h2>Send Us Your CV</h2><p>Email your CV to our team. We’ll follow up if a suitable opportunity comes up.</p><Action href={mailto("Career application")} light>Send Your CV</Action></div><FileUp className={styles.cvIcon} strokeWidth={1.2} aria-hidden="true" /></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.locationsSection}`} aria-labelledby="locations-title">
        <div className={`${styles.container} ${styles.locationsLayout}`}><div className={styles.intro}><p className={styles.eyebrow}>Where we work</p><h2 id="locations-title">Our Locations</h2><p>Our offices are in Cairo, Riyadh and Dubai.</p></div><div className={styles.locationsGrid}>{locations.map((location) => <article className={styles.locationCard} key={location}><div className={styles.locationVisual}><MapPin aria-hidden="true" size={28} /></div><div><h3>{location}</h3><p>Office</p></div></article>)}</div></div>
        <div className={styles.container}><div className={styles.closing}><div><p className={styles.eyebrow}>Interested in a career with us?</p><h2>Share Your CV</h2><p>Email your CV to ask about current or future opportunities.</p></div><Action href={mailto("Career application")} light>Email Your CV</Action></div></div>
      </section>
    </main>
  );
}
