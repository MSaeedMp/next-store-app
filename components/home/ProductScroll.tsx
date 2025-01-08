"use client";

import * as React from "react";
import ProductCard from "../products/ProductCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Product } from "@prisma/client";

const ProductScroll = ({ products }: { products: Product[] }) => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const updateScrollState = useDebouncedCallback(() => {
    if (viewportRef.current) {
      const scrollLeft = viewportRef.current.scrollLeft;
      const maxScrollLeft = viewportRef.current.scrollWidth - viewportRef.current.clientWidth;

      if (scrollPosition !== scrollLeft) setScrollPosition(scrollLeft);
      if (maxScroll !== maxScrollLeft) setMaxScroll(maxScrollLeft);
    }
  }, 100); // Adjusted debounce delay

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      updateScrollState();
      viewport.addEventListener("scroll", updateScrollState, { passive: true });
      return () => {
        viewport.removeEventListener("scroll", updateScrollState);
      };
    }
  }, [updateScrollState]);

  const isRightEnd = scrollPosition >= maxScroll;
  const isLeftEnd = scrollPosition <= 0;

  const handleLeftScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft -= 280;
      updateScrollState(); // Trigger update manually
    }
  };

  const handleRightScroll = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollLeft += 280;
      updateScrollState(); // Trigger update manually
    }
  };

  return (
    <div className="relative">
      {!isLeftEnd && (
        <Button
          size="default"
          onClick={handleLeftScroll}
          variant="outline"
          className="hidden sm:flex z-10 w-5 sm:w-10 h-full absolute left-0 top-0 bg-white hover:bg-stone-50 transition-all duration-300 rounded-none"
        >
          <MdOutlineKeyboardArrowLeft className="!w-6 !h-6 text-stone-900" />
        </Button>
      )}
      {!isRightEnd && (
        <Button
          size="default"
          onClick={handleRightScroll}
          variant="outline"
          className="hidden sm:flex z-10 w-5 sm:w-10 h-full absolute right-0 top-0 bg-white hover:bg-stone-50 transition-all duration-300 border-[1px] rounded-none"
        >
          <MdOutlineKeyboardArrowRight className="!w-6 !h-6 text-stone-900" />
        </Button>
      )}
      <ScrollArea
        className="w-full whitespace-nowrap rounded-none shadow-md"
        viewportRef={viewportRef}
      >
        <div className="flex w-max space-x-2 sm:space-x-4 bg-white py-6 sm:px-6">
          {products.map((product) => (
            <div key={product.id} className="w-[220px] sm:w-[300px] lg:w-[320px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-[6px]"/>
      </ScrollArea>
    </div>
  );
};

export default ProductScroll;
