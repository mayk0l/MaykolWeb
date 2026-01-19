"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import type { Mode } from "@/types";

interface SceneProps {
  mode: Mode;
  className?: string;
  children: React.ReactNode;
}

export default function Scene({ mode, className, children }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={1}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          {/* Simple lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          
          {/* Single accent light */}
          <pointLight
            position={[-5, -5, -5]}
            intensity={0.3}
            color={mode === "dev" ? "#22D3EE" : "#F59E0B"}
          />
          
          {children}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
