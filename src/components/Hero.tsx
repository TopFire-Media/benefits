"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex items-center justify-center pt-28 pb-20" style={{ minHeight: "90vh" }}>
      {/* Background effects */}
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 badge-glow"
          style={{
            border: "1px solid rgba(59, 130, 246, 0.3)",
            background: "rgba(59, 130, 246, 0.08)",
          }}
        >
          <Zap size={14} className="text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">
            Internal Strategy Presentation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Future of
          <br />
          <span className="gradient-text">Franchise Web</span>
          <br />
          Development
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          How React, Next.js, and AI-powered development can transform
          TopFire Media&apos;s workflow&mdash;delivering faster, more secure, and
          infinitely scalable franchise websites.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          <a
            href="#problem"
            className="px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
            }}
          >
            See the Case
          </a>
          <a
            href="#comparison"
            className="px-8 py-3.5 rounded-full text-slate-400 hover:text-white transition-all duration-300"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            Jump to Comparison
          </a>
        </motion.div>

        {/* Stats bar */}
        <div
          className="hero-stats-screen inline-grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {[
            { value: "3-5x", label: "Faster Development" },
            { value: "100", label: "Lighthouse Score" },
            { value: "$0", label: "Server Maintenance" },
            { value: "99.99%", label: "Uptime on Vercel" },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-8 md:px-10 py-5"
              style={{
                borderLeft:
                  i === 1 || i === 3
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : i === 2
                    ? "none"
                    : "none",
                borderRight:
                  i === 0 || i === 2
                    ? "none"
                    : "none",
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1.5 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Print-only static stats bar — the screen version uses inline-grid
            which Chrome's print engine collapses unpredictably. */}
        <table className="hero-stats-print" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              {[
                { value: "3-5x", label: "Faster Development" },
                { value: "100", label: "Lighthouse Score" },
                { value: "$0", label: "Server Maintenance" },
                { value: "99.99%", label: "Uptime on Vercel" },
              ].map((stat) => (
                <td key={stat.value}>
                  <div className="hero-stats-print-value">{stat.value}</div>
                  <div className="hero-stats-print-label">{stat.label}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={mounted ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
