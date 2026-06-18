import { profile, navLinks } from "@/lib/content";

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
        </nav>

        <p className="text-xs text-bone-dim">
          © {new Date().getFullYear()} {profile.name}. Built in Roblox Studio &amp; beyond.
        </p>
      </div>
    </footer>
  );
}
