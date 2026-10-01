"use client";
import Link from "next/link";
import { useRef } from "react";
import {
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
  PlayCircle,
  Receipt,
  Rocket,
  Smartphone,
  Users,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { NavGroup } from "@/lib/navigation";

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
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function supportsDesktopHover() {
  return window.matchMedia(
    "(min-width: 1181px) and (hover: hover) and (pointer: fine)",
  ).matches;
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
        if (supportsDesktopHover()) onOpen();
      }}
      onMouseLeave={() => {
        if (supportsDesktopHover()) onClose();
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
        {group.items?.map((item) => {
          const ItemIcon = item.icon ? icons[item.icon] : undefined;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              prefetch={false}
            >
              {ItemIcon && (
                <span className="dropdown-icon" aria-hidden="true">
                  <ItemIcon size={18} />
                </span>
              )}
              <span className="dropdown-text">
                <strong>{item.label}</strong>
                {item.description && <small>{item.description}</small>}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
