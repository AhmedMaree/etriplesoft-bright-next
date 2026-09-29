import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChartNoAxesColumnIncreasing,
  Clock3,
  Code2,
  Heart,
  Layers3,
  MapPin,
  MessageCircleMore,
  Quote,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Button, PartnerBadges } from "./site";
import s from "./about-reference.module.css";

const principles = [
  ["Outcomes Over Hours", "We focus on useful business outcomes, not billable time.", Target],
  ["Clear From Day One", "Transparent communication and realistic timelines.", MessageCircleMore],
  ["Built to Be Owned", "Solutions your team can run and grow with.", Layers3],
  ["Long-Term Partnership", "Support that continues beyond go-live.", Heart],
] as const;

const reasons = [
  ["Regional Presence", "Local teams serving businesses across Egypt, Saudi Arabia, and the UAE.", MapPin],
  ["End-to-End Delivery", "From planning and implementation to training and ongoing support.", Layers3],
  ["Odoo Expertise", "An Odoo Gold Partner with practical implementation experience.", Settings],
  ["Technology Partners", "Microsoft Partner capabilities across the solutions we deliver.", BadgeCheck],
] as const;

const capabilities = [
  ["Functional Consultants", "Understand your workflows and shape a practical solution.", ChartNoAxesColumnIncreasing],
  ["Odoo Engineers", "Configure, customize, and connect business systems.", Code2],
  ["Support & Success", "Help your operations keep running smoothly.", ShieldCheck],
  ["Training & Enablement", "Prepare your team to work confidently with its tools.", UsersRound],
] as const;

const locations = [
  ["Cairo", "Egypt", "cairo"],
  ["Riyadh", "Saudi Arabia", "riyadh"],
  ["Dubai", "United Arab Emirates", "dubai"],
] as const;

function Heading({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${s.heading} ${className}`}>
      <span className={s.label}>{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function AboutReferencePage() {
  return (
    <main id="main" className={s.page}>
      <section className={s.hero}>
        <div className={s.heroImage}>
          <Image
            src="/images/about/hero.webp"
            alt="Dubai skyline across the waterfront"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 72vw"
          />
        </div>
        <div className={`${s.container} ${s.heroInner}`}>
          <div className={s.heroCopy}>
            <span className={s.label}>About ETripleSoft</span>
            <h1>
              Technology That Moves <em>Business Forward.</em>
            </h1>
            <p>
              We help businesses across Egypt, the UAE, and Saudi Arabia
              transform, grow, and lead with Odoo ERP and digital solutions
              built for real work.
            </p>
            <div className={s.heroActions}>
              <Button gradient href="/contact">Talk to Our Experts</Button>
              <Button secondary href="#purpose">Explore Our Story</Button>
            </div>
            <div className={s.heroPartners} aria-label="Technology partnerships">
              <PartnerBadges />
            </div>
          </div>
          <aside className={s.regionCard}>
            <div className={s.countryList}>
              <span><i className={`${s.flag} ${s.egypt}`} />Egypt</span>
              <span><i className={`${s.flag} ${s.uae}`} />UAE</span>
              <span><i className={`${s.flag} ${s.saudi}`} />Saudi Arabia</span>
            </div>
            <p><MapPin aria-hidden="true" /> Local teams. Regional expertise.<br />Real business impact.</p>
          </aside>
        </div>
      </section>

      <section className={`${s.section} ${s.purposeSection}`} id="purpose">
        <div className={`${s.container} ${s.purpose}`}>
          <div className={s.purposeCopy}>
            <Heading label="Our purpose" title={<>Built Around<br /><em>What Happens Next.</em></>}>
              We stay involved from strategy through go-live and long-term support, helping you turn today’s decisions into tomorrow’s opportunities.
            </Heading>
          </div>
          <div className={s.purposeVisual}>
            <Image src="/images/about/purpose.webp" alt="Business leader looking toward the Dubai skyline" fill sizes="(max-width: 760px) 100vw, 54vw" />
            <blockquote>
              <Quote aria-hidden="true" />
              <strong>Is the system still trusted, accurate, and useful a year later?</strong>
              <span>That’s the question we design our work around.</span>
            </blockquote>
          </div>
        </div>
        <div className={`${s.container} ${s.impact}`}>
          <Heading label="Our impact" title={<>Making a Real Difference<br />Across the Region</>} />
          <div className={s.impactGrid}>
            {[
              ["250+", "Projects Delivered", UsersRound],
              ["3", "Countries", Building2],
              ["10+", "Years of Experience", Sparkles],
              ["6", "Industries Served", ChartNoAxesColumnIncreasing],
            ].map(([value, label, Glyph]) => {
              const Icon = Glyph as typeof UsersRound;
              return <article key={String(label)}><span><Icon aria-hidden="true" /></span><strong>{String(value)}</strong><b>{String(label)}</b></article>;
            })}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.valuesSection}`}>
        <div className={s.container}>
          <Heading label="Our principles" title="The Values That Guide Everything We Do." />
          <div className={s.valueGrid}>
            {principles.map(([title, copy, Glyph]) => <article key={title}><span><Glyph aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.partnerSection}`}>
        <div className={`${s.container} ${s.partnerBand}`}>
          <Heading label="Trusted technology partners" title={<>Real Solutions.<br />Lasting Partnerships.</>} />
          <PartnerBadges />
        </div>
      </section>

      <section className={`${s.section} ${s.reasonsSection}`}>
        <div className={`${s.container} ${s.reasons}`}>
          <div className={s.reasonIntro}>
            <Heading label="Why ETripleSoft" title={<>More Than a Vendor.<br /><em>A True Partner.</em></>}>
              We bring regional expertise, technical excellence, and a genuine commitment to your success. From strategy to execution, we stay by your side as a long-term partner.
            </Heading>
            <Button gradient href="/contact">Talk to Our Experts</Button>
          </div>
          <div className={s.reasonGrid}>
            {reasons.map(([title, copy, Glyph], i) => <article key={title}><span className={s.index}>{String(i + 1).padStart(2, "0")}</span><span className={s.reasonIcon}><Glyph aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.teamSection}`}>
        <div className={s.container}>
          <div className={s.teamFeature}>
            <div className={s.teamCopy}>
              <Heading label="Why team & capabilities" title={<>One Team.<br /><em>Multiple Disciplines.</em></>}>
                Consultants, developers, and support specialists work together to turn business goals into practical solutions.
              </Heading>
            </div>
            <Image src="/images/about/team.webp" alt="Colleagues collaborating around a laptop in a Dubai office" fill sizes="(max-width: 760px) 100vw, 70vw" />
          </div>
          <div className={s.capabilityGrid}>
            {capabilities.map(([title, copy, Glyph]) => <article key={title}><span><Glyph aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.locationsSection}`}>
        <div className={`${s.container} ${s.locations}`}>
          <div className={s.locationsHead}>
            <Heading label="Our regional presence" title={<>A Stronger Presence<br /><em>Across the Region.</em></>}>
              Local teams. Regional reach. We serve clients from Cairo, Riyadh, and Dubai.
            </Heading>
            <MapPin aria-hidden="true" />
          </div>
          <div className={s.officeGrid}>
            {locations.map(([city, country, image]) => <article className={s.office} key={city}>
              <Image src={`/images/about/${image}.webp`} alt={`${city} skyline`} width={900} height={500} sizes="(max-width: 760px) 100vw, 33vw" />
              <div><MapPin aria-hidden="true" /><span><strong>{city}</strong><b>{country}</b><small>Local team. Regional reach.</small></span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.journeySection}`}>
        <div className={`${s.container} ${s.journey}`}>
          <Heading label="Our journey" title={<>A Journey of Growth<br />and Greater Impact.</>}>
            From a focused beginning in Cairo to supporting businesses across the region, we keep building for what comes next.
          </Heading>
          <ol className={s.timeline}>
            <li><span><Target aria-hidden="true" /></span><strong>Founded in Cairo</strong><p>A clear focus on practical technology for business.</p></li>
            <li><span><Building2 aria-hidden="true" /></span><strong>Regional Reach</strong><p>Teams and offices in Egypt, Saudi Arabia, and the UAE.</p></li>
            <li><span><ArrowRight aria-hidden="true" /></span><strong>Today</strong><p>250+ projects delivered, with more work ahead.</p></li>
          </ol>
        </div>
      </section>

      <section className={`${s.section} ${s.successSection}`}>
        <div className={`${s.container} ${s.success}`}>
          <div className={s.successCopy}>
            <Heading label="Client success" title={<>Real Stories.<br /><em>Lasting Impact.</em></>}>
              Trusted by businesses across the region. Here’s what a client says about working with ETripleSoft.
            </Heading>
          </div>
          <blockquote className={s.testimonial}>
            <Quote aria-hidden="true" />
            <div><p>“ETripleSoft delivered our Odoo system with great expertise and support.”</p><cite><strong>Waled El Ganzory</strong><span>Operations Manager, Trading Company</span></cite></div>
          </blockquote>
          <div className={s.clientMarks}>
            <Image src="/images/client-logos.png" alt="Orascom, Elsewedy Electric, CIB, Vodafone, Samsung, and Etisalat" width={690} height={32} sizes="(max-width: 760px) 100vw, 900px" />
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className={s.container}>
          <div><span>Let’s work together</span><h2>Let’s Build Something That Lasts.</h2><p>Talk with our team about the next step for your business.</p></div>
          <Button white href="/contact">Book a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
