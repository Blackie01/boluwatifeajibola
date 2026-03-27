"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Publications() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll over this section to drive the cascading circuit border animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 55%", "end end"]
  });

  // Circuit flow sequence mapping 0 -> 1 progress to distinct sequential phases
  const p1 = useTransform(scrollYProgress, [0.0, 0.15], [0, 1]);    // Top border outward from center
  const p2 = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);    // Row 1 vertical drop down
  const p3 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);    // Row 1 bottom horizontal spread
  const p4 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);    // Row 2 vertical drop down
  const p5 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);     // Row 2 bottom horizontal spread
  const p6 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);    // Row 3 vertical drops
  const p7 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);   // Row 3 bottom horizontal spread
  const p8 = useTransform(scrollYProgress, [0.95, 1.0], [0, 1]);    // Row 4 vertical drops

  return (
    <section 
      ref={containerRef} 
      className="bg-[#050505] text-white w-full relative flex flex-col" 
      data-nav-theme="dark"
    >
      {/* Top Border Flow (Catches the river from the previous section at exactly 50vw) */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <motion.div style={{ scaleX: p1 }} className="hidden md:block absolute top-0 right-1/2 w-1/2 h-[1px] bg-white origin-right z-10" />
      <motion.div style={{ scaleX: p1 }} className="hidden md:block absolute top-0 left-1/2 w-1/2 h-[1px] bg-white origin-left z-10" />

      {/* ROW 1: 75% | 25% */}
      <div className="flex flex-col md:flex-row relative group">
        {/* Left 3/4 */}
        <div className="w-full md:w-3/4 p-10 md:p-24 relative border-b md:border-b-0 border-white/10 md:border-r">
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-tight" style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}>
            More<br/>Publications
          </h2>
          {/* Animated vertical drop (at 75vw) */}
          <motion.div style={{ scaleY: p2 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
          {/* Animated bottom horizontal (spreads left from 75vw) */}
          <motion.div style={{ scaleX: p3 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10" />
        </div>
        
        {/* Right 1/4 */}
        <div className="w-full md:w-1/4 p-10 md:p-16 flex items-start md:items-end justify-start md:justify-center relative border-b border-white/10 md:border-b-0">
          <p className="text-xl md:text-3xl font-light text-[#999] leading-snug">
            Excellence is more than an ideal; it's a lifestyle.
          </p>
          {/* Animated bottom horizontal (spreads right from 75vw) */}
          <motion.div style={{ scaleX: p3 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10" />
        </div>
        
        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 2: 66% | 33% */}
      <div className="flex flex-col md:flex-row relative">
        {/* Left 2/3 (Video) */}
        <div className="w-full md:w-2/3 relative border-b md:border-b-0 border-white/10 md:border-r aspect-square md:aspect-auto md:min-h-[600px] bg-[#111]">
          <video src="/ORBIT-5-01-LITE.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
          
          {/* Animated vertical drop (at 66vw) */}
          <motion.div style={{ scaleY: p4 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
          {/* Animated bottom horizontal (spreads left from 66vw) */}
          <motion.div style={{ scaleX: p5 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10" />
        </div>
        
        {/* Right 1/3 (Publication) */}
        <div className="w-full md:w-1/3 p-10 md:p-20 flex flex-col justify-center relative border-b border-white/10 md:border-b-0 group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-8 w-max text-gray-400">Policy</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Civic Mobilization in the Digital Age</h3>
          <p className="text-gray-400 leading-relaxed mb-12">An analysis of structural political shifts driven by algorithmic ecosystems and hyper-connectivity.</p>
          <a href="#" target="_blank" className="mt-auto inline-flex items-center text-sm uppercase tracking-widest font-bold group-hover:text-[#68ffad] transition-colors">
            Read Article
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          {/* Animated bottom horizontal (spreads right from 66vw) */}
          <motion.div style={{ scaleX: p5 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10" />
        </div>

        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 3: 25% | 50% | 25% */}
      <div className="flex flex-col md:flex-row relative">
        {/* Left 1/4 (Empty) */}
        <div className="w-full md:w-1/4 relative border-b md:border-b-0 border-white/10 md:border-r min-h-[300px] md:min-h-[400px]">
          {/* Animated vertical drop (at 25vw) */}
          <motion.div style={{ scaleY: p6 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
          {/* Animated bottom horizontal (spreads left from 25vw) */}
          <motion.div style={{ scaleX: p7 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right z-10" />
        </div>
        
        {/* Mid 1/2 (Publication) */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center relative border-b md:border-b-0 border-white/10 md:border-r min-h-[300px] md:min-h-[400px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-6 w-max text-gray-400">Democracy</span>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The Echoes of #EndSARS</h3>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">Examining the travel of symbols, anger, and civic memories from street protests to electoral ballots.</p>
          <a href="#" target="_blank" className="mt-auto inline-flex items-center text-sm uppercase tracking-widest font-bold group-hover:text-[#68ffad] transition-colors">
            Read Publication
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          {/* Animated vertical drop (at 75vw) */}
          <motion.div style={{ scaleY: p6 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
          {/* Animated bottom horizontal (spreads right from 25vw) */}
          <motion.div style={{ scaleX: p7 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10" />
        </div>
        
        {/* Right 1/4 (Video Placeholder) */}
        <div className="w-full md:w-1/4 relative border-b border-white/10 md:border-b-0 min-h-[300px] md:min-h-[400px] bg-[#111]">
          <video src="/ORBIT-5-01-LITE.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
          {/* Animated bottom horizontal (spreads right from 75vw) */}
          <motion.div style={{ scaleX: p7 }} className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left z-10" />
        </div>

        {/* Base horizontal bottom line */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
      </div>

      {/* ROW 4: 33% | 33% | 33% */}
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b md:border-b-0 border-white/10 md:border-r min-h-[350px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">Published 2023</span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">Democratic Resilience in West Africa</h4>
          <a href="#" target="_blank" className="mt-auto inline-flex items-center text-xs uppercase tracking-widest font-bold group-hover:text-[#68ffad] transition-colors">Read Paper <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></a>
          
          {/* Animated vertical drop (at 33vw) */}
          <motion.div style={{ scaleY: p8 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
        </div>
        
        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b md:border-b-0 border-white/10 md:border-r min-h-[350px] bg-[#0a0a0a]/50 group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">Working Paper</span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">Youth Demographics & Election Engineering</h4>
          <a href="#" target="_blank" className="mt-auto inline-flex items-center text-xs uppercase tracking-widest font-bold group-hover:text-[#68ffad] transition-colors">Read Paper <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></a>
          
          {/* Animated vertical drop (at 66vw) */}
          <motion.div style={{ scaleY: p8 }} className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white origin-top z-10" />
        </div>
        
        <div className="w-full md:w-1/3 p-10 md:p-16 flex flex-col relative border-b border-white/10 md:border-b-0 min-h-[350px] group cursor-pointer hover:bg-white/5 transition-colors duration-500">
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">Case Study</span>
          <h4 className="text-2xl font-bold mb-4 leading-tight">Digital Identity & Civic Privacy</h4>
          <a href="#" target="_blank" className="mt-auto inline-flex items-center text-xs uppercase tracking-widest font-bold group-hover:text-[#68ffad] transition-colors">Read Paper <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></a>
          {/* Rightmost column has no right border */}
        </div>
      </div>

    </section>
  );
}