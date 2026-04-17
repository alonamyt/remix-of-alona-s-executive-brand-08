export type Language = "ua" | "en";

export const translations = {
  nav: {
    about: { ua: "Про мене", en: "About" },
    experience: { ua: "Досвід", en: "Experience" },
    achievements: { ua: "Досягнення", en: "Achievements" },
    community: { ua: "Публічність", en: "Community" },
    contact: { ua: "Контакти", en: "Contact" },
  },
  hero: {
    label: { ua: "PRODUCT & CX LEADER", en: "PRODUCT & CX LEADER" },
    firstName: { ua: "Альона", en: "Alona" },
    lastName: { ua: "Митрофанова", en: "Mytrofanova" },
    subtitle: {
      ua: "Будую продукти, які перетворюють операції\nу масштабований бізнес",
      en: "Building products that transform operations\ninto scalable business",
    },
    cta1: { ua: "LinkedIn", en: "LinkedIn" },
    cta2: { ua: "Зв'язатися", en: "Connect" },
  },
  about: {
    label: { ua: "Про мене", en: "About" },
    title: { ua: "Стратегія та дія.", en: "Strategy meets execution." },
    text1: {
      ua: "Я працюю на перетині клієнтського досвіду, операцій та продукту.",
      en: "I work at the intersection of customer experience, operations, and product.",
    },
    text2: {
      ua: "Мій фокус — створення систем, які масштабуються, підвищують ефективність та створюють бізнес-результат.",
      en: "My focus is building systems that scale, drive efficiency, and deliver business outcomes.",
    },
    text3: {
      ua: "Маю досвід управління великими командами, запуску нових напрямків та трансформації сервісу у продукт.",
      en: "I have experience managing large teams, launching new business lines, and transforming service into product.",
    },
  },
  aurora: {
    label: { ua: "Аврора Мультимаркет", en: "Aurora Multimarket" },
    role: {
      ua: "Заступник директора департаменту по розвитку продуктів",
      en: "Deputy Director, Product Development Department",
    },
    period: { ua: "березень 2026 — теперішній час", en: "March 2026 — Present" },
    title: {
      ua: "Від операцій\nдо продукту.",
      en: "From operations\nto product.",
    },
    text: {
      ua: "Перетворюю внутрішні технології компанії на продукти для зовнішнього ринку. Кожен продукт створений з однією метою — зробити життя людей простішим і зручнішим.",
      en: "Turning the company's internal technologies into market-ready products. Each one built with a single purpose — making people's lives simpler and more convenient.",
    },
    highlight: {
      ua: "Перетворюю внутрішні розробки у прибуткові продукти, що покращують життя людей, роблячи його легше та зручніше",
      en: "Turning internal technologies into profitable products that improve people's lives, making them easier and more convenient",
    },
    responsibilities: {
      ua: [
        "Формування продуктового портфеля",
        "Визначення моделей монетизації",
        "Запуск пілотних продуктів",
        "Управління бюджетом",
        "Контроль ROI",
        "Кросфункціональна взаємодія",
      ],
      en: [
        "Product portfolio formation",
        "Monetization model definition",
        "Pilot product launches",
        "Budget management",
        "ROI control",
        "Cross-functional collaboration",
      ],
    },
  },
  novaPoshta: {
    label: { ua: "Нова Пошта", en: "Nova Poshta" },
    role: {
      ua: "Директор департаменту національного контакт-центру",
      en: "Director of National Contact Center Department",
    },
    period: { ua: "2017 — листопад 2025", en: "2017 — November 2025" },
    title: {
      ua: "Масштаб\nта швидкість.",
      en: "Scale at\nvelocity.",
    },
    text: {
      ua: "Керування контакт-центром національного масштабу та розвиток клієнтського досвіду.",
      en: "Managing a national-scale contact center and developing customer experience.",
    },
    stats: {
      ua: [
        { number: "1300+", label: "Співробітників" },
        { number: "13", label: "Мов обслуговування" },
      ],
      en: [
        { number: "1300+", label: "Team members" },
        { number: "13", label: "Service languages" },
      ],
    },
    highlights: {
      ua: [
        "Впровадження обслуговування на 13 іноземних мовах при запуску Nova Post (2023–2024)",
        "Запуск голосового помічника (2019)",
        "Впровадження ШІ в чаті (2025)",
        "Омніканальний сервіс",
        "Впровадження алгоритмів вирішення логістичних та нестандартних питань",
      ],
      en: [
        "Launched 13-language support for Nova Post (2023–2024)",
        "Voice assistant launch (2019)",
        "AI in chat implementation (2025)",
        "Omnichannel service",
        "Implementation of logistics and non-standard issue resolution algorithms",
      ],
    },
    careerPath: {
      ua: [
        { role: "Начальник відділу обслуговування (гаряча лінія та чати)", period: "2016 — 2017" },
        { role: "Провідний фахівець з аналітики департаменту", period: "2015 — 2016" },
        { role: "Менеджер із розвитку технологій та архітектури КЦ", period: "2015" },
      ],
      en: [
        { role: "Head of B2B/B2C Service Department (hotline & chats)", period: "2016 — 2017" },
        { role: "Lead Specialist, Department Analytics", period: "2015 — 2016" },
        { role: "Manager of CC Technology & Architecture", period: "2015" },
      ],
    },
    careerLabel: { ua: "Кар'єрний шлях", en: "Career path" },
    previousExp: {
      ua: {
        company: "ТОВ «Квант Пром»",
        role: "Менеджер зі збуту",
        period: "2012 — 2014",
        desc: "Керування торгівельно-виставковим салоном, розвиток дилерської мережі",
      },
      en: {
        company: "Kvant Prom LLC",
        role: "Sales Manager",
        period: "2012 — 2014",
        desc: "Managing showroom, developing dealer network",
      },
    },
    previousLabel: { ua: "Попередній досвід", en: "Previous experience" },
  },
  achievements: {
    label: { ua: "Визнання", en: "Recognition" },
    title: { ua: "Нагороди та\nдосягнення.", en: "Award-winning\nexcellence." },
    stats: {
      ua: [
        { number: "#1", label: "Контакт-центр року DzWinner 2025" },
        { number: "24+", label: "Нагород команди (DzWinner 2024 + 2025)" },
        { number: "#1", label: "Рейтинг контакт-центрів (таємний клієнт) 2024" },
      ],
      en: [
        { number: "#1", label: "Contact Center of the Year — DzWinner 2025" },
        { number: "24+", label: "Team awards (DzWinner 2024 + 2025)" },
        { number: "#1", label: "Contact center ranking (mystery shopper) 2024" },
      ],
    },
    details: {
      ua: [
        "1 місце на Lean-ярмарку Нової пошти — проєкт «Зменшення часу на фіксацію претензії клієнтом в НКЦ», 2024",
        "Кращий доповідач практичної конференції ВАКЦ «Кращі практики» 2024",
        "Customer Experience 2024: 2 місце — Кращий клієнтський досвід у КЦ",
      ],
      en: [
        "1st place at Nova Poshta Lean Fair — project «Reducing claim registration time in NCC», 2024",
        "Best speaker at VACC practical conference «Best Practices» 2024",
        "Customer Experience 2024: 2nd place — Best CX in Contact Center",
      ],
    },
  },
  community: {
    label: { ua: "Публічність та спільнота", en: "Community & Speaking" },
    title: { ua: "Обмін знаннями.", en: "Sharing knowledge." },
    text: {
      ua: "Участь у професійних конференціях та розвиток експертного середовища.",
      en: "Participating in professional conferences and developing the expert community.",
    },
  },
  education: {
    label: { ua: "Освіта", en: "Education" },
    title: { ua: "Фундамент.", en: "Foundation." },
    items: {
      ua: [
        {
          degree: "Магістр (з відзнакою)",
          school: "Національний університет «Полтавська політехніка ім. Юрія Кондратюка»",
          specialty: "Спеціальність «Комп'ютерні науки», галузь знань Інформаційні технології",
          year: "2022–2024",
        },
        {
          degree: "Магістр",
          school: "Полтавський національний технічний університет ім. Юрія Кондратюка",
          specialty: "Спеціальність «Менеджмент організацій», кваліфікація менеджер-економіст",
          year: "2006–2011",
        },
      ],
      en: [
        {
          degree: "Master's Degree (with honors)",
          school: "National University «Yuri Kondratyuk Poltava Polytechnic»",
          specialty: "Computer Science, Information Technologies",
          year: "2022–2024",
        },
        {
          degree: "Master's Degree",
          school: "Yuri Kondratyuk Poltava National Technical University",
          specialty: "Management of Organizations, Manager-Economist",
          year: "2006–2011",
        },
      ],
    },
    certs: {
      ua: [
        { name: "MBA НП Менеджмент", org: "Corporate University Нова Пошта", year: "2024" },
        { name: "Lean Чорний пояс", org: "Corporate University Нова Пошта", year: "2024" },
        { name: "Lean Green Belt", org: "Lean Institute Ukraine", year: "2021" },
        { name: "Ефективний Middle-Менеджер", org: "Corporate University Нова Пошта", year: "2018" },
      ],
      en: [
        { name: "MBA NP Management", org: "Corporate University Nova Poshta", year: "2024" },
        { name: "Lean Black Belt", org: "Corporate University Nova Poshta", year: "2024" },
        { name: "Lean Green Belt", org: "Lean Institute Ukraine", year: "2021" },
        { name: "Effective Middle Manager", org: "Corporate University Nova Poshta", year: "2018" },
      ],
    },
  },
  contact: {
    label: { ua: "Контакти", en: "Contact" },
    title: { ua: "Контакти", en: "Contact" },
    text: {
      ua: "Ми з командою готові зробити життя вашої команди легше, імплементуючи наші продукти. Звертайся!",
      en: "My team and I are ready to make your team's life easier by implementing our products. Get in touch!",
    },
    workContact: { ua: "Робочий контакт", en: "Work contact" },
    personalContact: { ua: "Особистий контакт", en: "Personal contact" },
  },
  footer: {
    rights: {
      ua: "Усі права захищено.",
      en: "All rights reserved.",
    },
    role: {
      ua: "Product & CX Leader",
      en: "Product & CX Leader",
    },
  },
};
