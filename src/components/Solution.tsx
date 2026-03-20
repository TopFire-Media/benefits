"use client";

import FadeIn from "./FadeIn";
import { Rocket, Sparkles, Component, Globe, Lock, Bot } from "lucide-react";

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
      "Claude Code integrates directly into the developer's IDE to assist with components, logic, and iteration in real-time. What took days now takes hours. What took weeks now takes days.",
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
      "TypeScript, hot reload, built-in routing, image optimization, and SEO best practices baked into the framework. Much of what requires separate SEO tooling or services with WordPress comes standard here.",
    highlight: "Next-Gen Tooling",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.06)",
            }}
          >
            <Sparkles size={13} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              The New Way
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            React + Next.js +{" "}
            <span className="gradient-text">AI Workflow</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A modern stack built for speed, security, and scale. Paired with
            AI-powered development for unprecedented efficiency.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={0.08 * i}>
              <div className="glass-card shine-effect gradient-border p-6 group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(59, 130, 246, 0.1)" }}
                  >
                    <benefit.icon size={20} className="text-cyan-400" />
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(6, 182, 212, 0.1)" }}
                  >
                    {benefit.highlight}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-slate-100"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
