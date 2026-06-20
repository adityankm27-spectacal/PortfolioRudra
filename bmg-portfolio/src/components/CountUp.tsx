"use client";

import { useEffect, useRef, useState } from "react";

// Splits a stat string like "9.7M", "55.7K+", "5.0", "12+" into the numeric
// part we animate and the prefix/suffix we keep fixed (e.g. "$", "M", "K", "+").
function parse(value: string) {
  const match = value.match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, rawNumber, suffix] = match;
  const number = parseFloat(rawNumber.replace(/,/g, ""));
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;
  return { prefix, number, suffix, decimals };
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Counts a stat number up from 0 → its value the first time it scrolls into view.
export default function CountUp({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(parsed ? formatFrom(parsed, 0) : value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const animate = () => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setDisplay(formatFrom(parsed, parsed.number * easeOutCubic(t)));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}

function formatFrom(
  parsed: { prefix: string; suffix: string; decimals: number },
  current: number,
) {
  return `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`;
}
