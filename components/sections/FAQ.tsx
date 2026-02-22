"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSection } from "@/content/types";

export function FAQ({ title, items }: FAQSection) {
  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 w-[80%]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-header mb-3">faq</h2>
          <h3 className="text-3xl font-semibold text-center">{title}</h3>
        </div>
        <Accordion type="single" collapsible className="mt-12">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
