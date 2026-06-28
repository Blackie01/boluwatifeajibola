"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorkGrid() {
  const items = [
    {
      title: "Research & Development",
      subtitle: "Explore my research at the nexus of democracy and development",
      image: "/bsharp-explore-research-new.jpg",
      href: "/research-and-development",
      objectPosition: "object-top"
    },
    {
      title: "Impact & Engagement",
      subtitle: "Explore my work in impact, policy, and public engagement",
      image: "/boluwatife.png",
      href: "/impact-and-engagement",
      objectPosition: "object-top"
    },
    {
      title: "Speaking and Events",
      subtitle: "Learn about my speaking, facilitation, and MC services.",
      image: "/bsharp-speaking-events-new.jpeg",
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
    <section className="bg-white text-black pb-0 w-full overflow-hidden">
      {/* Header section with padding to align with the rest of the site */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 lg:px-12 mb-16 max-w-7xl mx-auto"
      >
        <h2 
          className="text-[32px] md:text-[40px] leading-[1.2] text-[#a0a0a0] font-medium tracking-tight uppercase text-center  mb-8"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          How would you like to engage my work?
        </h2>
        <div className="h-[2px] w-[80px] bg-[#0a0a0a] mx-auto " />
      </motion.div>
      
      {/* Grid section with no column gaps and full width, but row gap for responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-16 lg:gap-y-0 w-full">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Link href={item.href} className="group flex flex-col cursor-pointer w-full h-full">
              {/* Text container with its own padding since grid has no gap */}
              <div className="px-6 lg:px-10 mb-8 flex-grow">
                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {item.subtitle}
                </p>
              </div>
              
              {/* Image container touching edges */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover ${item.objectPosition} filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100`}
                  priority
                />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
