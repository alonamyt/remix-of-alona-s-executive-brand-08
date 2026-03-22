import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();
  const f = translations.footer;

  return (
    <footer className="border-t border-border px-4 sm:px-6 md:px-12 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <p className="font-body text-[10px] sm:text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t({ ua: "Альона Митрофанова", en: "Alona Mytrofanova" })}. {t(f.rights)}
        </p>
        <p className="font-body text-[10px] sm:text-xs text-muted-foreground">
          {t(f.role)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
