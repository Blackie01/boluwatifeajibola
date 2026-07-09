"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";

export default function ProtestsAndPolls() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      // Trigger when section reaches the middle of the screen
      const triggerPoint = window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    // Call once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 flex flex-col justify-start overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <PageTitle
          title="Protests and Polls"
          subTitle="Doctoral Project Page"
        />
      </div>

      {/* Full width image with EditorialImage styles */}
      <div className="w-full relative h-[50vh] md:h-[70vh] my-16 overflow-hidden group border-y border-[#2a2a2a]">
        <Image
          src="/abstract-polls.jpg"
          alt="Protests and Polls"
          fill
          sizes="100vw"
          className="object-cover filter grayscale transition-all duration-700 ease-out scale-105 group-hover:scale-100"
          priority
        />
        <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4 md:m-8" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          {/* Left Content Column */}
          <div className="lg:col-span-8 text-[#a0a0a0] text-base leading-relaxed flex flex-col gap-16">
            <p className="text-[22px] md:text-[28px] text-white font-light leading-snug font-outfit">
              How do social movements shape elections – and how do elections reshape movements? 
            </p>

            <section id="about" className="scroll-mt-32">
              <h2 className="text-white text-2xl font-medium mb-6 font-outfit">
                About
              </h2>
              <div className="flex flex-col gap-6">
                <p>
                  Protests and Polls (PaP) explores the reciprocal relations
                  between two forms of political mobilisation: social movements
                  and elections. PaP’s attempt to interrogate the
                  interpenetration of movement and election rhythms takes issue
                  with existing approaches that draw boundaries between both
                  realms of contention and those that systematise the influence
                  of one upon the other.
                </p>
                <p>
                  It essentialises key aspects of the interactional dynamics
                  between movements and elections that have been overlooked by
                  existing scholarship. Hence, its focus on elements that
                  mediate the interrelations – in their symbolic, discursive,
                  and emotional forms. PaP also acknowledges an epistemological
                  divide that arises from the failure of African and Africanist
                  literature to engage the two fields of movements and politics
                  in a productive and critical dialogue.
                </p>
                <p>
                  Hence, it explores Nigeria’s 2020 #EndSARS movement, the
                  pre-and post-election character of the Obidient movement, and
                  the 2023 and 2027 general election cycles to theorise a
                  much-needed African perspective on the convergence of
                  movements and (electoral) politics. This approach will enhance
                  our understanding of the dynamics and mobilities of
                  contentious rhythms in the African public sphere, and how
                  these mediate the mobilisation or demobilisation of publics
                  behind democratic agendas.
                </p>
              </div>
            </section>

            <section id="significance" className="scroll-mt-32">
              <h2 className="text-white text-2xl font-medium mb-6 font-outfit">
                Significance
              </h2>
              <div className="flex flex-col gap-6">
                <p>
                  Nigeria&apos;s 2020 #EndSARS protests are among the largest
                  youth-led demonstrations Africa has witnessed in recent
                  history, and the 2023 general elections stand out as one of
                  Nigeria&apos;s most competitive elections. The Nobel Laureate,
                  Professor Wole Soyinka, when speaking about the elections
                  maintained that &quot;#EndSARS was a significant momentum in
                  the mobilisation of alternative force within the nation&quot;
                  (ChannelsTV 2023).
                </p>
                <p>
                  Arguably, the sequence and coincidence of events, as well as
                  the exchanges between movement and political actors in both
                  cycles, are rare occurrences in any country&apos;s political
                  life. Thus, these moments are being maximised to theorise an
                  African dimension of SM-election interrelations, which remains
                  relatively overlooked in social movements research.
                </p>
                <p>
                  Although focused on the Nigerian context, this study will
                  uncover new socio-political underpinnings of global challenges
                  manifesting as democratic backsliding, political apathy and
                  negative politics in Africa. In a decade marked by pronounced
                  forms of autocracy, military takeovers, misinformation and
                  speech censorship, this study will point civil society and
                  legislative actors to institutional and socio-cultural
                  requisites for the resilience of democracy in Africa. In a
                  post-pandemic digital age, this study emerges as a bridge
                  between traditional SM theories and extant expressions of
                  digitally-mediated contention.
                </p>
              </div>
            </section>

            <section id="data-and-methods" className="scroll-mt-32">
              <h2 className="text-white text-2xl font-medium mb-6 font-outfit">
                Data and methods
              </h2>
              <p>
                PaP adopts a constructionist, ethnographically informed approach
                rooted in political sociology and affect studies. This approach
                combines interviews (biographic narrative interviews and
                semi-structured interviews), participant observation and visual
                and textual analysis.
              </p>
            </section>

            <section id="outputs" className="scroll-mt-32">
              <h2 className="text-white text-2xl font-medium mb-6 font-outfit">
                Outputs
              </h2>
              <div className="flex flex-col gap-12">
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">
                    Poster presentation at the 2025 WRDTP conference
                  </h3>
                  <p className="mb-6">
                    This poster visualises hope as vehicling emotional currents
                    from protests to polls, from despair to renewed or even
                    diminished engagement.
                  </p>
                  <div className="w-full relative border border-white/10 rounded-sm overflow-hidden bg-white/5">
                    <Image
                      src="/poster-design.png"
                      alt="Poster Presentation at the 2025 WRDTP conference"
                      width={800}
                      height={1131}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-lg font-medium mb-6">
                    Conference presentations
                  </h3>
                  <ul className="flex flex-col gap-8 list-none">
                    <li className="pl-6 border-l-2 border-[#d4af37]/50 relative">
                      <Link
                        target="_blank"
                        className="underline hover:text-white/80"
                        href={
                          "https://nomadit.co.uk/conference/dsa2026/paper/96353"
                        }
                      >
                        Youth in sustained action: Activist biographies at the
                        intersection of development deadlock and developmental
                        aspirations in Nigeria.
                      </Link>
                      <br />
                      <span className="text-white/70 mt-2 block italic">
                        Development Studies Association Conference, UK.
                      </span>
                    </li>
                    <li className="pl-6 border-l-2 border-[#d4af37]/50 relative">
                      Tracing activist trajectories between democratic origins
                      and futures: A biographical approach. <br />
                      <span className="text-white/70 mt-2 block italic">
                        Lagos Studies Association Conference.
                      </span>
                    </li>
                    <li className="pl-6 border-l-2 border-[#d4af37]/50 relative">
                      When social movement legacies become political capitals:
                      Exploring an African dimension to social
                      movements-elections interrelations. <br />
                      <span className="text-white/70 mt-2 block italic">
                        PSA 75th Annual International Conference, Birmingham,
                        UK.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="fieldwork" className="scroll-mt-32">
              <h2 className="text-white text-2xl font-medium mb-6 font-outfit">
                Fieldwork in Nigeria
              </h2>
              <div className="flex flex-col gap-6">
                <p>
                  From January to March 2026, I undertook a major phase of
                  fieldwork in Nigeria conducting interviews and observations on
                  how social movements and electoral politics intersect. I met
                  with a range of actors including civil society actors,
                  movement leaders, political and non-partisan activitsts, and
                  political party members, affiliates, and consultants. On the
                  field, I examined how discourse, symbols, and emotions shape
                  mobilisation and democratic engagement across protests and
                  elections.
                </p>
                <p className="italic text-white mt-4 border-l-2 border-white/20 pl-6 py-2">
                  Watch this space for findings and publications from this
                  research.
                </p>
              </div>
            </section>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 relative mt-16 lg:mt-0">
            <div className="sticky top-32 flex flex-col gap-12">
              {/* Metadata */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 border-b border-white/10 pb-10">
                <div className="col-span-1 text-[#a0a0a0] text-xs tracking-wider uppercase pt-1">
                  Affiliation
                </div>
                <div className="col-span-2 text-white text-sm leading-relaxed text-right flex flex-col items-end gap-2">
                  <span>
                    Department of Politics and International Relations,
                    <br />
                    University of York
                  </span>
                  <div className="w-[120px] h-[40px] relative mt-1">
                    <Image
                      src="/org-logos/University of York logo.png"
                      alt="University of York"
                      fill
                      className="object-contain object-right grayscale invert mix-blend-screen opacity-90"
                    />
                  </div>
                </div>

                <div className="col-span-1 text-[#a0a0a0] text-xs tracking-wider uppercase pt-1">
                  Supervisors
                </div>
                <div className="col-span-2 text-white text-sm leading-relaxed text-right">
                  Professor Indrajit Roy and Dr Ruth Kelly
                </div>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block">
                <h3 className="text-white text-xs tracking-wider uppercase mb-8">
                  On this page
                </h3>
                <nav className="flex flex-col gap-5">
                  {[
                    { id: "about", label: "About" },
                    { id: "significance", label: "Significance" },
                    { id: "data-and-methods", label: "Data and methods" },
                    { id: "outputs", label: "Outputs" },
                    { id: "fieldwork", label: "Fieldwork in Nigeria" },
                  ].map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left transition-all duration-300 flex items-center gap-4 group ${activeSection === item.id ? "text-white translate-x-2" : "text-[#a0a0a0] hover:text-white hover:translate-x-1"}`}
                    >
                      <span
                        className={`text-sm ${activeSection === item.id ? "opacity-100 text-[#d4af37]" : "opacity-50 group-hover:text-[#d4af37]"}`}
                      >
                        {index + 1}.
                      </span>
                      <span className="text-[15px]">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
