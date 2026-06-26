'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Icons
const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
)

const MicrophoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
)

const PenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
    </svg>
)

const StageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
        <path d="M12 14v-4" />
        <path d="M8 10h8" />
        <path d="M12 10V6" />
        <path d="M10 6h4" />
    </svg>
)

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
    </svg>
)

const normalItems = [
    { text: "Musician for over 25 years", icon: MusicNoteIcon, xlClass: "xl:col-start-1 xl:row-start-1" },
    { text: "Started playing drums at age five", icon: MusicNoteIcon, xlClass: "xl:col-start-2 xl:row-start-1" },
    { text: "Became a music director at age fifteen", icon: StageIcon, xlClass: "xl:col-start-3 xl:row-start-1" },
    { text: "Self-taught drummer, bassist, and keyboardist", icon: MusicNoteIcon, xlClass: "xl:col-start-4 xl:row-start-1" },
    { text: "Delivered spoken word performances at 25+ events", icon: MicrophoneIcon, xlClass: "xl:col-start-1 xl:row-start-2" },
    { text: "Released first single, “Your Grace,” in 2015", icon: MusicNoteIcon, xlClass: "xl:col-start-2 xl:row-start-2" },
    { text: "Released “The Joy of the Lord” in 2026", icon: MusicNoteIcon, xlClass: "xl:col-start-3 xl:row-start-2" },
    { text: "Awarded Best Guitarist at Obafemi Awolowo University", icon: StageIcon, xlClass: "xl:col-start-4 xl:row-start-2" },
]

const naijaPolitoons = { text: "Co-founded NaijaPolitoons in 2020", icon: PenIcon }
const poetry = { text: "Presented poetry, spoken word, chants, and song compositions at the South-South Social Movements Convergence, Cape Town, 2025", icon: GlobeIcon }

export default function CreativeMilestones() {
    return (
        <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 
                        className="text-[32px] md:text-[40px] font-medium tracking-tight text-black mb-16 text-center md:text-left"
                        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                        Selected Creative <span className="text-[#d4af37]">Milestones</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
                    {normalItems.map((milestone, index) => {
                        const Icon = milestone.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px" }}
                                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-[#d4af37]/50  transition-all group ${milestone.xlClass}`}
                            >
                                <div className="mb-4 text-[#4a4a4a] group-hover:text-[#d4af37] transition-colors duration-300">
                                    <Icon />
                                </div>
                                <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium">
                                    {milestone.text}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* Small screens: separate items for Naija and Poetry */}
                    {[naijaPolitoons, poetry].map((milestone, index) => {
                        const Icon = milestone.icon;
                        return (
                            <motion.div
                                key={`mobile-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10% 0px" }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="xl:hidden flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-[#d4af37]/50  transition-all group"
                            >
                                <div className="mb-4 text-[#4a4a4a] group-hover:text-[#d4af37] transition-colors duration-300">
                                    <Icon />
                                </div>
                                <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium">
                                    {milestone.text}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* Large screens: combined spanning item for Col 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden xl:flex flex-col gap-8 xl:col-start-5 xl:row-start-1 xl:row-span-2 h-full"
                    >
                        <div className="flex-[1] flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-[#d4af37]/50  transition-all group">
                            <div className="mb-4 text-[#4a4a4a] group-hover:text-[#d4af37] transition-colors duration-300">
                                <PenIcon />
                            </div>
                            <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium">
                                {naijaPolitoons.text}
                            </p>
                        </div>
                        <div className="flex-[3] flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-[#d4af37]/50  transition-all group">
                            <div className="mb-4 text-[#4a4a4a] group-hover:text-[#d4af37] transition-colors duration-300">
                                <GlobeIcon />
                            </div>
                            <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-medium">
                                {poetry.text}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
