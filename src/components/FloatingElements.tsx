"use client";

import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(231, 195, 107, 0.16) 0%, rgba(231, 195, 107, 0.05) 20%, rgba(8, 6, 4, 0.12) 42%, transparent 65%)`,
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute h-72 w-72 rounded-full blur-3xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(231, 195, 107, 0.35) 0%, rgba(231, 195, 107, 0.12) 35%, transparent 70%)",
        }}
      />
      <div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full border border-amber-500/20 animate-float-slow" />
      <div className="absolute top-1/3 right-[15%] w-32 h-32 rounded-full border border-amber-400/20 animate-float-slower" />
      <div className="absolute bottom-1/4 left-[20%] w-20 h-20 rounded-full bg-amber-500/[0.06] animate-float-slowest" />
      <div className="absolute top-2/3 right-[25%] w-28 h-28 rotate-45 border border-amber-500/20 animate-float-slow" />
      <div className="absolute top-[15%] right-[30%] w-2 h-2 rounded-full bg-amber-400/40 animate-pulse-glow" />
      <div className="absolute bottom-[30%] left-[5%] w-3 h-3 rounded-full bg-amber-300/30 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[45%] left-[50%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[15%] right-[10%] w-16 h-16 border border-amber-500/20 animate-float-slower rounded-full" />
      <div className="absolute top-[60%] left-[8%] w-1 h-1 rounded-full bg-amber-400/50 animate-pulse-glow" style={{ animationDelay: "1s" }} />
    </div>
  );
}
