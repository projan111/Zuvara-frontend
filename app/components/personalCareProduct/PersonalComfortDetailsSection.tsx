import Image from "next/image";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalComfortDetailsSectionProps = {
  theme: ThemePreset;
  highlights: string[];
  moodboardImages: string[];
};

export default function PersonalComfortDetailsSection({
  theme,
  highlights,
  moodboardImages,
}: PersonalComfortDetailsSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
              Small Details, Big Relief
            </h2>
            <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
              Thoughtful design choices that help you feel dry, secure, and at ease through long days.
            </p>
          </div>
          <div
            className="w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.chipBg, 0.55),
              color: theme.accent,
            }}
          >
            Made For Real-Life Days
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <article
              key={`${item}-${idx}`}
              className="overflow-hidden rounded-3xl border"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.86),
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={moodboardImages[idx % moodboardImages.length] || "/images/personalCare/period-panties-pack.png"}
                  alt={item}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="p-4 text-sm font-semibold leading-snug" style={{ color: theme.accent }}>
                {item}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
