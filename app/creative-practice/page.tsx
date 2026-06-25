'use client'
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CreativePractice() {
    return (
        <main className="min-h-screen bg-[#0C0C0C]">
            {/* Full Screen Hero Section */}
            <section className="relative w-full h-[100svh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/bsharp-creative-hero.jpg"
                        alt="Creative Practice Hero"
                        fill
                        className="object-cover object-[center_25%]"
                        priority
                        quality={100}
                    />
                    {/* Optional subtle gradient to ensure the background isn't too overpowering if needed, but keeping it mostly clear */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* The Text Overlay positioned at the bottom */}
                <div className="absolute inset-0 w-full h-full flex items-end justify-between p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex flex-col md:flex-row md:items-end justify-between gap-1 md:gap-0"
                    >
                        {/* Left side text */}
                        <div className="text-left mb-1 md:mb-0">
                            <p className="text-[#fff] font-bold uppercase text-[32px] leading-[1] md:text-[50px] md:leading-[60px] tracking-tight">
                                Creative
                            </p>
                            <h1
                                className="text-[20px] text-white/80 font-light leading-[1.1] md:leading-[1.2] tracking-wide"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                Creativity processes <br className="hidden md:block" />experiences
                            </h1>
                        </div>

                        {/* Right side text */}
                        <div className="text-left md:text-right">
                            <p className="text-[#fff] font-bold uppercase text-[32px] leading-[1] md:text-[50px] md:leading-[60px] tracking-tight">
                                Practice
                            </p>
                            <h1
                                className="text-[20px] text-white/80 font-light leading-[1.1] md:leading-[1.2] tracking-wide"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                and communicates convictions <br className="hidden md:block" />
                                with emotions
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Biographical Text Section */}
            <section className="bg-white w-full py-24 md:py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-12"
                    >
                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            I realised early, long before I became a researcher, that ideas are mobile. They can move through sound, rhythm, rhetoric, performance, and creativity.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            My creative journey began early. When I was about five years old, I would gather stray plastics and old cooking pots from my mother’s kitchen and arrange them into something that looked like a drum set. I would pick up tiny sticks, or sometimes use my school pencils, and make all sorts of rhythmic and not-so-rhythmic sounds. At other times, I would sit on my late dad’s motorcycle, using the fuel tank as a snare drum, the left side of the handlebar as a hi-hat, and the right side as a ride cymbal. This was the beginning of the journey of “Drummer Boy Bolu” and later, “B Sharp.”
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            By the age of eight, I was playing drums in my local church, and I would go on to play on bigger platforms as I grew older. As a teenager, I became fascinated by other musical instruments and somehow picked up the bass guitar and piano. I started playing these instruments without any formal training. I learnt them by myself.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            By the age of fifteen, I had become a music director. In 2014, I was appointed Provincial Instrumentalist Coordinator of a large faith organisation, RCCG Lagos Province 25, covering over 100 branches and choir teams.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            On campus at Obafemi Awolowo University, I was recognised and awarded Best Guitarist by Redeemed Christian Fellowship, one of the largest Christian fellowships in the university.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            My music and creative abilities have also been recognised in other fora. More about this part of my background can be read <Link target="_blank" rel="noopener noreferrer" className='underline' href="https://idowuomisore.wordpress.com/2015/06/01/inspiring-story-of-multi-instrumentalist-gospel-singer-boluwatife-ajibola-a-k-a-bsharp-as-he-releases-his-single-your-grace-june-27-2015/" >in an article published</Link> by Mr Idowu Omisore, an author and PR expert.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            Over the years, my creative work has expanded to other forms of art and expression. I have grown as a musician, songwriter, composer, spoken word artist, poet, creative writer, and public performer.
                        </p>

                        <p className="text-[16px] text-gray-800 leading-relaxed mb-6 break-inside-avoid">
                            My creative practice is rooted in the belief that creativity is a way of processing experience and communicating conviction. It is also a language for communicating with deep emotions.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}