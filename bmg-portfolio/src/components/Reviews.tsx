"use client"

import React, { useRef, useState, useEffect } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import SectionHeading from "./SectionHeading"
import { reviews } from "@/lib/content"

interface ReviewCardProps {
  author: string
  role: string
  quote: string
  rating?: number
  className?: string
}

function ReviewCard({ author, role, quote, rating = 5, className }: ReviewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const rotation = (() => {
    if (!cardRef.current || !isHovered) return { x: 0, y: 0 }
    const rect = cardRef.current.getBoundingClientRect()
    return {
      x: -(((mousePos.y - rect.top) / rect.height) * 2 - 1) * 8,
      y: (((mousePos.x - rect.left) / rect.width) * 2 - 1) * 8,
    }
  })()

  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  const localX = cardRef.current
    ? mousePos.x - cardRef.current.getBoundingClientRect().left
    : 0
  const localY = cardRef.current
    ? mousePos.y - cardRef.current.getBoundingClientRect().top
    : 0

  return (
    <div
      ref={cardRef}
      className={cn("relative", className)}
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative flex flex-col rounded-2xl overflow-hidden h-full border border-line bg-ink-card p-6 transition-all duration-300"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02,1.02,1.02)`
            : "rotateX(0) rotateY(0) scale3d(1,1,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* subtle red tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red/5 via-transparent to-red/5 opacity-50 pointer-events-none" />

        {/* spotlight follow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: isHovered
              ? `radial-gradient(circle at ${localX}px ${localY}px, rgba(232,38,29,0.12) 0%, transparent 60%)`
              : "",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* author row */}
          <div className="flex items-start gap-3 mb-4">
            <Avatar className="h-11 w-11 border-2 border-red/30 shrink-0">
              <AvatarFallback className="bg-red-deep/40 text-red text-xs font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-bone leading-tight truncate">{author}</p>
              <p className="text-xs text-bone-dim truncate">{role}</p>
            </div>
          </div>

          {/* stars */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3.5 h-3.5",
                  i < rating ? "fill-red text-red" : "text-line"
                )}
              />
            ))}
          </div>

          {/* quote */}
          <p className="text-sm text-bone-dim leading-relaxed flex-1">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const repeat = (arr: typeof reviews) => {
    const out = [...arr]
    while (out.length < 6) out.push(...arr)
    return out
  }

  const items = repeat(reviews)

  return (
    <section id="reviews" className="border-y border-line bg-ink-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading index="04" eyebrow="Reviews" title="What People Say" />
      </div>

      <div className="relative pb-24">
        <div className="group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]">
          <div className="flex shrink-0 [gap:var(--gap)] animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...items, ...items].map((r, i) => (
              <ReviewCard key={`r-${i}`} author={r.author} role={r.role} quote={r.quote} className="w-[300px] sm:w-[340px]" />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      </div>
    </section>
  )
}
