"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { babyCareProducts } from "@/constants/babyCareProduct";
import type { Product, Variant } from "@/type/babyCareProductType";
import { ChevronRight, Info, MoveRight, Star } from "lucide-react";

import DescSection from "@/app/components/babyCareProductPage/DescSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import FaqSection from "@/app/components/common-ui/FaqSection";

/* ---------------------------
  Small UI helpers
---------------------------- */

function SoftBand({
  children,
  className = "",
  tone = "cream",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "mint" | "peach" | "white";
}) {
  const bg =
    tone === "cream"
      ? "bg-[#FFF6E2]"
      : tone === "mint"
      ? "bg-[#EAF6F0]"
      : tone === "peach"
      ? "bg-[#FFF0EB]"
      : "bg-white";

  return (
    <section className={`${bg} ${className}`}>
      <div className="w-[92%] max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
    </section>
  );
}

function MiniKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-zinc-500">
      {children}
    </p>
  );
}

function Title({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 ${className}`}
    >
      {children}
    </h2>
  );
}

function BenefitCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white/80 border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-5 sm:p-6">
      <div className="h-12 w-12 rounded-2xl bg-[#FFF6E2] border border-black/5 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
    </div>
  );
}

function VariantSelector({
  product,
  selectedVariant,
  setSelectedVariant,
  themeColor,
}: {
  product: Product;
  selectedVariant: Variant | null;
  setSelectedVariant: (v: Variant) => void;
  themeColor: string;
}) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between pb-3 border-b border-black/10">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-zinc-500">
          Select Size
        </span>
        <button
          type="button"
          className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-zinc-500 inline-flex items-center gap-1.5 hover:text-zinc-700 transition"
        >
          <Info size={12} /> Size guide
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {product.variants?.map((v) => {
          const active = selectedVariant?.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v)}
              className={[
                "w-full rounded-2xl px-4 py-4 text-left transition border",
                "shadow-[0_10px_20px_rgba(0,0,0,0.04)]",
                active
                  ? "bg-white border-black/10"
                  : "bg-white/60 border-black/5 hover:bg-white",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: active
                        ? themeColor
                        : "rgba(113,113,122,0.35)",
                    }}
                  />
                  <span
                    className={
                      active
                        ? "text-lg font-semibold text-zinc-900"
                        : "text-lg font-medium text-zinc-700"
                    }
                  >
                    {v.size}
                  </span>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-zinc-500">
                  {v.weight} KG
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------
  Story strip (like the ref, but emotional)
---------------------------- */

const EMO_STORY = [
  {
    img: "/images/baby/baby17.png",
    title: "Calm nights",
    desc: "Dry comfort that helps them sleep longer.",
  },
  {
    img: "/images/baby/baby26.png",
    title: "Safe hugs",
    desc: "Soft layers that stay gentle in your arms.",
  },
  {
    img: "/images/baby/baby28.png",
    title: "Trust",
    desc: "Secure fit that moves with your baby.",
  },
  {
    img: "/images/baby/baby25.png",
    title: "Everyday care",
    desc: "Easy changes, delicate skin protected.",
  },
];

function StoryStrip() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-4">
        <MiniKicker>the story</MiniKicker>
        <Title className="mt-3">
          From sleep to hugs — built for everyday love.
        </Title>
        <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-zinc-600">
          Premium diapers aren’t just features. They’re the quiet confidence you
          feel in the moments that matter most.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {EMO_STORY.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white/80 border border-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-sm font-semibold text-zinc-900">
                  {s.title}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-zinc-600">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------
  Page
---------------------------- */

const CreativeBabyProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const slug = (params as any)?.babyCareProductPage;
    const found = babyCareProducts.find((p) => p.slug === slug);
    if (found) {
      setProduct(found);
      if (found.variants?.length > 0) setSelectedVariant(found.variants[0]);
    }
  }, [params]);

  if (!product) return null;

  const themeColor = product.background || "#456a5c";

  return (
    <div className="min-h-screen bg-[#FFF6E2] text-zinc-800">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#FFF6E2]/80 backdrop-blur border-b border-black/5">
        <div className="w-[92%] max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-3">
          <Link href="/babyCareProduct" className="hover:underline underline-offset-2">
            Baby Products
          </Link>
          <ChevronRight size={16} className="text-zinc-500" />
          <span className="text-zinc-700 font-medium">{product.name}</span>
        </div>
      </nav>

      {/* HERO (like ref: big image + short text + button) */}
      <SoftBand tone="cream" className="py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] rounded-[34px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.14)]">
              {/* Use your emotional hero image here */}
              <Image
                src="/images/baby/baby26.png"
                alt="Mother cuddling baby"
                fill
                className="object-cover"
                priority
              />

              {/* soft hero overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-6 top-6 text-white/90 text-xl font-semibold">
                {/* optional brand */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MiniKicker>a premium diaper for gentle skin</MiniKicker>
            <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight text-zinc-900 leading-[0.95]">
              {product.name.split(" ").slice(0, 1).join(" ")}{" "}
              <span className="font-serif italic text-zinc-700">
                {product.name.split(" ").slice(1).join(" ") || "hugs"}
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex gap-2 text-[#F4B63A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-zinc-500">
                {product.rating} / 5 • loved by parents
              </span>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">
              Comfort they feel. Peace of mind you feel. Designed for calm nights,
              soft mornings, and delicate skin.
            </p>

            <VariantSelector
              product={product}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              themeColor={themeColor}
            />

            <button className="mt-8 w-full rounded-full bg-zinc-900 text-white py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:translate-y-[-1px] active:translate-y-0 transition">
              <span className="inline-flex items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.28em]">
                Find near you <MoveRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </SoftBand>

      {/* ICON BENEFITS ROW (like reference icons row) */}
      <SoftBand tone="white" className="py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <BenefitCard
            title="Ultra Soft"
            desc="Gentle touch for delicate skin."
            icon={<span className="text-lg">🧸</span>}
          />
          <BenefitCard
            title="Breathable"
            desc="Keeps skin feeling fresh."
            icon={<span className="text-lg">🍃</span>}
          />
          <BenefitCard
            title="Leak Guard"
            desc="Secure edges for day & night."
            icon={<span className="text-lg">🛡️</span>}
          />
          <BenefitCard
            title="Dry Core"
            desc="Comfort that lasts longer."
            icon={<span className="text-lg">🌙</span>}
          />
          <BenefitCard
            title="Easy Fit"
            desc="Moves naturally with baby."
            icon={<span className="text-lg">✨</span>}
          />
        </div>
      </SoftBand>

      {/* STORY STRIP (matches your emotional narrative, but in ref layout) */}
      <SoftBand tone="mint" className="py-14 sm:py-20">
        <StoryStrip />
      </SoftBand>

      {/* PRODUCT CLOSE-UP + DESC (kept) */}
      <SoftBand tone="white" className="py-14 sm:py-20">
        <div className="space-y-12">
          <DescSection product={product} />
          <ProductCloseViewSection product={product} />
        </div>
      </SoftBand>

      {/* FEATURE SECTION (big visual area like “healthy foods” section) */}
      <SoftBand tone="peach" className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <MiniKicker>materials & comfort</MiniKicker>
            <Title className="mt-3">
              Soft layers that feel like a hug.
            </Title>
            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-zinc-600">
              Premium comfort is built from the inside out — breathable, gentle,
              and designed to reduce irritation.
            </p>
          </div>

          <div className="lg:col-span-8 rounded-[34px] bg-white/80 border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8">
            <ProductFeature
              product={product}
              style={
                {
                  "--subtle-text": "#6b7280",
                  "--page-text": "#111827",
                  "--product-glow": themeColor,
                } as any
              }
            />
          </div>
        </div>
      </SoftBand>

      {/* REVIEWS */}
      <SoftBand tone="white" className="py-14 sm:py-20">
        <div className="rounded-[34px] bg-white border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-6 sm:p-10">
          <ReviewSection product={product} />
        </div>
      </SoftBand>

      {/* FAQ */}
      <SoftBand tone="cream" className="py-14 sm:py-20">
        <div className="text-center mb-10">
          <MiniKicker>questions</MiniKicker>
          <Title className="mt-3">
            Everything you want to know.
          </Title>
        </div>

        <div className="max-w-3xl mx-auto rounded-[34px] bg-white border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-6 sm:p-10">
          <FaqSection
            product={product}
            faqs={product.faqs}
            questionColor="#18181b"
            answerColor="#52525b"
          />
        </div>
      </SoftBand>

      {/* FOOTER CTA */}
      <SoftBand tone="mint" className="py-14 sm:py-20">
        <div className="text-center rounded-[34px] bg-white/80 border border-black/5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] p-10 sm:p-12">
          <MiniKicker>ready when you are</MiniKicker>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
            Give them the <span className="font-serif italic text-zinc-700">best</span> start.
          </h2>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-7 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:translate-y-[-1px] transition">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em]">
              Shop all diapers
            </span>
            <MoveRight size={16} />
          </button>
        </div>
      </SoftBand>
    </div>
  );
};

export default CreativeBabyProductPage;