"use client";
import { useEffect, useState } from "react";
import { ArrowRight, X, Upload, CheckCircle } from "lucide-react";
import { Icon, Photo, TextLink, Button } from "./site";
import { projects, services } from "@/lib/data";
export function Workflow() {
  const [selected, setSelected] = useState("Invoice Processing");
  const flows: Record<string, string[]> = {
    "Invoice Processing": [
      "Invoice Received",
      "AI Extracts Data",
      "Validates & Checks",
      "Sends to ERP",
      "Notifies Team",
    ],
    "Customer Support": [
      "Customer Query",
      "AI Understands",
      "Finds Answer",
      "Responds to Customer",
      "Escalates if Needed",
    ],
    "HR Onboarding": [
      "Employee Added",
      "Collects Documents",
      "Creates Accounts",
      "Assigns Training",
      "Welcomes Employee",
    ],
    "Sales Reporting": [
      "Collects Sales",
      "Analyzes Trends",
      "Builds Report",
      "Shares Insights",
      "Notifies Team",
    ],
  };
  return (
    <div className="workflow">
      <div role="tablist" aria-label="Automation examples">
        {Object.keys(flows).map((t) => (
          <button
            role="tab"
            aria-selected={t === selected}
            onClick={() => setSelected(t)}
            key={t}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="workflow-steps" role="tabpanel">
        {flows[selected].map((t, i) => (
          <div key={t}>
            <Icon name={["file", "brain", "check", "database", "mail"][i]} />
            <span>{t}</span>
            {i < 4 && <ArrowRight size={15} />}
          </div>
        ))}
      </div>
    </div>
  );
}
export function ProjectGrid() {
  const [filter, setFilter] = useState("All Projects");
  return (
    <>
      <div className="filters" aria-label="Filter projects">
        {["All Projects", "Odoo", "Web", "Cloud", "AI", "Marketing"].map(
          (c) => (
            <button
              className={filter === c ? "selected" : ""}
              aria-pressed={filter === c}
              key={c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ),
        )}
      </div>
      <div className="card-grid cols-4 project-grid" aria-live="polite">
        {projects
          .filter((p) => filter === "All Projects" || p.category === filter)
          .map((p) => (
            <article key={p.title}>
              <Photo name={p.image} alt={p.title} />
              <div>
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <TextLink
                  href={"/portfolio/" + p.image.replace("project-", "")}
                >
                  View Case Study
                </TextLink>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}
export function ContactForm({ support = false }: { support?: boolean }) {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) setCategory(service);
  }, []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    const formElement = e.currentTarget;
    const data = new FormData(formElement);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      setStatus(result.message);
      if (response.ok) {
        formElement.reset();
        setCategory("");
        setFile("");
      }
    } catch {
      setStatus(
        "Unable to connect. Please try again or email " +
          (support ? "support" : "info") +
          "@etriplesoft.com.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      onSubmit={submit}
      className="contact-form"
      id={support ? "ticket-form" : "contact-form"}
    >
      <span className="eyebrow">
        {support ? "Support Center" : "Send Us a Message"}
      </span>
      <h2>{support ? "Submit a Support Ticket" : "Get in Touch"}</h2>
      {support && (
        <p>
          Fill in the details below and our support team will get back to you
          shortly.
        </p>
      )}
      <input
        type="hidden"
        name="kind"
        value={support ? "support" : "contact"}
      />
      <div className="form-grid">
        <label>
          {support ? (
            "Full Name *"
          ) : (
            <span className="sr-only">Full Name *</span>
          )}
          <input
            name="name"
            placeholder="Full Name *"
            autoComplete="name"
            required
            maxLength={120}
          />
        </label>
        <label>
          {support ? (
            "Email Address *"
          ) : (
            <span className="sr-only">Business Email *</span>
          )}
          <input
            name="email"
            type="email"
            placeholder="Business Email *"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label>
          {support ? (
            "Company Name"
          ) : (
            <span className="sr-only">Company Name</span>
          )}
          <input
            name="company"
            placeholder="Company Name"
            autoComplete="organization"
            maxLength={150}
          />
        </label>
        <label>
          {support ? (
            "Phone Number"
          ) : (
            <span className="sr-only">Phone Number</span>
          )}
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            maxLength={40}
          />
        </label>
        <label className={support ? "" : "full"}>
          {support ? (
            "Category *"
          ) : (
            <span className="sr-only">Select a Service</span>
          )}
          <select
            name="service"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required={support}
          >
            <option value="">
              {support ? "Select a category" : "Select a Service"}
            </option>
            {category &&
              !services.some((s) => s.title === category) &&
              ![
                "Technical Support",
                "Account & Billing",
                "Feature Request",
                "Consultation",
                "Partnership",
                "Other",
              ].includes(category) && <option>{category}</option>}
            {(support
              ? [
                  "Technical Support",
                  "Account & Billing",
                  "Feature Request",
                  "Consultation",
                  "Partnership",
                  "Other",
                ]
              : services.map((s) => s.title)
            ).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        {support && (
          <>
            <label>
              Priority *
              <select name="priority" required defaultValue="">
                <option value="" disabled>
                  Select priority
                </option>
                {["Low", "Medium", "High", "Critical"].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="full">
              Subject *
              <input
                name="subject"
                placeholder="Briefly describe your issue"
                required
                maxLength={200}
              />
            </label>
          </>
        )}
        <label className="full">
          {support ? (
            "Description *"
          ) : (
            <span className="sr-only">Your message</span>
          )}
          <textarea
            name="message"
            placeholder={
              support
                ? "Please provide detailed information about your issue, including any error messages, steps to reproduce, or relevant details."
                : "Tell us about your project or inquiry…"
            }
            required
            minLength={10}
            maxLength={10000}
            rows={support ? 5 : 4}
          />
        </label>
        {support && (
          <>
            <label className="upload full">
              <Upload size={26} />
              <strong>Attach Files (Optional)</strong>
              <span>{file || "Choose a file to upload"}</span>
              <small>JPG, PNG, PDF, DOC, DOCX, ZIP (Max 10MB)</small>
              <input
                name="attachment"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.zip"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f && f.size > 10 * 1024 * 1024) {
                    setStatus("Please choose a file smaller than 10 MB.");
                    e.target.value = "";
                    setFile("");
                  } else {
                    setFile(f?.name || "");
                    setStatus("");
                  }
                }}
              />
            </label>
            <label className="checkbox full">
              <input name="consent" type="checkbox" required />I agree to the{" "}
              <a href="/terms">support terms and conditions</a>
            </label>
          </>
        )}
      </div>
      <button type="submit" className="button" disabled={busy}>
        {busy ? "Preparing…" : support ? "Submit Ticket" : "Send Message"}
        <ArrowRight size={17} />
      </button>
      {status && (
        <p role="status" className="form-status">
          {status}
        </p>
      )}
      <p className="form-note">
        Your information is secure and will never be shared.
      </p>
    </form>
  );
}
export function Jobs() {
  const [selected, setSelected] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = document.querySelector<HTMLElement>(".job-modal");
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();
    function keydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelected(null);
        return;
      }
      if (e.key === "Tab" && dialog) {
        const nodes = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button,a[href],input,select,textarea,[tabindex="0"]',
          ),
        );
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
  }, [selected]);
  return (
    <>
      <div className="card-grid cols-4 jobs">
        {[
          "Senior Software Engineer",
          "IT Project Manager",
          "Business Analyst",
          "UI/UX Designer",
        ].map((title, i) => (
          <article className="service-card" key={title}>
            <h3>{title}</h3>
            <div className="job-tags">
              <span>Full-time</span>
              <span>{i === 2 ? "Remote" : "Dhaka, BD"}</span>
            </div>
            <p>
              {
                [
                  "Build scalable web applications and work on cutting-edge technologies.",
                  "Lead digital transformation projects for global clients.",
                  "Bridge business needs with technology solutions.",
                  "Create intuitive and impactful digital experiences.",
                ][i]
              }
            </p>
            <button
              className="text-link"
              onClick={() => {
                setSelected(title);
                setSent(false);
              }}
            >
              View Details <ArrowRight size={15} />
            </button>
          </article>
        ))}
      </div>
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <section
            className="job-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close icon-button"
              aria-label="Close job details"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <span className="eyebrow">Join Our Team</span>
            <h2>{selected}</h2>
            <p>
              Work with a collaborative team building digital solutions for
              businesses across the region.
            </p>
            <h3>What you’ll bring</h3>
            <ul>
              <li>Relevant experience and a strong portfolio of work.</li>
              <li>Clear communication and collaborative problem-solving.</li>
              <li>A curiosity for technology and continuous learning.</li>
            </ul>
            <p>
              Contact our team to confirm current availability, role
              requirements and location before applying.
            </p>
            <Button
              href={
                "mailto:info@etriplesoft.com?subject=" +
                encodeURIComponent("Career inquiry: " + selected)
              }
            >
              Ask About This Role
            </Button>
            <button
              className="text-link"
              onClick={async () => {
                await navigator.clipboard.writeText(selected);
                setSent(true);
              }}
            >
              Copy role title
            </button>
            {sent && (
              <p role="status">
                Copied: {selected}. Include this title in your email.
              </p>
            )}
          </section>
        </div>
      )}
    </>
  );
}
