'use client'
import React from 'react'
import Image from 'next/image'

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export default function EditorialImage({ 
  src, 
  alt, 
  aspectRatio = "aspect-[4/5]", 
  className = "" 
}: EditorialImageProps) {
  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-sm group border border-[#2a2a2a] ${className}`}>
        <Image 
          src={src} 
          alt={alt} 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
          priority
        />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  )
}
