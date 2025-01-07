"use client";
import * as React from "react";
import { Product } from "@prisma/client";
import ProductCard from "../products/ProductCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef, useEffect, useState } from "react";

const ProductCarousel = ({ products }: { products: Product[] }) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const isRightEnd = scrollPosition >= maxScroll;
  const isLeftEnd = scrollPosition <= 0;

  const updateScrollState = () => {
    if (viewportRef.current) {
      setScrollPosition(viewportRef.current.scrollLeft);
      setMaxScroll(
        viewportRef.current.scrollWidth - viewportRef.current.clientWidth
      );
    }
  };

  const handleLeftScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft -= 280;
      updateScrollState();
    }
  };

  const handleRightScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft += 280;
      updateScrollState();
    }
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      updateScrollState(); // Initial calculation of maxScroll
      viewport.addEventListener("scroll", updateScrollState);
      return () => {
        viewport.removeEventListener("scroll", updateScrollState);
      };
    }
  }, []);

  return (
    <div className="relative">
      {!isLeftEnd && (
        <Button
          size="default"
          onClick={handleLeftScroll}
          variant="outline"
          disabled={isLeftEnd} // Disable when at the start
          className="z-10 w-5 sm:w-10 h-full absolute left-0 top-0 bg-stone-400 hover:bg-stone-500 hover:bg-opacity-30 transition-all duration-300 bg-opacity-10 border-none rounded-lt-sm rounded-lb-s rounded-r-none"
        >
          <MdOutlineKeyboardArrowLeft className="!w-6 !h-6 text-stone-900" />
        </Button>
      )}
      {!isRightEnd && (
        <Button
          size="default"
          onClick={handleRightScroll}
          variant="outline"
          disabled={isRightEnd} // Disable when at the end
          className="z-10 w-5 sm:w-10 h-full absolute right-0 top-0 bg-stone-400 hover:bg-stone-500 hover:bg-opacity-30 transition-all duration-300 bg-opacity-10 border-none rounded-rt-sm rounded-rb-sm rounded-l-none"
        >
          <MdOutlineKeyboardArrowRight className="!w-6 !h-6 text-stone-900" />
        </Button>
      )}
      <ScrollArea
        className="w-full whitespace-nowrap rounded-md"
        viewportRef={viewportRef}
      >
        <div className="flex w-max space-x-2 bg-white py-5">
          {products.map((product) => (
            <div key={product.id} className="w-[280px] sm:w-[350px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-4 flex items-center gap-2"></div>
    </div>
  );
};

export default ProductCarousel;
