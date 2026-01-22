"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ✅ every 5 seconds

    return () => clearInterval(interval);
  }, [images.length,setCurrentIndex,currentIndex]);

  if (!images || images.length === 0) {
    return (
      <div className="h-[400px] md:h-[600px] bg-gray-200 flex items-center justify-center">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] md:h-[448px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === currentIndex}
          />
        </div>
      ))}
    </div>
  );
}
