import FadeIn from "./FadeIn";
import auroraImage from "@/assets/aurora-yellow-suit.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AuroraSection = () => {
  const { t } = useLanguage();
  const a = translations.aurora;

  return (
    <section id="aurora" className="aurora-wash">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[auto] lg:min-h-[70vh]">
        {/* Image */}
        <div className="relative flex items-center justify-center bg-aurora/5 p-4 sm:p-6 lg:p-8">
          <img
            src={auroraImage}
            alt="Альона — Аврора Мультимаркет"
            className="w-full max-h-[60vh] sm:max-h-[70vh] lg:max-h-[85vh] object-contain rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="px-4 py-10 sm:px-6 md:px-12 lg:py-20 lg:px-12 lg:pl-16 flex flex-col justify-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-aurora" />
              <p className="section-label text-aurora">{t(a.label)}</p>
            </div>
          </FadeIn>
          <FadeIn delay={50}>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
              {t(a.role)} · {t(a.period)}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight whitespace-pre-line">
              {t(a.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-lg">
              {t(a.text)}
            </p>
          </FadeIn>
          <FadeIn delay={250}>
            <ul className="font-body text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 max-w-lg">
              {t(a.responsibilities).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-aurora mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground border-l-2 border-aurora pl-4 max-w-lg">
              {t(a.highlight)}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AuroraSection;
