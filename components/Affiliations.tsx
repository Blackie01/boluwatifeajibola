"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightUpText from "./LightUpText";

const affiliations = [
  { name: "OAU", logo: "OAU", desc: "Collaborated on foundational research and educational outreach in political science." },
  { name: "LSE", logo: "LSE", desc: "Participated in high-level policy discussions and presented at the leading Africa Summit." },
  { name: "YORK", logo: "YRK", desc: "Conducted extensive doctoral research focusing on political dynamics and civil resistance." },
  { name: "PSA", logo: "PSA", desc: "Presented key academic papers at the Political Studies Association annual conferences." },
  { name: "DSA", logo: "DSA", desc: "Engaged in critical debates on global development, poverty, and democratic frameworks." },
  { name: "ESRC (UKRI)", logo: "ESRC", desc: "Awarded a prestigious, fully-funded research grant to support in-depth political studies." },
  { name: "GLD", logo: "GLD", desc: "Partnered on sub-national governance research and local development policy analysis." },
  { name: "Firoz and Najma Lalji Foundation", logo: "FNLF", desc: "Received support and funding for advancing African-led initiatives and research." },
  { name: "Commonwealth", logo: "CMW", desc: "Recognized as a Commonwealth Scholar for outstanding academic and leadership potential." },
  { name: "WRDTP", logo: "WR", desc: "Benefited from advanced interdisciplinary training as part of the doctoral partnership." },
  { name: "RCCG", logo: "RCCG", desc: "Led youth capacity-building programs, emphasizing community engagement and leadership." }
];

const MonogramLogo = ({ letters }: { letters: string }) => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-14 md:h-14 shrink-0 transition-colors duration-500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
    <text x="50" y="54" fill="currentColor" fontSize="24" fontFamily="sans-serif" fontWeight="600" textAnchor="middle" dominantBaseline="middle" letterSpacing="1">
      {letters}
    </text>
  </svg>
);

const AccordionItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
  const logoVariants = {
    rest: { rotateY: 0, color: "#ffffff" },
    hover: { rotateY: 360, color: "#A479FF" }
  };

  return (
    <motion.div 
      className="border-t border-white/10 cursor-pointer overflow-hidden relative group" 
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="flex items-center justify-between py-6 md:py-8">
         <div className="flex items-center gap-6 md:gap-8">
            {/* SVG Logo that flips and turns purple on hover */}
            <motion.div 
              variants={logoVariants} 
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <MonogramLogo letters={item.logo} />
            </motion.div>
            
            {/* Organization Name */}
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
              {item.name}
            </h3>
         </div>
         
         {/* Plus/Minus Indicator */}
         <motion.div 
           animate={{ rotate: isOpen ? 45 : 0 }}
           transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-[#A479FF] group-hover:text-[#A479FF] transition-colors duration-300 shrink-0 ml-4"
         >
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 5v14M5 12h14" />
           </svg>
         </motion.div>
      </div>
      
      {/* Expanded Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="pb-8 pl-[72px] md:pl-[88px] pr-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{ duration: 0.4, delay: 0.1 }}
               >
                 {item.desc}
               </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Affiliations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col md:flex-row relative w-full items-start" data-nav-theme="dark">
      {/* Left side: Sticky Title using the LightUpText component */}
      <div className="w-full md:w-[50%]  md:sticky top-32 mb-16 md:mb-0">
          <h4 className="text-[#A479FF] uppercase tracking-[0.2em] text-xs font-bold mb-6">Partnerships</h4>
          <LightUpText 
            styles="!p-0 !min-h-0 bg-transparent flex items-start"
            text="My work has earned recognitions through awards, international scholarships, grants, and conference invitations across multiple countries."
          />
      </div>
      
      {/* Right side: Accordion List */}
      <div className="w-full md:w-[50%]">
         {affiliations.map((item, idx) => (
           <AccordionItem 
             key={item.name} 
             item={item} 
             isOpen={openIndex === idx} 
             onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
           />
         ))}
         {/* Bottom border for the last item */}
         <div className="border-t border-white/10" />
      </div>
    </section>
  );
}