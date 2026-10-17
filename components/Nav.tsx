"use client";

import Link from "next/link";
import { useState } from "react";
import SocialLinks from "@/components/SocialLinks";

const links = [
  { href: "/shop/hats", label: "Hats" },
  { href: "/shop/tees", label: "Tees" },
  { href: "/shop/hoodies", label: "Hoodies" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/reels", label: "Reels" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-xl tracking-wide text-black sm:text-2xl">
          COMMON<span className="text-gold">THREADS</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wide md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-black/10" />
          <SocialLinks />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 bg-cream px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium uppercase tracking-wide text-ink/80 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks className="mt-3 border-t border-black/10 pt-4" />
        </nav>
      )}
    </header>
  );
}
