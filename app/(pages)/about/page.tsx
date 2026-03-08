"use client";

import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import AboutHeroSection from "@/app/components/about/AboutHeroSection";
import AboutStorySection from "@/app/components/about/AboutStorySection";
import AboutMilestonesSection from "@/app/components/about/AboutMilestonesSection";
import AboutPromisesSection from "@/app/components/about/AboutPromisesSection";
import AboutTeamSection from "@/app/components/about/AboutTeamSection";
import AboutCtaSection from "@/app/components/about/AboutCtaSection";
import { aboutPalette } from "@/app/components/about/theme";

const stories = [
  {
    title: "Why we began",
    body: "We started with a simple belief: baby care should feel reassuring, well-made, and genuinely gentle, not clinical, harsh, or overcomplicated.",
  },
  {
    title: "How we build",
    body: "We listen closely to parents, study everyday routines, and shape products around comfort, fit, softness, and practical reliability.",
  },
  {
    title: "What matters most",
    body: "From absorbency and skin feel to packaging and daily usability, every choice is made to reduce friction for both babies and parents.",
  },
  {
    title: "What we stand for",
    body: "Zuvara is guided by calm design, trustworthy performance, and a standard of care that families can return to with confidence.",
  },
];

const milestones = [
  { value: "10+", label: "Years refining family care essentials" },
  { value: "100k+", label: "Parents reached through trusted products" },
  { value: "24/7", label: "Commitment to comfort-first thinking" },
];

const promises = [
  {
    title: "Absolute Safety",
    desc: "Materials and finishes selected to feel soft, secure, and reliable for delicate daily care.",
    icon: ShieldCheck,
  },
  {
    title: "Pure Comfort",
    desc: "Every layer is designed to reduce irritation and support easier, calmer routines.",
    icon: Leaf,
  },
  {
    title: "Parent Focused",
    desc: "We design around real routines, real concerns, and the practical moments families live every day.",
    icon: HeartHandshake,
  },
  {
    title: "Quiet Excellence",
    desc: "Thoughtful details, refined design, and dependable performance without excess noise.",
    icon: Sparkles,
  },
];

const team = [
  {
    name: "Aarav Regmi",
    role: "Founder, Zuvara",
    image: "/images/parent/parent.png",
  },
  {
    name: "Sana Koirala",
    role: "Brand and Experience",
    image: "/images/personalCare/lady-with-goggles.png",
  },
  {
    name: "Ritvik Shrestha",
    role: "Creative Direction",
    image: "/images/parent/parent2.png",
  },
  {
    name: "Mila Thapa",
    role: "Parent Community Lead",
    image: "/new/mom.png",
  },
  {
    name: "Elina Sharma",
    role: "Product Research",
    image: "/images/personalCare/happy-lady.png",
  },
  {
    name: "Niraj Basnet",
    role: "Care Innovation",
    image: "/images/parents.png",
  },
];

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: aboutPalette.page, color: aboutPalette.ink }}
    >
      <AboutHeroSection palette={aboutPalette} />
      <AboutStorySection palette={aboutPalette} stories={stories} />
      <AboutMilestonesSection palette={aboutPalette} milestones={milestones} />
      <AboutPromisesSection palette={aboutPalette} promises={promises} />
      <AboutTeamSection palette={aboutPalette} team={team} />
      <AboutCtaSection palette={aboutPalette} />
    </main>
  );
}
