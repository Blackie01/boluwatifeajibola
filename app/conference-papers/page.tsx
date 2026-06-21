'use client'
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import PageTitle from "@/components/PageTitle"
import { researchPapersData } from "@/utils/researchPapers"

export default function ConferencePapers(){
    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 pb-32 px-6 md:px-12 flex flex-col justify-start overflow-clip">
            <div className="max-w-7xl mx-auto w-full">
                <PageTitle
                    title="Conference Papers"
                    subTitle="Research presentations, publications, and talks"
                />
                
                <div className="flex flex-col gap-24 mt-16 md:mt-32">
                    {researchPapersData.map((yearGroup, index) => (
                        <div key={yearGroup.year} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-3 h-full relative">
                                <div className="sticky top-32">
                                    <motion.h2 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10% 0px" }}
                                        transition={{ duration: 0.6 }}
                                        className="text-4xl md:text-5xl lg:text-[64px] text-white/20 font-medium"
                                        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                                    >
                                        {yearGroup.year}
                                    </motion.h2>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-9 flex flex-col gap-12">
                                {yearGroup.papers.map((paper, pIndex) => {
                                    const hasAbstract = paper.abstractParagraphs && paper.abstractParagraphs.length > 0;
                                    
                                    return (
                                        <motion.div 
                                            key={paper.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-10% 0px" }}
                                            transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                                            className="border-t border-white/10 pt-8 group"
                                        >
                                            <h3 className="text-[20px] md:text-[24px] leading-tight font-medium text-gray-200 group-hover:text-white transition-colors duration-300 mb-4">
                                                {paper.title}
                                            </h3>
                                            <div className="text-[#a0a0a0] text-[15px] mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-light">
                                                <span>{paper.conferenceName}</span>
                                                <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
                                                <span>{paper.location}</span>
                                            </div>
                                            
                                            {hasAbstract && (
                                                <Link href={`/conference-papers/${paper.id}`} className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 text-[15px] group/link">
                                                    Read abstract
                                                    <svg 
                                                        className="transform transition-transform duration-300 group-hover/link:translate-x-1" 
                                                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                                    </svg>
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}