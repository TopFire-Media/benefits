"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      {/* Background effects */}
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.08)] mb-8 badge-glow"
        >
          <Zap size={14} className="text-[var(--color-accent-cyan)]" />
          <span className="text-sm text-[var(--color-accent-cyan)] font-medium">
            Internal Strategy Presentation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          The Future of
          <br />
          <span className="gradient-text">Franchise Web</span>
          <br />
          Development
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          How React, Next.js, and AI-powered development can transform
          TopFire Media&apos;s workflow&mdash;delivering faster, more secure, and
          infinitely scalable franchise websites.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#problem"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105"
          >
            See the Case
          </a>
          <a
            href="#comparison"
            className="px-8 py-3.5 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-blue)] transition-all duration-300"
          >
            Jump to Comparison
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="glass-card inline-flex flex-wrap justify-center divide-x divide-[var(--color-border-subtle)] rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]"
        >
          {[
            { value: "3-5x", label: "Faster Development" },
            { value: "100", label: "Lighthouse Score" },
            { value: "$0", label: "Server Maintenance" },
            { value: "99.99%", label: "Uptime on Vercel" },
          ].map((stat, i) => (
            <div key={i} className="px-6 md:px-10 py-5">
              <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] gradient-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[var(--color-text-secondary)] mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown
            size={20}
            className="text-[var(--color-text-muted)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
