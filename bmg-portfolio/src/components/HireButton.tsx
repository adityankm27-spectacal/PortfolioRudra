"use client";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import type { VariantProps } from "class-variance-authority";
import { liquidbuttonVariants } from "@/components/ui/liquid-glass-button";

type Size = VariantProps<typeof liquidbuttonVariants>["size"];

export default function HireButton({
  size = "lg",
  className = "",
  label = "Hire Me",
}: {
  size?: Size;
  className?: string;
  label?: string;
}) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LiquidButton
      size={size}
      onClick={scrollToContact}
      aria-label={label}
      className={`font-semibold uppercase tracking-wider text-bone ${className}`}
    >
      {label} <span aria-hidden>↗</span>
    </LiquidButton>
  );
}
