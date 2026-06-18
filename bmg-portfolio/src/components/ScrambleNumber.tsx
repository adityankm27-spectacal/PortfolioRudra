"use client";

import { useEffect, useRef, useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

// Scrambles a stat number (slot-machine style) the first time it scrolls into view.
export default function ScrambleNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref}>
      <TextScramble
        as="span"
        className={className}
        trigger={trigger}
        characterSet="0123456789"
        duration={1.1}
        speed={0.04}
      >
        {value}
      </TextScramble>
    </span>
  );
}
