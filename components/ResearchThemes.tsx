'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ActionText from './ActionText';

const themes = [
  {
    num: "01",
    title: "Social movements, elections and democratic contestation",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          My work examines protests, social movements, and elections as not just expressions of resistance and contention, but also as dynamic political ecosystems where narratives, identities, and possibilities for change are negotiated. I am interested in the larger systems and structures that movements and parties interact with to shape the democratic character of a state. I am currently pursuing this agenda through my ongoing doctoral research – <ActionText href="/protests-and-polls" text="Protests and Polls" theme='light' />.
        </p>
        <p>
          Across my publications and conference papers, I have analysed how protest movements shape the character of political institutions, including legislatures and policing infrastructures, as well as the governance failures that underpin contention. I am particularly interested in the role of discourse, emotions and symbols in mobilising or demobilising participation and in sustaining movement energies.
        </p>
        <p>
          This strand of my research interacts with broader debates on contentious politics, the public sphere, affective politics, and democratic participation.
        </p>
      </div>
    )
  },
  {
    num: "02",
    title: "Technology and activism",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          A second strand of my work explores how digital technologies are transforming civic action and governance.
        </p>
        <p>
          My past research has examined the role of social media, digital platforms, and data driven systems in remodelling how citizens organise, communicate, and pursue change. This includes how social media shapes the negotiation of public debates; how citizens navigate repression and circumvent digital surveillance; including how technologies mediate protest and humanitarian coordination.
        </p>
        <p>
          Through my work in these areas, I engage with questions about the opportunities and risks of digital transformation, as well as what they mean for democratic and development aspirations in the global south.
        </p>
      </div>
    )
  },
  {
    num: "03",
    title: "Development, policy and governance",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          My research also engages with wider relationships between development, governance and the institutional arrangements that bridge these two domains.
        </p>
        <p>
          My study recognises the roles of political institutions during crises situations. It situates political institutions as targets of disenchanted publics and mediators of the outcomes they seek. I also examine how development outcomes are shaped by both formal structures and citizen agency. These are reflected in my work on legislative behaviour during protest episodes and governance responses to social emergencies.
        </p>
        <p>
          I have also contributed to comparative and policy-oriented research projects, including work on humanitarian coordination models; digital identity; gendered contentions in fragile, conflict affected settings; climate change and just transition; and cross-border movement solidarity in the global south.
        </p>
        <p>
          This strand especially reflects my interest in the democracy-development nexus, including the ways in which governance infrastructures can deliver socio-economic development and stronger democratic institutions.
        </p>
      </div>
    )
  }
];

export default function ResearchThemes({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const isLight = theme === "light";
  return (
    <section className={`w-full border-b ${isLight ? "border-black/10" : "border-white/20"} mb-32`}>
      {themes.map((theme, index) => (
        <div key={theme.num} className={`border-t ${isLight ? "border-black/10" : "border-white/20"} w-full`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative"
          >
            {/* Index Column */}
            <div className={`w-full md:w-[10%] text-sm ${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} font-outfit md:sticky md:top-32 self-start`}>
              ({theme.num})
            </div>

            {/* Title/Category Column */}
            <div className="w-full md:w-[30%] md:sticky md:top-32 self-start">
              <h3 className={`text-sm md:text-base ${isLight ? "text-black/80" : "text-white/80"} font-medium tracking-wide uppercase leading-relaxed`}>
                {theme.title}
              </h3>
            </div>

            {/* Content Column */}
            <div className={`w-full md:w-[60%] text-[16px] leading-relaxed ${isLight ? "text-[#444444]" : "text-[#d1d1d1]"} font-light`}>
              {theme.content}
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
