import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import heroPhoto from "@/assets/hero-portrait-close.png";

const HeroSection = () => {
  const { t } = useLanguage();
  const hero = translations.hero;

  return (
    <section className="min-h-[70svh] flex items-center section-padding pt-24 pb-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <p className="section-label mb-4 md:mb-6">{t(hero.label)}</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[0.95] mb-6 md:mb-8">
              {t(hero.firstName)}
              <br />
              {t(hero.lastName)}
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 whitespace-pre-line">
              {t(hero.subtitle)}
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/%D0%B0%D0%BB%D1%8C%D0%BE%D0%BD%D0%B0-%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D1%84%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-85aa59321"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground border-b-2 border-foreground pb-1 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="font-display text-sm font-bold uppercase tracking-[0.15em] text-accent border-b-2 border-accent pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
              >
                {t(hero.cta2)}
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Portrait circle */}
        <FadeIn delay={300} className="flex-shrink-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border">
            <img
              src={heroPhoto}
              alt="Альона Митрофанова"
              className="image-editorial object-top"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
