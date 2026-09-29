// Shared inquiry rules. The browser uses validateInquiry() for instant
// feedback; /api/inquiries runs the same function and is authoritative.
// Keep this file free of imports that need a browser or Node runtime.
import { services } from "./data";

export type InquiryKind = "contact" | "support" | "newsletter";

export const supportCategories = [
  "Technical Support",
  "Account & Billing",
  "Feature Request",
  "Other",
] as const;

export const contactServices: readonly string[] = [
  ...services.map((service) => service.title),
  "Other",
];

export const limits = {
  name: 120,
  email: 254,
  company: 150,
  phone: 40,
  service: 150,
  subject: 200,
  message: 5000,
} as const;

export const minMessageLength = 10;

/** Every field a form may send. Anything else is rejected by the server. */
export const allowedFields: Record<InquiryKind, readonly string[]> = {
  contact: ["kind", "name", "email", "company", "phone", "service", "message", "website", "cf-turnstile-response"],
  support: [
    "kind",
    "name",
    "email",
    "company",
    "phone",
    "service",
    "subject",
    "message",
    "website",
    "cf-turnstile-response",
  ],
  newsletter: ["kind", "email", "consent", "website"],
};

export type InquiryValues = Partial<Record<string, string>>;
export type InquiryErrors = Partial<Record<string, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s().-]{5,}$/;

export function validateInquiry(
  kind: InquiryKind,
  values: InquiryValues,
): InquiryErrors {
  const errors: InquiryErrors = {};
  const get = (key: string) => (values[key] ?? "").trim();
  const email = get("email");

  if (!email) errors.email = "Enter your email address.";
  else if (email.length > limits.email || !emailPattern.test(email))
    errors.email = "Enter a valid email address, for example name@company.com.";

  if (kind === "newsletter") {
    if (values.consent !== "on")
      errors.consent = "Confirm that you agree to receive updates.";
    return errors;
  }

  if (!get("name")) errors.name = "Enter your full name.";
  else if (get("name").length > limits.name)
    errors.name = `Use ${limits.name} characters or fewer.`;

  if (get("company").length > limits.company)
    errors.company = `Use ${limits.company} characters or fewer.`;

  const phone = get("phone");
  if (phone && (phone.length > limits.phone || !phonePattern.test(phone)))
    errors.phone = "Enter a valid phone number.";

  const service = get("service");
  const allowed: readonly string[] =
    kind === "support" ? supportCategories : contactServices;
  if (!service) {
    if (kind === "support") errors.service = "Choose an issue category.";
  } else if (!allowed.includes(service)) {
    errors.service = "Choose one of the listed options.";
  }

  if (kind === "support") {
    if (!get("subject")) errors.subject = "Enter a short subject.";
    else if (get("subject").length > limits.subject)
      errors.subject = `Use ${limits.subject} characters or fewer.`;
  }

  const message = get("message");
  if (message.length < minMessageLength)
    errors.message = `Tell us a little more (at least ${minMessageLength} characters).`;
  else if (message.length > limits.message)
    errors.message = `Use ${limits.message} characters or fewer.`;

  return errors;
}
