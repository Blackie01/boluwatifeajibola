"use client";
import React from "react";
import LightUpText from "./LightUpText";
import Link from "next/link";

export default function AboutSnippet() {
  const aboutText = `What distinguishes me from the typical researcher, consultant, or R&D professional is not simply that I work across these different spaces. It is that I know how to connect them.

I understand research from the inside because I produce it. I understand research development because I support proposals, funding pipelines, partnerships, and institutional strategy. I understand impact because I help evidence become useful beyond academia. And I understand audiences because I have spent years communicating through stages, music, poetry, panels, and public events.

Organisations do not only need good ideas. They need ideas that can be sharpened, funded, communicated, translated, and made meaningful to the people who matter. I bring the rare ability to work across the full life of those ideas.

That is my edge. Turning ideas into public value and social change.`;

  return (
    <section className="bg-white min-h-[70vh] py-24 lg:py-32 px-6 lg:px-12 flex flex-col justify-center relative">
      <div className="relative h-full max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        
        {/* Left Side */}
        <div className="lg:sticky lg:top-32 self-start lg:col-span-4 flex flex-col justify-start pt-2">
          <p className="text-sm md:text-base text-black font-semibold mb-4">
            Ever wondered how ideas move across disciplines, sectors, and creative forms?
          </p>
          <p className="text-sm md:text-base text-[#666666] leading-relaxed">
            I embody that movement. My work travels from researching the democracy–development nexus to research development, grant strategy, impact, policy engagement, and creativity.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-8">
          
          <h2 className="text-3xl uppercase md:text-4xl font-medium mb-8 text-black" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            The Bolu Ajibola Difference
          </h2>

          <LightUpText
            text={aboutText}
            styles=""
            textClassName="text-[18px] md:text-[22px]  leading-[1.6] font-medium whitespace-pre-line"
            activeColor="#000000"
            inactiveColor="#E5E7EB"
          />
        </div>

      </div>
    </section>
  );
}
