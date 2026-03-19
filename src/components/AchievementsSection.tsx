import { useState } from "react";
import FadeIn from "./FadeIn";
import achievementsMain from "@/assets/achievements-main.jpg";
import awardGreenJacket from "@/assets/award-green-jacket.jpg";
import dzwinner2024 from "@/assets/dzwinner-2024.jpg";
import cxExcellence from "@/assets/cx-excellence-award.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import PhotoLightbox from "./PhotoLightbox";

const AchievementsSection = () => {
  const { t } = useLanguage();
  const ach = translations.achievements;
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const photos = [
    { src: awardGreenJacket, alt: t({ ua: "Альона з нагородою DzWinner", en: "Alona with DzWinner award" }) },
    { src: cxExcellence, alt: "Ukrainian CX Excellence" },
    { src: dzwinner2024, alt: "DzWinner 2024" },
  ];

  return (
    <section id="achievements" className="navy-section relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={achievementsMain} alt="DzWinner 2025" className="image-editorial opacity-20" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative px-4 py-10 sm:px-6 md:px-12 md:py-14 lg:py-20 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="section-label text-accent mb-3 sm:mb-4">{t(ach.label)}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-10 sm:mb-16 tracking-tight whitespace-pre-line">
              {t(ach.title)}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mb-10 sm:mb-16">
            {t(ach.stats).map((stat, i) => (
              <FadeIn key={i} delay={200 + i * 100}>
                <div className="border-l-2 border-accent pl-4 sm:pl-6">
                  <p className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight text-accent turquoise-glow">{stat.number}</p>
                  <p className="font-body text-xs sm:text-sm text-primary-foreground/70 mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={450}>
            <ul className="font-body text-xs sm:text-sm text-primary-foreground/70 space-y-2 mb-10 sm:mb-16 max-w-2xl">
              {t(ach.details).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <FadeIn key={i} delay={500 + i * 100}>
                <div
                  className="image-hover rounded-lg overflow-hidden border border-accent/20 cursor-pointer"
                  onClick={() => setLightbox({ index: i })}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-56 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <PhotoLightbox
          images={photos}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default AchievementsSection;
