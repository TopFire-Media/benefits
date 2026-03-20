"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Rocket,
  Sparkles,
  Component,
  Globe,
  Lock,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Blazing Fast Performance",
    description:
      "Static generation, edge rendering, and automatic code splitting deliver perfect Lighthouse scores. Pages load in under 1 second globally.",
    highlight: "100/100 Lighthouse",
  },
  {
    icon: Bot,
    title: "AI-Powered Development",
    description:
      "Claude Code in VS Code generates components, writes logic, and iterates in real-time. What took days now takes hours. What took weeks now takes days.",
    highlight: "3-5x Faster",
  },
  {
    icon: Component,
    title: "True Reusability",
    description:
      "Component-based architecture means building once and deploying everywhere. Every franchise site shares a battle-tested component library.",
    highlight: "Build Once, Deploy Many",
  },
  {
    icon: Globe,
    title: "Zero-Config Hosting",
    description:
      "Vercel handles deployments, SSL, CDN, scaling, and monitoring. Push to Git, it's live in seconds. No servers to patch. No downtime.",
    highlight: "99.99% Uptime",
  },
  {
    icon: Lock,
    title: "Built-In Security",
    description:
      "No database to exploit. No plugins to patch. No PHP vulnerabilities. Static pages served from a global CDN with enterprise-grade security.",
    highlight: "Zero Attack Surface",
  },
  {
    icon: Sparkles,
    title: "Modern DX",
    description:
      "TypeScript, hot reload, built-in routing, image optimization, and SEO tools out of the box. The developer experience makes the team faster and happier.",
    highlight: "Next-Gen Tooling",
  },
];

export default function Solution() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="solution" className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.02)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.05)] mb-6">
            <Sparkles size={13} className="text-[var(--color-accent-cyan)]" />
            <span className="text-xs font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
              The New Way
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            React + Next.js +{" "}
            <span className="gradient-text">AI Workflow</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            A modern stack built for speed, security, and scale. Paired with
            AI-powered development for unprecedented efficiency.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card shine-effect p-6 group gradient-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(59,130,246,0.1)] flex items-center justify-center">
                  <benefit.icon
                    size={20}
                    className="text-[var(--color-accent-cyan)] group-hover:text-[var(--color-accent-teal)] transition-colors"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent-cyan)] bg-[rgba(6,182,212,0.1)] px-2.5 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
