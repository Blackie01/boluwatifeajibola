'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

const conferencePapersData = [
  {
    year: "2026",
    papers: [
      {
        title: "When the Protector Becomes the Perpetrator: The Lekki Massacre, Moral Shocks and the (De)mobilisation of Democratic Publics in Nigeria.",
        conference: "Conference of the Canadian Association of African Studies, Toronto, Canada."
      },
      {
        title: "Youth in sustained action: Activist biographies at the intersection of development deadlock and developmental aspirations in Nigeria.",
        conference: "Development Studies Association Conference, UK"
      },
      {
        title: "Tracing activist trajectories between democratic origins and futures: A biographical approach.",
        conference: "Lagos Studies Association Conference."
      }
    ]
  },
  {
    year: "2025",
    papers: [
      {
        title: "Protests and Polls: The Emotional Journey of Hope in Nigeria - From #EndSARS to the 2023 Elections and Aftermath.",
        conference: "Poster presentation at the White Rose Doctoral Training Partnership Conference, Sheffield, UK."
      },
      {
        title: "Ajibola, B. S. ‘No gree for anybody’: How women activists in Nigeria navigate tides of resistance.",
        conference: "Development Studies Association Conference, Bath, UK. (with Azeezat Adekanye)"
      },
      {
        title: "When social movement legacies become political capitals: Exploring an African dimension to social movements-elections interrelations.",
        conference: "PSA 75th Annual International Conference, Birmingham, UK."
      }
    ]
  },
  {
    year: "2024",
    papers: [
      {
        title: "Ajibola, B. S. The foreign factor mix? How experiences of UK elections shape immigrants’ political views.",
        conference: "UK in a Changing Europe and PSA Early Career Network pre-EPOP workshop."
      },
      {
        title: "From COVID-19 to fuel subsidy removal in Nigeria: Unveiling local governance (un)changes through collective action.",
        conference: "Governance and Local Development Institute 7th Annual Conference, Sweden, May."
      },
      {
        title: "From traditional to technologically-mediated state surveillance: Experiences and circumvention tactics of Nigerian activists.",
        conference: "Susan Manning interdisciplinary & international workshops. University of Edinburgh & University of the Witwatersrand, March."
      }
    ]
  },
  {
    year: "2023",
    papers: [
      {
        title: "Ajibola, B. S. In a quagmire of pandemics: Perceptions and engagement practices fomenting legislative targeting during social movements in Africa.",
        conference: "Taiwan Foundation for Democracy and the Institute for Parliamentary Research “Parliaments in Crises – Crises in Parliaments” International Workshop, Taipei, Taiwan, February. (with Dr Odeyemi, T. I.)."
      },
      {
        title: "The legislature within a web of pandemics: Evaluating roles, actions, and missteps under a protest climate.",
        conference: "Southern Political Science Association (SPSA) Conference, Florida, USA, January."
      }
    ]
  },
  {
    year: "2022",
    papers: [
      {
        title: "Political power versus the politics of regulation: Nigeria’s Twittersphere and tussles from the #EndSARS protests.",
        conference: "Conference on the Regulation of old and new media forms in Africa. Birmingham City University Centre for Media and Cultural Research, May."
      }
    ]
  },
  {
    year: "2021",
    papers: [
      {
        title: "Contemporary social movements and Violence: Situating digital technologies and discursive exchanges between.",
        conference: "Political Studies Association Early Career Network (PSA-ECN) Conference, UK, July."
      },
      {
        title: "Digital technologies, for or against local NGOs? Exploring shifting norms in mobilizing assistance during COVID-19 in Nigeria.",
        conference: "UK Development Studies Association Annual Conference, June."
      },
      {
        title: "Widening education access to disadvantaged populations through adaptive e-learning features: An exploration of COVID-19 opportunities.",
        conference: "London School of Economics (LSE) Student Research Conference, June. (with Rajkotwalla, M)."
      },
      {
        title: "The quest for development: When social media-brokered political power encounters political ‘flak jackets’.",
        conference: "International Federation of Information Processing (IFIP) 9.4 Conference, May."
      }
    ]
  },
  {
    year: "2020",
    papers: [
      {
        title: "Satirical contents, public opinion, and decision making during COVID-19: Critical insights on Nigeria.",
        conference: "Political Studies Association Early Career Network (PSA-ECN) Conference, UK, July."
      }
    ]
  }
];

export default function ResearchConferencePapers({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const isLight = theme === "light";
  return (
    <section className="w-full pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        <h2 
          className={`text-[32px] md:text-[40px] leading-[48px] font-medium tracking-tight ${isLight ? "text-black" : "text-white"} mb-24 uppercase`}
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Conference Papers
        </h2>

        <div className="flex flex-col gap-24">
          {conferencePapersData.map((yearGroup, index) => (
            <div key={yearGroup.year} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-3 h-full relative">
                <div className="sticky top-32">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6 }}
                    className={`text-4xl md:text-5xl lg:text-[64px] ${isLight ? "text-black/20" : "text-white/20"} font-medium`}
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {yearGroup.year}
                  </motion.h3>
                </div>
              </div>
              
              <div className="lg:col-span-9 flex flex-col gap-12">
                {yearGroup.papers.map((paper, pIndex) => (
                  <motion.div 
                    key={pIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                    className={`border-t ${isLight ? "border-black/10" : "border-white/10"} pt-8 group`}
                  >
                    <h4 className={`text-[20px] md:text-[24px] leading-tight font-medium ${isLight ? "text-black" : "text-gray-200"} group-hover:${isLight ? "text-[#96750b]" : "text-white"} transition-colors duration-300 mb-4`}>
                      {paper.title}
                    </h4>
                    <div className={`${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} text-[15px] font-light`}>
                      {paper.conference}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-32 pt-16 border-t ${isLight ? "border-black/10" : "border-white/10"} flex justify-start`}>
          <ActionText text="For more on the conference papers" href="/conference-papers" theme={theme} />
        </div>
      </div>
    </section>
  );
}
