import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { FeaturesSection } from "@/content/types";
export default function Features({ title, items }: FeaturesSection) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="rounded-2xl shadow-sm">
              <CardContent className="p-6 flex gap-4">
                <Check className="text-green-500" />
                <p>{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
