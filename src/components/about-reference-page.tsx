import {
  ArrowRight,
  Building2,
  ChartNoAxesColumnIncreasing,
  Eye,
  FileText,
  Heart,
  Handshake,
  Lightbulb,
  MapPin,
  Quote,
  Rocket,
  Settings,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Button, PartnerBadges } from "./site";
import s from "./about-reference.module.css";

const journey = [
  [
    "2014",
    "The Beginning",
    "ETripleSoft was founded in Cairo with a simple vision — to make a real difference through technology.",
    Rocket,
  ],
  [
    "2016",
    "Growing Together",
    "Expanded our client base across Egypt and delivered our first enterprise Odoo projects.",
    Users,
  ],
  [
    "2019",
    "Regional Expansion",
    "Started operations in Saudi Arabia, marking our regional growth journey.",
    ChartNoAxesColumnIncreasing,
  ],
  [
    "2022",
    "UAE Presence",
    "Opened our Dubai office to serve clients across the UAE and wider GCC region.",
    Building2,
  ],
  [
    "2024",
    "Stronger Than Ever",
    "250+ clients, 3 locations, and a growing team of experts driving digital transformation across the region.",
    Star,
  ],
] as const;
const values = [
  [
    "Client Success",
    "We put our clients’ success at the center of everything we do.",
    Users,
  ],
  [
    "Innovation",
    "We embrace change and continuously seek better ways to solve challenges.",
    Lightbulb,
  ],
  ["Integrity", "We believe in doing the right thing, always.", Handshake],
  [
    "Growth",
    "We invest in our people, our partnerships, and a more sustainable future.",
    ChartNoAxesColumnIncreasing,
  ],
] as const;
const numbers = [
  ["250+", "Happy Clients", Users],
  ["3", "Locations", FileText],
  ["100+", "Team Members", Users],
  ["10+", "Years of Experience", Settings],
  ["98%", "Client Satisfaction", Star],
  ["500+", "Successful Projects", ChartNoAxesColumnIncreasing],
] as const;
function Heading({
  label,
  title,
  children,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={s.heading}>
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
        <img
          className={s.skyline}
          src="/images/skyline.webp"
          alt="Dubai skyline across the waterfront"
          fetchPriority="high"
        />
        <div className={`${s.container} ${s.heroInner}`}>
          <div className={s.heroCopy}>
            <span className={s.label}>Our story. A stronger tomorrow.</span>
            <h1>
              About <em>ETripleSoft</em>
            </h1>
            <p>
              We are a technology company helping businesses across Egypt,
              <br className={s.desktopBreak} /> Saudi Arabia, and the UAE
              transform, grow, and lead in the digital era.
            </p>
            <div className={s.heroStats}>
              {[
                ["250+", "Happy Clients", Users],
                ["3", "Strategic Locations", Building2],
                ["10+", "Years of Experience", Trophy],
              ].map(([number, label, Glyph]) => {
                const Icon = Glyph as typeof Users;
                return (
                  <div key={String(label)}>
                    <span className={s.icon}>
                      <Icon />
                    </span>
                    <span>
                      <strong>{String(number)}</strong>
                      <small>{String(label)}</small>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.handwriting} aria-hidden="true">
            Technology
            <br />
            People
            <br />
            <span>A Brighter Tomorrow</span>
            <ArrowRight />
          </div>
          <div className={s.region}>
            <h3>
              Empowering
              <br />
              Businesses Across
              <br />a Stronger Region
            </h3>
            <div className={s.countries}>
              {[
                ["eg", "Egypt"],
                ["sa", "Saudi Arabia"],
                ["ae", "UAE"],
              ].map(([code, name]) => (
                <div key={code}>
                  <span
                    role="img"
                    aria-label={`${name} flag`}
                    className={`${s.flag} ${s[code]}`}
                  >
                    {code === "sa" ? "لا إله إلا الله" : ""}
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} id="purpose">
        <div className={`${s.container} ${s.purpose}`}>
          <Heading label="Our purpose" title="Mission & Vision">
            We are driven by a clear purpose — to create lasting value for our
            clients, people, and communities through technology.
          </Heading>
          <article className={s.mission}>
            <span className={s.roundIcon}>
              <Target />
            </span>
            <div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative, reliable, and scalable
                technology solutions that drive growth, efficiency, and
                long-term success.
              </p>
            </div>
          </article>
          <article className={s.vision}>
            <span className={s.roundIcon}>
              <Eye />
            </span>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted digital transformation partner in Egypt,
                Saudi Arabia, and the UAE, recognized for our people, expertise,
                and positive impact.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={`${s.section} ${s.tinted}`}>
        <div className={`${s.container} ${s.journey}`}>
          <Heading
            label="Our journey"
            title={
              <>
                A Decade of Growth
                <br />
                and Impact
              </>
            }
          >
            From a bold idea to a regional technology partner, our journey has
            been shaped by our clients’ trust, our people’s dedication, and a
            relentless focus on a better tomorrow.
          </Heading>
          <ol className={s.timeline}>
            {journey.map(([year, title, copy, Icon]) => (
              <li key={year}>
                <span className={s.timelineIcon}>
                  <Icon />
                </span>
                <strong>{year}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.section}>
        <div className={`${s.container} ${s.partners}`}>
          <Heading
            label="Trusted partnerships"
            title="Certifications & Alliances"
          >
            We work with world-class technology partners to deliver the best
            solutions for our clients.
          </Heading>
          <PartnerBadges />
          <div className={s.certified}>
            <ShieldCheck />
            <p>
              Certified. Trusted.
              <br />
              Built for a Stronger Tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.tinted}`}>
        <div className={`${s.container} ${s.values}`}>
          <Heading label="Our values" title="What Drives Us">
            Our values guide everything we do — from how we work with clients to
            how we support our people and communities.
          </Heading>
          <div className={s.valueGrid}>
            {values.map(([title, copy, Icon]) => (
              <article key={title}>
                <span className={s.roundIcon}>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="leadership">
        <div className={`${s.container} ${s.people}`}>
          <div>
            <Heading
              label="Our people"
              title={
                <>
                  A Team That
                  <br />
                  Makes It Happen
                </>
              }
            >
              Behind every successful project is a team of passionate experts.
              Our leadership team brings together deep industry experience,
              technical expertise, and a shared commitment to our clients’
              success.
            </Heading>
            <Button href="/contact?subject=Meet%20our%20leadership%20team">
              Meet Our Leadership Team
            </Button>
          </div>
          <img
            className={s.teamPhoto}
            src="/images/team.webp"
            alt="Team collaborating on technology solutions in a Dubai office"
            loading="lazy"
          />
          <blockquote className={s.quote}>
            <Quote aria-hidden="true" />
            <p>
              We believe technology should create opportunities, empower people,
              and build a better tomorrow for businesses across our region.
            </p>
            <cite>— ETripleSoft Leadership Team</cite>
          </blockquote>
        </div>
      </section>

      <section className={`${s.section} ${s.tinted}`}>
        <div className={`${s.container} ${s.impact}`}>
          <Heading
            label="Our impact in numbers"
            title="Numbers That Tell Our Story"
          />
          <div className={s.numberBand}>
            {numbers.map(([number, label, Icon]) => (
              <div key={label}>
                <Icon />
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={`${s.container} ${s.locations}`}>
          <Heading
            label="Our locations"
            title={
              <>
                A Stronger Presence
                <br />
                Across the Region
              </>
            }
          >
            We proudly serve our clients from three strategic locations in
            Egypt, Saudi Arabia, and the UAE, with a unified team and a shared
            vision.
          </Heading>
          <div className={s.officeGrid}>
            {[
              ["Cairo, Egypt", "cairo", "Nile Corniche, Maadi", "Cairo, Egypt"],
              [
                "Riyadh, Saudi Arabia",
                "riyadh",
                "King Fahd Road, Olaya",
                "Riyadh, KSA",
              ],
              ["Dubai, UAE", "dubai", "Business Bay", "Dubai, UAE"],
            ].map(([title, image, address, city]) => (
              <article className={s.office} key={title}>
                <img
                  src={`/images/${image}.webp`}
                  alt={`${title} skyline`}
                  loading="lazy"
                />
                <div className={s.officeBody}>
                  <MapPin />
                  <div>
                    <h3>{title}</h3>
                    <p>
                      {address}
                      <br />
                      {city}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Directions <ArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.tinted}`}>
        <div className={`${s.container} ${s.reasons}`}>
          <Heading
            label="Why clients choose ETripleSoft"
            title="More Than a Vendor — A True Partner"
          >
            We combine deep technical expertise with a genuine commitment to
            your success.
          </Heading>
          <div className={s.reasonGrid}>
            {[
              [
                "Proven Expertise",
                "Certified Odoo & Microsoft solutions",
                Trophy,
              ],
              [
                "Regional Focus",
                "On-the-ground support in Egypt, KSA, and UAE",
                Users,
              ],
              ["End-to-End Solutions", "From strategy to execution", Settings],
              ["Long-Term Partnership", "We grow with your business", Heart],
            ].map(([title, copy, Glyph]) => {
              const Icon = Glyph as typeof Users;
              return (
                <article key={String(title)}>
                  <Icon />
                  <h3>{String(title)}</h3>
                  <p>{String(copy)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={s.cta}>
        <div className={s.container}>
          <div>
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let’s discuss how ETripleSoft can help you achieve your goals.
            </p>
          </div>
          <Button white href="/contact">
            Talk To Our Experts
          </Button>
        </div>
      </section>
    </main>
  );
}
