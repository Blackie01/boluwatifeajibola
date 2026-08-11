import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import PageTitle from "@/components/PageTitle"
import { getPoemById, poems } from "@/utils/poemData"

export function generateStaticParams() {
  return poems.map((poem) => ({
    id: poem.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    return { title: "Poem Not Found" };
  }

  return {
    title: poem.title,
    description: `Read "${poem.title}" — a spoken word poem by Bolu Ajibola (MC BSharp).`,
    alternates: {
      canonical: `/creative-practice/poems/${poem.id}`,
    },
  };
}

export default async function Poem({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const poem = getPoemById(id);

    if (!poem) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-x-clip">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                <Link 
                    href="/creative-practice/poems"
                    className="inline-flex items-center text-[#a0a0a0] hover:text-[#d4af37] transition-colors mb-8 md:mb-12 text-sm md:text-base font-light tracking-wide"
                >
                    <span className="mr-3 text-lg leading-none transition-transform group-hover:-translate-x-1">←</span> 
                    Back to poems
                </Link>
                <PageTitle
                    title={poem.title}
                    subTitle="Poem"
                />
            </div>

            {/* Full width image with EditorialImage styles */}
            <div className="w-full relative h-[50vh] md:h-[70vh] my-16 overflow-hidden group border-y border-[#2a2a2a]">
                <Image
                    src={poem.image}
                    alt={poem.title}
                    fill
                    sizes="100vw"
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                    priority
                />
                <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4 md:m-8" />
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32">
                <div className="max-w-3xl mx-auto text-[#a0a0a0] text-base leading-relaxed flex flex-col gap-10">
                    {poem.stanzas.map((stanza, idx) => (
                        <p key={idx} className="whitespace-pre-line font-light">
                            {stanza}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    )
}