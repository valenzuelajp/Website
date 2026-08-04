"use client";

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute left-[10%] top-[18%] h-3 w-3 rounded-full border border-amber-300/20 animate-float-slow" />
      <div className="absolute left-[22%] top-[34%] h-2 w-2 rounded-full border border-white/15 animate-float-slower" />
      <div className="absolute right-[18%] top-[22%] h-3 w-3 rounded-full border border-amber-400/18 animate-float-slowest" />
      <div className="absolute right-[28%] top-[48%] h-2 w-2 rounded-full border border-amber-200/18 animate-float-slow" />
      <div className="absolute left-[30%] bottom-[22%] h-4 w-4 rounded-full border border-amber-500/12 animate-float-slow" />
      <div className="absolute right-[12%] bottom-[18%] h-5 w-5 rounded-full border border-white/10 animate-float-slower" />
    </div>
  );
}
