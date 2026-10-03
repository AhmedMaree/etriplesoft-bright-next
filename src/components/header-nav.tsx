"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, Menu, Search, X } from "lucide-react";
import { primaryNav, bookADemo, companyLinks, serviceLinks } from "@/lib/navigation";
import { NavDropdown } from "./nav-dropdown";
import { arabicCounterpart } from "@/i18n/paths";

/** True if `href` (ignoring any #hash) is or is under the current path. */
function matchesPath(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(path + "/");
}

/**
 * Everything interactive in the header: the nav links/dropdowns, search,
 * mobile hamburger + panel, and the CTA. Isolated into its own Client
 * Component so `Header` itself can stay a Server Component.
 */
export function HeaderNav() {
  const pathname = usePathname() || "/";
  const arabic = arabicCounterpart(pathname);
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

  // Shrink the header after scrolling and reveal it when the user scrolls up.
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

  // Close everything on route change.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
    setSearch(false);
  }, [pathname]);

  // Escape closes whatever is open.
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

  // Close on outside click.
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

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const searchResults = [
    ...serviceLinks,
    ...companyLinks,
    { label: "Support Ticket", href: "/support-ticket" },
  ].filter((s) => s.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <nav
        id="main-navigation"
        ref={navRef}
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        <Link
          onClick={() => setOpen(false)}
          className={pathname === "/" ? "active" : ""}
          href="/"
          prefetch={false}
        >
          Home
        </Link>
        {primaryNav.map((group) =>
          group.items ? (
            <NavDropdown
              key={group.label}
              group={group}
              isOpen={openGroup === group.label}
              active={group.items.some((item) =>
                matchesPath(pathname, item.href),
              )}
              onOpen={() => {
                clearCloseTimer();
                setOpenGroup(group.label);
              }}
              onClose={() => scheduleClose(group.label)}
              onToggle={() =>
                setOpenGroup((cur) => (cur === group.label ? null : group.label))
              }
              onNavigate={() => {
                setOpen(false);
                setOpenGroup(null);
              }}
            />
          ) : (
            <Link
              key={group.label}
              href={group.href!}
              onClick={() => setOpen(false)}
              className={matchesPath(pathname, group.href!) ? "active" : ""}
              prefetch={false}
            >
              {group.label}
            </Link>
          ),
        )}
        <a
          className="lang-switch lang-switch-mobile"
          href={arabic}
          hrefLang="ar"
          lang="ar"
        >
          <Globe size={16} aria-hidden="true" /> العربية
        </a>
      </nav>
      <div ref={toolsRef} className="header-tools">
        <button
          className="icon-button search-toggle"
          aria-label="Search website"
          aria-expanded={search}
          onClick={() => setSearch((v) => !v)}
        >
          <Search size={19} />
        </button>
        <a
          className="lang-switch lang-switch-desktop"
          href={arabic}
          hrefLang="ar"
          lang="ar"
        >
          <Globe size={16} aria-hidden="true" /> العربية
        </a>
        <Link className="button gradient" href={bookADemo.href} prefetch={false}>
          {bookADemo.label}
          <ArrowRight size={17} />
        </Link>
        <button
          className="icon-button mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {search && (
        <div className="search-panel">
          <label htmlFor="site-search">Find a solution</label>
          <input
            id="site-search"
            autoFocus
            placeholder="Search services, company, support…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            {searchResults.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setSearch(false)} prefetch={false}>
                {s.label}
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
