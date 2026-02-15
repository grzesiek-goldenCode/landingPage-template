import { TestimonialsSection } from "@/content/types";
import TestimonialCard from "../TestimonialCard";

export default function Testimonials({ title, items }: TestimonialsSection) {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold ">{title}</h2>
        <div className="grid gap-10 md:grid-cols-3 mt-8">
          {items.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
