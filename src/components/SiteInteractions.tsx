"use client";

import { useEffect } from "react";
import { animate } from "animejs";

export default function SiteInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    let frameId = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        root.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
        root.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    if (reduceMotion) {
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
      };
    }

    const cleanups: Array<() => void> = [];

    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    magneticTargets.forEach((target) => {
      let currentAnimation: ReturnType<typeof animate> | null = null;
      const strength = Number(target.dataset.magneticStrength ?? "18");

      const onPointerMove = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        const translateX = px * strength;
        const translateY = py * strength;

        if (currentAnimation) {
          currentAnimation.cancel();
        }

        currentAnimation = animate(target, {
          translateX: `${translateX.toFixed(2)}px`,
          translateY: `${translateY.toFixed(2)}px`,
          scale: 1.02,
          duration: 360,
          ease: "out(4)",
        });
      };

      const onPointerLeave = () => {
        if (currentAnimation) {
          currentAnimation.cancel();
        }

        currentAnimation = animate(target, {
          translateX: "0px",
          translateY: "0px",
          scale: 1,
          duration: 420,
          ease: "out(4)",
        });
      };

      target.addEventListener("pointermove", onPointerMove);
      target.addEventListener("pointerleave", onPointerLeave);

      cleanups.push(() => {
        target.removeEventListener("pointermove", onPointerMove);
        target.removeEventListener("pointerleave", onPointerLeave);
        if (currentAnimation) {
          currentAnimation.cancel();
        }
      });
    });

    const tiltTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    tiltTargets.forEach((target) => {
      let currentAnimation: ReturnType<typeof animate> | null = null;
      const tiltAmount = Number(target.dataset.tiltAmount ?? "5");

      target.style.transformStyle = "preserve-3d";
      target.style.willChange = "transform";

      const onPointerMove = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        const rotateY = px * tiltAmount;
        const rotateX = -py * tiltAmount;
        const translateX = px * 6;
        const translateY = py * 6;

        if (currentAnimation) {
          currentAnimation.cancel();
        }

        currentAnimation = animate(target, {
          rotateX: `${rotateX.toFixed(2)}deg`,
          rotateY: `${rotateY.toFixed(2)}deg`,
          translateX: `${translateX.toFixed(2)}px`,
          translateY: `${translateY.toFixed(2)}px`,
          scale: 1.01,
          duration: 420,
          ease: "out(4)",
        });
      };

      const onPointerLeave = () => {
        if (currentAnimation) {
          currentAnimation.cancel();
        }

        currentAnimation = animate(target, {
          rotateX: "0deg",
          rotateY: "0deg",
          translateX: "0px",
          translateY: "0px",
          scale: 1,
          duration: 500,
          ease: "out(4)",
        });
      };

      target.addEventListener("pointermove", onPointerMove);
      target.addEventListener("pointerleave", onPointerLeave);

      cleanups.push(() => {
        target.removeEventListener("pointermove", onPointerMove);
        target.removeEventListener("pointerleave", onPointerLeave);
        if (currentAnimation) {
          currentAnimation.cancel();
        }
      });
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
