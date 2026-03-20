"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start as null (server) → false (client mount) → true (in view)
  const [state, setState] = useState<"server" | "hidden" | "visible">("server");

  useEffect(() => {
    // On client mount, hide the element and start observing
    setState("hidden");

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setState("visible"), delay * 1000);
          } else {
            setState("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-20px" }
    );

    // Small delay before observing so the "hidden" state can apply first
    requestAnimationFrame(() => {
      observer.observe(el);
    });

    return () => observer.unobserve(el);
  }, [delay]);

  const directionMap = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(24px)",
    right: "translateX(-24px)",
  };

  const style: React.CSSProperties =
    state === "server"
      ? {} // Fully visible on server render (no flash of invisible content)
      : state === "hidden"
      ? {
          opacity: 0,
          transform: directionMap[direction],
          transition: "none",
        }
      : {
          opacity: 1,
          transform: "translate(0, 0)",
          transition:
            "opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
