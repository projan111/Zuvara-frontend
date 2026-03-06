import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShieldCheck, HeartHandshake } from "lucide-react";
import type { Product } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalProductHeroSectionProps = {
  active: Product;
  products: Product[];
  theme: ThemePreset;
  heroPackSrc: string;
  onPrev: () => void;
  onNext: () => void;
  onSelectProduct: (index: number) => void;
};

export default function PersonalProductHeroSection({
  active,
  products,
  theme,
  heroPackSrc,
  onPrev,
  onNext,
  onSelectProduct,
}: PersonalProductHeroSectionProps) {
  const features = (active.features || []).slice(0, 3);

  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:px-10 lg:pt-20">
      <div
        className="pointer-events-none absolute -left-12 -top-10 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.16) }}
      />
      <div
        className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />

      <div className="mx-auto max-w-7xl">
        <div
          className="grid gap-8 rounded-[2rem] border p-6 lg:grid-cols-2 lg:p-10"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.containerBg, 0.84),
            boxShadow: `0 24px 54px ${hexToRgba(theme.accent, 0.12)}`,
          }}
        >
          <div className="space-y-5">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: hexToRgba(theme.accent, 0.64) }}
            >
              Personal Care Essentials
            </p>

            <h1
              className="text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.02] tracking-tight"
              style={{ color: theme.accent }}
            >
              Care That Holds You
              <br />
              Through Every Hour.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed md:text-base" style={{ color: hexToRgba(theme.accent, 0.78) }}>
              {active.description ||
                "For days when your body needs softness, trust, and one less thing to worry about."}
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, text: "Dermatologically conscious materials" },
                { icon: HeartHandshake, text: "Made for comfort on sensitive days" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-2xl border px-3 py-2"
                  style={{
                    borderColor: `${theme.border}66`,
                    backgroundColor: hexToRgba(theme.pageBg, 0.75),
                  }}
                >
                  <item.icon size={16} style={{ color: theme.accent }} />
                  <p className="text-xs font-medium" style={{ color: hexToRgba(theme.accent, 0.8) }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                  style={{
                    borderColor: `${theme.border}66`,
                    backgroundColor: hexToRgba(theme.chipBg, 0.6),
                    color: theme.accent,
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onPrev}
                className="h-10 w-18 rounded-full border bg-white/70 grid place-items-center"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="h-10 w-18 rounded-full border bg-white/70 grid place-items-center"
                style={{ borderColor: theme.border, color: theme.accent }}
                aria-label="Next product"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[350px] rounded-3xl border bg-white/60 overflow-hidden" style={{ borderColor: `${theme.border}66` }}>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{ background: `linear-gradient(180deg, rgba(255,255,255,0), ${hexToRgba(theme.pageBg, 0.82)})` }}
            />
            <Image
              src={heroPackSrc}
              alt={`${active.name} pack`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-x-0 bottom-4 flex justify-center px-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white! transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme.accent }}
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {products.map((product, index) => {
            const isActive = product.id === active.id;
            return (
              <button
                key={`${product.id}-${index}`}
                type="button"
                onClick={() => onSelectProduct(index)}
                className="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                style={{
                  borderColor: isActive ? theme.accent : `${theme.border}66`,
                  backgroundColor: isActive ? hexToRgba(theme.accent, 0.1) : "transparent",
                  color: isActive ? theme.accent : hexToRgba(theme.accent, 0.72),
                }}
              >
                {product.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
