// ToroidalHaloModel.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function ToroidalHalo({ color = "#ff6bcb", opacity = 0.35, radius = 1.6, tube = 0.5 }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, tube, 64, 128]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        emissive={color}
        emissiveIntensity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function AccretionDisk({ radius = 1.5, width = 0.3, color = "#88aaff" }) {
  return (
    <mesh rotation={[0, 0, 0]}>
      <ringGeometry args={[radius - width, radius + width, 64]} />
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function BlackHoleCore({ radius = 0.3 }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="#000000" emissive="#111" />
    </mesh>
  );
}

export default function ToroidalHaloModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade={true} speed={1} />
      <BlackHoleCore />
      <AccretionDisk />
      <ToroidalHalo />
      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  );
}
