"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, DollarSign, Clock, Heart } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 70,
    suffix: "%",
    label: "Faster Development Time",
    description:
      "Sites built in 2-3 days instead of 2-3 weeks. AI handles boilerplate, components, and iterations.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: DollarSign,
    value: 40,
    suffix: "%",
    label: "Lower Total Cost",
    description:
      "No VPS management, no plugin licenses, no emergency security patches. Vercel + headless CMS is leaner.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Reduction in Maintenance",
    description:
      "No WordPress updates, no plugin conflicts, no PHP version issues. Deploy and forget.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Heart,
    value: 100,
    suffix: "/100",
    label: "Lighthouse Performance",
    description:
      "Perfect scores mean better SEO rankings, happier visitors, and more franchise leads converting.",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
];

export default function Numbers() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="numbers" className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.03)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.05)] mb-6">
            <TrendingUp size={13} className="text-[var(--color-accent-cyan)]" />
            <span className="text-xs font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
              The ROI
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Numbers{" "}
            <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            This isn&apos;t just about technology. It&apos;s about delivering more value
            to our clients while spending less time and money doing it.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card shine-effect gradient-border p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center flex-shrink-0`}
                >
                  <stat.icon size={26} className={stat.color} />
                </div>
                <div>
                  <div
                    className={`text-5xl font-bold font-[family-name:var(--font-display)] ${stat.color} mb-1`}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-base font-semibold font-[family-name:var(--font-display)] text-[var(--color-text-primary)] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card p-8 md:p-10 text-center gradient-border"
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-4">
            The Bottom Line
          </h3>
          <p className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            For every franchise site we build, we save{" "}
            <span className="text-[var(--color-accent-cyan)] font-semibold">
              8-12 days of development time
            </span>
            , eliminate{" "}
            <span className="text-[var(--color-accent-cyan)] font-semibold">
              ongoing server maintenance
            </span>
            , and deliver a site that&apos;s{" "}
            <span className="text-[var(--color-accent-cyan)] font-semibold">
              measurably faster, more secure, and better for SEO
            </span>
            . Multiply that across 50+ franchise clients and the impact is
            transformational.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
