import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { company } from "@/lib/company";
import {
  allowedFields,
  limits,
  validateInquiry,
  type InquiryKind,
} from "@/lib/inquiry";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 64 * 1024;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Best-effort, per-instance rate limit. On multi-instance or serverless hosting
// each instance keeps its own counter; add an edge/WAF limit for a hard cap.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT.windowMs,
  );
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits)
      if (!times.some((t) => now - t < RATE_LIMIT.windowMs)) hits.delete(key);
  }
  return recent.length > RATE_LIMIT.max;
}

const respond = (
  body: { message: string; errors?: Record<string, string> },
  status = 200,
) => NextResponse.json(body, { status });

const unavailable = `We could not send your message. Please try again, or email ${company.primaryEmail}.`;

export async function POST(request: NextRequest) {
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_BYTES)
    return respond({ message: "Your message is too large." }, 413);

  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || request.nextUrl.host;
  if (origin) {
    let sameOrigin = false;
    try {
      sameOrigin = new URL(origin).host === host;
    } catch {}
    if (!sameOrigin)
      return respond(
        { message: "This submission could not be verified." },
        403,
      );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip))
    return respond(
      {
        message:
          "Too many submissions. Please wait a few minutes and try again.",
      },
      429,
    );

  try {
    const form = await request.formData();
    const rawKind = String(form.get("kind") || "");
    if (
      rawKind !== "contact" &&
      rawKind !== "support" &&
      rawKind !== "newsletter"
    )
      return respond(
        { message: "This submission could not be processed." },
        400,
      );
    const kind: InquiryKind = rawKind;

    const allowed = new Set(allowedFields[kind]);
    for (const key of form.keys())
      if (!allowed.has(key))
        return respond(
          { message: "This submission could not be processed." },
          400,
        );

    // Honeypot: real visitors never see or fill this field. Answer as if it
    // worked so bots learn nothing, but deliver nothing.
    if (String(form.get("website") || "").trim())
      return respond({ message: "Thank you. Your message has been received." });

    const values: Record<string, string> = {};
    for (const key of allowed) {
      const value = form.get(key);
      if (typeof value === "string") values[key] = value.trim();
    }

    const errors = validateInquiry(kind, values);
    if (Object.keys(errors).length)
      return respond(
        {
          message:
            kind === "newsletter"
              ? Object.values(errors)[0]!
              : "Please correct the highlighted fields.",
          errors: errors as Record<string, string>,
        },
        400,
      );

    if (kind !== "newsletter") {
      const secret = process.env.TURNSTILE_SECRET_KEY;
      if (!secret)
        return respond({ message: "Verification is temporarily unavailable. Please email us instead." }, 503);
      const token = values["cf-turnstile-response"] || "";
      if (!token || token.length > 2048)
        return respond({ message: "Please complete the verification and try again." }, 403);
      const body = new URLSearchParams({ secret, response: token });
      if (ip !== "unknown") body.set("remoteip", ip);
      const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      });
      if (!verification.ok)
        return respond({ message: "Verification is temporarily unavailable. Please try again." }, 503);
      const result: { success?: boolean; action?: string } = await verification.json();
      if (!result.success || (result.action && result.action !== kind))
        return respond({ message: "Verification failed. Please try again." }, 403);
    }

    const cap = (key: keyof typeof limits) =>
      (values[key] ?? "").slice(0, limits[key]);
    const newsletter = kind === "newsletter";
    const id = randomUUID();
    const data = {
      id,
      createdAt: new Date().toISOString(),
      kind,
      name: newsletter ? "Insights newsletter subscriber" : cap("name"),
      email: cap("email"),
      company: cap("company"),
      phone: cap("phone"),
      service: cap("service"),
      subject: cap("subject"),
      message: newsletter
        ? "Request to receive the ETripleSoft insights newsletter."
        : cap("message"),
      consent: newsletter ? values.consent === "on" : null,
    };

    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    if (webhook) {
      // Same multipart shape the endpoint has always received.
      const outbound = new FormData();
      outbound.set("inquiry", JSON.stringify(data));
      const result = await fetch(webhook, {
        method: "POST",
        headers: process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {},
        body: outbound,
        signal: AbortSignal.timeout(15000),
      });
      if (!result.ok) throw new Error("Delivery failed");
      return respond({
        message: newsletter
          ? "Thank you. Your newsletter request has been received."
          : kind === "support"
            ? "Thank you. Your support request has been received."
            : "Thank you. Your message has been received.",
      });
    }

    if (process.env.NODE_ENV === "production")
      return respond(
        {
          message: `Online submission is not available right now. Please email ${company.primaryEmail}.`,
        },
        503,
      );

    // Development only: keep the submission on disk so the form can be
    // exercised without a delivery endpoint. Never reached in production.
    const dir = path.join(process.cwd(), ".local-inquiries", id);
    await mkdir(dir, { recursive: true });
    await writeFile(
      path.join(dir, "inquiry.json"),
      JSON.stringify(data, null, 2),
    );
    return respond({
      message:
        "Development mode: saved to .local-inquiries only. INQUIRY_WEBHOOK_URL is not set, so nothing was delivered.",
    });
  } catch {
    return respond({ message: unavailable }, 503);
  }
}
