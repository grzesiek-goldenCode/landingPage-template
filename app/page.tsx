import { LandingSection } from "@/content/types";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { getContent } from "@/lib/i18n";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

function renderSection(section: LandingSection, index: number) {
  switch (section.type) {
    case "hero":
      return <Hero key={index} {...section} />;
    case "features":
      return <Features key={index} {...section} />;
    case "testimonials":
      return <Testimonials key={index} {...section} />;
    case "faq":
      return <FAQ key={index} {...section} />;
    case "contact":
      return <Contact key={index} {...section} />;
    case "cta":
      return <CTA key={index} {...section} />;
    case "contactForm":
      return <ContactForm key={index} />;
    default:
      return null;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { lang?: "pl" | "en" };
}) {
  const params = await searchParams; //without this there is error about awaiting params
  const content = getContent(params.lang ?? "pl");

  return (
    <main className="min-h-screen bg-(--color-main) text-neutral-900">
      {content.sections.map((section, index) => renderSection(section, index))}
    </main>
  );
}
