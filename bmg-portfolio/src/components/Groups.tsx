"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Check, Users, ArrowUpRight } from "lucide-react";
import { groups, groupTrust, type Group } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import { cn } from "@/lib/utils";
import { cardRise } from "@/lib/motion";

function StatBlock({ value, label, size = "md" }: { value: string; label: string; size?: "md" | "lg" }) {
  return (
    <div>
      <p className={cn("font-display leading-none text-bone", size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl")}>
        <CountUp value={value} />
      </p>
      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.2em] text-bone-dim">{label}</p>
    </div>
  );
}

function BuiltBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-red/25 bg-red/8 px-3 py-1 text-[0.68rem] font-medium text-bone/90">
      <Check className="h-3 w-3 shrink-0 text-red" />
      {label}
    </span>
  );
}

/* Cinematic case-study card with alternating layout + full-width hero variant */
function CollabCard({ g, index }: { g: Group; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const reversed = index % 2 === 1;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const Media = (
    <div className="relative flex h-44 flex-col items-center justify-center gap-4 overflow-hidden bg-ink/50 p-6 sm:h-52 lg:h-full lg:min-h-[15rem]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red/10 via-transparent to-red/[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[60px]" />

      {/* floating tag + members */}
      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-ink/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-bone backdrop-blur-md">
        {g.tag}
      </span>
      <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-red/30 bg-red/15 px-3 py-1 text-[0.62rem] font-semibold text-bone backdrop-blur-md">
        <Users className="h-3 w-3 text-red" />
        {g.members}
      </span>

      {/* logo */}
      <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line/70 bg-ink shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24">
        <Image
          src={g.logo}
          alt={g.name}
          width={96}
          height={96}
          className="h-[86%] w-[86%] rounded-xl object-contain"
        />
      </div>

      {/* name */}
      <div className="relative min-w-0 text-center">
        <h3 className="font-display text-lg uppercase leading-none tracking-tight text-bone sm:text-xl">{g.name}</h3>
        <p className="mt-1 text-xs text-bone-dim">
          By {g.creator} · <span className="text-red">{g.rank}</span>
        </p>
      </div>
    </div>
  );

  const Content = (
    <div className="relative flex flex-col justify-center p-5 sm:p-7">
      <p className="eyebrow mb-2 text-red">{g.role}</p>
      <p className="max-w-xl text-sm leading-relaxed text-bone-dim sm:text-base">{g.blurb}</p>

      {/* stats */}
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
        {g.stats.map((s) => (
          <StatBlock key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      {/* what I built */}
      <div className="mt-6">
        <p className="eyebrow mb-3 flex items-center gap-2 text-bone">
          <span className="h-1.5 w-1.5 rounded-full bg-red" /> What I Built
        </p>
        <div className="flex flex-wrap gap-2">
          {g.built.map((b) => (
            <BuiltBadge key={b} label={b} />
          ))}
        </div>
      </div>

      {/* tech */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-bone-dim/70">Stack</span>
        {g.tech.map((t) => (
          <span key={t} className="rounded-md border border-line bg-ink px-2.5 py-1 text-[0.65rem] font-medium text-bone-dim">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardRise}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-ink-card/60 backdrop-blur-xl transition-colors duration-300 hover:border-red/45"
    >
      {/* gradient border wash + ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-red/[0.06]" />
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(226,35,26,0.10), transparent 60%)`,
        }}
      />

      <div className={cn("relative grid lg:grid-cols-[0.8fr_1fr]", reversed && "lg:[direction:rtl]")}>
        <div className="lg:[direction:ltr]">{Media}</div>
        <div className="lg:[direction:ltr]">{Content}</div>
      </div>
    </motion.div>
  );
}

function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative mb-10 overflow-hidden rounded-2xl border border-line bg-ink-card/60 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red/[0.06] via-transparent to-red/[0.06]" />
      <div className="relative grid grid-cols-3 divide-line sm:divide-x">
        {groupTrust.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-3 py-6 text-center">
            <p className="font-display text-2xl leading-none text-bone sm:text-4xl">
              <CountUp value={s.value} />
            </p>
            <p className="text-[0.58rem] uppercase tracking-[0.18em] text-bone-dim sm:text-[0.62rem]">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Groups() {
  return (
    <section id="groups" className="relative overflow-hidden border-y border-line bg-ink-soft">
      {/* animated grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 25%, black 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 25%, black 35%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-red/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading index="02" eyebrow="Trusted by Roblox Communities" title="Featured Collaborations" />

        <p className="-mt-4 mb-10 max-w-2xl text-sm leading-relaxed text-bone-dim sm:text-base">
          Communities and studios I&apos;ve contributed to — shipping environments, systems and polish to live
          experiences played by hundreds of thousands of people.
        </p>

        <TrustBar />

        <div className="flex flex-col gap-6">
          {groups.map((g, i) => (
            <CollabCard key={g.name} g={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
