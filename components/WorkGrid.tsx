"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

export default function WorkGrid() {
  const items = [
    {
      title: "My Research",
      subtitle: "Explore my research at the nexus of democracy and development",
      image: "/bsharp-explore-research-new.jpg",
      href: "/research",
      objectPosition: "object-top"
    },
    {
      title: "Impact & Engagement",
      subtitle: "Explore my work in impact, policy, and public engagement",
      image: "/bsharp-one-goal.jpg",
      href: "/impact-and-engagement",
      objectPosition: "object-[center_15%]"
    },
    {
      title: "Speaking and Events",
      subtitle: "Learn about my speaking, facilitation, and MC services.",
      image: "/bsharp-creative.jpg",
      href: "/speaking-and-events",
      objectPosition: "object-top"
    },
    {
      title: "Creative Practice",
      subtitle: "Discover my music, poetry, and creative collaborations.",
      image: "/bsharp-creative-practice-new.jpg",
      href: "/creative-practice",
      objectPosition: "object-top"
    }
  ];

  return (
    <section className="bg-[#FAFAFA] text-black py-20 lg:py-28 w-full overflow-hidden">
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 lg:px-12 mb-16 max-w-7xl mx-auto"
      >
        <h2 
          className="text-[32px] md:text-[40px] leading-[1.2] text-[#a0a0a0] font-medium tracking-tight uppercase text-center mb-8"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          How would you like to engage my work?
        </h2>
        <div className="h-[2px] w-[80px] bg-[#0a0a0a] mx-auto " />
      </motion.div>
      
      {/* Grid section with gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100"
          >
            <Link href={item.href} className="group flex flex-col w-full h-full">
              {/* Image container on top */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${item.objectPosition} filter grayscale transition-all duration-700 ease-out scale-105 group-hover:scale-100`}
                  priority
                />
              </div>
              
              {/* Text container below image */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-[22px] font-medium mb-3 leading-tight">{item.title}</h3>
                <p className="text-[#666666] leading-relaxed text-sm mb-8 flex-grow">
                  {item.subtitle}
                </p>
                <div className="mt-auto">
                  <ActionText text="MORE" theme="light" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
