import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";
import type { BabyCareListingTheme } from "@/app/components/babyCareProduct/theme";

type WhyZuvaraProductsSectionProps = {
  theme: BabyCareListingTheme;
};

const reasons = [
  {
    title: "Gentle by design",
    body: "Everyday essentials built for delicate skin, softer touch, and calmer routines.",
    icon: HeartHandshake,
  },
  {
    title: "Trusted protection",
    body: "Parents choose Zuvara for reliable absorbency, comfort, and practical daily performance.",
    icon: ShieldCheck,
  },
  {
    title: "Made to feel better",
    body: "Thoughtful materials and balanced fit help your baby stay comfortable longer.",
    icon: Sparkles,
  },
];

export default function WhyZuvaraProductsSection({
  theme,
}: WhyZuvaraProductsSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 py-8 md:px-0 md:py-10 bg-babyCare/70">
      <div className="relative z-10  w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.88),
              color: theme.accent,
            }}
          >
            Why Zuvara Products
          </span>
          <h2
            className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-tight"
            style={{ color: theme.accent }}
          >
            Everyday care that feels
            <span
              className="ml-2 italic font-light"
              style={{ color: theme.accentSoft }}
            >
              thoughtful and trusted.
            </span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed font-medium md:text-base"
            style={{ color: hexToRgba(theme.accent, 0.76) }}
          >
            Zuvara products are built around comfort, safety, and the practical
            needs parents care about most from morning changes to overnight use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.6rem] border p-5 shadow-[0_18px_36px_rgba(69,104,94,0.08)]"
              style={{
                borderColor: `${theme.border}55`,
                backgroundColor: hexToRgba(theme.pageBg, 0.96),
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: hexToRgba(theme.chipBg, 0.85),
                  color: theme.accent,
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ color: theme.accent }}
              >
                {title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed md:text-base"
                style={{ color: hexToRgba(theme.accent, 0.72) }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
