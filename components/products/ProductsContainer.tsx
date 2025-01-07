"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@prisma/client";
import { Button } from "../ui/button";
import { CiCircleList, CiGrid41 } from "react-icons/ci";
import { Separator } from "../ui/separator";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import ProductsGrid from "./ProductsGrid";
import LoadingProductsGrid from "../global/LoadingProductsGrid";
import ProductsList from "./ProductsList";
import ErrorContainer from "../global/ErrorContainer";
import LoadingProductsList from "../global/LoadingProductsList";

const ProductsContainer = ({
  initialLayout,
  search,
}: {
  initialLayout: string;
  search: string;
}) => {
  const searchParams = useSearchParams();
  const [layout, setLayout] = useState(initialLayout);
  const router = useRouter();

  // Extract current search and layout from URL
  const currentSearch = searchParams.get("search") || search || "";
  const currentLayout = searchParams.get("layout") || initialLayout;

  // Fetch products based on the current search query
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["allProducts", currentSearch], // Include currentSearch in the queryKey
    queryFn: () => fetchProducts("all", currentSearch), // Use the updated search value
  });

  // Update layout state when URL changes
  useEffect(() => {
    if (currentLayout !== layout) {
      setLayout(currentLayout);
    }
  }, [currentLayout, layout]);

  const toggleLayout = (newLayout: string) => {
    if (newLayout !== layout) {
      router.push(
        `?layout=${newLayout}${
          currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ""
        }`
      );
    }
  };

  if (isLoading)
    return layout === "grid" ? (
      <LoadingProductsGrid className="pt-28" />
    ) : (
      <LoadingProductsList className="pt-28" />
    );
  if (error || !products) return <ErrorContainer />;

  const numProducts = products.length;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">
          {numProducts} product{numProducts > 1 && "s"}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => toggleLayout("grid")}
          >
            <CiGrid41 className="w-6 h-6" />
          </Button>
          <Button
            variant={layout === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => toggleLayout("list")}
          >
            <CiCircleList className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <Separator className="mt-4" />
      <div>
        {numProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
