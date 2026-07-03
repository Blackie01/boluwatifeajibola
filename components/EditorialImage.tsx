'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  enableFullView?: boolean;
}

export default function EditorialImage({ 
  src, 
  alt, 
  aspectRatio = "aspect-[4/5]", 
  className = "",
  enableFullView = false
}: EditorialImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <div 
        className={`relative ${aspectRatio} w-full overflow-hidden rounded-sm group border border-[#2a2a2a] ${enableFullView ? 'cursor-pointer' : ''} ${className}`}
        onClick={() => enableFullView && setIsModalOpen(true)}
      >
          <Image 
            src={src} 
            alt={alt} 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover filter grayscale transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            priority
          />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <AnimatePresence>
        {isModalOpen && enableFullView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0C0C]/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="fixed top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 transition-colors duration-300 z-[110] cursor-pointer bg-black/20 hover:bg-black/40 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-w-7xl mx-auto cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
