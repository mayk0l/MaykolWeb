"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mode } from "@/types";
import { MODES } from "@/lib/constants";

interface PrismProps {
  mode: Mode;
}

export default function Prism({ mode }: PrismProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const targetColor = useRef(new THREE.Color(MODES[mode].color));

  useEffect(() => {
    targetColor.current.set(MODES[mode].color);
  }, [mode]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Simple slow rotation
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
    
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.05;
      wireRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group>
      {/* Main solid shape */}
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color={MODES[mode].color}
          transparent
          opacity={0.15}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh ref={wireRef} scale={1.8}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial
          color={MODES[mode].color}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}
