import { useState } from "react";
import logo from "./assets/ard-logo.png";
import auroraLogo from "./assets/aurora.png";
import voinalovychPhoto from "./assets/войналович.jpg";

type Language = "ua" | "en";

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  skills: string;
  image?: string;
};

type LocaleContent = {
  nav: { projects: string; team: string; story: string; contact: string };
  labels: {
    department: string;
    language: string;
    projectsPhoto: string;
    eventPhoto: string;
    storyVisual: string;
    heroVisual: string;
    teamPlaceholder: string;
    phone: string;
    email: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    stats: Array<{ value: string; label: string }>;
  };
  projectsIntro: { title: string; text: string };
  projects: Array<{ title: string; description: string; metric: string; metricLabel: string }>;
  teamIntro: { title: string; text: string };
  team: TeamMember[];
  storyIntro: {
    title: string;
    text: string;
    paragraphs: string[];
  };
  milestones: Array<{ year: string; title: string; text: string }>;
  productHighlights: Array<{ value: string; label: string }>;
  productSection: {
    feltByEveryone: string;
    productList: string;
    productListText: string;
    lines: string[];
  };
  community: {
    title: string;
    text: string;
    events: Array<{ title: string; text: string }>;
  };
  contact: {
    title: string;
    text: string;
    cards: Array<{ label: string; value: string; href: string; hint: string }>;
  };
};

const content: Record<Language, LocaleContent> = {
  ua: {
    nav: { projects: "Проєкти", team: "Команда", story: "Історія", contact: "Контакти" },
    labels: {
      department: "Department",
      language: "Мова",
      projectsPhoto: "Місце для фото проєкту",
      eventPhoto: "Місце для фото події",
      storyVisual: "Ілюстрація ключових кроків по роках",
      heroVisual: "Місце для головного фото",
      teamPlaceholder: "Фото",
      phone: "Телефон",
      email: "Пошта",
    },
    hero: {
      eyebrow: "Давай знайомитись",
      title: "Створюємо щасливе майбутнє через продукти",
      text: "Ми створюємо рішення, які поєднують турботу про людей, сервісну якість і відчутний результат для компанії.",
      primary: "Дивитися проєкти",
      secondary: "Зв'язатися",
      stats: [
        { value: "03", label: "ядра напряму" },
        { value: "24/7", label: "ритм сервісу" },
        { value: "100%", label: "фокус на цінності" },
      ],
    },
    projectsIntro: {
      title: "Проєкти",
      text: "Ми створюємо продукти, що роблять життя кожного легше, зручніше і щасливіше.",
    },
    projects: [
      {
        title: "Назва проєкту",
        description: "Опис проєкту. Ми створюємо продукти, що роблять життя кожного легше, зручніше, щасливіше.",
        metric: "42%",
        metricLabel: "швидше до результату",
      },
      {
        title: "Назва проєкту",
        description: "Опис проєкту. Рішення спрощує щоденні процеси, прибирає зайві кроки та додає сервісу людяності.",
        metric: "120K",
        metricLabel: "користувачів потенційно",
      },
      {
        title: "Назва проєкту",
        description: "Опис проєкту. Інструмент, який поєднує технології, турботу про клієнта та відчутний бізнес-ефект.",
        metric: "18",
        metricLabel: "місяців до окупності",
      },
    ],
    teamIntro: {
      title: "Команда, що створює магію",
      text: "Люди, які формують продуктовий підхід, сервісне мислення і нові можливості для компанії.",
    },
    team: [
      {
        name: "Олександр Войналович",
        role: "R&D директор",
        focus: "Департамент інновацій та проєктного управління",
        skills: "Стратегія, продукти, розвиток",
        image: voinalovychPhoto,
      },
      {
        name: "Прізвище, ім'я",
        role: "Посада",
        focus: "Напрямок",
        skills: "Скіли",
      },
      {
        name: "Прізвище, ім'я",
        role: "Посада",
        focus: "Напрямок",
        skills: "Скіли",
      },
    ],
    storyIntro: {
      title: "Історія створення і успіху",
      text: "Від старту департаменту до продуктів, які щодня відчувають на собі співробітники та клієнти.",
      paragraphs: [
        "Департамент R&D почався з ідеї створювати рішення, які не просто закривають задачі, а формують сильніший досвід для людей і сильніше майбутнє для компанії.",
        "З роками це переросло в системну продуктову роботу: від перших запусків до портфеля рішень, що впливають на сервіс, процеси, внутрішню ефективність і щоденну взаємодію з клієнтом.",
      ],
    },
    milestones: [
      {
        year: "Серпень 2019",
        title: "Створення департаменту R&D",
        text: "Старт. Формується окрема команда, яка починає системно перетворювати внутрішні запити бізнесу на продуктові рішення.",
      },
      {
        year: "2021",
        title: "Перші масштабовані сервіси",
        text: "З'являються рішення, які виходять за межі локальних ініціатив і починають впливати на щоденну роботу великої кількості людей.",
      },
      {
        year: "2023",
        title: "Портфель продуктів",
        text: "Команда мислить уже не окремими задачами, а продуктовим портфелем, сценаріями користувача та цінністю для компанії.",
      },
      {
        year: "2025",
        title: "Масштаб і вплив",
        text: "Продукти стають частиною щоденного досвіду співробітників і клієнтів та дають відчутний результат у масштабі компанії.",
      },
      {
        year: "Зараз",
        title: "Новий цикл розвитку",
        text: "Департамент будує нову хвилю продуктів, що ще сильніше впливатимуть на сервіс, процеси й досвід людей.",
      },
    ],
    productHighlights: [
      { value: "12+", label: "всього створено і запущено продуктів" },
      { value: "Перший", label: "найперший продукт" },
      { value: "Флагман", label: "наймасштабніший продукт" },
    ],
    productSection: {
      feltByEveryone: "Продукти, які відчуває кожна людина",
      productList: "Перелік продуктів",
      productListText:
        "Тут може бути перелік ключових продуктів департаменту: внутрішні сервіси, рішення для співробітників, клієнтські продукти, інструменти автоматизації та масштабування досвіду.",
      lines: [
        "Продукт, який відчуває на собі кожен співробітник.",
        "Продукт, який змінює шлях клієнта у сервісі.",
        "Продукт, який прибирає зайві кроки в щоденних процесах.",
        "Продукт, який масштабує досвід на всю компанію.",
      ],
    },
    community: {
      title: "Публічність та спільнота",
      text: "Участь у профільних конференціях та розвиток експертного середовища.",
      events: [
        {
          title: "Назва події",
          text: "Короткий опис. Участь у професійній конференції, де команда ділиться підходами, інсайтами та реальними кейсами створення продуктів.",
        },
        {
          title: "Назва події",
          text: "Короткий опис. Виступ або панельна дискусія про розвиток експертного середовища, продуктовий підхід і масштабування корисних рішень.",
        },
        {
          title: "Назва події",
          text: "Короткий опис. Подія для обміну знаннями, де команда формує професійну спільноту та розширює коло однодумців.",
        },
      ],
    },
    contact: {
      title: "Контакти",
      text: "Телефони та пошта для швидкого зв'язку з командою.",
      cards: [
        {
          label: "Телефон",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "Основний контакт департаменту",
        },
        {
          label: "Пошта",
          value: "name@avrora.ua",
          href: "mailto:name@avrora.ua",
          hint: "Для загальних звернень",
        },
        {
          label: "Телефон",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "Швидкий зв'язок по проєктах",
        },
        {
          label: "Пошта",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "Для командної взаємодії",
        },
      ],
    },
  },
  en: {
    nav: { projects: "Projects", team: "Team", story: "Story", contact: "Contacts" },
    labels: {
      department: "Department",
      language: "Language",
      projectsPhoto: "Project photo area",
      eventPhoto: "Event photo area",
      storyVisual: "Timeline illustration",
      heroVisual: "Hero image area",
      teamPlaceholder: "Photo",
      phone: "Phone",
      email: "Email",
    },
    hero: {
      eyebrow: "Let's get acquainted",
      title: "Creating a happier future through products",
      text: "We build solutions that combine care for people, service quality, and visible impact for the company.",
      primary: "See projects",
      secondary: "Get in touch",
      stats: [
        { value: "03", label: "core streams" },
        { value: "24/7", label: "service rhythm" },
        { value: "100%", label: "focus on value" },
      ],
    },
    projectsIntro: {
      title: "Projects",
      text: "We create products that make everyday life easier, more convenient, and happier.",
    },
    projects: [
      {
        title: "Project name",
        description: "Project description. We create products that make everyday life easier, more convenient, and happier.",
        metric: "42%",
        metricLabel: "faster to result",
      },
      {
        title: "Project name",
        description: "Project description. The solution simplifies daily processes, removes extra steps, and adds more humanity to service.",
        metric: "120K",
        metricLabel: "potential users",
      },
      {
        title: "Project name",
        description: "Project description. A tool that combines technology, care for the client, and visible business effect.",
        metric: "18",
        metricLabel: "months to payback",
      },
    ],
    teamIntro: {
      title: "The team creating the magic",
      text: "People shaping product thinking, service mindset, and new opportunities for the company.",
    },
    team: [
      {
        name: "Oleksandr Voinalovych",
        role: "R&D Director",
        focus: "Innovation and Project Management Department",
        skills: "Strategy, products, growth",
        image: voinalovychPhoto,
      },
      { name: "Surname, name", role: "Role", focus: "Direction", skills: "Skills" },
      { name: "Surname, name", role: "Role", focus: "Direction", skills: "Skills" },
    ],
    storyIntro: {
      title: "Creation and success story",
      text: "From the department launch to products felt daily by employees and customers.",
      paragraphs: [
        "The R&D department started with an idea to create solutions that do more than close tasks. They shape a stronger experience for people and a stronger future for the company.",
        "Over the years, this became systematic product work: from the first launches to a portfolio of solutions that influence service, processes, internal efficiency, and customer interaction.",
      ],
    },
    milestones: [
      {
        year: "August 2019",
        title: "R&D department creation",
        text: "Start. A dedicated team is formed to systematically turn internal business requests into product solutions.",
      },
      {
        year: "2021",
        title: "First scalable services",
        text: "Solutions appear that go beyond local initiatives and begin to affect daily work for large groups of people.",
      },
      {
        year: "2023",
        title: "Product portfolio",
        text: "The team starts thinking in terms of a product portfolio, user scenarios, and company value instead of isolated tasks.",
      },
      {
        year: "2025",
        title: "Scale and impact",
        text: "Products become part of the daily experience of employees and customers and deliver visible results at company scale.",
      },
      {
        year: "Now",
        title: "New growth cycle",
        text: "The department is building a new wave of products that will influence service, processes, and people's experience even more strongly.",
      },
    ],
    productHighlights: [
      { value: "12+", label: "products created and launched" },
      { value: "First", label: "earliest product" },
      { value: "Flagship", label: "largest-scale product" },
    ],
    productSection: {
      feltByEveryone: "Products felt by everyone",
      productList: "Product portfolio",
      productListText:
        "This block can list the department's key products: internal services, employee tools, customer-facing products, automation tools, and experience-scaling solutions.",
      lines: [
        "A product every employee can feel.",
        "A product that changes the customer journey.",
        "A product that removes extra steps from daily processes.",
        "A product that scales experience across the company.",
      ],
    },
    community: {
      title: "Public presence and community",
      text: "Participation in industry conferences and growth of the expert community.",
      events: [
        {
          title: "Event title",
          text: "Short description. Participation in a professional conference where the team shares approaches, insights, and real product creation cases.",
        },
        {
          title: "Event title",
          text: "Short description. A talk or panel discussion about expert community growth, product mindset, and scaling useful solutions.",
        },
        {
          title: "Event title",
          text: "Short description. An event for knowledge exchange where the team builds a professional community and broadens its network.",
        },
      ],
    },
    contact: {
      title: "Contacts",
      text: "Phone numbers and email for quick contact with the team.",
      cards: [
        {
          label: "Phone",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "Main department contact",
        },
        {
          label: "Email",
          value: "name@avrora.ua",
          href: "mailto:name@avrora.ua",
          hint: "For general requests",
        },
        {
          label: "Phone",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "Fast project communication",
        },
        {
          label: "Email",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "For team interaction",
        },
      ],
    },
  },
};

function PhotoPlaceholder({
  label,
  circle = false,
  src,
  alt,
}: {
  label: string;
  circle?: boolean;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`photo-placeholder${circle ? " photo-placeholder-circle" : ""}${src ? " photo-placeholder-filled" : ""}`}>
      {src ? (
        <img src={src} alt={alt ?? label} className="photo-placeholder-image" />
      ) : (
        <div className="photo-placeholder-inner">
          <span className="photo-placeholder-label">{label}</span>
        </div>
      )}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("ua");
  const t = content[language];

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brandmarks">
          <a href="#hero" className="brandmark brandmark-aurora" aria-label="Avrora">
            <img src={auroraLogo} alt="Avrora" className="brandmark-aurora-image" />
          </a>

          <a href="#hero" className="brandmark">
            <span
              className="brandmark-dept-logo"
              aria-hidden="true"
              style={{ WebkitMaskImage: `url(${logo})`, maskImage: `url(${logo})` }}
            />
            <span>{t.labels.department}</span>
          </a>
        </div>

        <div className="topbar-actions">
          <nav className="nav">
            <a href="#projects">{t.nav.projects}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#story">{t.nav.story}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="language-switch" aria-label={t.labels.language}>
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

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
          </div>

          <div className="hero-visual">
            <PhotoPlaceholder label={t.labels.heroVisual} />
          </div>

          <div className="hero-bottom">
            <p className="hero-text">{t.hero.text}</p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">{t.hero.primary}</a>
              <a href="#contact" className="button button-secondary">{t.hero.secondary}</a>
            </div>

            <div className="hero-stats">
              {t.hero.stats.map((item) => (
                <div className="hero-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-projects" id="projects">
          <div className="section-heading">
            <h2>{t.projectsIntro.title}</h2>
            <p>{t.projectsIntro.text}</p>
          </div>

          <div className="project-list">
            {t.projects.map((project, index) => (
              <article className="project-card" key={index}>
                <div className="project-image">
                  <PhotoPlaceholder label={t.labels.projectsPhoto} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="metric-box">
                    <strong>{project.metric}</strong>
                    <span>{project.metricLabel}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="team">
          <div className="section-heading section-heading-wide">
            <h2 className="nowrap-title">{t.teamIntro.title}</h2>
            <p>{t.teamIntro.text}</p>
          </div>

          <div className="team-grid">
            {t.team.map((member, index) => (
              <article className="team-card" key={index}>
                <PhotoPlaceholder
                  label={t.labels.teamPlaceholder}
                  circle
                  src={member.image}
                  alt={member.name}
                />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-focus">{member.focus}</p>
                <span className="team-skills">{member.skills}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section story-section" id="story">
          <div className="section-heading section-heading-wide">
            <h2>{t.storyIntro.title}</h2>
            <p>{t.storyIntro.text}</p>
          </div>

          <div className="story-intro">
            <div className="story-copy">
              {t.storyIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="story-visual">
              <PhotoPlaceholder label={t.labels.storyVisual} />
            </div>
          </div>

          <div className="timeline timeline-expanded">
            {t.milestones.map((item, index) => (
              <article className="timeline-card" key={index}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="products-showcase">
            <div className="product-facts">
              {t.productHighlights.map((item, index) => (
                <article className="product-fact-card" key={index}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="products-grid">
              <article className="product-notes-card">
                <h3>{t.productSection.feltByEveryone}</h3>
                <ul className="product-lines">
                  {t.productSection.lines.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="product-notes-card">
                <h3>{t.productSection.productList}</h3>
                <p>{t.productSection.productListText}</p>
              </article>
            </div>
          </div>

          <div className="community-block">
            <div className="section-heading section-heading-wide">
              <h2>{t.community.title}</h2>
              <p>{t.community.text}</p>
            </div>

            <div className="community-list">
              {t.community.events.map((event, index) => (
                <article className="community-card" key={index}>
                  <div className="community-media">
                    <PhotoPlaceholder label={t.labels.eventPhoto} />
                  </div>
                  <div className="community-copy">
                    <h3>{event.title}</h3>
                    <p>{event.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div className="section-heading contact-heading">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className="contact-grid">
            {t.contact.cards.map((card) => (
              <a href={card.href} className="contact-card" key={`${card.label}-${card.value}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <em>{card.hint}</em>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
