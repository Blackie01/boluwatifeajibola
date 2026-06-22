'use client'
import React from 'react'
import { motion } from 'framer-motion'
import EditorialImage from './EditorialImage'
import Image from 'next/image'

export default function ResearchImpactPoster() {
    return (
        <section className="relative w-full py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-center w-full">
                
                {/* Image flushed completely to the left */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[55%] xl:w-[60%] relative z-0 pl-0 pr-6 lg:pr-0"
                >
                    <EditorialImage 
                        src="/bsharp-ref.jpg" 
                        alt="Research Impact Context" 
                        aspectRatio="aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5]"
                        className="lg:rounded-l-none border-l-0"
                    />
                </motion.div>

                {/* Overlapping text box aligned to the right grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] xl:w-[40%] bg-[#0C0C0C] p-8 md:p-12 lg:p-16 relative z-10 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] mx-6 lg:mx-0 lg:-ml-[10%] lg:mr-12 xl:mr-[10%] mt-[-10%] lg:mt-0"
                >
                    <h2 
                        className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white mb-6"
                        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                        Research Impact and Strategy
                    </h2>
                    <div className="h-[1px] w-[80px] bg-[#d4af37] mb-8" />
                    
                    <div className="space-y-6 text-[16px]">
                        <p className="text-[#a0a0a0]  leading-relaxed font-light">
                            My professional experience at the University of Leeds over the last five years has exposed me to the design, delivery, and evaluation of research impact strategies across diverse disciplinary environments – in the sciences, social sciences, and humanities. Working closely with early-mid-senior level academics, research teams, and external partners, I have contributed to the development of institutional approaches to impact planning, impact literacy, stakeholder engagement, and impact evaluation.
                        </p>
                        <p className="text-[#a0a0a0] leading-relaxed font-light">
                            I am a founding member of the Research Impact Industry Advisory Board of the School of Philosophy, Religion and History of Science. The board gives steer to the impact ambitions and strategies of the School, and our work continues to facilitate the optimal performance and impact of the School’s research beyond academia.
                        </p>
                        <p className="text-[#a0a0a0] leading-relaxed font-light">
                            I have particular experience working within the context of the UK’s research and innovation ecosystem, including supporting activities linked to the Research Excellence Framework (REF), impact case study development, and the wider evidencing and evaluation of research benefits beyond academia. I currently support the development of submissions to REF2029.
                        </p>
                    </div>

                    {/* Band Sticker overlapping the left edge */}
                    <div className="absolute -bottom-6 lg:bottom-16 -left-8 lg:-left-20 z-20 -rotate-12 hover:-rotate-3 transition-transform duration-500 shadow-2xl">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/95 rounded-[8px] flex items-center justify-center p-3 border border-white/20 backdrop-blur-md">
                            <Image 
                                src="/ref-logo.png" 
                                alt="REF Logo" 
                                fill 
                                sizes="(max-width: 768px) 96px, 128px"
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
}
