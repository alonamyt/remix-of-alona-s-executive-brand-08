import FadeIn from "./FadeIn";
import achievementsMain from "@/assets/achievements-main.jpg";
import awardGreenJacket from "@/assets/award-green-jacket.jpg";
import teamCelebration from "@/assets/team-celebration.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import conferenceTeam2025 from "@/assets/conference-team-2025.jpg";
import conferenceNetworking from "@/assets/conference-networking.jpg";
import auroraYellowSuit from "@/assets/aurora-yellow-suit.jpg";

const projects = [
  {
    title: "Назва проєкту",
    description: "Опис проєкту. Ми створюємо продукти, що роблять життя кожного легше, зручніше, щасливіше.",
    result: "42%",
    metric: "швидше впровадження",
    photoLabel: "Фото проєкту",
    image: teamCollab,
    imageAlt: "Проєкт 1",
  },
  {
    title: "Назва проєкту",
    description: "Опис проєкту. Сервіс, який спрощує процеси, додає комфорт і допомагає людям отримувати результат без зайвих кроків.",
    result: "120K",
    metric: "користувачів на старті",
    photoLabel: "Фото проєкту",
    image: achievementsMain,
    imageAlt: "Проєкт 2",
  },
  {
    title: "Назва проєкту",
    description: "Опис проєкту. Рішення, яке поєднує технологію, турботу про клієнта та зрозумілий щоденний досвід.",
    result: "18",
    metric: "місяців до окупності",
    photoLabel: "Фото проєкту",
    image: conferenceNetworking,
    imageAlt: "Проєкт 3",
  },
];

const team = [
  {
    role: "Посада",
    track: "Напрямок",
    skills: "Скіли",
    image: awardGreenJacket,
    alt: "Учасник команди 1",
  },
  {
    role: "Посада",
    track: "Напрямок",
    skills: "Скіли",
    image: conferenceTeam2025,
    alt: "Учасник команди 2",
  },
  {
    role: "Посада",
    track: "Напрямок",
    skills: "Скіли",
    image: auroraYellowSuit,
    alt: "Учасник команди 3",
  },
  {
    role: "Посада",
    track: "Напрямок",
    skills: "Скіли",
    image: teamCelebration,
    alt: "Учасник команди 4",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Назва етапу",
    text: "Опис. Ідея з'явилася як відповідь на реальну потребу людей та ринку.",
  },
  {
    year: "2023",
    title: "Назва етапу",
    text: "Опис. Команда зібрала експертизу, перевірила гіпотези та оформила продуктову модель.",
  },
  {
    year: "2025",
    title: "Назва етапу",
    text: "Опис. Рішення показало результат у цифрах, масштабувалося та стало історією успіху.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="navy-section relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={achievementsMain} alt="Background" className="image-editorial object-top opacity-10 grayscale" />
        <div className="absolute inset-0 bg-primary/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,210,0,0.12),transparent_24%)]" />
      </div>

      <div className="relative px-4 py-10 sm:px-6 md:px-12 md:py-14 lg:px-20 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="section-label mb-4 text-accent">Назва розділу</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Проєкти
              </h2>
              <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-primary-foreground/75 sm:text-base">
                Опис. Ми створюємо продукти, що роблять життя кожного легше, зручніше, щасливіше.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 120}>
                <article className="grid gap-6 rounded-[2rem] border border-accent/20 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:p-8">
                  <div className="space-y-3">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="h-[260px] w-full object-cover"
                      />
                    </div>
                    <div className="rounded-[1.25rem] border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-primary-foreground/78">
                      {project.photoLabel}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="section-label mb-3 text-accent">Назва</p>
                      <h3 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <div>
                      <p className="section-label mb-3 text-accent">Опис</p>
                      <p className="font-body text-sm leading-7 text-primary-foreground/75 sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-accent/35 bg-accent/12 p-5">
                        <p className="text-4xl font-extrabold tracking-tight text-accent">{project.result}</p>
                        <p className="mt-2 text-sm text-primary-foreground/75">{project.metric}</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                        <p className="section-label mb-2 text-primary-foreground/50">Результат</p>
                        <p className="text-sm leading-7 text-primary-foreground/75">
                          Опис у цифрах. Тут може бути результат, користь або прогнозований ефект.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div id="team-magic" className="grid gap-8 rounded-[2rem] border border-accent/20 bg-white/[0.04] p-6 backdrop-blur-sm lg:p-8">
            <FadeIn>
              <div className="max-w-2xl">
                <p className="section-label mb-4 text-accent">Назва розділу</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Команда, що створює магію
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {team.map((member, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <article className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 text-center">
                    <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border-2 border-accent/70">
                      <img src={member.image} alt={member.alt} className="h-full w-full object-cover" />
                    </div>
                    <p className="font-display text-xl font-semibold text-primary-foreground">{member.role}</p>
                    <p className="mt-2 text-sm text-primary-foreground/65">{member.track}</p>
                    <p className="mt-3 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent">
                      {member.skills}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div id="history-success" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <div className="rounded-[2rem] border border-accent/20 bg-white/[0.04] p-6 backdrop-blur-sm lg:p-8">
                <p className="section-label mb-4 text-accent">Назва розділу</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  Історія створення і успіху
                </h2>
                <p className="mt-5 font-body text-sm leading-7 text-primary-foreground/75 sm:text-base">
                  Опис. Тут може бути загальна історія про старт, розвиток, важливі етапи та шлях до успіху.
                </p>

                <div className="mt-8 overflow-hidden rounded-[1.5rem]">
                  <img src={teamCelebration} alt="Історія успіху" className="h-[320px] w-full object-cover" />
                </div>
                <div className="mt-3 rounded-[1.25rem] border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-primary-foreground/78">
                  Фото історії
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 120}>
                  <article className="rounded-[1.75rem] border border-accent/20 bg-white/[0.04] p-6 backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{milestone.year}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-primary-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-primary-foreground/75">
                      {milestone.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
