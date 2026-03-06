import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type ComparisonRow = {
  label: string;
  zuvara: string;
  ordinary: string;
};

type PersonalTrustFusionSectionProps = {
  theme: ThemePreset;
  comparisonRows: ComparisonRow[];
};

export default function PersonalTrustFusionSection({ theme, comparisonRows }: PersonalTrustFusionSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-7">
        <article
          className="rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.sectionTint, 0.56),
            boxShadow: `0 18px 42px ${hexToRgba(theme.accent, 0.1)}`,
          }}
        >
          <p className="text-sm md:text-base italic" style={{ color: hexToRgba(theme.accent, 0.78) }}>
            “I didn’t realize how much anxiety I was carrying until I finally felt protected and comfortable for a full day.”
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide" style={{ color: hexToRgba(theme.accent, 0.62) }}>
            Verified Customer Story
          </p>
        </article>

        <div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
            Why Women Choose Zuvara
          </h2>
          <p className="mt-2 text-sm" style={{ color: hexToRgba(theme.accent, 0.68) }}>
            A side-by-side look at the protection, softness, and confidence you deserve.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
            boxShadow: `0 24px 48px ${hexToRgba(theme.accent, 0.1)}`,
          }}
        >
          <div
            className="grid grid-cols-12 border-b px-4 py-3 text-[11px] font-semibold uppercase tracking-wide"
            style={{
              borderColor: `${theme.border}44`,
              backgroundColor: hexToRgba(theme.containerBg, 0.34),
              color: hexToRgba(theme.accent, 0.62),
            }}
          >
            <div className="col-span-6">Feature</div>
            <div className="col-span-3 text-center">Zuvara</div>
            <div className="col-span-3 text-center">Typical</div>
          </div>

          {comparisonRows.map((row, idx) => (
            <div
              key={row.label}
              className="grid grid-cols-12 items-center px-4 py-3 text-sm"
              style={{ borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33` }}
            >
              <div className="col-span-6 font-medium" style={{ color: hexToRgba(theme.accent, 0.82) }}>
                {row.label}
              </div>
              <div className="col-span-3 text-center font-semibold" style={{ color: theme.accent }}>
                {row.zuvara}
              </div>
              <div className="col-span-3 text-center" style={{ color: hexToRgba(theme.accent, 0.62) }}>
                {row.ordinary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
