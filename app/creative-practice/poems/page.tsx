import React from "react"
import Link from "next/link"
import Image from "next/image"
import PageTitle from "@/components/PageTitle"
import { poems } from "@/utils/poemData"

export default function PoemsGallery() {
    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 pb-32 flex flex-col justify-start">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                <PageTitle
                    title="Poetry"
                    subTitle="Creative Practice"
                />

                <div className="mt-16 md:mt-24 columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                    {poems.map((poem) => (
                        <Link 
                            key={poem.id} 
                            href={`/creative-practice/poems/${poem.id}`}
                            className="block break-inside-avoid group"
                        >
                            {/* Image Container */}
                            <div 
                                className={`relative w-full overflow-hidden mb-4 ${
                                    poem.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                                }`}
                            >
                                <Image
                                    src={poem.image}
                                    alt={poem.title}
                                    fill
                                    className="object-cover filter grayscale transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover Border Accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 
                                    className="text-xl md:text-2xl text-white font-medium leading-snug group-hover:text-[#d4af37] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-outfit)' }}
                                >
                                    {poem.title}
                                </h3>
                                <p className="text-[#a0a0a0] text-sm mt-3 line-clamp-2 leading-relaxed">
                                    {poem.stanzas[0]}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}