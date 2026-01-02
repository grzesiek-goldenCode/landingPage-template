import { LandingSection } from "@/content/types";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

import { getContent } from "@/lib/i18n";
import Testimonials from "@/components/sections/Testimonials";

function renderSection(section: LandingSection, index: number) {
  switch (section.type) {
    case "hero":
      return <Hero key={index} {...section} />;
    case "features":
      return <Features key={index} {...section} />;
    case "testimonials":
      return <Testimonials key={index} {...section} />;

    case "cta":
      return <CTA key={index} {...section} />;
    default:
      return null;
  }
}

export default function Home({
  searchParams,
}: {
  searchParams: { lang?: "pl" | "en" };
}) {
  const content = getContent(searchParams.lang ?? "pl");

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {content.sections.map((section, index) => renderSection(section, index))}
    </main>
  );
}
