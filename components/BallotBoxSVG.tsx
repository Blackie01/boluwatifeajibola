import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BallotBoxSVG() {
  const containerRef = useRef<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start drawing when it enters the screen, finish before it leaves
    offset: ["start 80%", "end 70%"]
  });

  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Combined path to draw sequentially from top to bottom
  const combinedPath = [
    // 1. Ballot paper sliding in (start at top center)
    "M 50 15 L 60 15 L 60 40 L 40 40 L 40 15 Z",
    // 2. Tick on ballot
    "M 45 27 L 49 31 L 55 21",
    // 3. Lid (start at top center)
    "M 50 40 L 80 40 L 80 50 L 20 50 L 20 40 Z",
    // 4. Slot hole in the middle of lid
    "M 35 45 L 65 45",
    // 5. Box body (bottom part - U shape)
    "M 25 50 L 25 90 L 75 90 L 75 50"
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
      
      {/* Animated highlight path */}
      <motion.path
        d={combinedPath}
        stroke="#000000"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: pathDraw }}
      />
    </svg>
  );
}
