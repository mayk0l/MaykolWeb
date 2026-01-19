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
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient light */}
          <ambientLight intensity={0.4} />
          
          {/* Main directional light */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
          />
          
          {/* Accent lights based on mode */}
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color={
              mode === "dev" ? "#22D3EE" :
              mode === "business" ? "#F59E0B" :
              "#E11D48"
            }
          />
          
          {children}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
