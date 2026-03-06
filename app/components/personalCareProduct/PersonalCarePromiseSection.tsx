import Image from "next/image";
import Link from "next/link";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";

type PersonalCarePromiseSectionProps = {
  theme: ThemePreset;
  conceptImage: string;
};

export default function PersonalCarePromiseSection({
  theme,
  conceptImage,
}: PersonalCarePromiseSectionProps) {
  return (
    <section className="relative px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-7">
        <div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
            A Promise To Stand By You
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            If something feels off, we help you fix it quickly so you can feel like yourself again.
          </p>
        </div>

        <div
          className="grid gap-5 rounded-3xl border p-5 md:p-6 lg:grid-cols-12 lg:items-stretch"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.86),
            boxShadow: `0 24px 54px ${hexToRgba(theme.accent, 0.12)}`,
          }}
        >
          <div className="flex h-full flex-col justify-between space-y-4 lg:col-span-7">
            <h3 className="text-xl font-semibold" style={{ color: theme.accent }}>
              Your Comfort Is Not Optional
            </h3>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: hexToRgba(theme.accent, 0.74) }}>
              Reach out within 7 days and we will guide you to a better size, better usage, and better daily comfort.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: hexToRgba(theme.accent, 0.74) }}>
              <li>Fast support from product specialists</li>
              <li>Fit and comfort guidance</li>
              <li>Clear and easy product recommendations</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex w-fit whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white!"
              style={{ backgroundColor: theme.accent }}
            >
              Talk to support now
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border" style={{ borderColor: `${theme.border}66` }}>
              <Image
                src={conceptImage}
                alt="Comfort-focused personal care"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
