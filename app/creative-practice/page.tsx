"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SummarySectionDisplay from "@/components/SummarySectionDisplay";
import ActionText from "@/components/ActionText";
import CreativeMilestones from "@/components/CreativeMilestones";
import CreativeCollaborationsSection from "@/components/CreativeCollaborationsSection";

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
            className="w-full"
          >
            {/* Mobile Text (joined) */}
            <div className="block md:hidden text-left mb-2">
              <p className="text-[#fff] font-bold uppercase text-[28px] leading-[1.1] tracking-tight">
                Creative Practice
              </p>
              <h1
                className="text-base text-white/80 font-light leading-[1.3] tracking-wide mt-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Creativity processes experiences and communicates convictions
                with emotions
              </h1>
            </div>

            {/* Desktop Text (split) */}
            <div className="hidden md:flex w-full items-end justify-between">
              {/* Left side text */}
              <div className="text-left">
                <p className="text-[#fff] font-bold uppercase text-[50px] leading-[60px] tracking-tight">
                  Creative
                </p>
                <h1
                  className="text-[20px] text-white/80 font-light leading-[1.2] tracking-wide"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Creativity processes <br />
                  experiences
                </h1>
              </div>

              {/* Right side text */}
              <div className="text-right">
                <p className="text-[#fff] font-bold uppercase text-[50px] leading-[60px] tracking-tight">
                  Practice
                </p>
                <h1
                  className="text-[20px] text-white/80 font-light leading-[1.2] tracking-wide"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  and communicates convictions <br />
                  with emotions
                </h1>
              </div>
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
            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              I realised early, long before I became a researcher, that ideas
              are mobile. They can move through sound, rhythm, rhetoric,
              performance, and creativity.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              My creative journey began early. When I was about five years old,
              I would gather stray plastics and old cooking pots from my
              mother’s kitchen and arrange them into something that looked like
              a drum set. I would pick up tiny sticks, or sometimes use my
              school pencils, and make all sorts of rhythmic and not-so-rhythmic
              sounds. At other times, I would sit on my late dad’s motorcycle,
              using the fuel tank as a snare drum, the left side of the
              handlebar as a hi-hat, and the right side as a ride cymbal. This
              was the beginning of the journey of “Drummer Boy Bolu” and later,
              “B Sharp.”
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              By the age of eight, I was playing drums in my local church, and I
              would go on to play on bigger platforms as I grew older. As a
              teenager, I became fascinated by other musical instruments and
              somehow picked up the bass guitar and piano. I started playing
              these instruments without any formal training. I learnt them by
              myself.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              By the age of fifteen, I had become a music director. In 2014, I
              was appointed Provincial Instrumentalist Coordinator of a large
              faith organisation, RCCG Lagos Province 25, covering over 100
              branches and choir teams.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              On campus at Obafemi Awolowo University, I was recognised and
              awarded Best Guitarist by Redeemed Christian Fellowship, one of
              the largest Christian fellowships in the university.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              My music and creative abilities have also been recognised in other
              fora. More about this part of my background can be read{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href="https://idowuomisore.wordpress.com/2015/06/01/inspiring-story-of-multi-instrumentalist-gospel-singer-boluwatife-ajibola-a-k-a-bsharp-as-he-releases-his-single-your-grace-june-27-2015/"
              >
                in an article published
              </Link>{" "}
              by Mr Idowu Omisore, an author and PR expert.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              Over the years, my creative work has expanded to other forms of
              art and expression. I have grown as a musician, songwriter,
              composer, spoken word artist, poet, creative writer, and public
              performer.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mb-6 break-inside-avoid">
              My creative practice is rooted in the belief that creativity is a
              way of processing experience and communicating conviction. It is
              also a language for communicating with deep emotions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spoken Word and Poetry Video Section */}
      <div className="bg-[#0C0C0C] w-full relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <SummarySectionDisplay
            title="Spoken Word and Poetry"
            theme="dark"
            imagePosition="left"
            aspectRatio="aspect-[4/5] lg:aspect-[3/4]"
            videoEmbed={
              <iframe
                className="absolute -top-[48px] left-0 w-full h-[calc(100%+48px)] rounded-sm object-cover"
                src="https://www.youtube.com/embed/QhEpiF9pudA"
                width="1440"
                height="900"
                frameBorder="0"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            }
            paragraphs={[
              "Words have always been central to how I think and engage the world.",
              "As a spoken word artist and poem writer, I have delivered spoken word performances at more than 25 events, especially between my late teenage years and mid-twenties. These performances allowed me to explore voice, rhythm, conviction, and audience connection in ways that continue to shape how I speak, write, teach, and communicate research today.",
              "My spoken word and poetry often engage themes of hope, justice, faith, identity, civic responsibility, and social change. Some pieces are deeply personal; others respond to public issues, collective struggles, and the emotional life of society.",
              "After a period of quieter creative practice, I returned more publicly to spoken word at the South-South Social Movements Convergence in Cape Town in 2025, where I presented poetry, spoken word, and original chant/song compositions connected to activism, solidarity, and democratic imagination.",
            ]}
            actionText="Find poems"
            actionLink="/creative-practice/poems"
          />
        </div>
      </div>

      {/* Creative Writing and Political Imagination Section */}
      <div className="bg-white w-full py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Desktop Layout: 3x3 Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={`cartoon-${num}`}
                className="w-full aspect-square relative overflow-hidden rounded-sm group border border-[#0a0a0a]/20"
              >
                <Image
                  src={`/cartoon${num}.png`}
                  alt={`NaijaPolitoons Cartoon ${num}`}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  sizes="(max-width: 1024px) 33vw, 400px"
                />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
              </div>
            ))}

            {/* Center Text Block */}
            <div className="w-full aspect-square flex flex-col justify-center items-center text-center p-4 bg-gray-50 border border-gray-100 rounded-sm border border-[#0a0a0a]/20 relative overflow-hidden group">
              <h2
                className="text-[20px] font-medium tracking-tight text-black mb-2 leading-tight"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Creative writing and political imagination
              </h2>
              <p className="text-[14px]  text-[#4a4a4a] leading-relaxed mb-2">
                My creative work also extends into writing, satire,
                storytelling, and civic imagination. In 2020, I co-founded
                NaijaPolitoons, a creative civic platform that uses humour and
                cartooned content as advocacy instruments.
              </p>
              <p className="text-[14px]  text-[#4a4a4a] leading-relaxed mb-6">
                Through satire, visual commentary, and accessible political
                messaging, NaijaPolitoons promotes democratic values, citizen
                education, accountability, and good governance.
              </p>
              <ActionText
                text="Explore NaijaPolitoons"
                href="https://www.instagram.com/npolitoons"
                theme="light"
              />
            </div>

            {[5, 6, 7, 8].map((num) => (
              <div
                key={`cartoon-${num}`}
                className="w-full aspect-square relative overflow-hidden rounded-sm group border border-[#0a0a0a]/20"
              >
                <Image
                  src={`/cartoon${num}.png`}
                  alt={`NaijaPolitoons Cartoon ${num}`}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  sizes="(max-width: 1024px) 33vw, 400px"
                />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="flex flex-col lg:hidden gap-12">
            {/* Text Block */}
            <div className="flex flex-col items-start text-left px-4">
              <h2
                className="text-[20px] font-medium tracking-tight text-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Creative writing and political imagination
              </h2>
              {/* <div className="h-[1px] w-[60px] bg-black/10 mb-8" /> */}
              <div className="flex flex-col gap-4 text-[14px] text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl">
                <p>
                  My creative work also extends into writing, satire,
                  storytelling, and civic imagination.
                </p>
                <p>
                  In 2020, I co-founded NaijaPolitoons, a creative civic
                  platform that uses humour and cartooned content as advocacy
                  instruments. Through satire, visual commentary, and accessible
                  political messaging, NaijaPolitoons promotes democratic
                  values, citizen education, accountability, and good
                  governance.
                </p>
                <p>
                  NaijaPolitoons sits at the intersection of creativity,
                  activism, and public engagement. It shows how artistic and
                  humorous forms can contribute to civic education and
                  democratic conversation, especially in contexts where people
                  are disengaging.
                </p>
              </div>
              <ActionText
                text="Explore NaijaPolitoons"
                href="https://www.instagram.com/npolitoons?igsh=MWJoZzZ5ZWtxMnhtbA=="
                theme="light"
              />
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={`cartoon-mobile-${num}`}
                  className="w-full aspect-square relative overflow-hidden rounded-sm group shadow-sm"
                >
                  <Image
                    src={`/cartoon${num}.png`}
                    alt={`NaijaPolitoons Cartoon ${num}`}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0C0C0C] w-full py-24 md:py-32 relative z-10 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute top-[5%] -right-[15%] md:-right-[25%] w-[90%] h-[90%] rounded-full bg-[#111] border border-white/5 shadow-2xl group-hover:rotate-180 transition-transform duration-[4s] ease-linear hidden md:block z-0 pointer-events-none">
                <div className="absolute inset-[2%] rounded-full border border-white/5" />
                <div className="absolute inset-[10%] rounded-full border border-white/5" />
                <div className="absolute inset-[20%] rounded-full border border-white/5" />
                <div className="absolute inset-[30%] rounded-full border border-white/5" />
                <div className="absolute inset-[40%] rounded-full border border-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full bg-gradient-to-br from-[#d4af37] to-[#96750b] flex items-center justify-center">
                  <div className="w-[15%] h-[15%] rounded-full bg-[#0C0C0C]" />
                </div>
              </div>

              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl z-10">
                <Image
                  src="/music-poster.png"
                  alt="Music and Composition"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1s] ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7 relative z-20"
            >
              <h2
                className="text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Music and <span className="text-[#d4af37]">Composition</span>
              </h2>
              <div className="h-[1px] w-[80px] bg-[#2a2a2a] mb-8" />

              <div className="flex flex-col gap-6 text-base max-w-2xl text-[#a0a0a0] leading-relaxed">
                <p>
                  Music has been one of the longest-running creative languages
                  of my life.
                </p>
                <p>
                  Across more than 25 years of musical practice, I have played,
                  directed, composed, and written songs shaped by themes of
                  faith, hope, resilience, grace, and joy. My songs often emerge
                  from moments of reflection and conviction, bearing messages
                  that speak to the human emotional and spiritual yearnings.
                </p>
                <p>
                  My first single, “Your Grace,” was released in 2015, and
                  another “Don’t Give Up” in 2017. My recent release, “The Joy
                  of the Lord,” released in 2026, continues this creative
                  journey through music that speaks to spiritual grounding and
                  inner resilience.
                </p>
                <div className="mt-4">
                  <ActionText
                    text="Explore my compositions"
                    href="https://www.youtube.com/watch?v=nlcggnNWKUQ&list=OLAK5uy_ngt-VtvGITE-X_7gevUtYa3hJWH7U3EP0&index=2"
                    theme="dark"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CreativeMilestones />
      <CreativeCollaborationsSection />
    </main>
  );
}
