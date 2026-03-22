import { useState } from "react";
import logo from "./assets/ard-logo.png";
import auroraLogo from "./assets/aurora.png";
import voinalovychPhoto from "./assets/войналович.jpg";

type Language = "ua" | "en";

type LocaleContent = {
  nav: { vision: string; projects: string; team: string; impact: string; contact: string };
  header: { department: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    stats: Array<{ value: string; label: string }>;
    notes: Array<string>;
  };
  manifesto: {
    title: string;
    text: string;
    columns: Array<{ title: string; text: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      title: string;
      category: string;
      description: string;
      metric: string;
      metricLabel: string;
      points: string[];
    }>;
  };
  team: {
    eyebrow: string;
    title: string;
    text: string;
    leader: {
      name: string;
      role: string;
      focus: string;
      skills: string[];
    };
    roles: Array<{ title: string; direction: string; text: string }>;
  };
  impact: {
    eyebrow: string;
    title: string;
    text: string;
    metrics: Array<{ value: string; label: string }>;
    timeline: Array<{ year: string; title: string; text: string }>;
  };
  community: {
    eyebrow: string;
    title: string;
    text: string;
    events: Array<{ title: string; text: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Array<{ label: string; value: string; href: string; hint: string }>;
  };
  labels: {
    heroVisual: string;
    projectVisual: string;
    eventVisual: string;
    roleVisual: string;
  };
};

const content: Record<Language, LocaleContent> = {
  ua: {
    nav: {
      vision: "Візія",
      projects: "Проєкти",
      team: "Команда",
      impact: "Масштаб",
      contact: "Контакти",
    },
    header: { department: "Department", language: "Мова" },
    hero: {
      eyebrow: "R&D департамент Aurora",
      title: "Створюємо продукти, які формують сильніше завтра компанії",
      text: "Ми поєднуємо продуктове мислення, інженерію та сервісний дизайн, щоб перетворювати внутрішні ідеї на рішення, які щодня відчувають співробітники й клієнти.",
      primary: "Дивитися проєкти",
      secondary: "Зв'язатися",
      stats: [
        { value: "2019", label: "старт департаменту" },
        { value: "12+", label: "запущених продуктів" },
        { value: "24/7", label: "фокус на досвіді" },
      ],
      notes: ["Продукти для компанії", "Інновації для сервісу", "Системне зростання"],
    },
    manifesto: {
      title: "Ми не просто автоматизуємо процеси. Ми створюємо середовище, у якому компанія росте швидше, сервіс працює людяніше, а технології стають відчутною перевагою.",
      text: "Сайт має показувати департамент як сильний внутрішній бренд: не допоміжну функцію, а команду, що формує нову якість досвіду всередині Aurora.",
      columns: [
        {
          title: "Продуктове мислення",
          text: "Кожне рішення стартує з цінності для людини, а не з набору технічних задач.",
        },
        {
          title: "Сервісний дизайн",
          text: "Ми дивимось на повний шлях користувача: від першого контакту до щоденної взаємодії.",
        },
        {
          title: "Інженерна зрілість",
          text: "Будуємо рішення, які масштабуються, витримують навантаження і працюють як система.",
        },
      ],
    },
    projects: {
      eyebrow: "Flagship проєкти",
      title: "Рішення, які рухають бізнес, сервіс і внутрішню ефективність",
      text: "Тут не каталог задач, а продуктове портфоліо департаменту: 3-4 сильні кейси з чітким сенсом, візуалом і цифрою впливу.",
      items: [
        {
          title: "Продукт для співробітників",
          category: "internal experience",
          description:
            "Єдина точка взаємодії з внутрішніми сервісами, яка прибирає зайві кроки й робить щоденний досвід простішим.",
          metric: "42%",
          metricLabel: "швидше до результату",
          points: ["менше ручних дій", "прозорий сценарій", "кращий досвід команди"],
        },
        {
          title: "Продукт для клієнтського сервісу",
          category: "customer experience",
          description:
            "Рішення, яке допомагає сервісу працювати швидше, точніше й людяніше в ключових точках контакту з клієнтом.",
          metric: "120K",
          metricLabel: "користувачів потенційно",
          points: ["якісніший сервіс", "масштаб на мережу", "відчутний ефект"],
        },
        {
          title: "Продукт для масштабування процесів",
          category: "operational systems",
          description:
            "Системний інструмент, який з'єднує бізнес-логіку, дані та технології в керовану архітектуру зростання.",
          metric: "18",
          metricLabel: "місяців до окупності",
          points: ["менше хаосу", "більше контролю", "стійка основа для росту"],
        },
      ],
    },
    team: {
      eyebrow: "Команда, що створює магію",
      title: "Ядро, яке поєднує візію, інженерію та продуктовий рух",
      text: "У центрі сайту має бути не перелік посад, а відчуття сильної команди з чіткими ролями та власною зоною впливу.",
      leader: {
        name: "Олександр Войналович",
        role: "R&D директор",
        focus: "Департамент інновацій та проєктного управління",
        skills: ["Стратегія", "Продукти", "Розвиток", "Системне мислення"],
      },
      roles: [
        {
          title: "Product direction",
          direction: "цінність і пріоритети",
          text: "Формуємо бачення продуктів, сценаріїв і точок максимального впливу.",
        },
        {
          title: "Experience design",
          direction: "логіка і взаємодія",
          text: "Будуємо зрозумілий досвід для співробітника й клієнта на кожному кроці.",
        },
        {
          title: "Delivery engine",
          direction: "реалізація і масштаб",
          text: "Перетворюємо ідеї на живі системи, які працюють стабільно і ростуть разом із бізнесом.",
        },
      ],
    },
    impact: {
      eyebrow: "Історія та масштаб",
      title: "Від створення департаменту до продуктів, які впливають на компанію щодня",
      text: "Розділ має показувати не просто хронологію, а шлях від команди-ініціативи до внутрішнього технологічного бренду Aurora.",
      metrics: [
        { value: "2019", label: "старт R&D-напряму" },
        { value: "12+", label: "продуктів у портфелі" },
        { value: "2 аудиторії", label: "співробітники та клієнти" },
      ],
      timeline: [
        {
          year: "Серпень 2019",
          title: "Створення департаменту",
          text: "Формується окрема команда, що бере на себе продуктову й інноваційну траєкторію компанії.",
        },
        {
          year: "2021",
          title: "Перші масштабовані рішення",
          text: "З'являються продукти, які виходять за межі локальних задач і впливають на щоденну роботу великої кількості людей.",
        },
        {
          year: "2023",
          title: "Портфель та системність",
          text: "Команда переходить від окремих ініціатив до цілісної продуктової архітектури.",
        },
        {
          year: "2025",
          title: "Масштабний вплив",
          text: "Продукти стають частиною великого сервісного й операційного досвіду компанії.",
        },
      ],
    },
    community: {
      eyebrow: "Публічність та спільнота",
      title: "Експертиза, яку видно не лише всередині компанії",
      text: "Департамент може звучати як сильний голос професійної спільноти через виступи, конференції, обмін досвідом і формування експертного середовища.",
      events: [
        {
          title: "Професійна конференція",
          text: "Команда ділиться підходами до продуктового мислення, сервісного дизайну та побудови рішень для великих систем.",
        },
        {
          title: "Експертна панель",
          text: "Розмова про технології, що формують реальний досвід людей і допомагають бізнесу зростати системно.",
        },
        {
          title: "Подія для спільноти",
          text: "Простір для обміну знаннями, кейсами та формування кола однодумців навколо сучасного продуктового підходу.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Почнемо розмову про продукти, сервіс і масштаб",
      text: "Короткий, чистий блок для прямого зв'язку з командою.",
      cards: [
        {
          label: "Телефон",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "основний контакт",
        },
        {
          label: "Пошта",
          value: "name@avrora.ua",
          href: "mailto:name@avrora.ua",
          hint: "загальні запити",
        },
        {
          label: "Телефон",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "проєктна взаємодія",
        },
        {
          label: "Пошта",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "для команди та партнерств",
        },
      ],
    },
    labels: {
      heroVisual: "Головний візуал департаменту",
      projectVisual: "Візуал проєкту",
      eventVisual: "Візуал події",
      roleVisual: "Роль команди",
    },
  },
  en: {
    nav: {
      vision: "Vision",
      projects: "Projects",
      team: "Team",
      impact: "Impact",
      contact: "Contacts",
    },
    header: { department: "Department", language: "Language" },
    hero: {
      eyebrow: "Aurora R&D department",
      title: "We build products that shape a stronger tomorrow for the company",
      text: "We combine product thinking, engineering, and service design to turn internal ideas into solutions that employees and customers can feel every day.",
      primary: "See projects",
      secondary: "Get in touch",
      stats: [
        { value: "2019", label: "department launch" },
        { value: "12+", label: "products launched" },
        { value: "24/7", label: "experience focus" },
      ],
      notes: ["Products for the company", "Innovation for service", "Systemic growth"],
    },
    manifesto: {
      title: "We do not just automate processes. We build an environment where the company grows faster, service feels more human, and technology becomes a visible advantage.",
      text: "The site should present the department as a strong internal brand: not a support function, but a team shaping a new quality of experience inside Aurora.",
      columns: [
        {
          title: "Product thinking",
          text: "Every solution starts from value for people, not from a list of technical tasks.",
        },
        {
          title: "Service design",
          text: "We look at the full user journey, from the first touchpoint to everyday interaction.",
        },
        {
          title: "Engineering maturity",
          text: "We build solutions that scale, handle load, and work as a coherent system.",
        },
      ],
    },
    projects: {
      eyebrow: "Flagship projects",
      title: "Solutions that move business, service, and internal efficiency forward",
      text: "This is not a task catalog. It is the department's product portfolio: strong cases with meaning, visual presence, and measurable impact.",
      items: [
        {
          title: "Product for employees",
          category: "internal experience",
          description:
            "A unified point of interaction with internal services that removes extra steps and makes daily work feel simpler.",
          metric: "42%",
          metricLabel: "faster to result",
          points: ["fewer manual actions", "clear journey", "better team experience"],
        },
        {
          title: "Product for customer service",
          category: "customer experience",
          description:
            "A solution that helps service work faster, more precisely, and more humanly in key customer touchpoints.",
          metric: "120K",
          metricLabel: "potential users",
          points: ["better service", "network scale", "visible effect"],
        },
        {
          title: "Product for process scale",
          category: "operational systems",
          description:
            "A system tool that connects business logic, data, and technology into a managed architecture for growth.",
          metric: "18",
          metricLabel: "months to payback",
          points: ["less chaos", "more control", "stronger growth base"],
        },
      ],
    },
    team: {
      eyebrow: "The team creating the magic",
      title: "A core that connects vision, engineering, and product momentum",
      text: "The center of the site should not be a list of roles, but the feeling of a strong team with clear ownership and influence.",
      leader: {
        name: "Oleksandr Voinalovych",
        role: "R&D Director",
        focus: "Innovation and Project Management Department",
        skills: ["Strategy", "Products", "Growth", "Systems thinking"],
      },
      roles: [
        {
          title: "Product direction",
          direction: "value and priorities",
          text: "We shape product vision, scenarios, and the points of highest impact.",
        },
        {
          title: "Experience design",
          direction: "logic and interaction",
          text: "We build an understandable experience for employees and customers at every step.",
        },
        {
          title: "Delivery engine",
          direction: "execution and scale",
          text: "We turn ideas into living systems that work reliably and grow with the business.",
        },
      ],
    },
    impact: {
      eyebrow: "Story and scale",
      title: "From department launch to products that influence the company every day",
      text: "This section should show not just a timeline, but the path from initiative team to Aurora's internal technology brand.",
      metrics: [
        { value: "2019", label: "R&D direction start" },
        { value: "12+", label: "products in portfolio" },
        { value: "2 audiences", label: "employees and customers" },
      ],
      timeline: [
        {
          year: "August 2019",
          title: "Department launch",
          text: "A dedicated team takes responsibility for the company's product and innovation trajectory.",
        },
        {
          year: "2021",
          title: "First scalable solutions",
          text: "Products appear that go beyond local tasks and start influencing daily work for many people.",
        },
        {
          year: "2023",
          title: "Portfolio and system thinking",
          text: "The team moves from isolated initiatives to a coherent product architecture.",
        },
        {
          year: "2025",
          title: "Visible scale",
          text: "Products become part of the company's broader service and operational experience.",
        },
      ],
    },
    community: {
      eyebrow: "Public presence and community",
      title: "Expertise that is visible beyond the company itself",
      text: "The department can sound like a strong voice of the professional community through talks, conferences, knowledge sharing, and expert environment building.",
      events: [
        {
          title: "Industry conference",
          text: "The team shares approaches to product thinking, service design, and building solutions for complex systems.",
        },
        {
          title: "Expert panel",
          text: "A discussion about technologies that shape real human experience and help business grow systematically.",
        },
        {
          title: "Community event",
          text: "A space for exchanging knowledge, cases, and building a circle of peers around modern product thinking.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacts",
      title: "Let's start a conversation about products, service, and scale",
      text: "A short, clean block for direct communication with the team.",
      cards: [
        {
          label: "Phone",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "main contact",
        },
        {
          label: "Email",
          value: "name@avrora.ua",
          href: "mailto:name@avrora.ua",
          hint: "general requests",
        },
        {
          label: "Phone",
          value: "+380 00 000 00 00",
          href: "tel:+380000000000",
          hint: "project communication",
        },
        {
          label: "Email",
          value: "team@avrora.ua",
          href: "mailto:team@avrora.ua",
          hint: "team and partnerships",
        },
      ],
    },
    labels: {
      heroVisual: "Department key visual",
      projectVisual: "Project visual",
      eventVisual: "Event visual",
      roleVisual: "Team role",
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
            <span className="brandmark-aurora-crop" aria-hidden="true">
              <img src={auroraLogo} alt="Avrora" className="brandmark-aurora-image" />
            </span>
          </a>

          <a href="#hero" className="brandmark brandmark-department">
            <span
              className="brandmark-dept-logo"
              aria-hidden="true"
              style={{ WebkitMaskImage: `url(${logo})`, maskImage: `url(${logo})` }}
            />
            <span>{t.header.department}</span>
          </a>
        </div>

        <div className="topbar-actions">
          <nav className="nav">
            <a href="#vision">{t.nav.vision}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#impact">{t.nav.impact}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="language-switch" aria-label={t.header.language}>
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
        <section className="hero editorial-surface" id="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-text">{t.hero.text}</p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">{t.hero.primary}</a>
                <a href="#contact" className="button button-secondary">{t.hero.secondary}</a>
              </div>

              <div className="hero-notes">
                {t.hero.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual-stage">
              <div className="hero-visual-meta">
                <span>R&amp;D / Aurora</span>
                <strong>Technology that becomes visible value</strong>
              </div>
              <PhotoPlaceholder label={t.labels.heroVisual} />
            </div>
          </div>

          <div className="hero-stats">
            {t.hero.stats.map((item) => (
              <article className="hero-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section manifesto-section" id="vision">
          <div className="section-kicker">Vision / manifesto</div>
          <div className="manifesto-layout">
            <div className="manifesto-main">
              <h2>{t.manifesto.title}</h2>
              <p>{t.manifesto.text}</p>
            </div>

            <div className="manifesto-columns">
              {t.manifesto.columns.map((column) => (
                <article className="manifesto-card" key={column.title}>
                  <span className="manifesto-index">{column.title}</span>
                  <p>{column.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
            <p>{t.projects.text}</p>
          </div>

          <div className="project-list">
            {t.projects.items.map((project, index) => (
              <article className="project-card project-card-editorial" key={project.title}>
                <div className="project-card-topline">
                  <span>{`0${index + 1}`}</span>
                  <em>{project.category}</em>
                </div>

                <div className="project-card-body">
                  <div className="project-image">
                    <PhotoPlaceholder label={t.labels.projectVisual} />
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <ul className="project-points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="metric-box">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark team-section" id="team">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">{t.team.eyebrow}</p>
            <h2>{t.team.title}</h2>
            <p>{t.team.text}</p>
          </div>

          <div className="team-layout">
            <article className="leader-card">
              <div className="leader-media">
                <PhotoPlaceholder
                  label={t.labels.roleVisual}
                  circle
                  src={voinalovychPhoto}
                  alt={t.team.leader.name}
                />
              </div>
              <div className="leader-copy">
                <span className="leader-label">Core leadership</span>
                <h3>{t.team.leader.name}</h3>
                <p className="team-role">{t.team.leader.role}</p>
                <p className="team-focus">{t.team.leader.focus}</p>
                <div className="leader-skills">
                  {t.team.leader.skills.map((skill) => (
                    <span className="team-skills" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>

            <div className="role-grid">
              {t.team.roles.map((role) => (
                <article className="role-card" key={role.title}>
                  <span className="role-direction">{role.direction}</span>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact-section" id="impact">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.impact.eyebrow}</p>
            <h2>{t.impact.title}</h2>
            <p>{t.impact.text}</p>
          </div>

          <div className="impact-grid">
            <div className="impact-metrics">
              {t.impact.metrics.map((item) => (
                <article className="impact-metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="timeline timeline-editorial">
              {t.impact.timeline.map((item) => (
                <article className="timeline-card" key={item.year}>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section community-section" id="community">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow eyebrow-dark">{t.community.eyebrow}</p>
            <h2>{t.community.title}</h2>
            <p>{t.community.text}</p>
          </div>

          <div className="community-list">
            {t.community.events.map((event) => (
              <article className="community-card" key={event.title}>
                <div className="community-media">
                  <PhotoPlaceholder label={t.labels.eventVisual} />
                </div>
                <div className="community-copy">
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-panel" id="contact">
          <div className="section-heading contact-heading">
            <p className="eyebrow eyebrow-dark">{t.contact.eyebrow}</p>
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
