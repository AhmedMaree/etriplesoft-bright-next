"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  GraduationCap,
  HardHat,
  Headphones,
  Info,
  LayoutGrid,
  Mail,
  Megaphone,
  Menu,
  PlayCircle,
  Receipt,
  Rocket,
  Search,
  Smartphone,
  Users,
  UtensilsCrossed,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { arCta, arPrimaryNav } from "@/i18n/ar";
import { englishCounterpart } from "@/i18n/paths";

/* ── Icon map (same as English NavDropdown) ──────────────────────────────── */
const icons: Record<string, LucideIcon> = {
  layout: LayoutGrid,
  rocket: Rocket,
  receipt: Receipt,
  users: Users,
  headset: Headphones,
  chart: BarChart3,
  cloud: Cloud,
  bot: Bot,
  code: Code2,
  phone: Smartphone,
  megaphone: Megaphone,
  hardhat: HardHat,
  building: Building2,
  wrench: Wrench,
  utensils: UtensilsCrossed,
  graduation: GraduationCap,
  info: Info,
  book: BookOpen,
  play: PlayCircle,
  briefcase: Briefcase,
  mail: Mail,
};

function slug(label: string) {
  /* Arabic labels — use a simple index-based id to avoid encoding issues */
  return label.replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

function supportsDesktopHover() {
  return window.matchMedia(
    "(min-width: 1181px) and (hover: hover) and (pointer: fine)"
  ).matches;
}

/** True if `href` is or is under the current path. */
function matchesPath(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/ar") return pathname === "/ar";
  return pathname === path || pathname.startsWith(path + "/");
}

/** Arabic site header — exact structural match to English header, RTL direction. */
export function ArHeader() {
  const pathname = usePathname() || "/ar";
  const english = englishCounterpart(pathname);

  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = (label: string) => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpenGroup((cur) => (cur === label ? null : cur));
    }, 120);
  };

  /* Shrink the header after scrolling and reveal it when the user scrolls up. */
  useEffect(() => {
    let previousY = window.scrollY;
    const root = document.documentElement;
    const onScroll = () => {
      const currentY = window.scrollY;
      root.toggleAttribute("data-scrolled", currentY > 24);

      if (open || openGroup || search || currentY <= 24) {
        root.removeAttribute("data-header-hidden");
      } else if (currentY > previousY + 4 && currentY > 100) {
        root.setAttribute("data-header-hidden", "");
      } else if (currentY < previousY - 4) {
        root.removeAttribute("data-header-hidden");
      }

      previousY = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.removeAttribute("data-scrolled");
      root.removeAttribute("data-header-hidden");
    };
  }, [open, openGroup, search]);

  /* Close everything on route change */
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
    setSearch(false);
  }, [pathname]);

  /* Escape closes whatever is open */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openGroup) setOpenGroup(null);
      else if (open) setOpen(false);
      else if (search) setSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openGroup, open, search]);

  /* Close on outside click */
  useEffect(() => {
    if (!open && !openGroup && !search) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !navRef.current?.contains(target) &&
        !toolsRef.current?.contains(target)
      ) {
        setOpen(false);
        setOpenGroup(null);
        setSearch(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, openGroup, search]);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  /* Arabic search suggestions */
  const searchItems = [
    { label: "نظرة عامة على أودو", href: "/ar/odoo" },
    { label: "السحابة والأمن السيبراني", href: "/ar/cloud" },
    { label: "الذكاء الاصطناعي والأتمتة", href: "/ar/ai" },
    { label: "تطوير المواقع والتطبيقات", href: "/ar/web" },
    { label: "التسويق الرقمي", href: "/ar/digital-marketing" },
    { label: "التنفيذ والإطلاق", href: "/ar/odoo/implementation" },
    { label: "المحاسبة والفواتير الإلكترونية", href: "/ar/odoo/accounting" },
    { label: "الموارد البشرية والرواتب", href: "/ar/odoo/hr-payroll" },
    { label: "من نحن", href: "/ar/about-us" },
    { label: "تواصل معنا", href: "/ar/contact-us" },
  ];
  const searchResults = query
    ? searchItems.filter((s) => s.label.includes(query))
    : searchItems;

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo — in RTL layout this is the rightmost item */}
        <Link href="/ar" aria-label="ETripleSoft، الصفحة الرئيسية" className="brand">
          <Image
            src="/images/logo-header-hq.png"
            alt="ETripleSoft"
            width={1600}
            height={393}
            sizes="178px"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav
          id="main-navigation"
          ref={navRef}
          className={open ? "navigation is-open" : "navigation"}
          aria-label="التنقل الرئيسي"
        >
          {/* Home link */}
          <Link
            onClick={() => setOpen(false)}
            className={pathname === "/ar" ? "active" : ""}
            href="/ar"
            prefetch={false}
          >
            الرئيسية
          </Link>

          {/* Dropdown groups */}
          {arPrimaryNav.map((group) =>
            "items" in group ? (
              <div
                key={group.label}
                className={openGroup === group.label ? "nav-dropdown is-open" : "nav-dropdown"}
                onMouseEnter={() => { if (supportsDesktopHover()) { clearCloseTimer(); setOpenGroup(group.label); } }}
                onMouseLeave={() => { if (supportsDesktopHover()) scheduleClose(group.label); }}
              >
                <button
                  type="button"
                  className={
                    group.items.some((item) => matchesPath(pathname, item.href))
                      ? "nav-dropdown-trigger active"
                      : "nav-dropdown-trigger"
                  }
                  aria-expanded={openGroup === group.label}
                  aria-controls={`nav-panel-${slug(group.label)}`}
                  onClick={() =>
                    setOpenGroup((cur) =>
                      cur === group.label ? null : group.label
                    )
                  }
                >
                  {group.label}
                  <ChevronDown size={12} aria-hidden="true" />
                </button>
                <div
                  id={`nav-panel-${slug(group.label)}`}
                  className="dropdown-panel"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setOpenGroup(null);
                    }
                  }}
                >
                  {group.items.map((item) => {
                    const ItemIcon = item.icon ? icons[item.icon] : undefined;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setOpen(false); setOpenGroup(null); }}
                        prefetch={false}
                      >
                        {ItemIcon && (
                          <span className="dropdown-icon" aria-hidden="true">
                            <ItemIcon size={18} />
                          </span>
                        )}
                        <span className="dropdown-text">
                          <strong>{item.label}</strong>
                          {"description" in item && item.description && (
                            <small>{item.description}</small>
                          )}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={group.label}
                href={group.href}
                onClick={() => setOpen(false)}
                className={matchesPath(pathname, group.href) ? "active" : ""}
                prefetch={false}
              >
                {group.label}
              </Link>
            )
          )}

          {/* Language switch in mobile menu */}
          <a
            className="lang-switch lang-switch-mobile"
            href={english}
            hrefLang="en"
            lang="en"
          >
            English
          </a>
        </nav>

        {/* Header tools */}
        <div ref={toolsRef} className="header-tools">
          {/* Search */}
          <button
            className="icon-button search-toggle"
            aria-label="البحث في الموقع"
            aria-expanded={search}
            onClick={() => setSearch((v) => !v)}
          >
            <Search size={19} />
          </button>

          {/* Language switcher — desktop */}
          <a
            className="lang-switch lang-switch-desktop"
            href={english}
            hrefLang="en"
            lang="en"
          >
            English
          </a>

          {/* CTA button */}
          <Link className="button gradient" href={arCta.primaryHref} prefetch={false}>
            {arCta.primary}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Search panel */}
        {search && (
          <div className="search-panel">
            <label htmlFor="ar-site-search">ابحث عن حل</label>
            <input
              id="ar-site-search"
              autoFocus
              placeholder="ابحث عن الخدمات، الشركة، الدعم…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div>
              {searchResults.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setSearch(false)}
                  prefetch={false}
                >
                  {s.label}
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
