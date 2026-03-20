"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowUpRight, Rocket } from "lucide-react";

export default function CTA() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="cta" className="relative py-20 md:py-28" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-accent-blue)] rounded-full filter blur-[150px] opacity-[0.06]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] bg-[rgba(59,130,246,0.05)] mb-8">
            <Rocket size={13} className="text-[var(--color-accent-cyan)]" />
            <span className="text-xs font-medium text-[var(--color-accent-cyan)] uppercase tracking-wider">
              Next Steps
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
            Let&apos;s Build the
            <br />
            <span className="gradient-text">Future Together</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            This presentation was built in React/Next.js using the exact
            workflow we&apos;re proposing. The speed, quality, and performance
            you&apos;re seeing right now is what every client site could be.
          </p>

          {/* Next steps cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
            {[
              {
                step: "01",
                title: "Pilot Project",
                description:
                  "Pick one upcoming franchise site and build it with the new stack. Side-by-side comparison with the old workflow.",
              },
              {
                step: "02",
                title: "Team Training",
                description:
                  "Half-day workshop on the new workflow. The AI handles the code — the team learns to direct it and review.",
              },
              {
                step: "03",
                title: "Gradual Rollout",
                description:
                  "New projects go Next.js. Existing sites migrate at contract renewal. No disruption, steady transition.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * i }}
                className="glass-card p-6 group"
              >
                <div className="text-3xl font-bold font-[family-name:var(--font-display)] gradient-text mb-3">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] text-white font-semibold text-lg hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 group"
            >
              Start the Pilot
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-xs text-[var(--color-text-muted)]"
        >
          Built with React, Next.js, Tailwind CSS, and Framer Motion.
          Deployed on Vercel. Powered by Claude Code AI.
          <br />
          &copy; {new Date().getFullYear()} TopFire Media. Internal use only.
        </motion.p>
      </div>
    </section>
  );
}
