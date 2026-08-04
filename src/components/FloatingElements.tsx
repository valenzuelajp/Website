"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowCoords, setWindowCoords] = useState({ x: 0, y: 0 });
  const [timecode, setTimecode] = useState("00:00:00:00");
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      // Coordinates for relative translation calculations
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      cursor.current = { x, y };
      setWindowCoords({ x: event.clientX, y: event.clientY });

      if (animationRef.current) {
        animationRef.current.cancel();
      }

      animationRef.current = animate(cursor.current, {
        x,
        y,
        duration: 900,
        ease: "out(3)",
        onUpdate: () => {
          setMousePosition({ x: cursor.current.x, y: cursor.current.y });
        },
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Dynamic Timecode tick (simulates digital frame recording counter)
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const ms = Math.floor((elapsed % 1000) / 10).toString().padStart(2, "0");
      const secs = Math.floor((elapsed / 1000) % 60).toString().padStart(2, "0");
      const mins = Math.floor((elapsed / 60000) % 60).toString().padStart(2, "0");
      const hrs = Math.floor((elapsed / 3600000) % 24).toString().padStart(2, "0");
      setTimecode(`${hrs}:${mins}:${secs}:${ms}`);
    }, 33);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      clearInterval(interval);
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, []);

  return (
    <>
      {/* Dynamic cursor light bloom following the cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 320px at ${windowCoords.x}px ${windowCoords.y}px, rgba(200, 155, 60, 0.045) 0%, transparent 100%)`,
        }}
      />

      {/* Main HUD overlay structure */}
      <div className="fixed inset-0 pointer-events-none z-40 select-none font-mono text-[9px] tracking-[0.24em] text-amber-500/40 uppercase p-6 md:p-8 flex flex-col justify-between">
        
        {/* Top Header Grid Row */}
        <div className="flex justify-between items-start w-full">
          {/* Top-Left Status */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>SYS STATUS: ACTIVE</span>
            </div>
            <div className="text-zinc-600 text-[8px]">
              REF_ID: 1916483C
            </div>
          </div>

          {/* Center Brackets / Viewfinder Overlay */}
          <div className="hidden lg:flex flex-col items-center gap-1 opacity-70">
            <div className="w-16 h-3 border-t border-x border-amber-500/20 rounded-t-xs" />
            <span className="text-[8px] tracking-[0.3em] text-amber-500/30">VIEWFINDER / 1.0X</span>
          </div>

          {/* Top-Right Timecode */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="text-amber-500/50">{timecode}</div>
            <div className="text-zinc-600 text-[8px]">MODE: TERMINAL_HUD</div>
          </div>
        </div>

        {/* Outer Frame Corner Brackets */}
        <div className="absolute inset-5 md:inset-7 border border-white/[0.015] pointer-events-none">
          {/* Top-Left Corner */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-amber-500/30 -mt-[1px] -ml-[1px]" />
          {/* Top-Right Corner */}
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-amber-500/30 -mt-[1px] -mr-[1px]" />
          {/* Bottom-Left Corner */}
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-amber-500/30 -mb-[1px] -ml-[1px]" />
          {/* Bottom-Right Corner */}
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-amber-500/30 -mb-[1px] -mr-[1px]" />
        </div>

        {/* Bottom Status Grid Row */}
        <div className="flex justify-between items-end w-full">
          {/* Bottom-Left Coordinates */}
          <div className="flex flex-col gap-1.5">
            <div className="text-zinc-600 text-[8px]">CURSOR_COORDS</div>
            <div>
              X: {windowCoords.x.toString().padStart(4, "0")}PX // Y: {windowCoords.y.toString().padStart(4, "0")}PX
            </div>
          </div>

          {/* Bottom-Center Scrolling Marquee Ticker */}
          <div className="hidden lg:block overflow-hidden max-w-xs border-x border-amber-500/10 px-6 opacity-60">
            <div className="animate-marquee whitespace-nowrap text-[8px] text-zinc-500/60 tracking-[0.3em]">
              VALENZUELA_JP // CREATIVE TECHNOLOGY // DEVELOPER // IOT RESEARCHER // NEXT.JS // THREE.JS // WEBGL // GSAP // MOTION.DEV // SHADCN // TAILWIND // 
            </div>
          </div>

          {/* Bottom-Right Location Telemetry */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="text-zinc-600 text-[8px]">LOC_INDEX</div>
            <div>BACOOR, CA // 14.452° N, 120.940° E</div>
          </div>
        </div>
      </div>
    </>
  );
}
