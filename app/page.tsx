import {
  Hero,
  PartnerBadges,
  ValueProps,
  SectionHeading,
  Icon,
  TextLink,
  IndustryBento,
  Process,
  Stats,
  CTA,
  Testimonials,
} from "@/components/site";
import OdooHero from "@/components/odoo/OdooHero";
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
      <OdooHero headingLevel="h2" primaryHref="/odoo" />
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
