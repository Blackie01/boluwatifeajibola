"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  unitX: number;
  unitY: number;
  unitZ: number;
  jitterRatio: number;
  size: number;
  alpha: number;
  speed: number;
  density: number;
  noiseOffset: number;
}

export default function ParticleDustEntity() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      if (!canvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      width = canvas.width = (rect.width || container.clientWidth) * dpr;
      height = canvas.height = (rect.height || container.clientHeight) * dpr;
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => updateDimensions());
    resizeObserver.observe(container);

    // Mouse position tracking for interactive particle response
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const scaleX = canvas.width / (rect.width || 1);
      const scaleY = canvas.height / (rect.height || 1);
      mouse.targetX = (e.clientX - rect.left) * scaleX;
      mouse.targetY = (e.clientY - rect.top) * scaleY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    mouse.x = width / 2;
    mouse.y = height / 2;
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;

    // Generate Particle Dust Unit Vectors (Fibonacci Sphere Layout)
    const particleCount = 700;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const unitX = Math.sin(phi) * Math.cos(theta);
      const unitY = Math.sin(phi) * Math.sin(theta);
      const unitZ = Math.cos(phi);

      // Controlled random jitter ratio (-0.05 to +0.05) so perimeter remains ultra sharp & defined
      const jitterRatio = (Math.random() - 0.5) * 0.10;

      particles.push({
        unitX,
        unitY,
        unitZ,
        jitterRatio,
        size: Math.random() * 1.8 + 1.2, // Crisp, solid dot sizing
        alpha: Math.random() * 0.35 + 0.65, // High opacity (65% - 100%) so edge dots stay sharp & vivid
        speed: Math.random() * 0.02 + 0.005,
        density: Math.random() * 20 + 1,
        noiseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;

      if (width === 0 || height === 0) {
        updateDimensions();
      }

      const centerX = width / 2;
      const centerY = height / 2;

      // Perfectly calibrated radius factor (0.78) for 100% full circle visibility inside container
      const currentRadius = (Math.min(width, height) / 2) * 0.78;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Clear canvas cleanly without any blurry background gradient fog
      ctx.clearRect(0, 0, width, height);

      // Rotation angles driven by time & mouse interaction
      const rotY = time * 0.4 + (mouse.x - centerX) * 0.0005;
      const rotX = time * 0.2 + (mouse.y - centerY) * 0.0005;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projectedPoints: { x: number; y: number; z: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Dynamic particle base position scaled to container bounds
        const particleRadius = currentRadius * (1 + p.jitterRatio);
        const baseX = p.unitX * particleRadius;
        const baseY = p.unitY * particleRadius;
        const baseZ = p.unitZ * particleRadius;

        // Organic wave motion noise
        const wave = Math.sin(time * 2 + p.noiseOffset) * (currentRadius * 0.02);
        const waveX = baseX + p.unitX * wave;
        const waveY = baseY + p.unitY * wave;
        const waveZ = baseZ + p.unitZ * wave;

        // 3D Rotation Y
        let rx = waveX * cosY - waveZ * sinY;
        let rz = waveX * sinY + waveZ * cosY;

        // 3D Rotation X
        let ry = waveY * cosX - rz * sinX;
        rz = waveY * sinX + rz * cosX;

        // Perspective Projection
        const fov = currentRadius * 4.0;
        const scale = fov / (fov + rz * 0.2);
        const projectedX = centerX + rx * scale;
        const projectedY = centerY + ry * scale;

        // High contrast alpha and crisp sizing across all particles (including outer perimeter)
        const finalAlpha = Math.max(0.45, p.alpha * (0.8 + 0.2 * ((rz + currentRadius) / (currentRadius * 2))));
        const finalSize = Math.max(1.0, p.size * (window.devicePixelRatio || 1));

        projectedPoints.push({
          x: projectedX,
          y: projectedY,
          z: rz,
          alpha: finalAlpha,
        });

        // Render Particle Dust Dot with sharp, solid fill
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, finalSize, 0, Math.PI * 2);

        if (i % 12 === 0) {
          ctx.fillStyle = `rgba(212, 175, 55, ${finalAlpha})`; // Accent gold spark (#d4af37)
        } else if (i % 20 === 0) {
          ctx.fillStyle = `rgba(224, 231, 255, ${finalAlpha})`; // Ice dust spark
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha * 0.9})`; // Pure crisp white
        }
        ctx.fill();
      }

      // Draw faint constellation links between nearby front particles
      const maxDistance = currentRadius * 0.20;
      const linkCount = projectedPoints.length;
      ctx.lineWidth = 0.6 * (window.devicePixelRatio || 1);

      for (let i = 0; i < linkCount; i += 4) {
        const pt1 = projectedPoints[i];
        if (pt1.z < 0) continue;

        for (let j = i + 1; j < Math.min(i + 14, linkCount); j++) {
          const pt2 = projectedPoints[j];
          if (pt2.z < 0) continue;

          const dx = pt1.x - pt2.x;
          const dy = pt1.y - pt2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18 * Math.min(pt1.alpha, pt2.alpha);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block absolute inset-0" />
    </div>
  );
}
