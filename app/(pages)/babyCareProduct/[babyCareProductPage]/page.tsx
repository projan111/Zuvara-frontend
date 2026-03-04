"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { babyCareProducts } from "@/constants/babyCareProduct";
import ProductFeature from "@/app/components/babyCareProductPage/ProductFeature";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import ReviewSection from "@/app/components/babyCareProductPage/ReviewSection";
import FaqSection from "@/app/components/common-ui/FaqSection";

const moodboardImages = [
  "/images/diaper/supreme-diaper/1.jpg",
  "/images/baby/baby17.png",
  "/images/baby/baby24.png",
  "/images/baby/baby26.png",
  "/images/baby/baby25.png",
  "/images/diaper/supreme-diaper/2.jpg",
  "/images/baby/baby28.png",
  "/images/baby/baby33.png",
  "/images/diaper/supreme-diaper/3.jpg",
  "/images/baby/baby23.png",
  "/images/baby/baby20.png",
  "/images/diaper/supreme-diaper/4.jpg",
];

const conceptImages = [
  "/images/baby/baby14.png",
  "/images/baby/baby11.jpg",
  "/images/baby/baby12.png",
  "/images/baby/baby13.png",
  "/images/baby/baby16.png",
  "/images/baby/baby18.png",
  "/images/baby/baby19.png",
  "/images/baby/baby21.png",
  "/images/baby/baby22.png",
  "/images/baby/baby27.png",
];

const sectionTitle =
  "text-4xl sm:text-6xl font-semibold tracking-[0.04em] text-[#41355f]";

const softCard =
  "rounded-3xl border border-[#eadfca] bg-white/70 p-5 sm:p-7 shadow-[0_16px_45px_rgba(117,95,66,0.10)]";

const comparisonRows = [
  { label: "Dermatologically Tested", zuvara: "Yes", ordinary: "Not Always" },
  { label: "Hypoallergenic Design", zuvara: "Yes", ordinary: "Varies" },
  { label: "Toxin-Free Materials", zuvara: "Yes", ordinary: "Varies" },
  { label: "Breathable Layers", zuvara: "Advanced", ordinary: "Basic" },
  { label: "Chlorine Bleaching", zuvara: "No", ordinary: "Usually Yes" },
  { label: "Fragrance", zuvara: "No", ordinary: "Often Added" },
  { label: "Absorbency", zuvara: "Up to 12 Hours", ordinary: "4-6 Hours" },
];

function PhotoMosaic({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
      {images.map((src, index) => {
        const tall = index % 5 === 1 || index % 7 === 0;
        const wide = index % 6 === 2;

        return (
          <div
            key={`${src}-${index}`}
            className={[
              "relative overflow-hidden rounded-2xl border border-[#f0e4d0] bg-white/80",
              "shadow-[0_12px_30px_rgba(98,74,46,0.09)]",
              tall ? "row-span-2 min-h-[220px]" : "min-h-[110px]",
              wide ? "sm:col-span-2" : "sm:col-span-1",
            ].join(" ")}
          >
            <Image src={src} alt="Moodboard" fill className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default function Page() {
  const params = useParams<{ babyCareProductPage: string }>();
  const slug = params?.babyCareProductPage;
  const product = babyCareProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen grid place-items-center bg-[#f6efdc] px-6">
        <div className="rounded-3xl border border-[#eadfca] bg-white px-8 py-10 text-center">
          <h1 className="text-2xl font-semibold text-[#41355f]">Product not found</h1>
          <p className="mt-2 text-zinc-600">Please check the URL and try again.</p>
          <Link href="/babyCareProduct" className="mt-6 inline-flex rounded-full bg-[#41355f] px-5 py-2 text-sm font-semibold text-white">
            Explore gentle care
          </Link>
        </div>
      </main>
    );
  }

  const variants = product.variants || [];
  const highlights = (product.highlights || []).slice(0, 4);

  return (
    <main className="relative overflow-hidden bg-[#f6efdc] text-zinc-800">
      <div className="pointer-events-none absolute inset-x-0 top-[36rem] h-[44rem] bg-[radial-gradient(ellipse_at_center,rgba(255,210,66,0.38),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-x-0 top-[122rem] h-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(255,210,66,0.32),rgba(255,255,255,0))]" />

      <section className="sticky top-0 z-30 border-b border-[#ece1d0] bg-[#f6efdc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-10">
          <Link href="/babyCareProduct" className="text-sm text-zinc-600 hover:text-zinc-900">
            Back to Baby Care
          </Link>
          <p className="text-sm font-semibold tracking-wide text-[#41355f]">{product.name}</p>
        </div>
      </section>

      {/* 1. Hero (kept original) */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/new/productpage/productpagebaby.png"
            alt="Zuvara baby care hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative z-10 min-h-screen flex gap-10 items-center pb-16 justify-end px-6 lg:px-20">
          <div className="text-[120px] sm:text-[172px] flex items-center gap-1 relative text-gray-400">
            <p>0</p>
            <p className="text-4xl justify-items-start">%</p>
          </div>
          <ul className="flex flex-col text-2xl sm:text-4xl font-medium text-gray-500">
            <li>Chlorine Bleaching</li>
            <li>Fragrance</li>
            <li>Parabens</li>
            <li>Latex</li>
          </ul>
        </div>
        <div className="relative z-10 w-full h-1 bg-gray-500"></div>
      </section>

      {/* 2. Why Zuvara */}
      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Because Every Touch Matters</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className={`${softCard} space-y-5`}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41355f]">Safety First</p>
                <p className="mt-1 text-zinc-600">
                  Dermatologically tested, toxin-free, hypoallergenic, and breathable for delicate skin.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41355f]">Protection That Feels Loving</p>
                <p className="mt-1 text-zinc-600">
                  Protection that lasts through every nap and every dream, so your baby sleeps peacefully.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41355f]">For Parents Who Choose The Best</p>
                <p className="mt-1 text-zinc-600">
                  Crafted to give you peace of mind and help you feel proud of every care choice you make.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-[#eadfca] bg-white/70 p-5 shadow-[0_16px_45px_rgba(117,95,66,0.10)] sm:p-7">
              <p className="text-lg font-semibold leading-relaxed text-[#41355f]">
                Nothing touches your baby&apos;s skin except carefully selected safe materials, designed for dry nights,
                fewer rashes, and more happy moments together.
              </p>
              <div className="relative mt-6 min-h-[260px] rounded-2xl bg-[radial-gradient(circle,rgba(255,222,92,0.52),rgba(255,255,255,0.2),rgba(255,255,255,0))]">
                <Image src="/babyHand.png" alt="Protective caring hands" fill className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem & Solution */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className={softCard}>
            <h3 className="text-2xl font-semibold text-[#41355f]">When Nights Feel Longer Than They Should</h3>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li>Parents worry through the night about unexpected leaks.</li>
              <li>Sensitive skin can react to heat, moisture, and harsh additives.</li>
              <li>Uncomfortable diapers can interrupt play, naps, and bonding moments.</li>
            </ul>
          </article>
          <article className={softCard}>
            <h3 className="text-2xl font-semibold text-[#41355f]">How We Hold Them Better</h3>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li>Fast absorb core helps lock wetness away for day-and-night confidence.</li>
              <li>Breathable hypoallergenic layers support delicate skin with a gentle touch.</li>
              <li>Flexible fit supports natural movement so babies stay comfortable and smiling.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 4. Technology Explanation */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Crafted Layer By Layer, With Care</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 leading-relaxed">
            Premium design meets clinical trust: medical-grade breathable fibers, rapid absorb channels,
            and skin-kind construction built to protect through every movement, cuddle, and dream.
          </p>
          <div className={`${softCard} mt-8`}>
            <ProductFeature
              product={product}
              style={
                {
                  "--subtle-text": "#5f6368",
                  "--page-text": "#17181c",
                  "--product-glow": product.background || "#7c9f92",
                } as CSSProperties
              }
            />
          </div>
        </div>
      </section>

      {/* 5. Feature Cards */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Small Details, Big Comfort</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className={softCard}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41355f]">Gentle Protection For Delicate Skin</p>
              <p className="mt-2 text-zinc-600 leading-relaxed">
                Soft-touch layers are designed to reduce friction and keep your baby comfortable through every change.
              </p>
            </div>
            <div className={softCard}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41355f]">Protection Through Every Nap And Dream</p>
              <p className="mt-2 text-zinc-600 leading-relaxed">
                Advanced absorbency supports longer dryness, helping parents rest easier and babies sleep better.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#eadfca] bg-[radial-gradient(circle,rgba(255,215,97,0.40),rgba(255,255,255,0.22),rgba(255,255,255,0))] p-4 sm:p-6">
            <PhotoMosaic images={moodboardImages} />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <article key={item} className={softCard}>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={`/images/diaper/supreme-diaper/${idx + 1}.jpg`} alt={item} fill className="object-cover" />
                </div>
                <p className="mt-4 text-base font-semibold leading-snug text-zinc-800">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Size Chart */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Find Their Perfect Little Fit</h2>
          <div className={`${softCard} mt-8 overflow-x-auto p-0`}>
            <table className="min-w-full text-left">
              <thead className="border-b border-[#eadfce] bg-[#fff5e9]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Size</th>
                  <th className="px-6 py-4 font-semibold">Weight (kg)</th>
                  <th className="px-6 py-4 font-semibold">Comfort Guidance</th>
                </tr>
              </thead>
              <tbody>
                {variants.map((variant) => (
                  <tr key={variant.id} className="border-b border-[#efe6db] last:border-0">
                    <td className="px-6 py-4 font-semibold">{variant.size || "N/A"}</td>
                    <td className="px-6 py-4 text-zinc-700">{variant.weight || "-"}</td>
                    <td className="px-6 py-4 text-zinc-700">Choose the fit that keeps skin dry and movement easy.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Voices Of Rested Parents</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 leading-relaxed">
            Stories from parents who found more relief, more trust, and more joyful bonding time.
          </p>
          <div className={`${softCard} mt-8`}>
            <ReviewSection product={product} />
          </div>
        </div>
      </section>

      {/* 8. Comparison Table */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Why Parents Feel Safer With Zuvara</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 leading-relaxed">
            Because when it comes to your baby, certainty matters more than claims.
          </p>
          <div className={`${softCard} mt-8 overflow-x-auto p-0`}>
            <table className="min-w-full text-left">
              <thead className="border-b border-[#eadfce] bg-[#edf7f2]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Feature</th>
                  <th className="px-6 py-4 font-semibold">Zuvara</th>
                  <th className="px-6 py-4 font-semibold">Ordinary</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[#efe6db] last:border-0">
                    <td className="px-6 py-4 font-semibold">{row.label}</td>
                    <td className="px-6 py-4 text-[#3a7462]">{row.zuvara}</td>
                    <td className="px-6 py-4 text-zinc-700">{row.ordinary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Risk Free Guarantee */}
      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>A Promise You Can Lean On</h2>
          <div className="mt-8 rounded-3xl border border-[#eadfca] bg-[radial-gradient(circle,rgba(255,215,97,0.38),rgba(255,255,255,0.20),rgba(255,255,255,0))] p-4 sm:p-6">
            <PhotoMosaic images={conceptImages} />
          </div>

          <div className="mt-8 grid gap-6 rounded-[34px] border border-[#e4d7c8] bg-gradient-to-r from-[#fff7ec] to-[#f4faf7] p-6 shadow-[0_22px_55px_rgba(78,61,45,0.10)] lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-3xl font-semibold text-[#41355f]">Your Peace-Of-Mind Promise</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700">
                If fit, comfort, or protection doesn&apos;t feel right, reach out within 7 days of delivery.
                We&apos;ll help with replacement support and sizing guidance, because your peace of mind comes first.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-[#41355f] px-5 py-2.5 text-sm font-semibold text-white!"
              >
                Talk to a care expert
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/baby/baby26.png" alt="Caring parent and baby" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionTitle}>Questions You Ask With Love</h2>
          <p className="mt-4 max-w-3xl text-zinc-600 leading-relaxed">
            Honest answers for the questions every caring parent asks before saying yes.
          </p>
          <div className={`${softCard} mt-8`}>
            <FaqSection product={product} faqs={product.faqs} questionColor="#41355f" answerColor="#52525b" />
          </div>

          <div className={`${softCard} mt-6`}>
            <ProductCloseViewSection product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
