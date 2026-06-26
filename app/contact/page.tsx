'use client'
import React, { useState } from "react"
import { motion } from "framer-motion"
import ActionText from "@/components/ActionText"
import PageTitle from "@/components/PageTitle"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <PageTitle 
          title="Let's Start a Conversation"
          subTitle="Get in touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Context */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-[18px] text-[#a0a0a0] font-light leading-relaxed">
                I am always open to discussing research collaborations, speaking engagements, creative performances, and public interventions.
              </p>
            </div>

            <div className="flex flex-col gap-10 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <p className="text-[#666] uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-outfit)" }}>Email</p>
                <div className="text-xl md:text-2xl font-light" style={{ fontFamily: "var(--font-outfit)" }}>
                  <ActionText text="hello@boluajibola.com" href="mailto:hello@boluajibola.com" theme="dark" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#666] uppercase tracking-widest text-xs" style={{ fontFamily: "var(--font-outfit)" }}>Socials</p>
                <div className="flex flex-col gap-4 mt-2">
                  <a href="https://www.linkedin.com/in/boluajibola/" target="_blank" rel="noopener noreferrer" className="text-base text-white/80 hover:text-white transition-colors duration-300 w-max">
                    LinkedIn
                  </a>
                  <a href="https://x.com/_boluajibola?s=11" target="_blank" rel="noopener noreferrer" className="text-base text-white/80 hover:text-white transition-colors duration-300 w-max">
                    Twitter / X
                  </a>
                  <a href="https://www.instagram.com/_boluajibola/" target="_blank" rel="noopener noreferrer" className="text-base text-white/80 hover:text-white transition-colors duration-300 w-max">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors peer"
                />
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email *"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors peer"
                />
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  name="subject"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject *"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors peer"
                />
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Message *"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-base text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none peer"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 border border-white/20 hover:border-white text-white uppercase tracking-widest text-sm transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>

                {isSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#d4af37] text-sm uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Message Sent Successfully
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  )
}