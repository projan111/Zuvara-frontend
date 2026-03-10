"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type DestinationId = "baby" | "personal";

type Destination = {
  id: DestinationId;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  color: string;
  icon: string;
  description: string;
};

export default function IntroPage() {
  const [activeId, setActiveId] = useState<DestinationId>("baby");

  const destinations: Destination[] = useMemo(
    () => [
      {
        id: "baby",
        label: "Baby Care",
        title: "Baby Care",
        subtitle: "Pure, Gentle, & Natural",
        image: "/images/baby/baby32.png",
        href: "/babyCare",
        color: "var(--babyCare)",
        icon: "/icons/xl.png",
        description:
          "Everything your little one needs for a happy, healthy start in life.",
      },
      {
        id: "personal",
        label: "Personal Care",
        title: "Personal Care",
        subtitle: "Self-Care Reimagined",
        image: "/new/momnobg.png",
        href: "/personalCare",
        color: "var(--ternary)",
        icon: "/icons/sanitary-napkin.png",
        description:
          "Premium essentials formulated to nourish your body and soul.",
      },
    ],
    [],
  );

  const activeDestination =
    destinations.find((item) => item.id === activeId) ?? destinations[0];

  return (
    <main
      className={`relative min-h-screen overflow-hidden text-white transition-colors duration-300 ${
        activeId === "baby" ? "bg-babyCare" : "bg-ternary/50"
      }`}
    >
      {" "}
      <Link href="/" className="absolute top-2 left-1/2 -translate-x-1/2">
        <Image
          src={activeId === "personal" ? "/logo/logo_secondary.svg" : "/logo/logo.svg"}
          alt="Zuvara Logo"
          width={110}
          height={110}
          priority
          className="h-auto w-auto"
        />
      </Link>
      {/* Main content */}
      <section className="relative z-20 mx-auto flex min-h-screen w-full max-w-360 flex-col justify-center px-5  md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          {/* Top Text content */}
          <div className="max-w-240 text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-white"
            >
              Welcome to Zuvara
            </motion.p>

            <motion.h1
              key={activeDestination.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className=" text-5xl  font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-5xl lg:text-[110px]"
            >
              {activeDestination.id === "baby" ? "baby care" : "Personal Care"}
            </motion.h1>

            <motion.p
              key={`${activeDestination.id}-desc`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5  text-sm leading-7 text-white/80 md:text-base"
            >
              {activeDestination.id === "baby"
                ? "Soft, safe, and thoughtfully made essentials for your little one."
                : "Premium personal care designed for comfort, confidence, and daily ease."}
            </motion.p>
          </div>

          {/* Mid cards */}
          <div className="flex items-center justify-center gap-10">
            {destinations.map((section) => {
              const isActive = activeId === section.id;

              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className="group relative"
                  onMouseEnter={() => setActiveId(section.id)}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 24 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1.05 : 1,
                      backgroundColor: isActive
                        ? section.id === "baby"
                          ? "rgba(69, 104, 94, 0.68)"
                          : "rgba(130, 0, 219, 0.62)"
                        : "rgba(255, 255, 255, 0.28)",
                      borderColor: isActive
                        ? "rgba(255,255,255,0.36)"
                        : "rgba(255,255,255,0.45)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="relative z-10 flex h-full w-90 flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/12" />
                    <div className="pointer-events-none absolute inset-x-0 top-[48%] h-px bg-white/12" />
                    <div className="pointer-events-none absolute bottom-[18%] left-[62%] top-[48%] w-px bg-white/8" />

                    {/* Card Content */}
                    <div className="relative z-10 space-y-3 ">
                        <div className="flex justify-between">
                          <div>
                      <div
                        className={`inline-flex items-center gap-2 rounded-2xl   py-1.5  bg-zinc-50"
                        `}
                      >
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider ${
                            isActive ? "text-white/85" : "text-zinc-500"
                          }`}
                        >
                          {section.subtitle}
                        </span>
                      </div>

                      <h2
                        className={`text-3xl font-black leading-none ${
                          isActive ? "text-white" : "text-foreground"
                        }`}
                      >
                        {section.title.split(" ")[0]} <br />
                        <span
                          className={`${
                            isActive ?  "text-white" : "text-zinc-100"
                          }`}
                        >
                          {section.title.split(" ")[1]}
                        </span>
                      </h2>
                      </div> {/* Icon Background */}
                      <motion.div
                        animate={{ opacity: isActive ? 0.9 : 0.25 }}
                        transition={{ duration: 0.35 }}
                        className=" pointer-events-none"
                      >
                        <Image
                          src={section.icon}
                          alt={section.title}
                          width={96}
                          height={96}
                          className={`size-24 transition ${isActive ? "invert" : ""}`}
                        />
                      </motion.div>
                     </div>

                      <p
                        className={`max-w-60 text-sm font-medium leading-relaxed ${
                          isActive ? "text-white/80" : "text-zinc-500"
                        }`}
                      >
                        {section.description}
                      </p>

                     

                      <div className="flex w-full bg-white rounded-full justify-center gap-3  py-4 px-4">
                        {/* <div
                          className={`flex size-10 items-center justify-center rounded-full transition ${
                            isActive
                              ? "scale-105 bg-white text-zinc-900"
                              : "text-zinc-500"
                          }`}
                          style={{
                            backgroundColor: isActive
                              ? section.color
                              : "#fff",
                          }}
                        >
                          <Icon icon="solar:arrow-right-up-linear" width="20" />
                        </div> */}

                        <span
                          className={`text-sm font-bold uppercase  ${
                            isActive ? "text-black" : "text-zinc-800"
                          }`}
                        >
                          Visit Now
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Image */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                      rotate: section.id === "baby" ? -10 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={`absolute z-0 pointer-events-none ${
                      section.id === "baby"
                        ? "bottom-10 -left-46 w-72"
                        : "-bottom-6 -right-60 w-120"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={640}
                      height={480}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {destinations.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => setActiveId(item.id)}
              className={`h-3 w-3 rounded-full transition ${
                activeId === item.id ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
