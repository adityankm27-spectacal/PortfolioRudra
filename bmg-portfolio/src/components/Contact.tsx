"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, Gamepad2, Copy, Check, ArrowUpRight, Zap, Clock, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";
import { contact, profile } from "@/lib/content";
import { RobloxMark } from "@/components/RobloxBrand";

type Method = {
  key: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  copy: string;
};

const methods: Method[] = [
  {
    key: "email",
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    copy: contact.email,
  },
  {
    key: "discord",
    icon: <MessageCircle className="h-5 w-5" />,
    label: "Discord",
    value: contact.discord,
    href: "https://discord.com",
    copy: contact.discord,
  },
  {
    key: "roblox",
    icon: <Gamepad2 className="h-5 w-5" />,
    label: "Roblox",
    value: contact.roblox,
    href: contact.robloxUrl,
    copy: contact.roblox,
  },
];

const trustBadges = [
  { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Available for Hire" },
  { icon: <Zap className="h-3.5 w-3.5" />, label: "Fast Response Time" },
  { icon: <Gamepad2 className="h-3.5 w-3.5" />, label: "Roblox Development" },
  { icon: <InfinityIcon className="h-3.5 w-3.5" />, label: "Long-Term Projects" },
];

const commissions = ["Game Building", "Environment Design", "World Creation", "Roblox Development"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ContactPanel({ method, index }: { method: Method; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(method.copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const isExternal = method.href.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={method.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      custom={index}
      variants={fadeUp}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-ink-card/60 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-red/45"
    >
      {/* gradient border wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-red/[0.06]" />
      {/* mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(226,35,26,0.14), transparent 60%)`,
        }}
      />

      {/* icon tile */}
      <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-ink text-bone transition-colors duration-300 group-hover:border-red/40 group-hover:text-red">
        {method.icon}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "0 0 22px rgba(226,35,26,0.25)" }} />
      </div>

      {/* label + value */}
      <div className="relative min-w-0 flex-1">
        <p className="eyebrow text-[0.6rem] text-bone-dim">{method.label}</p>
        <p className="mt-0.5 truncate text-sm text-bone sm:text-base">{method.value}</p>
      </div>

      {/* copy button */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${method.label}`}
        className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-ink/60 text-bone-dim transition-colors hover:border-red/40 hover:text-red"
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </button>

      <ArrowUpRight className="relative h-4 w-4 shrink-0 text-bone-dim opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red group-hover:opacity-100" />
    </motion.a>
  );
}

/* Magnetic wrapper — element drifts toward the cursor */
function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [d, setD] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setD({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setD({ x: 0, y: 0 })}
      animate={{ x: d.x, y: d.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });
  const [glow, setGlow] = useState({ x: 50, y: 30 });

  const onSectionMove = (e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setGlow({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={onSectionMove}
      className="relative overflow-hidden border-t border-line bg-ink"
    >
      {/* animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* mouse-follow ambient bloom */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{ background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(226,35,26,0.10), transparent 60%)` }}
      />

      {/* large blurred red glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-red/12 blur-[140px]" />

      {/* floating particles */}
      {[...Array(7)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-red/50"
          style={{ left: `${12 + i * 12}%`, top: `${20 + ((i * 37) % 60)}%` }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* noise */}
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-32">
        {/* eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="eyebrow mb-6 flex items-center gap-2 text-red"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red" /> Contact · The Final Frame
        </motion.p>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-10">
          {/* LEFT */}
          <div className="min-w-0">
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="font-display text-[2rem] uppercase leading-[0.95] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            >
              Ready to build the{" "}
              <span className="relative inline-block text-red">
                next hit
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-red to-transparent" />
              </span>{" "}
              Roblox experience?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-6 max-w-lg text-base leading-relaxed text-bone-dim"
            >
              I&apos;m currently <span className="text-bone">{profile.availability.toLowerCase()}</span>. Tell me about
              your game or group, and let&apos;s craft a world players will remember long after they log off.
            </motion.p>

            {/* trust badges */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-card/60 px-3.5 py-1.5 text-xs font-medium text-bone-dim backdrop-blur-md transition-colors hover:border-red/40 hover:text-bone"
                >
                  <span className="text-red">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href={`mailto:${contact.email}`}
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_10px_40px_-8px_rgba(226,35,26,0.6)] transition-transform"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  Hire Me <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-ink-card/50 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone backdrop-blur-md transition-colors hover:border-red/45 hover:text-red"
                >
                  <MessageCircle className="h-4 w-4" /> <span className="whitespace-nowrap">Message on Discord</span>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative min-w-0"
          >
            {/* gradient-bordered glass shell */}
            <div className="relative rounded-3xl border border-line bg-ink-soft/40 p-2 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-red/10 via-transparent to-red/5" />

              <div className="relative space-y-2.5 p-3">
                <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }} className="space-y-2.5">
                  {methods.map((m, i) => (
                    <ContactPanel key={m.key} method={m} index={i} />
                  ))}
                </motion.div>

                {/* commissions block */}
                <div className="mt-4 rounded-2xl border border-line/70 bg-ink-card/40 p-5">
                  <p className="eyebrow mb-3 flex items-center gap-2 text-bone">
                    <span className="h-1.5 w-1.5 rounded-full bg-red" /> Currently accepting commissions
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {commissions.map((c) => (
                      <span key={c} className="flex items-center gap-2 text-sm text-bone-dim">
                        <Check className="h-3.5 w-3.5 shrink-0 text-red" /> {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* live availability strip */}
                <div className="mt-3 flex items-center justify-between rounded-2xl border border-line/70 bg-ink-card/40 px-5 py-3.5">
                  <span className="flex items-center gap-2 text-sm text-bone">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    {profile.availability}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-bone-dim">
                    <Clock className="h-3.5 w-3.5" /> Replies within hours
                  </span>
                </div>
              </div>
            </div>

            {/* Roblox watermark */}
            <RobloxMark uid="contact-rbx" className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 text-line/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
