'use client'
import React from "react"
import { motion } from "framer-motion"

const tiles = [
    { id: 1, label: "Research" },
    { id: 2, label: "Impact" },
    { id: 3, label: "Creativity" },
    { id: 4, label: "Activism" },
]

export default function Hero() {
    return (
        <section className="min-h-screen overflow-hidden">
            <h1 className=" font-bold font-outfit fixed top-0 left-0 right-0 border border-[red] z-50 text-white text-center py-5">The Boluwatife Ajibola</h1>
            <motion.section 
                className="grid grid-cols-4 h-screen"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2, // Stagger entry of each tile
                        }
                    }
                }}
            >
                {tiles.map((tile) => (
                    <motion.div 
                        key={tile.id}
                        className="flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold bg-black text-white"
                        variants={{
                            hidden: { 
                                y: -250, // Start slightly above
                                opacity: 0, 
                                filter: "blur(20px)" // Initial blur
                            },
                            visible: { 
                                y: 0, // Fall into place
                                opacity: 1, 
                                filter: "blur(0px)",
                                transition: {
                                    duration: 1.4,
                                    ease: [0.16, 1, 0.3, 1], // Super smooth custom ease-out
                                }
                            }
                        }}
                    >
                        {tile.label}
                    </motion.div>
                ))}
            </motion.section>
        </section>
    )
}