import Image from "next/image";
import { ShieldCheck, Sparkles, HeartPulse } from "lucide-react";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalWhyItMattersSectionProps = {
  theme: ThemePreset;
};

export default function PersonalWhyItMattersSection({ theme }: PersonalWhyItMattersSectionProps) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Protection You Can Trust",
      body: "Steady absorbency that helps you move through the day without second-guessing every step.",
    },
    {
      icon: Sparkles,
      title: "Kind To Your Skin",
      body: "Soft-touch layers designed to feel gentle when your body feels most sensitive.",
    },
    {
      icon: HeartPulse,
      title: "Comfort With Confidence",
      body: "A secure fit that lets you rest, work, and live normally, with less stress.",
    },
  ];

  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
            Why It Matters
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            On difficult days, comfort is not a luxury. It is support you can feel in every moment.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            {cards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-3xl border p-4 md:p-5"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.8),
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: theme.chipBg, color: theme.accent }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: theme.accent }}>
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border" style={{ borderColor: `${theme.border}66` }}>
            <Image
              src="/images/personalCare/sleeping-lady.png"
              alt="Woman resting comfortably"
              width={900}
              height={700}
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div
              className="absolute bottom-4 left-4 right-4 rounded-2xl border p-3 backdrop-blur-sm"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.78),
              }}
            >
              <p className="text-sm italic md:text-base" style={{ color: theme.accent }}>
                &quot;When comfort feels right, everything else feels lighter.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
