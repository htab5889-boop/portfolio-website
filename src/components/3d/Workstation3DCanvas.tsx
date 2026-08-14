'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Html, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// 3D Video Editing Laptop & Timeline Model
function LaptopWorkstation({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const screenMeshRef = useRef<THREE.Mesh>(null);

  // Realistic DaVinci Resolve Timeline drawn via Canvas API
  const timelineTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // ── Dark DaVinci Resolve background ──
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, 1024, 640);

      // ── Top Menu Bar ──
      ctx.fillStyle = '#0d0d1a';
      ctx.fillRect(0, 0, 1024, 34);
      const menuItems = ['File', 'Edit', 'Trim', 'Timeline', 'Clip', 'Mark', 'View'];
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#888';
      menuItems.forEach((item, i) => {
        ctx.fillText(item, 14 + i * 72, 22);
      });

      // ── Video Preview / Viewer Panel ──
      ctx.fillStyle = '#0a0a14';
      ctx.fillRect(30, 44, 964, 300);
      // Cinematic gradient preview frame
      const previewGrad = ctx.createLinearGradient(30, 44, 994, 344);
      previewGrad.addColorStop(0, '#1a0533');
      previewGrad.addColorStop(0.3, '#0a1628');
      previewGrad.addColorStop(0.6, '#0d2847');
      previewGrad.addColorStop(1, '#1a0533');
      ctx.fillStyle = previewGrad;
      ctx.fillRect(40, 54, 944, 280);

      // Viewer timecode overlay
      ctx.fillStyle = '#00f2fe';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('01:23:15:07', 60, 80);
      ctx.fillStyle = '#666';
      ctx.font = '11px monospace';
      ctx.fillText('Timeline 1  •  4K UHD  •  23.976fps  •  Rec.709', 60, 100);

      // Transport controls (play/pause icons)
      ctx.fillStyle = '#333';
      ctx.fillRect(400, 310, 224, 24);
      const controls = ['⏮', '⏪', '⏹', '▶', '⏩', '⏭'];
      ctx.fillStyle = '#ccc';
      ctx.font = '14px sans-serif';
      controls.forEach((c, i) => {
        ctx.fillText(c, 415 + i * 36, 328);
      });

      // ── Timeline Area ──
      ctx.fillStyle = '#111122';
      ctx.fillRect(0, 360, 1024, 280);

      // Timeline ruler
      ctx.fillStyle = '#222238';
      ctx.fillRect(0, 360, 1024, 22);
      ctx.fillStyle = '#555';
      ctx.font = '9px monospace';
      for (let i = 0; i < 20; i++) {
        const x = 50 + i * 50;
        ctx.fillRect(x, 367, 1, 10);
        ctx.fillText(`${i + 1}:00`, x + 4, 378);
      }

      // Video Track V1 — Cyan clips
      ctx.fillStyle = '#182838';
      ctx.fillRect(0, 388, 1024, 42);
      ctx.fillStyle = '#444';
      ctx.font = '10px sans-serif';
      ctx.fillText('V1', 8, 414);
      // Clip 1
      const clip1Grad = ctx.createLinearGradient(50, 390, 380, 390);
      clip1Grad.addColorStop(0, '#005f73');
      clip1Grad.addColorStop(1, '#0a9396');
      ctx.fillStyle = clip1Grad;
      ctx.fillRect(50, 392, 330, 36);
      
      // Clip 2
      const clip2Grad = ctx.createLinearGradient(390, 390, 720, 390);
      clip2Grad.addColorStop(0, '#0a7e8c');
      clip2Grad.addColorStop(1, '#007f5f');
      ctx.fillStyle = clip2Grad;
      ctx.fillRect(390, 392, 330, 36);
      
      // Clip 3
      ctx.fillStyle = '#006d77';
      ctx.fillRect(730, 392, 264, 36);
      

      // Video Track V2 — Violet clips (overlay)
      ctx.fillStyle = '#1c1830';
      ctx.fillRect(0, 434, 1024, 38);
      ctx.fillStyle = '#444';
      ctx.fillText('V2', 8, 458);
      ctx.fillStyle = '#4a2080';
      ctx.fillRect(200, 437, 180, 32);
      
      ctx.fillStyle = '#5c2d91';
      ctx.fillRect(620, 437, 250, 32);
      

      // Audio Track A1 — Orange waveform blocks
      ctx.fillStyle = '#1a1820';
      ctx.fillRect(0, 476, 1024, 38);
      ctx.fillStyle = '#444';
      ctx.fillText('A1', 8, 500);
      ctx.fillStyle = '#b45309';
      ctx.globalAlpha = 0.6;
      ctx.fillRect(50, 480, 330, 30);
      
      ctx.fillStyle = '#d97706';
      ctx.fillRect(390, 480, 330, 30);
      
      ctx.fillStyle = '#b45309';
      ctx.fillRect(730, 480, 264, 30);
      
      ctx.globalAlpha = 1;

      // Audio Track A2 — Green
      ctx.fillStyle = '#151820';
      ctx.fillRect(0, 518, 1024, 36);
      ctx.fillStyle = '#444';
      ctx.fillText('A2', 8, 540);
      ctx.fillStyle = '#065f46';
      ctx.globalAlpha = 0.5;
      ctx.fillRect(50, 521, 944, 30);
      
      ctx.globalAlpha = 1;

      // ── Red Playhead ──
      ctx.fillStyle = '#ff0040';
      ctx.fillRect(420, 360, 2, 200);
      // Playhead triangle
      ctx.beginPath();
      ctx.moveTo(414, 360);
      ctx.lineTo(428, 360);
      ctx.lineTo(421, 370);
      ctx.closePath();
      ctx.fill();

      // ── Bottom Page Tab Bar (DaVinci Resolve page icons) ──
      ctx.fillStyle = '#0a0a16';
      ctx.fillRect(0, 610, 1024, 30);
      const pages = ['Media', 'Cut', 'Edit', 'Fusion', 'Color', 'Fairlight', 'Deliver'];
      ctx.font = '11px sans-serif';
      pages.forEach((p, i) => {
        ctx.fillStyle = p === 'Edit' ? '#00f2fe' : '#555';
        ctx.fillText(p, 180 + i * 100, 629);
      });
      // Active page underline
      ctx.fillStyle = '#00f2fe';
      ctx.fillRect(270, 636, 40, 2);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    // Smooth lerp camera movement based on mouse position
    const targetX = (mouse.current.x * Math.PI) / 10;
    const targetY = (mouse.current.y * Math.PI) / 12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.15}>
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Keyboard Area Glow */}
      <mesh position={[0, -0.03, 0.2]}>
        <boxGeometry args={[2.8, 0.02, 1.2]} />
        <meshStandardMaterial color="#0c0c1a" emissive="#00f2fe" emissiveIntensity={0.25} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.03, 0.95]}>
        <boxGeometry args={[0.9, 0.01, 0.6]} />
        <meshStandardMaterial color="#25253e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Laptop Screen Hinge & Shell */}
      <group position={[0, 0, -1.05]} rotation={[-0.2, 0, 0]}>
        {/* Lid Metal Backing */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.2, 2.1, 0.08]} />
          <meshStandardMaterial color="#121222" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Glowing Prince Logo Emblem */}
        <mesh position={[0, 1.1, -0.05]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.22, 32]} />
          <meshBasicMaterial color="#00f2fe" />
        </mesh>

        {/* Display Screen - DaVinci Resolve Timeline Image */}
        <mesh ref={screenMeshRef} position={[0, 1.1, 0.045]}>
          <planeGeometry args={[3.0, 1.9]} />
          <meshBasicMaterial map={timelineTexture} toneMapped={false} />
        </mesh>

        {/* Screen Bezel */}
        <mesh position={[0, 1.1, 0.041]}>
          <planeGeometry args={[3.15, 2.05]} />
          <meshStandardMaterial color="#080812" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

// Floating DaVinci Resolve Color Wheel Object
function ColorWheel3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[2.4, 0.8, -0.5]}>
      <mesh ref={meshRef}>
        <torusGeometry args={[0.55, 0.18, 24, 48]} />
        <MeshDistortMaterial
          color="#7928ca"
          emissive="#00f2fe"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          distort={0.25}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Video Play Button Node
function PlayNode3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2.5} position={[-2.4, 1.0, -0.8]}>
      <mesh ref={meshRef} rotation={[0, 0, Math.PI / 6]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#ff0080"
          emissive="#ff0080"
          emissiveIntensity={0.5}
          wireframe
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Ambient Glowing Particle Field
function ParticleField() {
  const count = 75;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 12;
      pos[i + 1] = (Math.random() - 0.5) * 8;
      pos[i + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
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
      <pointsMaterial
        size={0.06}
        color="#00f2fe"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Canvas Loading Fallback
function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 rounded-xl glass-panel text-white">
        <div className="w-10 h-10 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="font-mono text-xs text-accent-cyan tracking-wider">LOADING 3D WORKSPACE...</p>
      </div>
    </Html>
  );
}

export default function Workstation3DCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouse.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: -(e.clientY / innerHeight) * 2 + 1,
    };
  };

  return (
    <div
      className="w-full h-full min-h-[480px] lg:min-h-[580px] relative cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0.5, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00f2fe" />
          <pointLight position={[-4, -2, -2]} intensity={2} color="#7928ca" />
          <pointLight position={[3, 2, 2]} intensity={1.2} color="#ff0080" />

          {/* 3D Elements */}
          <LaptopWorkstation mouse={mouse} />
          <ColorWheel3D />
          <PlayNode3D />
          <ParticleField />

          {/* Realistic Contact Shadow beneath workstation */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.6}
            scale={8}
            blur={2.5}
            far={4}
            color="#000000"
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
