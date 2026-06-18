"use client";

import { groups } from "@/lib/content";
import { Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Groups() {
  return (
    <section id="groups" className="border-y border-line bg-ink-soft">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <SectionHeading index="02" eyebrow="Groups I've Worked With" title="Collaborations" />

        <div className="flex flex-col gap-5">
          {groups.map((g) => (
            <div
              key={g.name}
              className="flex items-center gap-6 rounded-2xl border border-line bg-ink-card px-7 py-7 transition-colors hover:border-red/40"
            >
              <img
                src={g.logo}
                alt={g.name}
                className="h-28 w-28 shrink-0 rounded-2xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-bone leading-tight truncate">{g.name}</h3>
                <p className="mt-1 text-base text-bone-dim">By {g.creator}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-line bg-ink px-4 py-1 text-sm text-bone-dim">
                    <Users className="h-3.5 w-3.5" />
                    {g.members} Members
                  </span>
                  <span className="rounded-full border border-line bg-ink px-4 py-1 text-sm text-bone-dim">
                    {g.rank}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
