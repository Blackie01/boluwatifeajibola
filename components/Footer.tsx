"use client";
import React, { useEffect, useRef } from "react";

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    
    const chars = ['B', 'O', 'L', 'U', 'W', 'A', 'T', 'I', 'F', 'E'];
    const particles: any[] = [];

    const setDimensions = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = canvas.width = rect ? rect.width : window.innerWidth;
      height = canvas.height = rect ? rect.height : window.innerHeight * 0.8;
    };

    const initParticles = () => {
      particles.length = 0;
      // Adjust density based on screen size so it feels dense but runs smoothly
      const numParticles = Math.min(2500, Math.floor((width * height) / 900)); 
      
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * width;
        
        // Simulating the "river of water sitting at the base of the footer"
        // Combining two sine waves to create a natural, organic river top surface
        const wave = Math.sin(x * 0.003) * 50 + Math.cos(x * 0.007) * 30;
        
        // The uppermost boundary of the letters, sitting roughly in the bottom 45%
        const riverTop = height * 0.55 + wave;
        
        // Randomly place the letter somewhere between the river's top surface and slightly below the bottom edge
        const y = riverTop + Math.random() * (height - riverTop + 50);
        
        // Pure solid white for all particles, avoiding any depth illusions
        const color = 'rgba(255, 255, 255, 0.9)';

        particles.push({
          x, 
          y,
          original_x: x,
          original_y: y,
          base_x: x,
          base_y: y,
          vx: 0, 
          vy: 0,
          char: chars[Math.floor(Math.random() * chars.length)], // Random letter from the name
          size: 11, // Fixed uniform size for all
          color
        });
      }
    };

    // Initialize dimensions and compute the particle grid
    setDimensions();
    initParticles();

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    // Attach listeners to the window/section to deeply capture the mouse flowing over the whole area
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const handleResize = () => {
      setDimensions();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      // Clear the canvas on every tick for a fresh draw
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Fluid sea surface motion: constantly shift base positions in gentle sinusoidal waves
        p.base_x = p.original_x + Math.sin(p.original_y * 0.01 + time) * 12;
        p.base_y = p.original_y + Math.cos(p.original_x * 0.01 + time * 0.8) * 12;

        // Distance between this particle and the active mouse/touch position
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let distSQ = dx * dx + dy * dy;
        
        // If the particle is inside the invisible circle around the cursor
        if (distSQ < mouse.radius * mouse.radius) {
          let dist = Math.sqrt(distSQ);
          
          // Cubic falloff: force approaches 0 fluidly as it reaches the circle's edge
          // It's exceptionally gentle on the edges, and sharply strong at the very center.
          let force = Math.pow(1 - dist / mouse.radius, 3);
          
          // Normalizing the vector and applying the force
          let pushX = (dx / dist) * force * 15;
          let pushY = (dy / dist) * force * 15;
          
          p.vx += pushX;
          p.vy += pushY;
        }

        // Gentle spring-back tension pulling the particle to its structural "river" origin
        p.vx += (p.base_x - p.x) * 0.03;
        p.vy += (p.base_y - p.y) * 0.03;

        // Friction ensures physics decay naturally to a halt instead of bouncing infinitely
        p.vx *= 0.88;
        p.vy *= 0.88;

        // Apply velocity to position
        p.x += p.vx;
        p.y += p.vy;

        // Render the letter
        ctx.fillStyle = p.color;
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]" data-nav-theme="dark">
      {/* 
        Canvas renders the interactive letter particles. 
        It sits behind the text natively.
      */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      
      {/* The main call-to-action wrapper */}
      <div className="z-10 flex flex-col items-center pointer-events-none mt-12 px-6">
        <h2 
          className="text-6xl md:text-8xl lg:text-[140px] font-bold text-white tracking-tight mb-16 text-center leading-[1.1] md:leading-[0.9]" 
          style={{ fontFamily: "var(--font-cormorant-unicase), serif" }}
        >
          Let's work<br/>together!
        </h2>
        <a 
          href="mailto:hello@boluwatife.com" 
          className="pointer-events-auto group relative px-12 py-5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm md:text-base hover:bg-[#A479FF] hover:text-white transition-colors duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(164,121,255,0.5)] flex items-center gap-4"
        >
          <span className="relative z-10 font-bold">Contact Me</span>
          <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}