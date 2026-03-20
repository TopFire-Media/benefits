"use client";

import FadeIn from "./FadeIn";
import {
  Terminal,
  MonitorCheck,
  Wrench,
  Eye,
  GitPullRequest,
  ShieldCheck,
  Blocks,
  Gauge,
} from "lucide-react";

const capabilities = [
  {
    icon: Terminal,
    title: "Professional IDE Environment",
    description:
      "Developers work in a professional IDE with TypeScript, linting, debugging, and version control — the same tools used at top tech companies. This isn't a drag-and-drop page builder. It's real software engineering.",
  },
  {
    icon: MonitorCheck,
    title: "Local Development",
    description:
      "Build and preview sites locally with instant hot reload — no more waiting on Elementor's laggy visual builder or fighting server-side rendering delays. Changes appear in milliseconds, not seconds.",
  },
  {
    icon: Wrench,
    title: "Custom Claude Code Skills",
    description:
      "Developers build and maintain custom AI skills tailored to our workflow — template scaffolding, component libraries, SEO optimization, design systems, and accessibility checks. These skills are proprietary assets only our team can create.",
  },
  {
    icon: Eye,
    title: "Visual Code Inspection & QA",
    description:
      "Every component is visually inspected across breakpoints, tested for accessibility, and validated against design specs. Developers own quality — AI can't replace the trained eye that catches what automated tools miss.",
  },
  {
    icon: GitPullRequest,
    title: "Code Review & Architecture",
    description:
      "All code goes through developer review before deployment. Architectural decisions — component structure, state management, performance optimization — require engineering judgment that AI assists but doesn't replace.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance Audits",
    description:
      "Developers run Lighthouse audits, security scans, and performance profiling. They understand Core Web Vitals, OWASP guidelines, and SEO requirements at a level that ensures client sites rank and convert.",
  },
  {
    icon: Blocks,
    title: "Component Library Curation",
    description:
      "Our dev team builds and maintains a shared component library — battle-tested UI patterns, franchise-specific modules, and reusable layouts. This library is the foundation that makes rapid deployment possible.",
  },
  {
    icon: Gauge,
    title: "Deployment & DevOps",
    description:
      "Developers manage Git branching strategies, CI/CD pipelines, environment configuration, and domain setup. They handle the infrastructure that keeps 50+ franchise sites running smoothly on Vercel.",
  },
];

export default function DevWorkflow() {
  return (
    <section id="dev-workflow" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.06)",
            }}
          >
            <Terminal size={13} className="text-violet-400" />
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
              The Developer Advantage
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Developers Are{" "}
            <span className="gradient-text">Essential</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            AI is the accelerator, not the driver. This workflow elevates what
            skilled developers can accomplish — it doesn&apos;t replace the
            expertise required to build production-grade franchise sites.
          </p>
        </FadeIn>

        {/* Callout box */}
        <FadeIn className="mb-12">
          <div
            className="glass-card p-6 md:p-8 rounded-2xl text-center"
            style={{
              borderColor: "rgba(139, 92, 246, 0.15)",
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elementor &rarr; Professional IDE &nbsp;|&nbsp; Drag &amp; Drop &rarr; Code &amp; Components &nbsp;|&nbsp; Server Lag &rarr; Instant Local Preview
            </p>
            <p className="text-sm text-slate-400">
              The shift from visual builders to a professional IDE means our
              developers work faster, with more control, and produce higher
              quality output.
            </p>
          </div>
        </FadeIn>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={0.06 * i}>
              <div className="glass-card p-6 group h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(139, 92, 246, 0.1)" }}
                >
                  <cap.icon size={20} className="text-violet-400" />
                </div>
                <h3
                  className="text-base font-semibold mb-2 text-slate-100"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom message */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="glass-card p-8 md:p-10 text-center gradient-border">
            <h3
              className="text-xl md:text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AI Makes Great Developers Faster.
              <br />
              <span className="text-slate-400 font-normal text-lg">
                It Doesn&apos;t Make Non-Developers Into Developers.
              </span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              The new workflow requires developers who understand React
              architecture, TypeScript, responsive design, SEO best practices,
              and deployment pipelines. AI amplifies their output — it
              doesn&apos;t replace their judgment.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
