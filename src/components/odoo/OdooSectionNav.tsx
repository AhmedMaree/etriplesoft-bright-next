"use client";

import { useEffect, useRef, useState } from "react";
import { anchorLinks } from "./content";
import styles from "./OdooHub.module.css";

export default function OdooSectionNav() {
  const navRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerBottom =
          document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
        const navBottom = navRef.current?.getBoundingClientRect().bottom ?? headerBottom;
        const activationLine = Math.max(headerBottom, navBottom) + 12;

        let nextActiveId: string | null = null;
        for (const [, href] of anchorLinks) {
          const section = document.getElementById(href.slice(1));
          if (section && section.getBoundingClientRect().top <= activationLine) {
            nextActiveId = href.slice(1);
          }
        }

        setActiveId((current) => (current === nextActiveId ? current : nextActiveId));
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <nav ref={navRef} className={styles.anchors} aria-label="On this page">
      <ul className="container">
        {anchorLinks.map(([label, href]) => {
          const id = href.slice(1);
          const active = activeId === id;

          return (
            <li key={href}>
              <a href={href} aria-current={active ? "location" : undefined}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
