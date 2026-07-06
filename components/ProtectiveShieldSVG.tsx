import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProtectiveShieldSVG() {
  const containerRef = useRef<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Match BallotBoxSVG: start when top enters 80%, end when bottom reaches 50% (middle of screen)
    offset: ["start 80%", "end 70%"]
  });

  // The dashed animation
  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Fade in the solid stroke at the very end to seamlessly cover any browser path-length gaps
  const fixOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  // Combined path to draw sequentially
  const combinedPath = [
    // 1. Outer Shield
    "M 50 15 L 80 20 Q 80 60, 50 90 Q 20 60, 20 20 L 50 15",
    // 2. Inner Shield
    "M 50 25 L 70 29 Q 70 55, 50 78 Q 30 55, 30 29 L 50 25",
    // 3. User Head
    "M 50 35 A 6 6 0 1 1 50 47 A 6 6 0 1 1 50 35 Z",
    // 4. User Shoulders
    "M 41 62 A 9 9 0 0 1 59 62",
    // 5. Left tech line
    "M 10 45 L 20 45",
    "M 11 45 A 1 1 0 0 1 9 45 A 1 1 0 0 1 11 45",
    // 6. Right tech line
    "M 90 55 L 80 55",
    "M 91 55 A 1 1 0 0 1 89 55 A 1 1 0 0 1 91 55"
  ].join(" ");

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[300px] max-h-[300px]"
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
