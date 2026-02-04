"use client";

import { GallerySection } from "@/content/types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery(
  { images }: GallerySection,
  autoplayDelay: number = 3000,
) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [images.length, autoplayDelay, index]);

  function prevImage() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }
  return (
    <div className=" overflow-hidden transition-opacity duration-200 h-150 flex justify-center mx-auto w-[80vw]">
      <button className={` ml-0 px-2 transition `} onClick={prevImage}>
        <ChevronLeft size={48} />
      </button>
      <div className="relative w-full overflow-hidden">
        <Image
          src={images[index].source}
          alt={images[index].altText}
          fill
          className="object-contain"
        />
      </div>
      <button className={`mr-0 px-2 transition `} onClick={nextImage}>
        <ChevronRight size={48} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-transform duration-200">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
