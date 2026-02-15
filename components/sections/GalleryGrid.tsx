"use client";

import { GallerySection } from "@/content/types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import GalleryGridItem from "../GalleryIGridItem";

// ToDo
// Automatyczne przesuwanie obrazkow
// opisy do obrazkow z pliku z testami
// przekazywanie danych do komponentu gallerygriditem jako obiekt

export default function GalleryGrid(
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
    <div
      id="gallery"
      className="relative  transition-opacity duration-200 flex flex-col justify-center mx-auto mt-10  mb-20 pb-10 w-[80vw]"
    >
      <div className="flex flex-col p-2 py-10 mt-5">
        <h2 className="text-xl text-blue-500">GALERIA PROJEKTÓW</h2>
        <h3 className="text-4xl ">Nasze Realizacje Premium</h3>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <GalleryGridItem
          source={images[0].source}
          altText={images[0].altText}
        />
        <GalleryGridItem
          source={images[1].source}
          altText={images[1].altText}
        />
        <GalleryGridItem
          source={images[2].source}
          altText={images[2].altText}
        />
      </div>
    </div>
  );
}

//  <button className={` ml-0 px-2 transition `} onClick={prevImage}>
//         <ChevronLeft size={48} />
//       </button>

// 	  <button className={`mr-0 px-2 transition `} onClick={nextImage}>
//         <ChevronRight size={48} />
//       </button>

// 	   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-transform duration-200">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-2 h-2 rounded-full transition ${
//               i === index ? "bg-white w-6" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
