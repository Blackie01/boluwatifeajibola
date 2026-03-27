"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "I have been working with Boluwatife for a month now and he is working on my company as a Team Leader and Researcher. I'm very impressed so much of things have changed on the team for a good way and his insights are invaluable.",
    name: "Oluwaseun Adeyemi",
    role: "Director of Policy",
    date: "September 2023"
  },
  {
    id: 2,
    text: "Fast, reliable, and talented, he turned a vague idea into a polished research report. Just like he mentions, his analytical sense is really unmatched.",
    name: "Chukwudi Okafor",
    role: "NGO Coordinator",
    date: "August 2023"
  },
  {
    id: 3,
    text: "I worked with him on a data analysis project and was impressed right away. He got things moving quickly, kept everything clear, and delivered exactly what was needed. What I appreciated most was his attention to detail and rigor.",
    name: "Amina Bello",
    role: "Project Manager",
    date: "July 2023"
  },
  {
    id: 4,
    text: "Creative beyond limits. We hired him for a short research gig. The insights he provided boosted our strategy instantly, we see results overnight. The way he communicates complex data is simply phenomenal.",
    name: "Tunde Bakare",
    role: "Strategy Consultant",
    date: "October 2023"
  },
  {
    id: 5,
    text: "I asked for minimal but strong, and that's exactly what I got. The research framing feels timeless and profound. A true intellectual partner.",
    name: "Ngozi Eze",
    role: "Academic Researcher",
    date: "November 2023"
  },
  {
    id: 6,
    text: "Working with Boluwatife, I can confidently say he is one of the most talented people I've ever met. He is a true prodigy when it comes to social research — his creativity, precision, and ability to understand complex socio-political dynamics are just incredible.",
    name: "Ibrahim Musa",
    role: "Political Analyst",
    date: "December 2023"
  },
  {
    id: 7,
    text: "Professional as usual! This is the second time I hire him and I could say I am simply amazed how fast and efficient he does his work. He is so skillful and always very kind person to communicate with.",
    name: "Yewande Olatunji",
    role: "Communications Lead",
    date: "January 2024"
  },
  {
    id: 8,
    text: "He is a beast but also a great communicator... I got convinced to adopt his methodologies I wasn't interested in in the first place but look at our results now!",
    name: "Emeka Nwosu",
    role: "Campaign Director",
    date: "February 2024"
  },
  {
    id: 9,
    text: "I have worked with many researchers in the past, but this guy is by far the best. His attention to detail and ability to synthesize data are unmatched in the industry.",
    name: "Folake Abiodun",
    role: "Civil Society Organizer",
    date: "March 2024"
  }
];

export default function Testimonials() {
  return (
    <section 
      className="bg-[#ffffff] text-black pt-32 px-4 sm:px-8 md:px-12 lg:px-24 w-full relative" 
      data-nav-theme="light"
    >
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#1a1a1a]">
            What <span className="text-[#A479FF]">people</span> say
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light">
            A few thoughts from people who have experienced the value of working together.
          </p>
        </div>
        
        <div className="relative">
          {/* CSS Masonry Grid */}
          {/* Use pb-48 to ensure enough space beneath the grid for the fade */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-48">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (Object.values(t).join("").length % 3) * 0.15 }}
                className="break-inside-avoid bg-white p-8 md:p-10 rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#d7d8db] flex flex-col h-auto"
              >
                <p className="text-[#333] leading-relaxed mb-8 text-[15px] md:text-base font-medium">"{t.text}"</p>
                
                <hr className="border-gray-200 mb-6 w-full" />
                
                <div className="mt-auto">
                  <h4 className="font-bold text-[#1a1a1a] mb-1">{t.name}</h4>
                  <p className="text-xs font-semibold text-gray-400 mb-1">{t.role}</p>
                  <p className="text-[11px] text-gray-400">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fading Effect on the Bottom of the Grid */}
          <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
}