// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const aboutText =
//   "Hello, I am Boluwatife Ajibola. Defined by the four pillars of Research, Impact, Creativity, and Activism, my work traces the journey of ideas from polling sites to the performing arts. Whether I am consulting on digital humanitarian strategies or performing spoken word, my mission is to harmonize civic action with creative practice to spark meaningful social change.";

// export default function About() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     if (!textRef.current || !sectionRef.current) return;

//     const words = textRef.current.querySelectorAll(".about-word");

//     gsap.fromTo(
//       words,
//       { color: "#828789" },
//       {
//         color: "#ffffff",
//         stagger: 0.05, // distributes the animation evenly across all words
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "bottom 60%",
//           scrub: 1, // smooth scrub tied to scroll position
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const words = aboutText.split(" ");

//   return (
//     <section ref={sectionRef} className="min-h-[100vh] bg-[#0a0a0a] px-12 py-32 flex items-center">
//       <h1 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl leading-tight">
//         {words.map((word, i) => (
//           <span key={i} className="about-word" style={{ color: "#323435ff" }}>
//             {word}{" "}
//           </span>
//         ))}
//       </h1>
//     </section>
//   );
// }

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutText =
  "Hello, I am Boluwatife Ajibola. Defined by the four pillars of Research, Impact, Creativity, and Activism, my work traces the journey of ideas from polling sites to the performing arts. Whether I am consulting on digital humanitarian strategies or performing spoken word, my mission is to harmonize civic action with creative practice to spark meaningful social change.";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll(".about-word");

    // Build a timeline with staggered word lighting
    const tl = gsap.timeline();
    tl.fromTo(
      words,
      { color: "#323435" },
      {
        color: "#ffffff",
        stagger: 0.1, // each word's light-up is offset within the timeline
        ease: "none",
      },
    );

    // Scrub the entire timeline against scroll progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%", // when section top hits 20% from viewport top
      end: "bottom 80%", // when section bottom hits 80% from viewport top
      scrub: 1,
      animation: tl,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const words = aboutText.split(" ");

  return (
    <section
      ref={sectionRef}
      className="min-h-[100vh] bg-[#0a0a0a] px-12 py-32 flex items-center"
    >
      <h1
        ref={textRef}
        className="text-4xl md:text-5xl lg:text-6xl leading-tight sticky top-[20vh]"
      >
        {words.map((word, i) => (
          <span key={i} className="about-word" style={{ color: "#323435" }}>
            {word}{" "}
          </span>
        ))}
      </h1>
    </section>
  );
}
