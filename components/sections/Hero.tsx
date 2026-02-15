"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/content/types";

type HeroProps = {
  heroContent: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroSection) {
  return (
    <section
      className="relative md:h-[75vh] container mx-auto px-6 pt-24 md:pb-36 md:mb-10
       grid gap-12 md:grid-cols-2 items-center"
      id="hero"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-neutral-600">{subtitle}</p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">{ctaPrimary.label}</Button>
          <Button size="lg" variant="outline">
            {ctaSecondary.label}
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 mb-20"
      >
        <div className="h-64 rounded-xl bg-neutral-100 flex items-center justify-center">
          <span className="text-neutral-400">Mockup / screenshot</span>
        </div>
      </motion.div>
    </section>
  );
}
