"use client";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 left-[10%] w-24 h-24 rounded-full border border-purple-500/10 animate-float-slow" />
      <div className="absolute top-1/3 right-[15%] w-32 h-32 rounded-full border border-amber-500/10 animate-float-slower" />
      <div className="absolute bottom-1/4 left-[20%] w-20 h-20 rounded-full bg-purple-500/[0.04] animate-float-slowest" />
      <div className="absolute top-2/3 right-[25%] w-28 h-28 rotate-45 border border-amber-500/10 animate-float-slow" />
      <div className="absolute top-[15%] right-[30%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse-glow" />
      <div className="absolute bottom-[30%] left-[5%] w-3 h-3 rounded-full bg-purple-400/30 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[45%] left-[50%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[15%] right-[10%] w-16 h-16 border border-purple-500/10 animate-float-slower rounded-full" />
      <div className="absolute top-[60%] left-[8%] w-1 h-1 rounded-full bg-amber-400/40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
    </div>
  );
}
