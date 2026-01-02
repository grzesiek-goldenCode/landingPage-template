// export type LandingContent = {
//   hero: {
//     title: string;
//     subtitle: string;
//     ctaPrimary: string;
//     ctaSecondary: string;
//   };
//   features: {
//     title: string;
//     cards: string[];
//   };
//   cta: {
//     title: string;
//     subtitle: string;
//     button: string;
//   };
// };

export type Locale = "pl" | "en";
// ===== HERO =====
export type HeroSection = {
  type: "hero";
  title: string;
  subtitle?: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
};

// ===== PROBLEM / SOLUTION =====
export type ProblemSection = {
  type: "problem";
  title: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
};

// ===== FEATURES / BENEFITS =====
export type FeaturesSection = {
  type: "features";
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
    icon?: string; // np. nazwa ikony lucide
  }[];
};

// ===== TESTIMONIALS =====
export type TestimonialsSection = {
  type: "testimonials";
  title: string;
  subtitle?: string;
  items: {
    name: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
    quote: string;
  }[];
};

// ===== PROCESS / HOW IT WORKS =====
export type ProcessSection = {
  type: "process";
  title: string;
  steps: {
    title: string;
    description: string;
  }[];
};

// ===== PRICING =====
export type PricingSection = {
  type: "pricing";
  title: string;
  subtitle?: string;
  plans: {
    name: string;
    price: string; // np. "999 zł" albo "$49"
    description?: string;
    features: string[];
    highlighted?: boolean;
    ctaLabel: string;
  }[];
};

// ===== FAQ =====
export type FAQSection = {
  type: "faq";
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

// ===== LOGOS =====
export type LogosSection = {
  type: "logos";
  title?: string;
  logos: {
    name: string;
    imageUrl: string;
  }[];
};

// ===== FINAL CTA =====
export type CTASection = {
  type: "cta";
  title: string;
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  };
};

// ===== UNION WSZYSTKICH SEKCJI =====
export type LandingSection =
  | HeroSection
  | ProblemSection
  | FeaturesSection
  | TestimonialsSection
  | ProcessSection
  | PricingSection
  | FAQSection
  | LogosSection
  | CTASection;

// ===== CAŁY LANDING =====
export type LandingContent = {
  seo?: {
    title: string;
    description: string;
  };
  sections: LandingSection[];
};
