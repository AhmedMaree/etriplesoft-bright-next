"use client";

import { useEffect, useId, useRef, useState } from "react";
import Script from "next/script";
import { ArrowRight, Loader2 } from "lucide-react";
import { company } from "@/lib/company";
import {
  contactServices,
  limits,
  demoTopics,
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

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window { turnstile?: TurnstileApi }
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

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
  demo = false,
  initialService = "",
  locale = "en",
}: {
  support?: boolean;
  demo?: boolean;
  initialService?: string;
  locale?: "en" | "ar";
}) {
  const kind: InquiryKind = support ? "support" : demo ? "demo" : "contact";
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const tokenRef = useRef("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const [state, setState] = useState<State>({ phase: "idle" });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [service, setService] = useState(initialService);
  const options: readonly string[] = support
    ? supportCategories
    : demo
      ? demoTopics
      : contactServices;
  const submitting = state.phase === "submitting";
  const ar = locale === "ar";
  const labels = ar ? {
    eyebrow: support ? "العملاء الحاليون" : demo ? "عرض أودو التوضيحي" : "أرسل لنا رسالة",
    heading: support ? "إرسال طلب دعم" : demo ? "اطلب عرضك التوضيحي" : "تواصل معنا",
    intro: support ? "أخبرنا بما يحدث والخدمة المرتبطة بطلبك." : demo ? "أخبرنا عن نشاطك وما ترغب في استعراضه. سنتواصل لتأكيد الموعد وإعداد العرض." : "أرسل استفسارك وسيتواصل معك فريقنا.",
    required: "الحقول التي تحمل علامة * مطلوبة.",
    fix: "يرجى مراجعة الحقول التالية:",
    name: "الاسم الكامل *", email: "بريد العمل الإلكتروني *", company: "الشركة", phone: "الهاتف",
    service: support ? "فئة المشكلة *" : demo ? "ما الذي ترغب في استعراضه؟ *" : "الخدمة التي تهمك",
    select: support ? "اختر فئة" : demo ? "اختر موضوعاً" : "اختر خدمة (اختياري)",
    subject: "الموضوع *", message: support ? "وصف المشكلة *" : demo ? "أخبرنا عن نشاطك *" : "كيف يمكننا مساعدتك؟ *",
    successEyebrow: "تم إرسال الرسالة", thankYou: "شكراً لك", another: "إرسال رسالة أخرى",
    send: support ? "إرسال الطلب" : demo ? "اطلب العرض التوضيحي" : "إرسال الرسالة", sending: "جارٍ الإرسال…",
    honeypot: "الموقع الإلكتروني", verification: "التحقق الأمني", noVerification: "التحقق عبر الإنترنت غير متاح مؤقتاً. يرجى مراسلتنا عبر البريد الإلكتروني:",
    requiredError: "هذا الحقل مطلوب.", invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
    successMessage: "شكراً لك. تم استلام رسالتك.", failure: `تعذر إرسال الرسالة. حاول مرة أخرى أو راسلنا على ${company.primaryEmail}.`,
    network: `تعذر الاتصال بالخادم. تحقق من اتصالك وحاول مجدداً أو راسلنا على ${company.primaryEmail}.`,
    verifyExpired: "انتهت صلاحية التحقق. حاول مرة أخرى.", verifyLoad: "تعذر تحميل التحقق. حاول مرة أخرى.", verifyPrompt: "يرجى إكمال التحقق قبل الإرسال.",
  } : null;
  const optionLabel = (value: string) => {
    if (!ar) return value;
    const translated: Record<string, string> = {
      "Sales & CRM": "المبيعات وإدارة علاقات العملاء", "Accounting & e-invoicing": "المحاسبة والفوترة الإلكترونية",
      "Inventory & manufacturing": "المخزون والتصنيع", "HR & payroll": "الموارد البشرية والرواتب",
      "Helpdesk & ITSM": "مكتب الخدمة وإدارة خدمات تقنية المعلومات", "Dashboards & insights": "لوحات المعلومات والتحليلات",
      "Not sure yet": "لم أحدد بعد", "Technical Support": "دعم فني", "Account & Billing": "الحساب والفوترة",
      "Feature Request": "طلب ميزة", Other: "أخرى",
      "Odoo ERP": "نظام أودو ERP", "Cloud & Security": "السحابة والأمن السيبراني",
      "AI & Automation": "الذكاء الاصطناعي والأتمتة", "Web Development": "تطوير المواقع",
      "Mobile Applications": "تطبيقات الجوال", "Digital Marketing": "التسويق الرقمي",
    };
    return translated[value] ?? value;
  };
  const arabicErrors = (source: InquiryErrors) => ar ? Object.fromEntries(Object.keys(source).map((key) => [key, key === "email" ? labels?.invalidEmail : labels?.requiredError])) as InquiryErrors : source;

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && options.includes(requested)) setService(requested);
  }, [options]);

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileReady || !widgetRef.current || !window.turnstile) return;
    const api = window.turnstile;
    const rendered = api.render(widgetRef.current, {
      sitekey: turnstileSiteKey,
      action: kind,
      theme: "light",
      size: "flexible",
      "response-field": false,
      callback: (token: string) => {
        tokenRef.current = token;
        setVerificationError("");
      },
      "expired-callback": () => {
        tokenRef.current = "";
      setVerificationError(ar ? labels?.verifyExpired ?? "انتهت صلاحية التحقق." : "Verification expired. Please try again.");
      },
      "error-callback": () => {
        tokenRef.current = "";
      setVerificationError(ar ? labels?.verifyLoad ?? "تعذر تحميل التحقق." : "Verification could not load. Please try again.");
      },
    });
    widgetId.current = rendered;
    return () => {
      api.remove(rendered);
      widgetId.current = null;
      tokenRef.current = "";
    };
  }, [kind, turnstileReady]);

  function resetVerification() {
    tokenRef.current = "";
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    const values: Record<string, string> = {};
    for (const key of fieldNames) values[key] = String(data.get(key) ?? "");
    return { data, values };
  }

  function validateField(name: string) {
    if (!formRef.current) return;
    const { values } = read(formRef.current);
    const found = validateInquiry(kind, values)[name];
    const next = ar && found ? (name === "email" ? labels?.invalidEmail : labels?.requiredError) : found;
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
      setErrors(arabicErrors(found));
    if (Object.keys(found).length) return;

    if (turnstileSiteKey && !tokenRef.current) {
      setVerificationError(ar ? labels?.verifyPrompt ?? "يرجى إكمال التحقق." : "Please complete the verification before sending.");
      widgetRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    if (turnstileSiteKey) data.set("cf-turnstile-response", tokenRef.current);

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
        resetVerification();
        form.reset();
        setService("");
        setErrors({});
        setState({
          phase: "success",
          message: ar ? labels?.successMessage ?? "شكراً لك" : result.message || "Thank you. Your message has been received.",
        });
        return;
      }
      if (result.errors) setErrors(arabicErrors(result.errors));
      resetVerification();
      setState({
        phase: "error",
        message:
          (ar ? labels?.failure : result.message) ||
          `We could not send your message. Please try again, or email ${company.primaryEmail}.`,
      });
    } catch {
      resetVerification();
      // Entered values stay in the form so the visitor can retry.
      setState({
        phase: "error",
        message: ar ? labels?.network ?? "تعذر الاتصال بالخادم." : `We could not reach the server. Check your connection and try again, or email ${company.primaryEmail}.`,
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
      <div className="contact-form form-success" role="status" tabIndex={-1} dir={ar ? "rtl" : undefined}>
        <span className="eyebrow">{labels?.successEyebrow ?? "Message sent"}</span>
        <h2>{labels?.thankYou ?? "Thank you"}</h2>
        <p>{state.message}</p>
        <button
          type="button"
          className="button secondary"
          onClick={() => setState({ phase: "idle" })}
        >
          {labels?.another ?? "Send another message"}
        </button>
      </div>
    );

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="contact-form"
      dir={ar ? "rtl" : undefined}
      id={support ? "ticket-form" : demo ? "demo-form" : "contact-form"}
      aria-busy={submitting}
    >
      <span className="eyebrow">
        {labels?.eyebrow ?? (support
          ? "Existing customers"
          : demo
            ? "Free Odoo demo"
            : "Send us a message")}
      </span>
      <h2>
        {labels?.heading ?? (support
          ? "Send a Support Request"
          : demo
            ? "Request Your Demo"
            : "Get in Touch")}
      </h2>
      <p>
        {labels?.intro ?? (support
          ? "Tell us what is happening and which service it relates to."
          : demo
            ? "Tell us about your business and what you want to see. We will confirm a time and prepare the demo around it."
            : "Send us your enquiry and our team will get back to you.")}
      </p>
      <p className="form-required-note">{labels?.required ?? "Fields marked * are required."}</p>

      {errorEntries.length > 0 && (
        <div
          className="form-error-summary"
          role="alert"
          tabIndex={-1}
          ref={summaryRef}
        >
            <strong>{labels?.fix ?? "Please fix the following:"}</strong>
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
            {labels?.honeypot ?? "Website"}
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="kind" value={kind} />

        <div className="field">
          <label htmlFor={id("name")}>{labels?.name ?? "Full name *"}</label>
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
          <label htmlFor={id("email")}>{labels?.email ?? "Work email *"}</label>
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
          <label htmlFor={id("company")}>{labels?.company ?? "Company"}</label>
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
          <label htmlFor={id("phone")}>{labels?.phone ?? "Phone"}</label>
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
            {labels?.service ?? (support
              ? "Issue category *"
              : demo
                ? "What would you like to see? *"
                : "Service of interest")}
          </label>
          <select
            id={id("service")}
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required={support || demo}
            aria-required={support || demo || undefined}
            aria-invalid={invalid("service")}
            aria-describedby={describe("service")}
          >
            <option value="">
              {labels?.select ?? (support
                ? "Select a category"
                : demo
                  ? "Select a topic"
                  : "Select a service (optional)")}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {optionLabel(option)}
              </option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        {support && (
          <div className="field">
            <label htmlFor={id("subject")}>{labels?.subject ?? "Subject *"}</label>
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
            {labels?.message ?? (support
              ? "Description *"
              : demo
                ? "Tell us about your business *"
                : "How can we help? *")}
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

      {turnstileSiteKey ? (
        <div className="form-verification">
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onReady={() => setTurnstileReady(true)}
            onError={() => setVerificationError(ar ? labels?.verifyLoad ?? "تعذر تحميل التحقق." : "Verification could not load. Please try again.")}
          />
          <div ref={widgetRef} aria-label={ar ? "التحقق الأمني" : "Security verification"} />
          {verificationError && <p className="field-error" role="alert">{verificationError}</p>}
        </div>
      ) : (
        <p className="form-status form-status-error" role="status">
          {ar ? "التحقق عبر الإنترنت غير متاح مؤقتاً. يرجى مراسلتنا عبر البريد الإلكتروني:" : "Online verification is temporarily unavailable. Please email"} {company.primaryEmail} {ar ? "بدلاً من ذلك." : "instead."}
        </p>
      )}

      <button type="submit" className="button" disabled={submitting || !turnstileSiteKey}>
        {submitting ? (
          <>
            <Loader2 size={17} className="spin" aria-hidden="true" />
            {labels?.sending ?? "Sending…"}
          </>
        ) : (
          <>
            {labels?.send ?? (support ? "Send request" : demo ? "Request my demo" : "Send message")}
            <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <div aria-live="polite" className="form-live">
        {submitting && <span className="sr-only">{ar ? "جارٍ إرسال رسالتك." : "Sending your message."}</span>}
        {state.phase === "error" && (
          <p className="form-status form-status-error" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
