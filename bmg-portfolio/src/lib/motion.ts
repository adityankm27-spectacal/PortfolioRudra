import type { Variants } from "framer-motion";

// Shared easing — a soft "settle" curve used across every reveal so motion
// feels like one hand authored it. (cubic-bezier, ease-out-quint-ish)
export const ease = [0.22, 1, 0.36, 1] as const;

// Container that releases its children one after another.
// Pair with `fadeUp` / `cardRise` children (no per-child `custom` needed).
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Generic text fade-up — for eyebrows, body copy, small labels.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

// Cards "arrive": they rise and gently scale up to settle, rather than
// just blinking in. The scale is subtle (0.97 → 1) so it reads as weight,
// not a zoom. Transforms are auto-disabled under prefers-reduced-motion
// via the app-level <MotionConfig reducedMotion="user">.
export const cardRise: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.07, ease },
  }),
};

// Headline reveal — the text slides up from behind a clipped edge.
// Requires an `overflow-hidden` wrapper around the animated element.
// Under reduced motion, swap this for `fadeUp` at the call site.
export const headingReveal: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.7, ease } },
};
