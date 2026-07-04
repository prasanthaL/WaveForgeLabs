"use client";

import { useRef, useEffect } from "react";

/**
 * Custom hook that tracks the cursor position relative to a container element.
 * It dynamically sets --mouse-x and --mouse-y CSS properties directly on the element's style.
 * This is used for high-performance, GPU-accelerated radial glow and spotlight effects.
 */
export function useCardSpotlight() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return containerRef;
}
