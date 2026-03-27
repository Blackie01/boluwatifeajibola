"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealTitle } from "./Expressions";
import Image from "next/image";

const galleryData = [
  {
    id: 1,
    image: "/boluwatife.png",
    text: "01. Speaking at the regional policy conference on democratic engagement.",
  },
  {
    id: 2,
    image: "/boluwatife.png",
    text: "02. Field research documenting local governance structures in West Africa.",
  },
  {
    id: 3,
    image: "/boluwatife.png",
    text: "03. Receiving the distinguished scholar award at the annual Africa Summit.",
  },
  {
    id: 4,
    image: "/boluwatife.png",
    text: "04. Facilitating a youth leadership integration workshop in the capital.",
  },
  {
    id: 5,
    image: "/boluwatife.png",
    text: "05. Presenting synthesis data on civil resilience mechanisms to the board.",
  },
  {
    id: 6,
    image: "/boluwatife.png",
    text: "06. Networking and sharing insights at the global development foundation.",
  },
  {
    id: 7,
    image: "/boluwatife.png",
    text: "07. Delivering an impassioned spoken word performance on civic duties.",
  },
];

export default function Gallery() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleTap = () => {
    // Treat the front card click as a "next" trigger, endlessly rotating the stack
    setFrontIndex((prev) => (prev + 1) % galleryData.length);
  };

  return (
    <section 
      className="py-32 px-4 relative w-full overflow-hidden bg-[#fff] flex flex-col items-center" 
      data-nav-theme="light"
    >
      {/* Aesthetic Dotted Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#afb6c2 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <div className="mb-24 text-center">
          <RevealTitle 
            lines={["Now, some pictures"]} 
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#1a1a1a]" 
            style={{ fontFamily: "var(--font-cormorant-unicase), serif" }} 
          />
        </div>

        {/* Interactive Stack Area */}
        <div 
          className="relative w-full max-w-[300px] md:max-w-[400px] h-[450px] md:h-[550px] cursor-pointer touch-none mb-12 flex justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleTap}
        >
          <AnimatePresence>
            {galleryData.map((item, i) => {
              // Mathematical distance from the "front" of the deck (0 is front, 6 is back)
              const pos = (i - frontIndex + galleryData.length) % galleryData.length;
              
              // Shifts the index so the physics spread symmetrically from a negative to positive value
              // 7 cards: -3 (front), 0 (middle), +3 (back)
              const centerOffset = pos - Math.floor(galleryData.length / 2);
              
              // Exists in a tight stack normally, expands significantly on hover
              const spreadFactor = isHovered ? 1.2 : 0.3;
              
              // Calculates the poker-card fan layout anchoring from bottom center
              const xOffset = centerOffset * 60 * spreadFactor;
              const yOffset = Math.abs(centerOffset) * 10 * spreadFactor; // Pushes outer cards down slightly in an arc
              const rotation = centerOffset * 5 * spreadFactor;
              
              const scaleValue = 1 - (pos * 0.04); // Depth scaling
              const opacityValue = 1 - (pos * 0.05);

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    rotate: rotation,
                    scale: scaleValue,
                    zIndex: galleryData.length - pos,
                    opacity: opacityValue,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1] // Apple-like spring/easing
                  }}
                  style={{
                    transformOrigin: "bottom center"
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-white rounded-[24px] md:rounded-[32px] p-3 md:p-4 border border-gray-200 flex flex-col overflow-hidden"
                >
                  {/* Photo area */}
                  <div className="relative w-full flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden bg-gray-100">
                    <Image 
                      src={item.image} 
                      alt={`Gallery item ${item.text.split('.')[0]}`} 
                      fill 
                      className="object-cover object-center pointer-events-none" 
                    />
                    {/* Inner subtle shadow for portrait depth */}
                    <div className="absolute inset-0 border border-black/5 rounded-[16px] md:rounded-[24px] pointer-events-none" />
                  </div>
                  
                  {/* Context Note (One Liner) */}
                  <div className="px-3 pt-4 md:pt-6 pb-2 flex items-center justify-between">
                    <p className="text-gray-700 font-medium text-sm md:text-[15px] leading-snug">
                      {item.text}
                    </p>
                    
                    {/* Only show interactive hint on the very front card */}
                    <motion.div 
                      animate={{ opacity: pos === 0 ? 1 : 0 }}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 ml-4 group-hover:bg-gray-50 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}