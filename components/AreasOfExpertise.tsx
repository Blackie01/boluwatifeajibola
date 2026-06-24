'use client'
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { motion } from "framer-motion";

const expertiseData = [
  {
    name: "Grant development and proposal support",
    desc: "I support academics in developing research proposals by reviewing drafts, strengthening project narratives, clarifying objectives, improving coherence, and helping align ideas with funder expectations. This includes supporting bids from early scoping through to more developed proposal stages.",
  },
  {
    name: "Funding intelligence and opportunity mapping",
    desc: "I contribute to the identification and curation of internal and external funding opportunities, helping researchers connect their ideas to relevant schemes, funders, calls, and strategic priorities. This work requires understanding the funding landscape, institutional priorities, disciplinary needs, and the practical realities of bid development.",
  },
  {
    name: "Research strategy and planning",
    desc: "I support the development and implementation of research strategy at school level, working with academic and professional services colleagues to strengthen research culture, planning, performance, and delivery.",
  },
  {
    name: "Research systems, data and monitoring",
    desc: "I support monitoring systems and planning processes that help schools and research leaders track research activity, funding opportunities, impact evidence, and strategic progress. This includes working with research data, research management tools, and institutional processes that support evidence-informed decision-making.",
  },
  {
    name: "Collaboration and partnership development",
    desc: "I support relationship-building between academics, internal university teams, external stakeholders, industry partners, and research collaborators.",
  }
];

export default function AreasOfExpertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = expertiseData.filter((_, idx) => idx % 2 === 0);
  const rightColumn = expertiseData.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 
            className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-black mb-6 uppercase"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Areas of expertise
          </h2>
          <div className="h-[1px] w-[80px] bg-black/10 mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumn.map((item, idx) => {
              const actualIndex = idx * 2;
              return (
                <AccordionItem 
                  key={item.name} 
                  item={item} 
                  isOpen={openIndex === actualIndex} 
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)} 
                  theme="light"
                />
              );
            })}
            <div className="border-t border-black/10 w-full" />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumn.map((item, idx) => {
              const actualIndex = idx * 2 + 1;
              return (
                <AccordionItem 
                  key={item.name} 
                  item={item} 
                  isOpen={openIndex === actualIndex} 
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)} 
                  theme="light"
                />
              );
            })}
            <div className="border-t border-black/10 w-full hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
