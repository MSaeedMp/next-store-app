import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import ProductCardTiny from "./ProductCardTiny";
import EmptyCompositionGrid from "../global/EmptyCompositionGrid";
import { fetchRandomProducts } from "@/actions/action-product";

const ProductCompositionGrid = async ({
  className,
}: {
  className?: string;
}) => {
  const products: Product[] = await fetchRandomProducts(4);
  if (products.length === 0) return <EmptyCompositionGrid />;
  return (
    <div
      className={cn(
        "grid grid-cols-2 grid-rows-2 lg:gap-4 gap-2 gap-y-4 bg-white shadow-lg lg:p-4 p-2",
        className
      )}
    >
      {products.map((product) => (
        <ProductCardTiny key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductCompositionGrid;
