"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useLenis } from "lenis/react";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create 1,500 particles distributed in a structured 3D space
  const count = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute particles in a spherical/box shell to give space depth
      const radius = 10 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates between -1 and 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track scroll position using Lenis to dynamically shift particles on scroll
  const scrollOffset = useRef(0);
  useLenis(({ scroll, limit }) => {
    if (limit > 0) {
      scrollOffset.current = scroll / limit;
    }
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      // Slow continuous orbital rotation + scroll progression
      const baseRotationY = time * 0.015 + scrollOffset.current * 0.6;
      const baseRotationX = time * 0.008 + scrollOffset.current * 0.3;

      // Mouse reactive drift (lerped for smooth easing)
      const targetRotationY = baseRotationY + mouse.current.x * 0.15;
      const targetRotationX = baseRotationX + mouse.current.y * 0.15;
      
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;

      // Gentle breathing animation (size pulsing)
      const scale = 1 + Math.sin(time * 0.4) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#c89b3c" // Tactical amber gold
        size={0.14}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.45}
      />
    </points>
  );
}

export default function HUDParticles() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none bg-black overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
