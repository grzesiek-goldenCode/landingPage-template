import { LandingContent } from "./types";
import {
  MdOutlinePhotoSizeSelectLarge,
  MdBathtub,
  MdHouse,
  MdArrowForward,
} from "react-icons/md";

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
      type: "about",
      title: "Pasja, Precyzja i Trwałość w Każdym Detalu",
      description: `Specjalizuję się w profesjonalnym układaniu płytek od ponad
              dekady. Moje podejście łączy rzemieślniczą tradycję z nowoczesnymi
              technologiami wykończenia wnętrz. Każde zlecenie traktuję
              indywidualnie, dbając o estetykę, funkcjonalność oraz czystość na
              każdym etapie prac.`,
    },
    {
      type: "services",
      mainHeader:
        "Oferujemy kompleksowe rozwiązania dla domów, mieszkań oraz obiektów komercyjnych.",
      cards: [
        {
          title: "Płytki Wielkoformatowe",
          description:
            "Precyzyjny montaż spieków kwarcowych i płyt XXL (nawet 120x240cm) z zachowaniem najwyższych standardów bezpieczeństwa i estetyki.",
          icon: MdOutlinePhotoSizeSelectLarge,
        },
        {
          title: "Łazienki Kompleksowo",
          description:
            "Od hydroizolacji po montaż armatury. Tworzymy przestrzenie, któresą nie tylko piękne, ale i całkowicie wodoszczelne na lata.",
          icon: MdBathtub,
        },
        {
          title: "Kuchnie i Salony",
          description:
            "Układanie gresu, terakoty i mozaiki na dużych powierzchniach.Idealnie równe spoiny i wzory dopasowane do charakteru wnętrza.",
          icon: MdHouse,
        },
      ],
    },

    {
      type: "whyus",
      header: "Standard wykonania który przewyższa oczekiwania",
      content: [
        {
          title: "Precyzja lasera",
          description:
            "Używamy najwyższej klasy poziomnic laserowych i narzędzi tnących aby zagwarantować idealne linie i płaszczyzny",
        },
        {
          title: "Czystość i Porządek",
          description:
            "Pracujemy z systemami odsysania pyłu i zabezpieczamy resztę mieszkania podczas remontu",
        },
        {
          title: "Doradztwo Techniczne",
          description:
            "Pomagamy w doborze klejów, fug i systemów hydroizolacji dopasowanych do konkretnych płytek",
        },
      ],
    },
    {
      type: "gallery",
      images: [
        {
          source: "/image1.jpg",
          altText: "Mobile phone image",
          title: "Warszawa",
          description: "Łazienka w spiekach kwarcowych",
        },
        {
          source: "/image2.jpg",
          altText: "Computer mouse image",
          title: "Kraków",
          description: "Kuchnia w stylu Loft",
        },
        { source: "/image3.jpg", altText: "Game Joystick image" },
        { source: "/image4.jpg", altText: "Laptop image" },
        { source: "/lazienka1.jpg", altText: "Laptop image" },
        { source: "/lazienka2.jpg", altText: "Laptop image" },
        { source: "/lazienka3.jpg", altText: "Laptop image" },
      ],
    },
    {
      type: "testimonials",
      title: "Co mówią o naszej pracy",
      items: [
        {
          name: "Marek Jankowski",

          role: "Właściciel Domu w Ząbkach",
          quote:
            "Pan Tomasz to prawdziwy profesjonalista. Płytki w salonie ułożone idealnie, nawet przy bardzo trudnym wzorze. Bardzo czysty i kulturalny fachowiec.",
        },
        {
          name: "Anna Kowalska",
          role: "Mieszkanie na Mokotowie",
          quote:
            "Rewelacyjny kontakt i świetne doradztwo. Dzięki podpowiedziom Pana Tomasza uniknęliśmy błędów w projekcie łazienki. Polecam każdemu!",
        },
        {
          name: "Robert Wiśniewski",
          role: "Apartamenty przy Wilanowie",
          quote:
            "Precyzja wykonania spoin i szlifów pod kątem 45 stopni robi wrażenie. Termin dotrzymany co do dnia. Bardzo polecam.",
        },
      ],
    },
    {
      type: "faq",
      title: "Najczęściej zadawane pytania",
      items: [
        {
          question: "Ile kosztuje landing page?",
          answer:
            "Cena zależy od zakresu projektu. Prosty landing zaczyna się od X zł.",
        },
        {
          question: "Jak długo trwa realizacja?",
          answer: "Standardowy landing page realizuję w 7-14 dni roboczych.",
        },
        {
          question: "Czy mogę później edytować treści?",
          answer:
            "Tak, strona jest przygotowana tak, aby łatwo było zmieniać treści.",
        },
      ],
    },
    {
      type: "contact",
      title: "Golden Desing",
      adress: {
        city: "Krosno",
        postalCode: "38-400",
        street: "Bursaki 29a",
        googleMapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.179618983025!2d21.773627053026235!3d49.691847629569594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4f4d7b874691%3A0x1d9e0f106a7a6e17!2sBursaki%2029a%2C%2038-400%20Krosno!5e0!3m2!1spl!2spl!4v1769159781672!5m2!1spl!2spl",
      },
      contactData: {
        postion: "Desing & Develop",
        name: "Grzesiek",
        phone: 123456789,
      },
      msgText: "Napisz do nas!",
    },

    {
      type: "cta",
      title: "Gotowy na nową stronę?",
      subtitle: "Skontaktuj się i postawimy landing w kilka dni",
      cta: { label: "Napisz do mnie", href: "" },
    },
  ],
};

export const cities = ["Korczyna"];
export const services = ["Malowanie ścian", "Szpachlowanie"];

export const contactEmail = "grzesiekcode@gmail.com";
