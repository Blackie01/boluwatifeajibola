'use client'
import React from 'react';
import { motion } from 'framer-motion';

const otherProjects = [
  {
    num: "01",
    title: "Digital Identity and Humanitarian Governance",
    content: (
      <div className="flex flex-col gap-6">
        <p>This project explored the role of digital identity systems in humanitarian contexts, with a focus on how such systems can improve service delivery while addressing concerns around data governance, ethics, and accountability.</p>
        <p>The research brought together perspectives from technology, policy, and humanitarian practice to examine how digital infrastructures are reshaping the organisation and delivery of aid.</p>
        <p>It contributes to broader debates on digital governance, data ethics, and the transformation of public and humanitarian systems.</p>
      </div>
    )
  },
  {
    num: "02",
    title: "NGO Coordination and Governance in Humanitarian Contexts",
    content: (
      <div className="flex flex-col gap-6">
        <p>This research examined alternative models of coordination among NGOs operating in complex environments, with a comparative focus on Syria and Somalia.</p>
        <p>The project explored how coordination structures can better connect local, national, and international actors, and how governance frameworks influence the effectiveness and inclusivity of humanitarian response systems.</p>
        <p>This work contributes to discussions on institutional coordination, governance, and development practice in fragile contexts.</p>
      </div>
    )
  },
  {
    num: "03",
    title: "Gendered Contentions and Women’s Leadership",
    content: (
      <div className="flex flex-col gap-6">
        <p>This multi-country research project examined the role of women in contexts of conflict, fragility, and political contestation, focusing on how women navigate leadership, empowerment, and accountability.</p>
        <p>The study contributes to broader conversations on gender, governance, and participation, highlighting the ways in which women engage with and reshape structures of power in challenging environments.</p>
      </div>
    )
  },
  {
    num: "04",
    title: "Health Systems Mapping and Development Practice",
    content: (
      <div className="flex flex-col gap-6">
        <p>This project focused on mapping private health and non-health facilities in Nigeria as part of broader efforts to strengthen health systems and service delivery.</p>
        <p>The research involved large-scale data collection and qualitative analysis, contributing to understanding how health infrastructures are distributed and how they can be better integrated into development planning.</p>
      </div>
    )
  },
  {
    num: "05",
    title: "Just Transition and Development Policy",
    content: (
      <div className="flex flex-col gap-6">
        <p>This research forms part of an international comparative project examining how different countries conceptualise and implement “just transition” strategies in response to climate and economic change.</p>
        <p>Focusing on the Nigerian context, the study explores how global debates around climate justice, labour, and development are translated into national policy and practice.</p>
      </div>
    )
  }
];

export default function OtherResearchProjects() {
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
          className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight tracking-tight uppercase"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Other research projects
        </h2>
        <p className="text-[#a0a0a0] text-[18px] leading-relaxed font-light max-w-3xl">
          My past projects do not only span diverse sectors, they reflect my commitment to research that is analytically grounded and responsive to real-world challenges. I present some of these below:
        </p>
      </motion.div>

      <div className="w-full border-b border-white/20">
        {otherProjects.map((project, index) => (
          <div key={project.num} className="border-t border-white/20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative"
            >
              {/* Index Column */}
              <div className="w-full md:w-[10%] text-sm text-[#a0a0a0] font-outfit md:sticky md:top-32 self-start">
                ({project.num})
              </div>

              {/* Title Column */}
              <div className="w-full md:w-[30%] md:sticky md:top-32 self-start">
                <h3 className="text-sm md:text-base text-white/80 font-medium tracking-wide uppercase leading-relaxed">
                  {project.title}
                </h3>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-[60%] text-base leading-relaxed text-[#d1d1d1] font-light">
                {project.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
