import type { Product } from "@/type/personalCareProductType";
import { Accordions, Accordion } from "@/app/components/ui/accordion";
import type { ThemePreset } from "@/app/components/personalCareProduct/theme";
import { hexToRgba } from "@/app/components/personalCareProduct/theme";
import PersonalProductCloseViewSection from "@/app/components/personalCareProduct/PersonalProductCloseViewSection";

type PersonalFaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
};

export default function PersonalFaqAndCloseViewSection({
  active,
  theme,
}: PersonalFaqAndCloseViewSectionProps) {
  const faqs = active.faqs || [];

  return (
    <section className="relative px-6 pb-16 pt-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight" style={{ color: theme.accent }}>
            Questions You Ask In Real Life
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            Honest answers on fit, comfort, and confidence before you choose what your body needs.
          </p>
        </div>

        <div
          className="rounded-3xl border p-4 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.78),
          }}
        >
          {faqs.length > 0 ? (
            <Accordions type="single" className="w-full">
              {faqs.map((faq, index) => (
                <Accordion
                  key={`${faq.question}-${index}`}
                  id={`personal-faq-${index}`}
                  title={faq.question}
                  className="overflow-hidden px-0"
                  triggerClassName="py-4 text-left text-sm font-semibold md:text-base hover:no-underline"
                  triggerStyle={{ color: theme.accent }}
                  style={{
                    borderBottom: `1px solid ${theme.border}44`,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <div className="pb-4 pt-1 pr-1">
                    <p className="whitespace-pre-line text-sm leading-relaxed md:text-base" style={{ color: hexToRgba(theme.accent, 0.76) }}>
                      {faq.answer}
                    </p>
                  </div>
                </Accordion>
              ))}
            </Accordions>
          ) : (
            <p className="text-sm" style={{ color: hexToRgba(theme.accent, 0.72) }}>
              FAQs will be updated soon.
            </p>
          )}
        </div>

        <div
          className="rounded-3xl border p-4 md:p-5"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.78),
          }}
        >
          <PersonalProductCloseViewSection product={active} theme={theme} />
        </div>
      </div>
    </section>
  );
}
