import FadeIn from "./FadeIn";

const contacts = [
  {
    title: "Телефон",
    value: "+380 00 000 00 00",
    href: "tel:+380000000000",
  },
  {
    title: "Пошта",
    value: "name@avrora.ua",
    href: "mailto:name@avrora.ua",
  },
  {
    title: "Телефон",
    value: "+380 00 000 00 00",
    href: "tel:+380000000000",
  },
  {
    title: "Пошта",
    value: "team@avrora.ua",
    href: "mailto:team@avrora.ua",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-10 sm:px-6 md:px-12 md:py-14 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-accent/40 bg-[linear-gradient(135deg,rgba(255,210,0,0.18),rgba(255,255,255,0.94))] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="section-label mb-4">Контакти</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Назва розділу
            </h2>
            <p className="mt-4 font-body text-sm leading-7 text-muted-foreground sm:text-base">
              Опис. Тут можна залишити телефон і пошту для зв'язку з командою.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contacts.map((contact, index) => (
            <FadeIn key={index} delay={index * 100}>
              <a
                href={contact.href}
                className="block rounded-[1.5rem] border border-black/10 bg-white px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
              >
                <p className="section-label mb-2">{contact.title}</p>
                <p className="font-display text-xl font-semibold text-foreground break-all">
                  {contact.value}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
