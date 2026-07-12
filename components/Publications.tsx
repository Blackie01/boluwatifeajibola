"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionText from "./ActionText";

export default function Publications() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll over this section to drive the cascading circuit border animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 55%", "end end"],
  });

  // Circuit flow sequence mapping 0 -> 1 progress to distinct sequential phases
  const p1 = useTransform(scrollYProgress, [0.0, 0.15], [0, 1]); // Top border outward from center
  const p2 = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]); // Row 1 vertical drop down
  const p3 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]); // Row 1 bottom horizontal spread
  const p4 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]); // Row 2 vertical drop down
  const p5 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]); // Row 2 bottom horizontal spread
  const p6 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]); // Row 3 vertical drops
  const p7 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]); // Row 3 bottom horizontal spread
  const p8 = useTransform(scrollYProgress, [0.95, 1.0], [0, 1]); // Row 4 vertical drops

  return (
    <section
      ref={containerRef}
      className="bg-[#050505] text-white w-full relative flex flex-col"
      data-nav-theme="dark"
    >
      {/* Top Border Flow (Catches the river from the previous section at exactly 50vw) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <motion.div
        style={{ scaleX: p1 }}
        className="hidden md:block absolute top-0 right-1/2 w-1/2 h-[1px] bg-white origin-right z-10"
      />
      <motion.div
        style={{ scaleX: p1 }}
        className="hidden md:block absolute top-0 left-1/2 w-1/2 h-[1px] bg-white origin-left z-10"
      />

      {/* ROW 1: 75% | 25% */}
      <div className="flex flex-col md:flex-row relative group">
        {/* Left 3/4 */}
        <div className="w-full md:w-3/4 p-10 md:p-24 relative border-b md:border-b-0 border-white/10 md:border-r">
          <h2 className="text-5xl md:text-7xl  leading-tight font-outfit">
            More
            <br />
            Publications
          </h2>
          {/* Animated vertical drop (at 75vw) */}
          <motion.div
            style={{ scaleY: p2 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
          {/* Animated bottom horizontal (spreads left from 75vw) */}
          <motion.div
            style={{ scaleX: p3 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10"
          />
        </div>

        {/* Right 1/4 */}
        <div className="w-full md:w-1/4 p-10 md:p-16 flex items-start md:items-end justify-start md:justify-center relative border-b border-white/10 md:border-b-0">
          <p className="text-xl md:text-3xl font-light text-[#999] leading-snug">
            Research excellence is more than a commitment; it's a lifestyle.
          </p>
          {/* Animated bottom horizontal (spreads right from 75vw) */}
          <motion.div
            style={{ scaleX: p3 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10"
          />
        </div>

        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 2: 66% | 33% */}
      <div className="flex flex-col md:flex-row relative">
        {/* Left 2/3 (Video) */}
        <div className="w-full md:w-2/3 grayscale relative border-b md:border-b-0 border-white/10 md:border-r aspect-square md:aspect-auto md:min-h-[600px] bg-[#111]">
          <video
            src="/home-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Animated vertical drop (at 66vw) */}
          <motion.div
            style={{ scaleY: p4 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
          {/* Animated bottom horizontal (spreads left from 66vw) */}
          <motion.div
            style={{ scaleX: p5 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10"
          />
        </div>

        {/* Right 1/3 (Publication) */}
        <div className="w-full md:w-1/3 p-10 md:p-20 flex flex-col justify-center relative border-b border-white/10 md:border-b-0 group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
            Published Article
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            From COVID-19 to Fuel Subsidy Removal in Nigeria
          </h3>
          <p className="text-gray-400 leading-relaxed mb-12">
            Assessing the political opportunities for local grievance.
          </p>
          <div>
            <ActionText
              href="https://doi.org/10.1016/j.ugj.2024.12.007"
              text="Read Article"
              target="_blank"
            />
          </div>

          {/* Animated bottom horizontal (spreads right from 66vw) */}
          <motion.div
            style={{ scaleX: p5 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10"
          />
        </div>

        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 3: 25% | 50% | 25% */}
      <div className="flex flex-col md:flex-row relative">
        {/* Left 1/4 (Empty) */}
        <div className="w-full md:w-1/4 relative border-b md:border-b-0 border-white/10 md:border-r min-h-[300px] md:min-h-[400px]">
          {/* Animated vertical drop (at 25vw) */}
          <motion.div
            style={{ scaleY: p6 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
          {/* Animated bottom horizontal (spreads left from 25vw) */}
          <motion.div
            style={{ scaleX: p7 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10"
          />
        </div>

        {/* Mid 1/2 (Publication) */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center relative border-b md:border-b-0 border-white/10 md:border-r min-h-[300px] md:min-h-[400px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
            Published Article
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Legislative Responses in Times of Crisis{" "}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            The legislature as target and mediator of ensuing outcomes during
            social emergencies: Revisiting Nigeria’s #EndSARS protest.
          </p>
          <div>
            <ActionText
              href="https://www.tandfonline.com/doi/full/10.1080/20508840.2022.2093496"
              text="Read Article"
              target="_blank"
            />
          </div>

          {/* Animated vertical drop (at 75vw) */}
          <motion.div
            style={{ scaleY: p6 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
          {/* Animated bottom horizontal (spreads right from 25vw) */}
          <motion.div
            style={{ scaleX: p7 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10"
          />
        </div>

        {/* Right 1/4 (Video Placeholder) */}
        <div className="w-full md:w-1/4 relative border-b border-white/10 md:border-b-0 min-h-[300px] md:min-h-[400px] bg-[#111]">
          <video
            src="/ORBIT-5-01-LITE.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          {/* Animated bottom horizontal (spreads right from 75vw) */}
          <motion.div
            style={{ scaleX: p7 }}
            className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10"
          />
        </div>

        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 4: 33% | 33% | 33% */}
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b md:border-b-0 border-white/10 md:border-r min-h-[350px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
            Published Paper
          </span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">
            Turning Public Engagement into Standard Practice
          </h4>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            Institutionalisation in the work of the South African Parliament.
          </p>
          <div>
            <ActionText
              href="https://doi.org/10.1080/13572334.2023.2195147"
              text="Read Paper"
              target="_blank"
            />
          </div>
          <motion.div
            style={{ scaleY: p8 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
        </div>

        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b md:border-b-0 border-white/10 md:border-r min-h-[350px] bg-[#0a0a0a]/50 group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
            Published Report
          </span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">
            Digital Identity in Humanitarian Contexts{" "}
          </h4>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            Developed to initiate the co-development of the IFRC’s Digital ID
            strategy.
          </p>

          <div>
            <ActionText
              href="https://solferinoacademy.com/wp-content/uploads/2021/09/Report-Initiating-the-co-development-of-IFRCs-Digital-ID-strategy1.pdf"
              text="Read Paper"
              target="_blank"
            />
          </div>

          <motion.div
            style={{ scaleY: p8 }}
            className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10"
          />
        </div>

        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b border-white/10 md:border-b-0 min-h-[350px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
            Conference Proceeding
          </span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">
            The Quest for Development
          </h4>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
            When social media-brokered political power encounters political
            ‘flak jackets’
          </p>
          <div>
            <ActionText
              href="https://arxiv.org/abs/2108.09741"
              text="Read Paper"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
