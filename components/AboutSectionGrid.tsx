"use client";
import React from "react";
import ActionText from "./ActionText";

export default function AboutSectionGrid() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4 md:px-8 flex flex-col justify-center relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-[#E5E5E5]">
          {/* Cell 1 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors duration-300">
            <p className="text-base font-medium leading-snug text-black">
              I understand research from the inside because I produce it.
            </p>
            <div className="mt-12 flex items-center gap-3 text-xs tracking-widest uppercase text-gray-400 font-semibold">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              Research
            </div>
          </div>

          {/* Cell 2 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors duration-300">
            <p className="text-base font-medium leading-snug text-black">
              I understand research development because I support proposals, funding pipelines, and institutional strategy.
            </p>
            <div className="mt-12 flex items-center gap-3 text-xs tracking-widest uppercase text-gray-400 font-semibold">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              Development
            </div>
          </div>

          {/* Cell 3 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] flex flex-col justify-between bg-white hover:bg-gray-50 transition-colors duration-300">
            <p className="text-base font-medium leading-snug text-black">
              I understand impact because I help evidence become useful beyond academia. And I understand audiences because I have spent years communicating through stages, music, poetry, panels, and public events.
            </p>
            <div className="mt-12 flex items-center gap-3 text-xs tracking-widest uppercase text-gray-400 font-semibold">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              Impact & Engagement
            </div>
          </div>

          {/* Cell 4 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] bg-[#FAFAFA] flex flex-col justify-between">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-medium text-black mb-6"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                The Bolu Ajibola Difference
              </h2>
              <p className="text-[#666666] leading-relaxed text-sm lg:text-base">
                What distinguishes me from the typical researcher, consultant, or
                R&D professional is not simply that I work across these different
                spaces. It is that I know how to connect them.
              </p>
            </div>
          </div>

          {/* Cell 5 (Spans 2 columns) */}
          <div className="col-span-1 md:col-span-2 p-8 lg:p-12 border-r border-b border-[#E5E5E5] flex flex-col justify-center bg-white">
            <p className="text-base lg:leading-[1.3] font-medium text-black">
              <span className="text-[#999999]">
                Ever wondered how ideas move across disciplines, sectors, and
                creative forms?
              </span>{" "}
              I embody that movement. My work travels from researching the
              democracy–development nexus to research development, grant
              strategy, impact, policy engagement, and creativity.
            </p>
          </div>

          {/* Cell 6 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] flex flex-col justify-between bg-white">
            <p className="text-base font-medium text-black mb-8 leading-snug">
              That is my edge. Turning ideas into public value and social change.
            </p>
            <div className="mt-auto">
              <ActionText text="Read Full Bio" href="/about" theme="light"/>
            </div>
          </div>

          {/* Cell 7 */}
          <div className="p-8 lg:p-10 border-r border-b border-[#E5E5E5] bg-[#FAFAFA] flex flex-col justify-end">
            <p className="text-[#666666] text-sm mb-6 font-medium">
              Ready to turn ideas into impact?
            </p>
            <div>
            <ActionText text="Get In Touch" href="/contact" theme="light"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
