import type { Metadata } from "next";
import Link from "next/link";
import { profile, contact, termsOfService } from "@/lib/content";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Terms of Service — ${profile.name}`,
  description: `Terms of Service for ${profile.name}'s portfolio and Roblox creation services.`,
};

export default function TermsPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Link
          href="/"
          className="eyebrow inline-flex items-center gap-1.5 text-bone-dim transition-colors hover:text-bone"
        >
          ← Back to portfolio
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <p className="eyebrow flex items-center gap-2 text-bone">
            <span className="h-1.5 w-1.5 rounded-full bg-red" /> Legal
          </p>
          <h1 className="mt-3 font-display text-4xl uppercase leading-none tracking-tight text-bone sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-bone-dim">
            Last updated: {termsOfService.lastUpdated}
          </p>
        </header>

        <section className="mt-10 space-y-12">
          {termsOfService.sections.map((section, i) => (
            <div key={section.heading} className="space-y-5">
              <h2 className="font-display text-xl uppercase tracking-tight text-bone">
                {i + 1}. {section.heading}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item) =>
                  item.label === "OR" ? (
                    <li
                      key="or"
                      className="flex items-center gap-3 py-1 text-bone-dim"
                    >
                      <span className="h-px flex-1 bg-line" />
                      <span className="eyebrow text-red">OR</span>
                      <span className="h-px flex-1 bg-line" />
                    </li>
                  ) : (
                    <li key={item.label} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 font-display text-bone">{item.label})</span>
                      <span className="text-bone-dim">{item.text}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <p className="rounded-xl border border-line bg-ink-card/40 px-5 py-5 text-sm font-semibold uppercase leading-relaxed tracking-wide text-bone">
            {termsOfService.closing}
          </p>

          <div className="space-y-3 border-t border-line pt-8">
            <p className="text-sm leading-relaxed text-bone-dim">
              Questions about these Terms? Reach out at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-bone underline decoration-line underline-offset-4 transition-colors hover:text-red"
              >
                {contact.email}
              </a>{" "}
              or on Discord{" "}
              <span className="text-bone">{contact.discord}</span>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
