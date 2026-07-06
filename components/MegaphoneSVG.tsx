import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MegaphoneSVG() {
  const containerRef = useRef<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 70%"]
  });

  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const fixOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const combinedPath = [
    // --- Double Note (Left) ---
    // Head 1
    "M 30 70 A 6 5 0 1 1 18 70 A 6 5 0 1 1 30 70",
    // Stem 1
    "M 30 70 L 30 25",
    // Head 2
    "M 55 60 A 6 5 0 1 1 43 60 A 6 5 0 1 1 55 60",
    // Stem 2
    "M 55 60 L 55 15",
    // Beam
    "M 30 25 L 55 15 L 55 21 L 30 31 L 30 25",
    
    // --- Single Note (Right) ---
    // Head
    "M 73 75 A 6 5 0 1 1 61 75 A 6 5 0 1 1 73 75",
    // Stem
    "M 73 75 L 73 30",
    // Flag (wavy shape)
    "M 73 30 Q 87 30, 87 50 Q 80 40, 73 40",
    
    // --- Sparkles (Magic / Creative Lab Vibe) ---
    // Top Left Sparkle
    "M 15 10 Q 15 15, 10 15 Q 15 15, 15 20 Q 15 15, 20 15 Q 15 15, 15 10",
    // Bottom Right Sparkle
    "M 90 85 Q 90 90, 85 90 Q 90 90, 90 95 Q 90 90, 95 90 Q 90 90, 90 85",
    // Center Floating Sparkle
    "M 64 37 Q 64 40, 61 40 Q 64 40, 64 43 Q 64 40, 67 40 Q 64 40, 64 37"
  ].join(" ");

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[350px] max-h-[350px]"
    >
      {/* Base faint path */}
      <path
        d={combinedPath}
        stroke="#e5e7eb"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Animated highlight path (dashed) */}
      <motion.path
        d={combinedPath}
        stroke="#000000"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: pathDraw }}
      />

      {/* Solid highlight path that fades in at the very end to guarantee 100% gapless coverage */}
      <motion.path
        d={combinedPath}
        stroke="#000000"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: fixOpacity }}
      />
    </svg>
  );
}
