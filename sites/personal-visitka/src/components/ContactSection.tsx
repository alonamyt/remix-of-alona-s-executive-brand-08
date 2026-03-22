import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ContactSection = () => {
  const { t } = useLanguage();
  const c = translations.contact;

  return (
    <section id="contact" className="px-4 py-8 sm:px-6 md:px-12 md:py-10 lg:py-14 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn delay={100}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            {t(c.title)}
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="font-body text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-md mx-auto">
            {t(c.text)}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap mb-8 sm:mb-12">
            <a
              href="https://www.linkedin.com/in/%D0%B0%D0%BB%D1%8C%D0%BE%D0%BD%D0%B0-%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D1%84%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-85aa59321"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-foreground border-b-2 border-foreground pb-1 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/share/1CKcB66sMB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground border-b-2 border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/aljona_mit/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground border-b-2 border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-lg mx-auto text-left">
            <div>
              <p className="section-label mb-2 sm:mb-3">{t(c.workContact)}</p>
              <a href="mailto:a.mytrofanova@avrora.ua" className="font-body text-xs sm:text-sm text-accent hover:text-foreground transition-colors block mb-1 break-all">
                a.mytrofanova@avrora.ua
              </a>
              <a href="tel:+380970006104" className="font-body text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                +380 97 000 61 04
              </a>
            </div>
            <div>
              <p className="section-label mb-2 sm:mb-3">{t(c.personalContact)}</p>
              <a href="mailto:mytrofanova.alona@gmail.com" className="font-body text-xs sm:text-sm text-accent hover:text-foreground transition-colors block mb-1 break-all">
                mytrofanova.alona@gmail.com
              </a>
              <a href="tel:+380957588870" className="font-body text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                +380 95 75 888 70
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
