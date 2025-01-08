import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import ProductCardTiny from "./ProductCardTiny";

const ProductComposition = ({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) => {
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
export default ProductComposition;
