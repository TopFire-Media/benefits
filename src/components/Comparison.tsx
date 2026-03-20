"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import { ArrowRight, Check, X, Minus } from "lucide-react";

const categories = [
  {
    category: "Performance",
    metric: "Lighthouse Score",
    wordpress: { value: "45-65", bar: 55, verdict: "poor" },
    nextjs: { value: "95-100", bar: 98, verdict: "great" },
  },
  {
    category: "Time to Interactive",
    metric: "First Load",
    wordpress: { value: "3.5-5s", bar: 35, verdict: "poor" },
    nextjs: { value: "0.5-1.2s", bar: 92, verdict: "great" },
  },
  {
    category: "Security",
    metric: "Attack Surface",
    wordpress: { value: "High", bar: 25, verdict: "poor" },
    nextjs: { value: "Minimal", bar: 95, verdict: "great" },
  },
  {
    category: "Dev Speed",
    metric: "With AI Workflow",
    wordpress: { value: "2-3 weeks", bar: 30, verdict: "poor" },
    nextjs: { value: "2-3 days", bar: 90, verdict: "great" },
  },
  {
    category: "Scalability",
    metric: "50+ Franchise Sites",
    wordpress: { value: "50x installs", bar: 20, verdict: "poor" },
    nextjs: { value: "1 template", bar: 95, verdict: "great" },
  },
  {
    category: "Hosting",
    metric: "Monthly Overhead",
    wordpress: { value: "VPS + Maint.", bar: 30, verdict: "poor" },
    nextjs: { value: "Vercel Auto", bar: 92, verdict: "great" },
  },
  {
    category: "SEO",
    metric: "Core Web Vitals",
    wordpress: { value: "Needs Work", bar: 40, verdict: "poor" },
    nextjs: { value: "All Green", bar: 97, verdict: "great" },
  },
  {
    category: "Client Handoff",
    metric: "Content Editing",
    wordpress: { value: "WP Admin", bar: 70, verdict: "ok" },
    nextjs: { value: "Headless CMS", bar: 85, verdict: "great" },
  },
];

function VerdictIcon({ verdict }: { verdict: string }) {
  if (verdict === "great")
    return (
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(16, 185, 129, 0.2)" }}
      >
        <Check size={12} className="text-emerald-400" />
      </div>
    );
  if (verdict === "poor")
    return (
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(239, 68, 68, 0.2)" }}
      >
        <X size={12} className="text-red-400" />
      </div>
    );
  return (
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "rgba(245, 158, 11, 0.2)" }}
    >
      <Minus size={12} className="text-amber-400" />
    </div>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.06)",
            }}
          >
            <ArrowRight size={13} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              Head to Head
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Side-by-Side <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The numbers don&apos;t lie. See how the two stacks compare across
            every metric that matters.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="glass-card overflow-hidden rounded-2xl">
            {/* Header */}
            <div
              className="grid grid-cols-[1.2fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr]"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div className="p-4 md:p-5 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Category
              </div>
              <div className="p-4 md:p-5 text-sm font-semibold text-red-400 uppercase tracking-wider text-center">
                WordPress
              </div>
              <div className="p-4 md:p-5 text-sm font-semibold text-cyan-400 uppercase tracking-wider text-center">
                Next.js
              </div>
            </div>

            {/* Rows */}
            {categories.map((cat, i) => (
              <div
                key={cat.category}
                className="grid grid-cols-[1.2fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] hover:bg-white/[0.02] transition-colors"
                style={{
                  borderBottom:
                    i < categories.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <div className="p-4 md:p-5">
                  <div
                    className="font-semibold text-sm md:text-base text-slate-100"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.category}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {cat.metric}
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <VerdictIcon verdict={cat.wordpress.verdict} />
                    <span className="text-xs md:text-sm text-slate-400">
                      {cat.wordpress.value}
                    </span>
                  </div>
                  <div className="w-full max-w-[120px] progress-bar">
                    <motion.div
                      className="progress-fill progress-fill-old"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.wordpress.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 * i }}
                    />
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <VerdictIcon verdict={cat.nextjs.verdict} />
                    <span className="text-xs md:text-sm text-white font-medium">
                      {cat.nextjs.value}
                    </span>
                  </div>
                  <div className="w-full max-w-[120px] progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.nextjs.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 * i }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Next.js wins in{" "}
            <span className="text-cyan-400 font-semibold">7 out of 8</span>{" "}
            categories. The only area WordPress matches is client
            editing&mdash;and headless CMS solves that.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
