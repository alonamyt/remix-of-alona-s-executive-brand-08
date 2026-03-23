import FadeIn from "./FadeIn";
import novaImage from "@/assets/novaposhta-red-suit.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const NovaPoshtaSection = () => {
  const { t } = useLanguage();
  const np = translations.novaPoshta;

  return (
    <section id="novaposhta" className="nova-wash">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[auto] lg:min-h-[52vh]">
        <div className="relative flex items-center justify-center bg-nova/5 p-4 sm:p-5 lg:p-6">
          <img
            src={novaImage}
            alt="Альона — Нова Пошта"
            className="w-full max-h-[60vh] sm:max-h-[70vh] lg:max-h-[85vh] object-contain rounded-lg"
          />
        </div>

        <div className="px-4 py-6 sm:px-6 md:px-10 lg:py-10 lg:px-10 xl:px-12 xl:pl-10 flex flex-col justify-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-nova" />
              <p className="section-label text-nova">{t(np.label)}</p>
            </div>
          </FadeIn>
          <FadeIn delay={50}>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              {t(np.role)} · {t(np.period)}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight whitespace-pre-line">
              {t(np.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 max-w-xl">
              {t(np.text)}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex gap-6 sm:gap-8 mb-4 sm:mb-5">
              {t(np.stats).map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight text-nova">{stat.number}</p>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <ul className="font-body text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-1.5 max-w-xl mb-5">
              {t(np.highlights).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-nova mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={450}>
            <p className="font-body text-xs uppercase tracking-widest text-nova mb-2">{t(np.careerLabel)}</p>
            <div className="space-y-1.5 mb-5 max-w-xl">
              {t(np.careerPath).map((step, i) => (
                <div key={i} className="flex items-start gap-2 font-body text-xs sm:text-sm text-muted-foreground">
                  <span className="text-nova/60 mt-0.5">—</span>
                  <div>
                    <span>{step.role}</span>
                    <span className="text-muted-foreground/50 ml-2">{step.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground/70 mb-2">{t(np.previousLabel)}</p>
            <div className="font-body text-xs sm:text-sm text-muted-foreground/70 max-w-xl">
              <p className="font-medium text-foreground/70">{t(np.previousExp).company}</p>
              <p>{t(np.previousExp).role} · {t(np.previousExp).period}</p>
              <p className="text-xs mt-0.5">{t(np.previousExp).desc}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default NovaPoshtaSection;
