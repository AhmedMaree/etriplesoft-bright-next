import Image from "next/image";
import type { CSSProperties } from "react";
import dashboardImage from "../../assets/images/odoo-page/odoo-dashboard.png";
import { TextLink } from "./site";

const addons: [string, string, string, string][] = [
  ["Sales", "sales", "#f3eaff", "#a34bea"],
  ["CRM", "crm", "#e2f8f5", "#16bda5"],
  ["Accounting", "accounting", "#fff0df", "#ff8d1f"],
  ["Inventory", "inventory", "#fff3e4", "#ff9d22"],
  ["Manufacturing", "manufacturing", "#fff0df", "#ff9a1f"],
  ["Website", "website", "#e8f2ff", "#2584f5"],
  ["E-commerce", "ecommerce", "#f4eaff", "#9845ed"],
  ["Projects", "projects", "#fce9f4", "#ee4d9b"],
];

function AddonGlyph({ name }: { name: string }) {
  const shared = {
    className: `addon-glyph addon-glyph--${name}`,
    viewBox: "0 0 48 48",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "sales":
      return (
        <svg {...shared}>
          <rect x="8" y="27" width="8" height="14" rx="3" />
          <rect x="20" y="18" width="8" height="23" rx="3" />
          <rect x="32" y="8" width="8" height="33" rx="3" />
        </svg>
      );
    case "crm":
      return (
        <svg {...shared}>
          <path d="M24 8 39 17 24 27 9 18z" />
          <path d="m9 22 15 10 15-10v7L24 40 9 30z" opacity=".72" />
          <path d="m24 8 15 9-15 10-7-5z" opacity=".48" />
        </svg>
      );
    case "accounting":
      return (
        <svg {...shared}>
          <path d="M13 6h15l9 9v25a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" />
          <path d="M28 6v10h9M17 25h15M17 31h15M17 37h10" className="addon-glyph-cutout" />
        </svg>
      );
    case "inventory":
      return (
        <svg {...shared}>
          <path d="m24 4 18 10v20L24 44 6 34V14L24 4Z" />
          <path d="M6 14 24 25 42 14M24 25v19" className="addon-glyph-cutout" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg {...shared}>
          <path d="M7 39V21l11 7V17l11 7V11h12v28H7Z" />
          <path d="M31 17h4M12 33h4M22 33h4M32 33h4" className="addon-glyph-cutout" />
        </svg>
      );
    case "website":
      return (
        <svg {...shared}>
          <circle cx="24" cy="24" r="17" />
          <path d="M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17c-5-5-7-11-7-17s2-12 7-17Z" className="addon-glyph-cutout" />
          <path d="M25 8a16 16 0 0 1 15 16H25z" opacity=".58" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg {...shared}>
          <path d="M9 11h4l4 22h19l5-16H16" />
          <circle cx="20" cy="39" r="3.5" />
          <circle cx="34" cy="39" r="3.5" />
        </svg>
      );
    default:
      return (
        <svg {...shared}>
          <path d="m7 23 34-15-11 33-7-13-16-5Z" />
          <path d="m23 28 10-10" className="addon-glyph-cutout" />
        </svg>
      );
  }
}

export default function OdooProductVisual() {
  return (
    <div className="hero-product-visual">
      <div className="background-decoration" aria-hidden="true">
        <span className="deco-blob deco-blob--a" />
        <span className="deco-blob deco-blob--b" />
        <span className="orbit-ring" />
      </div>
      <span className="floating-icon icon-1" aria-hidden="true"><AddonGlyph name="sales" /></span>
      <span className="floating-icon icon-2" aria-hidden="true"><AddonGlyph name="crm" /></span>
      <span className="floating-icon icon-3" aria-hidden="true"><AddonGlyph name="inventory" /></span>

      <div className="laptop">
        <div className="laptop-screen">
          <Image
            src={dashboardImage}
            alt="Odoo dashboard showing revenue, leads, orders, sales performance, top modules and recent activities"
            className="odoo-dashboard-image"
            sizes="(max-width: 760px) 90vw, (max-width: 900px) 650px, 600px"
          />
        </div>
        <div className="laptop-base" aria-hidden="true">
          <span className="laptop-base-notch" />
        </div>
      </div>

      <div className="addons-card">
        <div className="addons-head">
          <strong>Odoo Addons</strong>
          <TextLink href="/odoo#solutions">View All</TextLink>
        </div>
        <div className="addons-grid">
          {addons.map(([label, icon, bg, fg]) => (
            <div className="addon-item" key={label}>
              <span className="addon-icon" style={{ "--addon-tint": bg, "--addon-color": fg } as CSSProperties}>
                <AddonGlyph name={icon} />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
