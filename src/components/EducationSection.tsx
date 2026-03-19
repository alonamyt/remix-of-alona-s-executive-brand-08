import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import corpLogo from "@/assets/corp-university-logo.jpg";
import leanLogo from "@/assets/lean-institute-logo.svg";

const EducationSection = () => {
  const { t } = useLanguage();
  const edu = translations.education;

  // Group certs by org key for visual grouping
  const allCerts = t(edu.certs);
  const corpCerts = allCerts.filter(c =>
    c.org.includes("Corporate University") || c.org.includes("Corporate University")
  );
  const leanCerts = allCerts.filter(c =>
    c.org.includes("Lean Institute")
  );

  return (
    <section id="education" className="px-4 py-10 sm:px-6 md:px-12 md:py-14 lg:py-20 lg:px-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="section-label mb-3 sm:mb-4">{t(edu.label)}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 tracking-tight">
            {t(edu.title)}
          </h2>
        </FadeIn>

        <div className="space-y-0 mb-6 sm:mb-8">
          {t(edu.items).map((item, i) => (
            <FadeIn key={i} delay={150 + i * 100}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-6 border-b border-border gap-1">
                <div className="flex-1">
                  <p className="font-display text-base sm:text-lg font-bold text-foreground">{item.degree}</p>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{item.school}</p>
                  <p className="font-body text-xs text-muted-foreground/70 mt-0.5">{item.specialty}</p>
                </div>
                <p className="font-display text-xs sm:text-sm font-medium text-muted-foreground sm:ml-4 sm:flex-shrink-0">{item.year}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350}>
          <div>
            <p className="section-label mb-4 sm:mb-6">
              {t({ ua: "Сертифікати", en: "Certifications" })}
            </p>

            {/* Corporate University group */}
            {corpCerts.length > 0 && (
              <div className="flex items-start gap-4 sm:gap-6 mb-6 pb-6 border-b border-border/50">
                <img
                  src={corpLogo}
                  alt="Corporate University Nova Poshta"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded flex-shrink-0 mt-0.5"
                />
                <div className="flex-1 space-y-0">
                  {corpCerts.map((cert, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1.5 sm:py-2 gap-0.5">
                      <p className="font-display text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="font-display text-xs text-muted-foreground sm:ml-4 sm:flex-shrink-0">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lean Institute group */}
            {leanCerts.length > 0 && (
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  src={leanLogo}
                  alt="Lean Institute Ukraine"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0 mt-0.5"
                />
                <div className="flex-1 space-y-0">
                  {leanCerts.map((cert, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1.5 sm:py-2 gap-0.5">
                      <p className="font-display text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="font-display text-xs text-muted-foreground sm:ml-4 sm:flex-shrink-0">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationSection;
