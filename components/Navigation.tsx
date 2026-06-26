'use client'
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const MENU_ITEMS = [
  { name: "about", href: "/about", children: [] },
  { name: "Research & Impact", href: "", children: [
    { name: "My Research", href: "/research" },
    { name: "Protests and Polls", href: "/protests-and-polls" },
    { name: "Impact and Engagement", href: "/impact-and-engagement" },
    { name: "Research and Development", href: "/research-and-development" },
  ]},
  { name: "Artistic Hub", href: "", children: [
    { name: "Creative Practice", href: "/creative-practice" },
    { name: "Poetry", href: "/creative-practice/poems" },
    { name: "Speaking and Events", href: "/speaking-and-events" },
  ]},
  { name: "resources", href: "", children: [
    { name: "Conference Papers", href: "/conference-papers" },
    { name: "Publications", href: "/publications" }
  ]},
  { name: "contact", href: "/", children: [] },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const [isLightBg, setIsLightBg] = useState(false)

  useEffect(() => {
    let ticking = false

    const checkBackground = () => {
      // Pick a point near the logo but in the pointer-events-none area (e.g. x=10)
      // to pierce through the nav and hit the background section.
      const el = document.elementFromPoint(10, 40)
      let isLight = false
      let currentEl = el
      while (currentEl) {
        const bg = window.getComputedStyle(currentEl).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          const match = bg.match(/\d+/g)
          if (match && match.length >= 3) {
            const r = parseInt(match[0], 10)
            const g = parseInt(match[1], 10)
            const b = parseInt(match[2], 10)
            const hsp = Math.sqrt(
              0.299 * (r * r) +
              0.587 * (g * g) +
              0.114 * (b * b)
            )
            isLight = hsp > 127.5
          }
          break
        }
        currentEl = currentEl.parentElement
      }
      setIsLightBg(isLight)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkBackground)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    checkBackground()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  // To handle the popover state smoothly
  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setIsOpen(false)
      setHoveredTab(null)
    }
  }

  const activeItem = MENU_ITEMS.find((item) => item.name === hoveredTab)
  const hasChildren = activeItem && activeItem.children.length > 0

  return (
    <nav className="fixed backdrop-blur-md top-0 left-0 right-0 z-50 pt-6 px-6 md:px-12 flex justify-between items-center pointer-events-none">
      {/* Logo */}
      <Link href="/" className="pointer-events-auto mt-2 relative w-[250px] h-[50px] block">
        <Image 
          src="/logo-black-bg-preview-2.png" 
          alt="BoluAjibola Logo" 
          fill 
          priority
          className={`object-contain object-left transition-opacity duration-500 ease-in-out ${isLightBg ? 'opacity-0' : 'opacity-100'}`}
        />
        <Image 
          src="/logo-white-bg-preview-2.png" 
          alt="BoluAjibola Logo" 
          fill 
          priority
          className={`object-contain object-left transition-opacity duration-500 ease-in-out ${isLightBg ? 'opacity-100' : 'opacity-0'}`}
        />
      </Link>

      {/* Right Section: Popover + Hamburger */}
      <div 
        className="pointer-events-auto flex items-start gap-4 relative"
        onMouseLeave={handleMouseLeave}
      >
        {/* DESKTOP MENU (lg and up) */}
        <div className="hidden lg:block">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-end"
              >
                {/* Main Menu Bar */}
                <div className="bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center p-1 shadow-2xl relative h-10">
                  {MENU_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative px-5 py-1.5 cursor-pointer text-sm text-[#a0a0a0] hover:text-white transition-colors capitalize whitespace-nowrap z-10 flex items-center h-full"
                      onMouseEnter={() => setHoveredTab(item.name)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Animated active background pill for hovered item */}
                  <AnimatePresence>
                    {hoveredTab && (
                      <div className="absolute inset-0 pointer-events-none flex p-1">
                        {MENU_ITEMS.map((item) => (
                          <div key={item.name} className="relative px-5 py-1.5 opacity-0 flex items-center h-full">
                            {item.name}
                            {hoveredTab === item.name && (
                              <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white/5 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Dropdown Container (Stripe-like) */}
                <div className="relative w-full z-0">
                  <AnimatePresence mode="wait">
                    {hasChildren && (
                      <motion.div
                        key="dropdown-container"
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-0 left-0 w-full origin-top"
                      >
                        <motion.div
                          key={hoveredTab}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex w-full p-1"
                        >
                          {MENU_ITEMS.map((item) => (
                            <div key={item.name} className="relative px-5 flex flex-col">
                              {/* Invisible spacer to force identical width to the main menu item */}
                              <div className="h-0 overflow-hidden opacity-0 text-sm capitalize whitespace-nowrap pointer-events-none">
                                {item.name}
                              </div>
                              
                              {/* The actual dropdown children */}
                              {hoveredTab === item.name && item.children.length > 0 && (
                                <div className="w-full flex justify-center">
                                  <div className="w-0 flex justify-center">
                                    <div className="w-max relative mt-2">
                                      {/* Dropdown Box Background */}
                                      <div className="bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl absolute inset-0 -z-10" />
                                      
                                      <div className="flex flex-col gap-3 p-5 min-w-[180px]">
                                        {item.children.map((child) => (
                                          <Link 
                                            key={child.name} 
                                            href={child.href}
                                            className="text-sm text-[#a0a0a0] hover:text-white cursor-pointer transition-colors whitespace-nowrap"
                                          >
                                            {child.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MOBILE MENU (below lg) */}
        <div className="block lg:hidden absolute top-14 right-0 w-64 z-20">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 pointer-events-auto"
              >
                {MENU_ITEMS.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.children.length > 0 ? (
                      <button 
                        onClick={() => setExpandedMobile(expandedMobile === item.name ? null : item.name)}
                        className="flex justify-between items-center text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-white text-sm capitalize"
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: expandedMobile === item.name ? 180 : 0 }}
                          className="text-xs opacity-50"
                        >
                          ▼
                        </motion.span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-white text-sm capitalize"
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {/* Mobile Children Dropdown */}
                    <AnimatePresence>
                      {item.children.length > 0 && expandedMobile === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pl-4 py-2 gap-2 border-l border-white/10 ml-6 mt-1 mb-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-[#a0a0a0] hover:text-white transition-colors py-1.5 capitalize"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hamburger Icon */}
        <div 
          className="w-10 h-10 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer shadow-lg shrink-0 relative z-30"
          onMouseEnter={() => {
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
              setIsOpen(true)
            }
          }}
          onClick={() => {
            if (typeof window !== 'undefined' && window.innerWidth < 1024) {
              setIsOpen(!isOpen)
            }
          }}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-4 h-[1px] bg-white block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-4 h-[1px] bg-white block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-4 h-[1px] bg-white block"
          />
        </div>
      </div>
    </nav>
  )
}