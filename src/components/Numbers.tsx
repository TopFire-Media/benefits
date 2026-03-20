"use client";

import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, DollarSign, Clock, Heart } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 70,
    suffix: "%",
    label: "Faster Development Time",
    description:
      "Actual development time drops from 2-3 weeks to 2-3 days. AI assists developers with boilerplate, components, and iterations. This is hands-on-keyboard time, not overall project timeline.",
    color: "#60a5fa",
    bg: "rgba(59, 130, 246, 0.1)",
  },
  {
    icon: DollarSign,
    value: 40,
    suffix: "%",
    label: "Lower Total Cost",
    description:
      "No VPS management, no plugin licenses, no emergency security patches. Vercel + headless CMS is leaner. Built-in SEO tooling also reduces reliance on outside SEO services.",
    color: "#34d399",
    bg: "rgba(16, 185, 129, 0.1)",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Reduction in Maintenance",
    description:
      "No WordPress updates, no plugin conflicts, no PHP version issues. Deploy and forget.",
    color: "#22d3ee",
    bg: "rgba(6, 182, 212, 0.1)",
  },
  {
    icon: Heart,
    value: 100,
    suffix: "/100",
    label: "Lighthouse Performance",
    description:
      "Perfect scores mean better SEO rankings out of the box — less manual optimization, fewer third-party SEO tools, and more franchise leads converting without extra spend.",
    color: "#a78bfa",
    bg: "rgba(139, 92, 246, 0.1)",
  },
];

export default function Numbers() {
  return (
    <section id="numbers" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent)",
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
            <TrendingUp size={13} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              The ROI
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Numbers <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            This isn&apos;t just about technology. It&apos;s about delivering
            more value to our clients while spending less time and money doing
            it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="glass-card shine-effect gradient-border p-8 h-full">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: stat.bg }}
                  >
                    <stat.icon size={26} style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div
                      className="text-5xl font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: stat.color,
                      }}
                    >
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div
                      className="text-base font-semibold text-slate-100 mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.label}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12">
          <div className="glass-card p-8 md:p-10 text-center gradient-border">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Bottom Line
            </h3>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              For every franchise site we build, we save{" "}
              <span className="text-cyan-400 font-semibold">
                8-12 days of development time
              </span>
              , eliminate{" "}
              <span className="text-cyan-400 font-semibold">
                ongoing server maintenance
              </span>
              , and deliver a site that&apos;s{" "}
              <span className="text-cyan-400 font-semibold">
                measurably faster, more secure, and better for SEO
              </span>
              . Multiply that across 50+ franchise clients and the impact is
              transformational.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
