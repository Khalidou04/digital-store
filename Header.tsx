"use client";

import Link from "next/link";
import { useState } from "react";
import { Layers, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
            <Layers className="h-4 w-4" aria-hidden="true" />
          </span>
          {siteConfig.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-700">{l.label}</Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy-900/10 px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-brand-50">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
