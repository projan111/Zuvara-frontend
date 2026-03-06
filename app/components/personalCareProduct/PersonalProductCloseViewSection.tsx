import Image from "next/image";
import type { Product } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalProductCloseViewSectionProps = {
  product: Product;
  theme: ThemePreset;
};

export default function PersonalProductCloseViewSection({
  product,
  theme,
}: PersonalProductCloseViewSectionProps) {
  const features = (product.features || []).slice(0, 8);
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);
  const accentColor = theme.accent || "#7b2cbf";

  return (
    <section className="relative px-2 py-8 lg:px-4 lg:py-10 overflow-hidden perspective-distant">
      <div
        className="pointer-events-none absolute inset-x-10 top-8 h-24 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(accentColor, 0.14) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 space-y-3">
          <span
            className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: hexToRgba(accentColor, 0.55) }}
          >
            Engineering Spotlight
          </span>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ color: hexToRgba(accentColor, 0.9) }}
          >
            A Closer Look At{" "}
            <span className="font-light italic opacity-60">Every Layer.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8 lg:space-y-14 order-2 lg:order-1">
            {leftFeatures.map((feature, idx) => (
              <div
                key={`${feature}-${idx}`}
                className="group relative flex items-center lg:flex-row-reverse gap-4 text-left lg:text-right"
              >
                <div
                  className="shrink-0 size-12 lg:size-14 rounded-2xl border flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: hexToRgba(theme.pageBg, 0.86),
                    borderColor: `${theme.border}66`,
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: hexToRgba(accentColor, 0.7) }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <div className="space-y-1">
                  <p
                    className="text-xs lg:text-sm font-bold leading-snug uppercase tracking-tight"
                    style={{ color: hexToRgba(accentColor, 0.86) }}
                  >
                    {feature}
                  </p>
                  <div
                    className="hidden lg:block h-px w-10 ml-auto rounded-full group-hover:w-16 transition-all duration-500"
                    style={{ backgroundColor: `${accentColor}44` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center">
            <div
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[120%] rounded-full blur-[120px] opacity-10 pointer-events-none"
              style={{ backgroundColor: accentColor }}
            />

            <div className="relative z-10 w-full max-w-sm lg:max-w-md mx-auto transform transition-transform duration-700 hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={560}
                height={560}
                className="w-full h-auto object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
              />
              <div
                className="absolute inset-0 border-[1px] rounded-full scale-110 -z-10 animate-pulse"
                style={{ borderColor: `${theme.border}66` }}
              />
            </div>

            <div
              className="mt-8 px-5 py-2 rounded-full border backdrop-blur-sm shadow-sm"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.72),
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: hexToRgba(accentColor, 0.62) }}
              >
                Comfort Anatomy
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8 lg:space-y-14 order-3">
            {rightFeatures.map((feature, idx) => (
              <div
                key={`${feature}-${idx + midpoint}`}
                className="group relative flex items-center gap-4 text-left"
              >
                <div
                  className="shrink-0 size-12 lg:size-14 rounded-2xl border flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: hexToRgba(theme.pageBg, 0.86),
                    borderColor: `${theme.border}66`,
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: hexToRgba(accentColor, 0.7) }}
                  >
                    {idx + midpoint + 1}
                  </span>
                </div>
                <div className="space-y-1">
                  <p
                    className="text-xs lg:text-sm font-bold leading-snug uppercase tracking-tight"
                    style={{ color: hexToRgba(accentColor, 0.86) }}
                  >
                    {feature}
                  </p>
                  <div
                    className="hidden lg:block h-px w-10 rounded-full group-hover:w-16 transition-all duration-500"
                    style={{ backgroundColor: `${accentColor}44` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

