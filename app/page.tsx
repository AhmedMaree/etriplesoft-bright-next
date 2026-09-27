import Image from "next/image";
import {
  Hero,
  PartnerBadges,
  ValueProps,
  TechTrust,
  SectionHeading,
  Icon,
  TextLink,
  Button,
  IndustryBento,
  Process,
  Stats,
  CTA,
  Testimonials,
} from "@/components/site";
import { industries } from "@/lib/data";
export default function Home() {
  return (
    <main id="main" className="homepage">
      <Hero
        className="home-hero"
        eyebrow="Built for Smarter Growth"
        title={"Digital Transformation\nBuilt Around"}
        accent="Your Business."
        description="Odoo ERP, apps, AI and digital solutions for ambitious companies across Egypt, UAE and Saudi Arabia."
        image="hero-image"
        primary="Book a Free Consultation"
        secondary="Explore Solutions"
        secondaryHref="#solutions"
        note={"One platform.\nBetter decisions."}
      >
        <PartnerBadges />
      </Hero>
      <ValueProps />
      <TechTrust />
      <section className="section home-stage home-odoo-stage">
        <span className="odoo-dot-grid odoo-dot-grid--top" aria-hidden="true" />
        <span className="odoo-dot-grid odoo-dot-grid--bottom" aria-hidden="true" />
        <div className="container odoo-reference-layout">
          <div className="odoo-reference-copy">
            <span className="eyebrow">Flagship Solution</span>
            <h2>
              Run Your Entire Business
              <br />
              on <em>One Platform.</em>
            </h2>
            <p>
              Streamline your operations, increase productivity, and get
              complete visibility with Odoo — fully customized for your business
              needs.
            </p>
            <div className="odoo-reference-modules">
              {[
                ["coins", "Accounting & Finance"],
                ["check", "Projects & Tasks"],
                ["users", "CRM & Sales"],
                ["factory", "Manufacturing"],
                ["box", "Inventory & Procurement"],
                ["cart", "E-commerce"],
                ["users", "HR & Payroll"],
                ["sparkles", "And More..."],
              ].map(([icon, label]) => (
                <span key={label}>
                  <Icon name={icon} />
                  <strong>{label}</strong>
                </span>
              ))}
            </div>
            <div className="button-row">
              <Button href="/odoo">Explore Odoo ERP</Button>
              <Button secondary href="/contact?service=Odoo%20ERP">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="odoo-reference-visual">
            <span className="odoo-reference-arc" aria-hidden="true" />
            <span className="odoo-reference-arc-dot" aria-hidden="true" />
            <Image
              src="/images/odoo-hero.webp"
              alt="Odoo dashboard showing connected business operations"
              fill
              sizes="(max-width: 760px) 100vw, 54vw"
            />
            <div className="odoo-reference-badge">
              <img src="/images/odoo-wordmark.png" alt="Odoo" />
              <span>Gold Partner</span>
            </div>
            <div className="odoo-reference-quote">
              <Icon name="zap" />
              <strong>
                “All your business needs
                <br />
                in one system.”
              </strong>
            </div>
          </div>
        </div>
      </section>
      <section
        id="solutions"
        className="section home-stage home-solutions-process-stage"
      >
        <div className="container">
          <div className="home-solutions-reference">
            <SectionHeading
              center
              eyebrow="Our Solutions"
              title={
                <>
                  Technology Solutions for a <em>Stronger Tomorrow</em>
                </>
              }
              description="From ERP and cloud to AI and digital experiences — we deliver end-to-end solutions that help you work smarter, grow faster, and stay ahead."
            />
            <div className="home-solutions-grid">
              {[
                [
                  "odoo",
                  "coins",
                  "Odoo ERP",
                  "End-to-end business management on one powerful platform.",
                ],
                [
                  "cloud",
                  "cloud",
                  "Cloud & Security",
                  "Secure, scalable and reliable cloud solutions for your business.",
                ],
                [
                  "ai",
                  "brain",
                  "AI Automation",
                  "Automate processes and unlock new opportunities with AI.",
                ],
                [
                  "web",
                  "monitor",
                  "Web & Mobile Development",
                  "Modern websites and applications that grow with your business.",
                ],
                [
                  "digital-marketing",
                  "chart",
                  "Digital Marketing",
                  "Data-driven marketing to increase your visibility and sales.",
                ],
              ].map(([slug, icon, title, description]) => (
                <article className="home-solution-card" key={slug}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <TextLink href={"/" + slug}>Learn More</TextLink>
                </article>
              ))}
            </div>
          </div>
          <div className="home-process-reference">
            <Process inline />
          </div>
        </div>
      </section>
      <section className="section tinted home-stage home-industries-stage">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Deep Industry Expertise"
            description="We understand your industry. Our tailored solutions help you overcome challenges and achieve sustainable growth."
            link="Explore All Industries"
            href="/industries#expertise"
          />
          <IndustryBento items={industries} />
        </div>
      </section>
      <Stats
        title={
          <>
            Numbers That Tell <em>Our Story</em>
          </>
        }
        description="Real outcomes. Lasting partnerships. A growing impact across Egypt, UAE and Saudi Arabia."
        items={[
          [
            "250+",
            "Projects Delivered",
            "briefcase",
            "Real work, real outcomes for ambitious businesses.",
          ],
          ["3", "Countries", "globe", "Egypt, UAE & Saudi Arabia."],
          ["10+", "Years of Experience", "clock", "Building since day one."],
          ["9+", "Industries Served", "building", "Deep sector expertise."],
        ]}
      />
      <section className="section tinted home-stage home-testimonials-stage">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <section className="section insights-home home-stage home-insights-stage">
        <div className="container">
          <SectionHeading
            eyebrow="Our Insights"
            title="Latest Articles & Insights"
            description="Stay updated with the latest trends, tips and success stories."
            link="View All Articles"
            href="/insights"
          />
          <div className="card-grid cols-3">
            {[
              [
                "Odoo",
                "Odoo KPI Dashboards for Real-Time Business Insights",
                "May 12, 2025",
                "odoo-kpi-dashboard-real-time-business-insights",
              ],
              [
                "Odoo",
                "Understanding the Return on an Odoo ERP Investment",
                "Apr 28, 2025",
                "odoo-roi-return-on-investment",
              ],
              [
                "ERP Planning",
                "Signs Your Business Is Ready for an ERP System",
                "Apr 15, 2025",
                "signs-you-need-erp-system",
              ],
            ].map(([tag, title, date, slug]) => (
              <article className="article-card" key={slug}>
                <div>
                  <span className="tag">{tag}</span>
                  <small>{date}</small>
                </div>
                <h3>{title}</h3>
                <TextLink href={"/insights/" + slug}>Read More</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
