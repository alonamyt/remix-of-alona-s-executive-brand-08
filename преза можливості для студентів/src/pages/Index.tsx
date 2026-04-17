import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
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
} from "lucide-react";
import liudmylaPerekhrest from "@/assets/students/liudmyla-perekhrest.png";
import boryslavKrakovych from "@/assets/students/boryslav-krakovych.png";
import kyryloMedar from "@/assets/students/kyrylo-medar.png";
import stanislavVoronin from "@/assets/students/stanislav-voronin.png";
import ivanPopov from "@/assets/students/ivan-popov.jpg";
import leanFestTeam from "@/assets/lean-fest-team.jpg";
import mlWeek2025 from "@/assets/students-paths/ml-week-2025.jpeg";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const teamLeads = [
  {
    name: "Олександр Войналович",
    role: "R&D директор",
    image: publicAsset("student-opportunities/voinalovych.jpg"),
  },
  {
    name: "Альона",
    role: "Заступник директора департаменту по розвитку продуктів",
    image: publicAsset("student-opportunities/mytrofanova-team.png"),
  },
  {
    name: "Олександр",
    role: "Відділ досліджень і розробок",
    image: publicAsset("student-opportunities/cherednyk.png"),
  },
  {
    name: "Ірина",
    role: "Відділ бізнес-аналізу",
    image: publicAsset("student-opportunities/borodai-balanced.jpg"),
    imageClassName: "leader-avatar__image--borodai",
  },
  {
    name: "Євгенія",
    role: "Офіс управління проєктами та процесами",
    image: publicAsset("student-opportunities/kucherenko.jpg"),
  },
  {
    name: "Олександр",
    role: "AVRORA AI Lab",
    image: publicAsset("student-opportunities/sabaniuk.png"),
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
];

const involvementQuotes = [
  "Хакатони з Data Science і зимові школи з АІ, де ми вперше й побачились з Олександром Сабанюком.",
  "Мені промо літньої школи поширив знайомий, я почитала, зацікавилась.",
  "Прийшов на роботу після комунікації з своїм зав. кафедри: якось при неформальній розмові сказав, що шукаю роботу, то він потім повідомив мене, що Аврора шукає студентів.",
];
const involvementPaths = [
  {
    title: "Хакатони та AI-школи",
    text: "Знайомство з командою часто починається з Data Science хакатонів, зимових і літніх шкіл з AI та ML. Саме там видно ініціативність, рівень підготовки й те, як людина мислить у реальних задачах.",
    image: mlWeek2025,
    href: "https://pma.fpm.kpi.ua/uk/news/ml-week-2025-summary",
    source: "ML Week 2025 / КПІ",
  },
  {
    title: "Літні програми та Aurora Students",
    text: "Частина студентів приходить через промо освітніх програм, читає про можливості, подається на Aurora Students і входить у взаємодію з командою ще до повноцінної роботи.",
    image: publicAsset("student-opportunities/rd-students-team.jpg"),
    href: "https://robota.avrora.ua/avrora-dlia-studentiv-ta-molodi",
    source: "Аврора для студентів та молоді",
  },
  {
    title: "Рекомендації кафедр",
    text: "Викладачі, завідувачі кафедр і університетські спільноти рекомендують студентів, коли бачать сильну мотивацію, готовність працювати й інтерес до реальних бізнес-задач.",
    image: publicAsset("student-opportunities/community-students-rd.jpg"),
    href: "https://robota.avrora.ua/aurora-students-sered-peremozciv-sustainable-impact-award-2025",
    source: "Aurora Students / студентська спільнота",
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
        track: "Факультет прикладної математики",
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
      "Я долучався до проєктів розробки AI-рішень real-time детекції з камер відеоспостереження (CCTV).",
    ownership:
      "Є задачі, які я можу виконувати самостійно, зокрема базову розробку, аналіз і окремі частини проєкту.",
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
];

const projects = [
  {
    title: "Система підрахунку зовнішньої конверсії",
    text: "Для ритейлу: від відеоспостереження до зростання продажів. Аналізує зовнішній трафік та конверсію у відвідування і покупки на базі відеоаналітики та алгоритмів машинного навчання. Це інструмент виміру впливу реклами, локації і потоків на реальну конверсію. Дає зниження неефективних витрат, збільшення продажів через оптимізацію маркетингу та прозору аналітику ефективності точок.",
    image: publicAsset("student-opportunities/project-conversion-day.png"),
    metric: "31.05%",
    metricLabel: "видима конверсія у воронці",
  },
  {
    title: "Система детекції автомобілів",
    text: "Рішення для аналізу автомобільного трафіку біля локацій. Дає змогу бачити потоки, розуміти динаміку відвідуваності, оцінювати потенціал локацій і доповнювати картину поведінки клієнтів у фізичному ритейлі реальними даними з поля.",
    image: publicAsset("student-opportunities/project-vehicle-day.png"),
    metric: "CV",
    metricLabel: "computer vision для польової аналітики",
  },
  {
    title: "Система контролю генераторів",
    text: "Моніторинг стану, подій та стабільності генераторної інфраструктури. Допомагає швидше реагувати на інциденти, централізовано бачити роботу обладнання та підтримувати безперервність операційної діяльності магазинів.",
    image: publicAsset("student-opportunities/project-generator-day.png"),
    metric: "24/7",
    metricLabel: "контроль критичної інфраструктури",
  },
  {
    title: "Аврора AI Platform",
    text: "Власна AI-платформа й внутрішні інструменти, які команда розвиває як середовище для автоматизації, побудови нових сценаріїв та масштабування продуктів. Це база для майбутніх сервісів, які можуть працювати і всередині компанії, і назовні.",
    image: publicAsset("student-opportunities/project-ai-platform-day.png"),
    metric: "AI",
    metricLabel: "платформа для внутрішніх та зовнішніх сценаріїв",
  },
  {
    title: "Smart Wiki",
    text: "База знань нового покоління, де інформація стає швидко доступною, структурованою та корисною для команд і процесів. Допомагає швидше знаходити відповіді, зменшує втрати часу і покращує якість внутрішньої взаємодії.",
    image: publicAsset("student-opportunities/project-smartwiki-day.png"),
    metric: "Wiki",
    metricLabel: "швидкі знання для команд",
  },
  {
    title: "Розробка під ключ і продуктові сценарії",
    text: "Окремий напрям створення готових рішень і нових операційних сценаріїв на базі внутрішньої експертизи департаменту. Це шлях від дослідження і задачі бізнесу до робочого рішення, яке можна впровадити, виміряти й розвивати далі.",
    image: publicAsset("student-opportunities/project-development-day.png"),
    metric: "R&D",
    metricLabel: "від задачі до готового рішення",
  },
];

const benefits = [
  { icon: BadgeCheck, text: "Офіційне працевлаштування з першого робочого дня." },
  { icon: GraduationCap, text: "Безкоштовні курси і тренінги від корпоративного навчального центру." },
  { icon: ShoppingBag, text: "Знижка 15% на покупки товарів у мережі." },
  { icon: BrainCircuit, text: "Можливість навчатись на зовнішніх платформах із компенсацією вартості." },
  { icon: Sparkles, text: "Можливість вивчати англійську з частковою або повною компенсацією." },
  { icon: TrendingUp, text: "Швидке горизонтальне та вертикальне кар'єрне зростання." },
  { icon: Users, text: "Дружня команда однодумців і сильна корпоративна культура." },
  { icon: HeartHandshake, text: "Благодійні ініціативи, спортивне ком'юніті та середовище підтримки." },
  { icon: ShieldCheck, text: "Безпечне та стабільне середовище для розвитку і роботи." },
  { icon: Gift, text: "Внутрішні програми підтримки й приємні бонуси для співробітників." },
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

const Index = () => {
  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar__brand">
          <img className="brand-logo" src={publicAsset("student-opportunities/department-logo.png")} alt="Лого департаменту R&D" />
          <span>Можливості для студентів у команді Аврора</span>
        </div>

        <nav className="topbar__nav">
          <a href="#hero">Титул</a>
          <a href="#intro">Знайомство</a>
          <a href="#team">Команда</a>
          <a href="#projects">Проєкти</a>
          <a href="#invite">Контакт</a>
        </nav>
      </header>

      <main className="story">
        <section className="slide slide--hero" id="hero">
          <div className="hero-shell">
            <p className="hero-kicker">Презентація для студентів</p>
            <h1>Можливості для студентів у команді R&amp;D Аврора</h1>
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

        <section className="slide slide--intro" id="intro">
          <div className="intro-card">
            <div className="intro-photo">
              <img src={publicAsset("student-opportunities/alona-portrait.jpg")} alt="Альона Митрофанова" />
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

        <section className="slide slide--team" id="team">
          <div className="slide-heading">
            <div className="section-label">Ціль та команда</div>
            <h2>Ціль і команда департаменту інновацій та проєктного управління</h2>
          </div>

          <div className="mission-grid">
            {missionCards.map((card) => (
              <article key={card.title} className={`mission-card mission-card--${card.tone}`}>
                <p className="meta-note">{card.title}</p>
                <p>{card.text}</p>
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
              <strong>7</strong>
              <span>студентів уже працювали в R&amp;D-команді з липня 2025</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>заявок на Aurora Students у 2025</span>
            </div>
          </div>

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
        </section>

        <section className="slide slide--involvement">
          <div className="slide-heading">
            <div className="section-label">Точки залучення</div>
            <h2>Як студенти потрапляють у команду</h2>
            <p>
              Аврора активно співпрацює з університетами, проводить лекції, відкриті зустрічі, освітні
              програми, практики та стажування.
            </p>
            <p>
              Частина студентів знайомиться з командою через школи та хакатони, частина приходить через
              рекомендації викладачів, а хтось заходить у взаємодію після публічних анонсів програм і подій.
            </p>
          </div>

          <div className="quote-stack quote-stack--horizontal">
            {involvementQuotes.map((quote) => (
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

          <div className="involvement-grid">
            {involvementPaths.map((item) => (
              <article key={item.title} className="showcase-card">
                <div className="showcase-card__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="showcase-card__copy">
                  <p className="meta-note">{item.source}</p>
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
        </section>

        <section className="slide slide--students">
          <div className="slide-heading">
            <div className="section-label">Студенти в команді</div>
            <h2>Студенти вже є в команді R&amp;D</h2>
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

                <div className="student-cluster__footer">
                  <span>{group.university}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="slide slide--projects" id="projects">
          <div className="slide-heading">
            <div className="section-label">Наші проєкти</div>
            <h2>Проєкти, які розвиває команда</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card__copy">
                  <p className="meta-note">Проєкт {index + 1}</p>
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
        </section>

        <section className="slide slide--roles">
          <div className="slide-heading">
            <div className="section-label">Ролі студентів</div>
            <h2>У яких проєктах беруть участь студенти</h2>
            <p>
              Студенти заходять не в навчальні симуляції, а в реальні продуктові, аналітичні та процесні
              задачі. Нижче і загальні напрями, і живі приклади того, над чим вони вже працюють.
            </p>
          </div>

          <div className="student-stories">
            {studentProjectStories.map((story) => (
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
                    <p className="quote-card__label">До яких проєктів долучався</p>
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
        </section>

        <section className="slide slide--benefits">
          <div className="slide-heading">
            <div className="section-label">Аврора надає</div>
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

        <section className="slide slide--join">
          <div className="join-grid">
            <div className="join-copy">
              <div className="section-label">Кого ми шукаємо</div>
              <h2>Шукаємо не просто виконавців, а людей зі свіжим мисленням</h2>
              <p>
                Департамент інновацій та проєктного управління шукає людей, яким цікаво впливати на
                реальні бізнес-рішення вже під час навчання.
              </p>
              <p>
                Якщо тобі цікаві AI, data science, computer vision, проєктний менеджмент і продуктові
                задачі з реальним бізнес-ефектом, ця команда може стати сильним стартом.
              </p>
            </div>

            <div className="join-points">
              <div>
                <MapPinned size={18} />
                <span>Реальні бізнес-задачі</span>
              </div>
              <div>
                <BriefcaseBusiness size={18} />
                <span>Повноцінне занурення в команду</span>
              </div>
              <div>
                <Rocket size={18} />
                <span>Швидкий ріст через практику</span>
              </div>
            </div>
          </div>
        </section>

        <section className="slide slide--invite" id="invite">
          <div className="invite-panel">
            <div>
              <div className="section-label section-label--light">Запрошуємо долучитися</div>
              <h2>Якщо цікаво, давай знайомитися</h2>
              <p>Якщо тобі цікаво долучитися до команди, написати або зателефонувати можна напряму.</p>
            </div>

            <div className="invite-actions">
              <a className="button button--primary" href="mailto:a.mytrofanova@avrora.ua">
                Написати на пошту
                <ArrowRight size={18} />
              </a>
              <a className="button button--ghost" href="tel:+380970006104">
                Подзвонити
              </a>
            </div>
          </div>
        </section>

        <section className="slide slide--sources" id="sources">
          <div className="slide-heading">
            <div className="section-label">Джерела</div>
            <h2>Відкриті матеріали, на які спирається сторінка</h2>
          </div>

          <div className="sources-list">
            {sources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                <span>{source.label}</span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
