import {
  Hero,
  SectionHeading,
  Icon,
  Cards,
  Photo,
  Button,
  CTA,
  Offices,
  Process,
  Stats,
  Testimonials,
  FAQ,
} from "./site";
import { ContactForm } from "./widgets";
import { industries } from "@/lib/data";
import { AboutReferencePage } from "./about-reference-page";

export function AboutPage() {
  return <AboutReferencePage />;
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

      <Stats />

      <section className="section">
        <div className="container">
          <Testimonials />
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
          <Offices contact />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="You Have Questions. We Have Answers."
            description="Find quick answers to common questions about our services, support and working with ETripleSoft."
          />
          <FAQ />
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Business?"
        description="Get in touch today and let's create a smarter, more efficient tomorrow — together."
        button="Start a Conversation"
      />
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

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Choose the Right Category"
            description="Selecting a category in the portal helps our team route and resolve your ticket faster."
          />
          <div className="why-grid">
            {[
              [
                "Technical Support",
                "Software issues, bugs and error resolution.",
                "settings",
              ],
              [
                "Account & Billing",
                "Account access, billing and subscription enquiries.",
                "file",
              ],
              [
                "Feature Request",
                "Suggest new features or enhancements.",
                "sparkles",
              ],
              [
                "Consultation",
                "Get expert advice and guidance.",
                "message",
              ],
              [
                "Partnership",
                "Partnership opportunities and business enquiries.",
                "handshake",
              ],
              ["Other", "General enquiries and other requests.", "headphones"],
            ].map(([title, description, icon]) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <Process
            title="How Our Support Works"
            steps={[
              "Submit Ticket",
              "Ticket Acknowledged",
              "We Investigate",
              "Get Update",
              "Resolution",
            ]}
          />
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
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why Work With Us"
            description="Be part of a purpose-driven team that values people, innovation and meaningful work."
          />
          <div className="why-grid">
            {[
              [
                "Meaningful Impact",
                "Work on real-world solutions that create value for our clients.",
                "target",
              ],
              [
                "Growth Mindset",
                "Continuous learning, mentorship and clear career paths.",
                "rocket",
              ],
              [
                "Collaborative Teams",
                "Work with talented people who support and inspire each other.",
                "users",
              ],
              [
                "A Culture of Trust",
                "Open communication, flexibility and a people-first environment.",
                "handshake",
              ],
            ].map(([title, description, icon]) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="Employee Benefits"
            description="We take care of our people so they can do their best work."
          />
          <div className="tag-grid">
            {[
              ["Competitive Compensation", "heart"],
              ["Health & Wellness Coverage", "shield"],
              ["Remote & Flexible Options", "monitor"],
              ["Learning & Development", "graduation"],
              ["Team Activities & Events", "users"],
              ["Paid Time Off & Leave", "leaf"],
              ["Supportive Work Environment", "check"],
              ["Special Rewards & Recognition", "gift"],
            ].map(([label, icon]) => (
              <div key={label}>
                <Icon name={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section tinted">
        <div className="container">
          <Process
            title="Our Hiring Process"
            steps={["Apply", "Screening", "Interview", "Offer"]}
          />
        </div>
      </section>

      <Stats
        title="ETripleSoft in Numbers"
        items={[
          ["250+", "Team Members", "users", "A growing regional team."],
          ["4", "Global Offices", "pin", "Egypt, Saudi Arabia and the UAE."],
          [
            "∞",
            "Growth Opportunities",
            "rocket",
            "Room to learn and advance.",
          ],
          ["1", "Amazing Team", "handshake", "Working toward one goal."],
        ]}
      />

      <CTA
        title="Explore Current Opportunities"
        description="Vacancies are published and managed in the ETripleSoft recruitment portal."
        button="View Current Vacancies"
        href="https://etriple.odoo.com/jobs"
      />
    </main>
  );
}
