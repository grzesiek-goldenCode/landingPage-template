import { LandingSection } from "@/content/types";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { getContent } from "@/lib/i18n";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Gallery from "@/components/sections/Gallery";
import GalleryGrid from "@/components/sections/GalleryGrid";
import About from "@/components/sections/About";

import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";

function renderSection(section: LandingSection, index: number) {
  switch (section.type) {
    case "hero":
      return <Hero key={index} {...section} />;
    case "features":
      return <Features key={index} {...section} />;
    case "services":
      return <Services key={index} {...section} />;
    case "about":
      return <About key={index} {...section} />;
    case "whyus":
      return <WhyUs key={index} {...section} />;
    case "gallery":
      return <GalleryGrid key={index} {...section} />;
    case "testimonials":
      return <Testimonials key={index} {...section} />;
    case "faq":
      return <FAQ key={index} {...section} />;
    case "contact":
      return <Contact key={index} {...section} />;

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
    <div className=" bg-(--color-main) text-neutral-900">
      {content.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}
