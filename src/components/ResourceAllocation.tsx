"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import { BarChart3, TrendingUp, Zap, ArrowDown, ArrowRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
// 3 devs × 40 hrs = 120 hrs/week total capacity

const categories = {
  maintenance: {
    label: "Maintenance & Updates",
    color: "#ef4444",
    description: "Plugin updates, server patching, WP core updates, backups, security fixes",
  },
  manual: {
    label: "Manual / Repetitive Work",
    color: "#f59e0b",
    description: "Site cloning, migrations, export creation, tracking code setup",
  },
  siloErrors: {
    label: "Fixing Silo Errors & Debugging",
    color: "#f97316",
    description: "Plugin conflicts, PHP version issues, cross-site inconsistencies",
  },
  siteBuild: {
    label: "Site Builds & Redesigns",
    color: "#3b82f6",
    description: "New franchise sites, redesigns, corporate rebuilds",
  },
  customDev: {
    label: "Custom Development",
    color: "#8b5cf6",
    description: "Custom functions, applications, integrations, multi-location tools",
  },
  qc: {
    label: "QC & Testing",
    color: "#06b6d4",
    description: "Quality control, cross-browser testing, deployment verification",
  },
  rAndD: {
    label: "R&D & Innovation",
    color: "#14b8a6",
    description: "Research, prototyping new tools, exploring new tech",
  },
  systemsIntegration: {
    label: "Systems Integration & Process Debt",
    color: "#6366f1",
    description: "Building unified workflows, migrating repos, CI/CD setup",
  },
  strategicFeatures: {
    label: "Strategic Feature Development",
    color: "#10b981",
    description: "New billable features, expanding service offerings",
  },
  productization: {
    label: "Scalable Productization",
    color: "#22d3ee",
    description: "Productized services, templated builds, reusable component libraries",
  },
  proactiveOptimization: {
    label: "Proactive Performance Optimization",
    color: "#a78bfa",
    description: "Deep-dive audits, speed optimization, SEO improvements driving upsells",
  },
  crossAgencyInnovation: {
    label: "Cross-Agency Innovation",
    color: "#f472b6",
    description: "R&D for integrated agencies, identifying new market advantages",
  },
  automatedMaintenance: {
    label: "Automated Workflow Maintenance",
    color: "#64748b",
    description: "Overseeing automated systems, monitoring, minimal upkeep",
  },
  finishingProjects: {
    label: "Finishing Existing Projects",
    color: "#60a5fa",
    description: "Completing sites and projects that came in before the freeze",
  },
};

type CatKey = keyof typeof categories;

interface PhaseData {
  label: string;
  subtitle: string;
  hours: { key: CatKey; hours: number }[];
}

const phases: PhaseData[] = [
  {
    label: "Before",
    subtitle: "Pre-Integration",
    hours: [
      { key: "maintenance", hours: 22 },
      { key: "manual", hours: 15 },
      { key: "siloErrors", hours: 18 },
      { key: "siteBuild", hours: 28 },
      { key: "customDev", hours: 20 },
      { key: "qc", hours: 8 },
      { key: "rAndD", hours: 9 },
    ],
  },
  {
    label: "Current",
    subtitle: "New Client Freeze",
    hours: [
      { key: "maintenance", hours: 25 },
      { key: "manual", hours: 15 },
      { key: "siloErrors", hours: 22 },
      { key: "finishingProjects", hours: 24 },
      { key: "customDev", hours: 20 },
      { key: "qc", hours: 5 },
      { key: "rAndD", hours: 9 },
    ],
  },
  {
    label: "After",
    subtitle: "Post-Integration",
    hours: [
      { key: "maintenance", hours: 3 },
      { key: "automatedMaintenance", hours: 5 },
      { key: "siteBuild", hours: 18 },
      { key: "strategicFeatures", hours: 25 },
      { key: "productization", hours: 22 },
      { key: "proactiveOptimization", hours: 18 },
      { key: "crossAgencyInnovation", hours: 12 },
      { key: "customDev", hours: 10 },
      { key: "rAndD", hours: 7 },
    ],
  },
];

// Classify categories for the heatmap
const lowROI: CatKey[] = ["maintenance", "manual", "siloErrors"];
const transitional: CatKey[] = ["systemsIntegration"];
const highROI: CatKey[] = [
  "strategicFeatures",
  "productization",
  "proactiveOptimization",
  "crossAgencyInnovation",
];

function getHoursForKeys(phase: PhaseData, keys: CatKey[]): number {
  return phase.hours
    .filter((h) => keys.includes(h.key))
    .reduce((sum, h) => sum + h.hours, 0);
}

// ── Stacked Bar Chart ─────────────────────────────────────────────────────────

function StackedBar({ phase, index }: { phase: PhaseData; index: number }) {
  const total = phase.hours.reduce((s, h) => s + h.hours, 0);

  return (
    <FadeIn delay={0.15 * index} className="flex-1 min-w-0">
      <div className="mb-4">
        <div
          className="text-xl md:text-2xl font-bold text-slate-100"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {phase.label}
        </div>
        <div className="text-sm text-slate-500">{phase.subtitle}</div>
        <div className="text-xs text-slate-600 mt-1">{total} hrs / week</div>
      </div>

      {/* Stacked horizontal bar */}
      <div className="h-12 md:h-14 rounded-xl overflow-hidden flex relative">
        {phase.hours.map((item, i) => {
          const pct = (item.hours / total) * 100;
          return (
            <motion.div
              key={item.key}
              className="relative group cursor-default"
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.05 + index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                background: categories[item.key].color,
                minWidth: pct > 3 ? undefined : "4px",
              }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                style={{ background: "rgba(0,0,0,0.9)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="font-semibold text-white">{item.hours}h</span>
                <span className="text-slate-400 ml-1">{categories[item.key].label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend items */}
      <div className="mt-4 space-y-1.5">
        {phase.hours.map((item) => (
          <div key={item.key} className="flex items-center gap-2 text-xs">
            <div
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ background: categories[item.key].color }}
            />
            <span className="text-slate-400 truncate">
              {categories[item.key].label}
            </span>
            <span className="text-slate-500 ml-auto flex-shrink-0">
              {item.hours}h
            </span>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

// ── Capacity Heatmap ──────────────────────────────────────────────────────────

function CapacityHeatmap() {
  const rows = [
    {
      label: "Low-ROI Work",
      sublabel: "Maintenance, manual tasks, debugging",
      before: getHoursForKeys(phases[0], lowROI),
      during: getHoursForKeys(phases[1], lowROI),
      after: getHoursForKeys(phases[2], lowROI),
      colorScale: (v: number) =>
        v > 30 ? "#dc2626" : v > 15 ? "#f59e0b" : "#22c55e",
    },
    {
      label: "Core Delivery",
      sublabel: "Site builds, finishing projects, custom dev, QC",
      before:
        getHoursForKeys(phases[0], ["siteBuild", "customDev", "qc"]),
      during:
        getHoursForKeys(phases[1], ["siteBuild", "finishingProjects", "customDev", "qc"]),
      after:
        getHoursForKeys(phases[2], ["siteBuild", "customDev", "qc"]),
      colorScale: (v: number) =>
        v > 40 ? "#3b82f6" : v > 20 ? "#60a5fa" : "#93c5fd",
    },
    {
      label: "High-Value / Revenue",
      sublabel: "Features, productization, optimization, innovation",
      before: getHoursForKeys(phases[0], highROI),
      during: getHoursForKeys(phases[1], highROI),
      after: getHoursForKeys(phases[2], highROI),
      colorScale: (v: number) =>
        v > 50 ? "#10b981" : v > 20 ? "#34d399" : v > 0 ? "#6ee7b7" : "#334155",
    },
    {
      label: "R&D & Innovation",
      sublabel: "Research, experimentation, new tech",
      before: getHoursForKeys(phases[0], ["rAndD", "crossAgencyInnovation"]),
      during: getHoursForKeys(phases[1], ["rAndD", "crossAgencyInnovation"]),
      after: getHoursForKeys(phases[2], ["rAndD", "crossAgencyInnovation"]),
      colorScale: (v: number) =>
        v > 15 ? "#14b8a6" : v > 8 ? "#5eead4" : "#99f6e4",
    },
  ];

  return (
    <FadeIn delay={0.2}>
      <div className="glass-card overflow-hidden rounded-2xl">
        {/* Header */}
        <div
          className="grid grid-cols-[1.5fr_1fr_1fr_1fr]"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div className="p-4 md:p-5 text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Category
          </div>
          <div className="p-4 md:p-5 text-sm font-semibold text-red-400 uppercase tracking-wider text-center">
            Before
          </div>
          <div className="p-4 md:p-5 text-sm font-semibold text-amber-400 uppercase tracking-wider text-center">
            Current
          </div>
          <div className="p-4 md:p-5 text-sm font-semibold text-emerald-400 uppercase tracking-wider text-center">
            After
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.label}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr] hover:bg-white/[0.02] transition-colors"
            style={{
              borderBottom:
                i < rows.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            <div className="p-4 md:p-5">
              <div
                className="font-semibold text-sm md:text-base text-slate-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {row.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {row.sublabel}
              </div>
            </div>
            {[row.before, row.during, row.after].map((val, j) => (
              <div
                key={j}
                className="p-4 md:p-5 flex items-center justify-center"
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.05 * j }}
                  style={{
                    background: `${row.colorScale(val)}20`,
                    border: `1px solid ${row.colorScale(val)}40`,
                  }}
                >
                  <span
                    className="text-lg md:text-xl font-bold"
                    style={{ color: row.colorScale(val) }}
                  >
                    {val}
                  </span>
                  <span className="text-[10px] text-slate-500">hrs/wk</span>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

// ── Waterfall Chart ───────────────────────────────────────────────────────────

function WaterfallChart() {
  const beforeLowROI = getHoursForKeys(phases[0], lowROI);
  const afterLowROI = getHoursForKeys(phases[2], lowROI);
  const freed = beforeLowROI - afterLowROI;
  const afterHighROI = getHoursForKeys(phases[2], highROI);

  const steps = [
    {
      label: "Current Low-ROI Hours",
      value: beforeLowROI,
      color: "#ef4444",
      type: "start" as const,
    },
    {
      label: "Efficiency Gains",
      value: -freed,
      color: "#22c55e",
      type: "change" as const,
    },
    {
      label: "Remaining Overhead",
      value: afterLowROI,
      color: "#f59e0b",
      type: "result" as const,
    },
    {
      label: "Reinvested in Revenue Work",
      value: afterHighROI,
      color: "#10b981",
      type: "reinvest" as const,
    },
  ];

  const maxVal = 60;

  return (
    <FadeIn delay={0.3}>
      <div className="glass-card p-6 md:p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(16, 185, 129, 0.1)" }}
          >
            <TrendingUp size={20} className="text-emerald-400" />
          </div>
          <div>
            <h4
              className="text-lg font-bold text-slate-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Capacity Waterfall
            </h4>
            <p className="text-xs text-slate-500">
              How saved hours become revenue hours
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="w-40 md:w-52 flex-shrink-0 text-right">
                <div className="text-sm text-slate-300">{step.label}</div>
              </div>
              <div className="flex-1 h-10 rounded-lg overflow-hidden relative"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <motion.div
                  className="h-full rounded-lg flex items-center justify-end pr-3"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(Math.abs(step.value) / maxVal) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 * i }}
                  style={{ background: step.color }}
                >
                  <span className="text-xs font-bold text-white">
                    {step.value > 0 ? "+" : ""}
                    {step.value}h
                  </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 pt-5 flex items-center justify-center gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Zap size={16} className="text-emerald-400" />
          <span className="text-sm text-slate-400">
            <span className="text-emerald-400 font-bold">{freed} hours/week</span>{" "}
            reclaimed and reinvested into{" "}
            <span className="text-emerald-400 font-bold">{afterHighROI} hours</span>{" "}
            of high-value revenue work
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Key Takeaway Cards ────────────────────────────────────────────────────────

function TakeawayCards() {
  const cards = [
    {
      icon: ArrowDown,
      stat: "55 → 3",
      unit: "hrs/wk",
      label: "Low-ROI Work Eliminated",
      description:
        "Maintenance, manual tasks, and debugging hours drop by 95% — automated away, not eliminated by headcount.",
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)",
    },
    {
      icon: ArrowRight,
      stat: "0 → 77",
      unit: "hrs/wk",
      label: "High-Value Hours Created",
      description:
        "Freed capacity goes directly into strategic features, productized services, performance optimization, and cross-agency innovation.",
      color: "#10b981",
      bg: "rgba(16, 185, 129, 0.1)",
    },
    {
      icon: TrendingUp,
      stat: "120",
      unit: "hrs/wk",
      label: "Same Team, Full Utilization",
      description:
        "Zero idle hours. Every developer stays fully allocated — the work just shifts from keeping lights on to driving revenue.",
      color: "#3b82f6",
      bg: "rgba(59, 130, 246, 0.1)",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-12">
      {cards.map((card, i) => (
        <FadeIn key={card.label} delay={0.1 * i}>
          <div className="glass-card shine-effect gradient-border p-7 h-full">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: card.bg }}
            >
              <card.icon size={22} style={{ color: card.color }} />
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span
                className="text-3xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: card.color,
                }}
              >
                {card.stat}
              </span>
              <span className="text-sm text-slate-500">{card.unit}</span>
            </div>
            <div
              className="text-base font-semibold text-slate-100 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {card.label}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {card.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ResourceAllocation() {
  return (
    <section id="resources" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(16,185,129,0.03), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(16, 185, 129, 0.3)",
              background: "rgba(16, 185, 129, 0.06)",
            }}
          >
            <BarChart3 size={13} className="text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
              Resource Allocation
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where the <span className="gradient-text">120 Hours</span> Go
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Three developers. 120 hours per week. The question isn&apos;t whether
            we need the team &mdash; it&apos;s how we shift them from
            maintenance and firefighting to driving new revenue.
          </p>
        </FadeIn>

        {/* Stacked Bar Charts */}
        <FadeIn className="mb-6">
          <h3
            className="text-2xl font-bold text-slate-100 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Weekly Hour Allocation by Phase
          </h3>
          <p className="text-sm text-slate-500 mb-8">
            Hover over bars to see breakdown. Each bar represents 120 hours/week
            across the 3-person dev team.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 mb-16">
          {phases.map((phase, i) => (
            <StackedBar key={phase.label} phase={phase} index={i} />
          ))}
        </div>

        {/* Capacity Heatmap */}
        <FadeIn className="mb-6">
          <h3
            className="text-2xl font-bold text-slate-100 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Capacity Heatmap
          </h3>
          <p className="text-sm text-slate-500 mb-8">
            Watch the red shrink and the green grow &mdash; same 120 hours,
            radically different output.
          </p>
        </FadeIn>

        <CapacityHeatmap />

        {/* Waterfall */}
        <div className="mt-16">
          <WaterfallChart />
        </div>

        {/* Takeaway cards */}
        <TakeawayCards />

        {/* Bottom line */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="glass-card p-8 md:p-10 text-center gradient-border">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Net Result
            </h3>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              <span className="text-emerald-400 font-semibold">
                0 hours wasted
              </span>
              , with{" "}
              <span className="text-emerald-400 font-semibold">
                64% more output
              </span>{" "}
              directed at revenue-generating work. The team doesn&apos;t get
              smaller &mdash; it gets{" "}
              <span className="text-cyan-400 font-semibold">
                dramatically more valuable
              </span>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
