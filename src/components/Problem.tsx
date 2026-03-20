"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  AlertTriangle,
  Clock,
  Shield,
  Layers,
  Server,
  RefreshCw,
  Bug,
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Sluggish Performance",
    description:
      "WordPress sites average 3-5s load times. Elementor adds 200-500KB of unused CSS/JS to every page. Google penalizes slow sites in rankings.",
    stat: "3.8s",
    statLabel: "Avg. WordPress Load Time",
  },
  {
    icon: Shield,
    title: "Security Nightmare",
    description:
      "WordPress powers 43% of the web, making it the #1 target for attacks. Every plugin is a potential vulnerability. Constant patching required.",
    stat: "13,000",
    statLabel: "WP Sites Hacked Daily",
  },
  {
    icon: Layers,
    title: "Plugin Bloat",
    description:
      "The average WP site runs 20-30 plugins. Updates break things. Conflicts are common. Each plugin is a dependency you can't control.",
    stat: "20-30",
    statLabel: "Avg. Plugins Per Site",
  },
  {
    icon: Server,
    title: "Server Babysitting",
    description:
      "VPS hosting on Ionos requires manual PHP updates, server config, SSL management, backups, and uptime monitoring. That's overhead, not value.",
    stat: "5+ hrs",
    statLabel: "Monthly Server Maintenance",
  },
  {
    icon: Bug,
    title: "Update Roulette",
    description:
      "Every WordPress core update, PHP version change, or plugin update risks breaking the site. Clients call. We scramble. Repeat.",
    stat: "60%",
    statLabel: "Sites Break After Updates",
  },
  {
    icon: RefreshCw,
    title: "Scaling Is Manual",
    description:
      "Spinning up 50+ franchise sites means 50+ WordPress installs, 50+ sets of plugins, 50+ things to maintain. It doesn't scale.",
    stat: "50x",
    statLabel: "The Maintenance Multiplier",
  },
];

export default function Problem() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="problem" className="relative py-20 md:py-28" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(239,68,68,0.02)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
            <AlertTriangle size={13} className="text-red-400" />
            <span className="text-xs font-medium text-red-400 uppercase tracking-wider">
              The Current Reality
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            WordPress Is{" "}
            <span className="gradient-text-warm">Holding Us Back</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            The tools that got us here won&apos;t get us where we need to go. Here&apos;s
            what we&apos;re up against every single day.
          </p>
        </motion.div>

        {/* Pain point grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card shine-effect p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <point.icon
                    size={20}
                    className="text-red-400 group-hover:text-red-300 transition-colors"
                  />
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold font-[family-name:var(--font-display)] text-red-400">
                    {point.stat}
                  </div>
                  <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wide">
                    {point.statLabel}
                  </div>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 text-[var(--color-text-primary)]">
                {point.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
