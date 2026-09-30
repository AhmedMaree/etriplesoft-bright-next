"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { arCta, arNav } from "@/i18n/ar";
import { englishCounterpart } from "@/i18n/paths";

/** Arabic site header: same shell as the English one, Arabic navigation. */
export function ArHeader() {
  const pathname = usePathname() || "/ar";
  const [open, setOpen] = useState(false);
  const english = englishCounterpart(pathname);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    const onScroll = () =>
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeAttribute("data-scrolled");
    };
  }, []);

  const current = (href: string) =>
    href === "/ar" ? pathname === "/ar" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
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
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="التنقل الرئيسي"
        >
          {arNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={current(item.href) ? "active" : ""}
              aria-current={current(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <a className="lang-switch lang-switch-mobile" href={english} hrefLang="en" lang="en">
            <Globe size={16} aria-hidden="true" /> English
          </a>
        </nav>
        <div className="header-tools">
          <a className="lang-switch lang-switch-desktop" href={english} hrefLang="en" lang="en">
            <Globe size={16} aria-hidden="true" /> English
          </a>
          <Link className="button gradient" href={arCta.primaryHref} prefetch={false}>
            {arCta.primary}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
