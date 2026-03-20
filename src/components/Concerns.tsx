"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  MessageCircleQuestion,
  ArrowRight,
  PenLine,
  Users,
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
    icon: Users,
    concern: "Our team knows WordPress, not React.",
    answer:
      "That's the beauty of AI-assisted development. Claude Code handles the code — our team focuses on design decisions, content strategy, and client communication. The learning curve is minimal because the AI bridges the gap. And the team's WordPress knowledge of layouts and UX still applies.",
  },
  {
    icon: FolderSync,
    concern: "What about migrating existing WordPress sites?",
    answer:
      "Migration can be incremental. We can rebuild sites one at a time as contracts renew. For clients on our hosting, we control the timeline. WordPress and Next.js can even coexist during transition — no big-bang cutover required.",
  },
  {
    icon: DollarSign,
    concern: "Is Vercel hosting going to cost more?",
    answer:
      "Vercel Pro is $20/month per project with generous limits. Compare that to VPS costs plus the hours spent on server maintenance, security patches, and troubleshooting. When you factor in labor savings, the total cost of ownership drops significantly.",
  },
];

export default function Concerns() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="concerns" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <MessageCircleQuestion size={13} className="text-amber-400" />
            <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
              Addressing Concerns
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            But What About
            <span className="gradient-text">...</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Every good decision deserves honest scrutiny. Here are the questions
            you&apos;re probably thinking, and the answers.
          </p>
        </motion.div>

        {/* Concern cards */}
        <div className="space-y-5">
          {concerns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 md:p-8 group hover:border-amber-500/10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Concern */}
                <div className="md:w-2/5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400/70 mb-1.5 font-semibold">
                        Concern
                      </p>
                      <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-text-primary)] leading-snug italic">
                        &ldquo;{item.concern}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight
                    size={20}
                    className="text-[var(--color-accent-cyan)] opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Answer */}
                <div className="md:flex-1">
                  <p className="text-xs uppercase tracking-wider text-[var(--color-accent-cyan)]/70 mb-1.5 font-semibold">
                    Reality
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
