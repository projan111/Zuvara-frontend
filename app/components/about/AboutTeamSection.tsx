"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { AboutPalette } from "@/app/components/about/theme";
import { Section, Container } from "@/app/components/layout";
import SectionIntro, {
  sectionIntroSpacing,
} from "@/app/components/common-ui/SectionIntro";
import { useTeamMembers } from "@/hooks/useTeam";

type AboutTeamSectionProps = {
  palette: AboutPalette;
};

export default function AboutTeamSection({
  palette,
}: AboutTeamSectionProps) {
  const { data, isLoading, isError } = useTeamMembers();

  return (
    <Section
      size="md"
      className="pt-6 pb-8 md:pt-10 md:pb-12 lg:pb-40"
      style={{ backgroundColor: palette.panel }}
    >
      <Container>
        <SectionIntro
          align="center"
          className={`mx-auto max-w-3xl ${sectionIntroSpacing}`}
          eyebrow={
            <p className="text-sm font-semibold" style={{ color: palette.accentSoft }}>
              The Team
            </p>
          }
          title={
            <>
              The people shaping
              <span className="ml-2 font-light italic">
                the care behind Zuvara.
              </span>
            </>
          }
          description="A multidisciplinary team bringing together product thinking, family empathy, and a quieter, more refined standard for baby essentials."
          titleClassName="text-2xl font-semibold leading-[0.98] lg:text-5xl"
          descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          titleStyle={{ color: palette.accent }}
          descriptionStyle={{ color: palette.body }}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" 
                 style={{ borderColor: palette.accent }}></div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-20">
            <p className="text-red-500 font-medium">
              Failed to load team members. Please try again later.
            </p>
          </div>
        )}

        {/* Team Grid */}
        {data && data.teamMembers.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {data.teamMembers.map((member) => (
              <article
                key={member.id}
                className="group relative overflow-hidden rounded-[1.3rem]"
                style={{ backgroundColor: palette.chip }}
              >
                <div className="relative aspect-[0.86]">
                  <Image
                    src={member.coverImage}
                    alt={member.fullName}
                    fill
                    className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/8 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center gap-2">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/78">
                      Zuvara Team
                    </span>
                  </div>
                  <p className="mt-3 text-base font-semibold md:text-lg">
                    {member.fullName}
                  </p>
                  <p className="text-xs text-white/76 md:text-sm">
                    {member.position}
                  </p>
                  {member.description && (
                    <p className="mt-2 text-xs text-white/70 line-clamp-2">
                      {member.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
