"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile, skills, stats } from "@/lib/content";

/* ── animated counter ── */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const suffix = value.replace(/[\d.]/g, "");
    const num = parseFloat(value);
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const current = num * ease;
      setDisplay(
        (current >= 1000 ? (current / 1000).toFixed(1) + "K" : current % 1 !== 0 ? current.toFixed(1) : Math.floor(current).toString()) + suffix
      );
      if (p < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

/* ── spotlight skill card ── */
function SkillCard({ title, description, index }: { title: string; description: string; index: number }) {
  const cardRef = useRef<HTMLLIElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  const onMove = (e: MouseEvent<HTMLLIElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <motion.li
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-ink-card p-6 cursor-default"
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(232,38,29,0.10), transparent 70%)`,
        }}
      />
      {/* red top border on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <h3 className="text-sm font-semibold uppercase tracking-wide text-bone">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-bone-dim">{description}</p>
    </motion.li>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading index="01" eyebrow="About Me" title="Who I Am" />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        {/* ── left col ── */}
        <div className="flex flex-col gap-5">
          {/* bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-ink-card p-8"
          >
            <p className="font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl text-bone">
              {profile.tagline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-bone-dim">
              I&apos;m {profile.name}, an {profile.age}-year-old Roblox builder who&apos;s been
              crafting worlds since {profile.since}. Over {profile.yearsExperience}+ years I&apos;ve
              specialized in turning rough ideas into immersive, performant environments — labs,
              forests, waterfalls, and everything in between. {profile.intro}
            </p>
          </motion.div>

          {/* stat grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-line bg-ink-card p-5"
              >
                <p className="font-display text-3xl text-bone">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 text-xs leading-snug text-bone-dim">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* availability pill */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 rounded-2xl border border-line bg-ink-card px-6 py-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red" />
            </span>
            <span className="text-sm text-bone">{profile.availability}</span>
            <span className="ml-auto text-xs text-bone-dim">{profile.location}</span>
          </motion.div>
        </div>

        {/* ── right col — skill cards ── */}
        <div>
          <p className="eyebrow mb-5 text-bone-dim">What I Do</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <SkillCard key={skill.title} title={skill.title} description={skill.description} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
