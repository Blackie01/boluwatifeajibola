'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTitle from '@/components/PageTitle';

const allPublications = [
  {
    category: "Social Movements, Crisis, and Political Institutions",
    items: [
      {
        title: "The legislature as target and mediator of ensuing outcomes during social emergencies: Revisiting Nigeria’s #EndSARS protest",
        source: "The Theory and Practice of Legislation, 10(2), 117-146 (2022)",
        linkText: "Read publication",
        href: "https://doi.org/10.1080/20508840.2022.2093496"
      },
      {
        title: "What factors drive legislators’ response to crises? Evaluating actions and behaviour under a violent protest climate in Nigeria",
        source: "Taiwan Journal of Democracy, 19(2), 101-124 (2023)",
        linkText: "Read publication",
        href: "https://www.tfd.org.tw/backend/upload/publish/quarterly/84ee24e640abc14ee602837917241716.pdf"
      },
      {
        title: "Turning public engagement into standard practice: Institutionalisation in the work of the South African Parliament",
        source: "The Journal of Legislative Studies, 29(3), 406-424 (2023)",
        linkText: "Read publication",
        href: "https://doi.org/10.1080/13572334.2023.2195147"
      }
    ]
  },
  {
    category: "Protest, Governance, and Political Opportunity",
    items: [
      {
        title: "From COVID-19 to fuel subsidy removal in Nigeria: Assessing the political opportunities for local grievance",
        source: "Urban Governance, 4(4), 351-361 (2024)",
        linkText: "Read publication",
        href: "https://doi.org/10.1016/j.ugj.2024.12.007"
      }
    ]
  },
  {
    category: "Technology, Development, and Civic Innovation",
    items: [
      {
        title: "The quest for development: When social media-brokered political power encounters political ‘flak jackets’",
        source: "In proceedings of the International Federation of Information Processing (IFIP) 9.4 Conference (2021)",
        linkText: "Read publication",
        href: "https://arxiv.org/abs/2108.09741"
      },
      {
        title: "Initiating the co-development of IFRC’s Digital ID strategy",
        source: "IFRC Solferino Academy (2021)",
        linkText: "Read report",
        href: "https://solferinoacademy.com/wp-content/uploads/2021/09/Report-Initiating-the-co-development-of-IFRCs-Digital-ID-strategy1.pdf"
      },
      {
        title: "Technologically mediated citizen-led welfarism in Nigeria",
        source: "In S. P. Susannah (ed.), Researching Development NGOs: Global and Grassroots Perspectives (pp.150-156). Routledge, Taylor and Francis (2023)",
        linkText: "Find the book",
        href: "https://www.routledge.com/Researching-Development-NGOs-Global-and-Grassroots-Perspectives/Pickering-Saqqa/p/book/9780367489458"
      }
    ]
  },
  {
    category: "Public Engagement and Commentary",
    items: [
      {
        title: "Despite past protests, the cycle of police violence persists in Nigeria",
        source: "Africa at LSE Blog",
        linkText: "Read article",
        href: "https://blogs.lse.ac.uk/africaatlse/2026/06/03/despite-past-protests-the-cycle-of-police-violence-persists-in-nigeria/"
      },
      {
        title: "Nigeria’s #EndSARS and Kenya’s #RejectFinanceBill reveal striking patterns in protest across Africa",
        source: "Africa at LSE Blog (2024)",
        linkText: "Read article",
        href: "https://blogs.lse.ac.uk/africaatlse/2024/08/01/nigerias-endsars-and-kenyas-rejectfinancebill-reveal-striking-patterns-in-protest-across-africa/"
      },
      {
        title: "How Stakeholders are Creatively Deploying Technologies for Nigeria’s 2023 Elections",
        source: "Australian Outlook",
        linkText: "Read article",
        href: "https://www.internationalaffairs.org.au/australianoutlook/how-stakeholders-are-creatively-deploying-technologies-for-nigerias-2023-elections/"
      },
      {
        title: "Technology and social movements against other pandemics in Africa",
        source: "LSE International Development Blog (2021)",
        linkText: "Read article",
        href: "https://blogs.lse.ac.uk/internationaldevelopment/2021/09/14/technology-and-social-movements-against-other-pandemics-in-africa/"
      },
      {
        title: "Techmanitarianism, in the name of development: Adding to Taylor and Broeders’ datafication discourse",
        source: "LSE International Development Blog (2021)",
        linkText: "Read article",
        href: "https://blogs.lse.ac.uk/internationaldevelopment/2021/02/12/techmanitarianism-in-the-name-of-development-adding-to-taylor-and-broeders-d"
      }
    ]
  }
];

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-[#0C0C0C] text-white pt-60 pb-32 px-6 md:px-12 flex flex-col justify-start overflow-clip">
            <div className="max-w-7xl mx-auto w-full">
                <PageTitle
                    title="Publications"
                    subTitle="A comprehensive collection of my academic articles, reports, and public commentary."
                />
                
                <div className="flex flex-col gap-24 mt-16 md:mt-32">
                  {allPublications.map((group, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                      <div className="lg:col-span-4 h-full relative">
                        <div className="sticky top-32">
                          <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl text-white/30 font-medium leading-snug pr-4"
                            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                          >
                            {group.category}
                          </motion.h3>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-8 flex flex-col gap-12">
                        {group.items.map((item, pIndex) => (
                          <motion.div 
                            key={pIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                            className="border-t border-white/10 pt-8 group"
                          >
                            <h4 className="text-[20px] md:text-[24px] leading-tight font-medium text-gray-200 group-hover:text-white transition-colors duration-300 mb-4">
                              {item.title}
                            </h4>
                            
                            <div className="text-[#a0a0a0] text-[15px] mb-6 font-light">
                              {item.source}
                            </div>
                            
                            {item.linkText && (
                              <Link target='_blank' href={item.href || "#"} className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 text-[15px] group/link">
                                {item.linkText}
                                <svg 
                                  className="transform transition-transform duration-300 group-hover/link:translate-x-1" 
                                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </main>
    )
}