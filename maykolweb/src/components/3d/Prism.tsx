"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import type { Mode } from "@/types";
import { MODES } from "@/lib/constants";

interface PrismProps {
  mode: Mode;
}

export default function Prism({ mode }: PrismProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetColor = useRef(new THREE.Color(MODES[mode].color));
  const currentColor = useRef(new THREE.Color(MODES[mode].color));

  // Update target color when mode changes
  useEffect(() => {
    targetColor.current.set(MODES[mode].color);
  }, [mode]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;

    // Mouse interaction
    const mouseX = state.pointer.x * 0.3;
    const mouseY = state.pointer.y * 0.3;
    
    meshRef.current.rotation.x += mouseY * delta * 2;
    meshRef.current.rotation.z += mouseX * delta * 2;

    // Lerp color
    currentColor.current.lerp(targetColor.current, delta * 2);
  });

  // Create icosahedron geometry for the prism effect
  const geometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(1.5, 0);
  }, []);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.05, 0.05]}
    >
      <mesh ref={meshRef} geometry={geometry} scale={1}>
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.3}
          chromaticAberration={0.3}
          anisotropy={0.2}
          distortion={0.3}
          distortionScale={0.3}
          temporalDistortion={0.05}
          iridescence={0.8}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1000]}
          color={MODES[mode].color}
          transparent
          opacity={0.85}
        />
      </mesh>
      
      {/* Minimal Wireframe */}
      <mesh scale={1.6} rotation={[0.5, 0.5, 0]} >
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial
          color={MODES[mode].color}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}
