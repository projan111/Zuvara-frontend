"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import PersonalProductHeroSection from "@/app/components/personalCareProduct/PersonalProductHeroSection";
import PersonalWhyItMattersSection from "@/app/components/personalCareProduct/PersonalWhyItMattersSection";
import PersonalComfortDetailsSection from "@/app/components/personalCareProduct/PersonalComfortDetailsSection";
import PersonalSizeGuideSection from "@/app/components/personalCareProduct/PersonalSizeGuideSection";
import PersonalTrustFusionSection from "@/app/components/personalCareProduct/PersonalTrustFusionSection";
import PersonalCarePromiseSection from "@/app/components/personalCareProduct/PersonalCarePromiseSection";
import PersonalFaqAndCloseViewSection from "@/app/components/personalCareProduct/PersonalFaqAndCloseViewSection";

const themePresets: ThemePreset[] = [
  {
    accent: "#7b2cbf",
    pageBg: "#fbf6ff",
    containerBg: "#f0e2fb",
    border: "#cfb2e8",
    chipBg: "#ead7f9",
    sectionTint: "#f5ebff",
  },
  {
    accent: "#9d4edd",
    pageBg: "#fdf7ff",
    containerBg: "#f7e8ff",
    border: "#dcb8f5",
    chipBg: "#f1dcff",
    sectionTint: "#f7edff",
  },
  {
    accent: "#5a189a",
    pageBg: "#f8f2ff",
    containerBg: "#ead9ff",
    border: "#b89ada",
    chipBg: "#dfc4f8",
    sectionTint: "#f2e7ff",
  },
];

const moodboardImages = [
  "/images/personalCare/period-panties-pack.png",
  "/images/personalCare/period-panties-pack-l.png",
  "/images/personalCare/sanitary-pads-pack.png",
  "/images/personalCare/sanitary-pads-pack-l.png",
  "/images/personalCare/happy-lady.png",
  "/images/personalCare/lady-with-goggles.png",
];

const comparisonRows = [
  { label: "Skin-Friendly Materials", zuvara: "Derm-tested", ordinary: "Varies" },
  { label: "Absorbency Confidence", zuvara: "High", ordinary: "Medium" },
  { label: "Odour Control", zuvara: "Advanced", ordinary: "Basic" },
  { label: "Leak Protection", zuvara: "Multi-layer", ordinary: "Standard" },
  { label: "Comfort Fit", zuvara: "Adaptive", ordinary: "Generic" },
];

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function pickHeroPack(product: Product) {
  return product.image || product.variants?.[0]?.image || product.productImage;
}

export default function Page() {
  const params = useParams<{ personalCareProductPage: string }>();
  const slug = params?.personalCareProductPage;

  const products = useMemo(() => personalCareProducts, []);
  const product = products.find((item) => item.slug === slug) || products[0];

  const initialIndex = Math.max(
    0,
    products.findIndex((item) => item.slug === slug),
  );
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  const active = products[clampIndex(activeIdx, products.length)] || product;
  const theme = themePresets[clampIndex(activeIdx, themePresets.length)];
  const heroPackSrc = active ? pickHeroPack(active) : "";
  const highlights = (active?.highlights || []).slice(0, 4);

  if (!active) {
    return (
      <main className="min-h-screen grid place-items-center px-6">
        <p className="text-zinc-600">Product not found.</p>
      </main>
    );
  }

  return (
    <main
      className="relative overflow-hidden text-zinc-800 transition-colors duration-500 antialiased"
      style={{ backgroundColor: theme.pageBg }}
    >
      <div
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.2) }}
      />
      <div
        className="pointer-events-none absolute top-[30rem] -right-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.44) }}
      />

      <PersonalProductHeroSection
        active={active}
        products={products}
        heroPackSrc={heroPackSrc}
        theme={theme}
        onPrev={() => setActiveIdx((v) => v - 1)}
        onNext={() => setActiveIdx((v) => v + 1)}
        onSelectProduct={(index) => setActiveIdx(index)}
      />

      <PersonalWhyItMattersSection theme={theme} />

      <PersonalComfortDetailsSection
        theme={theme}
        highlights={highlights}
        moodboardImages={moodboardImages}
      />

      <PersonalSizeGuideSection theme={theme} variants={active.variants || []} />

      <PersonalTrustFusionSection theme={theme} comparisonRows={comparisonRows} />

      <PersonalCarePromiseSection
        theme={theme}
        conceptImage={active.productImage || "/images/personalCare/sleeping-lady.png"}
      />

      <PersonalFaqAndCloseViewSection active={active} theme={theme} />
    </main>
  );
}
