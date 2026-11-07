import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PoliceOfficerSVG() {
  const containerRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Match ProtectiveShieldSVG / BallotBoxSVG timing
    offset: ["start 80%", "end 70%"]
  });

  // The drawing animation
  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Fade in the solid stroke at the very end to seamlessly cover any browser path-length gaps
  const fixOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  // Combined path to draw sequentially (top to bottom)
  const combinedPath = [
    // 1. Cap crown (wide top narrowing into the band)
    "M 37 32 Q 33 29, 30 24 Q 29 19, 38 17 Q 50 13, 62 17 Q 71 19, 70 24 Q 67 29, 63 32",
    // 2. Cap badge
    "M 47 20 L 53 20 L 53 23 Q 53 25.5, 50 26.5 Q 47 25.5, 47 23 Z",
    // 3. Cap band
    "M 37 32 L 63 32 L 63 36 L 37 36 Z",
    // 4. Visor
    "M 37 36 Q 50 40, 63 36",
    // 5. Head with ears
    "M 37 37 Q 34.5 39, 34.5 43 Q 34.5 47, 37 48 Q 38 55, 43 59 Q 47 62, 50 62 Q 53 62, 57 59 Q 62 55, 63 48 Q 65.5 47, 65.5 43 Q 65.5 39, 63 37",
    // 6. Neck
    "M 44 59.5 L 44 63.5",
    "M 56 59.5 L 56 63.5",
    // 7. Shoulders & torso
    "M 41 63 Q 31 66, 25 69 Q 19 72, 18 80 L 18 87 L 82 87 L 82 80 Q 81 72, 75 69 Q 69 66, 59 63",
    // 8. Collar
    "M 41 63 L 46 71 L 50 68 L 54 71 L 59 63",
    // 9. Shoulder epaulette
    "M 26 76 L 35 72 A 1.2 1.2 0 0 1 36 74.2 L 27 78.2 A 1.2 1.2 0 0 1 26 76 Z",
    // 10. Chest badge
    "M 63 74 L 68 74 L 68 77 Q 68 79, 65.5 80 Q 63 79, 63 77 Z",
    // 11. Left tech line
    "M 6 45 L 16 45",
    "M 7 45 A 1 1 0 0 1 5 45 A 1 1 0 0 1 7 45",
    // 12. Right tech line
    "M 94 55 L 84 55",
    "M 95 55 A 1 1 0 0 1 93 55 A 1 1 0 0 1 95 55"
  ].join(" ");

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[500px] max-h-[500px]"
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
