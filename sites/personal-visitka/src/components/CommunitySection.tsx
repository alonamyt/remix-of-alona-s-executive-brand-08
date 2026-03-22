import { useState } from "react";
import FadeIn from "./FadeIn";
import auroraLeanFest from "@/assets/aurora-lean-fest.jpg";
import conferenceTeam2024 from "@/assets/conference-team-2024.jpg";
import conferenceTeam2025 from "@/assets/conference-team-2025.jpg";
import novaPoshtaCelebration from "@/assets/nova-poshta-team-celebration.jpg";
import dzwinnerSpeaker from "@/assets/dzwinner-best-speaker.jpg";
import ucxe2025 from "@/assets/ucxe-2025.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import PhotoLightbox from "./PhotoLightbox";

const CommunitySection = () => {
  const { t } = useLanguage();
  const c = translations.community;
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const images = [
    { src: auroraLeanFest, alt: "Aurora Lean Fest 2026", span: "col-span-2 row-span-2" },
    { src: conferenceTeam2025, alt: t({ ua: "Конференція Контакт-центри 2025", en: "Contact Centers Conference 2025" }), span: "col-span-1 row-span-1" },
    { src: ucxe2025, alt: "UCXE 2025", span: "col-span-1 row-span-1" },
    { src: novaPoshtaCelebration, alt: t({ ua: "Святкування з командою", en: "Team celebration" }), span: "col-span-1 row-span-1" },
    { src: conferenceTeam2024, alt: t({ ua: "Конференція DzWinner 2024", en: "DzWinner Conference 2024" }), span: "col-span-1 row-span-1" },
    { src: dzwinnerSpeaker, alt: t({ ua: "Найкращий доповідач DzWinner", en: "DzWinner Best Speaker" }), span: "col-span-1 row-span-1" },
  ];

  const lightboxImages = images.map(({ src, alt }) => ({ src, alt }));

  return (
    <section id="community" className="px-4 py-10 sm:px-6 md:px-12 md:py-14 lg:py-20 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="section-label mb-3 sm:mb-4">{t(c.label)}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
            {t(c.title)}
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-lg">
            {t(c.text)}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((img, i) => (
            <FadeIn key={i} delay={150 + i * 80} className={img.span}>
              <div
                className="image-hover rounded-lg overflow-hidden h-full border border-border cursor-pointer"
                onClick={() => setLightbox({ index: i })}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full min-h-[120px] sm:min-h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {lightbox && (
        <PhotoLightbox
          images={lightboxImages}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default CommunitySection;
