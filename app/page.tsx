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
import { services, industries } from "@/lib/data";
export default function Home() {
  return (
    <main id="main" className="homepage">
      <Hero
        className="home-hero"
        eyebrow="Odoo Gold Partner · Microsoft Partner"
        title={"Connected Technology\nBuilt Around"}
        accent="Your Business."
        description="Odoo ERP, cloud and security, AI automation, web, mobile and digital marketing services for businesses across Egypt, the UAE and Saudi Arabia."
        image="hero-image"
        primary="Book a Free Consultation"
        secondary="Explore Our Solutions"
        secondaryHref="#solutions"
        note={"One platform\nfor a smarter business"}
      >
        <PartnerBadges />
      </Hero>
      <ValueProps />
      <TechTrust />
      <section className="section home-stage home-odoo-stage">
        <div className="container split odoo-feature">
          <div>
            <SectionHeading
              eyebrow="Odoo ERP"
              title="Connect Every Business Function on One Platform."
              description="Bring finance, sales, inventory, projects, people and customer operations into one adaptable Odoo platform, implemented around the way your business works."
            />
            <div className="button-row">
              <Button href="/odoo">Explore Odoo ERP</Button>
              <Button secondary href="/contact?service=Odoo%20ERP">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="odoo-module-board">
            <div className="odoo-module-board-head">
              <img src="/images/odoo-wordmark.png" alt="Odoo" />
              <span>Connected business applications</span>
            </div>
            <div className="odoo-module-grid">
              {[
                ["coins", "Accounting & Finance"],
                ["check", "Projects & Tasks"],
                ["users", "CRM & Sales"],
                ["factory", "Manufacturing"],
                ["box", "Inventory & Procurement"],
                ["cart", "E-commerce"],
                ["briefcase", "HR & Payroll"],
                ["sparkles", "And More…"],
              ].map(([icon, t]) => (
                <span key={t}>
                  <Icon name={icon} />
                  <strong>{t}</strong>
                </span>
              ))}
            </div>
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
      <section
        id="solutions"
        className="section home-stage home-solutions-stage"
      >
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Solutions"
            title="Technology Solutions for a Stronger Tomorrow"
            description="From ERP and cloud to AI and digital experiences — we deliver end-to-end solutions that help you work smarter, grow faster, and stay ahead."
          />
          <div className="card-grid cols-6 home-services">
            {services.map((s) => (
              <article className="service-card" key={s.slug}>
                <Icon name={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <TextLink href={"/" + s.slug}>Learn More</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tinted home-stage home-process-stage">
        <div className="container">
          <Process inline />
        </div>
      </section>
      <Stats
        items={[
          [
            "250+",
            "Projects Delivered",
            "briefcase",
            "Real work across business systems and digital services.",
          ],
          [
            "3",
            "Countries",
            "globe",
            "Local presence in Egypt, Saudi Arabia and the UAE.",
          ],
          [
            "10+",
            "Years of Experience",
            "clock",
            "Regional implementation and technology experience.",
          ],
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
