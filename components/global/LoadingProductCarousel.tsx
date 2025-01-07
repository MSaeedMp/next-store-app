import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-96 w-full" />
        <Skeleton className="h-4 w-1/4 mt-4" />
        <Skeleton className="h-4 w-1/5 mt-4" />
        <Skeleton className="h-[1px] w-full mt-4 mb-10" />
        <Skeleton className="h-4 w-1/4 mt-2" />
        <Skeleton className="h-4 w-1/4 mt-2" />
        <Skeleton className="h-4 w-1/2 mt-2" />
        <Skeleton className="h-8 w-full mt-4 mb-2 py-6" />
      </CardContent>
    </Card>
  );
};

const LoadingProductCarousel = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full", className)}>
      <Carousel className="w-[calc(100%-4rem)] mx-auto my-10">
        <CarouselContent className="-ml-1">
          <CarouselItem className="max-w-[380px]">
            <div className="p-1">
              <LoadingProduct />
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[380px]">
            <div className="p-1">
              <LoadingProduct />
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[380px]">
            <div className="p-1">
              <LoadingProduct />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-600 sm:h-16 h-14 sm:w-10" />
        <CarouselNext className="right-0 rounded-sm p-4 bg-stone-50 shadow-md border-stone-600 sm:h-16 h-14 sm:w-10" />
      </Carousel>
    </div>
  );
};

export default LoadingProductCarousel;
