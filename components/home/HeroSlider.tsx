"use client";
import Image from "next/image";
import hero1 from "@/public/hero-1.webp";
import hero2 from "@/public/hero-2.webp";
import hero3 from "@/public/hero-3.webp";
import hero4 from "@/public/hero-4.webp";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  {
    id: 1,
    image: hero1,
  },
  {
    id: 2,
    image: hero2,
  },
  {
    id: 3,
    image: hero3,
  },
  {
    id: 4,
    image: hero4,
  },
];

const HeroSlider = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    const changeImage = () => {
      setImgIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(changeImage, 5500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute left-0 top-0 min-h-[600px] sm:h-[750px] lg:h-[900px] w-full overflow-hidden">
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.image}
          alt={`Hero image ${img.id}`}
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
          fill
          unoptimized
          placeholder="blur"
          className={cn(
            "object-cover transition-opacity duration-500 ease-in",
            img.id === imgIndex + 1 ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
};
export default HeroSlider;
