"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  MessageSquareCode,
  Eye,
  GitBranch,
  Pencil,
  Timer,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareCode,
    title: "AI Generates Components",
    description:
      "Describe what you need in natural language. Claude Code in VS Code writes production-ready React components, handles routing, styling, and business logic.",
    time: "Minutes",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: Eye,
    title: "Preview & Iterate",
    description:
      "Hot reload shows changes instantly. Review, refine, and polish in real-time. The AI iterates based on feedback until it's perfect.",
    time: "Real-time",
    color: "from-cyan-500 to-cyan-400",
  },
  {
    icon: GitBranch,
    title: "Push & Auto-Deploy",
    description:
      "Push to GitHub and Vercel automatically builds, tests, and deploys. Preview URLs for every branch. Production deploys in seconds, not hours.",
    time: "~30 seconds",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: Pencil,
    title: "Client Edits via CMS",
    description:
      "Clients get a clean, intuitive headless CMS (Sanity, Contentful, or Payload). They edit text, swap images, manage pages — no code, no breakage.",
    time: "Self-service",
    color: "from-emerald-500 to-emerald-400",
  },
];

export default function Workflow() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="workflow" className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(6,182,212,0.02)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.05)] mb-6">
            <Timer size={13} className="text-[var(--color-accent-cyan)]" />
            <span className="text-xs font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
              The New Workflow
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            From Idea to{" "}
            <span className="gradient-text">Live Site</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            What used to take 2-3 weeks in WordPress now takes 2-3 days.
            Here&apos;s exactly how the new workflow operates.
          </p>
        </motion.div>

        {/* Timeline speed comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-8 mb-16 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-red-400 mb-2 font-semibold">
                WordPress + Elementor
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-4 rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-amber-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <span className="text-lg font-bold font-[family-name:var(--font-display)] text-red-400 whitespace-nowrap">
                  2-3 Weeks
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-[var(--color-accent-cyan)] mb-2 font-semibold">
                React/Next.js + AI Workflow
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-4 rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "20%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-lg font-bold font-[family-name:var(--font-display)] gradient-text whitespace-nowrap">
                  2-3 Days
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-blue)] via-[var(--color-accent-cyan)] to-[var(--color-accent-teal)] opacity-20" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.15 * i }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:py-10 ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="timeline-dot" />
                </div>

                {/* Card */}
                <div
                  className={`glass-card p-6 md:p-8 ${
                    i % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-2"
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <div className="flex items-start gap-4">
                    {/* Mobile timeline dot */}
                    <div className="lg:hidden timeline-dot mt-1" />

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center`}
                          style={{
                            background: `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))`,
                          }}
                        >
                          <step.icon size={18} className="text-[var(--color-accent-cyan)]" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Step {i + 1}
                        </span>
                        <span className="text-xs text-[var(--color-accent-cyan)] bg-[rgba(6,182,212,0.1)] px-2 py-0.5 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div
                  className={`hidden lg:block ${
                    i % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
