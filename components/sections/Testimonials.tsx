import { TestimonialsSection } from "@/content/types";
import TestimonialCard from "../TestimonialCard";

export default function Testimonials({ title, items }: TestimonialsSection) {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="section-header mb-3">Opinie klientów</h2>
        <h3 className="text-3xl font-semibold ">{title}</h3>
        <div className="grid gap-15 md:grid-cols-3 mt-8">
          {items.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
