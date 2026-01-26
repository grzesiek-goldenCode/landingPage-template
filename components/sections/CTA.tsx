import { Button } from "@/components/ui/button";
import { CTASection } from "@/content/types";
import Link from "next/link";
export default function CTA({ title, subtitle, cta }: CTASection) {
  return (
    <section className="py-24 bg-neutral-900 text-white text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300">{subtitle}</p>
      <div className="mt-8">
        <Button size="lg" variant="secondary">
          <Link href={"/contactform/"}>{cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}
