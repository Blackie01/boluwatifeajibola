"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";

const speakingEngagements = [
  {
    num: "01",
    title: "PGR Media and Engagement Workshop",
    subtitle: "Workshop Facilitator | University of Leeds | 2026",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          I facilitated a{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://ahc.leeds.ac.uk/philosophy/news/article/3100/building-visibility-highlights-from-the-prhs-pgr-engagement-workshop"
          >
            postgraduate researcher workshop on media, public engagement,
            visibility, and impact
          </Link>{" "}
          at the University of Leeds. The workshop explored how researchers can
          engage audiences beyond academia, use storytelling and media more
          strategically, and understand the relationship between engagement and
          research impact.
        </p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Research Impact: Why It Matters, Its Design and Evaluation",
    subtitle:
      "Training Facilitator | Centre for Religion and Public Life, University of Leeds | 2024",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          At the Centre for Religion and Public Life Postgraduate Research Day,
          I{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://religioninpublic.leeds.ac.uk/2024/02/05/postgraduate-research-day-on-22-january-2024/"
          >
            delivered a session on research impact, its importance, design, and
            evaluation
          </Link>
          . The event brought postgraduate researchers together to reflect on
          how research can travel beyond the academy and contribute to wider
          public, policy, cultural, and social conversations.
        </p>
        <p>
          This session reflected my work in impact literacy, helping researchers
          think more strategically about how their work can create value beyond
          academic publication.
        </p>
      </div>
    ),
  },
  {
    num: "03",
    title: "Elections, Candidates, Youths and Key Issues",
    subtitle:
      "Guest Speaker | National Association of Political Science Students Nigeria | 2022",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          I was invited as a{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://web.facebook.com/IAPSS/posts/10159915857866081/?paipv=0&eav=AfZQVtRj27mZKgeSKZKF62z9No7EPWmbNQD_QKK7pNiXFw7pv3RWg49xYhDCjHUdyew&_rdc=1&_rdr#"
          >
            guest speaker for a national discussion session
          </Link>{" "}
          with political science students in Nigeria, focused on elections,
          candidates, youth participation, and key political issues.
        </p>
        <p>
          The session connected my academic interest in elections and civic
          participation with public-facing engagement aimed at young Nigerians
          navigating democratic choices and responsibilities.
        </p>
      </div>
    ),
  },
  {
    num: "04",
    title:
      "Old Wine in New Wineskins: Being ‘Youth’ and the Crisis of Misgovernance in Africa",
    subtitle:
      "Keynote Speaker | International Association for Political Science Students | 2022",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          I delivered a{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://web.facebook.com/IAPSS/posts/10159915857866081/?paipv=0&eav=AfZQVtRj27mZKgeSKZKF62z9No7EPWmbNQD_QKK7pNiXFw7pv3RWg49xYhDCjHUdyew&_rdc=1&_rdr#"
          >
            keynote address at a consultative forum on governance
          </Link>{" "}
          in Africa, speaking on youth, misgovernance, and the contradictions of
          political renewal on the continent.
        </p>
        <p>
          This engagement brought together my interests in democracy,
          development, civic responsibility, and institutional failure, and
          allowed me to speak directly to emerging political science students
          and young civic actors across Africa.
        </p>
        <div className="mt-4 aspect-video w-full">
          <iframe
            className="w-full h-full rounded-sm"
            src="https://www.youtube.com/embed/8qz23cQqlNs?si=IihtFvu-POdHBMSI"
            width="1440"
            height="900"
            frameBorder="0"
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Technologies and Contemporary Social Movement Dynamics in Africa",
    subtitle: "Organiser and Moderator | London School of Economics | 2021",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          While studying at the London School of Economics, I{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://www.lse.ac.uk/international-development/events"
          >
            organised and moderated a major panel discussion
          </Link>{" "}
          on technologies and contemporary protest dynamics in Africa, with the
          support of the LSE Department of International Development.
        </p>
        <p>
          The event brought together leading voices in African civic and
          democratic life, including Samson Itodo, Dele Farotimi, Professor
          Alcinda Honwana, and Oluwaseun Ayodeji Osowobi. It explored how
          digital technologies were reshaping collective action, protest,
          development, and civic organising across Africa.
        </p>
        <p>
          This event was significant for me not only as a student-led convening,
          but as an early expression of the intellectual agenda that continues
          to shape my work: the relationship between technology, social
          movements, democracy, and public life.
        </p>
        <div className="mt-4 aspect-video w-full">
          <iframe
            className="w-full h-full rounded-sm"
            src="https://www.youtube.com/embed/7OrNlnKz8uY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ),
  },
  {
    num: "06",
    title: "The Role of Social Media in Nigeria’s 2019 General Elections",
    subtitle: "Organiser and Moderator | Redeemer’s University, Nigeria | 2019",
    content: (
      <div className="flex flex-col gap-6">
        <p>
          I{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://x.com/RedeemersUni/status/1126874318141521920"
          >
            organised and moderated the Maiden Political Symposium
          </Link>{" "}
          at Redeemer’s University, focused on the role of social media in
          Nigeria’s 2019 general elections.
        </p>
        <p>
          The event was the first of its kind at the university, attracting
          delegates from multiple universities and approximately 200 attendees.
          Its success contributed to institutional recognition, including an
          award of commendation from the university.
        </p>
        <div className="mt-4 w-full">
          <EditorialImage 
            src="/bsharp-collage-2.png" 
            alt="Speaking Engagement Collage" 
            aspectRatio="aspect-video"
            className="w-full rounded-sm object-cover bg-black/5" 
          />
        </div>
      </div>
    ),
  },
];

export default function FeaturedSpeakingEngagements({
  theme = "light",
}: {
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";
  return (
    <section
      className={`w-full pt-24 md:pt-32 pb-32 ${isLight ? "bg-white" : ""}`}
    >
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
          Featured Speaking and Event Engagements
        </h2>
      </motion.div>

      <div
        className={`w-full border-b ${isLight ? "border-black/10" : "border-white/20"}`}
      >
        {speakingEngagements.map((engagement, index) => (
          <div
            key={engagement.num}
            className={`border-t ${isLight ? "border-black/10" : "border-white/20"} w-full`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative"
            >
              {/* Index Column */}
              <div
                className={`w-full md:w-[10%] text-sm ${isLight ? "text-[#666666]" : "text-[#a0a0a0]"} font-outfit md:sticky md:top-32 self-start`}
              >
                ({engagement.num})
              </div>

              {/* Title Column */}
              <div className="w-full md:w-[30%] md:sticky md:top-32 self-start flex flex-col gap-3">
                <h3
                  className={`text-sm md:text-base ${isLight ? "text-black/80" : "text-white/80"} font-medium tracking-wide uppercase leading-relaxed`}
                >
                  {engagement.title}
                </h3>
                <p
                  className={`text-xs md:text-sm ${isLight ? "text-black/50" : "text-white/50"} uppercase tracking-wider`}
                >
                  {engagement.subtitle}
                </p>
              </div>

              {/* Content Column */}
              <div
                className={`w-full md:w-[60%] text-base leading-relaxed ${isLight ? "text-[#444444]" : "text-[#d1d1d1]"} font-light`}
              >
                {engagement.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
