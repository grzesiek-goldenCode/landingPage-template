import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { TestimonialsSection } from "@/content/types";

export default function Testimonials({ title, items }: TestimonialsSection) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{items[0].name}</span>
              <p className="text-sm ">{items[0].role}</p>
              <p className="text-xl text-neutral-600 mb-0 mt-auto">
                {items[0].quote}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{items[1].name}</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{items[2].name}</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
