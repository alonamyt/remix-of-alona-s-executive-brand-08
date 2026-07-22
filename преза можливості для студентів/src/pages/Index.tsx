import {
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CircleCheckBig,
  CircleX,
  ExternalLink,
  Gift,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPinned,
  Microscope,
  Phone,
  Quote,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import liudmylaPerekhrest from "@/assets/students/liudmyla-perekhrest.png";
import boryslavKrakovych from "@/assets/students/boryslav-krakovych.png";
import anastasiiaNikonova from "@/assets/students/anastasiia-nikonova.jpg";
import kyryloMedar from "@/assets/students/kyrylo-medar.png";
import stanislavVoronin from "@/assets/students/stanislav-voronin.png";
import ivanPopov from "@/assets/students/ivan-popov.jpg";
import sofiiaPhoto from "@/assets/students/sofiia.png";
import leanFestTeam from "@/assets/lean-fest-team.jpg";
import mlWeek2025 from "@/assets/students-paths/ml-week-2025.jpeg";
import involvementKmbs from "@/assets/students-paths/kmbs-forum.jpg";
import involvementRobotics1 from "@/assets/students-paths/aurora-robotics-1.png";
import involvementRobotics2 from "@/assets/students-paths/aurora-robotics-2.png";
import departmentLogo from "@/assets/student-opportunities/department-logo.png";
import alonaPortrait from "@/assets/student-opportunities/alona-portrait-short.png";
import voinalovychPhoto from "@/assets/student-opportunities/voinalovych.jpg";
import mytrofanovaTeamPhoto from "@/assets/student-opportunities/mytrofanova-team-updated.png";
import cherednykPhoto from "@/assets/student-opportunities/cherednyk.png";
import borodaiBalancedPhoto from "@/assets/student-opportunities/borodai-balanced.jpg";
import kucherenkoPhoto from "@/assets/student-opportunities/kucherenko.jpg";
import sabaniukPhoto from "@/assets/student-opportunities/sabaniuk.png";
import rdStudentsTeamPhoto from "@/assets/student-opportunities/rd-students-team.jpg";
import rdStudentsGroupPhoto from "@/assets/student-opportunities/rd-students-group.jpg";
import auroraStudentsQrPoster from "@/assets/student-opportunities/aurora-students-how-to-join.jpg";
import projectConversionPhoto from "@/assets/student-opportunities/project-conversion-day.png";
import projectVehiclePhoto from "@/assets/student-opportunities/project-vehicle-detection-system.png";
import projectSmartParkingPhoto from "@/assets/student-opportunities/project-smart-parking-system.jpg";
import projectGeneratorPhoto from "@/assets/student-opportunities/project-generator-day.png";
import projectSmartwikiPhoto from "@/assets/student-opportunities/project-smartwiki-day.png";
import projectDevelopmentPhoto from "@/assets/student-opportunities/project-development-day.png";

const teamLeads = [
  {
    name: "Олександр Войналович",
    role: "R&D директор",
    image: voinalovychPhoto,
  },
  {
    name: "Альона",
    role: "Заступник директора департаменту по розвитку продуктів",
    image: mytrofanovaTeamPhoto,
  },
  {
    name: "Олександр",
    role: "Відділ досліджень і розробок",
    image: cherednykPhoto,
  },
  {
    name: "Ірина",
    role: "Відділ бізнес-аналізу",
    image: borodaiBalancedPhoto,
    imageClassName: "leader-avatar__image--borodai",
  },
  {
    name: "Євгенія",
    role: "Офіс управління проєктами та процесами",
    image: kucherenkoPhoto,
  },
  {
    name: "Олександр",
    role: "AVRORA AI Lab",
    image: sabaniukPhoto,
  },
];
const missionCards = [
  {
    title: "Місія Аврори",
    text: "Покращувати повсякденне життя людей, роблячи товари для дому та душі доступнішими.",
    tone: "brand",
  },
  {
    title: "Візія Аврори",
    text: "Творець атмосфери щасливих та ощадливих покупок.",
    tone: "brand",
  },
  {
    title: "Місія департаменту",
    text: "Створюємо середовище, у якому Аврора росте швидше й посилює свою перевагу.",
    tone: "department",
  },
  {
    title: "Візія департаменту",
    text: "Творці швидких і легких рішень для компанії та клієнтів.",
    tone: "department",
  },
  {
    title: "R&D - функція, яка",
    items: [
      "створює нові продукти",
      "тестує інновації",
      "автоматизовує бізнес",
      "оптимізує процеси",
    ],
    tone: "department",
  },
  {
    title: "Мета",
    text: "заробити більше або витрачати менше ;)",
    tone: "department",
  },
];

const heroRealityCards = [
  {
    text: "задачі на практику",
    tone: "wrong",
    icon: CircleX,
  },
  {
    text: "можливість створювати продукти, які реально працюють у бізнесі",
    tone: "right",
    icon: CircleCheckBig,
  },
];

const involvementQuotes = [
  "Хакатони з Data Science і зимові школи з АІ, де ми вперше й побачились з Олександром Сабанюком.",
  "Мені промо літньої школи поширив знайомий, я почитала, зацікавилась.",
  "Я побачила анонс Аврора Стюдентс у Вайбер-групі для ВПО. В описі програми є управлінський і менеджерський компонент, тому подалася. Проєкт мені цей дуже сподобався. Одне з найкращих, що зі мною відбувалося в плані навчання, досвіду, нетворкінгу і вражень.",
  "Прийшов на роботу після комунікації з своїм зав. кафедри: якось при неформальній розмові сказав, що шукаю роботу, то він потім повідомив мене, що Аврора шукає студентів.",
];
const involvementPaths = [
  {
    title: "Хакатони та AI-школи",
    text: "Знайомство з командою часто починається з Data Science хакатонів, зимових і літніх шкіл з AI та ML. Саме там видно ініціативність, рівень підготовки й те, як людина мислить у реальних задачах.",
    image: mlWeek2025,
    imagePosition: "center 72%",
    imageScale: 1.14,
    href: "https://pma.fpm.kpi.ua/uk/news/ml-week-2025-summary",
    source: "Хакатони та AI-школи",
  },
  {
    title: "Літні програми та Aurora Students",
    text: "Online Aurora Base - розвиток управлінських, лідерських і комунікаційних навичок через 12 навчальних блоків із практичними інструментами. Бізнес-школа від AURORA STUDENTS - offline-навчання від топ-менеджерів, реальні кейси, нетворкінг і шанс отримати стажування у великій компанії.",
    image: rdStudentsGroupPhoto,
    imagePosition: "center center",
    href: "https://robota.avrora.ua/avrora-dlia-studentiv-ta-molodi",
    source: "Літні програми та Aurora Students",
  },
  {
    title: "Рекомендації кафедр",
    text: "Викладачі, завідувачі кафедр і університетські спільноти рекомендують студентів, коли бачать сильну мотивацію, готовність працювати й інтерес до реальних бізнес-задач.",
    image: rdStudentsTeamPhoto,
    imagePosition: "center center",
    href: "https://robota.avrora.ua/aurora-students-sered-peremozciv-sustainable-impact-award-2025",
    source: "Рекомендації кафедр",
  },
];
const studentGroups = [
  {
    university: 'Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського"',
    universityBadge: "KPI",
    students: [
      {
        name: "Людмила",
        year: "3 курс",
        track: "Факультет інформатики та обчислювальної техніки",
        image: liudmylaPerekhrest,
        imagePosition: "center 18%",
      },
      {
        name: "Борислав",
        year: "5 курс (магістратура)",
        track: "Факультет програмних систем та прикладної математики",
        image: boryslavKrakovych,
        imagePosition: "center 20%",
      },
      {
        name: "Кирило",
        year: "3 курс",
        track: "Факультет програмних систем та прикладної математики",
        image: kyryloMedar,
        imagePosition: "center 16%",
      },
    ],
  },
  {
    university: "Київський національний університет імені Тараса Шевченка",
    universityBadge: "KNU",
    students: [
      {
        name: "Станіслав",
        year: "4 курс",
        track: "Факультет журналістики",
        image: stanislavVoronin,
        imagePosition: "center 18%",
      },
      {
        name: "Іван",
        year: "3 курс",
        track: "Факультет інформаційних технологій",
        image: ivanPopov,
        imagePosition: "center 22%",
      },
      {
        name: "Анастасія",
        year: "4 курс",
        track: "Факультет психології, соціальної роботи та спеціальної освіти",
        universityNote: "Київський столичний університет імені Бориса Грінченка",
        image: anastasiiaNikonova,
        imagePosition: "center 20%",
      },
      {
        name: "Софія",
        year: "3 курс",
        track: "Факультет програмних систем та прикладної математики",
        universityNote: 'НТУУ "Київський політехнічний інститут імені Ігоря Сікорського"',
        image: sofiiaPhoto,
        imagePosition: "center 20%",
      },
    ],
  },
];

const studentRoles = [
  {
    icon: BrainCircuit,
    title: "Data Science",
    text: "Робота з моделями прогнозування, які допомагають краще розуміти поведінку клієнтів, бачити закономірності й приймати точніші рішення.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    text: "Участь у створенні моделей для інструкцій, внутрішньої комунікації, сценаріїв автоматизації та візуальних концепцій.",
  },
  {
    icon: Microscope,
    title: "Computer Vision",
    text: "Залучення до продуктів автоматичного моніторингу, контролю й досліджень на базі комп'ютерного зору.",
  },
  {
    icon: Target,
    title: "Project Management",
    text: "Структурування проєктів, побудова таймлайнів, контроль статусів задач, дедлайнів і підтримка темпу реалізації інновацій.",
  },
];

const studentProjectStories = [
  {
    name: "Людмила",
    image: liudmylaPerekhrest,
    imagePosition: "center 18%",
    projectsLabel: "До яких проєктів долучалася",
    projects:
      "Віртуальний HR, дашборди для відділу якості (один робився з нуля, інший трохи доповнювала).",
    ownership:
      "Підтримка і контроль дашбордів, які зробила (щоб все було окей, нічого не падало і оновлювалось).",
  },
  {
    name: "Кирило",
    image: kyryloMedar,
    imagePosition: "center 16%",
    projects:
      "Встиг долучитись вже до 2 проєктів: рекомендаційна система товарів на основі ШІ агенту (людина не просто пише «вода», а може написати «хочу пити», і система сама аналізує запит і наявні товари та видає найбільш релевантні) і система розпізнавання номерних знаків машин, щоб автоматично відкривати шлагбаум перед КПП.",
    ownership:
      "Я зараз виправляю наявні баги та додаю новий функціонал під ТЗ, місцями глобально переписуючи логіку проєктів для кращої роботи.",
  },
  {
    name: "Борислав",
    image: boryslavKrakovych,
    imagePosition: "center 20%",
    projects:
      "Я долучався до проєкту Avrora Smart Parking (детекція автомобілів та визначення зайнятості місця в режимі реального часу з камер відеоспостреження (CCTV)), а також до проєкту детекції кошиків з камер відеоспостреження для подальшого їх підрахунку шляхом проходження їх через умовні лінії",
    ownership:
      "Перевірка працездатності проєктів, базова розробка, аналіз і окремі частини проєкту.",
  },
  {
    name: "Анастасія",
    image: anastasiiaNikonova,
    imagePosition: "center 20%",
    projectsLabel: "До яких проєктів долучалася",
    projects:
      "До різних: працюємо над проєктом із фінансовим департаментом; удосконалення внутрішньої системи управління портфелем проєктів; восени були підготовка та участь у ініціативах по типу retail expo; організація та проведення навчань.",
    ownership:
      "По факту, більшість задач я веду самостійно, але певні - в рамках стандартного процесу погодження з керівником. Наприклад, сама проводжу навчання по системі LEO PPM, розробляю навчальні програми для LMS з подальшим погодженням перед публікацією, комунікую з підрядниками, беру участь у процесах закупівлі і оплат, збираю вимоги до задач і процесів.",
  },
  {
    name: "Станіслав",
    image: stanislavVoronin,
    imagePosition: "center 18%",
    projects:
      "В процесному офісі ми створюємо каталог процесів компанії для їх систематизації та оптимізації. Окрім цього я залучений в проєкт по впровадженню системи GMS в Румунію.",
    ownership:
      "Все від проведення інтерв'ю з експертами/власниками процесів до внесення остаточної схеми в каталог процесів.",
  },
  {
    name: "Іван",
    image: ivanPopov,
    imagePosition: "center 22%",
    projects:
      "Вітрина ШІ інструментів, автоматизація по табелю та новому персоналу, lean-fest застосунок, застосунок генерації документів, lean-quest застосунок, HR 2.0, генератор презентацій.",
    ownership:
      "Поступово беру на себе окремі прикладні інструменти й автоматизації, де важлива швидка реалізація, підтримка та розвиток функціоналу.",
  },
  {
    name: "Софія",
    image: sofiiaPhoto,
    imagePosition: "center 20%",
    projectsLabel: "До яких проєктів долучалася",
    projects: (
      <>
        <span style={{ display: "block" }}>
          <strong>1. Є-Архів — ШІ-обробка документів.</strong> Система сама розпізнає скани
          українських юридичних документів, визначає тип і витягує ключові поля. Архіваріус лише
          перевіряє й публікує замість ручного заповнення карток.
        </span>
        <span className="story-metric">
          ~50 000 сторінок/місяць — потік документів на автоматизацію
        </span>
        <span style={{ display: "block", marginTop: "14px" }}>
          <strong>2. Детекція фейків — захист бренду.</strong> Користувач завантажує скріншот
          підозрілого оголошення чи «вакансії», а система повертає рівень ризику з поясненням
          простими словами. Багатошаровий пайплайн замість однієї «магічної моделі».
        </span>
        <span className="story-metric">OCR + Rules + RAG + LLM — зважений risk score</span>
      </>
    ),
    ownership:
      "Веду обидва проєкти майже автономно: проєктую архітектуру, порівнюю LLM-моделі й обираю оптимальну під задачу, пишу промпти та код екстракції, налаштовую гібридний підхід OCR+LLM, щоб тримати вартість обробки низькою. Приймаю технічні рішення сама, а більші кроки — інтеграції, розгортання, зміни — в межах стандартного процесу погодження задач з керівником.",
  },
];

const projects = [
  {
    title: "Система підрахунку зовнішньої конверсії",
    text: "Для ритейлу: від відеоспостереження до зростання продажів. Аналізує зовнішній трафік та конверсію у відвідування і покупки на базі відеоаналітики та алгоритмів машинного навчання. Це інструмент виміру впливу реклами, локації і потоків на реальну конверсію. Дає зниження неефективних витрат, збільшення продажів через оптимізацію маркетингу та прозору аналітику ефективності точок.",
    image: projectConversionPhoto,
    metric: "31.05%",
    metricLabel: "видима конверсія у воронці",
  },
  {
    title: "Система детекції автомобілів",
    text: "Рішення для аналізу автомобільного трафіку біля локацій. Дає змогу бачити потоки, розуміти динаміку відвідуваності, оцінювати потенціал локацій і доповнювати картину поведінки клієнтів у фізичному ритейлі реальними даними з поля.",
    image: projectVehiclePhoto,
    metric: "CV",
    metricLabel: "computer vision для польової аналітики",
  },
  {
    title: "Система контролю генераторів",
    text: "Моніторинг стану, подій та стабільності генераторної інфраструктури. Допомагає швидше реагувати на інциденти, централізовано бачити роботу обладнання та підтримувати безперервність операційної діяльності магазинів.",
    image: projectGeneratorPhoto,
    metric: "24/7",
    metricLabel: "контроль критичної інфраструктури",
  },
  {
    title: "Smart parking",
    text: "Система CV для автоматичної детекції автомобілів на паркомайданчику, визначення вільних/зайнятих місць та інтеграції з інформаційними табло.",
    image: projectSmartParkingPhoto,
    metric: "CV",
    metricLabel: "автоматична детекція місць на паркінгу",
  },
  {
    title: "Smart Wiki",
    text: "База знань нового покоління, де інформація стає швидко доступною, структурованою та корисною для команд і процесів. Допомагає швидше знаходити відповіді, зменшує втрати часу і покращує якість внутрішньої взаємодії.",
    image: projectSmartwikiPhoto,
    metric: "Wiki",
    metricLabel: "швидкі знання для команд",
  },
  {
    title: "Розробка під ключ і продуктові сценарії",
    text: "Окремий напрям створення готових рішень і нових операційних сценаріїв на базі внутрішньої експертизи департаменту. Це шлях від дослідження і задачі бізнесу до робочого рішення, яке можна впровадити, виміряти й розвивати далі.",
    image: projectDevelopmentPhoto,
    metric: "R&D",
    metricLabel: "від задачі до готового рішення",
  },
];

const featuredProjects = projects.slice(0, 3);
const platformProjects = projects.slice(3);

const studentStoriesLead = studentProjectStories.filter((story) =>
  ["Борислав", "Людмила"].includes(story.name),
);
const studentStoriesMiddle = studentProjectStories.filter((story) =>
  ["Кирило", "Анастасія"].includes(story.name),
);
const studentStoriesFinal = studentProjectStories.filter(
  (story) => ["Станіслав", "Іван", "Софія"].includes(story.name),
);

const benefits = [
  { icon: BadgeCheck, text: "Офіційне працевлаштування з першого робочого дня." },
  { icon: GraduationCap, text: "Безкоштовні курси і тренінги від корпоративного навчального центру." },
  { icon: ShoppingBag, text: "Реальний досвід у роботі з AI, розробці та впровадженні продуктів та проєктів." },
  { icon: BrainCircuit, text: "Можливість навчатись на зовнішніх платформах із компенсацією вартості." },
  { icon: Sparkles, text: "Можливість вивчати англійську з частковою або повною компенсацією." },
  { icon: TrendingUp, text: "Швидке горизонтальне та вертикальне кар'єрне зростання." },
  { icon: Users, text: "Дружня команда однодумців і сильна корпоративна культура." },
  { icon: HeartHandshake, text: "Благодійні ініціативи, спортивне ком'юніті та середовище підтримки." },
  { icon: ShieldCheck, text: "Безпечне та стабільне середовище для розвитку і роботи." },
  { icon: Gift, text: "Внутрішні програми підтримки й приємні бонуси для співробітників: знижка 15% на покупки товарів у мережі та приємні бонуси для співробітників." },
];

const sources = [
  {
    label: "RAU: Аврора розширює R&D команду",
    href: "https://rau.ua/novyni/novini-partneriv/avrora-rozshirjuie-r-d-komandu/",
  },
  {
    label: "robota.avrora.ua: Аврора для студентів та молоді",
    href: "https://robota.avrora.ua/avrora-dlia-studentiv-ta-molodi",
  },
  {
    label: "robota.avrora.ua: Aurora Students серед переможців Sustainable Impact Award 2025",
    href: "https://robota.avrora.ua/aurora-students-sered-peremozciv-sustainable-impact-award-2025",
  },
  {
    label: "robota.avrora.ua: Aurora at the UCU Career Forum",
    href: "https://robota.avrora.ua/en/avrora-na-forumi-karjeri-uku",
  },
  {
    label: "robota.avrora.ua: Aurora на Генеральній асамблеї UAS",
    href: "https://robota.avrora.ua/en/avrora-na-generalnoyi-asambleyi-ukrayinskoyi-asociaciyi-studentiv-uas",
  },
];

const heroSignals = ["AI", "Data Science", "Computer Vision", "Product Thinking"];

const pathwayBenefits = [
  "практичні знання від топменеджерів і команди Аврори",
  "реальні бізнес-кейси й робота з живими задачами",
  "нетворкінг зі студентами та співробітниками компанії",
  "сертифікат про проходження програми",
];

const pathwayAudience = [
  "мислиш нестандартно та хочеш проявитись у реальній роботі",
  "цікавишся AI, продуктами, бізнесом або менеджментом",
  "вмієш аргументувати свої ідеї",
  "прагнеш побудувати успішну кар'єру",
  "готовий показати себе через кейси, комунікацію та ініціативу",
];

const pathwaySteps = [
  {
    icon: Send,
    text: "Реєстрація: 13.04-27.05",
  },
  {
    icon: Sparkles,
    text: "Навчання та захист ідей: 06.07-28.07",
  },
  {
    icon: BriefcaseBusiness,
    text: "Шанс на офер",
  },
];

const pathwayRewards = [
  {
    icon: Gift,
    label: "стажування",
    text: "у топменеджерів компанії",
  },
  {
    icon: GraduationCap,
    label: "грант",
    text: "на оплату навчання та підтримку професійного розвитку",
  },
  {
    icon: BriefcaseBusiness,
    label: "офер",
    text: "на роботу в одному з департаментів компанії",
  },
];

const Index = () => {
  const presenterLockRef = useRef(0);
  // Блок «Знайомство / Митрофанова Альона» приховано за замовчуванням.
  // Розкривається кліком на непомітну точку в лівому нижньому куті екрана.
  const [showIntro, setShowIntro] = useState(false);

  const toggleIntro = () => {
    setShowIntro((prev) => {
      const next = !prev;
      if (next) {
        requestAnimationFrame(() => {
          document
            .getElementById("intro")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return next;
    });
  };

  useEffect(() => {
    const stepSelector = '[data-step-section="true"]';

    const getSteps = () =>
      Array.from(document.querySelectorAll<HTMLElement>(stepSelector));

    const getTopbarOffset = () => {
      const topbar = document.querySelector<HTMLElement>(".topbar");

      if (!topbar) {
        return 112;
      }

      return Math.ceil(topbar.getBoundingClientRect().height + topbar.offsetTop + 18);
    };

    const getStepTop = (step: HTMLElement) => {
      const offset = getTopbarOffset();
      const adjustment = Number(step.dataset.stepAdjust ?? "0");

      return Math.max(0, window.scrollY + step.getBoundingClientRect().top - offset + adjustment);
    };

    const getCurrentStepIndex = (steps: HTMLElement[]) => {
      const currentY = window.scrollY + getTopbarOffset() + 8;
      let currentIndex = 0;

      steps.forEach((step, index) => {
        if (getStepTop(step) <= currentY) {
          currentIndex = index;
        }
      });

      return currentIndex;
    };

    const moveByStep = (direction: 1 | -1) => {
      const now = Date.now();

      if (now < presenterLockRef.current) {
        return;
      }

      const steps = getSteps();

      if (!steps.length) {
        return;
      }

      const currentIndex = getCurrentStepIndex(steps);
      const nextIndex = Math.max(0, Math.min(steps.length - 1, currentIndex + direction));

      if (nextIndex === currentIndex) {
        return;
      }

      presenterLockRef.current = now + 720;
      window.scrollTo({
        top: getStepTop(steps[nextIndex]),
        behavior: "smooth",
      });
    };

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof HTMLElement &&
      Boolean(target.closest('input, textarea, select, button, a, [contenteditable="true"]'));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || isInteractiveTarget(event.target)) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        moveByStep(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        moveByStep(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__brand">
          <img className="brand-logo" src={departmentLogo} alt="Лого департаменту R&D" />
          <span>Можливості для студентів у команді Аврора</span>
        </div>

        <nav className="topbar__nav">
          <a href="#team">Команда</a>
          <a href="#involvement">Точки залучення</a>
          <a href="#projects">Проєкти</a>
          <a href="#benefits">Аврора надає</a>
        </nav>
      </header>

      <main className="story">
        <section className="slide slide--hero" id="hero" data-step-section="true">
          <div className="hero-shell">
            <h1>Можливості для студентів у команді R&amp;D Аврора</h1>
            <div className="hero-reality">
              {heroRealityCards.map(({ text, tone, icon: Icon }) => (
                <div key={text} className={`hero-reality__item hero-reality__item--${tone}`}>
                  <Icon size={18} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <p className="hero-lead">
              Департамент інновацій та проєктного управління розвиває рішення, які поєднують бізнес,
              аналітику, AI, automation і реальні продуктові сценарії.
            </p>

            <div className="hero-signals">
              {heroSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
        </section>

        {showIntro && (
        <section className="slide slide--intro" id="intro" data-step-section="true">
          <div className="intro-card">
            <div className="intro-photo">
              <img src={alonaPortrait} alt="Альона Митрофанова" />
            </div>

            <div className="intro-copy">
              <div className="section-label">Знайомство</div>
              <h2>Митрофанова Альона</h2>
              <p className="intro-role">Заступник директора департаменту по розвитку продуктів R&amp;D</p>
              <p>
                Маю 10-річний досвід управління великими командами, побудови циклу процесів від підбору
                та навчання до клієнтського сервісу, аналітики й оптимізації, запуску нових напрямків та
                трансформації сервісу у продукт.
              </p>
              <p>
                Наразі займаюся розвитком внутрішніх розробок та продуктів команди для подальшого
                перетворення у зовнішні продукти, що покращують життя людей, роблячи його легше і зручніше.
              </p>

              <div className="contact-grid">
                <a href="mailto:a.mytrofanova@avrora.ua">
                  <Mail size={17} />
                  <span>a.mytrofanova@avrora.ua</span>
                </a>
                <a href="tel:+380970006104">
                  <span className="contact-icons">
                    <Phone size={17} />
                    <Send size={17} />
                  </span>
                  <span>+380 97 000 61 04</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        )}

        <section className="slide slide--team slide--team-overview" id="team">
          <div className="team-step" data-step-section="true">
            <div className="slide-heading">
            <h2>
              Мета і команда департаменту
              <br />
              інновацій та проєктного управління
            </h2>
            </div>

            <div className="mission-grid">
            {missionCards.map((card) => (
              <article
                key={card.title}
                className={`mission-card mission-card--${card.tone}${"items" in card ? " mission-card--split" : ""}`}
              >
                <p className={`meta-note${"items" in card ? " mission-card__title" : ""}`}>{card.title}</p>
                {"items" in card ? (
                  <ul className="mission-card__list">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.text}</p>
                )}
              </article>
            ))}
            </div>

            <div className="stats-strip">
            <div>
              <strong>7</strong>
              <span>років розвитку напряму</span>
            </div>
            <div>
              <strong>35</strong>
              <span>людей у команді департаменту</span>
            </div>
            <div>
              <strong>10 студентів</strong>
              <span>залучати студентів почали 3 роки тому</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>заявок на Aurora Students у 2025</span>
            </div>
            </div>
          </div>

          <div className="team-step" data-step-section="true">
            <div className="leadership-showcase">
            <article className="leader-card leader-card--featured">
              <div className="leader-card__hero">
                <div className="leader-avatar leader-avatar--xl">
                  <img
                    className={teamLeads[0].imageClassName}
                    src={teamLeads[0].image}
                    alt={teamLeads[0].name}
                  />
                </div>

                <div className="leader-card__copy leader-card__copy--featured">
                  <h3>{teamLeads[0].name}</h3>
                  <p className="leader-role leader-role--featured">{teamLeads[0].role}</p>
                  <p>Департамент інновацій та проєктного управління</p>
                  </div>
                </div>
            </article>

            <article className="leader-card leader-card--spotlight">
              <div className="leader-card__spotlight">
                <div className="leader-avatar leader-avatar--lg">
                  <img
                    className={teamLeads[1].imageClassName}
                    src={teamLeads[1].image}
                    alt={teamLeads[1].name}
                  />
                </div>

                <div className="leader-card__copy leader-card__copy--spotlight">
                  <h3>{teamLeads[1].name}</h3>
                  <p className="leader-role">{teamLeads[1].role}</p>
                </div>
              </div>
            </article>
            </div>

            <div className="leaders-grid leaders-grid--compact">
            {teamLeads.slice(2).map((person) => (
              <article key={person.name} className="leader-card leader-card--compact">
                <div className="leader-avatar leader-avatar--md">
                  <img className={person.imageClassName} src={person.image} alt={person.name} />
                </div>
                <div className="leader-card__copy leader-card__copy--compact">
                  <h3>{person.name}</h3>
                  <p className="leader-role">{person.role}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="slide slide--involvement" id="involvement" data-step-section="true" data-step-adjust="76">
          <div className="slide-heading">
            <h2>Як студенти потрапляють у команду</h2>
            <p>
              Аврора активно співпрацює з університетами, проводить відкриті зустрічі, освітні
              програми, практики та стажування.
            </p>
            <p>
              Частина студентів знайомиться з командою через школи та хакатони, частина заходить у
              взаємодію після публічних анонсів програм і подій, рекомендації.
            </p>
          </div>

          <div className="quote-stack quote-stack--split">
            <div className="quote-stack quote-stack__column">
              {involvementQuotes.slice(0, 2).map((quote) => (
                <article key={quote} className="quote-card">
                  <blockquote className="quote-block">
                    <span className="quote-block__icon" aria-hidden="true">
                      <Quote size={18} />
                    </span>
                    <span>{quote}</span>
                  </blockquote>
                </article>
              ))}
            </div>

            <article className="quote-card">
              <blockquote className="quote-block">
                <span className="quote-block__icon" aria-hidden="true">
                  <Quote size={18} />
                </span>
                <span>{involvementQuotes[2]}</span>
              </blockquote>
            </article>

            <article className="quote-card">
              <blockquote className="quote-block">
                <span className="quote-block__icon" aria-hidden="true">
                  <Quote size={18} />
                </span>
                <span>{involvementQuotes[3]}</span>
              </blockquote>
            </article>
          </div>

          <div className="involvement-grid">
            {involvementPaths.map((item) => (
              <article key={item.title} className="showcase-card">
                <div className="showcase-card__image">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      objectPosition: item.imagePosition ?? "center center",
                      transform: item.imageScale ? `scale(${item.imageScale})` : undefined,
                    }}
                  />
                </div>
                <div className="showcase-card__copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Детальніше
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="involvement-gallery">
            <img src={involvementKmbs} alt="Студенти на форумі KMBS з командою Аврора" />
            <img src={involvementRobotics1} alt="Студенти з командою Аврора" />
            <img src={involvementRobotics2} alt="Студенти-стажери Аврора" />
          </div>
        </section>

        <section className="slide slide--students" data-step-section="true" data-step-adjust="110">
          <div className="slide-heading">
            <h2>Студенти в команді R&amp;D</h2>
          </div>

          <div className="students-intro">
            <p>
              У команді R&amp;D вже працюють студенти, які з перших місяців навчання занурюються в реальні задачі бізнесу, аналітики та технологічних продуктів.
            </p>
            <blockquote className="quote-block">
              <span className="quote-block__icon" aria-hidden="true">
                <Quote size={18} />
              </span>
              <span>Тут студентів не відокремлюють від команди: вони долучаються до справжніх проєктів, працюють поруч із наставниками й ростуть у середовищі, де результат видно одразу.</span>
            </blockquote>
          </div>

          <div className="student-clusters">
            {studentGroups.map((group) => (
              <article key={group.university} className="student-cluster">
                <div className={`student-cluster__grid student-cluster__grid--${group.students.length}`}>
                  {group.students.map((student) => (
                    <div key={student.name} className="student-profile">
                      <div className="student-profile__photo">
                        <img
                          src={student.image}
                          alt={student.name}
                          style={{ objectPosition: student.imagePosition }}
                        />
                      </div>
                      <div className="student-profile__body">
                        <h3>{student.name}</h3>
                        <p className="student-profile__year">{student.year}</p>
                        <p>{student.track}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={
                    group.students.some((student) => "universityNote" in student)
                      ? `student-cluster__footer student-cluster__footer--${group.students.length}`
                      : "student-cluster__footer"
                  }
                >
                  <span className="student-cluster__footer-main">{group.university}</span>
                  {[
                    ...new Set(
                      group.students
                        .filter((student) => "universityNote" in student)
                        .map((student) => student.universityNote as string),
                    ),
                  ].map((note) => (
                    <span key={note} className="student-profile__university">
                      {note}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="slide slide--projects" id="projects">
          <div className="content-step content-step--projects" data-step-section="true">
            <div className="slide-heading">
              <h2>Проєкти, які розвиває команда</h2>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <article key={project.title} className="project-card">
                  <div className="project-card__image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card__copy">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="metric-box">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="content-step content-step--projects" data-step-section="true" data-step-adjust="28">
            <div className="projects-grid">
              {platformProjects.map((project, index) => (
                <article key={project.title} className="project-card">
                  <div className="project-card__image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-card__copy">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="metric-box">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="slide slide--roles">
          <div className="content-step content-step--roles" data-step-section="true">
            <div className="slide-heading">
              <h2>У яких проєктах беруть участь студенти</h2>
              <p>
                Студенти заходять не в навчальні симуляції, а в реальні продуктові, аналітичні та процесні
                задачі. Нижче і загальні напрями, і живі приклади того, над чим вони вже працюють.
              </p>
            </div>
          </div>

          <div className="content-step content-step--roles" data-step-section="true" data-step-adjust="24">
            <div className="student-stories">
              {studentStoriesLead.map((story) => (
                <article key={story.name} className="student-story">
                  <div className="student-story__person">
                    <div className="student-story__photo">
                      <img
                        src={story.image}
                        alt={story.name}
                        style={{ objectPosition: story.imagePosition }}
                      />
                    </div>
                    <div className="student-story__heading">
                      <h3>{story.name}</h3>
                    </div>
                  </div>

                  <div className="student-story__quotes">
                    <div className="story-quote">
                      <p className="quote-card__label">
                        {"projectsLabel" in story ? story.projectsLabel : "До яких проєктів долучався"}
                      </p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.projects}</span>
                      </blockquote>
                    </div>
                    <div className="story-quote">
                      <p className="quote-card__label">Що вже робить самостійно</p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.ownership}</span>
                      </blockquote>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="content-step content-step--roles" data-step-section="true" data-step-adjust="24">
            <div className="student-stories">
              {studentStoriesMiddle.map((story) => (
                <article key={story.name} className="student-story">
                  <div className="student-story__person">
                    <div className="student-story__photo">
                      <img
                        src={story.image}
                        alt={story.name}
                        style={{ objectPosition: story.imagePosition }}
                      />
                    </div>
                    <div className="student-story__heading">
                      <h3>{story.name}</h3>
                    </div>
                  </div>

                  <div className="student-story__quotes">
                    <div className="story-quote">
                      <p className="quote-card__label">
                        {"projectsLabel" in story ? story.projectsLabel : "До яких проєктів долучався"}
                      </p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.projects}</span>
                      </blockquote>
                    </div>
                    <div className="story-quote">
                      <p className="quote-card__label">Що вже робить самостійно</p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.ownership}</span>
                      </blockquote>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="content-step content-step--roles" data-step-section="true" data-step-adjust="24">
            <div className="student-stories">
              {studentStoriesFinal.map((story) => (
                <article key={story.name} className="student-story">
                  <div className="student-story__person">
                    <div className="student-story__photo">
                      <img
                        src={story.image}
                        alt={story.name}
                        style={{ objectPosition: story.imagePosition }}
                      />
                    </div>
                    <div className="student-story__heading">
                      <h3>{story.name}</h3>
                    </div>
                  </div>

                  <div className="student-story__quotes">
                    <div className="story-quote">
                      <p className="quote-card__label">
                        {"projectsLabel" in story ? story.projectsLabel : "До яких проєктів долучався"}
                      </p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.projects}</span>
                      </blockquote>
                    </div>
                    <div className="story-quote">
                      <p className="quote-card__label">Що вже робить самостійно</p>
                      <blockquote className="quote-block">
                        <span className="quote-block__icon" aria-hidden="true">
                          <Quote size={18} />
                        </span>
                        <span>{story.ownership}</span>
                      </blockquote>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="role-grid">
              {studentRoles.map(({ icon: Icon, title, text }) => (
                <article key={title} className="role-card">
                  <div className="role-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="slide slide--student-advantage" data-step-section="true">
          <div className="student-advantage">
            <div className="slide-heading">
              <h2>Чому студенти зараз — це перевага</h2>
              <p>Світ змінився.</p>
            </div>

            <div className="student-advantage__grid">
              <article className="student-advantage__card student-advantage__card--highlight">
                <div className="student-advantage__eyebrow">
                  <Sparkles size={18} />
                  <span>Технології дали можливість</span>
                </div>
                <p className="student-advantage__lead">створювати продукти значно швидше</p>
              </article>

              <article className="student-advantage__card">
                <div className="student-advantage__eyebrow">
                  <BadgeCheck size={18} />
                  <span>І тут студенти мають козир</span>
                </div>
                <ul className="student-advantage__list">
                  <li>швидко адаптуються</li>
                  <li>не бояться AI</li>
                  <li>мислять інакше</li>
                </ul>
              </article>
            </div>

            <blockquote className="student-advantage__quote">
              <span>“У всіх руки розв’язались, але у студентів — це суперсила”</span>
            </blockquote>

            <article className="student-advantage__card student-advantage__card--summary">
              <div className="student-advantage__eyebrow">
                <Rocket size={18} />
                <span>Коротко</span>
              </div>
              <p className="student-advantage__summary-title">Студенти можуть:</p>
              <div className="student-advantage__chips">
                <span>швидко</span>
                <span>якісно</span>
                <span>з реальним впливом</span>
              </div>
            </article>
          </div>
        </section>

        <section className="slide slide--benefits" id="benefits" data-step-section="true">
          <div className="slide-heading">
            <h2>Чому працювати в Аврорі класно</h2>
          </div>

          <div className="benefits-layout">
            <article className="benefits-intro">
              <div className="benefits-intro__photo">
                <img src={leanFestTeam} alt="Команда на Aurora Lean Fest 2026" />
              </div>
              <h3>Середовище, де можна швидко вирости</h3>
              <p>
                Аврора для студентів може бути не лише першим досвідом, а й стартом у сильній продуктовій,
                аналітичній та технологічній команді.
              </p>
            </article>

            <div className="benefits-grid">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="benefit-row">
                  <Icon size={18} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="slide slide--join" data-step-section="true">
          <div className="join-grid">
            <div className="slide-heading join-heading">
              <h2>Нові можливості</h2>
            </div>

            <article className="join-card">
              <div className="join-card__copy">
                <p className="join-card__lead">В найближчий час ми додаємо:</p>
                <div className="join-card__chips">
                  <div className="join-card__chip">
                    <Rocket size={18} />
                    <span>фізичні продукти</span>
                  </div>
                  <div className="join-card__chip">
                    <Sparkles size={18} />
                    <span>hardware + software</span>
                  </div>
                </div>

                <p className="join-card__lead">Підключаємо:</p>
                <div className="join-card__chips">
                  <div className="join-card__chip">
                    <Users size={18} />
                    <span>команди з робототехніки</span>
                  </div>
                  <div className="join-card__chip">
                    <GraduationCap size={18} />
                    <span>університетські команди</span>
                  </div>
                </div>

                <p className="join-card__note">
                  Студенти можуть працювати не тільки з кодом, а й з реальними пристроями.
                </p>
              </div>
            </article>

            <article className="join-card">
              <div className="join-card__copy">
                <p className="join-card__lead">Внутрішні продукти готові запускати вне компанії.</p>
                <p className="join-card__text">Студенти можуть працювати над продуктами, які:</p>
                <div className="join-card__chips">
                  <div className="join-card__chip">
                    <BriefcaseBusiness size={18} />
                    <span>продаються</span>
                  </div>
                  <div className="join-card__chip">
                    <TrendingUp size={18} />
                    <span>масштабуються</span>
                  </div>
                  <div className="join-card__chip">
                    <MapPinned size={18} />
                    <span>виходять за межі компанії</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="slide slide--pathway" data-step-section="true" data-step-adjust="-28">
          <div className="pathway-copy">
            <div className="slide-heading">
              <h2>Як потрапити до нас в команду? - Aurora Students</h2>
              <p>Шанс отримати реальний досвід роботи у великій компанії.</p>
            </div>

            <div className="pathway-intro-row">
              <p className="pathway-story__lead">
                Ти студентка або випускник? Тоді саме час приєднатися до Aurora Students.
              </p>

              <div className="pathway-rewards__title pathway-rewards__title--aside">
                Найуспішніші учасники отримають:
              </div>
            </div>

            <div className="pathway-flow">
              <div className="pathway-chips">
                {pathwaySteps.map(({ icon: Icon, text }) => (
                  <article key={text} className="pathway-chip">
                    <Icon size={18} />
                    <span>{text}</span>
                  </article>
                ))}
              </div>

              <div className="pathway-rewards pathway-rewards--aside">
                <div className="pathway-rewards__list">
                  {pathwayRewards.map(({ icon: Icon, label, text }) => (
                    <article key={text} className="pathway-reward">
                      <span>
                        <strong>{label}</strong> {text}
                      </span>
                      <Icon size={18} />
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="pathway-panels">
              <article className="pathway-panel">
                <div className="pathway-panel__header">Що ти отримаєш?</div>
                <ul className="pathway-panel__list">
                  {pathwayBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="pathway-panel">
                <div className="pathway-panel__header">Це для тебе, якщо ти:</div>
                <ul className="pathway-panel__list">
                  {pathwayAudience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="pathway-panel pathway-panel--qr">
                <div className="pathway-panel__header">Як потрапити:</div>
                <div className="pathway-qr__frame pathway-qr__frame--full">
                  <img
                    src={auroraStudentsQrPoster}
                    alt="Як потрапити до Aurora Students"
                    className="pathway-qr__code pathway-qr__code--full"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

      </main>

      {/* Непомітна точка в лівому нижньому куті — клік розкриває/ховає блок «Знайомство».
          Для сторонніх майже невидима; активна — підсвічується червоним. */}
      <button
        type="button"
        onClick={toggleIntro}
        aria-label="Перемкнути блок знайомства"
        title={showIntro ? "Сховати блок знайомства" : "Показати блок знайомства"}
        style={{
          position: "fixed",
          left: 8,
          bottom: 8,
          width: 16,
          height: 16,
          padding: 0,
          border: "none",
          borderRadius: "50%",
          background: showIntro ? "#E2001A" : "#181818",
          opacity: showIntro ? 0.55 : 0.06,
          cursor: "pointer",
          zIndex: 9999,
          transition: "opacity .2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.5";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = showIntro ? "0.55" : "0.06";
        }}
      />
    </div>
  );
};

export default Index;
