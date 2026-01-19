"use client";

import { useMemo, useState } from "react";
import * as THREE from "three";
import type { Mode } from "@/types";
import { MODES } from "@/lib/constants";

interface ParticleFieldProps {
  count?: number;
  mode: Mode;
}

// Seeded random number generator for deterministic results
function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export default function ParticleField({ count = 500, mode }: ParticleFieldProps) {
  // Use state to store the seed once on mount
  const [seed] = useState(() => 12345);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color = new THREE.Color(MODES[mode].color);
    const random = seededRandom(seed);

    for (let i = 0; i < count; i++) {
      // Spread particles in a sphere
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = 5 + random() * 10;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Vary color slightly
      const hsl = { h: 0, s: 0, l: 0 };
      color.getHSL(hsl);
      const variedColor = new THREE.Color().setHSL(
        hsl.h + (random() - 0.5) * 0.1,
        hsl.s,
        hsl.l + (random() - 0.5) * 0.2
      );

      colors[i * 3] = variedColor.r;
      colors[i * 3 + 1] = variedColor.g;
      colors[i * 3 + 2] = variedColor.b;
    }

    return { positions, colors };
  }, [count, mode, seed]);

  // Static particles - no animation for performance
  return (
    <points rotation={[0.1, 0.2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
