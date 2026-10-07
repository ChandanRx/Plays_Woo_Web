"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#discover", label: "Discover" },
  { href: "#sports", label: "Sports" },
  { href: "#how", label: "How it works" },
  { href: "#community", label: "Community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-background">
      <nav className="mx-auto grid min-h-[72px] max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="font-display text-2xl uppercase leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
        >
          Plays Woo
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-transparent text-xs font-black uppercase transition hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <Link
            href="/auth/signin"
            className="text-xs font-black uppercase transition hover:-translate-y-0.5 hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Sign in
          </Link>
          <ThemeToggle />
          <Link
            href="/auth/signup"
            className="border border-brand-primary bg-brand-primary px-4 py-3 text-xs font-black uppercase text-[var(--accent-contrast)] transition hover:-translate-y-0.5 hover:bg-brand-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            Join Plays Woo -&gt;
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="justify-self-end border border-brand-border bg-background p-2 transition hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-border bg-background px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl uppercase leading-none"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/auth/signup"
                onClick={() => setOpen(false)}
                className="w-fit border border-brand-primary bg-brand-primary px-4 py-3 text-xs font-black uppercase text-[var(--accent-contrast)]"
              >
                Join Plays Woo -&gt;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
