"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { WorkCategory } from "@/lib/content";
import { GlowCard } from "@/components/ui/spotlight-card";
import { slugify } from "@/lib/utils";
import { cardRise } from "@/lib/motion";

export type WorkItem = {
  title: string;
  category: string;
  group: WorkCategory;
  description: string;
  image: string;
  hasImage: boolean;
  gradient: string;
};

export default function WorkGrid({
  items,
  categories,
}: {
  items: WorkItem[];
  categories: readonly WorkCategory[];
}) {
  const PER_PAGE = 6;
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState<WorkCategory>(categories[0]);
  const [page, setPage] = useState(1);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // Deep-link support: a `#build-<slug>` hash (e.g. from the hero's featured cards)
  // jumps straight to that build — switching to its category + page, then scrolling
  // to and briefly highlighting the card.
  useEffect(() => {
    const goToHash = () => {
      const match = window.location.hash.match(/^#build-(.+)$/);
      if (!match) return;
      const slug = match[1];
      const target = items.find((i) => slugify(i.title) === slug);
      if (!target) return;

      setActive(target.group);
      const indexInGroup = items
        .filter((i) => i.group === target.group)
        .findIndex((i) => i.title === target.title);
      setPage(Math.floor(indexInGroup / PER_PAGE) + 1);
      setHighlighted(target.title);

      // Wait for the category/page state to render the card, then scroll to it.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document
            .getElementById(`build-${slug}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });

      const t = setTimeout(() => setHighlighted(null), 2400);
      return () => clearTimeout(t);
    };

    goToHash();
    window.addEventListener("hashchange", goToHash);
    return () => window.removeEventListener("hashchange", goToHash);
  }, [items]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of categories) c[cat] = items.filter((i) => i.group === cat).length;
    return c;
  }, [items, categories]);

  const filtered = items.filter((i) => i.group === active);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const selectCategory = (cat: WorkCategory) => {
    setActive(cat);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => selectCategory(cat)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                isActive
                  ? "border-red bg-red text-white"
                  : "border-line text-bone-dim hover:border-bone/40 hover:text-bone"
              }`}
            >
              {cat}
              <span
                className={`text-[0.62rem] ${isActive ? "text-white/70" : "text-bone-dim/60"}`}
              >
                {counts[cat]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered cards */}
      {filtered.length > 0 ? (
        <>
        <div ref={gridRef} className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {paged.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardRise}
              initial="hidden"
              animate={gridInView ? "show" : "hidden"}
            >
            <GlowCard
              id={`build-${slugify(project.title)}`}
              customSize
              glowColor="red"
              className={`group !rounded-2xl scroll-mt-28 transition-shadow duration-500 ${
                highlighted === project.title
                  ? "ring-2 ring-red ring-offset-2 ring-offset-ink"
                  : ""
              }`}
            >
              {/* Thumbnail (1fr row) */}
              <div
                className={`grain relative flex aspect-video items-end overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient}`}
              >
                {project.hasImage && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full border border-line/80 bg-ink/60 px-2.5 py-1 text-[0.62rem] uppercase tracking-wider text-bone backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Text (auto row) */}
              <div className="px-1 pb-1">
                <h3 className="font-display text-xl uppercase leading-tight tracking-tight text-bone">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim">{project.description}</p>
              </div>
            </GlowCard>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-bone-dim transition-colors hover:border-bone/40 hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goToPage(p)}
                aria-current={p === page}
                className={`h-9 min-w-9 rounded-full border px-3 text-xs font-semibold transition-colors ${
                  p === page
                    ? "border-red bg-red text-white"
                    : "border-line text-bone-dim hover:border-bone/40 hover:text-bone"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-bone-dim transition-colors hover:border-bone/40 hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
            >
              ›
            </button>
          </div>
        )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-ink-card/40 px-6 py-20 text-center">
          <p className="font-display text-2xl uppercase tracking-tight text-bone-dim">
            {active} — coming soon
          </p>
          <p className="mt-2 max-w-md text-sm text-bone-dim/70">
            New {active.toLowerCase()} are on the way. Add them in{" "}
            <code className="text-bone-dim">src/lib/content.ts</code> with{" "}
            <code className="text-bone-dim">group: &quot;{active}&quot;</code>.
          </p>
        </div>
      )}
    </div>
  );
}
