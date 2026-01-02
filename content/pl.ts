import { LandingContent } from "./types";

export const pl: LandingContent = {
  sections: [
    {
      type: "hero",
      title: "Prosty landing page dla Twojego biznesu",
      subtitle: "Szybka strona, która konwertuje i wygląda profesionalnie",
      ctaPrimary: {
        label: "Darmowa wycena",
        href: "",
      },
      ctaSecondary: { label: "Zobacz demo", href: "" },
    },
    {
      type: "features",
      title: "Dlaczego ten szablon?",
      items: [
        {
          title: "Responsywny design",
          description:
            "Dbamy o to aby strona była atrakcyjna na każdym ekranie",
        },
        {
          title: "Szybkie ładowanie",
          description: "NextJS z użyciem SSR jest szybkim frameworkiem",
        },
        {
          title: "SEO ready",
          description: "NextJS jest nastawiony na optymalne SEO",
        },
      ],
    },
    {
      type: "testimonials",
      title: "Opinie klientów",
      items: [
        {
          name: "Anna Kowalska",
          role: "Salon beauty",
          quote: "Strona zaczęła realnie sprzedawać.",
        },
        {
          name: "Jan Nowak",
          role: "Hydraulik",
          quote: "Znajdują mnie klienci z wszystkich okolicznych miast!",
        },
        {
          name: "Edward",
          role: "Nauczyciel Angielskiego",
          quote:
            "Szybka i skalowalna strona która dobrze wyszukuje się w Google",
        },
      ],
    },
    {
      type: "cta",
      title: "Gotowy na nową stronę?",
      subtitle: "Skontaktuj się i postawimy landign w kilka dni",
      cta: { label: "Napisz do mnie", href: "" },
    },
  ],
};
