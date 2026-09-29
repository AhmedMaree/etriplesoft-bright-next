import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileUp, MapPin, Play, Quote } from "lucide-react";
import styles from "./careers-reference.module.css";

const jobsPortal = "https://etriple.odoo.com/jobs";
const values = [
  ["Meaningful Impact", "Work on real-world solutions that create value for global clients."],
  ["Growth Mindset", "Continuous learning, mentorship and clear career paths."],
  ["Collaborative Teams", "Work with talented people who support and inspire each other."],
  ["A Culture of Trust", "Open communication, flexibility and a people-first environment."],
];
const benefits = [
  ["Competitive", "Compensation"], ["Health & Wellness", "Coverage"],
  ["Remote & Flexible", "Work Options"], ["Learning &", "Development"],
  ["Team Activities", "& Events"], ["Paid Time Off", "& Leave"],
  ["Supportive", "Work Environment"], ["Special Rewards", "& Recognition"],
];
const steps = [
  ["Apply", "Submit your application"], ["Screening", "Initial review of your profile"],
  ["Interview", "Technical & cultural conversation"], ["Offer", "Welcome to the team!"],
];
const jobs = [
  ["Senior Software Engineer", "Dhaka, BD", "Engineering", "Build scalable web applications and work on cutting-edge technologies."],
  ["IT Project Manager", "Dhaka, BD", "Management", "Lead digital transformation projects for global clients."],
  ["Business Analyst", "Remote", "Business", "Bridge business needs with technology solutions."],
  ["UI/UX Designer", "Dhaka, BD", "Design", "Create intuitive and impactful digital experiences."],
];
const locations = ["Cairo", "Saudi Arabia", "United Arab Emirates"];

function Action({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`${styles.button} ${light ? styles.lightButton : ""}`}>{children}<ArrowRight size={19} aria-hidden="true" /></Link>;
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
              <Action href="#open-positions">Explore Open Positions</Action>
              <Link href="#life-at-etriplesoft" className={`${styles.button} ${styles.whiteButton}`}><span className={styles.play}><Play size={13} fill="currentColor" aria-hidden="true" /></span>Life at ETripleSoft</Link>
            </div>
            <dl className={styles.stats}>
              {[["250+", "Team Members"], ["3", "Regional Offices"], ["∞", "Growth Opportunities"], ["1", "Amazing Team"]].map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="why-work-title">
        <div className={`${styles.container} ${styles.valuesLayout}`}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Our employer brand</p>
            <h2 id="why-work-title">Why Work With Us</h2>
            <p>Be part of a purpose-driven team that values people, innovation, and meaningful work. At ETripleSoft, you’ll find the freedom to grow, the support to succeed, and the opportunity to make a difference.</p>
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
            <div className={styles.pictureCopy}><h2>People. Purpose.<br />Progress.</h2><p>A workplace where your ideas matter and your growth never stops.</p><Action href="#open-positions" light>Join Our Team</Action></div>
          </article>
          <article className={`${styles.pictureCard} ${styles.culture}`}>
            <Image src="/images/careers/culture-generated.webp" alt="A bright office lounge with blue chairs and green plants" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className={styles.pictureCopy}><p className={styles.eyebrow}>Life at ETripleSoft</p><h2>Our Culture</h2><p>We foster a culture of collaboration, curiosity and continuous improvement. From team lunches to knowledge sharing sessions, we believe great work happens when people feel valued and empowered.</p><Action href="#employee-benefits" light>See Life at ETripleSoft</Action></div>
          </article>
        </div>
      </section>

      <section id="employee-benefits" className={styles.section} aria-labelledby="benefits-title">
        <div className={styles.container}>
          <header className={styles.sectionHeading}><p className={styles.eyebrow}>Care for what matters</p><h2 id="benefits-title">Employee Benefits</h2><p>We take care of our people so they can do their best work.</p></header>
          <div className={styles.benefitsGrid}>
            {benefits.map(([a, b], i) => <div className={styles.benefitCard} key={a}><ArtworkIcon type="benefit" index={i} /><p>{a}<br />{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="hiring-title">
        <div className={`${styles.container} ${styles.hiringLayout}`}>
          <div><header className={styles.sectionHeading}><p className={styles.eyebrow}>Simple &amp; transparent</p><h2 id="hiring-title">Our Hiring Process</h2><p>A smooth and people-friendly experience from application to onboarding.</p></header>
            <ol className={styles.steps}>{steps.map(([title, description], i) => <li key={title}><ArtworkIcon type="step" index={i} /><strong>0{i + 1}</strong><h3>{title}</h3><p>{description}</p>{i < 3 && <ArrowRight className={styles.stepArrow} aria-hidden="true" />}</li>)}</ol>
          </div>
          <figure className={styles.testimonial}><Quote size={48} aria-hidden="true" /><blockquote>Working at ETripleSoft has given me the opportunity to learn, grow and work on exciting projects with an amazing team. It’s a place where your ideas truly count.</blockquote><figcaption><Image src="/images/careers/fahim.webp" alt="" width={90} height={90} /><div><strong>Fahim Rahman</strong><span>Software Engineer</span></div></figcaption></figure>
        </div>
      </section>

      <section id="open-positions" className={styles.section} aria-labelledby="positions-title">
        <div className={styles.container}>
          <header className={`${styles.sectionHeading} ${styles.positionsHeading}`}><div><p className={styles.eyebrow}>Join our team</p><h2 id="positions-title">Open Positions</h2><p>Find your next opportunity and help us build what’s next.</p></div><Action href={jobsPortal} light>View All Positions</Action></header>
          <div className={styles.jobsGrid}>{jobs.map(([title, location, department, description]) => <article className={styles.jobCard} key={title}><h3>{title}</h3><ul className={styles.tags}><li>Full-time</li><li>{location}</li><li>{department}</li></ul><p>{description}</p><Link href={jobsPortal} aria-label={`View ${title} opportunities on our recruitment portal`}>View Details<ArrowRight size={20} aria-hidden="true" /></Link></article>)}</div>
        </div>
      </section>

      <section className={styles.section} aria-label="More ways to join our team">
        <div className={`${styles.container} ${styles.opportunitiesGrid}`}>
          <article className={`${styles.pictureCard} ${styles.internships}`}><Image src="/images/careers/team-generated.webp" alt="Colleagues learning and working together" fill sizes="(max-width: 900px) 100vw, 60vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>Restart your journey</p><h2>Internship Opportunities</h2><p>Kickstart your career with hands-on experience, mentorship and real projects.</p><Action href={jobsPortal} light>Explore Internships</Action></div></article>
          <article className={styles.cvCard}><div><p className={styles.eyebrow}>Don’t see the right fit?</p><h2>Send Us Your CV</h2><p>We’re always on the lookout for talented individuals. Share your CV and we’ll reach out when a suitable opportunity comes up.</p><Action href="mailto:info@etriplesoft.com?subject=Career%20application" light>Submit Your CV</Action></div><FileUp className={styles.cvIcon} strokeWidth={1.2} aria-hidden="true" /></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.locationsSection}`} aria-labelledby="locations-title">
        <div className={`${styles.container} ${styles.locationsLayout}`}><div className={styles.intro}><p className={styles.eyebrow}>Where we work</p><h2 id="locations-title">Our Locations</h2><p>Our offices are in Cairo, Saudi Arabia and the United Arab Emirates.</p></div><div className={styles.locationsGrid}>{locations.map((location) => <article className={styles.locationCard} key={location}><div className={styles.locationVisual}><MapPin aria-hidden="true" size={28} /></div><div><h3>{location}</h3><p>Office</p></div></article>)}</div></div>
        <div className={styles.container}><div className={styles.closing}><div><p className={styles.eyebrow}>Ready to build more?</p><h2>Let’s Build a Smarter, More Human Future Together</h2><p>Explore open opportunities and be part of a team that’s shaping what’s next.</p></div><Action href="#open-positions" light>Explore Open Positions</Action></div></div>
      </section>
    </main>
  );
}
