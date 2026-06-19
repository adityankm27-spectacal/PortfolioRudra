"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/content";
import HireButton from "@/components/HireButton";
import HeroNav from "@/components/HeroNav";
import { RobloxMark } from "@/components/RobloxBrand";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8">
        {/* Logo */}
        <div className="flex flex-1 items-center gap-3">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid h-7 w-7 place-items-center bg-red text-white font-display text-sm leading-none">
              B
            </span>
            <span className="hidden sm:inline font-display text-sm tracking-tight">
              {profile.name}
            </span>
          </a>
          <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 lg:inline-flex">
            <RobloxMark uid="nav-rbx" className="h-3.5 w-3.5 text-red" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-bone-dim">
              Roblox Developer
            </span>
          </span>
        </div>

        {/* Center links (desktop) — sliding-cursor nav */}
        <div className="hidden flex-1 justify-center md:flex">
          <HeroNav />
        </div>

        {/* Right cluster */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <HireButton size="sm" className="hidden sm:inline-flex" />

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink-card md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-bone transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-bone transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-bone transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3 text-sm font-medium uppercase tracking-wider text-bone-dim hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-red px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Hire Me ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
