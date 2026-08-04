"use client";

import { useEffect, useState } from "react";

export default function RenaissanceBackground() {
  const [pointer, setPointer] = useState({ x: 50, y: 42 });

  const painting = "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg";

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPointer({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:1400px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,158,74,0.24),transparent_28%),linear-gradient(135deg,#140d08_0%,#24150c_46%,#080604_100%)]" />

      <div
        className="absolute inset-[-8%] opacity-75"
        style={{
          transform: `translate3d(${(pointer.x - 50) * -0.35}px, ${(pointer.y - 42) * -0.3}px, 0) scale(1.18)`,
        }}
      >
        <img
          src={painting}
          alt="Renaissance ceiling fresco"
          className="h-full w-full object-cover object-center"
          style={{ filter: "saturate(0.9) contrast(1.06) brightness(0.78) sepia(0.32) blur(0.2px)" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          transform: `translate3d(${(pointer.x - 50) * 0.22}px, ${(pointer.y - 42) * 0.2}px, 0)`,
          background:
            "radial-gradient(circle at center, rgba(245, 223, 184, 0.12) 0%, rgba(245, 223, 184, 0.06) 18%, transparent 52%), radial-gradient(circle at 50% 22%, rgba(255, 255, 255, 0.09) 0%, transparent 26%)",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.04)_0%,transparent_30%,rgba(255,255,255,0.03)_70%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,6,4,0.16)_55%,rgba(8,6,4,0.62)_100%)]" />
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255, 219, 146, 0.18) 0%, rgba(255, 219, 146, 0.08) 14%, transparent 34%)`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
