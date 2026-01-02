import { LandingContent } from "./types";

export const en: LandingContent = {
  sections: [
    {
      type: "hero",
      title: "Simple langing page for your buisness",
      subtitle: "Fast, conversion-focused website for modern companies",
      ctaPrimary: {
        label: "Free quote",
        href: "",
      },
      ctaSecondary: { label: "View demo", href: "" },
    },
    {
      type: "features",
      title: "Why this?",
      items: [
        {
          title: "Responsive design",
          description:
            "Dbamy o to aby strona była atrakcyjna na każdym ekranie",
        },
        {
          title: "Fast loading",
          description: "NextJS z użyciem SSR jest szybkim frameworkiem",
        },
        {
          title: "SEO ready",
          description: "NextJS jest nastawiony na optymalne SEO",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready for your new website?",
      subtitle: "Get in touch and launch in just a few days",
      cta: { label: "Write to me", href: "" },
    },
  ],
};
