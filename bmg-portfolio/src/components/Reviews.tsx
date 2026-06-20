"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import { cardRise } from "@/lib/motion";
import { reviews, reviewStats, type Review } from "@/lib/content";

const initialsOf = (name: string) =>
  name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/[\s_]+/)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5",
            i < rating ? "fill-red text-red" : "text-line"
          )}
        />
      ))}
    </div>
  );
}

function Avatar({ review, size }: { review: Review; size: number }) {
  return (
    <div
      className="relative grid shrink-0 place-items-center rounded-full font-display text-bone shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
      style={{
        height: size,
        width: size,
        fontSize: size * 0.36,
        background: `linear-gradient(140deg, ${review.accent}, ${review.accent}55)`,
        border: `1.5px solid ${review.accent}66`,
      }}
    >
      {initialsOf(review.author)}
      <span
        className="absolute -bottom-0.5 -right-0.5 grid place-items-center rounded-full border-2 border-ink-card bg-ink"
        style={{ height: size * 0.32, width: size * 0.32 }}
      >
        <span className="block rounded-full bg-green-400" style={{ height: size * 0.12, width: size * 0.12 }} />
      </span>
    </div>
  );
}

/* Shared interactive shell: spotlight + lift + border glow */
function InteractiveCard({
  children,
  className,
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-ink-card/70 backdrop-blur-xl transition-colors duration-300 hover:border-red/45",
        className
      )}
    >
      {/* gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-red/[0.05]" />
      {/* ambient red glow base */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          featured && "opacity-60"
        )}
        style={{
          boxShadow: "inset 0 0 60px rgba(226,35,26,0.10)",
        }}
      />
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(226,35,26,0.13), transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

function FeaturedReview({ review }: { review: Review }) {
  return (
    <div className="relative h-full">
      {/* soft red glow behind */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-red/20 blur-3xl opacity-50" />
      <InteractiveCard featured className="h-full">
        {/* giant decorative quote mark */}
        <Quote className="pointer-events-none absolute -right-4 -top-6 h-44 w-44 rotate-180 text-red/[0.07]" strokeWidth={1} />

        <div className="flex h-full flex-col p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red/30 bg-red/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-red">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> Featured Review
            </span>
            <Stars rating={review.rating} size="lg" />
          </div>

          <blockquote className="font-display text-2xl leading-[1.25] tracking-tight text-bone sm:text-[1.9rem] sm:leading-[1.22]">
            &ldquo;{review.quote}&rdquo;
          </blockquote>

          <div className="mt-auto flex items-center gap-4 pt-8">
            <Avatar review={review} size={60} />
            <div className="min-w-0">
              <p className="font-display text-lg uppercase tracking-tight text-bone">{review.author}</p>
              <p className="text-sm text-bone-dim">
                {review.role} · <span className="text-bone/70">{review.project}</span>
              </p>
            </div>
          </div>
        </div>
      </InteractiveCard>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <InteractiveCard className="h-full">
      <Quote className="pointer-events-none absolute -right-3 -top-4 h-24 w-24 rotate-180 text-red/[0.06]" strokeWidth={1} />
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <Avatar review={review} size={44} />
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold leading-tight text-bone">{review.author}</p>
            <p className="truncate text-xs text-bone-dim">{review.role}</p>
          </div>
        </div>

        <Stars rating={review.rating} />

        <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-dim">
          &ldquo;{review.quote}&rdquo;
        </p>

        <div className="mt-5 border-t border-line/60 pt-3">
          <span className="eyebrow text-[0.6rem] text-bone-dim/70">Project</span>
          <p className="text-sm font-medium text-bone">{review.project}</p>
        </div>
      </div>
    </InteractiveCard>
  );
}

function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative mb-8 overflow-hidden rounded-2xl border border-line bg-ink-card/60 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red/[0.06] via-transparent to-red/[0.06]" />
      <div className="relative grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
        {reviewStats.map((s, i) => (
          <div key={s.label} className={cn("flex flex-col items-center gap-1 px-4 py-6 text-center", i < 2 && "border-b border-line sm:border-b-0")}>
            {s.value === "5.0" && <Stars rating={5} />}
            <p className="font-display text-2xl leading-none text-bone sm:text-3xl">
              <CountUp value={s.value} />
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.16em] text-bone-dim">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const featured = reviews.find((r) => r.featured) ?? reviews[0];
  const rest = reviews.filter((r) => r !== featured);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="relative overflow-hidden border-y border-line bg-ink-soft">
      {/* animated grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 78%)",
        }}
      />
      {/* ambient red light bloom */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-red/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading index="04" eyebrow="Reviews · Trusted by Creators" title="What People Say" />

        <TrustBar />

        <div ref={containerRef} className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Featured spans 2 cols on lg, full row on top */}
          <motion.div
            custom={0}
            variants={cardRise}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2 lg:row-span-2 lg:h-full"
          >
            <FeaturedReview review={featured} />
          </motion.div>

          {rest.map((r, i) => (
            <motion.div
              key={r.author}
              custom={i + 1}
              variants={cardRise}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
