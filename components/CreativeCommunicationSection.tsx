"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionText from "./ActionText";

const helpWithItems = [
  "Spoken word and poetry commissions",
  "Creative advocacy and civic communication",
  "Campaign concepts and messaging",
  "Research-informed creative outputs",
  "Music/songwriting around hope, resilience and social change",
  "Public engagement through art",
  "Satire, humour and civic education concepts",
  "Creative facilitation for reflective events",
];

const goodFitItems = [
  "Civic organisations",
  "Higher Education Institutions",
  "Public engagement teams",
  "Social movements",
  "Advocacy campaigns",
  "Cultural organisations",
  "Faith/community events",
  "Institutions seeking creative ways to engage publics",
];

interface ScrollPillProps {
  item: string;
  index: number;
}

function ScrollPill({ item, index }: ScrollPillProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress for this individual pill: starts as it enters viewport bottom (92%), settles at middle (50%)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 50%"],
  });

  // Staggered vertical translation: creates extra distance between pills until settling in middle of screen
  const yOffset = 50 + (index % 4) * 20;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);

  // Smooth delayed opacity transition based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.4, 1]);

  // Subtle scaling effect settling into final position
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="inline-flex items-center p-4 md:px-5 md:py-4 rounded-none border border-white/15 bg-[#181818] hover:border-white/40 hover:bg-white/[0.08] transition-colors shadow-sm group"
    >
      <span className="text-base text-white/90 font-normal leading-snug">
        {item}
      </span>
    </motion.div>
  );
}

export default function CreativeCommunicationSection() {
  return (
    <section className="w-full bg-[#0C0C0C] text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Left Column: Sticky Title, Audience, Description & CTA */}

          <div className="lg:col-span-7 flex flex-col gap-16">
            {/* Group 1: I Can Help With */}
            <div className="flex flex-col">
              {/* Group Sub-Header */}
              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                <h3
                  className="text-lg md:text-xl font-medium uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  I can help with
                </h3>
              </div>

              {/* Pills stacked vertically arranging row by row with scroll control */}
              <div className="flex flex-wrap gap-3.5">
                {helpWithItems.map((item, idx) => (
                  <ScrollPill key={item} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* Group 2: Good Fit For */}
            <div className="flex flex-col">
              {/* Group Sub-Header */}
              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                <h3
                  className="text-lg md:text-xl font-medium uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  Good fit for
                </h3>
              </div>

              {/* Pills stacked vertically arranging row by row with scroll control */}
              <div className="flex flex-wrap gap-3.5">
                {goodFitItems.map((item, idx) => (
                  <ScrollPill key={item + idx} item={item} index={idx} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Row-by-Row Stacking Pills */}

          <div className="lg:col-span-5 lg:sticky lg:top-28 md:lg:top-32 flex flex-col justify-between gap-8 self-start z-20 pb-12">
            <div className="flex flex-col gap-6">
              {/* Section Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-[40px] md:text-[44px] leading-[1.15] font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Creative & Civic Communication
              </motion.h2>

              <div className="h-[2px] w-[80px] bg-white" />

              {/* Target Audience Callout */}
              <div className="p-5 rounded-none bg-white/[0.05] border-l-2 border-white flex flex-col gap-1.5">
             
                <p className="text-sm md:text-[15px] font-medium text-white/90 leading-relaxed">
                  For organisations, campaigns, social movements, cultural
                  projects and public engagement teams.
                </p>
              </div>

              {/* Body Description */}
              <p className="text-base text-[#a0a0a0] font-light leading-relaxed">
                I can help translate ideas into creative forms that people can
                feel and engage with. This includes poetry, spoken word, music,
                civic storytelling, campaign messaging, and creative advocacy.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-base md:text-lg font-medium">
                <ActionText
                  text="Explore a creative collaboration or consultation"
                  href="/contact"
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
