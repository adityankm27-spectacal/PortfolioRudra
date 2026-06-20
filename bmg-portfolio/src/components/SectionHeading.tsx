"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, headingReveal, staggerContainer } from "@/lib/motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="mb-10 flex items-end justify-between gap-4 border-b border-line pb-5"
    >
      <div>
        <motion.p variants={fadeUp} className="eyebrow mb-3 flex items-center gap-2 text-red">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          {eyebrow}
        </motion.p>
        {/* The clip wrapper lets the headline slide up from behind a hard edge.
            Reduced-motion users get a plain opacity fade instead. */}
        <div className="overflow-hidden pb-[0.08em]">
          <motion.h2
            variants={reduce ? fadeUp : headingReveal}
            className="font-display text-3xl uppercase leading-none tracking-tight sm:text-5xl"
          >
            {title}
          </motion.h2>
        </div>
      </div>
      <motion.span
        variants={fadeUp}
        className="font-display text-2xl text-line sm:text-4xl"
      >
        {index}
      </motion.span>
    </motion.div>
  );
}
