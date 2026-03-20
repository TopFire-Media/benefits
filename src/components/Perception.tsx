"use client";

import FadeIn from "./FadeIn";
import { Crown, Globe, Sparkles } from "lucide-react";

const wpSide = [
  "Powers 43% of the web — your franchise site looks like everyone else's",
  "Cookie-cutter themes that clients recognize as \"just another WordPress site\"",
  "Shared hosting, slow loads, and generic design scream small business",
  "Plugin-dependent functionality that breaks and feels bolted on",
  "Admin dashboards that expose the backend and feel unprofessional",
];

const reactSide = [
  "Custom-built applications — the same technology behind Netflix, Airbnb, and Nike",
  "Bespoke components and interactions that feel premium and polished",
  "Edge-deployed, sub-second loads that signal credibility and investment",
  "Native functionality built into the architecture — nothing bolted on",
  "Clean CMS dashboards that clients are proud to use",
];

const enterpriseBrands = [
  "Netflix",
  "Nike",
  "Airbnb",
  "Hulu",
  "TikTok",
  "Notion",
  "Target",
  "Twitch",
];

export default function Perception() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              border: "1px solid rgba(251, 191, 36, 0.25)",
              background: "rgba(251, 191, 36, 0.06)",
            }}
          >
            <Crown size={13} className="text-amber-400" />
            <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
              Brand Perception
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WordPress Is the{" "}
            <span className="gradient-text-warm">Commodity</span>
            <br />
            React Is the{" "}
            <span className="gradient-text">Competitive Edge</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Franchise brands invest heavily in their image. The website is often
            the first impression for potential franchisees and customers. Which
            stack says &ldquo;premium brand&rdquo; and which says &ldquo;we
            used a template&rdquo;?
          </p>
        </FadeIn>

        {/* Side by side perception */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {/* WordPress column */}
          <FadeIn>
            <div
              className="glass-card p-6 md:p-8 h-full"
              style={{ borderColor: "rgba(239, 68, 68, 0.15)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(239, 68, 68, 0.1)" }}
                >
                  <Globe size={20} className="text-red-400" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-red-400"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    WordPress / Elementor
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    What the market sees
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {wpSide.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#ef4444" }}
                    />
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* React column */}
          <FadeIn delay={0.1}>
            <div
              className="glass-card p-6 md:p-8 h-full gradient-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59, 130, 246, 0.1)" }}
                >
                  <Sparkles size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-cyan-400"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    React / Next.js
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    What the market sees
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {reactSide.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#06b6d4" }}
                    />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Enterprise brands bar */}
        <FadeIn delay={0.15}>
          <div className="glass-card p-6 md:p-8 text-center rounded-2xl">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-4 font-semibold">
              Brands built on React / Next.js
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-5">
              {enterpriseBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-lg md:text-xl font-bold text-slate-300/40"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              When a potential franchisee compares our client&apos;s site to the
              competition, the technology behind it shapes their perception of
              the brand. A fast, polished, custom-built site signals a
              franchise worth investing in.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
