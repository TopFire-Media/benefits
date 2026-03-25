"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ResourceNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/tfm-logo.png"
            alt="TopFire Media"
            width={36}
            height={36}
            className="rounded"
          />
          <span
            className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            TopFire Media
          </span>
        </a>

        <div className="flex items-center gap-6">
          <span
            className="text-sm text-slate-500 hidden md:inline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dev Team Resource Allocation
          </span>
          <a
            href="/"
            className="text-sm px-5 py-2 rounded-full text-white font-medium transition-shadow hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            }}
          >
            View Presentation
          </a>
        </div>
      </div>
    </nav>
  );
}
