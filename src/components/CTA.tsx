"use client";

import FadeIn from "./FadeIn";
import { ArrowUpRight, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "#3b82f6",
            filter: "blur(150px)",
            opacity: 0.08,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <FadeIn>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
            style={{
              border: "1px solid rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.06)",
            }}
          >
            <Rocket size={13} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              Next Steps
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Build the
            <br />
            <span className="gradient-text">Future Together</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            This presentation was built in React/Next.js using the exact
            workflow we&apos;re proposing. The speed, quality, and performance
            you&apos;re seeing right now is what every client site could be.
          </p>
        </FadeIn>

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
                "Half-day workshop on the new workflow. Developers learn how AI accelerates their development and amplifies their expertise.",
            },
            {
              step: "03",
              title: "Gradual Rollout",
              description:
                "New projects go Next.js. Existing sites migrate at contract renewal. No disruption, steady transition.",
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={0.1 * i}>
              <div className="glass-card p-6 h-full">
                <div
                  className="text-3xl font-bold gradient-text mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.25)",
            }}
          >
            Start the Pilot
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </FadeIn>

        <p className="mt-16 text-xs text-slate-600">
          Built with React, Next.js, Tailwind CSS, and Motion. Deployed on
          Vercel. Powered by Claude Code AI.
          <br />
          &copy; {new Date().getFullYear()} TopFire Media. Internal use only.
        </p>
      </div>
    </section>
  );
}
