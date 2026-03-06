import type { Variant } from "@/type/personalCareProductType";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalSizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
};

export default function PersonalSizeGuideSection({ theme, variants }: PersonalSizeGuideSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-7">
        <div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
            Find The Fit That Feels Right
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            Your comfort changes day to day. Pick the size that gives you the calmest, safest feel.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
          }}
        >
          <div
            className="hidden grid-cols-12 border-b px-6 py-4 text-[11px] font-semibold uppercase tracking-wide md:grid"
            style={{
              borderColor: `${theme.border}44`,
              color: hexToRgba(theme.accent, 0.62),
              backgroundColor: hexToRgba(theme.containerBg, 0.32),
            }}
          >
            <div className="col-span-2">Size</div>
            <div className="col-span-3">Body Range</div>
            <div className="col-span-7">Fit Guidance</div>
          </div>

          <div>
            {variants.map((variant, idx) => (
              <div
                key={variant.id}
                className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-12 md:items-center"
                style={{ borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33` }}
              >
                <div className="md:col-span-2">
                  <span
                    className="inline-flex min-w-10 justify-center rounded-xl border px-3 py-1 text-sm font-semibold"
                    style={{
                      borderColor: `${theme.border}66`,
                      color: theme.accent,
                      backgroundColor: hexToRgba(theme.pageBg, 0.95),
                    }}
                  >
                    {variant.size || "-"}
                  </span>
                </div>

                <div className="md:col-span-3 text-sm font-medium" style={{ color: hexToRgba(theme.accent, 0.8) }}>
                  {variant.weight ? `${variant.weight} kg` : "-"}
                </div>

                <div className="md:col-span-7 text-sm" style={{ color: hexToRgba(theme.accent, 0.7) }}>
                  {idx === 0
                    ? "Great for lighter flow days and all-day comfort."
                    : idx === variants.length - 1
                      ? "Extra confidence for extended wear and overnight use."
                      : "Balanced fit and absorbency for everyday routines."}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
