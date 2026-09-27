import {
  Hero,
  SectionHeading,
  Icon,
  Cards,
  Photo,
  Button,
  TextLink,
  CTA,
  PartnerBadges,
} from "./site";
import { ContactForm } from "./widgets";
import { industries } from "@/lib/data";

export function AboutPage() {
  return (
    <main id="main">
      <Hero
        className="about-hero"
        eyebrow="About ETripleSoft"
        title="Technology That Supports"
        accent="Business Growth"
        description="ETripleSoft designs and delivers connected software, cloud and digital services for businesses across Egypt, Saudi Arabia and the UAE."
        image="skyline"
        primary="Talk to Our Team"
        primaryHref="/contact"
        secondary="Explore Our Services"
        secondaryHref="/#solutions"
        note={"Regional expertise\nConnected delivery"}
      >
        <div className="hero-metrics">
          {[
            ["250+", "Projects Delivered", "briefcase"],
            ["3", "Countries", "building"],
            ["10+", "Years of Experience", "award"],
          ].map(([number, label, icon]) => (
            <div key={label}>
              <Icon name={icon} />
              <div>
                <strong>{number}</strong>
                <small>{label}</small>
              </div>
            </div>
          ))}
        </div>
      </Hero>

      <section className="section">
        <div className="container about-purpose">
          <SectionHeading
            title="A Practical Digital-Transformation Partner"
            description="We specialize in software and technology solutions designed around the operational challenges, teams and systems that make each business different."
          />
          <article className="purpose-card">
            <Icon name="target" />
            <div>
              <h3>Our Mission</h3>
              <p>
                Empower businesses with tailored technology that connects
                operations, supports better decisions and remains practical to
                run.
              </p>
            </div>
          </article>
          <article className="purpose-card">
            <Icon name="eye" />
            <div>
              <h3>Our Vision</h3>
              <p>
                Help organizations across the region use technology with greater
                clarity, confidence and long-term value.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section tinted">
        <div className="container split">
          <div>
            <SectionHeading
              title="Expertise That Connects the Whole Business"
              description="Odoo remains our flagship platform, supported by cloud and security, AI automation, web and mobile development, and digital marketing."
            />
            <Cards
              columns={2}
              compact
              items={[
                [
                  "Business Systems",
                  "ERP implementation, integration, training and support.",
                  "settings",
                ],
                [
                  "Digital Products",
                  "Websites, portals and mobile applications.",
                  "monitor",
                ],
                [
                  "Secure Operations",
                  "Cloud, identity, endpoint, backup and managed support.",
                  "shield",
                ],
                [
                  "Connected Growth",
                  "Automation and marketing connected to business workflows.",
                  "chart",
                ],
              ]}
            />
          </div>
          <Photo
            className="rounded"
            name="team"
            alt="ETripleSoft team collaborating"
          />
        </div>
      </section>

      <section className="section">
        <div className="container partnership-row">
          <SectionHeading
            title="Platform Partnerships"
            description="Verified platform depth supports our delivery across ERP, productivity and connected business systems."
          />
          <PartnerBadges />
          <blockquote>
            “We don&apos;t just adapt to the future; we shape it with
            innovation.”
            <strong>Khaled Ahmed Magdy</strong>
          </blockquote>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="Local Teams Across the Region"
            description="Work with ETripleSoft through our presence in Cairo, Riyadh and Dubai."
          />
          <div className="card-grid cols-3">
            {[
              ["Cairo", "Egypt"],
              ["Riyadh", "Saudi Arabia"],
              ["Dubai", "United Arab Emirates"],
            ].map(([city, country]) => (
              <article className="service-card" key={city}>
                <Icon name="pin" />
                <h3>{city}</h3>
                <p>{country}</p>
                <TextLink href="/contact">Contact this office</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Discuss the Systems Behind Your Next Stage of Growth"
        description="Tell us where work is disconnected today and what your team needs to improve."
        button="Talk to Our Team"
      />
    </main>
  );
}

export function PortfolioPage() {
  return (
    <main id="main">
      <Hero
        eyebrow="Portfolio"
        title="Real Work Deserves"
        accent="Real Evidence"
        description="We are preparing detailed project stories with approved scope, imagery and outcomes. Until then, this page focuses on the work we can discuss responsibly."
        image="portfolio-hero"
        primary="Discuss a Similar Project"
        primaryHref="/contact?service=Project%20enquiry"
        secondary="Explore Industries"
        secondaryHref="#expertise"
        note={"Clear scope.\nVerified outcomes."}
      />

      <section className="section">
        <div className="container split">
          <SectionHeading
            title="What a Published Case Study Should Show"
            description="A useful project story explains the client context, the challenge, the agreed scope, the delivered solution and outcomes the client has approved for publication."
          />
          <Cards
            columns={2}
            compact
            items={[
              [
                "Business Context",
                "The industry, workflow and operational environment.",
                "building",
              ],
              [
                "Project Scope",
                "The systems, teams and responsibilities included.",
                "file",
              ],
              [
                "Delivered Solution",
                "What was configured, built, integrated or migrated.",
                "settings",
              ],
              [
                "Approved Outcomes",
                "Evidence the client has reviewed and permitted us to share.",
                "check",
              ],
            ]}
          />
        </div>
      </section>

      <section id="expertise" className="section tinted">
        <div className="container">
          <SectionHeading
            title="Industry Workflows We Understand"
            description="Our conversations start with the operational details that make each sector different."
          />
          <div className="industry-strip">
            {industries.map(([title, image]) => (
              <a
                className="industry-tile"
                href={"/contact?industry=" + encodeURIComponent(title)}
                key={title}
              >
                <Photo name={image} alt={title} />
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Planning a Similar Transformation?"
        description="Share the workflow, systems and outcome you want to improve. We will help you frame the next step."
        button="Start a Project Conversation"
      />
    </main>
  );
}

export function ContactPage() {
  return (
    <main id="main">
      <section className="contact-hero">
        <Photo name="contact-hero" alt="" />
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Contact ETripleSoft</span>
            <h1>
              Let&apos;s Start a <em>Conversation</em>
            </h1>
            <h2>Tell us what you are trying to improve.</h2>
            <p>
              Whether you are exploring Odoo ERP, cloud and security, AI
              automation, a digital product or marketing support, share the
              current situation and the outcome your team needs.
            </p>
            <div className="contact-promises">
              {[
                [
                  "Clear Routing",
                  "Your enquiry goes to the relevant service team.",
                  "target",
                ],
                [
                  "Regional Team",
                  "Support across Egypt, Saudi Arabia and the UAE.",
                  "pin",
                ],
                [
                  "Practical Next Step",
                  "We clarify scope before recommending a solution.",
                  "check",
                ],
              ].map(([title, description, icon]) => (
                <div key={title}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="contact-strip">
            {[
              ["General Enquiries", "info@etriplesoft.com", "mail"],
              ["Support", "support@etriplesoft.com", "headphones"],
              [
                "Working Hours",
                "Sunday – Thursday, 9 AM – 6 PM (EET)",
                "clock",
              ],
            ].map(([title, value, icon]) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  {value.includes("@") ? (
                    <a href={"mailto:" + value}>{value}</a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Three Offices. One Regional Team."
            description="Connect with ETripleSoft through Cairo, Riyadh or Dubai. Detailed office and phone information should be confirmed with our team before travel."
          />
          <div className="card-grid cols-3">
            {[
              ["Cairo", "Egypt"],
              ["Riyadh", "Saudi Arabia"],
              ["Dubai", "United Arab Emirates"],
            ].map(([city, country]) => (
              <article className="service-card" key={city}>
                <Icon name="pin" />
                <h3>{city}</h3>
                <p>{country}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function SupportPage() {
  return (
    <main id="main">
      <Hero
        className="support-hero"
        eyebrow="Customer Support"
        title="Submit a"
        accent="Support Ticket"
        description="Use the ETripleSoft support portal to report an issue, share relevant details and follow the ticket with the support team."
        image="support-hero"
        primary="Open the Support Portal"
        primaryHref="https://etriple.odoo.com/helpdesk/support-tickets-1"
        secondary="Email Support"
        secondaryHref="mailto:support@etriplesoft.com"
        note={"One request.\nA clear support path."}
      />
      <section className="section tinted">
        <div className="container split">
          <SectionHeading
            title="The Ticket Portal Opens in ETripleSoft's Odoo Helpdesk"
            description="Include the affected system, what happened, when it started and any screenshots or error messages that can help the team investigate."
          />
          <div className="purpose-card">
            <Icon name="headphones" />
            <div>
              <h2>Cannot open the portal?</h2>
              <p>
                Send the same information to support@etriplesoft.com and include
                a contact name and company.
              </p>
              <Button href="mailto:support@etriplesoft.com">
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="Ready to Create a Ticket?"
        description="Open the support portal to submit and track your request."
        button="Open Support Portal"
        href="https://etriple.odoo.com/helpdesk/support-tickets-1"
      />
    </main>
  );
}

export function CareersPage() {
  return (
    <main id="main">
      <Hero
        className="careers-hero"
        eyebrow="Careers at ETripleSoft"
        title="Build Useful Technology"
        accent="with Our Team"
        description="Current vacancies and applications are managed through the ETripleSoft recruitment portal."
        image="careers-hero"
        primary="View Current Vacancies"
        primaryHref="https://etriple.odoo.com/jobs"
        secondary="Send a Career Enquiry"
        secondaryHref="mailto:info@etriplesoft.com?subject=Career%20enquiry"
        note={"Current roles.\nOne application portal."}
      />
      <section className="section tinted">
        <div className="container split">
          <SectionHeading
            title="Apply Through the Recruitment Portal"
            description="The external portal contains the current roles and the application process. If no suitable role is listed, you can still send a concise career enquiry by email."
          />
          <div className="purpose-card">
            <Icon name="briefcase" />
            <div>
              <h2>Before you apply</h2>
              <p>
                Review the role requirements and prepare the experience most
                relevant to the position.
              </p>
              <Button href="https://etriple.odoo.com/jobs">
                Open Recruitment Portal
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="Explore Current Opportunities"
        description="Vacancies are published and managed in the ETripleSoft recruitment portal."
        button="View Current Vacancies"
        href="https://etriple.odoo.com/jobs"
      />
    </main>
  );
}
