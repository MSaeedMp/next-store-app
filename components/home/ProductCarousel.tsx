"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@prisma/client";
import ProductCard from "../products/ProductCard";

const ProductCarousel = ({ products }: { products: Product[] }) => {
  return (
    <Carousel className="sm:w-[calc(100%-4rem)] mx-auto my-10">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="w-[280px] sm:w-[350px] sm:p-0 basis-auto">
            <div className="sm:px-1 px-0">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-300 sm:h-10 h-8 sm:w-10" />
      <CarouselNext className="right-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-300 sm:h-10 h-8 sm:w-10" />
    </Carousel>
  );
};
export default ProductCarousel;
