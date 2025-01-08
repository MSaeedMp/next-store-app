"use client";

import EmptyList from "../global/EmptyList";
import { fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorContainer from "../global/ErrorContainer";
import * as React from "react";
import { Product } from "@prisma/client";
import ProductComposition from "./ProductComposition";
import { cn } from "@/lib/utils";
import LoadingProductsGrid from "../global/LoadingProductsGrid";

const ProductCompositionContainer = ({
  category,
  categoryKey,
  className,
}: {
  category: "featured" | "all";
  categoryKey: string;
  className?: string;
}) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryFn: () => fetchProducts(category),
    queryKey: [{ categoryKey }],
  });

  if (isLoading) return <LoadingProductsGrid className="mb-10" />;
  if (error instanceof Error) return <ErrorContainer />;
  if (!products || products.length === 0) return <EmptyList />;

  return (
    <section
      className={cn(
        "grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-4 gap-x-2 -mx-2",
        className
      )}
    >
      <ProductComposition products={products.slice(0, 4)} />
      <ProductComposition products={products.slice(0, 4)} />
      <ProductComposition
        className="hidden lg:grid"
        products={products.slice(0, 4)}
      />
    </section>
  );
};
export default ProductCompositionContainer;
