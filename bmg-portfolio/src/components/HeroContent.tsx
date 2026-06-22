"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { profile, specialties, heroTags } from "@/lib/content";
import { slugify } from "@/lib/utils";
import CountUp from "@/components/CountUp";
import HireButton from "@/components/HireButton";
import { PixelCanvas } from "@/components/ui/pixel-perfect-hero";
import { RobloxMark } from "@/components/RobloxBrand";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type FeaturedBuild = {
  title: string;
  metric: string;
  image: string;
  hasImage: boolean;
};

export default function HeroContent({
  hasPhoto,
  featured = [],
}: {
  hasPhoto: boolean;
  featured?: FeaturedBuild[];
}) {
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

  // Split featured builds into two columns that flank the figure on large screens.
  const splitAt = Math.ceil(featured.length / 2);
  const leftBuilds = featured.slice(0, splitAt);
  const rightBuilds = featured.slice(splitAt);

  // ── derived scroll styles ──
  const figureStyle = {
    transform: `translateY(${lerp(0, -120, p)}px) scale(${lerp(1, 0.82, p)})`,
    opacity: lerp(1, 0, Math.min(p / 0.85, 1)),
  };
  // Headline recedes: drifts up and shrinks *behind* the figure (same
  // direction as the figure) so it never slides forward across the person.
  const headlineStyle = {
    transform: `translateY(${lerp(0, -90, p)}px) scale(${lerp(1, 0.9, p)})`,
    opacity: lerp(1, 0, Math.min(p / 0.8, 1)),
  };
  const radarStyle = {
    transform: `scale(${lerp(1, 1.6, p)}) rotate(${lerp(0, 90, p)}deg)`,
    opacity: lerp(0.9, 0.1, p),
  };
  const uiFade = Math.min(p / 0.4, 1);
  const uiStyle = { opacity: lerp(1, 0, uiFade), transform: `translateY(${lerp(0, -40, uiFade)}px)` };
  const uiOpacityOnly = { opacity: lerp(1, 0, uiFade) };
  const pixelStyle = { transform: `translateY(${lerp(0, -80, p)}px)` };
  const decorStyle = {
    opacity: lerp(0.55, 0, Math.min(p / 0.55, 1)),
    transform: `translateY(${lerp(0, -50, p)}px)`,
  };

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
        className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-screen items-center justify-center will-change-transform"
      >
        <svg
          viewBox="0 0 600 600"
          className="h-[120vw] max-h-[820px] w-[120vw] max-w-[820px] origin-center animate-[spin_70s_linear_infinite]"
          aria-hidden
        >
          <defs>
            <radialGradient id="redCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-red)" stopOpacity="0.5" />
              <stop offset="55%" stopColor="var(--color-red-deep)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--color-red-deep)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="200" fill="url(#redCore)" />
          {[210, 270, 298].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="var(--color-line)" strokeWidth="1" />
          ))}
          <line x1="2" y1="300" x2="598" y2="300" stroke="var(--color-line)" strokeWidth="1" />
          <line x1="300" y1="2" x2="300" y2="598" stroke="var(--color-line)" strokeWidth="1" />
        </svg>
      </div>

      {/* Roblox logo as the centerpiece (stays upright, doesn't spin) */}
      <div
        style={radarStyle}
        className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-screen items-center justify-center will-change-transform"
      >
        <RobloxCoreLogo className="h-[78vw] max-h-[600px] w-[78vw] max-w-[600px] -translate-y-12 opacity-[0.45] [filter:drop-shadow(0_0_60px_rgba(168,163,154,0.22))_drop-shadow(0_0_140px_rgba(232,38,29,0.10))]" />
      </div>

      {/* Roblox glyphs + technical HUD readouts */}
      <div
        style={decorStyle}
        className="pointer-events-none absolute inset-0 z-0 hidden select-none will-change-transform md:block"
      >
        <RobloxGlyph uid="rg1" className="absolute left-[11%] top-[26%] h-12 w-12 rotate-6 text-bone-dim/25" />
        <RobloxGlyph uid="rg2" className="absolute left-[8%] top-[66%] h-9 w-9 -rotate-12 text-bone-dim/20" />
        <RobloxGlyph uid="rg3" className="absolute right-[11%] top-[26%] h-12 w-12 -rotate-6 text-bone-dim/25" />
        <RobloxGlyph uid="rg4" className="absolute right-[9%] top-[62%] h-14 w-14 rotate-12 text-bone-dim/25" />

        <span className="absolute left-[63%] top-[13%] font-mono text-[0.58rem] uppercase tracking-[0.2em] text-bone-dim/35">
          MESH_COMPLEXITY_INDEX_0.8
        </span>
        <span className="absolute left-[9%] top-[40%] font-mono text-[0.55rem] tracking-[0.15em] text-bone-dim/30">
          (X: 105.4, Y: 22.1, Z: -15.8)
        </span>
        <span className="absolute left-[9%] top-[46%] font-mono text-[0.58rem] uppercase tracking-[0.2em] text-red/40">
          MESH_COMPLEXITY_INDEX_0.8
        </span>
        <span className="absolute right-[9%] top-[40%] font-mono text-[0.55rem] tracking-[0.15em] text-bone-dim/30">
          (X: 105.4, Y: 22.1, Z: -15.6)
        </span>
        <span className="absolute right-[9%] top-[62%] font-mono text-[0.58rem] uppercase tracking-[0.2em] text-red/40">
          MESH_COMPLEXITY_INDEX_0.8
        </span>

        {/* Wireframe cube, bottom right */}
        <svg
          viewBox="0 0 100 100"
          className="absolute bottom-[12%] right-[7%] h-16 w-16 text-bone-dim/25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M30 22 L70 22 L78 32 L78 72 L38 72 L30 62 Z" />
          <path d="M30 22 L38 32 L78 32 M38 32 L38 72" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--color-ink)_92%)]" />

      <div className="relative z-30 mx-auto flex w-full max-w-[2000px] flex-1 flex-col px-5 pb-8 pt-6 sm:px-8 lg:px-12 2xl:px-20">
        {/* Top: tags + availability */}
        <div style={uiStyle} className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red/40 bg-red/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-bone">
              <RobloxMark uid="hero-rbx" className="h-3.5 w-3.5 text-red" />
              Roblox Developer
            </span>
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
          {/* Featured builds flanking the figure (lg+) — z-30 sits above the headline so cards neatly clip any overflowing text */}
          {leftBuilds.length > 0 && (
            <div className="absolute inset-y-0 left-0 z-30 hidden w-[clamp(18rem,26vw,40rem)] flex-col justify-center gap-3 lg:flex">
              {leftBuilds.map((build) => (
                <FeaturedCard key={build.title} build={build} />
              ))}
            </div>
          )}
          {rightBuilds.length > 0 && (
            <div className="absolute inset-y-0 right-0 z-30 hidden w-[clamp(18rem,26vw,40rem)] flex-col justify-center gap-3 lg:flex">
              {rightBuilds.map((build) => (
                <FeaturedCard key={build.title} build={build} />
              ))}
            </div>
          )}

          {/* Giant headline — constrained to center zone on lg+ so it never overlaps the side cards */}
          <h1
            style={headlineStyle}
            className="pointer-events-none absolute inset-y-0 z-10 flex select-none items-center justify-center overflow-hidden px-1 text-center font-display uppercase leading-[0.82] tracking-[-0.045em] text-bone will-change-transform left-0 right-0 lg:left-[clamp(18rem,26vw,40rem)] lg:right-[clamp(18rem,26vw,40rem)]"
          >
            <span className="block w-full whitespace-nowrap text-center text-[1.4rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[clamp(1.5rem,2.4vw,3.4rem)]" style={{ fontFamily: "var(--font-retro)" }}>
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
            className="relative z-20 h-[44vh] max-h-[640px] min-h-[300px] w-full max-w-[clamp(360px,30vw,620px)] will-change-transform"
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

        {/* Featured builds (mobile / tablet — on lg+ these flank the figure).
            Thumb-scrollable snap rail so all four builds get a real, tappable
            card instead of an uneven 3-across grid. */}
        {featured.length > 0 && (
          <div className="relative z-10 mt-6 lg:hidden">
            <div className="mb-3 flex items-center justify-between">
              <p className="eyebrow flex items-center gap-2 text-bone">
                <span className="h-1.5 w-1.5 rounded-full bg-red" /> Featured Builds
              </p>
              <span className="text-[0.58rem] uppercase tracking-[0.2em] text-bone-dim/60">
                Swipe →
              </span>
            </div>
            <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden">
              {featured.map((build) => (
                <a
                  key={build.title}
                  href={`#build-${slugify(build.title)}`}
                  className="group relative block aspect-[4/3] w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-ink-card sm:w-52"
                >
                  {build.hasImage && (
                    <Image
                      src={build.image}
                      alt={build.title}
                      fill
                      sizes="208px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <span className="absolute right-2 top-2 rounded-full border border-line/80 bg-ink/60 px-2 py-0.5 text-[0.58rem] font-medium uppercase tracking-wider text-bone backdrop-blur-sm">
                    {build.metric}
                  </span>
                  <h3 className="absolute inset-x-3 bottom-2.5 truncate font-display text-sm uppercase leading-tight tracking-tight text-bone">
                    {build.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom row — compact "about" lives here (stays readable on scroll) */}
        <div className="mt-6 grid grid-cols-1 items-end gap-6 md:grid-cols-3">
          <div id="about" className="md:col-span-2 scroll-mt-24">
            <p className="eyebrow mb-3 flex items-center gap-2 text-bone">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> About BMG
            </p>
            <div className="space-y-2 text-sm leading-relaxed text-bone-dim">
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {/* Stats — bordered chip rail on phones (scrolls with the thumb),
                plain inline row from sm+ where there's width to breathe. */}
            <div className="mt-5 -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mt-4 sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              {[
                { v: "20.5M", l: "Top build visits" },
                { v: `${profile.yearsExperience}+`, l: `Years since ${profile.since}` },
                { v: "50+", l: "Showcases" },
                { v: "7+", l: "Studios worked with" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="shrink-0 rounded-xl border border-line bg-ink-card/50 px-4 py-3 sm:shrink sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <p className="font-display text-xl leading-none text-bone sm:text-lg">
                    <CountUp value={s.v} />
                  </p>
                  <p className="mt-1.5 whitespace-nowrap text-[0.58rem] uppercase tracking-wider text-bone-dim sm:mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
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

function FeaturedCard({ build }: { build: FeaturedBuild }) {
  return (
    <a
      href={`#build-${slugify(build.title)}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-ink-card shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors hover:border-bone-dim/40"
    >
      {build.hasImage && (
        <Image
          src={build.image}
          alt={build.title}
          fill
          sizes="240px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <span className="absolute right-2 top-2 rounded-full border border-line/80 bg-ink/60 px-2 py-0.5 text-[0.58rem] font-medium uppercase tracking-wider text-bone backdrop-blur-sm">
        {build.metric}
      </span>
      <h3 className="absolute inset-x-2 bottom-2 truncate font-display text-[0.7rem] uppercase leading-tight tracking-tight text-bone sm:text-sm">
        {build.title}
      </h3>
    </a>
  );
}

function RobloxCoreLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="Roblox" role="img">
      <defs>
        <linearGradient id="rbxCoreSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdfdfd" />
          <stop offset="50%" stopColor="#d7d7d9" />
          <stop offset="100%" stopColor="#9b9ba0" />
        </linearGradient>
        <mask id="rbxCoreMask">
          <rect x="16" y="16" width="68" height="68" fill="white" transform="rotate(17 50 50)" />
          <rect x="40" y="40" width="20" height="20" fill="black" transform="rotate(17 50 50)" />
        </mask>
      </defs>
      <rect width="100" height="100" fill="url(#rbxCoreSilver)" mask="url(#rbxCoreMask)" />
    </svg>
  );
}

function RobloxGlyph({ uid, className = "" }: { uid: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <mask id={uid}>
          <rect x="16" y="16" width="68" height="68" rx="7" fill="white" transform="rotate(17 50 50)" />
          <rect x="40" y="40" width="20" height="20" rx="2" fill="black" transform="rotate(17 50 50)" />
        </mask>
      </defs>
      <rect width="100" height="100" fill="currentColor" mask={`url(#${uid})`} />
    </svg>
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
