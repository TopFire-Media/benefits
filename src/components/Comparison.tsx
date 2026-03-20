"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
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
    wordpress: { value: "VPS + Maintenance", bar: 30, verdict: "poor" },
    nextjs: { value: "Vercel Auto-Scale", bar: 92, verdict: "great" },
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
    wordpress: { value: "Full WP Admin", bar: 70, verdict: "ok" },
    nextjs: { value: "Headless CMS", bar: 85, verdict: "great" },
  },
];

function VerdictIcon({ verdict }: { verdict: string }) {
  if (verdict === "great")
    return (
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <Check size={12} className="text-emerald-400" />
      </div>
    );
  if (verdict === "poor")
    return (
      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
        <X size={12} className="text-red-400" />
      </div>
    );
  return (
    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
      <Minus size={12} className="text-amber-400" />
    </div>
  );
}

export default function Comparison() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="comparison" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.05)] mb-6">
            <ArrowRight size={13} className="text-[var(--color-accent-cyan)]" />
            <span className="text-xs font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
              Head to Head
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Side-by-Side{" "}
            <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            The numbers don&apos;t lie. See how the two stacks compare across every
            metric that matters.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="glass-card overflow-hidden rounded-2xl">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] border-b border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.02)]">
            <div className="p-4 md:p-5 text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
              Category
            </div>
            <div className="p-4 md:p-5 text-sm font-semibold text-red-400/80 uppercase tracking-wider text-center">
              WordPress
            </div>
            <div className="p-4 md:p-5 text-sm font-semibold text-[var(--color-accent-cyan)] uppercase tracking-wider text-center">
              Next.js
            </div>
          </div>

          {/* Table rows */}
          {categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className={`grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] border-b border-[var(--color-border-subtle)] last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors`}
            >
              {/* Category */}
              <div className="p-4 md:p-5">
                <div className="font-[family-name:var(--font-display)] font-semibold text-sm md:text-base text-[var(--color-text-primary)]">
                  {cat.category}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {cat.metric}
                </div>
              </div>

              {/* WordPress */}
              <div className="p-4 md:p-5 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <VerdictIcon verdict={cat.wordpress.verdict} />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {cat.wordpress.value}
                  </span>
                </div>
                <div className="w-full max-w-[120px] progress-bar">
                  <motion.div
                    className="progress-fill progress-fill-old"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${cat.wordpress.bar}%` } : {}
                    }
                    transition={{ duration: 1.2, delay: 0.2 + 0.05 * i }}
                  />
                </div>
              </div>

              {/* Next.js */}
              <div className="p-4 md:p-5 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <VerdictIcon verdict={cat.nextjs.verdict} />
                  <span className="text-sm text-[var(--color-text-primary)] font-medium">
                    {cat.nextjs.value}
                  </span>
                </div>
                <div className="w-full max-w-[120px] progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${cat.nextjs.bar}%` } : {}
                    }
                    transition={{ duration: 1.2, delay: 0.2 + 0.05 * i }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-[var(--color-text-muted)] text-sm">
            Next.js wins in{" "}
            <span className="text-[var(--color-accent-cyan)] font-semibold">
              7 out of 8
            </span>{" "}
            categories. The only area WordPress matches is client editing&mdash;and
            headless CMS solves that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
