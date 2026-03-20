"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";
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
  },
  {
    icon: Eye,
    title: "Preview & Iterate",
    description:
      "Hot reload shows changes instantly. Review, refine, and polish in real-time. The AI iterates based on feedback until it's perfect.",
    time: "Real-time",
  },
  {
    icon: GitBranch,
    title: "Push & Auto-Deploy",
    description:
      "Push to GitHub and Vercel automatically builds, tests, and deploys. Preview URLs for every branch. Production deploys in seconds, not hours.",
    time: "~30 seconds",
  },
  {
    icon: Pencil,
    title: "Client Edits via CMS",
    description:
      "Clients get a clean, intuitive headless CMS (Sanity, Contentful, or Payload). They edit text, swap images, manage pages — no code, no breakage.",
    time: "Self-service",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.06)",
            }}
          >
            <Timer size={13} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              The New Workflow
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From Idea to <span className="gradient-text">Live Site</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            What used to take 2-3 weeks in WordPress now takes 2-3 days.
            Here&apos;s exactly how the new workflow operates.
          </p>
        </FadeIn>

        {/* Speed comparison */}
        <FadeIn className="mb-16">
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-red-400 mb-3 font-semibold">
                  WordPress + Elementor
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="flex-1 h-4 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #ef4444, #f59e0b)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                  <span
                    className="text-lg font-bold text-red-400 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    2-3 Weeks
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
                  React/Next.js + AI Workflow
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="flex-1 h-4 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "20%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <span
                    className="text-lg font-bold gradient-text whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    2-3 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={0.1 * i}>
              <div className="glass-card p-6 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="timeline-dot" />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))",
                    }}
                  >
                    <step.icon size={18} className="text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Step {i + 1}
                  </span>
                  <span
                    className="text-xs text-cyan-400 px-2 py-0.5 rounded-full ml-auto"
                    style={{ background: "rgba(6, 182, 212, 0.1)" }}
                  >
                    {step.time}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-2 text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
