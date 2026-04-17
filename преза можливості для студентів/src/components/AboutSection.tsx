import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const { t } = useLanguage();
  const about = translations.about;

  return (
    <section id="about" className="px-4 py-6 sm:px-6 md:px-10 md:py-8 lg:py-10 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="section-label mb-3 sm:mb-4">{t(about.label)}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            {t(about.title)}
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 max-w-4xl">
            {t(about.text1)}
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 max-w-4xl">
            {t(about.text2)}
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
            {t(about.text3)}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
