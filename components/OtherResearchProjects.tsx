'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

type Theme = "light" | "dark";

const otherProjects: { num: string; title: string; content: (theme: Theme) => React.ReactNode }[] = [
  {
    num: "01",
    title: "Protests and Polls: A Nigerian Paradigm of Social Movements and Elections Interrelations",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>My doctoral research, Protests and Polls (PaP), explores the reciprocal relations between two forms of political mobilisation – social movements and elections. PaP’s attempt at interrogating the interpenetration of movement and election rhythms takes issue with existing approaches that draw boundaries between both realms of contention and those that systematise the influence of one upon the other. </p>
        <p>It essentialises key aspects of the interactional dynamics between movements and elections that have been overlooked by existing scholarship. Hence, its focus on elements that mediate the interrelations – in their symbolic, discursive, and emotional forms.</p>
        <p>It explores Nigeria’s 2020 #EndSARS movement, the pre-and post-election character of the Obidient movement, and the 2023 general elections cycle to theorise a much-needed African perspective on the relationship between movement and (electoral) politics.</p>
        <div>
          <ActionText text="Read more" href="/protests-and-polls" theme={theme} />
        </div>
      </div>
    )
  },
  {
    num: "02",
    title: "Evidence for Safer Town Centres: A Rapid Evidence Review ",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>Working with the NPCC’s Neighbourhood Policing Guarantee Programme Team, I conducted a rapid evidence review of interventions to improve town-centre safety, and of the roles that neighbourhood policing, communities and partner agencies play in them.</p>
        <p>The work produced a report with findings and recommendations for neighbourhood policing. It involved regular engagement with policing, research and policy stakeholders, which shaped how the findings were framed for decision-makers.</p>
        <p>The project extends my research on governance and institutions into applied policy work: how knowledge, institutions and public policy shape one another.</p>
      </div>
    )
  },
  {
    num: "03",
    title: "Digital Identity and Humanitarian Governance",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>This project explored the role of digital identity systems in humanitarian contexts, with a focus on how such systems can improve service delivery while addressing concerns around data governance, ethics, and accountability.</p>
        <p>The research brought together perspectives from technology, policy, and humanitarian practice to examine how digital infrastructures are reshaping the organisation and delivery of aid.</p>
        <p>It contributes to broader debates on digital governance, data ethics, and the transformation of public and humanitarian systems.</p>
      </div>
    )
  },
  {
    num: "04",
    title: "NGO Coordination and Governance in Humanitarian Contexts",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>This research examined alternative models of coordination among NGOs operating in complex environments, with a comparative focus on Syria and Somalia.</p>
        <p>The project explored how coordination structures can better connect local, national, and international actors, and how governance frameworks influence the effectiveness and inclusivity of humanitarian response systems.</p>
        <p>This work contributes to discussions on institutional coordination, governance, and development practice in fragile contexts.</p>
      </div>
    )
  },
  {
    num: "05",
    title: "Gendered Contentions and Women’s Leadership",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>This multi-country research project examined the role of women in contexts of conflict, fragility, and political contestation, focusing on how women navigate leadership, empowerment, and accountability.</p>
        <p>The study contributes to broader conversations on gender, governance, and participation, highlighting the ways in which women engage with and reshape structures of power in challenging environments.</p>
      </div>
    )
  },
  {
    num: "06",
    title: "Health Systems Mapping and Development Practice",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>This project focused on mapping private health and non-health facilities in Nigeria as part of broader efforts to strengthen health systems and service delivery.</p>
        <p>The research involved large-scale data collection and qualitative analysis, contributing to understanding how health infrastructures are distributed and how they can be better integrated into development planning.</p>
      </div>
    )
  },
  {
    num: "07",
    title: "Just Transition and Development Policy",
    content: (theme) => (
      <div className="flex flex-col gap-6">
        <p>This research forms part of an international comparative project examining how different countries conceptualise and implement “just transition” strategies in response to climate and economic change.</p>
        <p>Focusing on the Nigerian context, the study explores how global debates around climate justice, labour, and development are translated into national policy and practice.</p>
      </div>
    )
  }
];

export default function OtherResearchProjects({ theme = "dark" }: { theme?: Theme }) {
  const isLight = theme === "light";
  return (
    <section className="w-full pt-24 md:pt-32 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16 lg:col-span-8"
      >
        <h2 
          className={`text-3xl md:text-5xl font-medium ${isLight ? "text-black" : "text-white"} mb-8 leading-tight tracking-tight uppercase`}
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Selected research projects
        </h2>
        <p className={`${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} text-[16px] leading-relaxed font-light max-w-3xl`}>
          My past projects do not only span diverse sectors, they reflect my commitment to research that is analytically grounded and responsive to real-world challenges. I present some of these below:
        </p>
      </motion.div>

      <div className={`w-full border-b ${isLight ? "border-black/10" : "border-white/20"}`}>
        {otherProjects.map((project, index) => (
          <div key={project.num} className={`border-t ${isLight ? "border-black/10" : "border-white/20"} w-full`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative"
            >
              {/* Index Column */}
              <div className={`w-full md:w-[10%] text-sm ${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} font-outfit md:sticky md:top-32 self-start`}>
                ({project.num})
              </div>

              {/* Title Column */}
              <div className="w-full md:w-[30%] md:sticky md:top-32 self-start">
                <h3 className={`text-sm md:text-base ${isLight ? "text-black/80" : "text-white/80"} font-medium tracking-wide uppercase leading-relaxed`}>
                  {project.title}
                </h3>
              </div>

              {/* Content Column */}
              <div className={`w-full md:w-[60%] text-base leading-relaxed ${isLight ? "text-[#444444]" : "text-[#d1d1d1]"} font-light`}>
                {project.content(theme)}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
