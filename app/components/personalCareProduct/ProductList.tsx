"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";
import SectionIntro, {
  sectionContentSpacing,
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";

const personalDetailPagePaletteBySlug: Record<
  string,
  { background: string; foreground: string }
> = {
  "period-panties": {
    background: "#f0e2fb",
    foreground: "#7b2cbf",
  },
  "sanitary-pads": {
    background: "#f7e8ff",
    foreground: "#9d4edd",
  },
};

const ProductList = () => {
  const getCardTheme = (product: ProductType) => {
    const detailPalette = personalDetailPagePaletteBySlug[product.slug] ?? {
      background: "#f0e2fb",
      foreground: "#7b2cbf",
    };

    return {
      background: detailPalette.background,
      foreground: detailPalette.foreground,
      border: `${detailPalette.foreground}22`,
      chip: "rgba(255,255,255,0.72)",
    };
  };

  return (
    <section className="container lg:min-h-screen mx-auto py-8 lg:py-20 px-4 sm:px-6 lg:px-6 max-w-7xl">
      <SectionIntro
        align="center"
        className={`${sectionIntroSpacing} max-w-4xl mx-auto`}
        eyebrow={
          <span className="inline-flex rounded-full border border-personalCare/20 bg-personalCare/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-personalCare">
            Shop the range
          </span>
        }
        title={
          <>
            Best selling
            <span className="ml-3 font-light italic text-personalCare/70">
              personal essentials
            </span>
          </>
        }
        description="Discover our most loved personal care products, chosen for soft comfort, dependable protection, and a lighter everyday feel."
        titleClassName="text-5xl font-semibold leading-[0.95] tracking-tight text-personalCare"
        descriptionClassName="text-sm font-medium leading-relaxed text-zinc-600 md:text-base"
      />
      <div
        className={`${sectionContentSpacing} flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto`}
      >
        {personalCareProducts.map((product, index) => {
          const cardTheme = getCardTheme(product);

          return (
            <Link
              key={product.id}
              href={`/personalCareProduct/${product.slug}`}
              className="group block w-[calc(50%-0.75rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="flex h-full flex-col gap-5 rounded-4xl transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div
                  className="relative flex h-64 sm:h-72 lg:h-80 items-center justify-center overflow-hidden rounded-[2rem] py-4"
                  style={{ backgroundColor: cardTheme.background }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-6 bottom-4 h-12 rounded-full blur-2xl"
                    style={{ backgroundColor: `${cardTheme.foreground}2e` }}
                  />
                  <Image
                    src={product.image || product.variants?.[0]?.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                  />
                </div>

                <div className="flex flex-1 items-center justify-between px-3 pb-2">
                  <h3
                    className="text-base font-semibold leading-snug sm:text-lg"
                    style={{ color: cardTheme.foreground }}
                  >
                    {product.name}
                  </h3>
                  <span
                    className="shrink-0 rounded-full p-2.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundColor: cardTheme.chip,
                      color: cardTheme.foreground,
                    }}
                  >
                    <ArrowRight size={18} />
                  </span>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
