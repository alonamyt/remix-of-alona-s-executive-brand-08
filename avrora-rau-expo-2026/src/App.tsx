import { useEffect, useMemo, useState } from "react";
import logoDark from "./assets/ard-logo-white.png";
import logoLight from "./assets/project/день/Group 23.png";
import auroraLogoDark from "./assets/aurora-white-subtitle.png";
import auroraLogoLight from "./assets/project/день/aurora.png";
import heroVisualNight from "./assets/project/golovna3.png";
import heroVisualDay from "./assets/project/день/golovnad.png";
import trafficVisualNight from "./assets/project/conversion tracking3.png";
import trafficVisualDay from "./assets/project/день/conversion tracking3d.png";
import generatorVisualNight from "./assets/project/Generator control system2.png";
import generatorVisualDay from "./assets/project/день/Generator control systemd.png";
import generatorPlatformExtra from "./assets/project/generator-platform-extra.png";
import lprVisualNight from "./assets/project/Vehicle detection system2.png";
import lprVisualDay from "./assets/project/день/Vehicle detection systemd.png";
import lprPlatformOne from "./assets/project/lpr-platform-1.png";
import lprPlatformTwo from "./assets/project/lpr-platform-2.png";

import smartParkingVisualNight from "./assets/project/smart-parking-night.png";
import smartParkingVisualDay from "./assets/project/smart-parking-day.jpg";
import trafficPlatformMain from "./assets/project/traffic-platform/traffic-platform-main.png";
import trafficPlatformOne from "./assets/project/traffic-platform/traffic-platform-1.png";
import trafficPlatformTwo from "./assets/project/traffic-platform/traffic-platform-2.png";
import trafficPlatformThree from "./assets/project/traffic-platform/traffic-platform-3.png";
import trafficPlatformFour from "./assets/project/traffic-platform/traffic-platform-4.png";

type Language = "ua" | "en";
type ThemeMode = "night" | "day";

type ProductId = "traffic-counter" | "generator-control" | "lpr-access-control" | "smart-parking";

type ProductContent = {
  id: ProductId;
  badge: string;
  title: string;
  summary: string;
  detailLead: string;
  detailBody: string;
  bullets: string[];
  metrics: string[];
  visualAlt: string;
};

type LocaleContent = {
  pageTitle: string;
  pageDescription: string;
  nav: {
    intro: string;
    showcase: string;
    products: string;
  };
  header: {
    language: string;
    theme: string;
    day: string;
    night: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  showcase: {
    title: string;
  };
  productSection: {
    action: string;
    backToShowcase: string;
  };
};

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M2.2 12s3.5-6.2 9.8-6.2S21.8 12 21.8 12s-3.5 6.2-9.8 6.2S2.2 12 2.2 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M14.5 5.5 8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M9.5 5.5 16 12l-6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const sectionOrder = ["intro", "showcase", "traffic-counter", "generator-control", "lpr-access-control", "smart-parking"];
const trafficCounterUrl = "https://traffic-counter.rnd-dev.avrora.lan/";
const trafficPlatformGallery = [
  trafficPlatformTwo,
  trafficPlatformOne,
  trafficPlatformFour,
  trafficPlatformThree,
  trafficPlatformMain,
];
const lprPlatformGallery = [lprPlatformOne, lprPlatformTwo];

const locales: Record<Language, LocaleContent> = {
  ua: {
    pageTitle: "Avrora RAU Expo 2026",
    pageDescription:
      "Expo-версія презентаційного сайту R&D департаменту Аврора для RAU Expo 2026.",
    nav: {
      intro: "Вступ",
      showcase: "Продукти",
      products: "Деталі",
    },
    header: {
      language: "Мова",
      theme: "Тема",
      day: "Денна",
      night: "Нічна",
    },
    hero: {
      badge: "Avrora RAU Expo 2026",
      title: "Створюємо технології для розвитку бізнесу.",
      subtitle: "Системи, що масштабуються. Технології для зростання. Інструменти для щоденної операційної стійкості.",
      primary: "Дивитися продукти",
      secondary: "До 4 рішень",
    },
    showcase: {
      title: "Продукти",
    },
    productSection: {
      action: "До картки продукту",
      backToShowcase: "Повернутись до 4 продуктів",
    },
  },
  en: {
    pageTitle: "Avrora RAU Expo 2026",
    pageDescription: "Expo presentation site for the Avrora R&D department at RAU Expo 2026.",
    nav: {
      intro: "Intro",
      showcase: "Products",
      products: "Details",
    },
    header: {
      language: "Language",
      theme: "Theme",
      day: "Day",
      night: "Night",
    },
    hero: {
      badge: "Avrora RAU Expo 2026",
      title: "We create technology for business growth.",
      subtitle: "Scalable systems. Technology for expansion. Tools for resilient daily operations.",
      primary: "Explore products",
      secondary: "Go to 4 solutions",
    },
    showcase: {
      title: "Products",
    },
    productSection: {
      action: "Back to product card",
      backToShowcase: "Back to 4 products",
    },
  },
};

const productsByLanguage: Record<Language, ProductContent[]> = {
  ua: [
    {
      id: "traffic-counter",
      badge: "01",
      title: "Traffic counter",
      summary:
        "Система підрахунку та аналітики конверсії відвідування та покупок клієнтів на базі відеоаналітики, алгоритмів машинного навчання.",
      detailLead: "Аналітика зовнішнього трафіку та конверсії у відвідування і покупки.",
      detailBody:
        "Рішення допомагає оцінювати вплив реклами, локації та пішохідних потоків на реальні бізнес-результати. Дає керовану картину воронки від зовнішнього контакту до покупки.",
      bullets: [
        "Вимірює зовнішній трафік і реальну конверсію точки",
        "Підсилює маркетингові рішення даними, а не припущеннями",
        "Допомагає знижувати неефективні витрати",
      ],
      metrics: ["Video analytics", "Machine learning", "Conversion visibility"],
      visualAlt: "Traffic counter visual",
    },
    {
      id: "generator-control",
      badge: "02",
      title: "Система контролю генераторів",
      summary:
        "Система моніторінгу стану генераторів, що веде облік мотогодин, планування ТО, відслідковує роботу обладнання в реальному часі.",
      detailLead: "Контроль енергостійкості та надійності мережі в одному контурі.",
      detailBody:
        "Система дає команді актуальний стан обладнання, історію напрацювання та основу для сервісного планування. Це знижує ризики простоїв і допомагає керувати критичною інфраструктурою прозоро.",
      bullets: [
        "Моніторинг стану генераторів у реальному часі",
        "Знизити неефективні затрати ресурсу керівників торгових точок на моніторинг і заповнення таблиць",
        "Прибрати людський фактор помилок при ручному заповненні, визначенні типів робіт і своєчасній подачі заявок на ТО",
        "Облік мотогодин і планування технічного обслуговування",
        "Зменшення ризику простоїв торгових точок",
        "Можливість оперативно перекидати незадіяні генератори за потребою",
        "Економія витрат на непотрібні ТО при прозорому моніторингу мотогодин",
      ],
      metrics: ["Real-time monitoring", "Maintenance planning", "Resilience"],
      visualAlt: "Generator control visual",
    },
    {
      id: "lpr-access-control",
      badge: "03",
      title: "LPR & Access Control",
      summary:
        "Система розпізнавання номерів, автоматичного допуску та управління КПП, логістичними потоками й в'їздом на територію.",
      detailLead: "Автоматичний контроль транспорту, шлагбаумів і черговості доступу.",
      detailBody:
        "Рішення виявляє транспорт, розпізнає номерні знаки та допомагає керувати КПП, паркінгами й рампами завантаження. Підходить для об'єктів із високим потоком транспорту та підвищеними вимогами до безпеки.",
      bullets: [
        "Безпека території двору",
        "Розпізнавання номерних знаків і детекція автомобілів",
        "Автоматизація в'їзду, виїзду та логістичного доступу",
        "Оптимізація трафіку та черговості обслуговування",
        "Дозволяє не обмежуватись у виборі охорони за віком чи статтю за рахунок автоматизації та спрощення процесів",
        "Дозволяє охороні не працювати з роздрукованими листами зі списком дозволених до в'їзду авто від логістів",
        "Дозволяє за умовами праці не залежити від погодних умов: дощу чи снігу",
      ],
      metrics: ["LPR", "Barrier control", "24/7 access logic"],
      visualAlt: "LPR and access control visual",
    },
    {
      id: "smart-parking",
      badge: "04",
      title: "Smart Parking",
      summary:
        "Система контролю парковок та аналітики завантаженості. Поки що залишаємо місце для вашої картинки та подальшого наповнення.",
      detailLead: "Шаблон продуктового блоку для демонстрації parking-рішення на expo.",
      detailBody:
        "Блок уже готовий для презентації: є картка, окрема секція, CTA та візуальний placeholder. Коли додасте фінальну картинку й точні тези, сюди легко інтегруємо повний опис без перебудови макета.",
      bullets: [
        "Аналітика зайнятості та сценарії керування парковкою",
        "Місце під фото, кейс або дашборд продукту",
        "Готова секція під подальше заповнення контентом",
      ],
      metrics: ["Placeholder ready", "Touch-first", "Expo template"],
      visualAlt: "Smart parking placeholder visual",
    },
  ],
  en: [
    {
      id: "traffic-counter",
      badge: "01",
      title: "Traffic counter",
      summary:
        "A traffic counting and conversion analytics system for visits and purchases based on video analytics and machine learning algorithms.",
      detailLead: "Analytics for external traffic and conversion into visits and purchases.",
      detailBody:
        "The solution helps evaluate how advertising, location, and footfall influence real business outcomes. It creates a controllable funnel view from first contact to purchase.",
      bullets: [
        "Measures external traffic and real store conversion",
        "Supports marketing decisions with data instead of guesswork",
        "Helps reduce inefficient spending",
      ],
      metrics: ["Video analytics", "Machine learning", "Conversion visibility"],
      visualAlt: "Traffic counter visual",
    },
    {
      id: "generator-control",
      badge: "02",
      title: "Generator control system",
      summary:
        "A monitoring system for generator condition, engine-hour tracking, maintenance planning, and real-time equipment visibility.",
      detailLead: "One control loop for energy resilience and network reliability.",
      detailBody:
        "The system gives teams live equipment status, usage history, and a foundation for service planning. It reduces downtime risk and brings transparency to critical infrastructure.",
      bullets: [
        "Real-time generator monitoring",
        "Engine-hour tracking and maintenance planning",
        "Lower risk of store downtime",
      ],
      metrics: ["Real-time monitoring", "Maintenance planning", "Resilience"],
      visualAlt: "Generator control visual",
    },
    {
      id: "lpr-access-control",
      badge: "03",
      title: "LPR & Access Control",
      summary:
        "A license plate recognition, automated entry, and checkpoint management system for logistics flows and territory access.",
      detailLead: "Automated control of vehicles, barriers, and access priority.",
      detailBody:
        "The solution detects vehicles, recognizes license plates, and helps manage checkpoints, parking areas, and loading ramps. It fits sites with heavy vehicle flow and higher security requirements.",
      bullets: [
        "License plate recognition and vehicle detection",
        "Automated entry, exit, and logistics access",
        "Traffic optimization and service queue control",
      ],
      metrics: ["LPR", "Barrier control", "24/7 access logic"],
      visualAlt: "LPR and access control visual",
    },
    {
      id: "smart-parking",
      badge: "04",
      title: "Smart Parking",
      summary:
        "Parking control and occupancy analytics system. For now, this block keeps a placeholder for your final image and expanded content.",
      detailLead: "A ready-made product section template for the parking solution at the expo.",
      detailBody:
        "The block is already presentation-ready: card, dedicated section, CTA, and visual placeholder are in place. Once you add the final image and precise messaging, we can extend it without rebuilding the layout.",
      bullets: [
        "Occupancy analytics and parking management scenarios",
        "Space for a final photo, case, or dashboard",
        "Ready section for future content fill-in",
      ],
      metrics: ["Placeholder ready", "Touch-first", "Expo template"],
      visualAlt: "Smart parking placeholder visual",
    },
  ],
};

productsByLanguage.ua[0] = {
  ...productsByLanguage.ua[0],
  summary:
    "Система підрахунку та аналітики конверсії відвідування та покупок клієнтів на базі відеоаналітики, алгоритмів машинного навчання.",
  detailLead:
    "Інструмент працює на базі розумних камер і дозволяє в режимі реального часу аналізувати шлях покупця: від моменту, коли людина звертає увагу на магазин, до здійснення покупки на касі.",
  detailBody:
    "Платформа також аналізує середній чек, його глибину, активні години та варіативність трафіку, підсвічує патерни й переводить години буденної роботи аналітика зі зведення даних у ціннісне використання ресурсу на прийняття рішень з покращень.",
  bullets: [
    "Платформа змінює підхід від ручного точкового аналізу до системного та дає можливість вивчати й управляти потоком клієнтів, спираючись на точні цифри.",
    "Знизити неефективні витрати на аутсорс: 240 люд./год (30 тис. грн) на місяць і 2880 люд./год (360 тис. грн) на рік. Також години буденної роботи аналітика зі зведення даних замінити на ціннісне використання ресурсу на прийняття рішень з покращень.",
    "Можливість бачити реальну загальну картину трафіку і конверсії та заглибитись у кожен регіон, магазин і годину роботи.",
    "Інструмент для оцінки ефективності як окремого магазину, так і типу магазинів у порівнянні один до одного, з аналізом динаміки.",
    "Інструмент виміру впливу реклами, маркетингових активностей на реальну конверсію.",
    "Швидке виявлення торгових точок з низькою конверсією, збільшення продажів за рахунок покращення локацій і конверсії.",
  ],
  metrics: ["Video analytics", "Machine learning", "Traffic insights"],
};

function ExpoVisual({ theme }: { theme: ThemeMode }) {
  return (
    <div className={`expo-visual expo-visual-${theme}`} aria-hidden="true">
      <div className="expo-visual-grid" />
      <div className="expo-visual-orb expo-visual-orb-a" />
      <div className="expo-visual-orb expo-visual-orb-b" />
      <div className="expo-visual-ring expo-visual-ring-a" />
      <div className="expo-visual-ring expo-visual-ring-b" />
      <img className="expo-visual-image" src={theme === "night" ? heroVisualNight : heroVisualDay} alt="" />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("ua");
  const [theme, setTheme] = useState<ThemeMode>("night");
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [trafficGalleryIndex, setTrafficGalleryIndex] = useState(0);
  const [lprGalleryIndex, setLprGalleryIndex] = useState(0);
  const [activeLightboxGallery, setActiveLightboxGallery] = useState<ProductId | null>(null);

  const copy = locales[language];
  const products = productsByLanguage[language];
  const visitorLabel = language === "ua" ? "Переглядів сайту" : "Site views";

  const productVisuals = useMemo(
    () => ({
      "traffic-counter": theme === "night" ? trafficVisualNight : trafficVisualDay,
      "generator-control": theme === "night" ? generatorVisualNight : generatorVisualDay,
      "lpr-access-control": theme === "night" ? lprVisualNight : lprVisualDay,
      "smart-parking": theme === "night" ? smartParkingVisualNight : smartParkingVisualDay,
    }),
    [theme],
  );

  const activeTrafficGalleryImage = trafficPlatformGallery[trafficGalleryIndex] ?? trafficPlatformGallery[0];
  const activeLprGalleryImage = lprPlatformGallery[lprGalleryIndex] ?? lprPlatformGallery[0];
  const activeLightboxImages =
    activeLightboxGallery === "traffic-counter"
      ? trafficPlatformGallery
      : activeLightboxGallery === "lpr-access-control"
        ? lprPlatformGallery
        : [];
  const activeLightboxIndex =
    activeLightboxGallery === "traffic-counter"
      ? trafficGalleryIndex
      : activeLightboxGallery === "lpr-access-control"
        ? lprGalleryIndex
        : 0;
  const activeLightboxImage = activeLightboxImages[activeLightboxIndex] ?? activeLightboxImages[0] ?? "";
  const showPreviousTrafficGalleryImage = () =>
    setTrafficGalleryIndex((current) => (current === 0 ? trafficPlatformGallery.length - 1 : current - 1));
  const showNextTrafficGalleryImage = () =>
    setTrafficGalleryIndex((current) => (current === trafficPlatformGallery.length - 1 ? 0 : current + 1));
  const showPreviousLprGalleryImage = () =>
    setLprGalleryIndex((current) => (current === 0 ? lprPlatformGallery.length - 1 : current - 1));
  const showNextLprGalleryImage = () =>
    setLprGalleryIndex((current) => (current === lprPlatformGallery.length - 1 ? 0 : current + 1));
  const showPreviousLightboxImage = () => {
    if (activeLightboxGallery === "traffic-counter") {
      showPreviousTrafficGalleryImage();
    }
    if (activeLightboxGallery === "lpr-access-control") {
      showPreviousLprGalleryImage();
    }
  };
  const showNextLightboxImage = () => {
    if (activeLightboxGallery === "traffic-counter") {
      showNextTrafficGalleryImage();
    }
    if (activeLightboxGallery === "lpr-access-control") {
      showNextLprGalleryImage();
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === "ua" ? "uk" : "en";
    document.title = copy.pageTitle;
    document.body.dataset.theme = theme;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.pageDescription);
    }
  }, [copy.pageDescription, copy.pageTitle, language, theme]);

  useEffect(() => {
    let isCancelled = false;

    const incrementVisitors = async () => {
      try {
        const response = await fetch("https://api.countapi.xyz/hit/avrora-rau-expo-2026/visits");
        if (!response.ok) {
          throw new Error("Counter request failed");
        }

        const data = (await response.json()) as { value?: number };
        if (!isCancelled) {
          setVisitorCount(typeof data.value === "number" ? data.value : null);
        }
      } catch {
        if (!isCancelled) {
          setVisitorCount(null);
        }
      }
    };

    incrementVisitors();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (activeLightboxGallery) {
        if (event.key === "Escape") {
          event.preventDefault();
          setActiveLightboxGallery(null);
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPreviousLightboxImage();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          showNextLightboxImage();
        }

        return;
      }

      const currentIndex = sectionOrder.findIndex((id) => `#${id}` === window.location.hash);
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        const nextId = sectionOrder[Math.min(safeIndex + 1, sectionOrder.length - 1)];
        document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        const nextId = sectionOrder[Math.max(safeIndex - 1, 0)];
        document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.key === "Home") {
        event.preventDefault();
        document.getElementById("intro")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.key >= "1" && event.key <= "4") {
        const product = products[Number(event.key) - 1];
        if (product) {
          event.preventDefault();
          document.getElementById(product.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeLightboxGallery, products]);

  const topLogo = theme === "night" ? logoDark : logoLight;
  const topAuroraLogo = theme === "night" ? auroraLogoDark : auroraLogoLight;

  return (
    <div className="page-shell" data-theme={theme}>
      <header className="topbar">
        <a className="brandmark" href="#intro" aria-label="Avrora RAU Expo 2026">
          <img className="brandmark-aurora" src={topAuroraLogo} alt="Avrora" />
          <img className="brandmark-rd" src={topLogo} alt="R&D" />
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#intro">{copy.nav.intro}</a>
          <a href="#showcase">{copy.nav.showcase}</a>
          <a href="#traffic-counter">{copy.nav.products}</a>
        </nav>

        <div className="topbar-actions">
          <div className="theme-switch" aria-label={copy.header.theme}>
            <button
              type="button"
              className={theme === "night" ? "theme-chip is-active" : "theme-chip"}
              onClick={() => setTheme("night")}
            >
              {copy.header.night}
            </button>
            <button
              type="button"
              className={theme === "day" ? "theme-chip is-active" : "theme-chip"}
              onClick={() => setTheme("day")}
            >
              {copy.header.day}
            </button>
          </div>

          <div className="language-switch" aria-label={copy.header.language}>
            <button
              type="button"
              className={language === "ua" ? "language-chip is-active" : "language-chip"}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
            <button
              type="button"
              className={language === "en" ? "language-chip is-active" : "language-chip"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="expo-main">
        <section className="slide hero-slide" id="intro">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.badge}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero-subtitle">{copy.hero.subtitle}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#showcase">
                {copy.hero.primary}
              </a>
              <a className="button button-secondary" href="#traffic-counter">
                {copy.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hero-visual-panel">
            <ExpoVisual theme={theme} />
          </div>
        </section>

        <section className="slide showcase-slide" id="showcase">
          <div className="section-heading">
            <h2>{copy.showcase.title}</h2>
          </div>

          <div className="showcase-button-grid" aria-label={copy.showcase.title}>
            {products.map((product) => (
              <a key={product.id} className="showcase-button-card" href={`#${product.id}`}>
                <div className="showcase-button-copy">
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                </div>

                <div className="showcase-button-visual">
                  <img src={productVisuals[product.id]} alt={product.visualAlt} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {products.map((product) => (
          <section key={product.id} className="slide detail-slide" id={product.id}>
            <div className="detail-topline">
              <a className="inline-back-link" href="#showcase">
                {copy.productSection.backToShowcase}
              </a>
            </div>

            <div className={`detail-layout${product.id === "lpr-access-control" ? " detail-layout-top-aligned" : ""}`}>
              <div className={`detail-copy${product.id === "lpr-access-control" ? " detail-copy-top-aligned" : ""}`}>
                <h2>{product.title}</h2>
                <p className="detail-lead">{product.summary}</p>
                <p>{product.detailLead}</p>
                <p>{product.detailBody}</p>

                {product.id === "traffic-counter" ? (
                  <p className="detail-benefits-label">Traffic Counter для бізнесу:</p>
                ) : null}
                {product.id === "generator-control" ? (
                  <p className="detail-benefits-label">Система контролю генераторів для бізнесу:</p>
                ) : null}
                {product.id === "lpr-access-control" ? (
                  <p className="detail-benefits-label">LPR &amp; Access Control для бізнесу:</p>
                ) : null}

                <ul className="detail-list">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="metric-row">
                  {product.metrics.map((metric) => (
                    <span key={metric} className="metric-chip">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="detail-actions">
                  {product.id === "traffic-counter" ? (
                    <a
                      className="button button-primary"
                      href={trafficCounterUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Перейти на сайт платформи
                    </a>
                  ) : null}

                  <a className="button button-secondary" href="#showcase">
                    {copy.productSection.action}
                  </a>
                </div>
              </div>

              <div className="detail-visual-frame">
                {product.id === "traffic-counter" ? (
                  <div className="traffic-platform-showcase">
                    <img
                      className="detail-image"
                      src={productVisuals[product.id]}
                      alt={product.visualAlt}
                    />

                    <div className="traffic-platform-carousel" aria-label="Traffic Counter platform screenshots">
                      <div className="traffic-platform-carousel-topline">
                        <span className="traffic-platform-label">Платформа Traffic Counter</span>
                        <a
                          className="traffic-platform-link"
                          href={trafficCounterUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Відкрити сайт
                        </a>
                      </div>

                      <div className="traffic-platform-carousel-frame">
                        <button
                          type="button"
                          className="traffic-carousel-arrow traffic-carousel-arrow-left"
                          aria-label="Попередній скрін"
                          onClick={showPreviousTrafficGalleryImage}
                        >
                          <ChevronLeftIcon />
                        </button>

                        <button
                          type="button"
                          className="traffic-platform-image-button"
                          aria-label={`Відкрити скрін ${trafficGalleryIndex + 1} у великому розмірі`}
                          onClick={() => setActiveLightboxGallery("traffic-counter")}
                        >
                          <img
                            className="traffic-platform-carousel-image"
                            src={activeTrafficGalleryImage}
                            alt={`Traffic Counter platform screen ${trafficGalleryIndex + 1}`}
                          />
                        </button>

                        <button
                          type="button"
                          className="traffic-carousel-arrow traffic-carousel-arrow-right"
                          aria-label="Наступний скрін"
                          onClick={showNextTrafficGalleryImage}
                        >
                          <ChevronRightIcon />
                        </button>
                      </div>

                      <div className="traffic-platform-dots" aria-label="Слайди платформи">
                        {trafficPlatformGallery.map((imageSrc, index) => (
                          <button
                            key={imageSrc}
                            type="button"
                            className={`traffic-platform-dot${index === trafficGalleryIndex ? " is-active" : ""}`}
                            aria-label={`Показати скрін ${index + 1}`}
                            onClick={() => setTrafficGalleryIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : product.id === "generator-control" ? (
                  <div className="generator-platform-showcase">
                    <img
                      className="detail-image"
                      src={productVisuals[product.id]}
                      alt={product.visualAlt}
                    />

                    <div className="generator-platform-extra">
                      <span className="generator-platform-label">Платформа контролю генераторів</span>
                      <img
                        className="generator-platform-extra-image"
                        src={generatorPlatformExtra}
                        alt="Додатковий екран платформи контролю генераторів"
                      />
                    </div>
                  </div>
                ) : product.id === "lpr-access-control" ? (
                  <div className="traffic-platform-showcase">
                    <img
                      className="detail-image"
                      src={productVisuals[product.id]}
                      alt={product.visualAlt}
                    />

                    <div className="traffic-platform-carousel" aria-label="LPR platform screenshots">
                      <div className="traffic-platform-carousel-topline">
                        <span className="traffic-platform-label">LPR & Access Control platform</span>
                      </div>

                      <div className="traffic-platform-carousel-frame">
                        <button
                          type="button"
                          className="traffic-carousel-arrow traffic-carousel-arrow-left"
                          aria-label="Попередній скрін"
                          onClick={showPreviousLprGalleryImage}
                        >
                          <ChevronLeftIcon />
                        </button>

                        <button
                          type="button"
                          className="traffic-platform-image-button"
                          aria-label={`Відкрити LPR скрін ${lprGalleryIndex + 1} у великому розмірі`}
                          onClick={() => setActiveLightboxGallery("lpr-access-control")}
                        >
                          <img
                            className="traffic-platform-carousel-image"
                            src={activeLprGalleryImage}
                            alt={`LPR platform screen ${lprGalleryIndex + 1}`}
                          />
                        </button>

                        <button
                          type="button"
                          className="traffic-carousel-arrow traffic-carousel-arrow-right"
                          aria-label="Наступний скрін"
                          onClick={showNextLprGalleryImage}
                        >
                          <ChevronRightIcon />
                        </button>
                      </div>

                      <div className="traffic-platform-dots" aria-label="Слайди LPR платформи">
                        {lprPlatformGallery.map((imageSrc, index) => (
                          <button
                            key={imageSrc}
                            type="button"
                            className={`traffic-platform-dot${index === lprGalleryIndex ? " is-active" : ""}`}
                            aria-label={`Показати LPR скрін ${index + 1}`}
                            onClick={() => setLprGalleryIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    className="detail-image"
                    src={productVisuals[product.id]}
                    alt={product.visualAlt}
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </main>

      {activeLightboxGallery ? (
        <div
          className="traffic-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Platform gallery"
          onClick={() => setActiveLightboxGallery(null)}
        >
          <div className="traffic-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="traffic-lightbox-close"
              aria-label="Закрити галерею"
              onClick={() => setActiveLightboxGallery(null)}
            >
              ×
            </button>

            <button
              type="button"
              className="traffic-carousel-arrow traffic-carousel-arrow-left traffic-lightbox-arrow"
              aria-label="Попередній скрін"
              onClick={showPreviousLightboxImage}
            >
              <ChevronLeftIcon />
            </button>

            <img
              className="traffic-lightbox-image"
              src={activeLightboxImage}
              alt={`Platform screen ${activeLightboxIndex + 1}`}
            />

            <button
              type="button"
              className="traffic-carousel-arrow traffic-carousel-arrow-right traffic-lightbox-arrow"
              aria-label="Наступний скрін"
              onClick={showNextLightboxImage}
            >
              <ChevronRightIcon />
            </button>

            <div className="traffic-platform-dots traffic-lightbox-dots" aria-label="Слайди платформи">
              {activeLightboxImages.map((imageSrc, index) => (
                <button
                  key={`lightbox-${imageSrc}`}
                  type="button"
                  className={`traffic-platform-dot${index === activeLightboxIndex ? " is-active" : ""}`}
                  aria-label={`Показати скрін ${index + 1}`}
                  onClick={() => {
                    if (activeLightboxGallery === "traffic-counter") {
                      setTrafficGalleryIndex(index);
                    }
                    if (activeLightboxGallery === "lpr-access-control") {
                      setLprGalleryIndex(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <footer className="view-counter" aria-label={visitorLabel}>
        <span className="view-counter-icon" aria-hidden="true">
          <EyeIcon />
        </span>
        <span className="view-counter-label">{visitorLabel}</span>
        <strong className="view-counter-value">{visitorCount === null ? "..." : visitorCount.toLocaleString()}</strong>
      </footer>
    </div>
  );
}

