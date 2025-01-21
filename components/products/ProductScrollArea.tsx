"use server";
import {
  fetchAllProducts,
  fetchBestSellerProdcuts,
  fetchFeaturedProducts,
  fetchNewProducts,
  fetchRecommendedProducts,
} from "@/actions/action-product";
import ProductCard from "./ProductCard";
import { Product } from "@prisma/client";
import EmptyScrollArea from "../home/EmptyScrollArea";

const ProductScrollArea = async ({ category }: { category: string }) => {
  let products: Product[] = [];

  switch (category) {
    case "all":
      products = await fetchAllProducts();
      break;
    case "featured":
      products = await fetchFeaturedProducts();
      break;
    case "new":
      products = await fetchNewProducts();
      break;
    case "bestSeller":
      products = await fetchBestSellerProdcuts();
      break;
    case "recommended":
      products = await fetchRecommendedProducts();
      break;
    default:
      products = [];
  }

  if (products.length === 0) return <EmptyScrollArea />;

  return (
    <div className="flex w-max space-x-2 sm:space-x-4 bg-white py-6 sm:px-6">
      {products.map((product) => (
        <div key={product.id} className="w-[220px] sm:w-[300px] lg:w-[320px]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
export default ProductScrollArea;
