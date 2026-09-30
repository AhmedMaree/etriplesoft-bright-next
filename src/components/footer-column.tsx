"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";

const query = "(max-width: 760px)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

// Server and desktop render a plain heading with every link visible; on
// phones the heading becomes a button that expands the column.
export function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const collapsible = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );

  if (!collapsible) {
    return (
      <div>
        <p className="footer-heading">{title}</p>
        {children}
      </div>
    );
  }

  return (
    <div className="footer-col" data-open={open}>
      <button
        type="button"
        className="footer-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <span className="footer-heading">{title}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      <div id={id} className="footer-col-links" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
