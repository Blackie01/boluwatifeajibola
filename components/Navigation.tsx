'use client'
import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MENU_ITEMS = [
  { name: "about", children: [] },
  { name: "Research & Impact", children: ["Research", "Protests and Polls", "Impact and Engagement"] },
  { name: "Artistic Hub", children: ["Creative Practice", "Speaking and Events"] },
  { name: "resources", children: ["Conference Papers"] },
  { name: "contact", children: [] },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  
  // To handle the popover state smoothly
  const handleMouseLeave = () => {
    setIsOpen(false)
    setHoveredTab(null)
  }

  const activeItem = MENU_ITEMS.find((item) => item.name === hoveredTab)
  const hasChildren = activeItem && activeItem.children.length > 0

  return (
    <nav className="fixed  backdrop-blur-md top-o left-0 right-0 z-50 pt-6 px-6 md:px-12 flex justify-between items-start pointer-events-none">
      {/* Logo */}
      <div className="pointer-events-auto text-white text-xl font-medium tracking-tight mt-2">
        BoluAjibola
      </div>

      {/* Right Section: Popover + Hamburger */}
      <div 
        className="pointer-events-auto flex items-start gap-4 relative"
        onMouseLeave={handleMouseLeave}
      >
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
                  <div
                    key={item.name}
                    className="relative px-5 py-1.5 cursor-pointer text-sm text-[#a0a0a0] hover:text-white transition-colors capitalize whitespace-nowrap z-10 flex items-center h-full"
                    onMouseEnter={() => setHoveredTab(item.name)}
                  >
                    {item.name}
                  </div>
                ))}

                {/* Animated active background pill for hovered item (optional, adds to the feel) */}
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
                                        <div 
                                          key={child} 
                                          className="text-sm text-[#a0a0a0] hover:text-white cursor-pointer transition-colors whitespace-nowrap"
                                        >
                                          {child}
                                        </div>
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

        {/* Hamburger Icon */}
        <div 
          className="w-10 h-10 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer shadow-lg shrink-0 relative z-10"
          onMouseEnter={() => setIsOpen(true)}
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