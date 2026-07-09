"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: "oau",
    name: "OAU",
    logo: "/org-logos/oau-logo-3.png",
    text: "Political Science Ambassadors Awardee.",
  },
  {
    id: "lse",
    name: "LSE",
    logo: "/org-logos/London School of Economics LSE.png",
    text: "Firoz and Najma Lalji Foundation Scholar.",
  },
  {
    id: "york",
    name: "YORK",
    logo:"/org-logos/University of York logo.png",
    text: "Doctoral researcher in Politics.",
  },
  {
    id: "psa",
    name: "PSA",
    logo: "/org-logos/Political Studies Association Early Career Network PSA ECN.webp",
    text: "Best Potential Research Award winner.",
  },
  // {
  //   id: "dsa",
  //   name: "DSA",
  //   logo: null,
  //   text: "Engaged in critical debates on global development, poverty, and democratic frameworks.",
  // },
  {
    id: "esrc",
    name: "ESRC (UKRI)",
    logo: "/org-logos/Economic and Social Research Council ESRC.png",
    text: "ESRC-funded doctoral researcher.",
  },
  {
    id: "gld",
    name: "GLD",
    logo: "/org-logos/Governance and Local Development Institute GLD.svg",
    text: "Funded International research workshop participant.",
  },
  {
    id: "firoz",
    name: "Firoz and Najma Lalji Foundation",
    logo: null,
    text: "Fully funded LSE master’s scholar.",
  },
  {
    id: "commonwealth",
    name: "Commonwealth",
    logo: "/org-logos/Commonwealth Commission UK.png",
    text: "Commonwealth Shared Scholarship awardee (un-utilised).",
  },
  {
    id: "wrdtp",
    name: "WRDTP",
    logo: "/org-logos/White Rose Doctoral Training Partnership WRDTP.jpg",
    text: "White Rose DTP pathway award holder.",
  },
  {
    id: "rcf",
    name: "RCF OAU",
    logo: null,
    text: "Awarded Best Guitarist on campus.",
  },
  {
    id: "taiwan",
    name: "Taiwan",
    logo: "/org-logos/Taiwan Foundation for Democracy TFD.png",
    text: "International travel award recipient."
  }
];

export default function AwardsAndAffiliations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <section className="w-full bg-[#ffffff] text-black pt-32 relative overflow-hidden" data-nav-theme="light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-20">
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
            Awards, affiliations and recognition
          </h2>
          <p className="text-[#444444] text-[18px] md:text-[20px] leading-relaxed font-light">
            My work has earned recognitions through awards, international scholarships, grants, and conference invitations across multiple countries.
          </p>
        </motion.div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden relative flex py-8">
        {/* Soft edge gradients for seamless fade out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center">
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="relative shrink-0 flex items-center w-[180px] h-[130px] md:w-[240px] md:h-[160px]"
            >
              {/* Expanding Hover Card */}
              <div 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                data-active={activeIndex === index}
                className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 h-[90%] flex flex-row items-center bg-[#f8f9fa] hover:bg-white data-[active=true]:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] data-[active=true]:shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-200 data-[active=true]:border-gray-200 transition-all duration-500 rounded-sm p-6 cursor-pointer group hover:z-50 data-[active=true]:z-50 overflow-hidden w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] hover:w-[320px] data-[active=true]:w-[320px] md:hover:w-[450px] md:data-[active=true]:w-[450px]"
              >
                
                {/* Logo Section */}
                <div className="w-[100px] md:w-[140px] shrink-0 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-data-[active=true]:grayscale-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-all duration-500 h-full">
                  {item.logo ? (
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="max-w-full max-h-[80%] object-contain mix-blend-multiply" 
                    />
                  ) : (
                    <span className="font-outfit font-bold text-lg md:text-xl text-gray-400 group-hover:text-black group-data-[active=true]:text-black uppercase tracking-widest text-center">
                      {item.name}
                    </span>
                  )}
                </div>
                
                {/* Expandable Text Content */}
                <div className="opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 delay-100 flex-1 ml-6 min-w-[160px] md:min-w-[220px]">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-2 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 delay-150">
                    {item.name}
                  </h4>
                  <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 delay-200 pr-2">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
