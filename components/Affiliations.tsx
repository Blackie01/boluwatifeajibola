"use client";
import React, { useState } from "react";
import LightUpText from "./LightUpText";
import AccordionItem from "./AccordionItem";

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