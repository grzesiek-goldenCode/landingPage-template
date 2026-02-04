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
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>

        <Accordion type="single" collapsible className="mt-12">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
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
