"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import LightUpText from "./LightUpText";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSnippet() {
  const containerRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!boxRef.current) return;
    const observer = new ResizeObserver(() => {
      if (boxRef.current) {
        setDims({ w: boxRef.current.offsetWidth, h: boxRef.current.offsetHeight });
      }
    });
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathDraw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const leftPath = `
    M ${dims.w / 2} 0
    L 0 0
    L 0 ${dims.h}
    L ${dims.w / 2} ${dims.h}
  `;

  const rightPath = `
    M ${dims.w / 2} 0
    L ${dims.w} 0
    L ${dims.w} ${dims.h}
    L ${dims.w / 2} ${dims.h}
  `;

  const aboutText = `What distinguishes me from the typical researcher, consultant, or R&D professional is not simply that I work across these different spaces. It is that I know how to connect them.

I understand research from the inside because I produce it. I understand research development because I support proposals, funding pipelines, partnerships, and institutional strategy. I understand impact because I help evidence become useful beyond academia. And I understand audiences because I have spent years communicating through stages, music, poetry, panels, and public events.

That is my edge. Turning ideas into public value and social change.`;

  return (
    <section 
      ref={containerRef}
      className="bg-white min-h-[70vh] py-24 lg:py-32 px-6 lg:px-12 flex flex-col justify-center relative"
    >
      <div className="relative h-full max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left Side */}
        <div className="lg:sticky lg:top-32 self-start lg:col-span-4 relative">
          {/* Animated SVG Border Overlay */}
          {dims.w > 0 && (
            <svg
              className="absolute top-0 left-0 pointer-events-none z-10"
              style={{
                width: dims.w,
                height: dims.h,
                overflow: "visible",
              }}
            >
              {/* Base faint border */}
              <rect
                x="0"
                y="0"
                width={dims.w}
                height={dims.h}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1.5"
              />
              {/* Left flowing animated border */}
              <motion.path
                d={leftPath}
                fill="none"
                stroke="#000"
                strokeWidth="2"
                style={{ pathLength: pathDraw }}
              />
              {/* Right flowing animated border */}
              <motion.path
                d={rightPath}
                fill="none"
                stroke="#000"
                strokeWidth="2"
                style={{ pathLength: pathDraw }}
              />
            </svg>
          )}

          <div 
            ref={boxRef}
            className="group p-8 lg:p-10 bg-[#FAFAFA] flex flex-col justify-between min-h-[320px] relative z-0"
          >
            <div>
              <p className="text-black font-semibold mb-6 text-lg leading-snug">
                Ever wondered how ideas move across disciplines, sectors, and
                creative forms?
              </p>
              <p className="text-[#666666] font-medium leading-relaxed">
                I embody that movement. My work travels from researching the
                democracy–development nexus to research development, grant strategy,
                impact, policy engagement, and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-8">
          <h2
            className="text-3xl uppercase md:text-4xl font-medium mb-8 text-black"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            The Bolu Ajibola Difference
          </h2>

          <LightUpText
            text={aboutText}
            styles=""
            textClassName="text-base  leading-[1.6] font-medium whitespace-pre-line"
            activeColor="#666666"
            inactiveColor="#E5E7EB"
          />
        </div>
      </div>
    </section>
  );
}
