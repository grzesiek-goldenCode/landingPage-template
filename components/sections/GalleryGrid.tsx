"use client";

import { GallerySection } from "@/content/types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid(
  { images }: GallerySection,
  autoplayDelay: number = 3000,
) {
  const [index, setIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src.source;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true); // Kontynuuj mimo błędu
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [images.length, autoplayDelay, index]);

  const getImageIndex = (offset: number) => {
    return (index + offset) % images.length;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    }),
  };
  return (
    <div
      id="gallery"
      className="relative flex flex-col justify-center mx-auto mt-10  mb-20 pb-10 w-[80vw]"
    >
      <div className="flex flex-col p-2 py-10 mt-5">
        <h2 className="section-header">GALERIA PROJEKTÓW</h2>
        <h3 className="text-4xl ">Nasze Realizacje Premium</h3>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {[0, 1, 2].map((offset, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg relative bg-gray-200"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={getImageIndex(offset)}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  filter: { duration: 0.25 },
                  delay: i * 0.06, // Staggered
                }}
                className="absolute inset-0"
              >
                <Image
                  src={images[getImageIndex(offset)].source}
                  alt={`Slide ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={75}
                  priority={i === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

// {[0, 1, 2].map((offset, i) => (
//           <motion.div
//             key={`${index}-${offset}`}
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{
//               duration: 0.5,
//               delay: i * 0.15,
//               ease: "easeOut",
//             }}
//             className="aspect-square overflow-hidden rounded-lg"
//           >
//             <Image
//               src={images[getImageIndex(offset)].source}
//               alt={images[i + 1].altText}
//               fill
//               className=" fill animate-slide-in"
//             />
//           </motion.div>
//         ))}

//  <GalleryGridItem imageData={images[getImageIndex(1)]} />
//         <GalleryGridItem imageData={images[getImageIndex(2)]} />
//         <GalleryGridItem imageData={images[getImageIndex(3)]} />
