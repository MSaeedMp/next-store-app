"use client";

import EmptyList from "../global/EmptyList";
import { fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import LoadingContainer from "../global/LoadingProductsGrid";
import { Product } from "@prisma/client";
import ProductCarousel from "./ProductCarousel";
import SectionTitle from "../global/SectionTitle";

const FeaturedProducts = () => {
  // Use React Query's useQuery hook to fetch data
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryFn: () => fetchProducts("featured"),
    queryKey: ["featuredProducts"],
  });

  // Handle loading state
  if (isLoading) return <LoadingContainer className="mb-10"/>;

  // Handle error state
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  // Handle empty state (no products)
  if (!products || products.length === 0) return <EmptyList />;

  // Render products grid if data is available
  return (
    <section>
      {/* Uncomment the Marquee if needed */}
      {/* <Marquee className="sm:-mx-6 -mx-4 lg:-mx-8 bg-stone-950 text-white border-t border-b border-stone-900 font-bold py-1 tracking-wider text-sm">
        Free Shipping on Orders Over €50 | New Arrivals Every Week | Exclusive
        Discounts for Members | Fast & Reliable Delivery | Design Your Space,
        Your Way | 24/7 Customer Support.
      </Marquee> */}

      <SectionTitle className="mt-14">Featured Products</SectionTitle>

      {/* Display the products in a grid */}
      <ProductCarousel products={products} />

    </section>
  );
};

export default FeaturedProducts;
