import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MonogramLogo = ({ letters }: { letters: string }) => {
  const isYear = letters.length === 4 && !isNaN(Number(letters));
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-14 md:h-14 shrink-0 transition-colors duration-500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <text x="50" y="54" fill="currentColor" fontSize={isYear ? "20" : "24"} fontFamily="sans-serif" fontWeight="600" textAnchor="middle" dominantBaseline="middle" letterSpacing="1">
        {letters}
      </text>
    </svg>
  );
};

export default function AccordionItem({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) {
  const logoVariants = {
    rest: { rotateY: 0, color: "#ffffff" },
    hover: { rotateY: 360, color: "#d4af37" }
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
            {/* SVG Logo that flips and turns gold on hover */}
            {item.logo && (
                <motion.div 
                variants={logoVariants} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                <MonogramLogo letters={item.logo} />
                </motion.div>
            )}
            
            {/* Organization Name */}
            <h3 className="text-lg md:text-xl font-medium tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
              {item.name}
            </h3>
         </div>
         
         {/* Plus/Minus Indicator */}
         <motion.div 
           animate={{ rotate: isOpen ? 45 : 0 }}
           transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors duration-300 shrink-0 ml-4"
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
             <div className={`pb-8 ${item.logo ? 'pl-[72px] md:pl-[88px]' : 'pl-0'} pr-8 text-gray-400 text-md md:text-lg leading-relaxed font-light`}>
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 transition={{ duration: 0.4, delay: 0.1 }}
               >
                 {Array.isArray(item.desc) ? (
                   item.desc.map((p: string, i: number) => (
                     <p key={i} className="mb-4 last:mb-0">{p}</p>
                   ))
                 ) : (
                   <p>{item.desc}</p>
                 )}
               </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
