"use client";

import { useRef, useState, useEffect } from "react";
import { groups } from "@/lib/content";
import SectionHeading from "./SectionHeading";

// Parse "55.7K+" → { value: 55.7, suffix: "K+" } etc.
function parseMember(raw: string): { value: number; suffix: string } {
  const m = raw.match(/^([\d.]+)([KMB]?\+?)$/i);
  if (!m) return { value: 0, suffix: raw };
  return { value: parseFloat(m[1]), suffix: m[2] };
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function GroupCard({ g, index }: { g: (typeof groups)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const { value: targetNum, suffix } = parseMember(g.members);
  const animated = useCountUp(targetNum, visible, 1300);
  const displayNum =
    animated >= 10
      ? Math.floor(animated).toFixed(0)
      : animated.toFixed(1).replace(/\.0$/, "");

  // Scroll-triggered entrance
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Global mouse position for spotlight + 3D tilt
  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const tilt = (() => {
    if (!cardRef.current || !hovered) return { x: 0, y: 0 };
    const r = cardRef.current.getBoundingClientRect();
    return {
      x: -(((mouse.y - r.top) / r.height) * 2 - 1) * 6,
      y: (((mouse.x - r.left) / r.width) * 2 - 1) * 6,
    };
  })();

  const localX = cardRef.current ? mouse.x - cardRef.current.getBoundingClientRect().left : 0;
  const localY = cardRef.current ? mouse.y - cardRef.current.getBoundingClientRect().top : 0;

  return (
    <div
      ref={cardRef}
      style={{
        perspective: "1200px",
        transitionDelay: `${index * 55}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-card will-change-transform"
        style={{
          transform: hovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.018,1.018,1.018)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
          transformStyle: "preserve-3d",
          transition: "transform 0.28s ease, border-color 0.3s ease",
          borderColor: hovered ? "rgba(226,35,26,0.45)" : undefined,
        }}
      >
        {/* Spotlight follow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${localX}px ${localY}px, rgba(226,35,26,0.11) 0%, transparent 62%)`,
          }}
        />

        {/* Top band — logo + index */}
        <div className="relative flex items-start gap-4 p-5 pb-4">
          {/* Logo */}
          <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-line/70 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
            <img
              src={g.logo}
              alt={g.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* Name + creator */}
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="eyebrow text-red mb-1.5">{g.tag}</p>
            <h3 className="font-display text-xl uppercase leading-none tracking-tight text-bone">
              {g.name}
            </h3>
            <p className="mt-1.5 text-xs text-bone-dim">
              By <span className="text-bone/70">{g.creator}</span>
            </p>
          </div>

          {/* Index */}
          <span className="shrink-0 font-display text-[0.65rem] text-line/80 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Divider */}
        <div className="mx-5 border-t border-line/50" />

        {/* Stats row */}
        <div className="flex items-center gap-0 px-5 py-4">
          {/* Members stat */}
          <div className="flex-1">
            <p className="font-display text-2xl leading-none text-bone">
              {displayNum}{suffix}
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-bone-dim">
              Members
            </p>
          </div>

          {/* Vertical rule */}
          <div className="h-8 w-px bg-line/60 mx-4" />

          {/* Rank badge */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red/25 bg-red/8 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-red/80">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red/60" />
              {g.rank}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Groups() {
  return (
    <section id="groups" className="border-y border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading index="02" eyebrow="Groups I've Worked With" title="Collaborations" />

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <GroupCard key={g.name} g={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
