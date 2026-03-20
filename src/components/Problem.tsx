"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";
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
    statLabel: "Avg. WP Load Time",
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
    stat: "40+ hrs",
    statLabel: "Monthly Maintenance",
  },
  {
    icon: Bug,
    title: "Update Roulette",
    description:
      "Every WordPress core update, PHP version change, or plugin update risks breaking the site. Clients call. We scramble. Repeat.",
    stat: "60%",
    statLabel: "Sites Break On Update",
  },
  {
    icon: RefreshCw,
    title: "Scaling Is Manual",
    description:
      "Spinning up 50+ franchise sites means 50+ WordPress installs, 50+ sets of plugins, 50+ things to maintain. It doesn't scale.",
    stat: "50x",
    statLabel: "Maintenance Multiplier",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(239,68,68,0.03), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(239, 68, 68, 0.2)",
              background: "rgba(239, 68, 68, 0.06)",
            }}
          >
            <AlertTriangle size={13} className="text-red-400" />
            <span className="text-xs font-medium text-red-400 uppercase tracking-wider">
              The Current Reality
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WordPress Is{" "}
            <span className="gradient-text-warm">Holding Us Back</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The tools that got us here won&apos;t get us where we need to go.
            Here&apos;s what we&apos;re up against every single day.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={0.08 * i}>
              <div className="glass-card shine-effect p-6 group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(239, 68, 68, 0.1)" }}
                  >
                    <point.icon size={20} className="text-red-400" />
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xl font-bold text-red-400"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {point.stat}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                      {point.statLabel}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-slate-100"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
