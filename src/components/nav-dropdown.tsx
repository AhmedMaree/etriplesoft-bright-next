"use client";
import Link from "next/link";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { NavGroup } from "@/lib/navigation";

function slug(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * One disclosure group in the main navigation. It opens by hover on pointer
 * devices and by button activation on touch and keyboard.
 */
export function NavDropdown({
  group,
  isOpen,
  active,
  onOpen,
  onClose,
  onToggle,
  onNavigate,
}: {
  group: NavGroup;
  isOpen: boolean;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = `nav-panel-${slug(group.label)}`;
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={isOpen ? "nav-dropdown is-open" : "nav-dropdown"}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches)
          onOpen();
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches)
          onClose();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={
          active ? "nav-dropdown-trigger active" : "nav-dropdown-trigger"
        }
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {group.label}
        <ChevronDown size={12} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className="dropdown-panel"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClose();
            triggerRef.current?.focus();
          }
        }}
      >
        {group.items?.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
