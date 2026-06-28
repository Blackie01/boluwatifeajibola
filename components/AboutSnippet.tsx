"use client";
import React from "react";
import LightUpText from "./LightUpText";

export default function AboutSnippet() {
  const aboutText =
    "Hello, I am Bolu Ajibola. Defined by the four pillars of Research, Impact, Creativity, and Activism, my work traces the journey of ideas from polling sites to the performing arts. Whether I am consulting on digital humanitarian strategies or performing spoken word, my mission is to harmonize civic action with creative practice to spark meaningful social change.";

  return (
    <section className="bg-white min-h-[70vh] py-32 px-6 lg:px-12 flex flex-col justify-center relative">
      <div className="max-w-4xl mx-auto w-full">
        <LightUpText
          text={aboutText}
          styles="mb-10"
          textClassName="text-2xl md:text-4xl leading-tight font-medium"
          activeColor="#000000"
          inactiveColor="#D1D5DB"
        />
      </div>
    </section>
  );
}
