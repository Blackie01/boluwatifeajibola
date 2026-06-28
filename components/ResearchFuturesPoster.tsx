'use client'
import React from 'react'
import { motion } from 'framer-motion'
import EditorialImage from './EditorialImage'
import ActionText from './ActionText'

export interface ResearchFuturesPosterProps {
    title?: string;
    imageSrc?: string;
    imageAlt?: string;
    paragraphs?: string[];
    ctaText?: string;
    ctaHref?: string;
}

export default function ResearchFuturesPoster({
    title = "Building Better Research Futures",
    imageSrc = "/bsharp-nexus.jpeg",
    imageAlt = "Building better research futures",
    paragraphs = [
        "As a Research and Development professional, I am committed to creating the conditions for excellent research to happen, helping ideas mature, helping researchers collaborate well, helping institutions use evidence intelligently, and helping organisations build the capacity to respond to complex problems.",
        "If you are developing a proposal, building a research strategy, seeking funding, strengthening partnerships, or looking to improve how research is planned and supported, I would be glad to explore how I can contribute."
    ],
    ctaText = "Let's work together",
    ctaHref = "/contact"
}: ResearchFuturesPosterProps) {
    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse items-center w-full">
                
                {/* Image flushed completely to the right */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[55%] xl:w-[60%] relative z-0 pr-0 pl-6 lg:pl-0"
                >
                    <EditorialImage 
                        src={imageSrc} 
                        alt={imageAlt} 
                        aspectRatio="aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5]"
                        className="lg:rounded-r-none border-r-0 border-[#e0e0e0]"
                    />
                </motion.div>

                {/* Overlapping text box aligned to the left grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] xl:w-[40%] bg-white p-8 md:p-12 lg:p-16 relative z-10 border border-black/5 shadow-[0_0_80px_rgba(0,0,0,0.08)] mx-6 lg:mx-0 lg:-mr-[10%] lg:ml-12 xl:ml-[10%] mt-[-10%] lg:mt-0"
                >
                    <h2 
                        className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-black mb-6"
                        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                        {title}
                    </h2>
                    <div className="h-[1px] w-[80px] bg-[#d4af37] mb-8" />
                    
                    <div className="space-y-6 text-[16px] mb-12">
                        {paragraphs.map((p, i) => (
                            <p key={i} className="text-[#444444] leading-relaxed font-light">
                                {p}
                            </p>
                        ))}
                    </div>

                    <ActionText 
                        href={ctaHref} 
                        text={ctaText} 
                        theme='light'
                    />
                </motion.div>
                
            </div>
        </section>
    )
}
