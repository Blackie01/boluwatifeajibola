'use client'
import React from "react"
import { motion } from "framer-motion"
import PageTitle from "@/components/PageTitle"
import EditorialImage from "@/components/EditorialImage"
import { galleryImages } from "@/utils/images"

export default function Gallery(){
    const aspectRatios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]"];

    return (
        <main className="min-h-screen bg-[#0C0C0C] flex flex-col justify-start overflow-clip">
            <section className="text-white pt-60 pb-32 px-6 md:px-12 w-full">
                <div className="max-w-7xl mx-auto w-full">
                    <PageTitle
                        title="Gallery"
                        subTitle="A visual exploration of my journey, work, and experiences"
                    />
                </div>
            </section>

            {/* Masonry Gallery Section */}
            <section className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 w-full border-t border-[#0a0a0a]/10 flex-grow">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((src, index) => {
                            const aspect = aspectRatios[index % aspectRatios.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10% 0px" }}
                                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                    className="break-inside-avoid"
                                >
                                    <EditorialImage
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        aspectRatio={aspect}
                                        className="border border-[#0a0a0a]/10 shadow-sm"
                                        enableFullView={true}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}