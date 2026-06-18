"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { profile, specialties, heroTags } from "@/lib/content";
import HireButton from "@/components/HireButton";
import { PixelCanvas } from "@/components/ui/pixel-perfect-hero";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function HeroContent({ hasPhoto }: { hasPhoto: boolean }) {
  // 0 → 1 scroll progress across the first viewport
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const end = window.innerHeight * 0.9;
        setP(Math.min(Math.max(window.scrollY / end, 0), 1));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ── derived scroll styles ──
  const figureStyle = {
    transform: `translateY(${lerp(0, -120, p)}px) scale(${lerp(1, 0.82, p)})`,
    opacity: lerp(1, 0, Math.min(p / 0.85, 1)),
  };
  const headlineStyle = {
    transform: `translateY(${lerp(0, 140, p)}px) scale(${lerp(1, 1.12, p)})`,
    opacity: lerp(1, 0.15, Math.min(p / 0.9, 1)),
  };
  const radarStyle = {
    transform: `scale(${lerp(1, 1.6, p)}) rotate(${lerp(0, 90, p)}deg)`,
    opacity: lerp(0.9, 0.1, p),
  };
  const uiFade = Math.min(p / 0.4, 1);
  const uiStyle = { opacity: lerp(1, 0, uiFade), transform: `translateY(${lerp(0, -40, uiFade)}px)` };
  const uiOpacityOnly = { opacity: lerp(1, 0, uiFade) };
  const pixelStyle = { transform: `translateY(${lerp(0, -80, p)}px)` };

  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-screen flex-col overflow-hidden pt-16"
    >
      {/* Ambient animated pixel field */}
      <div
        style={pixelStyle}
        className="pointer-events-none absolute inset-0 z-0 opacity-55 will-change-transform"
      >
        <PixelCanvas
          colors={["#2a2a2e", "#33333a", "#a8a39a", "#2a2a2e", "#e8261d"]}
          gap={7}
          speed={25}
        />
      </div>

      {/* Radar / target backdrop */}
      <div
        style={radarStyle}
        className="pointer-events-none absolute inset-0 z-0 flex -translate-y-6 items-center justify-center will-change-transform"
      >
        <svg
          viewBox="0 0 600 600"
          className="h-[120vw] max-h-[820px] w-[120vw] max-w-[820px] origin-center animate-[spin_70s_linear_infinite]"
          aria-hidden
        >
          <defs>
            <radialGradient id="redCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-red)" stopOpacity="0.95" />
              <stop offset="70%" stopColor="var(--color-red-deep)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--color-red-deep)" stopOpacity="0.6" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="150" fill="url(#redCore)" />
          {[210, 270, 298].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="var(--color-line)" strokeWidth="1" />
          ))}
          <line x1="2" y1="300" x2="598" y2="300" stroke="var(--color-line)" strokeWidth="1" />
          <line x1="300" y1="2" x2="300" y2="598" stroke="var(--color-line)" strokeWidth="1" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--color-ink)_92%)]" />

      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-8 pt-6 sm:px-8">
        {/* Top: tags + availability */}
        <div style={uiStyle} className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-bone-dim"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="eyebrow text-bone">{profile.availability}</span>
            </div>
            <p className="mt-1 text-[0.68rem] uppercase tracking-wider text-bone-dim">
              Est. {profile.since} · {profile.yearsExperience}+ yrs
            </p>
          </div>
        </div>

        {/* Specialty row */}
        <div
          style={uiOpacityOnly}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-between"
        >
          {specialties.map((s, i) => (
            <span key={s} className="flex items-center">
              {i > 0 && <span className="mr-3 hidden text-bone-dim/40 sm:inline">·</span>}
              <span className="eyebrow text-bone-dim">{s}</span>
            </span>
          ))}
        </div>

        {/* Center stage */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Giant headline */}
          <h1
            style={headlineStyle}
            className="pointer-events-none absolute inset-0 z-10 flex select-none items-center justify-center px-2 text-center font-display uppercase leading-[0.82] tracking-[-0.045em] text-bone will-change-transform"
          >
            <span className="whitespace-nowrap text-[1.6rem] sm:text-[2.7rem] md:text-[3.7rem] lg:text-[4.9rem] xl:text-[6.1rem]">
              BUILDERMANGUY<span className="text-red">31</span>
            </span>
          </h1>

          {/* Rotated edge label */}
          <span
            style={uiOpacityOnly}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[0.7rem] uppercase tracking-[0.4em] text-bone-dim lg:block"
          >
            [ Roblox&nbsp;Builder ]
          </span>

          {/* The figure */}
          <div
            style={figureStyle}
            className="relative z-20 h-[52vh] max-h-[600px] min-h-[340px] w-full max-w-[480px] will-change-transform"
          >
            {hasPhoto ? (
              <Image
                src={profile.photo}
                alt={`${profile.name} — ${profile.role}`}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <PhotoPlaceholder />
            )}
          </div>
        </div>

        {/* Ground tick band */}
        <div className="tick-band relative z-10 h-6 w-full opacity-70" />

        {/* Bottom row */}
        <div style={uiOpacityOnly} className="mt-6 grid grid-cols-1 items-end gap-6 md:grid-cols-3">
          <div className="max-w-xs">
            <p className="eyebrow mb-2 flex items-center gap-2 text-bone">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> About BMG
            </p>
            <p className="text-sm leading-relaxed text-bone-dim">{profile.intro}</p>
          </div>

          <div className="flex justify-start md:justify-center">
            <HireButton size="xl" />
          </div>

          <div className="flex justify-start md:justify-end">
            <Badge />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={uiOpacityOnly}
        className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex flex-col items-center gap-1"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-bone-dim">Scroll</span>
        <span className="h-6 w-px animate-pulse bg-bone-dim/50" />
      </div>
    </section>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="flex h-full w-full items-end justify-center">
      <div className="flex h-[90%] w-[62%] max-w-[300px] flex-col items-center justify-end gap-4 rounded-t-[140px] border border-dashed border-line bg-gradient-to-b from-ink-card/40 to-ink">
        <svg viewBox="0 0 200 260" className="h-[78%] w-auto text-line" aria-hidden>
          <circle cx="100" cy="62" r="42" fill="currentColor" />
          <path d="M20 260c0-52 36-92 80-92s80 40 80 92Z" fill="currentColor" />
        </svg>
      </div>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-ink/80 px-3 py-1 text-[0.62rem] uppercase tracking-wider text-bone-dim backdrop-blur-sm">
        Add photo → public/images/profile.png
      </span>
    </div>
  );
}

function Badge() {
  return (
    <div className="relative grid h-20 w-20 place-items-center rounded-full border border-line bg-ink-card">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="badgeCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-bone-dim" style={{ fontSize: "9px", letterSpacing: "1.5px" }}>
          <textPath href="#badgeCircle" startOffset="0%">
            ROBLOX BUILDER · SINCE 2020 ·
          </textPath>
        </text>
      </svg>
      <span className="font-display text-base text-red">BMG</span>
    </div>
  );
}
