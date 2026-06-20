"use client";

import { MotionConfig } from "framer-motion";

// Honors the OS "reduce motion" setting site-wide: framer-motion drops all
// transform/layout animations for those users while keeping opacity fades,
// so the site stays calm and accessible without per-component branching.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
