"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/content/types";
import Image from "next/image";
import { AIChat } from "./AiChat";

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
    <section id="hero" className=" relative md:h-[75vh] md:pb-36 md:mb-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/heroImage.jpg"}
          fill
          alt="Bathroom photo"
          className="object-cover"
        />
      </div>
      <div
        className="relative container mx-auto px-6 pt-24 
       grid gap-12 md:grid-cols-2 items-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
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
      </div>
    </section>
  );
}
