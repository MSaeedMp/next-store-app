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
import ProductCard from "../products/ProductCartGridItem";

const ProductCarousel = ({ products }: { products: Product[] }) => {
  return (
    <Carousel className="sm:w-[calc(100%-4rem)] mx-auto my-10">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="sm:max-w-[380px] p-0 sm:p-0">
            <div className="p-1">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-600 sm:h-16 h-14 sm:w-10" />
      <CarouselNext className="right-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-600 sm:h-16 h-14 sm:w-10" />
    </Carousel>
  );
};
export default ProductCarousel;
