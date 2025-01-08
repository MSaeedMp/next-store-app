"use client";

import EmptyList from "../global/EmptyList";
import { fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorContainer from "../global/ErrorContainer";
import LoadingProductCarousel from "../global/LoadingProductCarousel";
import * as React from "react";
import { Product } from "@prisma/client";
import ProductScroll from "./ProductScroll";

const ProductScrollArea = ({
  category,
  categoryKey,
}: {
  category: "featured" | "all";
  categoryKey: string;
}) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryFn: () => fetchProducts(category),
    queryKey: [{ categoryKey }],
  });

  if (isLoading) return <LoadingProductCarousel className="mb-10" />;
  if (error instanceof Error) return <ErrorContainer />;
  if (!products || products.length === 0) return <EmptyList />;

  return (
    <section>
      <ProductScroll products={products} />
    </section>
  );
};
export default ProductScrollArea;
