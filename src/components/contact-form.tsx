"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { company } from "@/lib/company";
import {
  contactServices,
  limits,
  supportCategories,
  validateInquiry,
  type InquiryErrors,
  type InquiryKind,
} from "@/lib/inquiry";

type State =
  | { phase: "idle" }
  | { phase: "submitting" }
  | { phase: "success"; message: string }
  | { phase: "error"; message: string };

const fieldNames = [
  "name",
  "email",
  "company",
  "phone",
  "service",
  "subject",
  "message",
] as const;

/**
 * Contact / support enquiry form. Client validation is for feedback only;
 * /api/inquiries validates again and is authoritative.
 */
export function ContactForm({
  support = false,
  initialService = "",
}: {
  support?: boolean;
  initialService?: string;
}) {
  const kind: InquiryKind = support ? "support" : "contact";
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>({ phase: "idle" });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [service, setService] = useState(initialService);
  const options: readonly string[] = support ? supportCategories : contactServices;
  const submitting = state.phase === "submitting";

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && options.includes(requested)) setService(requested);
  }, [options]);

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    const values: Record<string, string> = {};
    for (const key of fieldNames) values[key] = String(data.get(key) ?? "");
    return { data, values };
  }

  function validateField(name: string) {
    if (!formRef.current) return;
    const { values } = read(formRef.current);
    const next = validateInquiry(kind, values)[name];
    setErrors((current) => {
      const copy = { ...current };
      if (next) copy[name] = next;
      else delete copy[name];
      return copy;
    });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const { data, values } = read(form);
    const found = validateInquiry(kind, values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setState({ phase: "submitting" });
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: data,
      });
      const result: { message?: string; errors?: InquiryErrors } = await response
        .json()
        .catch(() => ({}));
      if (response.ok) {
        form.reset();
        setService("");
        setErrors({});
        setState({
          phase: "success",
          message: result.message || "Thank you. Your message has been received.",
        });
        return;
      }
      if (result.errors) setErrors(result.errors);
      setState({
        phase: "error",
        message:
          result.message ||
          `We could not send your message. Please try again, or email ${company.primaryEmail}.`,
      });
    } catch {
      // Entered values stay in the form so the visitor can retry.
      setState({
        phase: "error",
        message: `We could not reach the server. Check your connection and try again, or email ${company.primaryEmail}.`,
      });
    }
  }

  const errorEntries = Object.entries(errors).filter(([, message]) => message);

  const describe = (name: string) => (errors[name] ? `${id(name)}-error` : undefined);
  const invalid = (name: string) => (errors[name] ? true : undefined);
  const fieldError = (name: string) =>
    errors[name] ? (
      <span className="field-error" id={`${id(name)}-error`}>
        {errors[name]}
      </span>
    ) : null;

  if (state.phase === "success")
    return (
      <div className="contact-form form-success" role="status" tabIndex={-1}>
        <span className="eyebrow">Message sent</span>
        <h2>Thank you</h2>
        <p>{state.message}</p>
        <button
          type="button"
          className="button secondary"
          onClick={() => setState({ phase: "idle" })}
        >
          Send another message
        </button>
      </div>
    );

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="contact-form"
      id={support ? "ticket-form" : "contact-form"}
      aria-busy={submitting}
    >
      <span className="eyebrow">
        {support ? "Existing customers" : "Send us a message"}
      </span>
      <h2>{support ? "Send a Support Request" : "Get in Touch"}</h2>
      <p>
        {support
          ? "Tell us what is happening and which service it relates to."
          : "Send us your enquiry and our team will get back to you."}
      </p>
      <p className="form-required-note">Fields marked * are required.</p>

      {errorEntries.length > 0 && (
        <div
          className="form-error-summary"
          role="alert"
          tabIndex={-1}
          ref={summaryRef}
        >
          <strong>Please fix the following:</strong>
          <ul>
            {errorEntries.map(([name, message]) => (
              <li key={name}>
                <a href={`#${id(name)}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="form-grid">
        {/* Honeypot: hidden from people and assistive tech, ignored if empty. */}
        <div className="hp-field" aria-hidden="true">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="kind" value={kind} />

        <div className="field">
          <label htmlFor={id("name")}>Full name *</label>
          <input
            id={id("name")}
            name="name"
            autoComplete="name"
            required
            maxLength={limits.name}
            aria-required="true"
            aria-invalid={invalid("name")}
            aria-describedby={describe("name")}
            onBlur={() => validateField("name")}
          />
          {fieldError("name")}
        </div>
        <div className="field">
          <label htmlFor={id("email")}>Work email *</label>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={limits.email}
            aria-required="true"
            aria-invalid={invalid("email")}
            aria-describedby={describe("email")}
            onBlur={() => validateField("email")}
          />
          {fieldError("email")}
        </div>
        <div className="field">
          <label htmlFor={id("company")}>Company</label>
          <input
            id={id("company")}
            name="company"
            autoComplete="organization"
            maxLength={limits.company}
            aria-invalid={invalid("company")}
            aria-describedby={describe("company")}
          />
          {fieldError("company")}
        </div>
        <div className="field">
          <label htmlFor={id("phone")}>Phone</label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={limits.phone}
            aria-invalid={invalid("phone")}
            aria-describedby={describe("phone")}
            onBlur={() => validateField("phone")}
          />
          {fieldError("phone")}
        </div>
        <div className={support ? "field" : "field full"}>
          <label htmlFor={id("service")}>
            {support ? "Issue category *" : "Service of interest"}
          </label>
          <select
            id={id("service")}
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required={support}
            aria-required={support || undefined}
            aria-invalid={invalid("service")}
            aria-describedby={describe("service")}
          >
            <option value="">
              {support ? "Select a category" : "Select a service (optional)"}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        {support && (
          <div className="field">
            <label htmlFor={id("subject")}>Subject *</label>
            <input
              id={id("subject")}
              name="subject"
              required
              maxLength={limits.subject}
              aria-required="true"
              aria-invalid={invalid("subject")}
              aria-describedby={describe("subject")}
              onBlur={() => validateField("subject")}
            />
            {fieldError("subject")}
          </div>
        )}
        <div className="field full">
          <label htmlFor={id("message")}>
            {support ? "Description *" : "How can we help? *"}
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={support ? 6 : 5}
            required
            maxLength={limits.message}
            aria-required="true"
            aria-invalid={invalid("message")}
            aria-describedby={describe("message")}
            onBlur={() => validateField("message")}
          />
          {fieldError("message")}
        </div>
      </div>

      <button type="submit" className="button" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 size={17} className="spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            {support ? "Send request" : "Send message"}
            <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <div aria-live="polite" className="form-live">
        {submitting && <span className="sr-only">Sending your message.</span>}
        {state.phase === "error" && (
          <p className="form-status form-status-error" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
