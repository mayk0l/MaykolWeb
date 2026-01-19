"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AudioVisualizerProps {
  frequencyData: Uint8Array | null;
  bassLevel: number;
  midLevel: number;
  highLevel: number;
  isPlaying: boolean;
}

export default function AudioVisualizer({
  frequencyData,
  bassLevel,
  isPlaying,
}: AudioVisualizerProps) {
  const barsRef = useRef<THREE.Group>(null);
  const barCount = 32;

  // Create bar geometries
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, i) => ({
      index: i,
      angle: (i / barCount) * Math.PI * 2,
      baseHeight: 0.1,
    }));
  }, [barCount]);

  useFrame(() => {
    if (!barsRef.current || !frequencyData) return;

    barsRef.current.children.forEach((bar, i) => {
      const frequencyValue = frequencyData[Math.floor(i * (frequencyData.length / barCount))] / 255;
      const targetScale = isPlaying ? 0.1 + frequencyValue * 2 : 0.1;
      
      // Smooth scaling
      bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, targetScale, 0.3);
    });

    // Rotate the whole visualizer
    if (isPlaying) {
      barsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={barsRef}>
      {bars.map((bar) => {
        const x = Math.cos(bar.angle) * 2;
        const z = Math.sin(bar.angle) * 2;

        return (
          <mesh
            key={bar.index}
            position={[x, 0, z]}
            rotation={[0, -bar.angle, 0]}
          >
            <boxGeometry args={[0.15, 1, 0.15]} />
            <meshStandardMaterial
              color="#E11D48"
              emissive="#E11D48"
              emissiveIntensity={bassLevel * 0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
      
      {/* Center ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#E11D48" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
