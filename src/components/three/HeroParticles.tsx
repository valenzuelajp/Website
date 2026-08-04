"use client";

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-amber-300/35 blur-[1px] animate-float-slow" />
      <div className="absolute left-[22%] top-[34%] h-2 w-2 rounded-full bg-white/20 blur-[1px] animate-float-slower" />
      <div className="absolute right-[18%] top-[22%] h-3 w-3 rounded-full bg-amber-400/30 blur-[1px] animate-float-slowest" />
      <div className="absolute right-[28%] top-[48%] h-2 w-2 rounded-full bg-amber-200/30 blur-[1px] animate-pulse-glow" />
      <div className="absolute left-[30%] bottom-[22%] h-4 w-4 rounded-full bg-amber-500/12 blur-lg animate-float-slow" />
      <div className="absolute right-[12%] bottom-[18%] h-5 w-5 rounded-full bg-white/8 blur-xl animate-float-slower" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,219,146,0.1),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_30%_80%,rgba(231,195,107,0.08),transparent_30%)] opacity-80" />
    </div>
  );
}
