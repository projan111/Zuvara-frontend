"use client";

import React, { useMemo } from "react";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TypingAnimation } from "../shared/TypingAnimation";
import { useMediaQuery } from "react-responsive";
import ContactSection from "./ContactSection";

const HeroSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const theme = useMemo(() => ({
    text: isPersonal
      ? "Hello! Looking for safe, comfortable personal care products?"
      : "Hello! Looking for gentle, comfy diapers for your baby?",
    image: isPersonal 
      ? "/new/contacpagemom.png" 
      : "/images/baby/baby-calling.webp",
    accent: isPersonal ? "bg-personalCare" : "bg-babyCare",
    lightAccent: isPersonal ? "bg-personalCare/10" : "bg-babyCare/20",
    bubble: isPersonal 
      ? "bg-personalCare/60 border-white/20 text-white" 
      : "bg-white/80 border-babyCare/20 text-slate-800",
  }), [isPersonal]);

  return (
    <div className={cn(
      "relative min-h-screen w-full flex items-center justify-center transition-colors duration-1000 overflow-hidden py-12 lg:py-0",
      theme.lightAccent
    )}>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={cn("absolute -top-[10%] -right-[10%] w-72 md:w-125 h-72 md:h-125 rounded-full blur-[100px] opacity-40", theme.accent)} />
        <div className={cn("absolute -bottom-[10%] -left-[10%] w-72 md:w-125 h-72 md:h-125 rounded-full blur-[100px] opacity-20", theme.accent)} />
      </div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Form Side - Scales beautifully from mobile to desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-1 shadow-sm border border-white/20">
              <ContactSection />
            </div>
          </motion.div>

          {/* Visual Side - Fixed Overlap Logic */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative flex flex-col items-center lg:items-end">
              
              {/* Responsive Chat Bubble */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 120 }}
                  className={cn(
                    "z-30 p-5 md:p-6 rounded-[2rem] shadow-xl backdrop-blur-lg border mb-4 lg:absolute",
                    // Desktop positioning: float it left of the image
                    "lg:-top-16 lg:-left-32 lg:mb-0 lg:w-[320px]",
                    // Mobile positioning: center it above
                    "w-[90%] max-w-[350px] relative",
                    theme.bubble
                  )}
                >
                  <TypingAnimation
                    text={theme.text}
                    className="text-base md:text-lg font-semibold leading-tight text-center lg:text-left"
                    duration={40}
                  />

                  {/* Desktop-only tail (hidden on mobile for cleaner look) */}
                  <div className={cn(
                    "hidden lg:block absolute -bottom-3 right-12 w-6 h-6 rotate-45 border-r border-b",
                    isPersonal ? "bg-personalCare/60 border-white/20" : "bg-white/80 border-babyCare/20"
                  )} />
                </motion.div>
              </AnimatePresence>

              {/* Character Image - Dynamic Sizing */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src={theme.image}
                  alt="Section Hero"
                  // Carefully balanced sizes
                  width={isPersonal ? (isMobile ? 240 : 350) : (isMobile ? 180 : 260)}
                  height={isPersonal ? (isMobile ? 240 : 350) : (isMobile ? 180 : 260)}
                  priority
                  className="drop-shadow-2xl object-contain transition-all duration-500"
                />
                
                {/* Image Base Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/10 blur-xl rounded-[100%]" />
              </motion.div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;
