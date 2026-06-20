"use client";

// Sliding-cursor nav, adapted from components/ui/nav-header.tsx — themed dark
// and wired to the site's real sections with smooth-scroll anchors.

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/content";

type Position = { left: number; width: number; opacity: number };

export default function HeroNav() {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex w-fit rounded-full border border-line bg-ink/50 p-1 backdrop-blur-sm"
    >
      {navLinks.map((link) => (
        <Tab key={link.href} href={link.href} setPosition={setPosition}>
          {link.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

function Tab({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: (p: Position) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block"
    >
      <a
        href={href}
        className="block cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bone"
      >
        {children}
      </a>
    </li>
  );
}

function Cursor({ position }: { position: Position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-white/15 border border-white/20"
    />
  );
}
