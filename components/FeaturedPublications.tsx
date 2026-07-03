'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ActionText from './ActionText';

const publicationGroups = [
  {
    category: "Social Movements, Crisis, and Political Institutions",
    items: [
      {
        title: "The legislature as target and mediator of ensuing outcomes during social emergencies: Revisiting Nigeria’s #EndSARS protest.",
        source: "The Theory and Practice of Legislation, 2022",
        description: "How do political institutions respond when they become both the focus of public anger and a channel for resolving crisis?",
        linkText: "Read publication",
        href: "https://www.tandfonline.com/doi/full/10.1080/20508840.2022.2093496"
      },
      {
        title: "What factors drive legislators’ response to crises?",
        source: "Taiwan Journal of Democracy, 2023",
        description: "This study explores how legislators respond to crises shaped by protest and public pressure, analysing the factors that influence political behaviour in volatile environments.",
        linkText: "Read publication",
        href: "https://www.tfd.org.tw/backend/upload/publish/quarterly/84ee24e640abc14ee602837917241716.pdf"
      }
    ]
  },
  {
    category: "Protest, Governance, and Political Opportunity",
    items: [
      {
        title: "From COVID-19 to fuel subsidy removal in Nigeria: Assessing the political opportunities for local grievance.",
        source: "Urban Governance, 2024",
        description: "This article examines how overlapping crises in Nigeria – from the COVID-19 pandemic to fuel subsidy removal (2023) – created shifting political opportunities for mobilisation. It highlights how citizens navigate and respond to changing governance conditions through collective action.",
        linkText: "Read publication",
        href: "https://www.sciencedirect.com/science/article/pii/S2664328624000597?via%3Dihub"
      }
    ]
  },
  {
    category: "Technology, Development, and Civic Innovation",
    items: [
      {
        title: "Technologically mediated citizen-Led welfarism in Nigeria",
        source: "Routledge, 2023 — Book contribution",
        description: "My contribution here explores how citizens are harnessing digital technologies to organise welfare and support systems outside formal state structures.",
        linkText: "Find the book",
        href: "https://www.routledge.com/Researching-Development-NGOs-Global-and-Grassroots-Perspectives/Pickering-Saqqa/p/book/9780367489458"
      },
      {
        title: "Initiating the co-development of IFRC’s Digital ID strategy",
        source: "IFRC Solferino Academy, 2021",
        description: "As part of a collaborative international project, this report explores how digital identity systems can be designed to support humanitarian action while safeguarding data ethics, privacy, and accountability.",
        linkText: "Read report",
        href: "https://solferinoacademy.com/wp-content/uploads/2021/09/Report-Initiating-the-co-development-of-IFRCs-Digital-ID-strategy1.pdf"
      }
    ]
  },
  {
    category: "Public Engagement and Commentary",
    items: [
      {
        title: "#EndSARS and #RejectFinanceBill: Patterns of protest across Africa",
        source: "Africa at LSE Blog, 2024",
        description: "This piece reflects on emerging patterns of protest across African contexts, drawing connections between movements in Nigeria and Kenya.",
        linkText: "Read article",
        href: "https://blogs.lse.ac.uk/africaatlse/2024/08/01/nigerias-endsars-and-kenyas-rejectfinancebill-reveal-striking-patterns-in-protest-across-africa/"
      }
    ]
  }
];

export default function FeaturedPublications({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const isLight = theme === "light";
  return (
    <section className={`w-full py-24 md:py-32 border-t ${isLight ? "border-black/10" : "border-white/10"}`}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <h2 
          className={`text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight ${isLight ? "text-black" : "text-white"} mb-24`}
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Featured Publications
        </h2>

        <div className="flex flex-col gap-24">
          {publicationGroups.map((group, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4 h-full relative">
                <div className="sticky top-32">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6 }}
                    className={`text-2xl md:text-3xl lg:text-4xl ${isLight ? "text-black/30" : "text-white/30"} font-medium leading-snug pr-4`}
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {group.category}
                  </motion.h3>
                </div>
              </div>
              
              <div className="lg:col-span-8 flex flex-col gap-12">
                {group.items.map((item, pIndex) => (
                  <motion.div 
                    key={pIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                    className={`border-t ${isLight ? "border-black/10" : "border-white/10"} pt-8 group`}
                  >
                    <h4 className={`text-[20px] md:text-[24px] leading-tight font-medium ${isLight ? "text-black" : "text-gray-200"} group-hover:${isLight ? "text-[#96750b]" : "text-white"} transition-colors duration-300 mb-4`}>
                      {item.title}
                    </h4>
                    
                    <div className={`${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} text-[15px] mb-6 font-light`}>
                      {item.source}
                    </div>
                    
                    <p className={`${isLight ? "text-[#444444]" : "text-[#a0a0a0]"} leading-relaxed font-light mb-8 text-[16px]`}>
                      {item.description}
                    </p>
                    
                    {item.linkText && (
                      <Link target='_blank' href={item.href || "#"} className={`inline-flex items-center gap-2 ${isLight ? "text-[#96750b] hover:text-[#7a5f09]" : "text-[#d4af37] hover:text-white"} transition-colors duration-300 text-[15px] group/link`}>
                        {item.linkText}
                        <svg 
                          className="transform transition-transform duration-300 group-hover/link:translate-x-1" 
                          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 flex justify-start">
          <ActionText text="See all publications" href="/publications" theme={theme} />
        </div>
      </div>
    </section>
  );
}
