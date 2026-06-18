import SectionHeading from "./SectionHeading";
import { contact, profile } from "@/lib/content";

const methods = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    cta: "Send a mail",
  },
  {
    label: "Discord",
    value: contact.discord,
    href: "https://discord.com",
    cta: "Message me",
  },
  {
    label: "Roblox",
    value: contact.roblox,
    href: contact.robloxUrl,
    cta: "View profile",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading index="05" eyebrow="Contact" title="Let's Build" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="font-display text-3xl uppercase leading-tight tracking-tight sm:text-4xl">
            Got a world that needs building?
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-bone-dim">
            I&apos;m currently <span className="text-bone">{profile.availability.toLowerCase()}</span>.
            Tell me about your game or group and let&apos;s make something players remember.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-red px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-[1.03]"
          >
            Hire Me <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {methods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 bg-ink-card px-6 py-6 transition-colors hover:bg-ink-soft"
            >
              <div>
                <p className="eyebrow text-bone-dim">{m.label}</p>
                <p className="mt-1 text-sm text-bone sm:text-base">{m.value}</p>
              </div>
              <span className="eyebrow flex items-center gap-2 text-red opacity-0 transition-opacity group-hover:opacity-100">
                {m.cta} <span aria-hidden>↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
