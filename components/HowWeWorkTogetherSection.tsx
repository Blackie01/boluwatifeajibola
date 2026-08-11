"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "1",
    title: "Start with a conversation",
    description: "We discuss your idea, challenge, event or project.",
  },
  {
    number: "2",
    title: "Clarify the need",
    description: "I help identify what kind of support would be most useful.",
  },
  {
    number: "3",
    title: "Shape the work",
    description: "We agree the format, scope, timeline and expected outcome.",
  },
  {
    number: "4",
    title: "Deliver value",
    description: "I support the work through research, strategy, facilitation, creativity or engagement.",
  },
];

export default function HowWeWorkTogetherSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll over this section for the animated gold progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  // Scale progress for the gold line overlay
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#0C0C0C] text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-medium tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            How we can work together
          </h2>
          <div className="h-[2px] w-[80px] bg-white" />
        </motion.div>

        {/* Desktop View: Horizontal Linear-style Step Process with Gold Progress Line */}
        <div className="hidden md:block relative pt-6">
          {/* Base Track (Dark Gray Line) */}
          <div className="absolute top-[35px] left-0 right-0 h-[1px] bg-white/15" />

          {/* Animated Gold Overlay Line */}
          <motion.div
            style={{ scaleX: scaleProgress, transformOrigin: "left" }}
            className="absolute top-[35px] left-0 right-0 h-[1px] bg-[#d4af37] z-10"
          />

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-4 gap-8 lg:gap-12 relative z-20">
            {steps.map((step, idx) => {
              const threshold = idx / (steps.length - 1);
              const nodeBg = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#0C0C0C", "#d4af37"]
              );
              const nodeBorder = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["rgba(255,255,255,0.3)", "#d4af37"]
              );
              const nodeScale = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                [1, 1.3]
              );

              return (
                <div key={step.number} className="flex flex-col gap-6 group">
                  {/* Node Dot on the line */}
                  <div className="h-[18px] flex items-center">
                    <motion.div
                      style={{
                        backgroundColor: nodeBg,
                        borderColor: nodeBorder,
                        scale: nodeScale,
                      }}
                      className="w-3.5 h-3.5 rounded-full border-2 bg-[#0C0C0C] shadow-sm transition-shadow duration-300"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-xl lg:text-2xl font-medium text-white tracking-tight leading-snug"
                      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#a0a0a0] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline with Gold Progress Line */}
        <div className="block md:hidden relative pl-8 pt-2">
          {/* Vertical Base Track */}
          <div className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-white/15" />

          {/* Vertical Animated Gold Overlay Line */}
          <motion.div
            style={{ scaleY: scaleProgress, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-[7px] w-[1px] bg-[#d4af37] z-10"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => {
              const threshold = idx / (steps.length - 1);
              const nodeBg = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["#0C0C0C", "#d4af37"]
              );
              const nodeBorder = useTransform(
                scrollYProgress,
                [Math.max(0, threshold - 0.15), threshold],
                ["rgba(255,255,255,0.3)", "#d4af37"]
              );

              return (
                <div key={step.number} className="relative flex flex-col gap-2">
                  {/* Vertical Node Dot */}
                  <motion.div
                    style={{
                      backgroundColor: nodeBg,
                      borderColor: nodeBorder,
                    }}
                    className="absolute -left-[32px] top-1 z-20 w-3.5 h-3.5 rounded-full border-2 bg-[#0C0C0C]"
                  />

                  <h3
                    className="text-xl font-medium text-white tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-sm text-[#a0a0a0] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
