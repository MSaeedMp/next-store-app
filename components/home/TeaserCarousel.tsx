"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import teaser1 from "@/public/teaser-01.webp";
import teaser2 from "@/public/teaser-02.webp";
import teaser3 from "@/public/teaser-03.webp";
import teaser4 from "@/public/teaser-04.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const images = [
  {
    image: teaser1,
    id: 1,
    motto: "Next-Level Shopping.",
  },
  {
    image: teaser2,
    id: 2,
    motto: "Live Better with us.",
  },
  {
    image: teaser3,
    id: 3,
    motto: "Your are Just a Click Away.",
  },
  {
    image: teaser4,
    id: 4,
    motto: "Style Meets Innovation.",
  },
];

const TeaserCarousel = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="sm:-mx-6 -mx-4 lg:-mx-8 my-20"
      // onMouseEnter={() => plugin.current.stop()}
      // onMouseLeave={() => plugin.current.play()}
      opts={{ loop: true }}
    >
      <CarouselContent className="">
        {images.map((img) => (
          <CarouselItem className="" key={img.id}>
            <div className="relative h-[550px]">
              <Image
                src={img.image}
                alt={`Teaser image ${img.id}`}
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                fill
                quality={60}
                placeholder="blur"
                unoptimized
                className={"object-cover object-center"}
              />
              <h2
                className="text-5xl sm:text-6xl md:text-7xl max-w-[250px] sm:max-w-[400px] text-stone-200 font-extrabold absolute top-7 sm:top-10 sm:left-12 md:left-14 left-6 leading-[1.2] tracking-wide"
                style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
              >
                {img.motto}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
      <CarouselDots className="mt-5" />
    </Carousel>
  );
};
export default TeaserCarousel;
