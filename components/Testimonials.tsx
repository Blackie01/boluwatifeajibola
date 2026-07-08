"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "I have been working with Boluwatife for a month now and he is working on my company as a Team Leader and Researcher. I'm very impressed so much of things have changed on the team for a good way and his insights are invaluable.",
    name: "Oluwaseun Adeyemi",
    role: "Director of Policy",
    date: "September 2023"
  },
  {
    id: 2,
    text: "Fast, reliable, and talented, he turned a vague idea into a polished research report. Just like he mentions, his analytical sense is really unmatched.",
    name: "Chukwudi Okafor",
    role: "NGO Coordinator",
    date: "August 2023"
  },
  {
    id: 3,
    text: "I worked with him on a data analysis project and was impressed right away. He got things moving quickly, kept everything clear, and delivered exactly what was needed. What I appreciated most was his attention to detail and rigor.",
    name: "Amina Bello",
    role: "Project Manager",
    date: "July 2023"
  },
];

export default function Testimonials() {
  return (
    <section 
      className="bg-white text-black w-full relative pt-24 sm:pt-32" 
      data-nav-theme="light"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">

        <div className="w-full mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-2/3"
          >
            <h2 
              className="text-[32px] md:text-[40px] uppercase font-medium text-black mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              What <span className="text-[#D4AF37]">people</span> say
            </h2>
            <p className="text-[#444444] text-[18px] md:text-[20px] leading-relaxed font-light">
              A few thoughts from people who have experienced the value of working together.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* CSS Masonry Grid */}
          {/* Use pb-48 to ensure enough space beneath the grid for the fade. Removed since mask is commented out. */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-32">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (Object.values(t).join("").length % 3) * 0.15 }}
                className="break-inside-avoid bg-[#f8f9fa] hover:bg-white p-8 md:p-10 rounded-[20px] border border-transparent hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-auto cursor-pointer group"
              >
                <p className="text-[#666666] leading-relaxed mb-8 text-[14px] md:text-[16px] font-light">&quot;{t.text}&quot;</p>
                
                <hr className="border-gray-200 mb-6 w-full" />
                
                <div className="mt-auto">
                  <h4 className="font-bold text-[#0a0a0a] mb-1">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">{t.role}</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fading Effect on the Bottom of the Grid */}
          {/* <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20" /> */}
        </div>
      </div>
    </section>
  );
}