import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (Number(request.headers.get("content-length") || 0) > 11 * 1024 * 1024)
    return NextResponse.json(
      { message: "The upload is too large. Maximum attachment size is 10 MB." },
      { status: 413 },
    );
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || request.nextUrl.host;
  if (origin) {
    try {
      if (new URL(origin).host !== host)
        return NextResponse.json(
          { message: "This submission could not be verified." },
          { status: 403 },
        );
    } catch {
      return NextResponse.json(
        { message: "This submission could not be verified." },
        { status: 403 },
      );
    }
  }
  try {
    const form = await request.formData();
    const value = (name: string, max = 1000) =>
      String(form.get(name) || "")
        .trim()
        .slice(0, max);
    const name = value("name", 120),
      email = value("email", 254),
      message = value("message", 10000),
      kind = value("kind", 20);
    const newsletter = kind === "newsletter";
    const validEmail = /^\S+@\S+\.\S+$/.test(email);
    if (
      newsletter
        ? !validEmail || form.get("consent") !== "on"
        : !name || !validEmail || message.length < 10
    )
      return NextResponse.json(
        {
          message: newsletter
            ? "Enter a valid email address and agree to receive occasional updates."
            : "Please provide your name, a valid email address, and a message of at least 10 characters.",
        },
        { status: 400 },
      );
    if (
      kind === "support" &&
      (!value("subject") ||
        !value("service") ||
        !["Low", "Medium", "High", "Critical"].includes(value("priority")) ||
        form.get("consent") !== "on")
    )
      return NextResponse.json(
        {
          message:
            "Please complete all required ticket fields and accept the support terms.",
        },
        { status: 400 },
      );
    const attachment = form.get("attachment");
    if (attachment instanceof File && attachment.size > 10 * 1024 * 1024)
      return NextResponse.json(
        { message: "Please choose a file smaller than 10 MB." },
        { status: 413 },
      );
    if (
      attachment instanceof File &&
      attachment.size &&
      !/\.(jpe?g|png|pdf|docx?|zip)$/i.test(attachment.name)
    )
      return NextResponse.json(
        {
          message: "Please use a JPG, PNG, PDF, DOC, DOCX, or ZIP attachment.",
        },
        { status: 400 },
      );
    const id = randomUUID();
    const data = {
      id,
      createdAt: new Date().toISOString(),
      kind,
      name: name || (newsletter ? "Insights newsletter subscriber" : ""),
      email,
      company: value("company", 150),
      phone: value("phone", 40),
      service: value("service", 150),
      priority: value("priority", 20),
      subject: value("subject", 200),
      message: newsletter
        ? "Request to receive the ETripleSoft insights newsletter."
        : message,
      consent: newsletter ? form.get("consent") === "on" : null,
      attachmentName:
        attachment instanceof File && attachment.size ? attachment.name : null,
    };
    if (process.env.INQUIRY_WEBHOOK_URL) {
      const outbound = new FormData();
      outbound.set("inquiry", JSON.stringify(data));
      if (attachment instanceof File && attachment.size)
        outbound.set("attachment", attachment);
      const result = await fetch(process.env.INQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {},
        body: outbound,
        signal: AbortSignal.timeout(15000),
      });
      if (!result.ok) throw new Error("Delivery failed");
      return NextResponse.json({
        message: newsletter
          ? `Your newsletter request has been submitted. Reference: ${id.slice(0, 8)}.`
          : `Your ${kind === "support" ? "support ticket" : "message"} has been submitted. Reference: ${id.slice(0, 8)}.`,
        id,
      });
    }
    if (process.env.NODE_ENV === "production")
      return NextResponse.json(
        {
          message: newsletter
            ? "Newsletter delivery is not configured yet. Please try again later."
            : "Online submission is not configured yet. Please email " +
              (kind === "support" ? "support" : "info") +
              "@etriplesoft.com directly.",
        },
        { status: 503 },
      );
    const dir = path.join(process.cwd(), ".local-inquiries", id);
    await mkdir(dir, { recursive: true });
    await writeFile(
      path.join(dir, "inquiry.json"),
      JSON.stringify(data, null, 2),
    );
    if (attachment instanceof File && attachment.size)
      await writeFile(
        path.join(
          dir,
          "attachment" + path.extname(attachment.name).toLowerCase(),
        ),
        Buffer.from(await attachment.arrayBuffer()),
      );
    return NextResponse.json({
      message: newsletter
        ? `Saved in this local preview (reference ${id.slice(0, 8)}). Your address has not been subscribed; the request was not sent to ETripleSoft.`
        : `Saved in this local preview (reference ${id.slice(0, 8)}). This has not been sent to ETripleSoft. For delivery, email ${kind === "support" ? "support" : "info"}@etriplesoft.com.`,
      id,
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not submit your inquiry. Please try again or email info@etriplesoft.com.",
      },
      { status: 503 },
    );
  }
}
