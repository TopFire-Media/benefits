"use client";

import FadeIn from "./FadeIn";
import {
  MessageCircleQuestion,
  ArrowRight,
  PenLine,
  FolderSync,
  DollarSign,
} from "lucide-react";

const concerns = [
  {
    icon: PenLine,
    concern: "Clients need to edit their own site after handoff.",
    answer:
      "We integrate a headless CMS like Sanity, Contentful, or Payload. Clients get a clean, branded editing dashboard to update text, images, and pages. No code. No risk of breaking the design. It's actually a better editing experience than the WordPress admin.",
  },
  {
    icon: FolderSync,
    concern: "What about migrating existing WordPress sites?",
    answer:
      "Migration can be incremental. We can rebuild sites one at a time as contracts renew. For clients on our hosting, we control the timeline. WordPress and Next.js can even coexist during transition.",
  },
  {
    icon: DollarSign,
    concern: "Is Vercel hosting going to cost more?",
    answer:
      "Vercel Pro is $20/month per project with generous limits. Compare that to VPS costs plus hours spent on server maintenance. When you factor in labor savings, total cost drops significantly.",
  },
];

export default function Concerns() {
  return (
    <section id="concerns" className="relative py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(245, 158, 11, 0.2)",
              background: "rgba(245, 158, 11, 0.06)",
            }}
          >
            <MessageCircleQuestion size={13} className="text-amber-400" />
            <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
              Addressing Concerns
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            But What About<span className="gradient-text">...</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every good decision deserves honest scrutiny. Here are the questions
            you&apos;re probably thinking, and the answers.
          </p>
        </FadeIn>

        <div className="space-y-5">
          {concerns.map((item, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <div className="glass-card p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/5">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(245, 158, 11, 0.1)" }}
                      >
                        <item.icon size={18} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-amber-400/70 mb-1.5 font-semibold">
                          Concern
                        </p>
                        <p
                          className="text-base font-semibold text-slate-100 leading-snug italic"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          &ldquo;{item.concern}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight
                      size={20}
                      className="text-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="md:flex-1">
                    <p className="text-xs uppercase tracking-wider text-cyan-400/70 mb-1.5 font-semibold">
                      Reality
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
