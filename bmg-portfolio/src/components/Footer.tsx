import Link from "next/link";
import { profile, navLinks } from "@/lib/content";
import { RobloxMark, RobloxWordmark } from "@/components/RobloxBrand";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center bg-red font-display text-sm leading-none text-white">
            B
          </span>
          <span className="font-display text-sm tracking-tight">{profile.name}</span>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/terms"
            className="eyebrow text-bone-dim transition-colors hover:text-bone"
          >
            Terms
          </Link>
        </nav>

        <div className="flex flex-col gap-2 sm:items-end">
          <span className="flex items-center gap-2 text-bone-dim">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]">
              Built on
            </span>
            <RobloxMark uid="footer-rbx" className="h-4 w-4 text-red" />
            <RobloxWordmark className="h-3 w-auto text-bone" />
          </span>
          <p className="text-xs text-bone-dim">
            © {new Date().getFullYear()} {profile.name}. Roblox Environment Builder.
          </p>
        </div>
      </div>
    </footer>
  );
}
