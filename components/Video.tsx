"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current) return;

    // Autoplay/pause based on visibility for performance
    const video = videoRef.current;
    if (video) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    // ScrollTrigger: expand from 60% centered → 100% fullscreen
    const tl = gsap.timeline();

    tl.fromTo(
      videoWrapperRef.current,
      {
        width: "60%",
        borderRadius: "1.5rem",
      },
      {
        width: "100%",
        borderRadius: "0rem",
        ease: "none",
      }
    );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top top",
      scrub: 1,
      animation: tl,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0a0a0a] flex items-center justify-center"
    >
      <div
        ref={videoWrapperRef}
        className="relative mx-auto overflow-hidden h-full"
        style={{ width: "60%", borderRadius: "1.5rem" }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/ORBIT-5-01-LITE.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay
        />
      </div>
    </section>
  );
}